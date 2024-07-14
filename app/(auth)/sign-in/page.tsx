import AuthForm from '@/components/AuthForm'
import { AuthFormUi } from '@/components/AuthFormUi'
import DotPattern from '@/components/magicui/dot-pattern'
import { cn } from '@/lib/utils'

const SignIn = () => {
  return (
    <section className="flex-center size-full max-sm:px-6 bg-[#0D090A] text-white font-secondary">
    {/* <AuthForm type="sign-in" /> */}
    <AuthFormUi/>
  
  </section>
  )
}

export default SignIn