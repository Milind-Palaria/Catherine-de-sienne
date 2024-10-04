import React from 'react'
import { FlipWords } from './FlipWords';
// const words = ["Modern.", "Smart.", "Easy.", "Luxurious."];

const MaintainenceText = () => {
  return (
    <div className="lg:text-[4vw] md:text-[5vw] w-full font-semibold text-[#EAF2EF] flex flex-col text-center opacity-95">
      <div className='flex max-md:flex-col justify-center items-center md:gap-10 md:-translate-y-[2px]'>
        <span className='max-md:text-[20vw] text-[10vw] text-[#F8F4E1] leading-[4rem] opacity-85'>Catherine </span>
        <span className='max-md:text-[15vw] text-[10vw] text-[#F8F4E1] leading-[4rem] max-md:pt-3 font-thin'> de </span>
        <span className='max-md:text-[20vw] text-[10vw] text-[#F8F4E1] leading-[4rem] opacity-85'> Sienne</span>
      </div>
      <h1 className='mt-3 md:mt-5'>Is Under Mainteinance</h1>
    </div>
  )
}

export default MaintainenceText