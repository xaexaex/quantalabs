import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://quantalabs.cc";
const ogImage = "/seo/image.png";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Quantalabs — Sovereign Blockchain, AI & Post-Quantum Engineering",
    template: "%s | Quantalabs",
  },
  description:
    "Quantalabs is the enterprise protocol engineering lab behind Quantachain. We build sovereign L2 AppChains, autonomous AI agent networks, and NIST-standardized post-quantum blockchain migrations for institutions worldwide.",
  keywords: [
    "Quantalabs",
    "Quantachain",
    "blockchain development",
    "post-quantum cryptography",
    "Falcon-512",
    "PQC migration",
    "L2 AppChains",
    "Layer 2 blockchain",
    "AI blockchain",
    "enterprise blockchain",
    "sovereign blockchain",
    "WASM cryptography",
    "Kyber KEM",
    "blockchain infrastructure",
  ],
  authors: [{ name: "Quantalabs", url: siteUrl }],
  creator: "Quantalabs",
  publisher: "Quantalabs Pvt Ltd",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Quantalabs",
    title: "Quantalabs — Sovereign Blockchain, AI & Post-Quantum Engineering",
    description:
      "Quantalabs is the enterprise protocol engineering lab behind Quantachain. We build sovereign L2 AppChains, autonomous AI agents, and NIST-PQC blockchain migrations for institutions worldwide.",
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: "Quantalabs — Sovereign Blockchain & Post-Quantum Engineering",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@quantachain",
    creator: "@quantachain",
    title: "Quantalabs — Sovereign Blockchain, AI & Post-Quantum Engineering",
    description:
      "The enterprise protocol lab behind Quantachain. L2 AppChains, AI agent networks, and PQC migrations for institutions worldwide.",
    images: [ogImage],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  alternates: {
    canonical: siteUrl,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
