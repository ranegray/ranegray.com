import type { Metadata } from "next";
import "./globals.css";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "Rane Gray | Humanoid Robotics Researcher",
  description: "CS @ CU Boulder building open-source tools for humanoid robots.",
  openGraph: {
    title: "Rane Gray | Humanoid Robotics Researcher",
    description: "CS @ CU Boulder building open-source tools for humanoid robots.",
    url: "https://ranegray.com",
    siteName: "Rane Gray",
    images: [
      {
        url: "https://ranegray.com/headshot.jpeg", // <-- replace with your real headshot URL!
        width: 1200,
        height: 630,
        alt: "Rane Gray profile photo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rane Gray | Humanoid Robotics Researcher",
    description: "CS @ CU Boulder building open-source tools for humanoid robots.",
    images: ["https://ranegray.com/headshot.jpeg"], // <-- again, your headshot URL
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Rane Gray",
            "alternateName": "ranegray",
            "url": "https://ranegray.com",
            "image": "https://ranegray.com/headshot.jpeg",
            "sameAs": [
              "https://github.com/ranegray",
              "https://linkedin.com/in/ranegray",
              "https://x.com/ranegray_"
            ],
            "jobTitle": "Computer Science Student and Robotics Researcher",
            "worksFor": {
              "@type": "CollegeOrUniversity",
              "name": "University of Colorado Boulder"
            }
          })
        }} />
      </head>
      <body>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
