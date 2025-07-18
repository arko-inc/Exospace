import type { Metadata } from "next";
import { Anta } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const anta = Anta({
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "ExoSpace - Reach for the Stars",
  description: "Pioneering the future of space exploration.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${anta.className} bg-[#0a0a0a] text-white`}>
        <Navbar/>
        <div className="w-full h-10"></div>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
