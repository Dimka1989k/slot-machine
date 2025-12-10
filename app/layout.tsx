import "./globals.css";
import type { Metadata } from "next";
import localFont from 'next/font/local';
import { Bungee } from 'next/font/google';
import { Poetsen_One } from 'next/font/google';
import BackgroundMusic from "./components/BackgroundMusic";

const myFont = localFont({
  src: './font/PocketMonk.woff2',
  
})


const poetsen = Poetsen_One({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-poetsen',
});


const bungee = Bungee({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bungee",
});


export const metadata: Metadata = {
  title: "Tokyo Slots",
  description: "Simple slot machine game on Next.js, Zustand & Tailwind.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="uk" className={`${bungee.variable} ${myFont.className} ${poetsen.variable}`}>
      <body className="flex-1 ">
        <BackgroundMusic/>
        {children}
      </body>
    </html>
  );
}
