import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import Header from "@/components/Header";
import PageTransition from "@/components/ui/PageTransition";
import StairTransition from "@/components/ui/StairTransition";
import Providers from "@/components/providers/providers";


export const metadata: Metadata = {
  title: "My Portfolio",
  description: "Personal portfolio built with Next.js and Convex",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`
          ${GeistSans.variable}
          ${GeistMono.variable}
          antialiased 
          bg-background 
          text-foreground
          font-sans
        `}
      >
        <Providers>
          <Header />
          <StairTransition />
          <PageTransition>{children}</PageTransition>
        </Providers>
      </body>
    </html>
  );
}
