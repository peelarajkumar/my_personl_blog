import React from 'react'
import { assets , workData } from '../../../assets/assets'
import Image from 'next/image'

const Mywork = () => {
  return (
    <div id="mywork">
       <div className='w-full px-[12%] py-10 scroll-mt-20'>
       <h4 className='text-center mb-2 text-lg font-Ovo'>My Works</h4>
      <h2 className='text-center mb-2 text-5xl font-Ovo'>My Recent Projects </h2>
      </div>

      <div id='workdatalist'className='grid grid-cols-1 sm:grid-cols-4 my-10 gap-5 px-20 h-30'>
        {workData.map((work,index)=>(
            <div className='aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group' key={index} style={{backgroundImage:`url(${work.bgImage})`}} >

                <div className='bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7'>
                <div>
                    <h2>{work.title}</h2>
                    <h6>{work.description}</h6>
                </div>
                <div>
                    <Image className='w-5' alt="arrowicon" src={assets.send_icon}/>
                </div>
                </div>
                
            </div>
           
        ))}
            
      </div>
    </div>
  )
}

export default Mywork
