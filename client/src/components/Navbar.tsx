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

  
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, link: string) => {
    e.preventDefault();
    const targetElement = document.querySelector(link);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  
  return (
    <nav
      className="w-[100%] max-w-[1220px] flex justify-between p-[2rem] md:px-[4rem] items-center font-semibold mt-[2rem] text-sm md:text-lg absolute top-0  left-0 md:left-[10%]  gap-[2rem]"
      ref={ref}  
    >
      <h1>Nikhil Patil</h1>
      <ul className="flex gap-5 text-md">
        {navItems.map((item: navItem, index) => (
          <li key={index} className="hover:underline hover:text-green-500">
            <a href={item.link} onClick={(e)=>handleClick(e,item.link)}>{item.text}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
});

export default Navbar;
