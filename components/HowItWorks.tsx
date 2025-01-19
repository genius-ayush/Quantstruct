'use client'
import React from 'react'
import { FeaturesTable } from './FeaturesTable'
import { BlurFade } from './ui/blurFade'

function HowItWorks() {
  return (
    <div className='flex flex-col justify-center pt-10 pb-10'>
      <p className='text-center text-5xl font-bold mb-10'>How It Works</p>
      <BlurFade delay={0.25 * 2} className='flex justify-center' inView>
      <FeaturesTable/>
      </BlurFade>
    </div>
  )
}

export default HowItWorks