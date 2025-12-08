"use client";

import Image from "next/image";
import { useTranslations } from 'next-intl';
import {
    Cpu,
    BadgeCheck,
    ShieldCheck,
} from "lucide-react";

export default function WhyChooseUsSection() {
    const t = useTranslations('whyUs');

    const features = [
        {
            icon: Cpu,
            titleKey: "tech",
        },
        {
            icon: BadgeCheck,
            titleKey: "experts",
        },
        {
            icon: ShieldCheck,
            titleKey: "care",
        },
    ];

    return (
        <section id="why-us" className="py-12 lg:py-16 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 via-transparent to-[#c94eb8]/10" />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Left Column - Bento Grid Style */}
                    <div className="grid grid-cols-3 grid-rows-3 gap-3 h-[500px] lg:h-[600px]">
                        {/* Large image - top left, spans 2 cols */}
                        <div className="col-span-2 row-span-2 rounded-2xl overflow-hidden shadow-lg relative">
                            <Image
                                src="/dental-technology.jpg"
                                alt="Advanced 3D dental X-ray and digital imaging technology"
                                fill
                                sizes="(max-width: 768px) 66vw, (max-width: 1024px) 40vw, 33vw"
                                className="object-cover hover:scale-105 transition-transform duration-500"
                                loading="lazy"
                                quality={80}
                            />
                        </div>
                        {/* Small image - top right */}
                        <div className="col-span-1 row-span-1 rounded-2xl overflow-hidden shadow-lg relative">
                            <Image
                                src="/patient-review-1.jpg"
                                alt="Satisfied patient giving testimonial at Laone Dental"
                                fill
                                sizes="(max-width: 768px) 33vw, (max-width: 1024px) 20vw, 17vw"
                                className="object-cover hover:scale-105 transition-transform duration-500"
                                loading="lazy"
                                quality={80}
                            />
                        </div>
                        {/* Medium image - middle right */}
                        <div className="col-span-1 row-span-2 rounded-2xl overflow-hidden shadow-lg relative">
                            <Image
                                src="/patient-review-2.jpg"
                                alt="Happy patient sharing dental care experience"
                                fill
                                sizes="(max-width: 768px) 33vw, (max-width: 1024px) 20vw, 17vw"
                                className="object-cover hover:scale-105 transition-transform duration-500"
                                loading="lazy"
                                quality={80}
                            />
                        </div>
                        {/* Bottom left image */}
                        <div className="col-span-1 row-span-1 rounded-2xl overflow-hidden shadow-lg relative">
                            <Image
                                src="/teeth-whitening.jpg"
                                alt="Professional LED teeth whitening treatment"
                                fill
                                sizes="(max-width: 768px) 33vw, (max-width: 1024px) 20vw, 17vw"
                                className="object-cover hover:scale-105 transition-transform duration-500"
                                loading="lazy"
                                quality={80}
                            />
                        </div>
                        {/* Bottom center image */}
                        <div className="col-span-1 row-span-1 rounded-2xl overflow-hidden shadow-lg relative">
                            <Image
                                src="/clinic-interior.jpg"
                                alt="Clean and modern Laone Dental Clinic waiting area"
                                fill
                                sizes="(max-width: 768px) 33vw, (max-width: 1024px) 20vw, 17vw"
                                className="object-cover hover:scale-105 transition-transform duration-500"
                                loading="lazy"
                                quality={80}
                            />
                        </div>
                    </div>

                    {/* Right Column - Content */}
                    <div className="space-y-8 text-center lg:text-left">
                        <div>
                            <span className="inline-block text-white font-semibold text-sm uppercase tracking-wider mb-4">
                                {t('subtitle')}
                            </span>
                            <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-white mb-6">
                                <span className="text-white drop-shadow-[0_4px_12px_rgba(160,37,149,0.4)]">
                                    {t('title')}
                                </span>
                            </h2>
                            <p className="text-base lg:text-lg text-white/80 max-w-lg mx-auto lg:mx-0">
                                {t('description')}
                            </p>
                        </div>

                        {/* Features */}
                        <div className="space-y-6">
                            {features.map((feature, index) => (
                                <div key={index} className="flex gap-4 p-4 bg-white/10 backdrop-blur-md rounded-xl border border-white/20">
                                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#F7931E] to-[#a02595] flex items-center justify-center flex-shrink-0">
                                        <feature.icon className="w-7 h-7 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-white mb-1">
                                            {t(`features.${feature.titleKey}.title`)}
                                        </h3>
                                        <p className="text-white/80 text-sm leading-relaxed">
                                            {t(`features.${feature.titleKey}.description`)}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
