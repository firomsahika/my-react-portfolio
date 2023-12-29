import React from 'react'
import firo from "../assets/firo2.png";
import {MdOutlineKeyboardArrowRight} from "react-icons/md"
import { Link } from 'react-scroll';

const Home = () => {
  return (
    <div name="home" className='h-screen w-full pt-10 '>
       <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4  md:flex-row'>
          <div className='flex flex-col h-full justify-center '>
            <h2 className='text-4xl sm:text-7xl font-bold  '>I'm Frontend React Developer</h2>
            <p className='max-w-md py-4'>I'm a passionate frontend web developer. I have an experience on building and designing software. Currently, I love to work on web application using technologies like Javascript,React,Tailwind</p>

            <div>
              <Link to='portfolio' smooth duration={500} 
               className='group text-black w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer'>
                    Portfolio
                    <span className='group-hover:rotate-90 duration-300'>
                        <MdOutlineKeyboardArrowRight size={25} className='ml-1'/>
                    </span>
              </Link>
                
            </div>
          </div>

          <div>
            <img src={firo} alt='my profile'className='rounded-2xl  mx-auto w-2/3 md:w-full '/>
          </div>

       </div>
    </div>
  )
}

export default Home
