"use client"

import { useEffect, useRef } from 'react';
import { AppProps } from 'next/app';


export default function AudioConfig({
    children,
  }: {
    children: React.ReactNode;
  }) {

    const audioRef = useRef<HTMLAudioElement | null>(null);

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
        <div className='fixed top-10 right-10 bg-white text-zinc-900 p-5 flex items-center justify-center gap-5 z-[999999999999999999999]'>

        <button onClick={playAudio}>Play</button>
        <button onClick={pauseAudio}>Pause</button>
        </div>
  
        {children}
      </>
    );
  }