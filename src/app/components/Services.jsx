import React from 'react'
import Image from 'next/image'
import { serviceData , assets } from '../../../assets/assets'

const Services = () => {
  return (
    <div id="services">
      <div className='w-full px-[12%] py-10 scroll-mt-20'>
      <h4 className='text-center mb-2 text-lg font-Ovo'>What i offer</h4>
      <h2 className='text-center mb-2 text-5xl font-Ovo'>My Services</h2>
      </div>
      <div className='grid grid-cols-2 sm:grid-cols-4 gap-6 mb-3 px-[8%]'>
       {serviceData.map(({icon,title,description,link},index)=>(
        <div  key={index}>
          <Image alt='services Logo' className='w-10' src={icon}/>
          <h3 className='text-lg my-4 text-black-700 '>{title}</h3>
          <p className='text-sm text-gray-800 leading-5'>{description}</p>
        </div>))}
      </div>
    </div>
  )
}

export default Services
