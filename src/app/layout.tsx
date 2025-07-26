import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";


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
      <body className={`bg-[#0a0a0a] text-white`}>
        <Navbar/>
        <div className="w-full h-10"></div>
        {children}
        <Footer/>
      <script type="module" src="https://ajax.googleapis.com/ajax/libs/model-viewer/3.5.0/model-viewer.min.js"></script>
      </body>
    </html>
  );
}
