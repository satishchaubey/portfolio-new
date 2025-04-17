import type { Metadata } from "next";
import "./globals.css";
import SmoothScroll from '@/components/SmoothScroll'
import Header from "@/components/Header";
import { Roboto } from 'next/font/google';
import AnimatedFooter from "@/components/Footer";
import { Toaster } from "react-hot-toast";

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '500', '700'], // Choose as needed
  variable: '--font-roboto',
});


export const metadata: Metadata = {
  title: "Satish 🙋‍♂️",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`bg-black text-white ${roboto.variable}`}>
        <SmoothScroll />
        <Toaster position="top-center" />
        <Header/>
        {children}
        <AnimatedFooter/>
      </body>
    </html>
  );
}
