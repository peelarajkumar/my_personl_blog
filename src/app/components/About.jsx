import React from 'react'
import { assets, infoList , toolsData } from '../../../assets/assets'
import Image from 'next/image'

const About = () => {
  return (
    <div id="about" className='w-full px-[12%] py-10 scroll-mt-20'>
        <h4 className='text-center mb-2 text-lg font-Ovo'>Introduction</h4>
        <h2 className='text-center mb-2 text-5xl font-Ovo'>About Me</h2>

        <div className='flex w-full flex-col lg:flex-row items-center gap-20 my-20'>
            <div className='w-64 sm:w-60 rounded-3xl max-w-none'>
                <Image className={'w-full rounded-3xl'} src={assets.profile_img}alt="mypropic"/>
            </div>
            <div className='flex-1'>
                <p className='mb-10 max-w-2xl font-Ovo'>
                An Experienced Web Developer with expertise in designing and building robust, end-to-end web applications using a wide range of frontend and back-end technologies.
                Skilled in creating scalable,user-centric solutions and integrating AI technologies to enhance functionality and solve complex challenges. Adaptable, innovative, and 
                passionate about optimizing processes, improving user experiences, and driving business growth
                </p>
                <ul className='grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl'>
                    {infoList.map(({icon,iconDark,title,description},index)=>
                        <li className='border-[0.5px] grid grid-items 5 border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-rose-50 hover:-translate-y-1 duration-500' key={index}>
                            <Image className='w-7 mt-3' alt={title}  src={icon}/>
                            <h3 className='my-4 font-semibold text-gray-700'>{title}</h3>
                            <p className='text-black-900 text-sm whitespace-pre-line'>{description}</p>
                            <br/>
                        </li>
                    )}
                    
                </ul>
                <h2 className='my-6 text-3xl text-gray-700 font-Ovo'>Tools I use </h2>
                {/* <ul className='grid grid-cols-4 sm:grid-cols-8 sm:gap-2'>
                    {toolsData.map((tool,index)=>(
                    <li className=' flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500' key={index}>
                        <Image alt="toolicon" src={tool} className='w-5 sm:w-7'/>
                    </li>))}
                </ul> */}
                <div className="w-full overflow-x-auto">
                    <ul className="flex gap-4 px-4 py-2 min-w-max">
                        {toolsData.map((tool, index) => (
                        <li
                            key={index}
                            className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500 shrink-0"
                        >
                            <Image alt="toolicon" src={tool} className="w-5 sm:w-7" />
                        </li>
                        ))}
                    </ul>
                </div>


            </div>
        </div>
      
    </div>
  )
}

export default About
