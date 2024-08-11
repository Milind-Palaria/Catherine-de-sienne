"use client"

import { motion, useAnimation } from "framer-motion";
import React, { useEffect } from "react";

interface AnimatedTitleProps {
    text: string;
  }
  
const AnimatedTitle: React.FC<AnimatedTitleProps>  = ({ text }) => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      opacity: 1,
      y: 0,
      transition: { duration: 1, delay: 3 }, // Animation delay of 5 seconds
    });
  }, [controls]);

  return (
    <motion.h2
      initial={{ opacity: 0, y: 10 }}
      animate={controls}
      className="bg-[#000]/30 backdrop-blur-md border border-white/30 rounded-md max-w-[35vw] md:max-w-[20vw] xl:max-w-[15vw] p-[2vw] md:p-[1vw] text-xl md:text-3xl text-[rgba(0,255,255,0.75)] font-medium font-secondary text-center m-auto mb-[2vh] md:mb-[4vh]"
    >
      {text}
    </motion.h2>
  );
};

export default AnimatedTitle;
