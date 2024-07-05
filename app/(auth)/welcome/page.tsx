import AuthForm from '@/components/AuthForm'
import { GlobeDemo } from '@/components/ui/GlobeUse'
import { TypewriterEffectSmooth } from '@/components/ui/TypewriterEffect'

const words = [
  {
    text: "Reimagining",
  },
  {
    text: "Banking,",
  },
  {
    text: "Empowering",
  },
  {
    text: "Your",
  },
  {
    text: "Future.",
    className: "text-blue-500 dark:text-blue-500",
  },
];
const Welcome = () => {
  return (
    <section className="relative bg-[#000] h-screen w-full">
      <div className='absolute top-0 w-full text-center flex flex-col justify-center items-center '>
        <TypewriterEffectSmooth words={words} />
        {/* <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
          <button className="w-40 h-10 rounded-xl bg-black border dark:border-white border-transparent text-white text-sm">
            Join now
          </button>
          <button className="w-40 h-10 rounded-xl bg-white text-black border border-black  text-sm">
            Signup
          </button>
        </div> */}
      </div>
      {/* <GlobeDemo /> */}
    </section>
  )
}

export default Welcome