
import { GlobeDemo } from '@/components/ui/GlobeUse'
import { HeroButtons } from '@/components/ui/HeroButtons';
import HeroText from '@/components/ui/HeroText';

const Welcome = () => {
  
  return (
    <section className="relative bg-[#0D090A] h-screen w-full">
      <div className='absolute lg:mt-10 md:!top-2 top-[2vh] w-full flex flex-col justify-center items-center z-[9999]'>
        <HeroText/>
        <HeroButtons/>
      </div>
      <GlobeDemo />
    </section>
  )
}

export default Welcome