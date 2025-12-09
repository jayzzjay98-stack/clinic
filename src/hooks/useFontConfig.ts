'use client';

import { useLocale } from 'next-intl';
import { useIsMobile } from '@/hooks/useIsMobile';
import { getDeviceFonts, LocaleFontConfig } from '@/config/fontConfig';

/**
 * Custom hook to get font config for current locale and device
 * 
 * Usage:
 * const fonts = useFontConfig();
 * <h1 className={fonts.hero.title1}>...</h1>
 */
export function useFontConfig() {
    const locale = useLocale();
    const isMobile = useIsMobile();

    return getDeviceFonts(locale, isMobile);
}

/**
 * Get fonts for a specific section
 * 
 * Usage:
 * const heroFonts = useSectionFonts('hero');
 * <h1 className={heroFonts.title1}>...</h1>
 */
export function useSectionFonts<K extends keyof LocaleFontConfig['mobile']>(section: K) {
    const fonts = useFontConfig();
    return fonts[section];
}
