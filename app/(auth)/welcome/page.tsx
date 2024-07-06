
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

const words = ["Modern.", "Smart.", "Easy.", "Luxirious."];
const Welcome = () => {
  return (
    <section className="relative bg-[#0D090A] h-screen w-full">
      <div className='absolute lg:mt-10 md:!top-2 top-[2vh] w-full flex flex-col justify-center items-center z-[9999]'>
        <div className=" lg:text-[4vw] md:text-[5vw] w-full font-normal text-[#EAF2EF] flex flex-col text-center">
          
          {/* <br /> */}
          {/* <br /> */}
          <span>
            <span className='text-[10vw]  text-[#F8F4E1] leading-[4rem]'>Catherine <span> De Sienne</span></span>

          </span>
          <div className=' tracking-wide opacity-90'>

            banking made
            <FlipWords words={words} />
          </div>
        </div>
        {/* <TypewriterEffectSmooth words={words} /> */}
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4 mt-5 font-semibold tracking-wider">
          <button className="w-40 h-10 rounded-xl bg-black border border-white  text-white text-sm">
            Join now
          </button>
          <button className="w-40 h-10 rounded-xl bg-white text-black border border-black  text-sm">
            Login
          </button>
        </div>
      </div>
      <GlobeDemo />
    </section>
  )
}

export default Welcome