import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import FBPixel from "@/components/FBPixel";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NextJS 14 + FB Pixel",
  description: "Base web page with implementation of FB pixel.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/**
       * You can pass eventID props to this component or 
       * add the event ID as a .env variable.
       */}
      <FBPixel />
      <body className={inter.className}>{children}</body>
    </html>
  );
}
