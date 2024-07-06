'use client';

import { useState, useEffect } from 'react';
import { sidebarLinks } from '@/constants';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import Footer from './Footer';
import PlaidLink from './PlaidLink';
import Loader from './Loader';

const Sidebar = ({ user }) => {
  const pathname = usePathname();
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleRouteChange = () => {
      setLoading(false);
    };

    handleRouteChange(); // Call once to handle the initial route
  }, [pathname]);

  const handleLinkClick = () => {
    setLoading(true);
  };

  return (
    <section className="sidebar">
      <nav className="flex flex-col gap-4">
        <Link href="/" className="mb-12 cursor-pointer flex items-center gap-2" onClick={handleLinkClick}>
          <Image
            src="/icons/logo.svg"
            width={34}
            height={34}
            alt="Company logo"
            className="size-[24px] max-xl:size-14"
          />
          <h1 className="sidebar-logo text-center">Catherine De Sienne</h1>
        </Link>

        {sidebarLinks.map((item) => {
          const isActive = pathname === item.route || pathname.startsWith(`${item.route}/`);

          return (
            <Link href={item.route} key={item.label} className={cn('sidebar-link', { 'bg-bank-gradient': isActive })} onClick={handleLinkClick}>
              <div className="relative size-6">
                <Image
                  src={item.imgURL}
                  alt={item.label}
                  fill
                  className={cn({ 'brightness-[3] invert-0': isActive })}
                />
              </div>
              <p className={cn("sidebar-label", { "!text-white": isActive })}>
                {item.label}
              </p>
            </Link>
          );
        })}

        <PlaidLink user={user} />
      </nav>

      <Footer user={user} />
      {loading && <Loader />} {/* Show the loader when loading */}
    </section>
  );
};

export default Sidebar;
