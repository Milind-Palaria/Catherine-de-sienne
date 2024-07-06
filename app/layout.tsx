import type { Metadata } from 'next';
import './globals.css';
import ClientComponent from '../components/ClientComponent';

export const dynamic = 'force-dynamic';
export const metadata: Metadata = {
  title: 'Catherine De Sienne - The Merchant Bank',
  description: 'Catherine De Sienne - The Merchant Bank',
  icons: '/icons/logo.svg',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ClientComponent>
          {children}
        </ClientComponent>
      </body>
    </html>
  );
}
