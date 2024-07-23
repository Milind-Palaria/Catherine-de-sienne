"use client";
import React from "react";
import Link from "next/link";
import {
  GlowingStarsBackgroundCard,
  GlowingStarsDescription,
  GlowingStarsTitle,
} from "./ui/glowing-stars";

export function NavigatingCards() {
  return (
    <div className="flex flex-wrap max-md:gap-5 md:p-20 items-center justify-center antialiased">
      <Link href="/my-banks">
        <GlowingStarsBackgroundCard>
          <GlowingStarsTitle>My Banks</GlowingStarsTitle>
          <div className="flex justify-between items-end">
            <GlowingStarsDescription>
              The power of full-stack to the frontend. Read the release notes.
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
              The power of full-stack to the frontend. Read the release notes.
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
              The power of full-stack to the frontend. Read the release notes.
            </GlowingStarsDescription>
            <div className="h-8 w-8 rounded-full bg-[hsla(0,0%,100%,.1)] flex items-center justify-center">
              <Icon />
            </div>
          </div>
        </GlowingStarsBackgroundCard>
      </Link>
      <Link href="/connect-banks">
        <GlowingStarsBackgroundCard>
          <GlowingStarsTitle>Connect Banks</GlowingStarsTitle>
          <div className="flex justify-between items-end">
            <GlowingStarsDescription>
              The power of full-stack to the frontend. Read the release notes.
            </GlowingStarsDescription>
            <div className="h-8 w-8 rounded-full bg-[hsla(0,0%,100%,.1)] flex items-center justify-center">
              <Icon />
            </div>
          </div>
        </GlowingStarsBackgroundCard>
      </Link>
    </div>
  );
}

const Icon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
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
