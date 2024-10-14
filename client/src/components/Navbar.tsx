import React, { forwardRef } from 'react';

interface navItem {
  text: string;
  link: string;
}

const navItems: navItem[] = [
  {
    text: "Projects",
    link: "#projects",
  },
  {
    text: "About",
    link: "#about",
  },
  {
    text: "Contact",
    link: "#contact",
  },
];

// Turn Navbar into a forwardRef component
const Navbar = forwardRef<HTMLDivElement, React.PropsWithChildren<{}>>((props, ref) => {
  return (
    <nav
      className="w-[100%] max-w-[1220px] flex justify-between py-[2rem] px-[2rem] md:px-[4rem] items-center font-semibold mt-[2rem] text-sm md:text-lg absolute top-0 right-[50%] translate-x-[50%] gap-[2rem]"
      ref={ref} 
    >
      <h1>Nikhil Patil</h1>
      <ul className="flex gap-5 text-md">
        {navItems.map((item: navItem, index) => (
          <li key={index} className="hover:underline hover:text-green-500">
            <a href={item.link}>{item.text}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
});

export default Navbar;
