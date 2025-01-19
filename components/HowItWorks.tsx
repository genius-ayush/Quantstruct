import React from 'react'
import { FeaturesTable } from './FeaturesTable'

function HowItWorks() {
  return (
    <div className='h-screen flex flex-col justify-center'>
      <p className='text-center text-5xl font-bold mb-10'>How It Works</p>
      <FeaturesTable/>
    </div>
  )
}

export default HowItWorks