"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, FreeMode } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useTranslations } from 'next-intl';
import CaseCard from "@/components/cards/CaseCard";
import MobileScrollButtons from "@/components/ui/MobileScrollButtons";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Hook to detect mobile
function useIsMobile() {
    const [isMobile, setIsMobile] = useState(false);
    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);
    return isMobile;
}

// Categories for filtering (key -> internal name mapping)
const categoryKeys = [
    { key: "all", internal: "All" },
    { key: "orthodontics", internal: "Orthodontics" },
    { key: "implants", internal: "Implants" },
    { key: "whitening", internal: "Whitening" },
    { key: "veneers", internal: "Veneers" }
];

import { cases } from "@/data/cases";

export default function CaseGallerySection() {
    const [activeCategory, setActiveCategory] = useState("All");
    const t = useTranslations('cases');
    const isMobile = useIsMobile();
    const scrollRef = useRef<HTMLElement>(null);

    // Filter cases based on active category
    const filteredCases =
        activeCategory === "All"
            ? cases
            : cases.filter((c) => c.category === activeCategory);

    return (
        <section
            id="cases"
            className="py-12 lg:py-16 relative [&_.swiper-pagination-bullet]:bg-white/50 [&_.swiper-pagination-bullet]:opacity-100 [&_.swiper-pagination-bullet-active]:bg-[#F7931E] [&_.swiper-pagination-bullet-active]:scale-125"
        >
            {/* Background - pointer-events-none prevents blocking clicks */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#a02595]/10 via-transparent to-orange-500/10 pointer-events-none" />



            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-10">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 whitespace-pre-line">
                        <span className="text-white drop-shadow-[0_4px_12px_rgba(160,37,149,0.4)]">
                            {t('title')}
                        </span>
                    </h2>
                    <p className="text-base text-white/80">
                        {t('description')}
                    </p>
                </div>

                {/* Category Filter Tabs - relative z-50 ensures clickability */}
                <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10 relative z-50">
                    {categoryKeys.map((cat) => (
                        <button
                            key={cat.internal}
                            onClick={() => setActiveCategory(cat.internal)}
                            className={`px-6 py-2.5 rounded-full font-medium text-sm transition-all duration-300 ${activeCategory === cat.internal
                                ? "bg-gradient-to-r from-[#F7931E] to-[#a02595] text-white shadow-lg scale-105"
                                : "bg-white/10 text-white/70 hover:bg-white/20 hover:text-white"
                                }`}
                        >
                            {t(`categories.${cat.key}`)}
                        </button>
                    ))}
                </div>

                {/* Carousel */}
                <div className="relative px-4 md:px-12">
                    {/* Navigation Arrows - Desktop only */}
                    {!isMobile && (
                        <>
                            <button
                                className="case-swiper-prev absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white/20 hover:scale-110 transition-all border border-white/20"
                                aria-label="Previous case"
                            >
                                <ChevronLeft className="w-5 h-5" />
                            </button>
                            <button
                                className="case-swiper-next absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white/20 hover:scale-110 transition-all border border-white/20"
                                aria-label="Next case"
                            >
                                <ChevronRight className="w-5 h-5" />
                            </button>
                        </>
                    )}

                    {/* Mobile: Native CSS Scroll */}
                    {isMobile ? (
                        <div className="relative">
                            <div
                                ref={scrollRef as any}
                                className="flex gap-4 overflow-x-auto pb-4 px-4"
                                style={{
                                    WebkitOverflowScrolling: 'touch',
                                    scrollbarWidth: 'none',
                                    msOverflowStyle: 'none'
                                }}
                            >
                                {filteredCases.map((item) => (
                                    <div
                                        key={item.id}
                                        className="flex-shrink-0 w-[280px]"
                                    >
                                        <CaseCard data={item} />
                                    </div>
                                ))}
                            </div>
                            <MobileScrollButtons containerRef={scrollRef as any} itemWidth={280} />
                        </div>
                    ) : (
                        /* Desktop: Swiper */
                        <Swiper
                            key={activeCategory}
                            modules={[Navigation, Pagination, FreeMode]}
                            spaceBetween={24}
                            slidesPerView={2}
                            speed={500}
                            grabCursor={true}
                            freeMode={{
                                enabled: true,
                                sticky: false,
                                momentum: true,
                                momentumRatio: 1,
                                momentumVelocityRatio: 1,
                                momentumBounce: true,
                            }}
                            navigation={{
                                prevEl: ".case-swiper-prev",
                                nextEl: ".case-swiper-next",
                            }}
                            pagination={{
                                clickable: true,
                                dynamicBullets: true,
                            }}
                            breakpoints={{
                                768: { slidesPerView: 2, spaceBetween: 24 },
                                1024: { slidesPerView: 3, spaceBetween: 32 },
                            }}
                            className="!pb-14"
                        >
                            {filteredCases.map((item) => (
                                <SwiperSlide key={item.id}>
                                    <CaseCard data={item} />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    )}

                    {/* Empty State */}
                    {filteredCases.length === 0 && (
                        <div className="text-center py-12">
                            <p className="text-white/60 text-sm">
                                No cases found in this category.
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}
