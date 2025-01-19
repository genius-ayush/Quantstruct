'use client'
import React from 'react'
import Image from 'next/image';
import { CompanyLogo } from './CompanyLogo';
import Link from 'next/link';
import MobileMenu from './MobileMenu';
import { Button } from './ui/button';
import { useScrollSpy } from '@/hooks/use-scroll-spy';



function Header() {
  const { activeSection, scrollToSection } = useScrollSpy()
  const navigation = [
    { name: 'About', id: 'about' },
    { name: 'Features', id: 'features' },
    { name: 'Contact', id: 'contact' },
  ]
  return (
    <>
      <nav className='fixed z-50 w-full backdrop-blur-lg border '>
        <div className='flex h-[72px] items-center justify-between w-full lg:px-40 px-2 '>
          <Link href="/"><CompanyLogo/></Link>

          <div className='flex items-center'>
            <Link href="#about" onClick={() => scrollToSection("about")} ><ul className=' md:flex items-center gap-4 text-md lg:gap-6 hidden mx-4 hover:pointer hover:text-gray-700'>About</ul></Link>
            <Link  href="#features" onClick={() => scrollToSection("features")}><ul className=' md:flex items-center gap-4 text-md lg:gap-6 hidden mx-4 hover:pointer hover:text-gray-700'>Features</ul></Link>
            <Link href="#contact"onClick={() => scrollToSection("contact")}><ul className=' md:flex items-center gap-4 text-md lg:gap-6 hidden mx-4 hover:pointer hover:text-gray-700'>Contact Us </ul></Link>
            <Link href="/signin" className="md:flex hidden"><Button>Signin</Button></Link>

          </div>

          <div className='md:hidden'>
            <MobileMenu/>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Header