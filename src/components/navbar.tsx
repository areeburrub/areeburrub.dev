"use client";
import * as React from "react";
import { RiMenu3Line } from "react-icons/ri";
export function Navbar() {
  const [mobileNavOpen, setMobileNavOpen] = React.useState(false);
  const genericHamburgerLine = `h-1 w-6 my-1 rounded-full bg-black transition ease transform duration-300`;

  return (
    <div
      className={
        "container flex flex-row flex-wrap items-center justify-between py-8"
      }
    >
      <div className={"flex flex-row items-end"} aria-details={"Logo"}>
        <span
          className={
            "bg-gradient-to-r from-purple to-sky bg-clip-text text-4xl font-extrabold text-transparent"
          }
        >
          Areeb ur Rub
        </span>
      </div>

      <span className={"visible md:hidden"}>
        <RiMenu3Line
          className={"cursor-pointer text-3xl"}
          onClick={() => {
            setMobileNavOpen((prevState) => !prevState);
          }}
        />
      </span>

      <div
        className={`mt-5 md:mt-auto ${
          mobileNavOpen ? "h-0" : "h-44"
        } flex w-full flex-col items-center gap-4 overflow-hidden transition-all duration-500 ease-in-out md:h-auto md:w-auto md:flex-row md:gap-10`}
      >
        <a href={"/"}>Home</a>
        <a href={"#"}>Work</a>
        <a href={"#"}>Project</a>
        <a
          href={"#contact"}
          className={
            "rounded-full border-2 border-sky bg-violet-dark px-5 py-2 text-sky hover:border-transparent hover:bg-sky hover:text-violet"
          }
        >
          Contact
        </a>
      </div>
    </div>
  );
}
