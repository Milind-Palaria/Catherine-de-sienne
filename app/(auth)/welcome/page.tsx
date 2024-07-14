import DotPattern from '@/components/magicui/dot-pattern';
import { GlobeDemo } from '@/components/ui/GlobeUse'
import { HeroButtons } from '@/components/ui/HeroButtons';
import HeroText from '@/components/ui/HeroText';
import { cn } from '@/lib/utils';

const Welcome = () => {

  return (
    <>
      <section className="relative bg-[#0D090A] h-screen w-full">
        <div className='absolute mt-0 md:mt-1  top-[1.75vh] md:top-2 w-full flex flex-col justify-center items-center z-[5]'>
          <HeroText />
        </div>
          <HeroButtons />
        <GlobeDemo />
        <DotPattern
          className={cn(
            "[mask-image:radial-gradient(70vh_circle_at_center,white,transparent)] !z-0 opacity-50",
            "md:[mask-image:radial-gradient(45vw_circle_at_center,white,transparent)] !z-0 opacity-50"
          )}
        />
      </section>
    </>
  )
}

export default Welcome