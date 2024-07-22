'use client';

import React, { useState, useEffect } from 'react';
import CountUp from 'react-countup';

const AnimatedCounter = ({ amount }: { amount: number }) => {
  const [startCount, setStartCount] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setStartCount(true);
    }, 6000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full text-[rgba(0,255,255,0.7)] font-medium font-secondary text-center tracking-[4px]">
      {startCount && (
        <CountUp 
          decimals={2}
          decimal="."
          prefix="₹"
          end={amount} 
        />
      )}
    </div>
  )
}

export default AnimatedCounter;
