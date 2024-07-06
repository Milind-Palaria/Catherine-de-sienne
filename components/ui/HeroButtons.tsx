'use client'

import Link from 'next/link'
import React from 'react'

export const HeroButtons = () => {
    return (
        <div className="flex flex-row space-y-0 space-x-4 mt-5 font-semibold tracking-wider justify-center items-center">
            <Link href={'/sign-in'} >
                <button className="max-md:w-24 w-40 bg-white/5 text-white border !border-white/50 max-md:text-[0.75rem]  text-sm max-md:h-[1.75rem] h-10 max-md:rounded-md rounded-md  backdrop-blur-sm	">

                    Login
                </button>
            </Link>
            <Link href={'/sign-up'} >
                <button className="max-md:w-24 w-40 bg-white/5 text-white border !border-white/50 max-md:text-[0.75rem]  text-sm max-md:h-[1.75rem] h-10 max-md:rounded-md rounded-md  backdrop-blur-sm">

                    Join Now
                </button>
            </Link>

        </div>
    )
}
