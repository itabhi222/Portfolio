import type { Metadata } from "next";
import "./globals.css";

import { Inter } from "next/font/google";

import SmoothScroll from "@/components/SmoothScroll";
import ScrollProgress from "@/components/ScrollProgress";
import AuroraBackground from "@/components/AuroraBackground";
import MouseGlow from "@/components/MouseGlow";
import CursorGlow from "@/components/CursorGlow";
import AnimatedBackground from "@/components/AnimatedBackground";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Abhishek Verma | System Administrator",
  description:
    "System Administrator | Cloud & Infrastructure Engineer with 4+ years of experience.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
     <body className="grid-bg bg-[#050816] text-white overflow-x-hidden">

  <SmoothScroll />

  <ScrollProgress />

  <AnimatedBackground />

  <MouseGlow />

  <CursorGlow />

  {children}

</body>
    </html>
  );
}
