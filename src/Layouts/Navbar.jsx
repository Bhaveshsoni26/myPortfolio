import { content } from "../Content";
import { HiMenuAlt2 } from "react-icons/hi";
import { createElement, useState } from "react";
import { GrFormClose } from 'react-icons/gr';
const Navbar = () => {
  const { nav } = content;
  const [active, setActive] = useState(0);
  const [showMenu , setShowMenu] = useState(false);
  return <div className="w-full flex justify-center">
    <div className="sm:cursor-pointer fixed top-5 left-3 z-[999] rounded-lg bg-white/40 p-1 m-1 " onClick={()=>setShowMenu(!showMenu)}>
      {
        !showMenu ? <HiMenuAlt2 size={34} /> : <GrFormClose size={34} />
      }
    </div>
    <nav className={`fixed  z-[999] flex items-center gap-5 bg-slate-200/60 px-6 py-3 backdrop-blur-md rounded-full text-dark_primary duration-300 ${showMenu ? 'bottom-10' : 'bottom-[-100%]'}`}>
      {
        nav.map((item, index) => (
          <a key={index} href={item.link} onClick={()=>setActive(index)} className={`text-x1 p-2.5 rounded-full sm:cursor-pointer ${index === active && "bg-dark_primary text-white"} `}>
            {createElement(item.icon)}
          </a>
      ))}
    </nav>
  </div>;
};

export default Navbar;
