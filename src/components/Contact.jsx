import React from 'react'

const Contact = () => {
  return (
    <div name="contact" className='w-full h-screen my-10'>
      <div className='flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full'>
        <div className=''>
            <p className='text-4xl font-bold border-b-4 border-gray-500 inline'>Contact</p>
            <p className='py-6'>Submit the form below to get in touch with me</p>
        </div>

        <div className='flex justify-center items-center'>
            <form action="https://getform.io/f/42cab27a-ed30-42d5-916a-0220fdb040ff" 
            className='flex flex-col w-full md:w-1/2' method='POST'
            
            >
                <input
                type='text'
                name='name'
                placeholder='Enter your name'
                className='p-3 bg-transparent border-2 rounded-md shadow-md shadow-orange-500  border-gray-400 text-black focus:outline-none ' 
                />
              
                <input
                type='text'
                name='name'
                placeholder='Enter your email'
                className='p-3 my-4 border-gray-400  bg-transparent border-2 shadow-md shadow-cyan-500 rounded-md text-black focus:outline-none '
                />
                <textarea name="message" placeholder='Enter your message' rows="8" className='p-2 bg-transparent border-2 border-gray-400 text-black rounded-md focus:outline-none shadow-md shadow-blue-500 '></textarea>

                <button className='text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300 '>
                    Let's talk
                </button>
            </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
