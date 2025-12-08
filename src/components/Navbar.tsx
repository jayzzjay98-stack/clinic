"use client";

import { useState } from "react";
import Image from "next/image";
import { Calendar, Phone, Menu, X } from "lucide-react";

export default function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const navLinks = [
        { name: "Services", href: "#services" },
        { name: "Why Us", href: "#why-us" },
        { name: "Doctor", href: "#doctor" },
        { name: "Reviews", href: "#reviews" },
        { name: "Contact", href: "#contact" },
    ];

    return (
        <>
            <nav
                className={`fixed top-4 left-0 right-0 mx-auto z-50 w-[95%] max-w-6xl backdrop-blur-xl border border-white/10 shadow-lg ${isMobileMenuOpen
                    ? "hidden"
                    : "bg-[#1a1a2e]/50 rounded-full"
                    }`}
            >
                <div className="px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        {/* Logo - Fixed dimensions to prevent layout shift */}
                        <a href="#" className="flex items-center">
                            <div className="w-[160px] h-16 lg:w-[200px] lg:h-20 relative flex-shrink-0">
                                <Image
                                    src="/laone-logo-transparent.png"
                                    alt="Laone Dental"
                                    fill
                                    sizes="200px"
                                    className="object-contain object-left"
                                    priority
                                />
                            </div>
                        </a>

                        {/* Desktop Navigation */}
                        <div className="hidden lg:flex items-center gap-8">
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
                            <a
                                href="tel:+66123456789"
                                className="hidden md:flex items-center gap-2 text-white font-semibold"
                            >
                                <Phone className="w-4 h-4" />
                                02-123-4567
                            </a>
                            <a
                                href="#contact"
                                className="hidden sm:flex items-center gap-2 bg-gradient-to-r from-[#F7931E] to-[#a02595] text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg hover:shadow-[#a02595]/30 transition-all transform hover:-translate-y-0.5"
                            >
                                <Calendar className="w-4 h-4" />
                                Book Now
                            </a>

                            {/* Mobile Menu Button - Only show when menu is closed */}
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
