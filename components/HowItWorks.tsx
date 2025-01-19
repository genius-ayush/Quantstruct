import React from 'react'
import { FeaturesTable } from './FeaturesTable'

function HowItWorks() {
  return (
    <div className='flex flex-col justify-center pt-10 pb-10'>
      <p className='text-center text-5xl font-bold mb-10'>How It Works</p>
      <FeaturesTable/>
    </div>
  )
}

export default HowItWorks