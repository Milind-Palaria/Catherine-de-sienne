
import { FlipWords } from '@/components/ui/FlipWords';
import { GlobeDemo } from '@/components/ui/GlobeUse'


// const words = [

//   {
//     text: "Reimagining",
//   },
//   {
//     text: "Banking,",
//   },
//   {
//     text: "Empowering",
//   },
//   {
//     text: "Your",
//   },
//   {
//     text: "Future.",
//     // className: "text-blue-500 dark:text-blue-500",
//   },
// ];

const words = ["Modern.", "Smart.", "Easy.", "Luxurious."];
const Welcome = () => {
  return (
    <section className="relative bg-[#0D090A] h-screen w-full">
      <div className='absolute lg:mt-10 md:!top-2 top-[2vh] w-full flex flex-col justify-center items-center z-[9999]'>
        <div className=" lg:text-[4vw] md:text-[5vw] w-full font-normal text-[#EAF2EF] flex flex-col text-center">
          
          {/* <br /> */}
          {/* <br /> */}
          <div className='flex max-md:flex-col justify-center items-center lg:gap-10'>
            <span className='max-md:text-[20vw] text-[10vw] text-[#F8F4E1] leading-[4rem]'>Catherine </span>
            <span className='max-md:text-[15vw] text-[10vw] text-[#F8F4E1] leading-[4rem] max-md:pt-3'> De </span>
            <span className='max-md:text-[20vw] text-[10vw] text-[#F8F4E1] leading-[4rem]'> Sienne</span>
            

          </div>
          <div className='pt-10 max-md:pt-4 tracking-wide opacity-90'>

            banking made
            <FlipWords words={words} />
          </div>
        </div>
        {/* <TypewriterEffectSmooth words={words} /> */}
        <div className="flex flex-row space-y-0 space-x-4 mt-5 font-semibold tracking-wider justify-center items-center">
          <button className="max-md:w-24 w-40 text-black max-md:text-[0.75rem] text-sm max-md:h-[1.75rem] h-10 max-md:rounded-md rounded-xl  bg-black border border-white  text-white">
            Join now
          </button>
          <button className="max-md:w-24 w-40 bg-white text-black border border-black max-md:text-[0.75rem]  text-sm max-md:h-[1.75rem] h-10 max-md:rounded-md rounded-xl ">
            Login
          </button>
        </div>
      </div>
      <GlobeDemo />
    </section>
  )
}

export default Welcome