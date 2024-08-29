"use client"

import { useEffect, useRef, useState } from 'react';
import { AppProps } from 'next/app';


export default function AudioConfig({
    children,
}: {
    children: React.ReactNode;
}) {
    const [activated, setActivated] = useState(false);
    const [showPrompt, setShowPrompt] = useState(false);
    const [fadeIn, setFadeIn] = useState(false);
    const audioRef = useRef<HTMLAudioElement | null>(null);


    const playAudio = () => {
        console.log("third")
        if (audioRef.current) {
            audioRef.current.play().catch((error) => {
                console.log('Autoplay prevented:', error);
            });
        }
    };

    const pauseAudio = () => {
        if (audioRef.current) {
            audioRef.current.pause();
        }
    };
    const handleActivation = (play: boolean) => {
        if (play) {
            playAudio();
        } else {
            pauseAudio();
        }
        setActivated(true);
    };
    useEffect(() => {
        const timer = setTimeout(() => {
            setShowPrompt(true);
            setTimeout(() => setFadeIn(true), 100);
            console.log("second")
        }, 8000);
console.log("first");
        return () => clearTimeout(timer);
    }, []);
    return (
        <>
            <audio ref={audioRef} loop>
                <source src="/BackgroundMusic.mp3" type="audio/mp3" />
                Your browser does not support the audio element.
            </audio>
            {
                activated ? (<div className='fixed max-md:bottom-2 max-md:left-[50%] max-md:translate-x-[-50%] md:top-10 md:right-10 rounded-md backdrop-blur-md bg-zinc-950/10 text-white  p-3 flex items-center justify-center gap-3 z-[999999999999999999999]'>

                    <button onClick={playAudio}>Play</button> <span>|</span>
                    <button onClick={pauseAudio}>Pause</button>
                </div>)
                    : showPrompt && (<div className={`fixed h-screen w-full top-0 left-0 backdrop-blur-md duration-500 bg-zinc-950/10 z-[999999999999999999999] flex items-center justify-center transition-opacity ${fadeIn ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
                        <div className='h-[30%] w-[80%] border-2 flex items-center justify-center text-white flex-col'>

                            <h1 className='text-3xl md:text-6xl pb-10'>  Enable Jazz ?</h1>
                            <div className=' flex items-center justify-center gap-10'>
                                <button className='text-xl md:text-3xl duration-300 hover:border-b-2 border-[#fff]' onClick={() => handleActivation(true)}>
                                    Yes
                                </button>
                                <button className='text-xl md:text-3xl duration-300 hover:border-b-2 border-[#ffffff]' onClick={() => handleActivation(false)}>
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