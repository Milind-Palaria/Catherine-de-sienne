import AuthForm from '@/components/AuthForm'
import Link from 'next/link'
import React from 'react'

const SignUp = async () => {
  return (
    <section className="min-h-screen overflow-hidden flex-center flex-col size-full max-sm:px-6 bg-[#0D090A] text-white font-secondary pb-6">
      <Link href="/welcome" className="cursor-pointer flex items-center font-primary gap-2">
          <h1 className="text-[10vw] md:text-[7vw]  w-full font-semibold text-[#EAF2EF] flex flex-col text-center opacity-85 translate-y-5 md:translate-y-12">Catherine de Sienne</h1>
        </Link>
      <AuthForm type="sign-up" />
    </section>
  )
}

export default SignUp