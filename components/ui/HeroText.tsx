import React from 'react'
import { FlipWords } from './FlipWords';
const words = ["Modern.", "Smart.", "Easy.", "Luxurious."];

const HeroText = () => {
  return (
    <div className="lg:text-[4vw] md:text-[5vw] w-full font-semibold text-[#EAF2EF] flex flex-col text-center opacity-95">
      <div className=' font-secondary  tracking-wide opacity-75 !font-extralight '>
        banking made
        <FlipWords words={words} />
      </div>
      <div className=' font-secondary lg:text-[3vw] md:text-[4vw] tracking-wide opacity-70 font-thin md:-translate-y-[14px]'>
        with
      </div>
      <div className='flex max-md:flex-col justify-center items-center md:gap-10 md:-translate-y-[2px]'>
        <span className='max-md:text-[20vw] text-[10vw] text-[#F8F4E1] leading-[4rem] opacity-85'>Catherine </span>
        <span className='max-md:text-[15vw] text-[10vw] text-[#F8F4E1] leading-[4rem] max-md:pt-3 font-thin'> de </span>
        <span className='max-md:text-[20vw] text-[10vw] text-[#F8F4E1] leading-[4rem] opacity-85'> Sienne</span>
      </div>
    </div>
  )
}

export default HeroText