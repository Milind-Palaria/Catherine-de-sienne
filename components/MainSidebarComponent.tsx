"use client";
import React, { useState, useRef } from "react";
import {
  IconArrowLeft,
  IconBrandTabler,
  IconSettings,
  IconUserBolt,
} from "@tabler/icons-react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Sidebar, SidebarBody, SidebarLink } from "./ui/Sidebar";
import ConnectingBankButton from "./ConnectingBankButton";

export function MainSidebarComponent() {
  const [open, setOpen] = useState(false);
  const connectingBankButtonRef = useRef(null);

  const handleClick = () => {
    if (connectingBankButtonRef.current) {
      connectingBankButtonRef.current.clickButton();
    }
  };

  const links = [
    {
      label: "My Banks",
      href: "/my-banks",
      icon: (
        <IconBrandTabler className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Transfer Payment",
      href: "/payment-transfer",
      icon: (
        <IconUserBolt className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Transaction History",
      href: "/transaction-history",
      icon: (
        <IconSettings className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Connect Bank +",
      href: "#",
      icon: (
        <IconArrowLeft className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
      onClick: handleClick,
    },
  ];

  return (
    <div
      className={cn(
        "rounded-md flex flex-col md:flex-row bg-transparent w-fit mx-auto overflow-hidden "
      )}
    >
      <Sidebar open={open} setOpen={setOpen}>
        <SidebarBody className="justify-between gap-10">
          <div className="flex flex-col flex-1 overflow-y-auto">
            {open ? <Logo /> : <LogoIcon />}
            <div className="mt-8 flex flex-col gap-2">
              {links.map((link, idx) => (
                <div
                  key={idx}
                  onClick={link.onClick}
                  className="cursor-pointer"
                >
                  <SidebarLink link={link} />
                </div>
              ))}
            </div>
          </div>
          <div>
            <SidebarLink
              link={{
                label: "User Name",
                href: "/",
                icon: (
                  <Image
                    src="/pic.jpg"
                    className="h-7 w-7 flex-shrink-0 rounded-full"
                    width={50}
                    height={50}
                    alt="Avatar"
                  />
                ),
              }}
            />
          </div>
        </SidebarBody>
      </Sidebar>
      {/* Render ConnectingBankButton in hidden state */}
      <ConnectingBankButton ref={connectingBankButtonRef} />
    </div>
  );
}

export const Logo = () => {
  return (
    <Link
      href="/"
      className="font-normal flex space-x-2 items-center text-sm text-black py-1 relative z-20"
    >
      <Image
        src="/icons/cathedral-logo.png"
        className="h-7 w-7 flex-shrink-0 rounded-full"
        width={50}
        height={50}
        alt="Avatar"
      />
      <div className="h-5 w-6 bg-black dark:bg-white rounded-br-lg rounded-tr-sm rounded-tl-lg rounded-bl-sm flex-shrink-0" />
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="font-medium text-black dark:text-white whitespace-pre"
      >
        Catherine de Sienne
      </motion.span>
    </Link>
  );
};

export const LogoIcon = () => {
  return (
    <Link
      href="/"
      className="font-normal flex space-x-2 items-center text-sm text-black py-1 relative z-20"
    >
      <Image
        src="/icons/cathedral-logo.png"
        className="h-7 w-7 flex-shrink-0 rounded-full"
        width={50}
        height={50}
        alt="Avatar"
      />
    </Link>
  );
};
