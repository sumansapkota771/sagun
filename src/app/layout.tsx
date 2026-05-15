import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  weight: ["500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sagun Education | Study in Japan, Finland, UK - Trusted Consultancy",
  description: "Sagun Education Pvt. Ltd. is a trusted consultancy in Gajuri, Dhading. We specialize in study abroad programs for Japan, Finland, and the UK with expert visa processing and career counseling.",
  keywords: ["study in japan", "study in finland", "study in uk", "educational consultancy nepal", "gajuri dhading", "sagun education", "visa processing"],
  authors: [{ name: "Sagun Education" }],
  openGraph: {
    title: "Sagun Education | Study in Japan, Finland, UK",
    description: "Trusted consultancy in Gajuri, Dhading. Your gateway to higher education in Japan, Finland, and the UK.",
    url: "https://sagunedunepal.com",
    siteName: "Sagun Education",
    images: [
      {
        url: "/images/hero-og.png", // User should add this image
        width: 1200,
        height: 630,
        alt: "Sagun Education",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sagun Education | Study in Japan, Finland, UK",
    description: "Trusted consultancy in Gajuri, Dhading. Your gateway to higher education in Japan, Finland, and the UK.",
    images: ["/images/hero-og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <head>
        <link 
          rel="stylesheet" 
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" 
        />
      </head>
      <body className={`${inter.variable} ${poppins.variable}`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
