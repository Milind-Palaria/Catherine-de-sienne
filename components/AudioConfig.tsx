"use client"

import { useEffect, useRef, useState } from 'react';
import { AppProps } from 'next/app';
import Image from 'next/image';


export default function AudioConfig({
    children,
}: {
    children: React.ReactNode;
}) {
    const [activated, setActivated] = useState(false);
    const [showPrompt, setShowPrompt] = useState(false);
    const [fadeIn, setFadeIn] = useState(false);
    const [check, setCheck] = useState(false);

    const audioRef = useRef<HTMLAudioElement | null>(null);


    const playAudio = () => {
        // console.log("third")
        setCheck(false);
        if (audioRef.current) {
            audioRef.current.play().catch((error) => {
                console.log('Autoplay prevented:', error);
            });
        }
    };

    const pauseAudio = () => {
        setCheck(true);
        if (audioRef.current) {
            audioRef.current.pause();
        }
    };
    const handleActivation = (play: boolean) => {
        if (play) {
            playAudio();
            setCheck(!play);
            console.log("play :", !play)
        } else {
            pauseAudio();
            setCheck(!play);
            console.log("play :", !play)
        }
        setActivated(true);
    };
    useEffect(() => {
        const timer = setTimeout(() => {
            setShowPrompt(true);
            setTimeout(() => setFadeIn(true), 200);
            // console.log("second")
        }, 8000);
        // console.log("first");
        return () => clearTimeout(timer);
    }, []);
    return (
        <div className='relative z-[999999]'>
            <audio ref={audioRef} loop>
                <source src="/audio-editor-output.mp3" type="audio/mp3" />
                Your browser does not support the audio element.
            </audio>
            {
                activated ? (<div className='fixed max-md:top-3 max-md:left-[5%] md:top-10 md:right-10 backdrop-blur-md bg-zinc-950/10 text-white border-2 border-white/50 px-4 py-2 md:px-7 md:py-2 flex items-center justify-center gap-3  z-[99999] p-10 max-md:mt-[8px] rounded-[10rem] '>
                    {check ? 
                        <button onClick={playAudio}>
                        <Image  src="/icons/play-button.png"
                        width={24}
                        height={24}
                        alt="play" className='invert grayscale contrast-200 max-md:w-3'/></button> 
                        : 
                        <button onClick={pauseAudio}><Image  src="/icons/pause.png"
                        width={24}
                        height={24}
                        alt="pause" className='invert grayscale contrast-200 max-md:w-3'/></button>
                    }
                </div>)
                    : showPrompt && (<div className={`fixed h-screen w-full top-0 left-0 backdrop-blur-md duration-500 bg-zinc-950/10 flex items-center justify-center transition-opacity  z-[99999] ${fadeIn ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
                        <div className='h-[15%] md:h-[30%] w-[80%] border-2 flex items-center justify-center text-white flex-col bg-zinc-950/50'>

                            <h1 className='text-3xl md:text-6xl pb-5 md:pb-10'>  Enable Music ? </h1>
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
        </div>
    );
}