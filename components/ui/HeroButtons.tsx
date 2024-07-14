'use client'

import Link from 'next/link'
import React from 'react'

export const HeroButtons = () => {
    return (
        <div className="flex flex-row space-y-0 space-x-4 mt-5 font-semibold tracking-wider justify-center items-center">
            <Link href={'/sign-in'} >
                <button className="font-secondary max-md:w-24 w-40 bg-white/5 text-white/70 border !border-white/50 max-md:text-[0.75rem]  text-md max-md:h-[1.75rem] h-10 max-md:rounded-md rounded-md  backdrop-blur-sm	hover:bg-white/15 hover:text-white/90 duration-300 font-thin">

                    Login
                </button>
            </Link>
            <Link href={'/sign-up'} >
                <button className="font-secondary max-md:w-24 w-40 bg-white/5 text-white/70 border !border-white/50 max-md:text-[0.75rem]  text-md max-md:h-[1.75rem] h-10 max-md:rounded-md rounded-md  backdrop-blur-sm	hover:bg-white/15 hover:text-white/90 duration-300 font-thin">

                    Register
                </button>
            </Link>

        </div>
    )
}
