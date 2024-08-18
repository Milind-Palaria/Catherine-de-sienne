"use client";

import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import Loader from '../components/Loader';
import { useLoader } from './context/LoaderContext';

export default function ClientComponent({ children }: { children: React.ReactNode }) {
  const { loading, setLoading } = useLoader();
  const pathname = usePathname();
  const prevPathnameRef = useRef(pathname);

  useEffect(() => {
    if (pathname !== prevPathnameRef.current) {
      setLoading(true);
      prevPathnameRef.current = pathname;
    }

    const timeoutId = setTimeout(() => {
      setLoading(false);
    }, 300);

    return () => clearTimeout(timeoutId);
  }, [pathname, setLoading]);

  return (
    <>
      {loading && <Loader />}
      {children}
    </>
  );
}
