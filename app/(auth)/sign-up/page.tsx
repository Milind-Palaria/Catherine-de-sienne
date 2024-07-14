import AuthForm from '@/components/AuthForm'
import React from 'react'

const SignUp = async () => {
  return (
    <section className="flex-center size-full max-sm:px-6 bg-[#0D090A] text-white">
      <AuthForm type="sign-up" />
    </section>
  )
}

export default SignUp