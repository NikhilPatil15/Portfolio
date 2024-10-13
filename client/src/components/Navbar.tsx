
interface navItem{
    text:string,
    link:string
}



const navItems: navItem[] = [
    {
         text:"Projects",
         link:"#projects"
    },
    {
        text:"About",
        link:"#about"
    },
    {
        text:"Contact",
        link:"#contact"
    }
]

const Navbar = () => {
  return (
    <nav className="flex justify-around items-center font-semibold mt-[2rem] text-sm md:text-lg">
       <h1>     
        Nikhil Patil
        </h1> 
        <ul className="flex gap-5 text-md">
    {
        navItems.map((item:navItem,index)=>(
            <li key={index} className="hover:underline hover:text-green-500">
                <a href={item.link}>{item.text}</a>
            </li>
        ))
    }
    </ul>
    </nav>
  )
}

export default Navbar