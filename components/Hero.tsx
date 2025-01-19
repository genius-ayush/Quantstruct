'use client';
import React from 'react'
import DotPattern from './ui/dotpattern'
import { cn } from "@/lib/utils";
import { HeroVideoDialog } from './ui/heroVideoDialog';
import { Button } from './ui/button';
import BackedBy from './BackedBy';

function Hero() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-white via-gray-200 to-[#A88866] px-4 py-12 sm:px-6 md:px-8">
      
      {/* Hero Heading */}
      <h1 className="relative z-10 text-2xl text-center font-sans font-bold leading-tight md:text-5xl lg:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-700 to-[#B1967A] mt-12 md:mt-24 md:w-3/4">
        Seamlessly Craft & Optimize Product Documentation
      </h1>

      {/* Subheading */}
      <p className="text-base text-center mt-4 md:mt-6 text-neutral-800 md:text-xl lg:text-2xl max-w-[90%] sm:max-w-[70%]">
        AI that crafts precise, up-to-date docs for APIs, SDKs, and enterprise software.
      </p>

      {/* Call to Action */}
      <div className="mt-6 md:mt-8 z-40">
        <Button className="px-6 py-3 md:px-8 md:py-4 text-sm md:text-base hover:bg-gray-800 ">
          Signup
        </Button>
      </div>

      {/* Hero Video */}
      <HeroVideoDialog
        className="w-full max-w-sm md:max-w-md lg:max-w-2xl mt-8 md:mt-12 z-40"
        animationStyle="from-center"
        videoSrc="https://youtu.be/xoHe00RUz0U"
        thumbnailSrc="/thumbnail.png"
        thumbnailAlt="Hero Video"
      />

      {/* Decorative Dot Pattern */}
      <DotPattern
        className={cn(
          "[mask-image:linear-gradient(to_bottom,transparent,white,transparent)]"
        )}
      />

    </div>
  )
}

export default Hero;
