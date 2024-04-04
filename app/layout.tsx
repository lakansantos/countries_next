import type {Metadata} from 'next';
import {Roboto} from 'next/font/google';
import './globals.css';

const roboto = Roboto({
  subsets: ['latin'],
  style: ['normal'],
  weight: ['400', '700'],
});

export const metadata: Metadata = {
  title: 'Countries | Lakan Santos',
  description:
    'Where in the world? A UI frontend challenge from frontendmentor.io that uses RestCountries API to display different countries.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body className={roboto.className}>{children}</body>
    </html>
  );
}
