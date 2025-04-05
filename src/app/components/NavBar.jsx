import Image from 'next/image'
import React, { useRef } from 'react'
import { assets } from '../../../assets/assets'

const NavBar = () => {
    const SideMenuRef = useRef();
    const OpenSideMenu = ()=>{
        console.log('clicked')
        SideMenuRef.current.style.transform = 'translateX(-16rem)'
    }
    const closeSideMenu = ()=>{
         SideMenuRef.current.style.transform = 'translateX(16rem)'
    }
  return (
   <>
   <div className='fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%]'>
    <Image alt='#bg-gradient' src={assets.header_bg_color } className='w-full'/>
   </div>
   <nav className='w-full fixed top-0 left-0 right-0 px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50'>
    {/*  Home page left side logo */}
    <a href='#top'>
        <Image alt='logo' src={assets.logo} className='hidden md:flex w-28 cursor-pointer mr-14' />
    </a>
    {/* Nav bar - home page */}
    <ul  className='hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 bg-white shadow-sm bg-opacity-50'>
        <li><a className='font-Ovo' href='#top'>Home</a></li>
        <li><a className='font-Ovo' href='#about'>About Me</a></li>
        <li><a className='font-Ovo' href='#services'>Services</a></li>
        <li><a className='font-Ovo' href='#mywork'>My Work</a></li>
        <li><a className='font-Ovo' href='#contact'>Contact Me</a></li>
    </ul>

    <div className='flex items-center gap-20 '>
        <button>
            <Image src={assets.moon_icon} alt='theme-icon' className='w-6 cursor-pointer'/>
        </button>
        <a className='hidden lg:flex items-center gap-3 px-10 py-2.5 border border-grey-500 rounded-full ml-4 font-Ovo' href='#contact'>Contact
            <Image alt='contact' src={assets.arrow_icon} className='w-3'/>
        </a>
        <button onClick={OpenSideMenu} className='block md:hidden ml-3' >
            <Image  alt="menu-blk-ph" src={assets.menu_black} className='w-6' />
        </button>
    </div>

    {/*  Mobile-menu */}
    <ul ref={SideMenuRef} className='flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0
     w-64 z-50 h-screen bg-rose-50 transition duration-500'>
        <div className='absolute right-6 top-6 cursor-pointer' onClick={closeSideMenu}>
            <Image alt="cross" src={assets.close_black} className='w-5 cursor-pointer'/>
        </div>

        <li><a className='font-Ovo' onClick={closeSideMenu} href='#top'>Home</a></li>
        <li><a className='font-Ovo' onClick={closeSideMenu} href='#about'>About Me</a></li>
        <li><a className='font-Ovo' onClick={closeSideMenu} href='#services'>Services</a></li>
        <li><a className='font-Ovo' onClick={closeSideMenu} href='#mywork'>My Work</a></li>
        <li><a className='font-Ovo' onClick={closeSideMenu} href='#contact'>Contact Me</a></li>
    </ul>

   </nav>
   </>
  )
}

export default NavBar
