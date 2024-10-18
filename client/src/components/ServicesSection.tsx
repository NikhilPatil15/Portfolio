import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";
import { FaCode, FaComputer, FaGraduationCap } from "react-icons/fa6";
import { GiProgression } from "react-icons/gi";
const ServicesSection = () => {
  gsap.registerPlugin(useGSAP, ScrollTrigger);
  const serviceSectionRef = useRef<HTMLDivElement | null>(null);
  const serviceItemRef1 = useRef<HTMLDivElement | null>(null);
  const serviceItemRef2 = useRef<HTMLDivElement | null>(null);
  const serviceItemRef3 = useRef<HTMLDivElement | null>(null);
  const serviceItemRef4 = useRef<HTMLDivElement | null>(null);
  const serviceSectionTitleRef = useRef<HTMLDivElement | null>(null);
  const serviceSectionDescriptionRef = useRef<HTMLDivElement | null>(null);
  useGSAP(() => {
    /* Scroll trigger activity! */
    const serviceSection = gsap.timeline({
      scrollTrigger: {
        trigger: serviceSectionRef.current,
        start: "top top",
        end: "+=4000",
        scrub: true,
        pin: true,
        anticipatePin: 1,
      },
    });

    const serviceSectionTitleandDescription = gsap.timeline({
      scrollTrigger: {
        trigger: serviceSectionRef.current,
        start: "top bottom",
        toggleActions: "restart none none none",
      },
    });

    serviceSectionTitleandDescription.from(serviceSectionTitleRef.current, {
      opacity: 0,
      delay:0.5,
      duration: 1,
      ease: "back",
    });

    serviceSection.from(serviceItemRef1.current, {
      yPercent: 100,
    });
    serviceSection.from(serviceItemRef2.current, {
      xPercent: 100,
    });
    serviceSection.from(serviceItemRef3.current, {
      xPercent: -100,
    });
    serviceSection.from(serviceItemRef4.current, {
      yPercent: -100,
    });
  });

  return (
    <section
      className="bg-customBackground text-white relative flex items-center justify-center overflow-y-hidden"
      ref={serviceSectionRef}
    >
      <div className="flex flex-col gap-5 items-start justify-center max-w-[1220px] min-h-screen w-full  md:gap-6 p-6  md:mt-0 md:p-[3rem]">
        <h1
          className="text-xl md:text-4xl font-bold bg-clip-text text-transparent bg-customTagColor"
          ref={serviceSectionTitleRef}
        >
          Work Interest and what i can do
        </h1>
        <p
          className="leading-9 text-base md:text-lg md:leading-8"
          ref={serviceSectionDescriptionRef}
        >
          As a student eager to dive into the professional world, I am
          passionate about working with companies that embrace cutting-edge
          technologies like React, Node.js, and TypeScript. I’m looking for a
          challenging role that fosters growth and learning through teamwork and
          collaboration, allowing me to apply my skills while continuously
          developing as a developer.
        </p>
        {/* First Service Div */}
        <div
          className=" bg-serviceDiv1 absolute right-0 h-full w-full flex items-center flex-col  justify-center gap-6 px-5 py-4 md:p-[4rem] "
          ref={serviceItemRef1}
        >
          <div className="flex gap-3 justify-center items-center  py-8 px-3 md:p-[2rem] rounded-lg bg-customProjectBackground ">
            <div
              className="bg-white p-4"
              style={{ borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%" }}
            >
              <span className="text-black text-[3rem]">
                <FaCode />
              </span>
            </div>
            <div className="flex flex-col border-l border-white px-6 gap-3">
              <h1 className="text-xl font-semibold">Web Development</h1>
              <p className="text-[12px] md:text-lg">
                Building full-stack web apps with MongoDB, Express, React, and
                Node.js.
              </p>
            </div>
          </div>
        </div>
        {/*Second service div */}
        <div
          className="bg-serviceDiv2 absolute right-0 h-full w-full flex items-center flex-col  justify-center gap-6 px-5 py-4 md:p-[4rem]"
          ref={serviceItemRef2}
        >
          <div className="flex gap-3 justify-center items-center  py-8 px-3 md:p-[2rem] rounded-lg bg-customProjectBackground">
            <div
              className="bg-white p-4"
              style={{ borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%" }}
            >
              <span className="text-black text-[3rem]">
                <FaComputer />
              </span>
            </div>
            <div className="flex flex-col border-l border-white px-6 gap-3">
              <h1 className="text-xl font-semibold">Design to HTML</h1>
              <p className="text-[12px] md:text-lg">
                I convert existing designs into pixel-perfect HTML/CSS websites.
              </p>
            </div>
          </div>
        </div>
        {/*Third service div */}
        <div
          className="bg-serviceDiv3 absolute right-0 h-full w-full flex items-center flex-col  justify-center gap-6 px-5 py-4 md:p-[4rem]"
          ref={serviceItemRef3}
        >
          <div className="flex gap-3 justify-center items-center  py-8 px-3 md:p-[2rem] rounded-lg bg-customProjectBackground ">
            <div
              className="bg-white p-4"
              style={{ borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%" }}
            >
              <span className="text-black text-[3rem]">
                <FaGraduationCap />
              </span>
            </div>
            <div className="flex flex-col border-l border-white px-6 gap-3">
              <h1 className="text-xl font-semibold">Learning in Progress</h1>
              <p className="text-[12p] md:text-lg">
                Passionate Student Developer, Learning and Building with the
                MERN Stack and Next.js.
              </p>
            </div>
          </div>
        </div>
        {/*Fourth service div */}
        <div
          className="bg-serviceDiv4 absolute right-0 h-full w-full flex items-center flex-col  justify-center gap-6 px-5 py-4 md:p-[4rem] "
          ref={serviceItemRef4}
        >
          <div className="flex gap-3 justify-center items-center  py-8 px-3 md:p-[2rem] rounded-lg bg-customProjectBackground ">
            <div
              className="bg-white p-4 "
              style={{ borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%" }}
            >
              <span className="text-black text-[3rem]">
                <GiProgression />
              </span>
            </div>
            <div className="flex flex-col border-l border-white px-3 md:px-6 gap-3 ">
              <h1 className="text-xl font-semibold">Quick Learner</h1>
              <p className="text-[12px] md:text-lg">
                Embracing new challenges and mastering skills rapidly to stay
                ahead.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
