import React from 'react'

const About = () => {
  return (
    <div name="about" className='w-full h-screen text-black mb-10'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
            <p className='text-4xl font-bold  border-b-4 flex justify-center items-center border-gray-400 '>About</p>
        </div>
        <p className='shadow  ' >As a passionate and dedicated frontend developer, I have extensive experience in utilizing a wide range of technologies and tools to create exceptional web applications. With expertise in <span className='text-cyan-500 font-bold'>HTML5, CSS3, JavaScript, React, Tailwind CSS, and GitHub,</span> I am well-equipped to build modern and responsive user interfaces.</p>

        <br/>
        <p className='shadow '>
        React has become my framework of choice for building scalable and modular web applications. Leveraging the power of React, I develop reusable components, manage state effectively, and implement routing and data fetching to create robust single-page applications.
        To accelerate my development process and streamline styles, I rely on the versatility of Tailwind CSS. This utility-first CSS framework allows me to rapidly build custom designs by composing classes, resulting in consistent and visually appealing interfaces.
        Furthermore, I adopt best practices in version control using GitHub, facilitating collaboration, code reviews, and maintaining a comprehensive history of project changes.
        </p>
      </div>
    </div>
  )
}

export default About
