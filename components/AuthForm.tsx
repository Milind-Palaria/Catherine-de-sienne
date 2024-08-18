'use client';
import Image from 'next/image'
import Link from 'next/link'
import React, { useState, useEffect, useRef } from 'react'
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import CustomInput from './CustomInput';
import { authFormSchema } from '@/lib/utils';
import { Loader2 } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { getLoggedInUser, signIn, signUp } from '@/lib/actions/user.actions';
import PlaidLink from './PlaidLink';
import { validStates, State } from './data/ValidStates';

const AuthForm = ({ type }: { type: string }) => {
  const [selectedState, setSelectedState] = useState('');
  const [guestLoginTriggered, setGuestLoginTriggered] = useState(false); // New state for guest login

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedState(event.target.value);
  };
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const formSchema = authFormSchema(type);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  // Function to handle guest login
  const handleGuestLogin = () => {
    form.setValue('email', 'guest@catherine.de.sienne');
    form.setValue('password', 'guest@catherine.de.sienne');
    setGuestLoginTriggered(true);
  };

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    setIsLoading(true);

    try {
      if (type === 'sign-up') {
        const userData = {
          firstName: data.firstName!,
          lastName: data.lastName!,
          address1: data.address1!,
          city: data.city!,
          state: data.state!,
          postalCode: data.postalCode!,
          dateOfBirth: data.dateOfBirth!,
          ssn: data.ssn!,
          email: data.email,
          password: data.password,
        };

        const newUser = await signUp(userData);
        setUser(newUser);
      }
      if (type === 'sign-in') {
        const response = await signIn({
          email: data.email,
          password: data.password,
        });
        if (response) router.push('/');
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (guestLoginTriggered) {
      form.handleSubmit(onSubmit)();
    }
  }, [guestLoginTriggered]);

  return (
    <section className="w-[85vw] md:w-[50vw] mx-auto rounded-xl md:rounded-2xl p-4 md:p-8 shadow-input bg-[#000]/20 backdrop-blur-lg border border-white">
      <header className='flex flex-col gap-3 md:gap-4 items-center pb-5'>
        <div className="flex flex-col gap-1 md:gap-3 items-center">
          <h1 className="text-24 lg:text-30 text-center font-semibold text-white">
            {user
              ? 'Link Account'
              : type === 'sign-in'
                ? 'Sign In'
                : 'Sign Up'}
          </h1>
        </div>
      </header>
      {user ? (
        <div className="flex flex-col gap-2">
          <PlaidLink user={user} variant="primary" />
          <div className="flex flex-col gap-2 pt-4 items-center text-center">
            <h1 className='text-16 md:text-26'>Caution:</h1>
            <h3 className='text-12 md:text-14 opacity-90'>While connecting use these credentials :</h3>
            <h1 className='text-16 md:text-20'><span className='opacity-80 underline'>Username</span> : user_good </h1>
            <h1 className='text-16 md:text-20'><span className='opacity-80 underline'>Password</span> : pass_good </h1>
            <p className='text-10 md:text-[14px] opacity-90 pt-2 md:pt-3 '>Keep clicking next on mobile & OTP.</p>
            <p className='text-10 md:text-[14px] opacity-90'>Select any type of bank account and agree to terms.</p>
            <p className='pb-0 pt-5 text-18'>This Project is in <span className='underline'>Sandbox Mode</span>.</p>
          </div>
        </div>
      ) : (
        <>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
              {type === 'sign-up' && (
                <>
                  <div className="flex w-full justify-around gap-2">
                    <CustomInput control={form.control} name="firstName" label="First Name" placeholder="Enter your first name" validStates={validStates} />
                    <CustomInput control={form.control} name="lastName" label="Last Name" placeholder="Enter your last name" validStates={validStates} />
                  </div>
                  <div className="flex w-full justify-around gap-2">
                    <CustomInput control={form.control} name="address1" label="Address" placeholder="Enter your specific address" validStates={validStates} />
                    <CustomInput control={form.control} name="city" label="City" placeholder="Enter your city" validStates={validStates} />
                  </div>
                  <div className="flex gap-2">
                    <CustomInput control={form.control} name="state" label="State" placeholder="Enter a US state" validStates={validStates} />
                    <CustomInput control={form.control} name="postalCode" label="Postal Code" placeholder="Enter 5 digit zipcode" validStates={validStates} />
                  </div>
                  <div className="flex gap-2">
                    <CustomInput control={form.control} name="dateOfBirth" label="Date of Birth" placeholder="YYYY-MM-DD" validStates={validStates} />
                    <CustomInput control={form.control} name="ssn" label="SSN" placeholder="Example: 1234" validStates={validStates} />
                  </div>
                </>
              )}
              <div className="flex flex-col gap-2">
                <CustomInput control={form.control} name="email" label="Email" placeholder="Enter your email" validStates={validStates} />
                <CustomInput control={form.control} name="password" label="Password" placeholder="Enter your password" validStates={validStates} />
              </div>
              <div className="flex flex-col gap-4">
                <Button type="submit" disabled={isLoading} className="bg-gradient-to-br relative group/btn from-zinc-900 to-zinc-900 block bg-zinc-800 text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]">
                  {isLoading ? (
                    <div className='relative'>
                      <Loader2 size={20} className="animate-spin" /> &nbsp;
                      <div className='-translate-y-10'>
                        Loading...
                      </div>
                    </div>
                  ) : type === 'sign-in'
                    ? 'Sign In →' : 'Sign Up →'}
                  <BottomGradient />
                </Button>
                
                {type === 'sign-in' && (

              
                <Button
                  type="button"
                  onClick={handleGuestLogin}
                  disabled={isLoading}
                  className="bg-gradient-to-br relative group/btn from-zinc-900 to-zinc-900 block bg-zinc-800 text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset] mb-3"
                >
                  {isLoading ? (
                    <div className='relative'>
                      <Loader2 size={20} className="animate-spin" /> &nbsp;
                      <div className='-translate-y-10'>
                        Loading...
                      </div>
                    </div>
                  ) : 'Login as Guest →'}
                  <BottomGradient />
                </Button>
                  )}
                {/* {type === 'sign-in' && (
                  <div className="flex justify-end text-sm">
                    <Link href="/forgot-password" className="underline text-xs text-slate-200 opacity-75 hover:opacity-100 duration-300">
                      Forgot Password?
                    </Link>
                  </div>
                )} */}
              </div>
            </form>
          </Form>
          <footer className="flex justify-center gap-2">
            {type === 'sign-in' ? (
              <p className="text-12 md:text-[14px] text-center text-white">
                {"Don't have an account? "}
                <Link href="/sign-up">
                  <span className="hover:underline text-primary hover:text-primary/80 font-semibold">
                    Sign up
                  </span>
                </Link>
              </p>
            ) : (
              <p className="text-12 md:text-[14px] text-center text-white mt-4">
                {"Already have an account? "}
                <Link href="/sign-in">
                  <span className="hover:underline text-primary hover:text-primary/80 font-semibold">
                    Sign In
                  </span>
                </Link>
              </p>
            )}
          </footer>
        </>
      )}
    </section>
  );
};
const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};
export default AuthForm;
