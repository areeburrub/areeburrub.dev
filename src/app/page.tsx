import Image from 'next/image'
import {
  RiArrowRightSLine, RiFile2Fill,
  RiFolderFill,
  RiGithubFill,
  RiLinkedinFill,
  RiTwitterFill
} from "react-icons/ri";
import Link from "next/link";
import Marquee from "react-fast-marquee";

import { Roboto_Mono } from 'next/font/google'
const roboto = Roboto_Mono({
  weight: ['400'],
  subsets: ['greek'],
})

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import {cn} from "@/lib/utils";
import ProjectCard from "@/components/project-card";



export default function Home() {
  return (
    <main className="flex text-xl min-h-screen flex-col items-center gap-10 pb-10">

      <div className={"container grid grid-cols-12 w-full  mt-10 gap-5"}>
        <div className={"col-span-12 md:col-span-6 w-full flex flex-col items-start justify-center gap-2"}>
          <h3 className={roboto.className + " text-purple text-2xl"}>Hi I am Areeb ur Rub</h3>
          <h1 className={'text-5xl font-semibold leading-tight'}>
            Full Stack Developer and <br/>
            Graphic Designer
          </h1>
          <p className={"text-md font-normal"}>
            Passionate web developer and graphic designer learning web3 with Solidity. Passionate about creating intuitive and user-friendly experiences and bringing visual designs to life.
          </p>
          <div className={"flex-row gap-2 text-3xl mt-6 flex"}>
            <Link href={"#"}>
              <RiGithubFill/>
            </Link>
            <Link href={"#"}>
              <RiLinkedinFill/>
            </Link>
            <Link href={"#"}>
              <RiTwitterFill/>
            </Link>
          </div>
        </div>
        <div className={"col-span-12 md:col-span-6 w-full flex flex-col items-center justify-center"}>
          <div className={"bg-gray-800 w-full h-full bg-opacity-50 "}>
            <img alt={"Areeb ur Rub"} src={'/hero.JPEG'} className={' w-full max-h-[60vh] object-cover'}/>
          </div>
        </div>
      </div>

      <div className={'w-full h-[14rem] mt-2 md:mt-16 overflow-hidden'}>
      <div className={'w-full flex flex-col justify-center bg-violet mt-16'}>
        <div className={'w-full bg-violet-dark py-5 border-b-2 border-t-2 border-sky2 -rotate-3'}>
          <Marquee>
            <div className={"w-full flex-row flex justify-evenly items-center gap-5 px-2.5"}>
              <span className={roboto.className + " font-normal text-md"}>CSS</span>
              <div className={'w-2 h-2 rounded-full bg-sky'}></div>
              <span className={roboto.className + " font-normal text-md"}>JavaScript</span>
              <div className={'w-2 h-2 rounded-full bg-sky'}></div>
              <span className={roboto.className + " font-normal text-md"}>TypeScript</span>
              <div className={'w-2 h-2 rounded-full bg-sky'}></div>
              <span className={roboto.className + " font-normal text-md"}>Python</span>
              <div className={'w-2 h-2 rounded-full bg-sky'}></div>
              <span className={roboto.className + " font-normal text-md"}>Node.js</span>
              <div className={'w-2 h-2 rounded-full bg-sky'}></div>
              <span className={roboto.className + " font-normal text-md"}>React.js</span>
              <div className={'w-2 h-2 rounded-full bg-sky'}></div>
              <span className={roboto.className + " font-normal text-md"}>Tailwind CSS</span>
              <div className={'w-2 h-2 rounded-full bg-sky'}></div>
              <span className={roboto.className + " font-normal text-md"}>Next.js</span>
              <div className={'w-2 h-2 rounded-full bg-sky'}></div>
              <span className={roboto.className + " font-normal text-md"}>Flask</span>
              <div className={'w-2 h-2 rounded-full bg-sky'}></div>
              <span className={roboto.className + " font-normal text-md"}>C</span>
              <div className={'w-2 h-2 rounded-full bg-sky'}></div>
              <span className={roboto.className + " font-normal text-md"}>C++</span>
              <div className={'w-2 h-2 rounded-full bg-sky'}></div>
              <span className={roboto.className + " font-normal text-md"}>Figma</span>
              <div className={'w-2 h-2 rounded-full bg-sky'}></div>
              <span className={roboto.className + " font-normal text-md"}>Illustrator</span>
              <div className={'w-2 h-2 rounded-full bg-sky'}></div>
              <span className={roboto.className + " font-normal text-md"}>HTML</span>
              <div className={'w-2 h-2 rounded-full bg-sky'}></div>
              <span className={roboto.className + " font-normal text-md"}>C</span>
              <div className={'w-2 h-2 rounded-full bg-sky'}></div>
              <span className={roboto.className + " font-normal text-md"}>C++</span>
              <div className={'w-2 h-2 rounded-full bg-sky'}></div>
              <span className={roboto.className + " font-normal text-md"}>Figma</span>
              <div className={'w-2 h-2 rounded-full bg-sky'}></div>
              <span className={roboto.className + " font-normal text-md"}>Illustrator</span>
              <div className={'w-2 h-2 rounded-full bg-sky'}></div>
              <span className={roboto.className + " font-normal text-md"}>HTML</span>
              <div className={'w-2 h-2 rounded-full bg-sky'}></div>
            </div>
          </Marquee>
        </div>
      </div>
      </div>

      <div className={"container grid grid-cols-12 w-full md:mt-10"}>
        <div className={"col-span-12 md:col-span-6 w-full flex flex-col items-start justify-center gap-2"}>
          <h3 className={roboto.className + " text-purple text-2xl"}>About Me</h3>
          <h1 className={'text-5xl font-semibold leading-tight'}>
            I am a Computer <br/>Science Undergrad
          </h1>
          <p className={"text-md font-normal mr-auto md:mr-10"}>
            I am passionate about learning and leveraging technology. I have honed my skills in creating websites and applications using React, Next JS, Flask, and Tailwind CSS. Currently, I&apos;m delving into the exciting realms of web3 and Solidity for decentralized app development, while also nurturing my interests in machine learning and Android.
          </p>
        </div>
        <div className={"col-span-12 md:col-span-6 w-full flex flex-col items-center justify-center"}>
          <Accordion type="single" collapsible className={'w-full'}>
            <AccordionItem value="item-1">
              <AccordionTrigger className={roboto.className + " my-2 bg-violet-dark border-2 rounded-xl flex flex-row items-center justify-start p-2 gap-2 border-purple w-full"}>
                  <RiArrowRightSLine className={'text-white'}/>
                  <div className={'flex flex-row items-center justify-center gap-5'}>
                    <RiFolderFill className={'text-purple text-2xl'}/>
                    <span className={'text-white text-md'}>Programming Languages</span>
                  </div>

              </AccordionTrigger>
              <AccordionContent>
                <div className={'w-full grid grid-cols-2 gap-x-2 md:gap-x-10 gap-y-4 text-xl mx-5 md:mx-20 my-2'}>
                  <span className={'col-span-1 flex flex-row items-center gap-2'}>
                    <RiFile2Fill className={'text-purple text-2xl'}/> Python
                  </span>
                  <span className={'col-span-1 flex flex-row items-center gap-2'}>
                    <RiFile2Fill className={'text-purple text-2xl'}/> JavaScript
                  </span>
                  <span className={'col-span-1 flex flex-row items-center gap-2'}>
                    <RiFile2Fill className={'text-purple text-2xl'}/> TypeScript
                  </span>
                  <span className={'col-span-1 flex flex-row items-center gap-2'}>
                    <RiFile2Fill className={'text-purple text-2xl'}/> C
                  </span>
                  <span className={'col-span-1 flex flex-row items-center gap-2'}>
                    <RiFile2Fill className={'text-purple text-2xl'}/> C++
                  </span>
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className={roboto.className + " my-2 bg-violet-dark border-2 rounded-xl flex flex-row items-center justify-start p-2 gap-2 border-purple w-full"}>
                  <RiArrowRightSLine className={'text-white'}/>
                  <div className={'flex flex-row items-center justify-center gap-5'}>
                    <RiFolderFill className={'text-purple text-2xl'}/>
                    <span className={'text-white text-md'}>Frameworks</span>
                  </div>

              </AccordionTrigger>
              <AccordionContent>
                <div className={'w-full grid grid-cols-2 gap-x-2 md:gap-x-10 gap-y-4 text-xl mx-5 md:mx-20 my-2'}>
                  <span className={'col-span-1 flex flex-row items-center gap-2'}>
                    <RiFile2Fill className={'text-purple text-2xl'}/> NextJs
                  </span>
                  <span className={'col-span-1 flex flex-row items-center gap-2'}>
                    <RiFile2Fill className={'text-purple text-2xl'}/> ReactJs
                  </span>
                  <span className={'col-span-1 flex flex-row items-center gap-2'}>
                    <RiFile2Fill className={'text-purple text-2xl'}/> Express
                  </span>
                  <span className={'col-span-1 flex flex-row items-center gap-2'}>
                    <RiFile2Fill className={'text-purple text-2xl'}/> Tailwind CSS
                  </span>
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className={roboto.className + " my-2 bg-violet-dark border-2 rounded-xl flex flex-row items-center justify-start p-2 gap-2 border-purple w-full"}>
                  <RiArrowRightSLine className={'text-white'}/>
                  <div className={'flex flex-row items-center justify-center gap-5'}>
                    <RiFolderFill className={'text-purple text-2xl'}/>
                    <span className={'text-white text-md'}>Database</span>
                  </div>

              </AccordionTrigger>
              <AccordionContent>
                <div className={'w-full grid grid-cols-2 gap-x-2 md:gap-x-10 gap-y-4 text-xl mx-5 md:mx-20 my-2'}>
                  <span className={'col-span-1 flex flex-row items-center gap-2'}>
                    <RiFile2Fill className={'text-purple text-2xl'}/> MongoDB
                  </span>
                  <span className={'col-span-1 flex flex-row items-center gap-2'}>
                    <RiFile2Fill className={'text-purple text-2xl'}/> SQLite
                  </span>
                  <span className={'col-span-1 flex flex-row items-center gap-2'}>
                    <RiFile2Fill className={'text-purple text-2xl'}/> PostgreSQL
                  </span>
                  <span className={'col-span-1 flex flex-row items-center gap-2'}>
                    <RiFile2Fill className={'text-purple text-2xl'}/> FireStore
                  </span>
                  <span className={'col-span-1 flex flex-row items-center gap-2'}>
                    <RiFile2Fill className={'text-purple text-2xl'}/> MySQL
                  </span>
                  <span className={'col-span-1 flex flex-row items-center gap-2'}>
                    <RiFile2Fill className={'text-purple text-2xl'}/> Realtime DB
                  </span>
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger className={roboto.className + " my-2 bg-violet-dark border-2 rounded-xl flex flex-row items-center justify-start p-2 gap-2 border-purple w-full"}>
                  <RiArrowRightSLine className={'text-white'}/>
                  <div className={'flex flex-row items-center justify-center gap-5'}>
                    <RiFolderFill className={'text-purple text-2xl'}/>
                    <span className={'text-white text-md'}>Designing</span>
                  </div>

              </AccordionTrigger>
              <AccordionContent>
                <div className={'w-full grid grid-cols-2 gap-x-2 md:gap-x-10 gap-y-4 text-xl mx-5 md:mx-20 my-2'}>
                  <span className={'col-span-1 flex flex-row items-center gap-2'}>
                    <RiFile2Fill className={'text-purple text-2xl'}/> Figma
                  </span>
                  <span className={'col-span-1 flex flex-row items-center gap-2'}>
                    <RiFile2Fill className={'text-purple text-2xl'}/> Photoshop
                  </span>
                  <span className={'col-span-1 flex flex-row items-center gap-2'}>
                    <RiFile2Fill className={'text-purple text-2xl'}/> Illustrator
                  </span>
                  <span className={'col-span-1 flex flex-row items-center gap-2'}>
                    <RiFile2Fill className={'text-purple text-2xl'}/> InDesign
                  </span>
                  <span className={'col-span-1 flex flex-row items-center gap-2'}>
                    <RiFile2Fill className={'text-purple text-2xl'}/> MsPaint
                  </span>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>

        </div>
      </div>

      {/*
        Projects Section Start Here
      */}

      <Marquee>
        <div className={"w-full flex-row flex justify-evenly items-center gap-8 px-2.5 mt-20 mb-8"}>
        <span className={'text-5xl font-semibold leading-tight uppercase'}>
          Latest&nbsp;Work
        </span>
        <span className={'text-5xl font-semibold leading-tight uppercase text-fill-transparent text-stroke-purple text-stroke-2'}>
          projects
        </span>
        <span className={'text-5xl font-semibold leading-tight uppercase'}>
          Latest&nbsp;Work
        </span>
        <span className={'text-5xl font-semibold leading-tight uppercase text-fill-transparent text-stroke-purple text-stroke-2'}>
          projects
        </span>
        <span className={'text-5xl font-semibold leading-tight uppercase'}>
          Latest&nbsp;Work
        </span>
        <span className={'text-5xl font-semibold leading-tight uppercase text-fill-transparent text-stroke-purple text-stroke-2'}>
          projects
        </span>
        <span className={'text-5xl font-semibold leading-tight uppercase'}>
          Latest&nbsp;Work
        </span>
        <span className={'text-5xl font-semibold leading-tight uppercase text-fill-transparent text-stroke-purple text-stroke-2'}>
          projects
        </span>
        <span className={'text-5xl font-semibold leading-tight uppercase'}>
          Latest&nbsp;Work
        </span>
        <span className={'text-5xl font-semibold leading-tight uppercase text-fill-transparent text-stroke-purple text-stroke-2'}>
          projects
        </span>
        <span className={'text-5xl font-semibold leading-tight uppercase'}>
          Latest&nbsp;Work
        </span>
        <span className={'text-5xl font-semibold leading-tight uppercase text-fill-transparent text-stroke-purple text-stroke-2'}>
          projects
        </span>
      </div>
      </Marquee>
      <div className={'container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full'}>
          <ProjectCard project={{
            title: "When Where What",
            description: "When Where What is a web app that allows you to share a single link to users and support all calendars. It is a simple and easy to use web app that allows you to create events and share them with your friends and family.",
            image: "/project/wh3-cover-img.jpg",
            url: "https://wh3.link/",
            tags: ["Tailwind", "Next Js", "Mongo DB"]
          }}/>
          <ProjectCard project={{
            title: "When Where What",
            description: "When Where What is a web app that allows you to share a single link to users and support all calendars. It is a simple and easy to use web app that allows you to create events and share them with your friends and family.",
            image: "/project/wh3-cover-img.jpg",
            url: "https://wh3.link/",
            tags: ["Tailwind", "Next Js", "Mongo DB"]
          }}/>
          <ProjectCard project={{
            title: "When Where What",
            description: "When Where What is a web app that allows you to share a single link to users and support all calendars. It is a simple and easy to use web app that allows you to create events and share them with your friends and family.",
            image: "/project/wh3-cover-img.jpg",
            url: "https://wh3.link/",
            tags: ["Tailwind", "Next Js", "Mongo DB"]
          }}/>
      </div>

    </main>
  )
}
