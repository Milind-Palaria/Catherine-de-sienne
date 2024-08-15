'use client';

import { useState, useEffect } from 'react';
import ClientComponent from './ClientComponent';
import MainLoader from './MainLoader';

export default function ClientWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const stopLoader = () => setLoading(false);

    const maxLoadTime = setTimeout(stopLoader, 10000);
    const handleLoad = () => {
      clearTimeout(maxLoadTime);
      setTimeout(stopLoader, 5000);
    };

    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
    }

    return () => {
      clearTimeout(maxLoadTime);
      window.removeEventListener('load', handleLoad);
    };
  }, []);

  return (
    <div>
      {loading && (
        <MainLoader />
      )}

      <div style={{ visibility: loading ? 'hidden' : 'visible' }}>
        <ClientComponent>
          {children}
        </ClientComponent>
      </div>
    </div>
  );
}
