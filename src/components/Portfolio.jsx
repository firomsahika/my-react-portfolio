import React from 'react'
import agecalculator from "../assets/age-calculator.jpg"
import business from "../assets/business card.png"
import iphonecalculator from "../assets/iphone-calculator.jpg"
import search from "../assets/search.jpg"
import youtube from "../assets/youtube.jpg"

const Portfolio = () => {
  const projects = [
    {
      id:1,
      src:iphonecalculator,
      title:"Simple Calculator",
      link:"https://github.com/firomsahika/Simple-iphone-calculator.git"
    },
    {
      id:2,
      src:search,
      title:"Image Search app",
      link:"https://github.com/firomsahika/image-search-app-by-Js.git"
    },
    {
      id:3,
      src:business,
      title:"Digital Business Card",
      link:"https://github.com/firomsahika/digital-business-card.git"
    },
    {
      id:4,
      src:agecalculator,
      title:"Age Calculator app",
      link:"https://github.com/firomsahika/Age-calculator-app.git"
    },
    {
      id:5,
      src:youtube,
      title:"Youtube clone",
      link:"https://github.com/firomsahika/youtube-clone.git"

    }
  ]



  return (
    <div 
    name="portfolio"
    className='w-full md:h-screen '
    >
       <div className='max-w-screen-lg p-8  mx-auto flex flex-col justify-center w-full h-full'>
         <div className='pb-4'>
            <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Portfolio</p>
            <p className='py-6'>check out some of my work right here </p>
         </div>

         <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
          {
            projects.map(({id, src,title,link})=>(
              <div key={id} className='shadow-md  shadow-gray-600 rounded-lg'>
              <img 
                  src={src}
                  alt=''
                  className='rounded-md h-30 duration-200 hover:scale-105'
                  />
                  <div className='flex  items-center justify-center '>
                    <button className='w-1/2 px-6 py-3 m-4 duration-200 border-2 border-green-300 rounded-lg hover:scale-105 hover:bg-green-300'>Demo</button>
                      <button className='w-1/2 px-6 py-3 m-4 duration-200 border-2 border-green-300 rounded-lg hover:scale-105 hover:bg-green-300'><a href={link} target='_blank'>Code</a></button>
                  </div>
              </div>

            ))
          }
         </div>
       </div>
    </div>
  )
}

export default Portfolio
