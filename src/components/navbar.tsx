// @flow
import * as React from 'react';

export function Navbar() {
  return (
    <div className={"container flex flex-row justify-between py-8"}>
      <div className={"flex flex-row items-end"} aria-details={"Logo"}>
        <span className={"font-extrabold text-4xl text-transparent bg-clip-text bg-gradient-to-r from-purple to-sky"}>Areeb ur Rub</span>
      </div>

      <div className={"hidden md:flex flex-row items-center gap-10"}>
        <a href={"#"}>Home</a>
        <a href={"#"}>Work</a>
        <a href={"#"}>Project</a>
        <a href={"#"} className={'px-5 py-2 bg-violet-dark rounded-full border-2 border-sky text-sky hover:border-transparent hover:bg-sky hover:text-violet'}>
          Contact
        </a>
      </div>
    </div>
  );
};