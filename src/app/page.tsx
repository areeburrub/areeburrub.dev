import { RiGithubFill, RiLinkedinFill, RiTwitterFill } from "react-icons/ri";
import { HiDocumentDownload } from "react-icons/hi";
import Link from "next/link";
import Marquee from "react-fast-marquee";

import ProjectCard from "@/components/project-card";
import * as React from "react";
import SkillsAccordion from "@/app/components/skillsAccordion";
import siteConfig from "@/site.config";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-10 pb-10 text-xl">
      <div
        className={
          "container grid w-full grid-cols-12  gap-5 lg:mt-10 lg:gap-16"
        }
      >
        <div
          className={
            "col-span-12 flex w-full flex-col items-center justify-center md:col-span-6"
          }
        >
          <div className={"h-full w-full bg-opacity-50 "}>
            <img
              alt={siteConfig.name}
              src={siteConfig.heroImage}
              className={
                "mx-auto max-h-[70vh] w-auto rounded-lg border-2 border-purple bg-gray-800 object-cover"
              }
            />
          </div>
        </div>
        <div
          className={
            "col-span-12 flex w-full flex-col items-start justify-center gap-2 md:col-span-6"
          }
        >
          <h3 className={"font-robotoMono text-2xl text-purple"}>
            Hi I am Areeb ur Rub
          </h3>
          <h1 className={"text-3xl font-semibold leading-tight md:text-5xl"}>
            Full Stack Developer and <br />
            Graphic Designer
          </h1>
          <p className={"text-md font-normal opacity-70"}>
            Passionate web developer and graphic designer learning web3 with
            Solidity. Passionate about creating intuitive and user-friendly
            experiences and bringing visual designs to life.
          </p>
          <div className={"mt-6 flex flex-row items-center gap-4 text-3xl"}>
            <a
              href={siteConfig.resume}
              target={"__blank"}
              className={
                "mr-2 flex flex-row items-center gap-2 rounded-full border-2 border-sky bg-violet-dark px-5 py-2 text-lg text-sky hover:border-transparent hover:bg-sky hover:text-violet"
              }
            >
              <HiDocumentDownload />
              Download CV
            </a>
            <Link href={siteConfig.social.github}>
              <RiGithubFill />
            </Link>
            <Link href={siteConfig.social.linkedin}>
              <RiLinkedinFill />
            </Link>
            <Link href={siteConfig.social.twitter}>
              <RiTwitterFill />
            </Link>
          </div>
        </div>
      </div>

      <div className={"mt-2 h-[14rem] w-full overflow-hidden md:mt-16"}>
        <div className={"mt-16 flex w-full flex-col justify-center bg-violet"}>
          <div
            className={
              "w-full -rotate-3 border-b-2 border-t-2 border-sky2 bg-violet-dark py-5"
            }
          >
            <Marquee speed={25}>
              <div
                className={
                  "flex w-full flex-row items-center justify-evenly gap-5 px-2.5"
                }
              >
                <span className={"text-md font-robotoMono font-normal"}>
                  CSS
                </span>
                <div className={"h-2 w-2 rounded-full bg-sky"}></div>
                <span className={"text-md font-robotoMono font-normal"}>
                  JavaScript
                </span>
                <div className={"h-2 w-2 rounded-full bg-sky"}></div>
                <span className={"text-md font-robotoMono font-normal"}>
                  TypeScript
                </span>
                <div className={"h-2 w-2 rounded-full bg-sky"}></div>
                <span className={"text-md font-robotoMono font-normal"}>
                  Python
                </span>
                <div className={"h-2 w-2 rounded-full bg-sky"}></div>
                <span className={"text-md font-robotoMono font-normal"}>
                  Node.js
                </span>
                <div className={"h-2 w-2 rounded-full bg-sky"}></div>
                <span className={"text-md font-robotoMono font-normal"}>
                  React.js
                </span>
                <div className={"h-2 w-2 rounded-full bg-sky"}></div>
                <span className={"text-md font-robotoMono font-normal"}>
                  Tailwind CSS
                </span>
                <div className={"h-2 w-2 rounded-full bg-sky"}></div>
                <span className={"text-md font-robotoMono font-normal"}>
                  Next.js
                </span>
                <div className={"h-2 w-2 rounded-full bg-sky"}></div>
                <span className={"text-md font-robotoMono font-normal"}>
                  Flask
                </span>
                <div className={"h-2 w-2 rounded-full bg-sky"}></div>
                <span className={"text-md font-robotoMono font-normal"}>C</span>
                <div className={"h-2 w-2 rounded-full bg-sky"}></div>
                <span className={"text-md font-robotoMono font-normal"}>
                  C++
                </span>
                <div className={"h-2 w-2 rounded-full bg-sky"}></div>
                <span className={"text-md font-robotoMono font-normal"}>
                  Figma
                </span>
                <div className={"h-2 w-2 rounded-full bg-sky"}></div>
                <span className={"text-md font-robotoMono font-normal"}>
                  Illustrator
                </span>
                <div className={"h-2 w-2 rounded-full bg-sky"}></div>
                <span className={"text-md font-robotoMono font-normal"}>
                  HTML
                </span>
                <div className={"h-2 w-2 rounded-full bg-sky"}></div>
                <span className={"text-md font-robotoMono font-normal"}>C</span>
                <div className={"h-2 w-2 rounded-full bg-sky"}></div>
                <span className={"text-md font-robotoMono font-normal"}>
                  C++
                </span>
                <div className={"h-2 w-2 rounded-full bg-sky"}></div>
                <span className={"text-md font-robotoMono font-normal"}>
                  Figma
                </span>
                <div className={"h-2 w-2 rounded-full bg-sky"}></div>
                <span className={"text-md font-robotoMono font-normal"}>
                  Illustrator
                </span>
                <div className={"h-2 w-2 rounded-full bg-sky"}></div>
                <span className={"text-md font-robotoMono font-normal"}>
                  HTML
                </span>
                <div className={"h-2 w-2 rounded-full bg-sky"}></div>
              </div>
            </Marquee>
          </div>
        </div>
      </div>

      <div className={"container grid w-full grid-cols-12 md:mt-10"}>
        <div
          className={
            "col-span-12 flex w-full flex-col items-start justify-center gap-2 md:col-span-6"
          }
        >
          <h3 className={"font-robotoMono text-2xl text-purple"}>About Me</h3>
          <h1 className={"text-5xl font-semibold leading-tight"}>
            I am a Computer <br />
            Science Undergrad
          </h1>
          <p className={"text-md mr-auto font-normal md:mr-10"}>
            I am passionate about learning and leveraging technology. I have
            honed my skills in creating websites and applications using React,
            Next JS, Flask, and Tailwind CSS. Currently, I&apos;m delving into
            the exciting realms of web3 and Solidity for decentralized app
            development, while also nurturing my interests in machine learning
            and Android.
          </p>
        </div>
        <div
          className={
            "col-span-12 flex w-full flex-col items-center justify-center md:col-span-6"
          }
        >
          <SkillsAccordion />
        </div>
      </div>

      {/*
        Projects Section Start Here
      */}

      <Marquee speed={20}>
        <div
          className={
            "mb-8 mt-20 flex w-full flex-row items-center justify-evenly gap-8 px-2.5"
          }
        >
          <span className={"text-5xl font-semibold uppercase leading-tight"}>
            Latest&nbsp;Work
          </span>
          <span
            className={
              "text-5xl font-semibold uppercase leading-tight text-fill-transparent text-stroke-purple text-stroke-2"
            }
          >
            projects
          </span>
          <span className={"text-5xl font-semibold uppercase leading-tight"}>
            Latest&nbsp;Work
          </span>
          <span
            className={
              "text-5xl font-semibold uppercase leading-tight text-fill-transparent text-stroke-purple text-stroke-2"
            }
          >
            projects
          </span>
          <span className={"text-5xl font-semibold uppercase leading-tight"}>
            Latest&nbsp;Work
          </span>
          <span
            className={
              "text-5xl font-semibold uppercase leading-tight text-fill-transparent text-stroke-purple text-stroke-2"
            }
          >
            projects
          </span>
          <span className={"text-5xl font-semibold uppercase leading-tight"}>
            Latest&nbsp;Work
          </span>
          <span
            className={
              "text-5xl font-semibold uppercase leading-tight text-fill-transparent text-stroke-purple text-stroke-2"
            }
          >
            projects
          </span>
          <span className={"text-5xl font-semibold uppercase leading-tight"}>
            Latest&nbsp;Work
          </span>
          <span
            className={
              "text-5xl font-semibold uppercase leading-tight text-fill-transparent text-stroke-purple text-stroke-2"
            }
          >
            projects
          </span>
          <span className={"text-5xl font-semibold uppercase leading-tight"}>
            Latest&nbsp;Work
          </span>
          <span
            className={
              "text-5xl font-semibold uppercase leading-tight text-fill-transparent text-stroke-purple text-stroke-2"
            }
          >
            projects
          </span>
        </div>
      </Marquee>
      <div
        className={
          "container grid w-full grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
        }
      >
        <ProjectCard
          project={{
            title: "AI JSON Generator",
            description:
              "AI JSON Generator is a web app that allows you to generate JSON data for your projects.It uses OpenAI's GPT-3 to generate JSON data based on your inputs.",
            image: "/project/ai-json-generator.png",
            url: "https://wh3.link/",
            tags: ["Tailwind", "Next Js", "Mongo DB"],
          }}
        />
        <ProjectCard
          project={{
            title: "When Where What",
            description:
              "When Where What is a web app that allows you to share a single link to users and support all calendars. It is a simple and easy to use web app that allows you to create events and share them with your friends and family.",
            image: "/project/wh3-cover-img.jpg",
            url: "https://wh3.link/",
            tags: ["Tailwind", "Next Js", "Mongo DB"],
          }}
        />
        <ProjectCard
          project={{
            title: "Live Chat Extension",
            description:
              "Live Chat is a Chrome Extension that enable a user to chat with other people on same website it uses Chrome Extension API to check the URL of the website and matches them with each other.",
            image: "/project/live-ext.webp",
            url: "https://wh3.link/",
            tags: ["Firebase", "Chrome Extension", "Figma"],
          }}
        />
      </div>
    </main>
  );
}
