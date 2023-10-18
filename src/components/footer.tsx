// @flow
import * as React from 'react';
import {
  RiGithubFill,
  RiLinkedinFill,
  RiTwitterFill,
  RiInstagramFill
} from "react-icons/ri";
import {HiDocumentDownload} from "react-icons/hi";
import Link from "next/link";
import Marquee from "react-fast-marquee";

import { Roboto_Mono } from 'next/font/google'
const roboto = Roboto_Mono({
  weight: ['400'],
  subsets: ['greek'],
})
export function Footer() {
  return (
    <>
      <div className={'w-full h-[14rem] mt-2 md:mt-16 overflow-hidden'}>
        <div className={'w-full flex flex-col justify-center bg-violet mt-16'}>
          <div className={'w-full bg-violet-dark py-5 border-b-2 border-t-2 border-sky2 -rotate-3'}>
            <Marquee>
              <div className={"w-full flex-row flex justify-evenly items-center gap-5 px-2.5"}>
                <span className={roboto.className + " font-normal text-md"}>Get in Touch</span>
                <div className={'w-2 h-2 rounded-full bg-sky'}></div>
                <span className={roboto.className + " font-normal text-md"}>Get in Touch</span>
                <div className={'w-2 h-2 rounded-full bg-sky'}></div>
                <span className={roboto.className + " font-normal text-md"}>Get in Touch</span>
                <div className={'w-2 h-2 rounded-full bg-sky'}></div>
                <span className={roboto.className + " font-normal text-md"}>Get in Touch</span>
                <div className={'w-2 h-2 rounded-full bg-sky'}></div>
                <span className={roboto.className + " font-normal text-md"}>Get in Touch</span>
                <div className={'w-2 h-2 rounded-full bg-sky'}></div>
                <span className={roboto.className + " font-normal text-md"}>Get in Touch</span>
                <div className={'w-2 h-2 rounded-full bg-sky'}></div>
                <span className={roboto.className + " font-normal text-md"}>Get in Touch</span>
                <div className={'w-2 h-2 rounded-full bg-sky'}></div>
                <span className={roboto.className + " font-normal text-md"}>Get in Touch</span>
                <div className={'w-2 h-2 rounded-full bg-sky'}></div>
                <span className={roboto.className + " font-normal text-md"}>Get in Touch</span>
                <div className={'w-2 h-2 rounded-full bg-sky'}></div>
                <span className={roboto.className + " font-normal text-md"}>Get in Touch</span>
                <div className={'w-2 h-2 rounded-full bg-sky'}></div>
                <span className={roboto.className + " font-normal text-md"}>Get in Touch</span>
                <div className={'w-2 h-2 rounded-full bg-sky'}></div>
                <span className={roboto.className + " font-normal text-md"}>Get in Touch</span>
                <div className={'w-2 h-2 rounded-full bg-sky'}></div>
                <span className={roboto.className + " font-normal text-md"}>Get in Touch</span>
                <div className={'w-2 h-2 rounded-full bg-sky'}></div>
                <span className={roboto.className + " font-normal text-md"}>Get in Touch</span>
                <div className={'w-2 h-2 rounded-full bg-sky'}></div>
                <span className={roboto.className + " font-normal text-md"}>Get in Touch</span>
                <div className={'w-2 h-2 rounded-full bg-sky'}></div>
                <span className={roboto.className + " font-normal text-md"}>Get in Touch</span>
                <div className={'w-2 h-2 rounded-full bg-sky'}></div>
                <span className={roboto.className + " font-normal text-md"}>Get in Touch</span>
                <div className={'w-2 h-2 rounded-full bg-sky'}></div>
                <span className={roboto.className + " font-normal text-md"}>Get in Touch</span>
                <div className={'w-2 h-2 rounded-full bg-sky'}></div>
                <span className={roboto.className + " font-normal text-md"}>Get in Touch</span>
                <div className={'w-2 h-2 rounded-full bg-sky'}></div>
                <span className={roboto.className + " font-normal text-md"}>Get in Touch</span>
                <div className={'w-2 h-2 rounded-full bg-sky'}></div>
                <span className={roboto.className + " font-normal text-md"}>Get in Touch</span>
                <div className={'w-2 h-2 rounded-full bg-sky'}></div>
                <span className={roboto.className + " font-normal text-md"}>Get in Touch</span>
                <div className={'w-2 h-2 rounded-full bg-sky'}></div>
              </div>
            </Marquee>
          </div>
        </div>
      </div>

      <div className={"container flex flex-col justify-between items-center mx-auto pt-10 gap-3"}>


        <span className={"mx-auto font-extrabold text-4xl text-transparent bg-clip-text bg-gradient-to-r from-purple to-sky"}>Areeb ur Rub</span>
        <p className={"text-md text-center opacity-70 font-normal max-w-lg"}>
          Passionate web developer and graphic designer learning web3 with Solidity. Passionate about creating intuitive and user-friendly experiences and bringing visual designs to life.
        </p>
        <div className={"flex-row items-center justify-between gap-5 px-2 py-4 text-violet-50 opacity-70 flex border-t-2 border-purple w-full mt-5"}>
          <span className={''}>
            © 2023 Areeb ur Rub Portfolio. All Rights Reserved.
          </span>
          <div className={"flex-row items-center gap-5 text-2xl flex"}>
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
      </div>
    </>
  );
}