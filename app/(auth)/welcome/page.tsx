import DotPattern from '@/components/magicui/dot-pattern';
import { GlobeDemo } from '@/components/ui/GlobeUse'
import { HeroButtons } from '@/components/ui/HeroButtons';
import HeroText from '@/components/ui/HeroText';
import { cn } from '@/lib/utils';

const Welcome = () => {
  
  return (
    <>
    <section className="relative bg-[#0D090A] h-screen w-full">
   
      <div className='absolute lg:mt-14 md:!top-2 top-[2vh] w-full flex flex-col justify-center items-center z-[9999]'>
        <HeroText/>
        <HeroButtons/>
      </div>
      <GlobeDemo />
      <DotPattern
        className={cn(
          "[mask-image:radial-gradient(70vh_circle_at_center,white,transparent)] z-0",
          "md:[mask-image:radial-gradient(45vw_circle_at_center,white,transparent)] !z-0 opacity-50"
        )}
      />
    </section>
    </>
  )
}

export default Welcome