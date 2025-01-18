'use client';
import React from 'react'
import DotPattern from './ui/dotpattern'
import { cn } from "@/lib/utils";
import { HeroVideoDialog } from './ui/heroVideoDialog';
import { FlipText } from './ui/flipText';
import { Button } from './ui/button';
import { RippleButton } from './ui/rippleButton';

function Hero() {
  return (
    <div className="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-gradient-to-b from-white via-gray-200 to-[#A88866] md:shadow-xl">
      
      <h1 className="relative z-10 text-lg md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-700 to-[#B1967A]  text-center font-sans font-bold w-3/5 mt-20">
        Seamlessly Craft & Optimize Product Documentation
      </h1>
      <p className='text-lg md:text-2xl md:p-5 w-1/3 flex text-center '>
      AI that crafts precise, up-to-date docs for APIs, SDKs, and enterprise software.
      </p>

      <div className='mb-5 z-50 '>
      <Button className='px-8 py-4 hover:bg-gray-800'>Signup</Button>
      </div>
      
      <HeroVideoDialog
        className="dark:hidden block w-5/12 z-50"
        animationStyle="from-center"
        videoSrc="https://youtu.be/xoHe00RUz0U"
        thumbnailSrc="/thumbnail.png"
        thumbnailAlt="Hero Video"
      />
      <DotPattern
        className={cn(
          "[mask-image:linear-gradient(to_bottom,transparent,white,transparent)]"
        )}
      />

    </div>
  )
}

export default Hero