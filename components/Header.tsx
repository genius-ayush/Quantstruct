import React from 'react'
import Image from 'next/image';
import { CompanyLogo } from './CompanyLogo';
import Link from 'next/link';
import MobileMenu from './MobileMenu';
import { Button } from './ui/button';



function Header() {
  return (
    <>
      <nav className='fixed w-full backdrop-blur-lg border'>
        <div className='flex h-[72px] items-center justify-between w-full lg:px-20 px-2'>
          <Link href="/"><CompanyLogo/></Link>

          <div className='flex items-center'>
            <Link href="/about"><ul className='md:flex items-center gap-4 text-md lg:gap-6 hidden mx-4 hover:pointer hover:text-gray-700'>About</ul></Link>
            <Link href="/about"><ul className='md:flex items-center gap-4 text-md lg:gap-6 hidden mx-4 hover:pointer hover:text-gray-700'>Features</ul></Link>
            <Link href="/contactus"><ul className='md:flex items-center gap-4 text-md lg:gap-6 hidden mx-4 hover:pointer hover:text-gray-700'>Contact Us </ul></Link>
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