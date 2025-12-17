"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Calendar, Phone, Menu, X } from "lucide-react";
import { useTranslations } from 'next-intl';
import LanguageSwitcher from "./LanguageSwitcher";

export default function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isNavbarVisible, setIsNavbarVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const t = useTranslations('nav');

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            // Show navbar when scrolling up or at top
            if (currentScrollY < lastScrollY || currentScrollY < 100) {
                setIsNavbarVisible(true);
            } else {
                // Hide navbar when scrolling down
                setIsNavbarVisible(false);
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollY]);

    const navLinks = [
        { name: t('services'), href: "#services" },
        { name: t('whyUs'), href: "#why-us" },
        { name: t('doctor'), href: "#doctor" },
        { name: t('reviews'), href: "#reviews" },
        { name: t('contact'), href: "#contact" },
    ];

    return (
        <>
            <nav
                className={`fixed top-4 left-0 right-0 mx-auto z-50 w-[95%] max-w-6xl backdrop-blur-xl shadow-lg 
                    bg-[linear-gradient(135deg,rgba(160,37,149,0.4)_0%,rgba(100,20,100,0.5)_50%,rgba(160,37,149,0.4)_100%)]
                    rounded-[60px] border-[2px] border-white/25
                    shadow-[0_10px_40px_rgba(160,37,149,0.3),0_0_60px_rgba(247,147,30,0.1),inset_0_1px_10px_rgba(255,255,255,0.15)]
                    transition-transform duration-300 ease-in-out
                    ${isMobileMenuOpen ? "hidden" : ""}
                    ${!isNavbarVisible && !isMobileMenuOpen ? "-translate-y-[150%]" : "translate-y-0"}`}
            >
                <div className="px-2 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        {/* Logo - Fixed dimensions to prevent layout shift */}
                        <a href="#" className="flex items-center -ml-6 lg:-ml-12 lg:-mt-3">
                            <div className="w-[180px] h-[45px] lg:w-[400px] lg:h-[100px] relative flex-shrink-0">
                                <Image
                                    src="/laone-dental-logo.png"
                                    alt="Laone Dental"
                                    fill
                                    sizes="(max-width: 1024px) 180px, 400px"
                                    className="object-contain object-left"
                                    priority
                                    placeholder="empty"
                                />
                            </div>
                        </a>

                        {/* Desktop Navigation - Centered */}
                        <div className="hidden lg:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="text-white/80 hover:text-white font-medium transition-colors"
                                >
                                    {link.name}
                                </a>
                            ))}
                        </div>

                        {/* CTA Button */}
                        <div className="flex items-center gap-4">

                            {/* Language Switcher */}
                            <LanguageSwitcher />
                            {!isMobileMenuOpen && (
                                <button
                                    onClick={() => setIsMobileMenuOpen(true)}
                                    className="lg:hidden p-2 text-white hover:text-white/80 transition-colors"
                                    aria-label="Open menu"
                                >
                                    <Menu className="w-6 h-6" />
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            </nav>

            {/* Mobile Navigation Menu - Compact Card */}
            {isMobileMenuOpen && (
                <div className="fixed top-4 left-4 right-4 z-[60] bg-[#1a1a2e]/98 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/10 animate-in slide-in-from-top duration-200 overflow-hidden">
                    {/* Header */}
                    <div className="flex items-center justify-between px-5 py-4 border-b border-white/10">
                        <span className="text-white font-semibold text-base">Menu</span>
                        <button
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="p-1.5 text-white/70 hover:text-white transition-colors"
                            aria-label="Close menu"
                        >
                            <X className="w-5 h-5" />
                        </button>
                    </div>

                    {/* Links */}
                    <div className="py-2">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="block px-5 py-3 text-white/80 hover:text-white hover:bg-white/5 font-medium transition-colors"
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>

                    {/* Bottom Button */}
                    <div className="px-5 pb-5 pt-2">
                        <a
                            href="#contact"
                            className="flex items-center justify-center gap-2 bg-gradient-to-r from-[#F7931E] to-[#a02595] text-white px-5 py-3 rounded-full font-semibold text-sm w-full"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            <Calendar className="w-4 h-4" />
                            Book Now
                        </a>
                    </div>
                </div>
            )}
        </>
    );
}
