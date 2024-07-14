'use client'

import Link from 'next/link'
import React from 'react'
import { Button } from './moving-border'

export const HeroButtons = () => {
    return (
        <div className="absolute bottom-[10%] left-1/2 transform -translate-x-1/2 flex flex-row space-y-0 space-x-8 mt-5 font-semibold tracking-wider justify-center items-center z-[999]">
            <Link href={'/sign-in'} >
                <Button className=" w-28 md:w-44 bg-[#000]/5 text-white/80 border !border-white/50 text-[0.85rem]  md:text-[1.3rem] h-8 md:h-12 hover:bg-white/15 hover:text-white/90 duration-300 font-thin ">

                    Login
                </Button>
            </Link>
            <Link href={'/sign-up'} >

                <Button className=" w-28 md:w-44 bg-[#000]/5 text-white/80 border !border-white/50 text-[0.85rem]  md:text-[1.3rem] h-8 md:h-12 hover:bg-white/15 hover:text-white/90 duration-300 font-thin ">

                    Register
                </Button>
            </Link>

        </div>
    )
}
