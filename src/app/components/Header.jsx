import Image from 'next/image'
import React from 'react'
import { assets } from '../../../assets/assets'

const Header = () => {
  return (
    <div className='w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4 '>
        <div>
        <Image alt="profilepic" src={assets.profile_img} className='rounded-full h-35 w-35'/>
        </div>
        <h3 className='flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo'>Hi ! I am Rajkumar Peela
            <Image alt='hand' src={assets.hand_icon} className='w-6'/>
        </h3>
      
      <h1 className='text-3xl md:text-2xl lg:text-[66px] font-Ovo'>A Full Stack Developer from India</h1>
      <p className='max-w-2xl mx-auto font-Ovo'>
      I am a software developer with 4 years of experience, working across multiple front-end and backend frameworks, AI integration,
       and delivering complex solutions with optimized performance and robustic solutions.
      </p>
      <div className='flex flex-col sm:flex-row items-center gap-4 mt-4'>
        <a className='px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2 hover:-translate-y-1 duration-500' href="#contact">Contact Me
            <Image alt="right-arrow" src={assets.right_arrow_white} className='w-4'/>
        </a>
        <a className='px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2 hover:-translate-y-1 duration-500' href="/rajkumar-resume.pdf" download>My Resume
            <Image alt="download-icon" src={assets.download_icon} className='w-4'/>
        </a>
      </div>
      
    </div>
  )
}

export default Header
