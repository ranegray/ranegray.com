import type { Metadata } from "next";
import "./globals.css";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Rane Gray",
    template: "%s | Rane Gray",
  },
  description: site.description,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Rane Gray",
    description: site.description,
    url: site.url,
    siteName: site.name,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rane Gray",
    description: site.description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        <main className="mx-auto w-full max-w-3xl flex-1 px-6 pb-10 pt-8 sm:px-8">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
