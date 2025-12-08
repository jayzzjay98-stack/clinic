"use client";

import { useLocale } from 'next-intl';
import { useRouter, usePathname } from 'next/navigation';
import { useState, useRef, useEffect } from 'react';
import { Globe, Check } from 'lucide-react';

const languages = [
    { code: 'lo', name: 'ລາວ', flag: '🇱🇦' },
    { code: 'en', name: 'English', flag: '🇬🇧' },
    { code: 'th', name: 'ไทย', flag: '🇹🇭' },
    { code: 'vi', name: 'Tiếng Việt', flag: '🇻🇳' },
    { code: 'zh', name: '中文', flag: '🇨🇳' },
];

export default function LanguageSwitcher() {
    const locale = useLocale();
    const router = useRouter();
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    // Close dropdown when clicking outside
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleLanguageChange = (newLocale: string) => {
        // Remove current locale from pathname and add new one
        const segments = pathname.split('/');
        segments[1] = newLocale;
        const newPath = segments.join('/') || `/${newLocale}`;
        router.push(newPath);
        setIsOpen(false);
    };

    const currentLanguage = languages.find(l => l.code === locale) || languages[0];

    return (
        <div className="relative" ref={dropdownRef}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-2 px-3 py-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all border border-white/20"
                aria-label="Select language"
            >
                <Globe className="w-4 h-4" />
                <span className="text-sm font-medium">{currentLanguage.flag}</span>
            </button>

            {isOpen && (
                <div className="absolute top-full mt-2 right-0 bg-[#1a1a2e]/95 backdrop-blur-xl border border-white/20 rounded-xl shadow-2xl overflow-hidden z-50 min-w-[140px]">
                    {languages.map((lang) => (
                        <button
                            key={lang.code}
                            onClick={() => handleLanguageChange(lang.code)}
                            className={`w-full flex items-center gap-3 px-4 py-2.5 text-left hover:bg-white/10 transition-colors ${locale === lang.code ? 'bg-white/5' : ''
                                }`}
                        >
                            <span className="text-lg">{lang.flag}</span>
                            <span className="text-white text-sm font-medium">{lang.name}</span>
                            {locale === lang.code && (
                                <Check className="w-4 h-4 text-[#F7931E] ml-auto" />
                            )}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
}
