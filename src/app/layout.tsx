import type { Metadata } from "next";
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
  display: "swap",
});

/* ============================================
   SEO METADATA - Thai Dental Clinic
   ============================================ */
export const metadata: Metadata = {
  title: "Glow Dental Clinic | คลินิกทันตกรรม กรุงเทพ",
  description:
    "คลินิกทันตกรรมครบวงจร รากฟันเทียม ฟอกสีฟัน จัดฟัน ตรวจสุขภาพฟัน ด้วยเทคโนโลยีทันสมัย โดยทีมทันตแพทย์ผู้เชี่ยวชาญ",
  keywords: [
    "คลินิกทันตกรรม",
    "ทันตแพทย์",
    "รากฟันเทียม",
    "ฟอกสีฟัน",
    "จัดฟัน",
    "dental clinic bangkok",
    "teeth whitening",
    "dental implants thailand",
  ],
  openGraph: {
    title: "Glow Dental Clinic | คลินิกทันตกรรม กรุงเทพ",
    description:
      "คลินิกทันตกรรมครบวงจร รากฟันเทียม ฟอกสีฟัน จัดฟัน ตรวจสุขภาพฟัน ด้วยเทคโนโลยีทันสมัย",
    type: "website",
    locale: "th_TH",
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
    <html lang="th" className="scroll-smooth">
      <body className={`${plusJakarta.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
