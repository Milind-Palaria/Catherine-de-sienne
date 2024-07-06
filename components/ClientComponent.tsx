"use client";

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation'; // Correct import for client-side routing
import Loader from '../components/Loader';

export default function ClientComponent({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(false);
  const pathname = usePathname();
  const [prevPathname, setPrevPathname] = useState(pathname);

  useEffect(() => {
    if (pathname !== prevPathname) {
      setLoading(true);
      setPrevPathname(pathname);
    }

    const timeoutId = setTimeout(() => {
      setLoading(false);
    }, 300); // Adjust this delay as needed to simulate loading

    return () => clearTimeout(timeoutId);
  }, [pathname, prevPathname]);

  return (
    <>
      {loading && <Loader />}
      {children}
    </>
  );
}
