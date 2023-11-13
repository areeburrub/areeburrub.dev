import {
  Body,
  Button,
  Container,
  Head,
  Hr,
  Html,
  Link,
  Preview,
  Section,
  Text,
  Tailwind,
} from "@react-email/components";
import z from "zod";
import * as React from "react";

import siteConfig from "@/site.config";

export const TemplateName = "ContactEmail";

export const TemplateStruct = z.object({
  name: z.string().min(2).max(50),
  message: z.string().min(10).max(500),
});

export type TemplateProps = z.infer<typeof TemplateStruct>;
export const ContactEmail = ({ name, message }: TemplateProps) => (
  <Html>
    <Head />
    <Preview>
      Thank you for contacting me {name}, I will get back to you as soon as
      possible.
    </Preview>
    <Tailwind>
      <Body>
        <div className="mx-auto max-w-xl bg-white p-5 ">
          <div className={"mb-4 w-full"}>
            <Link
              className={"h-5 text-gray-500 text-muted"}
              href={siteConfig.websiteURL}
            >
              <img
                className={"h-5"}
                src={siteConfig.logo}
                alt={siteConfig.name}
              />
            </Link>
            <br />
            <Link
              className={"text-gray-500 text-muted"}
              href={siteConfig.social.linkedin}
            >
              Connect on <span className={"font-bold underline"}>LinkedIn</span>
            </Link>
          </div>
          <Hr />
          <div className="mb-4 text-lg">
            <p className="mt-4">
              👋
              <br />
              Hello {name},
              <br />
              Thanks For Contacting Me.
              <br />I got your message
            </p>
            <p className="-ml-2 mt-2 whitespace-pre-wrap rounded bg-gray-50 p-2 text-gray-700 text-muted">
              {message}
            </p>

            <p className="mt-2">
              I will get back to you as soon as possible.
              <br />
            </p>
          </div>
          <Hr />
          <div className={"my-5"}>
            <span>Regards,</span>
            <br />
            <span>{siteConfig.name}</span>
            <br />
            <Link href={siteConfig.websiteURL}>
              {siteConfig.websiteURL.slice(8)}
            </Link>
            <br />
          </div>
        </div>
      </Body>
    </Tailwind>
  </Html>
);
