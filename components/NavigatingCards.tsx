"use client";
import React, { useRef } from "react";
import Link from "next/link";
import {
  GlowingStarsBackgroundCard,
  GlowingStarsDescription,
  GlowingStarsTitle,
} from "./ui/glowing-stars";
import ConnectingBankButton from "./ConnectingBankButton";

export function NavigatingCards() {
  const connectingBankButtonRef = useRef(null);

  const handleConnectBankClick = (e) => {
    e.preventDefault();
    if (connectingBankButtonRef.current) {
      connectingBankButtonRef.current.clickButton();
    }
  };

  return (
    <div className="flex flex-wrap max-md:gap-5 md:p-20 items-center justify-center antialiased md:px-[10rem]">
      <Link href="/my-banks">
        <GlowingStarsBackgroundCard>
          <GlowingStarsTitle>My Banks</GlowingStarsTitle>
          <div className="flex justify-between items-end">
            <GlowingStarsDescription>
            View and manage all connected bank accounts in one location.
            </GlowingStarsDescription>
            <div className="h-8 w-8 rounded-full bg-[hsla(0,0%,100%,.1)] flex items-center justify-center">
              <Icon />
            </div>
          </div>
        </GlowingStarsBackgroundCard>
      </Link>
      <Link href="/payment-transfer">
        <GlowingStarsBackgroundCard>
          <GlowingStarsTitle>Transfer Payments</GlowingStarsTitle>
          <div className="flex justify-between items-end">
            <GlowingStarsDescription>
            Swiftly transfer funds between your linked bank accounts with ease.
            </GlowingStarsDescription>
            <div className="h-8 w-8 rounded-full bg-[hsla(0,0%,100%,.1)] flex items-center justify-center">
              <Icon />
            </div>
          </div>
        </GlowingStarsBackgroundCard>
      </Link>
      <Link href="/transaction-history">
        <GlowingStarsBackgroundCard>
          <GlowingStarsTitle>Transaction History</GlowingStarsTitle>
          <div className="flex justify-between items-end">
            <GlowingStarsDescription>
            Access comprehensive & detailed transaction records for all accounts.
            </GlowingStarsDescription>
            <div className="h-8 w-8 rounded-full bg-[hsla(0,0%,100%,.1)] flex items-center justify-center">
              <Icon />
            </div>
          </div>
        </GlowingStarsBackgroundCard>
      </Link>
      <Link href="#" onClick={handleConnectBankClick}>
        <GlowingStarsBackgroundCard>
          <GlowingStarsTitle>Connect Banks</GlowingStarsTitle>
          <div className="flex justify-between items-end">
            <GlowingStarsDescription>
            Effortlessly connect & manage multiple accounts in one unified platform.
            </GlowingStarsDescription>
            <div className="h-8 w-8 rounded-full bg-[hsla(0,0%,100%,.1)] flex items-center justify-center">
              <Icon />
            </div>
          </div>
        </GlowingStarsBackgroundCard>
      </Link>
      {/* Render ConnectingBankButton in hidden state */}
      <ConnectingBankButton ref={connectingBankButtonRef} />
    </div>
  );
}

const Icon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className="h-4 w-4 text-white stroke-2"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
      />
    </svg>
  );
};
