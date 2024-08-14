"use client";
import React, { useState, useRef, useEffect } from "react";
import {
  IconBuildingBank,
  IconHome,
  IconCashRegister,
  IconHomePlus,
  IconCreditCardPay,
  IconLogout
} from "@tabler/icons-react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Sidebar, SidebarBody, SidebarLink } from "./ui/Sidebar";
import ConnectingBankButton from "./ConnectingBankButton";
import { logoutAccount } from "@/lib/actions/user.actions";
import { useRouter } from "next/navigation";

export function MainSidebarComponent({ user }: MobileNavProps) {
  const [open, setOpen] = useState(false);
  const connectingBankButtonRef = useRef(null);
  const router = useRouter();
  const handleLogOut = async () => {
    const loggedOut = await logoutAccount();

    if(loggedOut) router.push('/welcome')
  }
  useEffect(() => {
  console.log(user)
  
  }, [])

  const handleClick = () => {
    if (connectingBankButtonRef.current) {
      connectingBankButtonRef.current.clickButton();
    }
  };


  const links = [
    {
      label: "Home",
      href: "/",
      icon: (
        <IconHome className="text-[#000]/60 dark:text-neutral-200 h-6 w-6 flex-shrink-0" />
      ),
    },
    {
      label: "My Banks",
      href: "/my-banks",
      icon: (
        <IconBuildingBank className="text-[#000]/60 dark:text-neutral-200 h-6 w-6 flex-shrink-0" />
      ),
    },
    {
      label: "Transfer Payment",
      href: "/payment-transfer",
      icon: (
        <IconCreditCardPay className="text-[#000]/60 dark:text-neutral-200 h-6 w-6 flex-shrink-0" />
      ),
    },
    {
      label: "Transaction History",
      href: "/transaction-history",
      icon: (
        <IconCashRegister className="text-[#000]/60 dark:text-neutral-200 h-6 w-6 flex-shrink-0" />
      ),
    },
    {
      label: "Connect Bank +",
      href: "#",
      icon: (
        <IconHomePlus className="text-[#000]/60 dark:text-neutral-200 h-6 w-6 flex-shrink-0" />
      ),
      onClick: handleClick,
    },
    {
      label: "Logout",
      href: "#",
      icon: (
        <IconLogout className="text-[#000]/60 dark:text-neutral-200 h-6 w-6 flex-shrink-0" />
      ),
      onClick: handleLogOut,
    },
  ];

  return (
    <div
      className={cn(
        "rounded-md flex flex-col md:flex-row bg-transparent w-fit mx-auto overflow-hidden"
      )}
    >
      <Sidebar open={open} setOpen={setOpen}>
        <SidebarBody className="justify-between gap-10 ">
          <div className="flex flex-col flex-1 overflow-y-auto " style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            {open ? <Logo /> : <LogoIcon />}
            <div className="mt-8 flex flex-col gap-2">
              {links.map((link, idx) => (
                <div
                  key={idx}
                  onClick={link.onClick}
                  className="cursor-pointer "
                >
                  <SidebarLink link={link} />
                </div>
              ))}
            </div>
          </div>
          <div>
            <SidebarLink
              link={{
                label: `${user.firstName} ${user.lastName}`,
                href: "/",
                icon: (
                  <Image
                    src="/pic.jpg"
                    className="h-7 w-7 flex-shrink-0 rounded-full border border-[#000]"
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
        src="/globe.png"
        className="h-7 w-7 flex-shrink-0 rounded-full"
        width={50}
        height={50}
        alt="Avatar"
      />
      <div className="h-5 w-6 bg-black dark:bg-white rounded-br-lg rounded-tr-sm rounded-tl-lg rounded-bl-sm flex-shrink-0" />
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="font-bold text-[#000] dark:text-white whitespace-pre !font-primary tracking-wider text-xl -translate-x-4"
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
        src="/globe.png"
        className="h-7 w-7 flex-shrink-0 rounded-full"
        width={50}
        height={50}
        alt="Avatar"
      />
    </Link>
  );
};
