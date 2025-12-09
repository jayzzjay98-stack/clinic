"use client";

import { useRef } from "react";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import { useTranslations } from 'next-intl';
import MobileScrollButtons from "@/components/ui/MobileScrollButtons";

export default function ServicesSection() {
    const t = useTranslations('services');
    const scrollRef = useRef<HTMLDivElement>(null);

    const services = [
        {
            image: "/implant-service.jpg",
            titleKey: "implants",
            price: "$1,200+",
        },
        {
            image: "/teeth-whitening.jpg",
            titleKey: "whitening",
            price: "$120+",
        },
        {
            image: "/dental-braces.jpg",
            titleKey: "orthodontics",
            price: "$1,500+",
        },
        {
            image: "/dental-checkup.jpg",
            titleKey: "checkup",
            price: "$20+",
        },
    ];

    return (
        <section id="services" className="py-8 md:py-12 lg:py-16 relative">
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-8 md:mb-16 relative">
                    {/* Tooth Mascot - left side (all screens) */}
                    <div className="absolute left-0 top-1/4 -translate-y-1/2 -translate-x-1/4 md:-translate-x-1/2">
                        <Image
                            src="/tooth-mascot-v2.webp"
                            alt="Tooth Mascot"
                            width={160}
                            height={160}
                            className="animate-slow-bounce drop-shadow-lg w-16 h-16 sm:w-24 sm:h-24 md:w-40 md:h-40"
                        />
                    </div>
                    {/* Dental Scene - right side (all screens) */}
                    <div className="absolute right-0 top-1/4 -translate-y-1/2 translate-x-1/4 md:translate-x-1/2">
                        <Image
                            src="/dental-scene-v2.webp"
                            alt="Dental Scene"
                            width={200}
                            height={200}
                            className="animate-slow-bounce drop-shadow-lg w-20 h-20 sm:w-28 sm:h-28 md:w-48 md:h-48"
                        />
                    </div>
                    <h2 className="text-xl sm:text-2xl lg:text-4xl font-bold text-white mb-6 leading-tight whitespace-pre-line">
                        <span className="text-white drop-shadow-[0_4px_12px_rgba(160,37,149,0.4)]">
                            {t('title')}
                        </span>
                    </h2>
                    <p className="text-lg text-white/80">
                        {t('description')}
                    </p>
                </div>

                {/* Services Carousel - Centered with Scroll */}
                <div className="relative">
                    <div
                        ref={scrollRef}
                        className="flex gap-6 overflow-x-auto pb-6 px-4 justify-start lg:justify-center scrollbar-hide"
                        style={{
                            scrollbarWidth: 'none',
                            msOverflowStyle: 'none',
                            WebkitOverflowScrolling: 'touch'
                        }}
                    >
                        {services.map((service, index) => (
                            <div
                                key={index}
                                className="flex-shrink-0 w-[85vw] sm:w-[320px] lg:w-[300px] snap-center group bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl overflow-hidden hover:shadow-xl hover:shadow-[#a02595]/10 hover:border-[#a02595]/20 transition-all duration-300 transform hover:-translate-y-2"
                            >
                                {/* Service Image */}
                                <div className="aspect-[4/3] relative overflow-hidden">
                                    <Image
                                        src={service.image}
                                        alt={t(`${service.titleKey}.title`)}
                                        fill
                                        sizes="(max-width: 640px) 85vw, (max-width: 1024px) 320px, 300px"
                                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                                        loading="lazy"
                                        quality={80}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                                </div>

                                {/* Content */}
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-white mb-2">
                                        {t(`${service.titleKey}.title`)}
                                    </h3>
                                    <p className="text-white/80 text-sm leading-relaxed mb-4">
                                        {t(`${service.titleKey}.description`)}
                                    </p>
                                    <div className="flex items-center justify-between">
                                        <span className="text-white font-bold">{service.price}</span>
                                        <a
                                            href="#contact"
                                            className="text-white font-semibold flex items-center gap-1 hover:gap-2 transition-all"
                                        >
                                            {t('bookNow') || 'Book Now'}
                                            <ChevronRight className="w-4 h-4" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <MobileScrollButtons containerRef={scrollRef as any} itemWidth={300} />
                </div>
            </div>
        </section>
    );
}
