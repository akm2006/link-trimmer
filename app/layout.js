import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/componenets/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "LinkTrim",
  description: "Trim Links",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-purple-100`}
      >
        <Navbar></Navbar>
        {children}
      </body>
    </html>
  );
}
