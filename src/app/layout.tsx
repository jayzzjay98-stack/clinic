import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

/* ============================================
   FONT CONFIGURATION
   Plus Jakarta Sans - Clean, modern medical look
   ============================================ */
const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "block",
});

/* ============================================
   VIEWPORT CONFIGURATION
   ============================================ */
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#1a1a2e",
};

/* ============================================
   SEO METADATA - Laone Dental Clinic
   ============================================ */
export const metadata: Metadata = {
  title: "Laone Dental Clinic | Expert Dental Care in Vientiane, Laos",
  description:
    "Comprehensive dental clinic offering dental implants, teeth whitening, orthodontics, and dental checkups. Modern technology with expert dentists. 15+ years experience.",
  keywords: [
    "dental clinic laos",
    "dentist vientiane",
    "dental implants",
    "teeth whitening",
    "orthodontics",
    "braces",
    "dental checkup",
    "laone dental",
    "best dentist laos",
  ],
  authors: [{ name: "Laone Dental Clinic" }],
  creator: "Laone Dental Clinic",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Laone Dental Clinic | Expert Dental Care in Vientiane",
    description:
      "Comprehensive dental services: implants, whitening, orthodontics. Modern technology, expert team, 15+ years experience.",
    type: "website",
    locale: "en_US",
    siteName: "Laone Dental Clinic",
  },
  twitter: {
    card: "summary_large_image",
    title: "Laone Dental Clinic | Expert Dental Care",
    description: "Comprehensive dental services with modern technology and expert dentists.",
  },
};

/* ============================================
   ROOT LAYOUT COMPONENT
   ============================================ */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="canonical" href="https://laonedental.com" />
        {/* Scroll to top on page load */}
        <script dangerouslySetInnerHTML={{
          __html: `
          if ('scrollRestoration' in history) {
            history.scrollRestoration = 'manual';
          }
          window.scrollTo(0, 0);
        `}} />
      </head>
      <body className={`${plusJakarta.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
