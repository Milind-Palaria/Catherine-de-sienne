"use client";
import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useMediaQuery } from "react-responsive";
import { LampContainer } from "./ui/lamp";

interface UserProp {
  user?: string;
}

export function PaymentTransferLamp({ user }: UserProp) {
  const controls = useAnimation();
  const controls2 = useAnimation();

  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  useEffect(() => {
    if (isMobile) {
      controls.start({ opacity: 0.8, y: 0 });
    } else {
      controls.start({ opacity: 0.8, y: 0 });
    }
  }, [controls, isMobile]);

  useEffect(() => {
    if (isMobile) {
      controls2.start({ opacity: 0.7, y: 0 });
    } else {
      controls2.start({ opacity: 0.7, y: 0 });
    }
  }, [controls2, isMobile]);

  return (
    <LampContainer>
      <motion.h1
        initial={isMobile ? { opacity: 0.5, y: 0 } : { opacity: 0.5, y: 0 }}
        animate={controls}
        transition={{
          delay: 2,
          duration: 3,
          ease: "easeInOut",
        }}
        className="  bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl font-secondary"
      >
        Transfer Money
      </motion.h1>
      <motion.h1
        initial={isMobile ? { opacity: 0, y: 0 } : { opacity: 0, y: 0 }}
        animate={controls2}
        transition={{
          delay: 2,
          duration: 0.75,
          ease: "easeInOut",
        }}
        className="mt-0 bg-gradient-to-br from-slate-300 to-slate-500 py-2 px-2 bg-clip-text text-center text-xl font-medium tracking-tight text-transparent md:text-4xl font-secondary"
      >
        Effortlessly transfer money from one account to another.
      </motion.h1>
    </LampContainer>
  );
}
