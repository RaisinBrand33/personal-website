import type { Metadata } from "next";
import "./globals.css";
import Navvy from "@/components/nav-bar";
import localFont from "next/font/local"

export const metadata: Metadata = {
  title: "BrandonFarber",
  description: "The everything app of Brandon Farber like X dot com the everything app",
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
      <body className={`${myFont.className} bg-black text-slate-300 p-4 flex flex-col min-h-screen z-50 dark`}>
        {children}
      </body>
    </html>
  );
}
