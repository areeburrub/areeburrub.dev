import { NextResponse } from "next/server";
import { Resend } from "resend";
import { ContactEmail } from "@/components/email/ContactEmail";
import siteConfig from "@/site.config";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { captcha } = body;
    console.log(body);
    const url = "https://challenges.cloudflare.com/turnstile/v0/siteverify";
    const result = await fetch(url, {
      method: "POST",
      // @ts-ignore
      body: `secret=${encodeURIComponent(
        process.env.SITE_SECRET,
      )}&response=${encodeURIComponent(captcha)}`,
      headers: {
        "content-type": "application/x-www-form-urlencoded",
      },
    });
    const captchaValidation = await result.json();
    if (captchaValidation.success) {
      try {
        const data = await resend.emails.send({
          from: "Areeb ur Rub <contact@areeburrub.dev>",
          to: [body.email],
          bcc: [siteConfig.email],
          subject: `Hi ${body.name}, I received your email - ${siteConfig.name}`,
          text: "Thank you for contacting me, I will get back to you as soon as possible.",
          react: ContactEmail({
            name: body.name,
            message: body.message,
          }),
        });

        console.log(data);
        console.log("Email sent ✅");
        return NextResponse.json({}, { status: 200 });
      } catch (err) {
        console.log({ err });
        return NextResponse.json(
          {},
          {
            status: 400,
            statusText: "Something went wrong, please try again later",
          },
        );
      }
    }
    return NextResponse.json(
      {},
      {
        status: 422,
        statusText: "Unproccesable request, Invalid captcha code",
      },
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error });
  }
}
