"use client";

import Image from "next/image";
import { ChevronRight } from "lucide-react";
import { useTranslations } from 'next-intl';

export default function ServicesSection() {
    const t = useTranslations('services');

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
        <section id="services" className="py-12 lg:py-16 relative">
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent" />

            {/* Cute tooth decoration - top right */}
            <div className="absolute top-8 right-4 lg:right-12 hidden md:block opacity-80 animate-bounce-slow">
                <Image
                    src="/cute-teeth-small.png"
                    alt=""
                    width={150}
                    height={85}
                    className="object-contain"
                    style={{ width: 'auto', height: 'auto' }}
                    aria-hidden="true"
                />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="inline-block text-white font-semibold text-sm uppercase tracking-wider mb-4">
                        {t('subtitle')}
                    </span>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
                        <span className="text-white drop-shadow-[0_4px_12px_rgba(160,37,149,0.4)]">
                            {t('title')}
                        </span>
                    </h2>
                    <p className="text-lg text-white/80">
                        {t('description')}
                    </p>
                </div>

                {/* Services Carousel */}
                <div className="relative">
                    <div className="flex gap-6 overflow-x-auto pb-6 snap-x snap-mandatory scrollbar-hide" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
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
                </div>
            </div>
        </section>
    );
}
