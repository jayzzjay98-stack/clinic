import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Noto_Sans_Thai, Noto_Sans_SC, Source_Sans_3, Oleo_Script } from "next/font/google";
import localFont from 'next/font/local';
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

const komLao = localFont({
    src: '../../../public/fonts/Kom-Regular.ttf',
    variable: '--font-kom-lao',
    display: 'swap',
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

const sourceSans = Source_Sans_3({
    variable: "--font-source-sans",
    subsets: ["latin"],
    weight: ["400", "600", "700", "900"],
    display: "swap",
});

const oleoScript = Oleo_Script({
    variable: "--font-oleo-script",
    subsets: ["latin"],
    weight: ["400", "700"],
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
            <body className={`${plusJakarta.variable} ${komLao.variable} ${notoSansThai.variable} ${notoSansSC.variable} ${sourceSans.variable} ${oleoScript.variable} font-sans antialiased`}>
                <NextIntlClientProvider messages={messages}>
                    <SmoothScrolling>
                        {children}
                    </SmoothScrolling>
                </NextIntlClientProvider>
            </body>
        </html>
    );
}
