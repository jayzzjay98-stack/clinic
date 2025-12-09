/**
 * Font Configuration System
 * ========================
 * แยก font sizes ตาม:
 * - Device: desktop / mobile
 * - Language: lo, th, en, vi, zh
 * 
 * ปรับค่าในแต่ละภาษาได้อิสระโดยไม่กระทบกัน
 */

// ===== TYPES =====
export type Locale = 'lo' | 'th' | 'en' | 'vi' | 'zh';
export type Device = 'mobile' | 'desktop';

export interface SectionFonts {
    title: string;
    subtitle?: string;
    description?: string;
    cardTitle?: string;
    cardDescription?: string;
    button?: string;
    modalName?: string;
    modalTitle?: string;
    modalText?: string;
}

export interface LocaleFontConfig {
    mobile: {
        hero: {
            title1: string;
            title2: string;
            title3: string;
            subtitle: string;
            button: string;
        };
        services: SectionFonts;
        whyUs: SectionFonts;
        doctor: SectionFonts;
        caseGallery: SectionFonts;
        reviews: SectionFonts;
        navbar: { links: string };
        footer: SectionFonts;
    };
    desktop: {
        hero: {
            title1: string;
            title2: string;
            title3: string;
            subtitle: string;
            button: string;
        };
        services: SectionFonts;
        whyUs: SectionFonts;
        doctor: SectionFonts;
        caseGallery: SectionFonts;
        reviews: SectionFonts;
        navbar: { links: string };
        footer: SectionFonts;
    };
}

// ===== FONT CONFIG =====
export const fontConfig: Record<Locale, LocaleFontConfig> = {
    // ==============================
    // 🇱🇦 ภาษาลาว (Lao)
    // ==============================
    lo: {
        mobile: {
            hero: {
                title1: 'text-2xl',
                title2: 'text-2xl',
                title3: 'text-4xl',
                subtitle: 'text-base',
                button: 'text-xs',
            },
            services: {
                title: 'text-xl',
                description: 'text-lg',
                cardTitle: 'text-xl',
                cardDescription: 'text-sm',
            },
            whyUs: {
                title: 'text-xl',
                cardTitle: 'text-lg',
                cardDescription: 'text-sm',
            },
            doctor: {
                title: 'text-xl',
                cardTitle: 'text-lg',
                cardDescription: 'text-sm',
                modalName: 'text-5xl',
                modalTitle: 'text-xl',
                modalText: 'text-lg',
            },
            caseGallery: {
                title: 'text-xl',
            },
            reviews: {
                title: 'text-3xl',
            },
            navbar: { links: 'text-sm' },
            footer: {
                title: 'text-lg',
                description: 'text-sm',
            },
        },
        desktop: {
            hero: {
                title1: 'text-2xl',
                title2: 'text-2xl',
                title3: 'text-[100px]',
                subtitle: 'text-lg',
                button: 'text-lg',
            },
            services: {
                title: 'text-4xl',
                description: 'text-lg',
                cardTitle: 'text-xl',
                cardDescription: 'text-sm',
            },
            whyUs: {
                title: 'text-4xl',
                cardTitle: 'text-lg',
                cardDescription: 'text-sm',
            },
            doctor: {
                title: 'text-4xl',
                cardTitle: 'text-xl',
                cardDescription: 'text-sm',
                modalName: 'text-6xl',
                modalTitle: 'text-2xl',
                modalText: 'text-xl',
            },
            caseGallery: {
                title: 'text-4xl',
            },
            reviews: {
                title: 'text-5xl',
            },
            navbar: { links: 'text-base' },
            footer: {
                title: 'text-xl',
                description: 'text-base',
            },
        },
    },

    // ==============================
    // 🇹🇭 ภาษาไทย (Thai)
    // ==============================
    th: {
        mobile: {
            hero: {
                title1: 'text-2xl',
                title2: 'text-2xl',
                title3: 'text-4xl',
                subtitle: 'text-base',
                button: 'text-xs',
            },
            services: {
                title: 'text-xl',
                description: 'text-lg',
                cardTitle: 'text-xl',
                cardDescription: 'text-sm',
            },
            whyUs: {
                title: 'text-xl',
                cardTitle: 'text-lg',
                cardDescription: 'text-sm',
            },
            doctor: {
                title: 'text-xl',
                cardTitle: 'text-lg',
                cardDescription: 'text-sm',
            },
            caseGallery: {
                title: 'text-xl',
            },
            reviews: {
                title: 'text-3xl',
            },
            navbar: { links: 'text-sm' },
            footer: {
                title: 'text-lg',
                description: 'text-sm',
            },
        },
        desktop: {
            hero: {
                title1: 'text-2xl',
                title2: 'text-2xl',
                title3: 'text-7xl',
                subtitle: 'text-lg',
                button: 'text-lg',
            },
            services: {
                title: 'text-4xl',
                description: 'text-lg',
                cardTitle: 'text-xl',
                cardDescription: 'text-sm',
            },
            whyUs: {
                title: 'text-4xl',
                cardTitle: 'text-lg',
                cardDescription: 'text-sm',
            },
            doctor: {
                title: 'text-4xl',
                cardTitle: 'text-xl',
                cardDescription: 'text-sm',
            },
            caseGallery: {
                title: 'text-4xl',
            },
            reviews: {
                title: 'text-5xl',
            },
            navbar: { links: 'text-base' },
            footer: {
                title: 'text-xl',
                description: 'text-base',
            },
        },
    },

    // ==============================
    // 🇬🇧 ภาษาอังกฤษ (English)
    // ==============================
    en: {
        mobile: {
            hero: {
                title1: 'text-xl',
                title2: 'text-xl',
                title3: 'text-4xl',
                subtitle: 'text-base',
                button: 'text-xs',
            },
            services: {
                title: 'text-base',
                description: 'text-lg',
                cardTitle: 'text-xl',
                cardDescription: 'text-sm',
            },
            whyUs: {
                title: 'text-xl',
                cardTitle: 'text-lg',
                cardDescription: 'text-sm',
            },
            doctor: {
                title: 'text-xl',
                cardTitle: 'text-lg',
                cardDescription: 'text-sm',
            },
            caseGallery: {
                title: 'text-xl',
            },
            reviews: {
                title: 'text-3xl',
            },
            navbar: { links: 'text-sm' },
            footer: {
                title: 'text-lg',
                description: 'text-sm',
            },
        },
        desktop: {
            hero: {
                title1: 'text-2xl',
                title2: 'text-2xl',
                title3: 'text-7xl',
                subtitle: 'text-lg',
                button: 'text-lg',
            },
            services: {
                title: 'text-4xl',
                description: 'text-lg',
                cardTitle: 'text-xl',
                cardDescription: 'text-sm',
            },
            whyUs: {
                title: 'text-4xl',
                cardTitle: 'text-lg',
                cardDescription: 'text-sm',
            },
            doctor: {
                title: 'text-4xl',
                cardTitle: 'text-xl',
                cardDescription: 'text-sm',
            },
            caseGallery: {
                title: 'text-4xl',
            },
            reviews: {
                title: 'text-5xl',
            },
            navbar: { links: 'text-base' },
            footer: {
                title: 'text-xl',
                description: 'text-base',
            },
        },
    },

    // ==============================
    // 🇻🇳 ภาษาเวียดนาม (Vietnamese)
    // ==============================
    vi: {
        mobile: {
            hero: {
                title1: 'text-2xl',
                title2: 'text-2xl',
                title3: 'text-4xl',
                subtitle: 'text-base',
                button: 'text-xs',
            },
            services: {
                title: 'text-base',
                description: 'text-lg',
                cardTitle: 'text-xl',
                cardDescription: 'text-sm',
            },
            whyUs: {
                title: 'text-xl',
                cardTitle: 'text-lg',
                cardDescription: 'text-sm',
            },
            doctor: {
                title: 'text-xl',
                cardTitle: 'text-lg',
                cardDescription: 'text-sm',
            },
            caseGallery: {
                title: 'text-xl',
            },
            reviews: {
                title: 'text-3xl',
            },
            navbar: { links: 'text-sm' },
            footer: {
                title: 'text-lg',
                description: 'text-sm',
            },
        },
        desktop: {
            hero: {
                title1: 'text-2xl',
                title2: 'text-2xl',
                title3: 'text-7xl',
                subtitle: 'text-lg',
                button: 'text-lg',
            },
            services: {
                title: 'text-4xl',
                description: 'text-lg',
                cardTitle: 'text-xl',
                cardDescription: 'text-sm',
            },
            whyUs: {
                title: 'text-4xl',
                cardTitle: 'text-lg',
                cardDescription: 'text-sm',
            },
            doctor: {
                title: 'text-4xl',
                cardTitle: 'text-xl',
                cardDescription: 'text-sm',
            },
            caseGallery: {
                title: 'text-4xl',
            },
            reviews: {
                title: 'text-5xl',
            },
            navbar: { links: 'text-base' },
            footer: {
                title: 'text-xl',
                description: 'text-base',
            },
        },
    },

    // ==============================
    // 🇨🇳 ภาษาจีน (Chinese)
    // ==============================
    zh: {
        mobile: {
            hero: {
                title1: 'text-2xl',
                title2: 'text-2xl',
                title3: 'text-4xl',
                subtitle: 'text-base',
                button: 'text-xs',
            },
            services: {
                title: 'text-base',
                description: 'text-lg',
                cardTitle: 'text-xl',
                cardDescription: 'text-sm',
            },
            whyUs: {
                title: 'text-xl',
                cardTitle: 'text-lg',
                cardDescription: 'text-sm',
            },
            doctor: {
                title: 'text-xl',
                cardTitle: 'text-lg',
                cardDescription: 'text-sm',
            },
            caseGallery: {
                title: 'text-xl',
            },
            reviews: {
                title: 'text-3xl',
            },
            navbar: { links: 'text-sm' },
            footer: {
                title: 'text-lg',
                description: 'text-sm',
            },
        },
        desktop: {
            hero: {
                title1: 'text-2xl',
                title2: 'text-2xl',
                title3: 'text-7xl',
                subtitle: 'text-lg',
                button: 'text-lg',
            },
            services: {
                title: 'text-4xl',
                description: 'text-lg',
                cardTitle: 'text-xl',
                cardDescription: 'text-sm',
            },
            whyUs: {
                title: 'text-4xl',
                cardTitle: 'text-lg',
                cardDescription: 'text-sm',
            },
            doctor: {
                title: 'text-4xl',
                cardTitle: 'text-xl',
                cardDescription: 'text-sm',
            },
            caseGallery: {
                title: 'text-4xl',
            },
            reviews: {
                title: 'text-5xl',
            },
            navbar: { links: 'text-base' },
            footer: {
                title: 'text-xl',
                description: 'text-base',
            },
        },
    },
};

// ===== HELPER FUNCTION =====
/**
 * Get font config for current locale
 * ใช้ใน component โดย import { useFontConfig } from '@/config/fontConfig'
 */
export function getFontConfig(locale: string): LocaleFontConfig {
    return fontConfig[locale as Locale] || fontConfig.en;
}

/**
 * Hook-style helper (use in client components)
 * Example: const fonts = useFontConfig(locale, isMobile)
 */
export function getDeviceFonts(locale: string, isMobile: boolean) {
    const config = getFontConfig(locale);
    return isMobile ? config.mobile : config.desktop;
}
