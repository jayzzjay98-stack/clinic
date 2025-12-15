"use client";

import Image from "next/image";
import { useTranslations, useLocale } from 'next-intl';
import { motion } from "framer-motion";
import {
    Calendar,
    Phone,
    Star,
    ShieldCheck,
    Sparkles
} from "lucide-react";
import SplitText from "@/components/ui/SplitText";
import { useFontConfig } from "@/hooks/useFontConfig";

export default function HeroSection() {
    const t = useTranslations('hero');
    const locale = useLocale();
    const fonts = useFontConfig();

    // Margin config per language (mobile only) - kept separate as it's layout-specific
    const marginConfig: Record<string, string> = {
        lo: 'ml-8',
        th: 'ml-8',
        en: 'ml-10',
        vi: 'ml-4',
        zh: 'ml-4',
    };
    const title1Margin = marginConfig[locale] || '';

    // Image frame margin config per language (mobile only)
    const imageMarginConfig: Record<string, string> = {
        lo: 'px-4',
        th: 'px-4',
        en: 'pl-1 pr-7',  // Move left
        vi: 'px-4',
        zh: 'px-4',
    };
    const imagePadding = imageMarginConfig[locale] || 'px-4';

    // Image frame size config per language (mobile only)
    const imageSizeConfig: Record<string, string> = {
        lo: 'max-w-[400px]',
        th: 'max-w-[400px]',
        en: 'max-w-[360px]',  // Slightly smaller for English
        vi: 'max-w-[400px]',
        zh: 'max-w-[400px]',
    };
    const imageMaxWidth = imageSizeConfig[locale] || 'max-w-[400px]';

    // Animation Variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { type: "spring" as const, stiffness: 100 }
        }
    };



    return (
        <section className="relative min-h-[100dvh] pt-28 lg:pt-36 pb-20 lg:pb-28 overflow-hidden flex items-center">

            {/* Background - Clean (removed tooth animations) */}

            {/* =========================================
                MAIN CONTENT
               ========================================= */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full">
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-0 items-center">

                    {/* =========================================
                        LEFT CLOUD CONTAINER: Text Content
                       ========================================= */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="order-2 lg:order-1"
                    >
                        {/* Text Content - No Frame */}
                        <div className="relative p-8 lg:p-12">
                            {/* Mascot - Absolute positioned, independent of text layout */}
                            <div className="absolute left-0 top-8 -translate-x-4 lg:-translate-x-8 z-10">
                                <Image
                                    src="/hero-mascot.webp"
                                    alt="Dental Mascot"
                                    width={100}
                                    height={100}
                                    className="animate-slow-bounce drop-shadow-lg w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24"
                                />
                            </div>

                            <div className="space-y-20 text-center -ml-8 lg:ml-0">
                                {/* Title */}
                                <div className="relative">
                                    <motion.h1
                                        variants={itemVariants}
                                        className={`${fonts.hero.title1} lg:${fonts.hero.title1} font-extrabold text-white leading-[1.4] tracking-tight text-center`}
                                    >
                                        <span className={`inline-block py-1 drop-shadow-lg whitespace-nowrap ${title1Margin} lg:ml-0`}>{t('title1')}</span>
                                        {t('title2') && <span className="py-1 text-transparent bg-clip-text bg-gradient-to-r from-[#F7931E] via-[#ffbbf2] to-[#a02595] drop-shadow-lg"> {t('title2')}</span>}
                                        <div className="block py-1 mt-12">
                                            <SplitText
                                                text={t('title3')}
                                                tag="span"
                                                className={`${fonts.hero.title3} text-white font-black italic [text-shadow:0_0_20px_rgba(255,255,255,0.5),0_4px_10px_rgba(0,0,0,0.3)] whitespace-nowrap font-[family-name:var(--font-oleo-script)] oleo-override`}
                                                splitType="chars"
                                                delay={50}
                                                duration={0.5}
                                                ease="easeOut"
                                                from={{ opacity: 0, y: 40, rotateX: -90 }}
                                                to={{ opacity: 1, y: 0, rotateX: 0 }}
                                                threshold={0.1}
                                            />
                                        </div>
                                    </motion.h1>
                                </div>

                                <motion.p
                                    variants={itemVariants}
                                    className="text-base sm:text-lg text-white/90 max-w-md lg:max-w-2xl mx-auto leading-relaxed font-medium whitespace-pre-line"
                                >
                                    {t('subtitle')}
                                </motion.p>

                                {/* CTA Buttons - Bubbly Cartoon Style */}
                                <motion.div
                                    variants={itemVariants}
                                    className="flex flex-row gap-2 sm:gap-4 justify-center !-mt-16 relative z-50"
                                >
                                    {/* Primary Button - Orange Bubbly */}
                                    <motion.button
                                        onClick={() => {
                                            const contactSection = document.getElementById('contact');
                                            if (contactSection) {
                                                contactSection.scrollIntoView({ behavior: 'smooth' });
                                            }
                                        }}
                                        whileHover={{ scale: 1.08, y: -3 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="inline-flex items-center justify-center gap-1 sm:gap-2 bg-gradient-to-br from-[#F7931E] to-[#ff6b35] text-white px-3 sm:px-8 py-2 sm:py-4 font-bold text-[11px] sm:text-lg shadow-[0_8px_25px_rgba(247,147,30,0.5),0_0_0_3px_rgba(255,255,255,0.3)] transition-all duration-300 rounded-[50px] whitespace-nowrap cursor-pointer"
                                    >
                                        <Calendar className="w-3.5 h-3.5 sm:w-5 sm:h-5 flex-shrink-0" />
                                        {t('bookFree')}
                                    </motion.button>
                                    {/* Secondary Button - Pink Bubbly */}
                                    <motion.a
                                        href="tel:+85620581555555"
                                        whileHover={{ scale: 1.08, y: -3 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="inline-flex items-center justify-center gap-1 sm:gap-2 bg-gradient-to-br from-[#c94eb8] to-[#a02595] text-white px-3 sm:px-8 py-2 sm:py-4 font-bold text-[11px] sm:text-lg shadow-[0_8px_25px_rgba(160,37,149,0.5),0_0_0_3px_rgba(255,255,255,0.3)] transition-all duration-300 rounded-[50px] whitespace-nowrap"
                                    >
                                        <Phone className="w-3.5 h-3.5 sm:w-5 sm:h-5 flex-shrink-0" />
                                        {t('callUs')}
                                    </motion.a>
                                </motion.div>

                                {/* Social Proof / Stats */}
                                <motion.div
                                    variants={itemVariants}
                                    className="!-mt-12 flex items-center justify-center gap-6 sm:gap-8"
                                >
                                    <div className="text-center">
                                        <div className="flex items-center justify-center gap-0.5 text-yellow-400 mb-1">
                                            {[1, 2, 3, 4, 5].map(i => (
                                                <Star key={i} className="w-4 h-4 fill-current drop-shadow-[0_0_4px_rgba(255,200,0,0.8)]" />
                                            ))}
                                        </div>
                                        <p className="text-xs text-white/80 font-medium">4.9/5 Google</p>
                                    </div>
                                    <div className="w-px h-8 bg-white/30" />
                                    <div className="text-center">
                                        <p className="text-xl font-black text-white drop-shadow-lg">10k+</p>
                                        <p className="text-xs text-white/80 font-medium">Happy Customers</p>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </motion.div>

                    {/* =========================================
                        RIGHT COLUMN: รูปภาพคลินิก (กรอบวงรี)
                       ========================================= */}
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ type: "spring" as const, bounce: 0.5, delay: 0.2 }}
                        className={`relative flex justify-center lg:justify-start items-start order-1 lg:order-2 lg:translate-x-8 lg:-mt-32 w-full ${imagePadding} sm:px-0`}
                    >
                        {/* กรอบวงรีแนวนอน - Bigger */}
                        <div className={`relative w-full ${imageMaxWidth} sm:max-w-[500px] lg:max-w-[1400px] aspect-[16/10] rounded-[80px] sm:rounded-[120px] lg:rounded-[150px] shadow-2xl border-[5px] border-white/40 overflow-hidden z-10`}>
                            {/* รูปคลินิก */}
                            <Image
                                src="/clinic-interior.webp"
                                alt="Laone Dental Clinic"
                                fill
                                sizes="(max-width: 640px) 500px, 1400px"
                                className="object-cover"
                                priority
                            />
                            {/* เงาสะท้อนกระจก */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-white/10 via-transparent to-transparent pointer-events-none" />

                            {/* Trust Badge - Bounce Animation */}
                            <motion.div
                                initial={{ y: -50, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{
                                    type: "spring" as const,
                                    bounce: 0.6,
                                    delay: 0.5,
                                    duration: 0.8
                                }}
                                className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 lg:top-4 lg:left-1/2 lg:-translate-x-1/2 lg:bottom-auto lg:right-auto z-20"
                            >
                                <motion.div
                                    animate={{ y: [0, -8, 0] }}
                                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                                    className="inline-flex items-center gap-1.5 sm:gap-2 bg-gradient-to-r from-[#a02595]/80 to-[#641464]/90 backdrop-blur-md border-2 border-white/40 text-white px-3 py-1.5 sm:px-6 sm:py-3 rounded-full text-[10px] sm:text-sm font-bold shadow-xl"
                                >
                                    <ShieldCheck className="w-3 h-3 sm:w-5 sm:h-5 text-[#F7931E]" />
                                    {t('badge')}
                                </motion.div>
                            </motion.div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section >
    );
}
