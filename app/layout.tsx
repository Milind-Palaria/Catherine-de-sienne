// app/layout.tsx
import type { Metadata } from 'next';
import './globals.css';
import ClientComponent from '../components/ClientComponent';
import { useEffect } from 'react';

export const dynamic = 'force-dynamic';
export const metadata: Metadata = {
  title: 'Catherine De Sienne - The Merchant Bank',
  description: 'Catherine De Sienne - The Merchant Bank',
  icons: '/icons/cathedral-logo.png',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {


  return (
    <html lang="en">
      <body className="font-primary">
        <ClientComponent>
          {children}
        </ClientComponent>
      </body>
    </html>
  );
}
