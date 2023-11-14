"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { RiArrowRightSLine, RiFile2Fill, RiFolderFill } from "react-icons/ri";
import * as React from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const SkillsAccordion = () => {
  const accordionRef = useRef(null);

  const [accordion, setAccordion] = React.useState("");

  const programmingRef = useRef(null);
  const frameworksRef = useRef(null);
  const databaseRef = useRef(null);
  const designingRef = useRef(null);

  useEffect(() => {
    gsap.timeline({
      scrollTrigger: {
        start: "top center",
        end: "bottom center",
        scrub: true,
        // toggleActions: "restart pause reverse pause",
        trigger: "#skillContainer",
        onUpdate: (self) => {
          if (self.progress < 0.25 && self.progress > 0.0) {
            setAccordion("programming");
          } else if (self.progress < 0.5 && self.progress > 0.25) {
            setAccordion("frameworks");
          } else if (self.progress < 0.75 && self.progress > 0.5) {
            setAccordion("database");
          } else if (self.progress < 1 && self.progress > 0.75) {
            setAccordion("designing");
          }
          console.log(
            "progress:",
            self.progress.toFixed(3),
            "direction:",
            self.direction,
            "velocity",
            self.getVelocity(),
          );
        },
      },
    });
    // gsap.from(frameworksRef.current, {
    //   scrollTrigger: {
    //     start : "top bottom",
    //     end : " +=300",
    //     trigger: "#frameworkStart",
    //     endTrigger: "#frameworkEnd",
    //     onToggle: (self) => {
    //       self.isActive ? setAccordion("framework") : setAccordion("");
    //     },
    //     onUpdate: (self) => {
    //       console.log(
    //           "progress:",
    //           self.progress.toFixed(3),
    //           "direction:",
    //           self.direction,
    //           "velocity",
    //           self.getVelocity()
    //       );
    //     },
    //   },
    // });
    // gsap.from(databaseRef.current, {
    //   scrollTrigger: {
    //     start : "+=100",
    //     end : " +=200",
    //     trigger: "#databaseStart",
    //     endTrigger: "#databaseEnd",
    //     onToggle: (self) => {
    //       self.isActive ? setAccordion("database") : setAccordion("");
    //     },
    //     onUpdate: (self) => {
    //       console.log(
    //           "progress:",
    //           self.progress.toFixed(3),
    //           "direction:",
    //           self.direction,
    //           "velocity",
    //           self.getVelocity()
    //       );
    //     },
    //   },
    // });
    // gsap.from(designingRef.current, {
    //   scrollTrigger: {
    //     start : "top top",
    //     end : " +=100",
    //     trigger: "#designingStart",
    //     endTrigger: "#designingEnd",
    //     onToggle: (self) => {
    //       self.isActive ? setAccordion("designing") : setAccordion("");
    //     },
    //     onUpdate: (self) => {
    //       console.log(
    //           "progress:",
    //           self.progress.toFixed(3),
    //           "direction:",
    //           self.direction,
    //           "velocity",
    //           self.getVelocity()
    //       );
    //     },
    //   },
    // });
  }, []);
  return (
    <>
      <Accordion
        id={"accordion"}
        type="single"
        collapsible
        className={"w-full"}
        ref={accordionRef}
        value={accordion}
        onValueChange={setAccordion}
      >
        <AccordionItem ref={programmingRef} value="programming">
          <AccordionTrigger
            className={
              "font-robotoMono my-2 flex w-full flex-row items-center justify-start gap-2 rounded-xl border-2 border-purple bg-violet-dark p-2"
            }
          >
            <RiArrowRightSLine className={"text-white"} />
            <div className={"flex flex-row items-center justify-center gap-5"}>
              <RiFolderFill className={"text-2xl text-purple"} />
              <span className={"text-md text-white"}>
                Programming Languages
              </span>
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <div
              className={
                "mx-5 my-2 grid w-full grid-cols-2 gap-x-2 gap-y-4 text-xl md:mx-20 md:gap-x-10"
              }
            >
              <span className={"col-span-1 flex flex-row items-center gap-2"}>
                <RiFile2Fill className={"text-2xl text-purple"} /> Python
              </span>
              <span className={"col-span-1 flex flex-row items-center gap-2"}>
                <RiFile2Fill className={"text-2xl text-purple"} /> JavaScript
              </span>
              <span className={"col-span-1 flex flex-row items-center gap-2"}>
                <RiFile2Fill className={"text-2xl text-purple"} /> TypeScript
              </span>
              <span className={"col-span-1 flex flex-row items-center gap-2"}>
                <RiFile2Fill className={"text-2xl text-purple"} /> C
              </span>
              <span className={"col-span-1 flex flex-row items-center gap-2"}>
                <RiFile2Fill className={"text-2xl text-purple"} /> C++
              </span>
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem ref={frameworksRef} value="frameworks">
          <AccordionTrigger
            className={
              "font-robotoMono my-2 flex w-full flex-row items-center justify-start gap-2 rounded-xl border-2 border-purple bg-violet-dark p-2"
            }
          >
            <RiArrowRightSLine className={"text-white"} />
            <div className={"flex flex-row items-center justify-center gap-5"}>
              <RiFolderFill className={"text-2xl text-purple"} />
              <span className={"text-md text-white"}>Frameworks</span>
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <div
              className={
                "mx-5 my-2 grid w-full grid-cols-2 gap-x-2 gap-y-4 text-xl md:mx-20 md:gap-x-10"
              }
            >
              <span className={"col-span-1 flex flex-row items-center gap-2"}>
                <RiFile2Fill className={"text-2xl text-purple"} /> NextJs
              </span>
              <span className={"col-span-1 flex flex-row items-center gap-2"}>
                <RiFile2Fill className={"text-2xl text-purple"} /> ReactJs
              </span>
              <span className={"col-span-1 flex flex-row items-center gap-2"}>
                <RiFile2Fill className={"text-2xl text-purple"} /> Express
              </span>
              <span className={"col-span-1 flex flex-row items-center gap-2"}>
                <RiFile2Fill className={"text-2xl text-purple"} /> Tailwind CSS
              </span>
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem ref={databaseRef} value="database">
          <AccordionTrigger
            className={
              "font-robotoMono my-2 flex w-full flex-row items-center justify-start gap-2 rounded-xl border-2 border-purple bg-violet-dark p-2"
            }
          >
            <RiArrowRightSLine className={"text-white"} />
            <div className={"flex flex-row items-center justify-center gap-5"}>
              <RiFolderFill className={"text-2xl text-purple"} />
              <span className={"text-md text-white"}>Database</span>
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <div
              className={
                "mx-5 my-2 grid w-full grid-cols-2 gap-x-2 gap-y-4 text-xl md:mx-20 md:gap-x-10"
              }
            >
              <span className={"col-span-1 flex flex-row items-center gap-2"}>
                <RiFile2Fill className={"text-2xl text-purple"} /> MongoDB
              </span>
              <span className={"col-span-1 flex flex-row items-center gap-2"}>
                <RiFile2Fill className={"text-2xl text-purple"} /> SQLite
              </span>
              <span className={"col-span-1 flex flex-row items-center gap-2"}>
                <RiFile2Fill className={"text-2xl text-purple"} /> PostgreSQL
              </span>
              <span className={"col-span-1 flex flex-row items-center gap-2"}>
                <RiFile2Fill className={"text-2xl text-purple"} /> FireStore
              </span>
              <span className={"col-span-1 flex flex-row items-center gap-2"}>
                <RiFile2Fill className={"text-2xl text-purple"} /> MySQL
              </span>
              <span className={"col-span-1 flex flex-row items-center gap-2"}>
                <RiFile2Fill className={"text-2xl text-purple"} /> Realtime DB
              </span>
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem ref={designingRef} value="designing">
          <AccordionTrigger
            className={
              "font-robotoMono my-2 flex w-full flex-row items-center justify-start gap-2 rounded-xl border-2 border-purple bg-violet-dark p-2"
            }
          >
            <RiArrowRightSLine className={"text-white"} />
            <div className={"flex flex-row items-center justify-center gap-5"}>
              <RiFolderFill className={"text-2xl text-purple"} />
              <span className={"text-md text-white"}>Designing</span>
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <div
              className={
                "mx-5 my-2 grid w-full grid-cols-2 gap-x-2 gap-y-4 text-xl md:mx-20 md:gap-x-10"
              }
            >
              <span className={"col-span-1 flex flex-row items-center gap-2"}>
                <RiFile2Fill className={"text-2xl text-purple"} /> Figma
              </span>
              <span className={"col-span-1 flex flex-row items-center gap-2"}>
                <RiFile2Fill className={"text-2xl text-purple"} /> Photoshop
              </span>
              <span className={"col-span-1 flex flex-row items-center gap-2"}>
                <RiFile2Fill className={"text-2xl text-purple"} /> Illustrator
              </span>
              <span className={"col-span-1 flex flex-row items-center gap-2"}>
                <RiFile2Fill className={"text-2xl text-purple"} /> InDesign
              </span>
              <span className={"col-span-1 flex flex-row items-center gap-2"}>
                <RiFile2Fill className={"text-2xl text-purple"} /> MsPaint
              </span>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <div id={"endAccordion"}></div>
    </>
  );
};

export default SkillsAccordion;
