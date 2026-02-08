import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rane Gray",
  description: "CS student @ CU Boulder studying robotics.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
