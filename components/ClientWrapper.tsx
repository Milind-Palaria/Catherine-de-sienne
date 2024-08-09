'use client';

import { useState, useEffect } from 'react';
import ClientComponent from './ClientComponent';

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

  if (loading) {
    return (
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100vh',
        }}
      >
        <div
          style={{
            border: '4px solid rgba(0, 0, 0, 0.1)',
            borderLeftColor: '#000',
            borderRadius: '50%',
            width: '40px',
            height: '40px',
            animation: 'spin 1s linear infinite',
          }}
        />
        <style jsx>{`
          @keyframes spin {
            to {
              transform: rotate(360deg);
            }
          }
        `}</style>
      </div>
    );
  }

  return <ClientComponent>{children}</ClientComponent>;
}
