'use client';
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
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

const validStates = [
  { abbreviation: 'AL', name: 'Andhra Pradesh' },
  { abbreviation: 'AK', name: 'Arunachal Pradesh' },
  { abbreviation: 'AZ', name: 'Assam' },
  { abbreviation: 'AR', name: 'Bihar' },
  { abbreviation: 'CA', name: 'Chhattisgarh' },
  { abbreviation: 'CO', name: 'Goa' },
  { abbreviation: 'CT', name: 'Gujarat' },
  { abbreviation: 'DE', name: 'Haryana' },
  { abbreviation: 'FL', name: 'Himachal Pradesh' },
  { abbreviation: 'GA', name: 'Jharkhand' },
  { abbreviation: 'HI', name: 'Karnataka' },
  { abbreviation: 'ID', name: 'Kerala' },
  { abbreviation: 'IL', name: 'Madhya Pradesh' },
  { abbreviation: 'IN', name: 'Maharashtra' },
  { abbreviation: 'IA', name: 'Manipur' },
  { abbreviation: 'KS', name: 'Meghalaya' },
  { abbreviation: 'KY', name: 'Mizoram' },
  { abbreviation: 'LA', name: 'Nagaland' },
  { abbreviation: 'ME', name: 'Odisha' },
  { abbreviation: 'MD', name: 'Punjab' },
  { abbreviation: 'MA', name: 'Rajasthan' },
  { abbreviation: 'MI', name: 'Sikkim' },
  { abbreviation: 'MN', name: 'Tamil Nadu' },
  { abbreviation: 'MS', name: 'Telangana' },
  { abbreviation: 'MO', name: 'Tripura' },
  { abbreviation: 'MT', name: 'Uttar Pradesh' },
  { abbreviation: 'NE', name: 'Uttarakhand' },
  { abbreviation: 'NV', name: 'West Bengal' },
  { abbreviation: 'NH', name: 'Andaman and Nicobar Islands' },
  { abbreviation: 'NJ', name: 'Chandigarh' },
  { abbreviation: 'NM', name: 'Dadra and Nagar Haveli and Daman and Diu' },
  { abbreviation: 'NY', name: 'Lakshadweep' },
  { abbreviation: 'NC', name: 'Delhi' },
  { abbreviation: 'ND', name: 'Puducherry' },
  { abbreviation: 'OH', name: 'Ladakh' },
  { abbreviation: 'OK', name: 'Jammu and Kashmir' },
  { abbreviation: 'OR', name: 'Goa' },
  { abbreviation: 'PA', name: 'Maharashtra' },
  { abbreviation: 'RI', name: 'Gujarat' },
  { abbreviation: 'SC', name: 'West Bengal' },
  { abbreviation: 'SD', name: 'Bihar' },
  { abbreviation: 'TN', name: 'Punjab' },
  { abbreviation: 'TX', name: 'Odisha' },
  { abbreviation: 'UT', name: 'Rajasthan' },
  { abbreviation: 'VT', name: 'Sikkim' },
  { abbreviation: 'VA', name: 'Uttar Pradesh' },
  { abbreviation: 'WA', name: 'Meghalaya' },
  { abbreviation: 'WV', name: 'Tripura' },
  { abbreviation: 'WI', name: 'Nagaland' },
  { abbreviation: 'WY', name: 'Manipur' }
];


const AuthForm = ({ type }: { type: string }) => {
  const [selectedState, setSelectedState] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>)  => {
    setSelectedState(event.target.value);
  };
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const formSchema = authFormSchema(type);
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: ''
    },
  })

  // 2. Define a submit handler.
  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    setIsLoading(true);

    try {
      // Sign up with Appwrite & create plaid token

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
          password: data.password
        }

        const newUser = await signUp(userData);

        setUser(newUser);
      }
      if (type === 'sign-in') {
        const response = await signIn({
          email: data.email,
          password: data.password,
        })
        if (response) router.push('/')
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }
  return (
    <section className="auth-form">
      <header className='flex flex-col gap-5 md:gap-8'>
        <Link href="/" className="cursor-pointer flex items-center gap-1">
          <Image
            src="/icons/logo.svg"
            width={34}
            height={34}
            alt="Horizon logo"
          />
          <h1 className="text-26 font-ibm-plex-serif font-bold text-black-1">Horizon</h1>
        </Link>
        <div className="flex flex-col gap-1 md:gap-3">
          <h1 className="text-24 lg:text-36 font-semibold text-gray-900">
            {user
              ? 'Link Account'
              : type === 'sign-in'
                ? 'Sign In'
                : 'Sign Up'
            }
            <p className="text-16 font-normal text-gray-600">
              {user
                ? 'Link your account to get started'
                : 'Please enter your details'
              }
            </p>
          </h1>
        </div>
      </header>
      {user ? (
        <div className="flex flex-col gap-4">
          <PlaidLink user={user} variant="primary" />
        </div>
      ) : (
        <>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              {type === 'sign-up' && (
                <>
                  <div className="flex gap-4">
                    <CustomInput control={form.control} name='firstName' label="First Name" placeholder='Enter your first name'  validStates={validStates}/>
                    <CustomInput control={form.control} name='lastName' label="Last Name" placeholder='Enter your first name'  validStates={validStates}/>
                  </div>
                  <CustomInput control={form.control} name='address1' label="Address" placeholder='Enter your specific address'  validStates={validStates}/>
                  <CustomInput control={form.control} name='city' label="City" placeholder='Enter your city'  validStates={validStates}/>
                  {/* <div className=' flex flex-wrap flex-col justify-center items-center gap-3 w-full p-3 bg-blue-600/50 rounded-lg '>
                  <h1>Valid US State Codes </h1>
                 <div className='flex flex-wrap  gap-2 justify-center items-center bg-white'>

                  --  {validStates.map((data) => (<span>{data} -- </span> ))}
                 </div>
                    </div> */}
                  <div className="flex gap-4">
                    <CustomInput control={form.control} name='state' label="State" placeholder='Enter a US state' validStates={validStates}/>
                    {/* <div>
                      <label htmlFor="state">Select your state:</label>
                      <select id="state" value={selectedState} onChange={handleChange}>
                        {validStates.map((state) => (
                          <option key={state.abbreviation} value={state.abbreviation}>
                            {state.name}
                          </option>
                        ))}
                      </select>
                    </div> */}
                    <CustomInput control={form.control} name='postalCode' label="Postal Code" placeholder='Enter 5 digit zipcode'  validStates={validStates}/>
                  </div>
                  <div className="flex gap-4">
                    <CustomInput control={form.control} name='dateOfBirth' label="Date of Birth" placeholder='YYYY-MM-DD'  validStates={validStates}/>
                    <CustomInput control={form.control} name='ssn' label="SSN" placeholder='Example: 1234'  validStates={validStates}/>
                  </div>
                </>
              )}
              <CustomInput control={form.control} name='email' label="Email" placeholder='Enter your email'  validStates={validStates}/>
              <CustomInput control={form.control} name='password' label="Password" placeholder='Enter your password'  validStates={validStates}/>
              <div className="flex flex-col gap-4">
                <Button type="submit" disabled={isLoading} className="form-btn">
                  {isLoading ? (
                    <>
                      <Loader2 size={20} className="animate-spin" /> &nbsp;
                      Loading...
                    </>
                  ) : type === 'sign-in'
                    ? 'Sign In' : 'Sign Up'}
                </Button>
              </div>
            </form>
          </Form>
          <footer className="flex justify-center gap-1">
            <p className="text-14 font-normal text-gray-600">
              {type === 'sign-in'
                ? "Don't have an account?"
                : "Already have an account?"}
            </p>
            <Link href={type === 'sign-in' ? '/sign-up' : '/sign-in'} className="form-link">
              {type === 'sign-in' ? 'Sign up' : 'Sign in'}
            </Link>
          </footer>
        </>
      )}
    </section>
  )
}
export default AuthForm