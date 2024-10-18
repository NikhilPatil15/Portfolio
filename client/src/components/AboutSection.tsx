import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa6";

const AboutSection = () => {
    const titleRef = useRef<HTMLDivElement|null> (null)
    const cardRef = useRef<HTMLDivElement|null>(null)
    const descriptionRef = useRef<HTMLDivElement|null>(null)
    const aboutSectionRef = useRef<HTMLDivElement|null>(null)

    gsap.registerPlugin(useGSAP, ScrollTrigger);

    useGSAP(()=>{

        const aboutSection = gsap.timeline({
            scrollTrigger:{
              trigger:aboutSectionRef.current,
              start:"top bottom",
              toggleActions:"restart none restart none"
            }    
        })

        aboutSection.from(titleRef.current,{
          opacity:0,
          duration:0.5,
          scale:0,
          ease:"circ.inOut"
        })

        aboutSection.from(cardRef.current,{
          y: 30,
          opacity: 0,
          stagger: 0.1,
          duration:0.5
        })
        aboutSection.from(descriptionRef.current,{
          y: 30,
          opacity: 0,
          stagger: 0.1,
          duration:0.5
        })

    })

  return (
    <section className="bg-customAboutBackground text-white flex items-center justify-center" ref={aboutSectionRef} id="about">
      <div className="flex flex-col justify-center items-center md:items-start max-w-[1220px] min-h-screen w-full gap-3 md:gap-6 p-6 py-[1rem]  mt-[1rem] md:mt-0 md:py-[3rem] ">
        <h2 className="text-4xl font-bold" ref={titleRef}>Profile</h2>
        <div className="flex md:gap-[3rem] md:flex-row flex-col items-center shadow-[0_4px_15px_rgba(255,255,255,0.3)] hover:shadow-[0_6px_20px_rgba(255,255,255,0.5)] transition-shadow duration-300 rounded-3xl">
          <div className=" md:p-4 md:py-[3rem]  p-2 " ref={cardRef}>
            <div className="p-[2rem] md:p-[1rem]">
              <img
                src="https://avatars.githubusercontent.com/u/137986217?s=400&u=87c6fdcfb10a5ef0cf6ce7a7dc08508817261afd&v=4"
                alt="avatar"
                className="rounded-[50%]"
              />
            </div>
            <div>
              <div className="text-center text-4xl">
                <h2>I code.</h2>
              </div>
              <div className="mt-4  md:p-[1rem] p-1">
                <ul className="flex gap-3 items-center justify-center ">
                  <li className="rounded-3xl bg-customTagBackground px-[0.75rem] py-[0.25rem]">
                    Frontend
                  </li>
                  <li className="rounded-3xl bg-customTagBackground px-[0.75rem] py-[0.25rem]">
                    Backend
                  </li>
                  <li className="rounded-3xl bg-customTagBackground px-[0.75rem] py-[0.25rem]">
                    FullStack
                  </li>
                </ul>
              </div>
              <div className="flex gap-3 justify-evenly text-2xl mt-4 mb-4 md:mb-0">
                <a href="https://github.com/NikhilPatil15" target="_blank" className="hover:text-green-500">
                  <span>
                    <FaGithub />
                  </span>
                </a>
                <a href="https://www.linkedin.com/in/nikhil-patil-b10b0126b"  target="_blank" className="hover:text-green-500">
                  <span>
                    <FaLinkedin />
                  </span>
                </a>
                <a href="https://x.com/i_Nikhilpatil15"  target="_blank" className="hover:text-green-500">
                  <span>
                    <FaTwitter />
                  </span>
                </a>
              </div>
            </div>
          </div>
          <div className="p-[2rem] md:p-0 mt-[1rem] md:border-l border-white md:px-[2rem]" ref={descriptionRef}>
            <h1 className="text-3xl text-center md:text-left">
              Hello <span>👋</span>
            </h1>
            <div className="flex flex-wrap flex-col text-base md:text-2xl gap-6 mt-[1rem]">
              <p>
                I'm <span className="text-rose-500">Nikhil Patil</span>,
                currently pursuing my studies at Government Polytechnic College,
                Mumbai. I'm a passionate web developer with a strong foundation
                in both frontend and backend technologies. My expertise lies in
                JavaScript frameworks such as React, Node.js, Express, and
                Next.js, allowing me to build dynamic and responsive web
                applications.
              </p>
              <p>
                I'm also learning to work with databases such as MongoDB and SQL
                to build efficient, data-driven applications. Though I'm still
                expanding my skills, I’m committed to continuously learning and
                improving, and I'm excited to take on new projects and
                challenges as I grow in this field.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
