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

  return (
    <div>
      {loading && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#000',
            zIndex: 9999, 
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
          <h1 className='loader-text'>Loading...</h1>
          <style jsx>{`
            @keyframes spin {
              to {
                transform: rotate(360deg);
              }
            }
              .loader-text{
              font-size:10vh;
              color:white;
              }
          `}</style>
        </div>
      )}

      <div style={{ visibility: loading ? 'hidden' : 'visible' }}>
        <ClientComponent>
            {children}
        </ClientComponent>
      </div>
    </div>
  );
}
