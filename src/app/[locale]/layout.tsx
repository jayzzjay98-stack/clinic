import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Noto_Sans_Lao, Noto_Sans_Thai, Noto_Sans_SC } from "next/font/google";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import "../globals.css";
import SmoothScrolling from "@/components/SmoothScrolling";

/* ============================================
   FONT CONFIGURATION
   ============================================ */
const plusJakarta = Plus_Jakarta_Sans({
    variable: "--font-plus-jakarta",
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
    display: "swap",
});

const notoSansLao = Noto_Sans_Lao({
    variable: "--font-noto-lao",
    subsets: ["lao"],
    weight: ["400", "500", "600", "700"],
    display: "swap",
});

const notoSansThai = Noto_Sans_Thai({
    variable: "--font-noto-thai",
    subsets: ["thai"],
    weight: ["400", "500", "600", "700"],
    display: "swap",
});

const notoSansSC = Noto_Sans_SC({
    variable: "--font-noto-sc",
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
    display: "swap",
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
   SEO METADATA
   ============================================ */
export const metadata: Metadata = {
    title: "Laone Dental Clinic | Expert Dental Care in Vientiane, Laos",
    description:
        "Comprehensive dental clinic offering dental implants, teeth whitening, orthodontics, and dental checkups. Modern technology with expert dentists.",
    keywords: [
        "dental clinic laos",
        "dentist vientiane",
        "dental implants",
        "teeth whitening",
        "orthodontics",
        "laone dental",
    ],
    authors: [{ name: "Laone Dental Clinic" }],
    openGraph: {
        title: "Laone Dental Clinic | Expert Dental Care in Vientiane",
        description: "Comprehensive dental services with modern technology.",
        type: "website",
        siteName: "Laone Dental Clinic",
    },
};

/* ============================================
   LOCALE LAYOUT COMPONENT
   ============================================ */
export default async function LocaleLayout({
    children,
    params
}: {
    children: React.ReactNode;
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;

    // Validate locale
    if (!routing.locales.includes(locale as any)) {
        notFound();
    }

    // Get messages for the locale
    const messages = await getMessages();

    // Get correct lang attribute
    const langMap: Record<string, string> = {
        lo: 'lo',
        en: 'en',
        th: 'th',
        vi: 'vi',
        zh: 'zh-CN'
    };

    return (
        <html lang={langMap[locale] || locale} className="scroll-smooth" data-scroll-behavior="smooth">
            <head>
                <link rel="canonical" href="https://laodev.online" />
                <script dangerouslySetInnerHTML={{
                    __html: `
          if ('scrollRestoration' in history) {
            history.scrollRestoration = 'manual';
          }
          function scrollToTop() {
            window.scrollTo(0, 0);
          }
          document.addEventListener('DOMContentLoaded', scrollToTop);
          window.addEventListener('load', function() { setTimeout(scrollToTop, 0); });
        `}} />
            </head>
            <body className={`${plusJakarta.variable} ${notoSansLao.variable} ${notoSansThai.variable} ${notoSansSC.variable} font-sans antialiased`}>
                <NextIntlClientProvider messages={messages}>
                    <SmoothScrolling>
                        {children}
                    </SmoothScrolling>
                </NextIntlClientProvider>
            </body>
        </html>
    );
}
