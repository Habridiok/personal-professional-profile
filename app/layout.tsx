import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { profile } from "@/data/profile";
import { getSiteBase, resolveAssetUrl } from "@/lib/url";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const base = getSiteBase();
const ogImageUrl = resolveAssetUrl(base, profile.avatarUrl);

export const metadata: Metadata = {
  title: {
    default: `${profile.name} — ${profile.title}`,
    template: `%s | ${profile.name}`,
  },
  description: profile.bio,
  metadataBase: new URL(base),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: base,
    title: `${profile.name} — ${profile.title}`,
    description: profile.bio,
    siteName: profile.name,
    images: [
      {
        url: ogImageUrl,
        width: 800,
        height: 800,
        alt: profile.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} — ${profile.title}`,
    description: profile.bio,
    images: [ogImageUrl],
  },
  icons: {
    icon: profile.faviconUrl,
  },
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
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth antialiased`}
    >
      <body className="min-h-screen flex flex-col bg-background text-text-primary font-sans">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
