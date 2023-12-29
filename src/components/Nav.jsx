import React, { useState } from 'react'
import { FaBars, FaHandMiddleFinger, FaTimes } from "react-icons/fa"
import { Link } from "react-scroll"


const Nav = () => {
    const [nav, setNav] = useState(false);
  
    // const handleClickItem = ()=> setActive("home");

   const NavItems = [
        {
            id: 1,
            title: "home",
            style:"text-orange-500"
        },
        {
            id: 2,
            title: "about",
            style:"text-orange-500"
        },
        {
            id: 3,
            title: "portfolio",
            style:"text-orange-500"
        },
        {
            id: 4,
            title: "experience",
            style:"text-orange-500"
        },
        {
            id: 5,
            title: "contact",
            style:"text-orange-500"
        },
    ];

  return (
    <div className='flex justify-between items-center py-6 bg-slate-700 w-full h-20 text-orange-300 fixed px-4 shadow'>
        <div>
            <h1 className='text-5xl font-signature ml-2'>Firomsa</h1>
        </div>
        <ul className='hidden md:flex'>
        {NavItems.map(({id, title, style}) => (
          <li
          key={id}
         
           className={`px-4 cursor-pointer capitalize font-medium hover:scale-125 duration-200`}
          
          >
            <Link to={title}   smooth duration={500}>{title}</Link>
          </li>
        ))}
        </ul>

        <div onClick={()=> setNav(!nav)} className='pr-4 z-10 cursor-pointer text-gray-600 md:hidden' >
          {nav ? <FaTimes size={30}/> : <FaBars size={30}/>}
        </div>
         
     
        
       {nav && (
          <ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen text-orange-500 font-semi-bold bg-slate-800 '>
          {NavItems.map(({id, title}) => (
            <li key={id} className='px-4 cursor-pointer capitalize py-2 text-3xl'>
              <Link
            onClick={ () => setNav(!nav)}
             to={title} smooth duration={500}>{title}</Link>
             </li>
          ))}
          </ul>
       )}
    

    </div>
  )
}
 
export default Nav
