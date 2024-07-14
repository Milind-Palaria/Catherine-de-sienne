import AuthForm from '@/components/AuthForm'
import { AuthFormUi } from '@/components/AuthFormUi'
import DotPattern from '@/components/magicui/dot-pattern'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'

const SignIn = () => {
  return (
    <section className="h-screen flex-center flex-col size-full max-sm:px-6 bg-[#0D090A] text-white font-secondary">
       {/* <Link href="/welcome" className=" absolute cursor-pointer flex items-center font-primary gap-2">
          <Image
            src="/icons/cathedral-logo.png"
            width={100}
            height={100}
            alt="logo"
          />

        </Link> */}
        <Link href="/welcome" className="cursor-pointer flex items-center font-primary gap-2">
          <h1 className="text-[10vw] md:text-[7vw]  w-full font-semibold text-[#EAF2EF] flex flex-col text-center opacity-85 translate-y-5 md:translate-y-12">Catherine de Sienne</h1>
        </Link>
    <AuthForm type="sign-in" />
    {/* <AuthFormUi/> */}
  
  </section>
  )
}

export default SignIn