import type {Metadata} from 'next';
import {Nunito_Sans} from 'next/font/google';
import './globals.css';
import AppThemeProvider from './ThemeProvider';

const nunito = Nunito_Sans({
  subsets: ['latin'],
  style: ['normal'],
  weight: ['300', '600', '800'],
});

export const metadata: Metadata = {
  title: 'Countries | Lakan Santos',
  description:
    'Where in the world? A UI frontend challenge from frontendmentor.io that uses RestCountries API to display different countries.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body className={nunito.className}>
        <AppThemeProvider>{children}</AppThemeProvider>
      </body>
    </html>
  );
}
