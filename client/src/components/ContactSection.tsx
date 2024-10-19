import { useGSAP } from "@gsap/react";
import axios from "axios";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useRef, useState } from "react";
import toast from "react-hot-toast";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { LuLoader } from "react-icons/lu";

const ContactSection = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const contactSectionRef = useRef<HTMLDivElement | null>(null);
  const titleRef = useRef<HTMLDivElement | null>(null);
  const formRef = useRef<HTMLFormElement | null>(null);
  const linksRef = useRef<HTMLDivElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  gsap.registerPlugin(useGSAP, ScrollTrigger);

  useGSAP(() => {
    /* Scroll trigger animation */

    const contactSectionScrollTrigger = gsap.timeline({
      scrollTrigger: {
        trigger: contactSectionRef.current,
        start: "top bottom",
        toggleActions: "restart none restart none",
      },
    });
    contactSectionScrollTrigger.from(containerRef.current, {
      x: -100,
      opacity: 0,
      stagger: 0.3,
      duration: 1,
    });

    contactSectionScrollTrigger.from(titleRef.current, {
      opacity: 0,
      stagger: 0.2,
      duration: 1,
      ease: "back.inOut",
    });

    contactSectionScrollTrigger.from(formRef.current, {
      opacity: 0,
      stagger: 0.3,
      duration: 1,
      delay: 0.2,
    });
    contactSectionScrollTrigger.from(linksRef.current, {
      opacity: 0,
      stagger: 0.3,
      duration: 1,
      delay: 0.2,
    });
  });

  const validateEmail = (email: string) => {
    const emailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i;
    return emailPattern.test(email);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      setErrorMessage("Please enter a valid email address.");
      return;
    }
    setErrorMessage("");

    const data = {
      email: email,
      name: name,
      message: message,
    };
    setLoading(true);

    const response = await axios.post("https://portfolio-ivqk.onrender.com/email", data);

    setLoading(false);

    if (response.status === 200) {
      toast.success("Email sent successfully!")
    } else {
      toast.error("Something went wrong while sending email!")
    }

    setName("");
    setEmail("");
    setMessage("");
    console.log("Form submitted successfully: ", response.data.data);
    
  };

  return (
    <section
      className="bg-customBackground text-white overflow-hidden"
      id="contact"
      ref={contactSectionRef}
    >
      
      <div className="flex flex-col justify-center items-center max-w-[1220px] min-h-screen  md:w-full m-auto ">
        <div
          className="flex flex-col justify-center md:items-center items-center  bg-customProjectBackground py-[1rem] md:p-[4rem] rounded-xl"
          ref={containerRef}
        >
          <h1 className="text-2xl md:text-4xl font-bold" ref={titleRef}>
            Contact Me
          </h1>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col items-center md:items-center justify-center w-full p-2  md:p-[2rem] gap-6 font-bold"
            ref={formRef}
          >
            <div className="flex flex-col  md:items-start justify-center gap-4 md:p-3 px-2">
              <label htmlFor="name" className="text-2xl">
                {" "}
                Name:
              </label>
              <input
                type="text"
                name="name"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="h-[30px] rounded-xl text-black border-none focus:outline-none md:px-[1.5rem] p-[1rem] text-xl bg-customTagColor"
              />

              <label htmlFor="email" className="text-2xl">
                Email:{" "}
              </label>
              <input
                type="text"
                name="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-[30px] rounded-xl text-black border-none focus:outline-none md:px-[1.5rem] p-[1rem] text-xl bg-customTagColor"
                required
              />

              {errorMessage && (
                <span className="text-red-500">{errorMessage}</span>
              )}

              <label htmlFor="message" className="text-2xl">
                Message:{" "}
              </label>
              <textarea
                name="message"
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="h-[80px] rounded-xl text-black border-none focus:outline-none md:px-[1.5rem] p-[1rem] text-xl bg-customTagColor"
              />
            </div>
            <div className="flex  items-center justify-center">
              {!loading ? (
                <button
                  type="submit"
                  className="border-white border m-auto p-3 rounded-xl hover:scale-125 transition-all duration-100"
                >
                  Send Email!
                </button>
              ) : (
                <LuLoader className="animate-spin text-3xl" />
              )}
            </div>
          </form>
          <div
            className="flex justify-end  p-4 gap-3 text-2xl mt-4 mb-4 md:mb-0"
            ref={linksRef}
          >
            <a
              href="https://github.com/NikhilPatil15"
              target="_blank"
              className="hover:text-green-500"
            >
              <span>
                <FaGithub />
              </span>
            </a>
            <a
              href="https://www.linkedin.com/in/nikhil-patil-b10b0126b"
              target="_blank"
              className="hover:text-green-500"
            >
              <span>
                <FaLinkedin />
              </span>
            </a>
            <a
              href="https://x.com/i_Nikhilpatil15"
              target="_blank"
              className="hover:text-green-500"
            >
              <span>
                <FaTwitter />
              </span>
            </a>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=nick1512007@gmail.com"
              target="_blank"
              className="hover:text-green-500"
            >
              <span>
                <IoMdMail />
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
