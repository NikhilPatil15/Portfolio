import Navbar from "./Navbar";
import portfolioIllustration from "../assets/portfolio-illustration.png";
import TypewriterComponent from "typewriter-effect";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";



const HeroSection = () => {
  gsap.registerPlugin(useGSAP, ScrollTrigger);
  const hero = useRef<HTMLElement | null>(null);
  const navbarRef = useRef<HTMLDivElement | null>(null);
  const heroContentRef = useRef<HTMLDivElement | null>(null);
  const heroImageRef = useRef<HTMLDivElement | null>(null);

  useGSAP(() => {

    /* Update the elements as the section is triggered! */
    const heroSection = gsap.timeline({
      scrollTrigger: {
        trigger: hero.current,
        start: "top bottom",
        toggleActions: "play none restart none",
      },
    });

    heroSection.from(navbarRef.current, {
      y: -30,
      opacity: 0,
      ease: "smooth",
      stagger: 0.2,
    });
    heroSection.from(heroContentRef.current, {
      y: 30,
      opacity: 0,
      ease: "smooth",
      stagger: 0.3,
    });
    heroSection.from(heroImageRef.current, {
      x: 30,
      opacity: 0,
    });

    // heroSection.from(heroImageContentRef.current,{
    //   y:'-15px',
    //   repeat:-1,
    //   duration:10,
    //   yoyo:true,
    //   opacity:1,
    //   delay:2
    // })
  });
  return (
    <section
      className="bg-gradient-to-b w-full max-h-screen from-[rgb(8,7,11)] to-[rgb(23,28,35)] text-white relative pt-[2rem] overflow-hidden"
      ref={hero}
    >
      <Navbar ref={navbarRef} />
      <section className="max-w-[1220px] px-[2rem] py-[3rem] mt-5 md:p-[4rem] m-auto flex items-center justify-between gap-[4rem]  md:min-h-screen flex-col md:flex-row">
        <div className="flex-[1.5]" ref={heroContentRef}>
          <h1 className="text-xl md:text-[2.5rem] font-bold leading-relaxed py-[1rem]">
            <span className="block text-xl md:text-3xl">
              Full Stack Developer.
            </span>
            Bringing digital <span className="text-green-500"> ideas </span> to
            life with custom web apps
          </h1>
          <p className="py-[1rem] md:py-[1rem] md:px-0.5 text-gray-300 text-sm md:text-lg">
            <TypewriterComponent
              options={{
                strings: [
                  "I develop full-blown web apps in React and Node.js.",
                  "I continuously learn and adapt to the latest trends in web development.",
                  "I use modern frameworks to build fast, secure, and reliable web applications.",
                ],
                autoStart: true,
                loop: true,
                delay: 50,
              }}
            />
          </p>
        </div>
        <div className="flex-1 relative" ref={heroImageRef}>
          <div className="absolute top-[45%] left-[40%] text-white flex flex-col items-center h-[30px] text-base  md:text-2xl font-semibold">
            <TypewriterComponent
              options={{
                strings: [
                  "React js",
                  "Node js",
                  "Express js",
                  "Mongodb",
                  "Next js",
                ],
                autoStart: true,
                loop: true,
                delay: 50,
              }}
            />
            {/* {heroContentText.map((item,index)=>(
                   <span  ref={heroImageContentRef}>
                            {item}
                    </span>
                ))} */}
          </div>
          <img
            src={portfolioIllustration}
            alt="image"
            className="animate-spin-reverse-slow max-w-[400px] md:max-w-full w-full px-[2rem] md:px-0 md:w-full pb-1 md:pb-0"
          />
        </div>
      </section>
    </section>
  );
};

export default HeroSection;
