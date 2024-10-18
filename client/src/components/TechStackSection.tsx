import React from "../assets/tech/react.png";
import Node from "../assets/tech/node.png";
import Js from "../assets/tech/javascript.png";
import Ts from "../assets/tech/ts.png";
import Github from "../assets/tech/github.png";
import Git from "../assets/tech/git.png";
import Next from "../assets/tech/nextjs.png";
import Tailwind from "../assets/tech/tailwind.png";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";

const images = [
  {
    id: 1001,
    text: "JavaScript",
    url: Js,
  },
  {
    id: 1002,
    text: "TypeScript",
    url: Ts,
  },
  {
    id: 1003,
    text: "React",
    url: React,
  },
  {
    id: 1004,
    text: "Node",
    url: Node,
  },
  {
    id: 1005,
    text: "Next js",
    url: Next,
  },
  {
    id: 1006,
    text: "Tailwind css",
    url: Tailwind,
  },
  {
    id: 1007,
    text: "Git",
    url: Git,
  },
  {
    id: 1008,
    text: "Github",
    url: Github,
  },
];

const TechStackSection = () => {
  gsap.registerPlugin(useGSAP, ScrollTrigger);
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const elementRef = useRef<(HTMLDivElement | null)[]>([]);
  const techStackSectionRef = useRef<HTMLDivElement|null>(null)


  useGSAP(() => {
    /* Scroll Trigger animation */
    const techStackSectionScrollTrigger = gsap.timeline({
        scrollTrigger:{
            trigger:techStackSectionRef.current,
            start:'top bottom',
            toggleActions:'restart none restart none'
        } 
    })

    techStackSectionScrollTrigger.from(titleRef.current,{
        opacity:0,
        stagger:0.2,
        duration:1,
        delay:0.2
    })

    elementRef.current.forEach((ref) => {
        if (ref) {
          techStackSectionScrollTrigger.from(ref, {
            y: 30,
            opacity: 0,
            stagger: 0.1,
            duration:0.3
        });
        }
      });
  });

  return (
    <section className="bg-customAboutBackground text-white flex items-center justify-center py-10" ref={techStackSectionRef}>
      <div className="flex flex-col justify-center items-center md:items-start max-w-[1220px] min-h-screen w-full gap-3 md:gap-6 p-6 py-[1rem]  mt-[1rem] md:mt-0 md:py-[3rem] ">
        <h1
          className="p-[3rem] text-2xl md:text-5xl font-bold bg-clip-text text-transparent bg-customTagColor"
          ref={titleRef}
        >
          Tech Stack
        </h1>
        <div className="grid grid-cols-2 md:grid-cols-4  gap-8 p-0 md:py-[1rem] md:px-[3rem] md:mx-auto justify-center items-center ">
          {images.map((item) => (
            <div
              ref={(el) => (elementRef.current[item.id] = el)}
              key={item.id}
              className="flex flex-col justify-center items-center  h-[170px]  px-[2rem] md:px-[4rem]  md:py-[7rem] bg-customProjectBackground rounded-2xl md:rounded-3xl gap-5"
            >
              <div
                className={`flex items-center justify-center w-[70px] h-[70px] md:w-[100px] md:h-[100px] ${
                  item.text === "Next js"
                    ? `bg-white rounded-[50%] border border-white`
                    : ""
                }`}
              >
                <img src={item.url} alt={item.text} />
              </div>
              <span className="text-sm md:texl-lg">{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;
