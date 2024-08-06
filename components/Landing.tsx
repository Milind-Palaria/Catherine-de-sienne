"use client";
import React, { useEffect, useState, useRef } from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import createGlobe from "cobe";
import { motion } from "framer-motion";
import { IconBrandYoutubeFilled } from "@tabler/icons-react";
import Link from "next/link";
import TotalBalanceBox from "./TotalBalanceBox";
import { getAccount, getAccounts } from "@/lib/actions/bank.actions";
import { getLoggedInUser } from "@/lib/actions/user.actions";
import AnimatedCounter from "./AnimatedCounter";

interface LandingProps {
    accountsData: Account[];
    totalBanks: number;
    totalCurrentBalance: number;
}

export function Landing({ accountsData, totalBanks, totalCurrentBalance }: LandingProps) {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setVisible(true);
        }, 5000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className={`relative z-20 max-w-7xl mx-auto transition-opacity duration-1000 ${visible ? "opacity-100" : "opacity-0"
            } `}>
            <div className="relative">
                <div className="flex flex-col md:flex-row mt-[20vh] max-md:items-center max-md:justify-center md:mt-[30vh] xl:border rounded-md border-neutral-800 bg-[#000]/20 backdrop-blur-lg">
                    <FeatureCard key="Deploy in seconds" className="border-b lg:border-none -translate-y-32 !overflow-visible">
                        <TotalBalanceBox
                            accounts={accountsData}
                            totalBanks={totalBanks}
                            totalCurrentBalance={totalCurrentBalance}
                        />
                        <div className="flex flex-col w-full justify-end h-full text-center gap-2">
                            <p className="total-balance-label">
                                Total Current Balance
                            </p>
                            <div className="total-balance-amount flex-center gap-2">
                                <AnimatedCounter amount={totalCurrentBalance} />
                            </div>
                        </div>
                    </FeatureCard>
                    <FeatureCard
                        key="Deploy in seconds"
                        className={`p-4 max-md:pt-16 sm:p-8 border-b lg:border-none overflow-hidden`}
                    >
                        <FeatureTitle>Transfer in seconds</FeatureTitle>
                        <FeatureDescription>
                            With our blazing fast, state of the art, cutting edge, we are so back cloud servies (read AWS) - you can deploy your model in seconds.
                        </FeatureDescription>
                        <div className="h-full w-full"><SkeletonFour /></div>
                    </FeatureCard>
                </div>
            </div>
        </div>
    );
}

const FeatureCard = ({
    children,
    className,
}: {
    children?: React.ReactNode;
    className?: string;
}) => {
    return (
        <div className={cn(`relative `, className)}>
            {children}
        </div>
    );
};

const FeatureTitle = ({ children }: { children?: React.ReactNode }) => {
    return (
        <p className="max-w-3xl mx-auto text-left tracking-tight text-white text-xl md:text-2xl md:leading-snug">
            {children}
        </p>
    );
};

const FeatureDescription = ({ children }: { children?: React.ReactNode }) => {
    return (
        <p
            className={cn(
                "text-sm md:text-base max-w-3xl text-left mx-auto",
                "text-center font-normal text-neutral-300",
                "text-left max-w-sm mx-0 md:text-sm my-2"
            )}
        >
            {children}
        </p>
    );
};

export const SkeletonFour = () => {
    return (
        <div className="h-60 md:h-60 flex flex-col items-center relative bg-transparent mt-10">
            <Globe className="absolute -right-10 md:-right-10 -bottom-80 md:-bottom-72" />
        </div>
    );
};

export const Globe = ({ className }: { className?: string }) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        let phi = 0;

        if (!canvasRef.current) return;

        const globe = createGlobe(canvasRef.current, {
            devicePixelRatio: 2,
            width: 600 * 2,
            height: 600 * 2,
            phi: 0,
            theta: 0,
            dark: 1,
            diffuse: 1.2,
            mapSamples: 16000,
            mapBrightness: 6,
            baseColor: [0.3, 0.3, 0.3],
            markerColor: [0.1, 0.8, 1],
            glowColor: [1, 1, 1],
            markers: [
                // longitude latitude
                { location: [37.7595, -122.4367], size: 0.03 },
                { location: [40.7128, -74.006], size: 0.1 },
            ],
            onRender: (state) => {
                // Called on every animation frame.
                // `state` will be an empty object, return updated params.
                state.phi = phi;
                phi += 0.01;
            },
        });

        return () => {
            globe.destroy();
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            style={{ width: 600, height: 600, maxWidth: "100%", aspectRatio: 1 }}
            className={className}
        />
    );
};
