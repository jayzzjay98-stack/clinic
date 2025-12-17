import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
    // List of all supported locales
    locales: ['lo', 'en', 'th', 'vi', 'zh'],

    // Default locale (Lao)
    defaultLocale: 'lo',

    // Locale prefix configuration
    localePrefix: 'as-needed',

    // Disable browser language detection - always show Lao first
    localeDetection: false,

    // Disable cookie storage - don't remember previous locale selection
    localeCookie: false
});
