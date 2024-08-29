"use client"

import { useEffect, useRef } from 'react';
import { AppProps } from 'next/app';


export default function AudioConfig({
    children,
}: {
    children: React.ReactNode;
}) {

    const audioRef = useRef<HTMLAudioElement | null>(null);

const activated= false;
    const playAudio = () => {
        if (audioRef.current) {
            audioRef.current.play().catch((error) => {
                console.log('Autoplay prevented:', error);
            });
        }
    };

    useEffect(() => {
        playAudio();
    }, []);

    const pauseAudio = () => {
        if (audioRef.current) {
            audioRef.current.pause();
        }
    };

    return (
        <>
            <audio ref={audioRef} loop>
                <source src="/BackgroundMusic.mp3" type="audio/mp3" />
                Your browser does not support the audio element.
            </audio>
            {
                activated ? (<div className='fixed top-10 right-10 bg-white text-zinc-900 p-5 flex items-center justify-center gap-5 z-[999999999999999999999]'>

                    <button onClick={playAudio}>Play</button>
                    <button onClick={pauseAudio}>Pause</button>
                </div>)
                    : (<div className='fixed h-screen w-full top-0 left-0 backdrop-blur-md duration-300 bg-zinc-950/10 z-[999999999999999999999] flex items-center justify-center'>
                        <div className='h-[30%] w-[80%] border-2 flex items-center justify-center text-white flex-col'>

                            <h1 className='text-3xl md:text-6xl pb-10'>  Enable Jazz ?</h1>
                            <div className=' flex items-center justify-center gap-10'>
                                <button className='text-xl md:text-3xl duration-300 hover:border-b-2 border-[#fff]' onClick={playAudio}>
                                    Yes
                                </button>
                                <button className='text-xl md:text-3xl duration-300 hover:border-b-2 border-[#ffffff]' onClick={pauseAudio}>
                                    No
                                </button>
                            </div>
                        </div>
                    </div>)
            }


            {children}
        </>
    );
}