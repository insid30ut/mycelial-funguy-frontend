import type { Metadata } from "next";
import { Poppins, Londrina_Solid } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/Footer';

const poppins = Poppins({
  variable: '--font-poppins',
  weight: ['400', '600', '700'],
  subsets: ['latin'],
});

const londrinaSolid = Londrina_Solid({
  variable: '--font-londrina-solid',
  weight: ['400', '900'],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Mycelial FunGuy',
  description: 'A groovy place for all things fungi.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <body
        className={`${poppins.variable} ${londrinaSolid.variable} font-sans antialiased flex flex-col min-h-screen`}
      >
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
