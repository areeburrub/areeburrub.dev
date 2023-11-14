import * as React from "react";
import {
  RiGithubFill,
  RiLinkedinFill,
  RiTwitterFill,
  RiInstagramFill,
  RiExternalLinkLine,
} from "react-icons/ri";
import { HiDocumentDownload } from "react-icons/hi";
import Link from "next/link";
import Marquee from "react-fast-marquee";

import { Roboto_Mono } from "next/font/google";
import { ContactForm } from "@/app/components/contactForm";
import siteConfig from "@/site.config";

const roboto = Roboto_Mono({
  weight: ["400"],
  subsets: ["greek"],
});

export function Footer() {
  return (
    <>
      <div className={"mt-2 h-[14rem] w-full overflow-hidden md:mt-16"}>
        <div className={"mt-16 flex w-full flex-col justify-center bg-violet"}>
          <div
            className={
              "w-full -rotate-3 border-b-2 border-t-2 border-sky2 bg-violet-dark py-5"
            }
          >
            <Marquee speed={15}>
              <div
                className={
                  "flex w-full flex-row items-center justify-evenly gap-5 px-2.5"
                }
              >
                <span className={roboto.className + " text-md font-normal"}>
                  Get in Touch
                </span>
                <div className={"h-2 w-2 rounded-full bg-sky"}></div>
                <span className={roboto.className + " text-md font-normal"}>
                  Get in Touch
                </span>
                <div className={"h-2 w-2 rounded-full bg-sky"}></div>
                <span className={roboto.className + " text-md font-normal"}>
                  Get in Touch
                </span>
                <div className={"h-2 w-2 rounded-full bg-sky"}></div>
                <span className={roboto.className + " text-md font-normal"}>
                  Get in Touch
                </span>
                <div className={"h-2 w-2 rounded-full bg-sky"}></div>
                <span className={roboto.className + " text-md font-normal"}>
                  Get in Touch
                </span>
                <div className={"h-2 w-2 rounded-full bg-sky"}></div>
                <span className={roboto.className + " text-md font-normal"}>
                  Get in Touch
                </span>
                <div className={"h-2 w-2 rounded-full bg-sky"}></div>
                <span className={roboto.className + " text-md font-normal"}>
                  Get in Touch
                </span>
                <div className={"h-2 w-2 rounded-full bg-sky"}></div>
                <span className={roboto.className + " text-md font-normal"}>
                  Get in Touch
                </span>
                <div className={"h-2 w-2 rounded-full bg-sky"}></div>
                <span className={roboto.className + " text-md font-normal"}>
                  Get in Touch
                </span>
                <div className={"h-2 w-2 rounded-full bg-sky"}></div>
                <span className={roboto.className + " text-md font-normal"}>
                  Get in Touch
                </span>
                <div className={"h-2 w-2 rounded-full bg-sky"}></div>
                <span className={roboto.className + " text-md font-normal"}>
                  Get in Touch
                </span>
                <div className={"h-2 w-2 rounded-full bg-sky"}></div>
                <span className={roboto.className + " text-md font-normal"}>
                  Get in Touch
                </span>
                <div className={"h-2 w-2 rounded-full bg-sky"}></div>
                <span className={roboto.className + " text-md font-normal"}>
                  Get in Touch
                </span>
                <div className={"h-2 w-2 rounded-full bg-sky"}></div>
                <span className={roboto.className + " text-md font-normal"}>
                  Get in Touch
                </span>
                <div className={"h-2 w-2 rounded-full bg-sky"}></div>
                <span className={roboto.className + " text-md font-normal"}>
                  Get in Touch
                </span>
                <div className={"h-2 w-2 rounded-full bg-sky"}></div>
                <span className={roboto.className + " text-md font-normal"}>
                  Get in Touch
                </span>
                <div className={"h-2 w-2 rounded-full bg-sky"}></div>
                <span className={roboto.className + " text-md font-normal"}>
                  Get in Touch
                </span>
                <div className={"h-2 w-2 rounded-full bg-sky"}></div>
                <span className={roboto.className + " text-md font-normal"}>
                  Get in Touch
                </span>
                <div className={"h-2 w-2 rounded-full bg-sky"}></div>
                <span className={roboto.className + " text-md font-normal"}>
                  Get in Touch
                </span>
                <div className={"h-2 w-2 rounded-full bg-sky"}></div>
                <span className={roboto.className + " text-md font-normal"}>
                  Get in Touch
                </span>
                <div className={"h-2 w-2 rounded-full bg-sky"}></div>
                <span className={roboto.className + " text-md font-normal"}>
                  Get in Touch
                </span>
                <div className={"h-2 w-2 rounded-full bg-sky"}></div>
                <span className={roboto.className + " text-md font-normal"}>
                  Get in Touch
                </span>
                <div className={"h-2 w-2 rounded-full bg-sky"}></div>
              </div>
            </Marquee>
          </div>
        </div>
      </div>
      <div
        className={
          "container mx-auto flex w-full flex-col-reverse items-start justify-center gap-5 gap-8 lg:flex-row-reverse"
        }
      >
        <div
          className={
            "container mx-auto flex w-full flex-col items-center justify-center"
          }
        >
          <ContactForm />
        </div>
        <div
          className={
            "container mx-auto flex w-full flex-col items-center justify-center lg:items-start"
          }
        >
          <span
            className={
              "bg-gradient-to-r from-purple to-sky bg-clip-text text-4xl font-extrabold text-transparent"
            }
          >
            Areeb ur Rub
          </span>
          <p
            className={
              "text-md max-w-lg text-center font-normal opacity-70 lg:text-left"
            }
          >
            Passionate web developer and graphic designer learning web3 with
            Solidity. Passionate about creating intuitive and user-friendly
            experiences and bringing visual designs to life.
          </p>
          {/* Add Footer Links */}
          <div
            className={
              "mt-5 flex flex-row items-center justify-center gap-5 text-2xl text-sky2"
            }
          >
            <Link href={siteConfig.social.github} title={"Github"}>
              <RiGithubFill />
            </Link>
            <Link href={siteConfig.social.linkedin} title={"LinkedIn"}>
              <RiLinkedinFill />
            </Link>
            <Link href={siteConfig.social.twitter} title={"Twitter"}>
              <RiTwitterFill />
            </Link>
            <Link href={siteConfig.social.instagram} title={"Instagram"}>
              <RiInstagramFill />
            </Link>
            <Link href={siteConfig.resume} title={"Download Resume"}>
              <HiDocumentDownload />
            </Link>
          </div>
          <div
            className={
              "mt-10 hidden flex-row items-start justify-between lg:flex"
            }
          >
            <div
              className={
                "flex flex-col items-center gap-3 font-extralight lg:items-start"
              }
            >
              <span className={"font-bold text-purple"}>More Links</span>
              <Link
                href={"https://detain-or-not.vercel.app/"}
                className={"hover:underline"}
              >
                Detain or Not (Attendance Tracker)
              </Link>
              <Link
                href={
                  "https://chrome.google.com/webstore/detail/live-chat-for-all-website/jndncpcadllfnlbdlmfdjfachfkjnmki"
                }
                className={"hover:underline"}
              >
                Live Chat Extension
              </Link>
              <Link href={"https://wh3.link"} className={"hover:underline"}>
                When Where What
              </Link>
              <Link
                href={"https://youtube.com/diyareeb"}
                className={"hover:underline"}
              >
                Electronic Projects (YouTube Channel)
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div
        className={
          "container mx-auto flex flex-col items-center justify-between gap-3 pt-10"
        }
      >
        <div
          className={
            "mt-5 flex w-full flex-col items-center justify-between gap-5 border-t-2 border-purple px-2 py-4 text-center text-violet-50 opacity-70 md:flex-row"
          }
        >
          <span className={""}>
            © 2023 Areeb ur Rub Portfolio. All Rights Reserved.
          </span>
          <span className={"flex flex-row"}>
            Built with NextJs and TailwindCSS, Code on &nbsp;
            <Link
              href={"https://github.com/areeburrub/areeburrub.dev"}
              className={"flex flex-row text-purple underline"}
            >
              Github <RiExternalLinkLine />{" "}
            </Link>
            .
          </span>
        </div>
      </div>
    </>
  );
}
