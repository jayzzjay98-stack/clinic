"use client";

import Image from "next/image";
import { useTranslations } from 'next-intl';
import { motion } from "framer-motion";
import {
    Calendar,
    Phone,
    Star,
    ShieldCheck,
    Sparkles
} from "lucide-react";

export default function HeroSection() {
    const t = useTranslations('hero');

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
                            <div className="space-y-6 text-center">

                                <motion.h1
                                    variants={itemVariants}
                                    className="text-2xl sm:text-3xl lg:text-5xl font-extrabold text-white leading-[1.4] tracking-tight"
                                >
                                    <span className="block py-1 drop-shadow-lg">{t('title1')}</span>
                                    <span className="block py-1 text-transparent bg-clip-text bg-gradient-to-r from-[#F7931E] via-[#ffbbf2] to-[#a02595] drop-shadow-lg">
                                        {t('title2')}
                                    </span>
                                    <span
                                        className="block py-1 text-white font-black italic [text-shadow:0_0_20px_rgba(255,255,255,0.5),0_4px_10px_rgba(0,0,0,0.3)]"
                                    >
                                        {t('title3')}
                                    </span>
                                </motion.h1>

                                <motion.p
                                    variants={itemVariants}
                                    className="text-base sm:text-lg text-white/90 max-w-md mx-auto leading-relaxed font-medium"
                                >
                                    {t('subtitle')}
                                </motion.p>

                                {/* CTA Buttons - Bubbly Cartoon Style */}
                                <motion.div
                                    variants={itemVariants}
                                    className="flex flex-col sm:flex-row gap-4 justify-center pt-2"
                                >
                                    {/* Primary Button - Orange Bubbly */}
                                    <motion.a
                                        href="#contact"
                                        whileHover={{ scale: 1.08, y: -3 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="inline-flex items-center justify-center gap-2 bg-gradient-to-br from-[#F7931E] to-[#ff6b35] text-white px-8 py-4 font-bold text-lg shadow-[0_8px_25px_rgba(247,147,30,0.5),0_0_0_3px_rgba(255,255,255,0.3)] transition-all duration-300 rounded-[50px]"
                                    >
                                        <Calendar className="w-5 h-5" />
                                        {t('bookFree')}
                                    </motion.a>
                                    {/* Secondary Button - Pink Bubbly */}
                                    <motion.a
                                        href="tel:+85620581555555"
                                        whileHover={{ scale: 1.08, y: -3 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="inline-flex items-center justify-center gap-2 bg-gradient-to-br from-[#c94eb8] to-[#a02595] text-white px-8 py-4 font-bold text-lg shadow-[0_8px_25px_rgba(160,37,149,0.5),0_0_0_3px_rgba(255,255,255,0.3)] transition-all duration-300 rounded-[50px]"
                                    >
                                        <Phone className="w-5 h-5" />
                                        {t('callUs')}
                                    </motion.a>
                                </motion.div>

                                {/* Social Proof / Stats */}
                                <motion.div
                                    variants={itemVariants}
                                    className="pt-4 flex items-center justify-center gap-6 sm:gap-8"
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
                        className="relative flex justify-center lg:justify-start items-start order-1 lg:order-2 lg:-ml-12 lg:-mt-16"
                    >
                        {/* กรอบวงรีแนวนอน - Bigger */}
                        <div className="relative w-full max-w-[500px] lg:max-w-[1400px] aspect-[16/10] rounded-[80px] sm:rounded-[120px] lg:rounded-[150px] shadow-2xl border-[5px] border-white/40 overflow-hidden z-10">
                            {/* รูปคลินิก */}
                            <Image
                                src="/clinic-interior.jpg"
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
        </section>
    );
}
