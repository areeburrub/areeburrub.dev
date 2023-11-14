"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useRef, useState } from "react";
import { Turnstile } from "@marsidev/react-turnstile";
import { toast } from "sonner";

export const contactFormSchema = z.object({
  name: z.string().min(2).max(50),
  email: z.string().email(),
  message: z.string().min(10).max(500),
});

export function ContactForm() {
  // 1. Define your form.
  const form = useForm<z.infer<typeof contactFormSchema>>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const turnstileRef = useRef(null);
  const [captchaToken, setCaptchaToken] = useState(null);

  function resetCaptcha() {
    if (turnstileRef.current) {
      // @ts-ignore
      turnstileRef.current?.reset();
    }
  }

  function onExpire() {
    setCaptchaToken(null);
    // @ts-ignore
    turnstileRef.current?.reset();
  }

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof contactFormSchema>) {
    console.log({ values, captchaToken });

    if (captchaToken) {
      try {
        const responsePromise = fetch("/api/send", {
          method: "POST",
          body: JSON.stringify({ ...values, captcha: captchaToken }),
          headers: {
            "Content-Type": "application/json",
          },
        });
        toast.promise(responsePromise, {
          loading: "Sending...",
          success: (data) => {
            form.reset();
            return "Message sent successfully";
          },
          error: (error: any) => {
            console.log({ error });
            return "Something went wrong, please try again later";
          },
        });
      } catch (error: any) {
        toast.error(error?.message || "Something went wrong");
      } finally {
        setCaptchaToken(null);
        resetCaptcha();
      }
    } else {
      toast.error("Please verify that you are not a robot");
    }
  }

  return (
    <Form {...form}>
      <form
        id={"contact"}
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-full space-y-2 md:max-w-md"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="Your Name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="hello@example.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Message</FormLabel>
              <FormControl>
                <Textarea
                  className={"h-40"}
                  placeholder="Hey Areeb, I would like to talk about..."
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div
          className={
            "flex flex-col items-start justify-between gap-4 pt-4 md:items-center lg:flex-row"
          }
        >
          <Turnstile
            className={"m-0"}
            ref={turnstileRef}
            siteKey="0x4AAAAAAANArdbq9KukS8b7"
            onSuccess={(token: any) => {
              console.log(token);
              setCaptchaToken(token);
            }}
            // @ts-ignore
            onError={(error: any) => toast.error(error)}
            onExpire={onExpire}
            options={{
              refreshExpired: "auto",
              size: "normal",
            }}
          />
          <Button
            className={
              "rounded-full border-2 border-sky bg-violet-dark px-5 py-2 text-sky hover:border-transparent hover:bg-sky hover:text-violet"
            }
            type="submit"
          >
            Send&nbsp;Message
          </Button>
        </div>
      </form>
    </Form>
  );
}
