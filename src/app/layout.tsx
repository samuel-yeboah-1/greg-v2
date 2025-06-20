import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/navbar";
import { ThemeProvider } from "@/providers/theme-provider";
import { SmoothCursor } from "@/components/ui/smooth-cursor";
import TanstackQueryProvider from "@/providers/TanstackQueryProvider";
import { Toaster } from "@/components/ui/sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Greg MVP",
  description: "Get all your insights from Greg!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-background text-foreground`}
      >
        <Toaster richColors position="bottom-right" />

        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {/* Cursor only on larger screens */}
          <div className="hidden md:block">
            <SmoothCursor />
          </div>

          <Navbar />

          <TanstackQueryProvider>
            <main>{children}</main>
          </TanstackQueryProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
