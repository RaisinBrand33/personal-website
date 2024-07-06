import type { Metadata } from "next";
import "./globals.css";
import Navvy from "@/components/nav-bar";
import localFont from "next/font/local"

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const myFont = localFont({
  src: './nasalization-rg.otf',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${myFont.className} bg-black text-slate-300 max-w-5xl mx-auto p-4`}>
        <Navvy/>
        {children}
      </body>
    </html>
  );
}
