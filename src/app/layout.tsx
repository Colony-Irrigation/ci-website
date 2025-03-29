import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import PhoneCall from "@/components/Phonecall";
import Link from "next/link";
import Email from "@/components/Email";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

// const timesNewRoman = TimesNew

export const metadata: Metadata = {
  title: "Colony Irrigation",
  description: "Professional landscaping, lawncare, and irrigation services based in Canton, Michigan",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased bg-white-muted `}
      >
        <Navbar />
        <main className="min-h-screen">
            {children}
        </main>
        <footer className="bg-amber-950/70 p-4 text-center space-y-1 text-white-muted text-sm mt-12">
            <div>Colony Irrigation - P.O. Box 6011 Plymouth, MI 48170</div>
            <div><Email address="anthony@colonyirrigation.com" >anthony@colonyirrigation.com</Email> - <PhoneCall number={7343985837}  className="underline">(734) 398-5837</PhoneCall></div>
            <div>Copyright © {new Date().getFullYear()} | All rights, images, & text reserved</div>
            <div><Link href="/" className="underline">Privacy Policy</Link> | <Link href="/"  className="underline">Terms of use</Link></div>
            {/* <div>Site by <Link href="https://www.linkedin.com/in/edward-badel-7472a02a3/"  className="underline">Edward Badel</Link></div> */}
        </footer>
      </body>
    </html>
  );
}
