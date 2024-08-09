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
    const handleLoad = () => {
      setTimeout(() => {
        setLoading(false);
      }, 500);
    };

    // Add event listener to the window's load event
    window.addEventListener('load', handleLoad);

    // Cleanup the event listener
    return () => {
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
