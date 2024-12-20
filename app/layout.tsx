import type { Metadata } from 'next';
import './globals.css';
import ClientWrapper from '@/components/ClientWrapper';
import { LoaderProvider } from '@/components/context/LoaderContext';
import AudioConfig from '@/components/AudioConfig';

export const dynamic = 'force-dynamic';
export const metadata: Metadata = {
  title: 'Catherine De Sienne - The Merchant Bank',
  description: 'Catherine De Sienne - The Merchant Bank',
  icons: '/globe2.png',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-primary">
        <LoaderProvider>
          <ClientWrapper>
            <AudioConfig>
            {children}
            </AudioConfig>
          </ClientWrapper>
        </LoaderProvider>
      </body>
    </html>
  );
}
