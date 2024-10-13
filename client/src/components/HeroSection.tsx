import Navbar from "./navbar";

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-b w-full max-h-screen from-[rgb(8,7,11)] to-[rgb(23,28,35)] text-white relative pt-[2rem] ">
      <Navbar />
      <section className="p-0 flex items-center justify-around gap-[4rem] m-0 md:pl-32  md:min-h-screen flex-wrap flex-col md:flex-row">
        <div >
          <h1 className="text-xl md:text-4xl font-bold p-[2rem] md:p-[4rem] mt-2 md:mt-0 text-wrap max-w-[800px]">
            <span className="block mb-2 text-xl md:text-3xl">Full Stack Developer. </span>
            Bringing your digital{" "}
            <span className="text-green-500"> ideas </span> to life with custom
            web apps
          </h1>
          <p className="p-[2rem] md:p-[4rem] m-0 text-gray-300">
          I develop full-blown web apps in React and Node.js. 
          </p>
        </div>
        <div></div>
      </section>
    </section>
  );
};

export default HeroSection;
