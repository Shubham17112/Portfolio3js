import React, { useEffect, useState } from 'react'

import { logo } from "../assets";
import { Link, NavLink } from "react-router-dom";
import { menu } from '../assets';
import { close } from '../assets';

import { navLinks } from '../constants';

const Navbar = () => {
  const [scrol, setScroll] = useState(false);
  const [toggle,settoggle] = useState(false)

  useEffect(() => {
    const scrollevent = () => {
      const captureY = window.scrollY;
      if (captureY > 100) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };
  
    window.addEventListener('scroll', scrollevent);
  
    // Cleanup function to remove the scroll event listener
    return () => window.removeEventListener('scroll', scrollevent);
  }, []);
  


  return (
<nav className={`select-none fixed w-full justify-between items-center  z-20 flex px-4 py-5  ${scrol ? 'bg-[#070711]' : 'bg-[#06061d37]'}`}>
  
      <div className='flex w-full items-center sm:mx-[7vw] justify-between '>
        <Link to='/' className='flex items-center gap-2' >
          <img src={logo} alt="" className='w-9 h-9 object-contain' />
          <p className='text-[18px] font-sans flex '>SHUBHAM MISHRA &nbsp;
          <span className='hidden sm:block font-sans'>  |&nbsp;BOW </span>
          </p>
        </Link>
        

      </div>
      <div className='hidden sm:block sm:mx-[7vw]'>
      <div className='flex w-full'>
        <ul className='flex gap-5 mx-8'>
                {navLinks.map((item, index) => (
                  <li key={index}>
                   <a href={item.id}>{item.title}</a>
                    </li>
                ))}
        </ul>
        </div>

      </div>

      <div className={`flex sm:hidden  `} onClick={()=>{toggle?settoggle(false):settoggle(true)}}>
        <img src={toggle?close:menu} alt="" className=' absolute right-5    '/>
        <div className={`bg-[#06061d37] w-24 flex flex-col justify-center items-center  rounded-xl  font-thin text-lg absolute right-0 top-[4.6rem] ${toggle?'flex':'hidden'}`}>
        <ul>
                {navLinks.map((item, index) => (
                  <li key={index}>
                    <a href={item.id}>{item.title}</a>
                    </li>
                ))}
        </ul>
        </div>


      </div>
    
    </nav>
  )
}

export default Navbar 