import type { Metadata } from "next";
import { DM_Serif_Display, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "./components/Navigation";

const dmSerif = DM_Serif_Display({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-heading",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "rane gray",
  description: "i build robots.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmSerif.variable} ${geistMono.variable}`}>
      <body className="font-[family-name:var(--font-mono)] min-h-screen">
        <Navigation />
        <main className="max-w-[680px] mx-auto px-6 py-12">{children}</main>
      </body>
    </html>
  );
}
