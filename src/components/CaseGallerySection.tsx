"use client";

import { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, FreeMode } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useTranslations } from 'next-intl';

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Categories for filtering (key -> internal name mapping)
const categoryKeys = [
    { key: "all", internal: "All" },
    { key: "orthodontics", internal: "Orthodontics" },
    { key: "implants", internal: "Implants" },
    { key: "whitening", internal: "Whitening" },
    { key: "veneers", internal: "Veneers" }
];

// Case studies data with translation keys
const cases = [
    // ORTHODONTICS - จัดฟัน (รูปเหล็กจัดฟัน)
    { id: 1, category: "Orthodontics", categoryKey: "orthodontics", titleKey: "crowdedTeeth", beforeImage: "/cases/ortho_before.png", afterImage: "/cases/ortho_after.png" },
    { id: 2, category: "Orthodontics", categoryKey: "orthodontics", titleKey: "gapClosure", beforeImage: "/cases/ortho_before.png", afterImage: "/cases/ortho_after.png" },
    { id: 3, category: "Orthodontics", categoryKey: "orthodontics", titleKey: "overbiteCorrection", beforeImage: "/cases/ortho_before.png", afterImage: "/cases/ortho_after.png" },

    // IMPLANTS - รากฟันเทียม (รูปรากเทียม)
    { id: 4, category: "Implants", categoryKey: "implants", titleKey: "singleImplant", beforeImage: "/cases/implant_before.png", afterImage: "/cases/implant_after.png" },
    { id: 5, category: "Implants", categoryKey: "implants", titleKey: "fullArch", beforeImage: "/cases/implant_before.png", afterImage: "/cases/implant_after.png" },
    { id: 6, category: "Implants", categoryKey: "implants", titleKey: "multipleImplants", beforeImage: "/cases/implant_before.png", afterImage: "/cases/implant_after.png" },

    // WHITENING - ฟอกสีฟัน (รูปฟอกฟัน)
    { id: 7, category: "Whitening", categoryKey: "whitening", titleKey: "laserWhitening", beforeImage: "/cases/whitening_before.png", afterImage: "/cases/whitening_after.png" },
    { id: 8, category: "Whitening", categoryKey: "whitening", titleKey: "stainRemoval", beforeImage: "/cases/whitening_before.png", afterImage: "/cases/whitening_after.png" },
    { id: 9, category: "Whitening", categoryKey: "whitening", titleKey: "zoomTreatment", beforeImage: "/cases/whitening_before.png", afterImage: "/cases/whitening_after.png" },

    // VENEERS - วีเนียร์ (รูปวีเนียร์)
    { id: 10, category: "Veneers", categoryKey: "veneers", titleKey: "hollywoodSmile", beforeImage: "/cases/veneers_before.png", afterImage: "/cases/veneers_after.png" },
    { id: 11, category: "Veneers", categoryKey: "veneers", titleKey: "smileMakeover", beforeImage: "/cases/veneers_before.png", afterImage: "/cases/veneers_after.png" },
    { id: 12, category: "Veneers", categoryKey: "veneers", titleKey: "celebritySmile", beforeImage: "/cases/veneers_before.png", afterImage: "/cases/veneers_after.png" },
];

export default function CaseGallerySection() {
    const [activeCategory, setActiveCategory] = useState("All");
    const t = useTranslations('cases');

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

            {/* Cute tooth decoration - left side */}
            <div className="absolute top-20 left-4 lg:left-8 hidden lg:block opacity-80 animate-bounce-slow">
                <Image
                    src="/cute-teeth-small.png"
                    alt=""
                    width={140}
                    height={80}
                    className="object-contain"
                    style={{ width: 'auto', height: 'auto' }}
                    aria-hidden="true"
                />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-10">
                    <span className="inline-block text-white font-semibold text-sm uppercase tracking-wider mb-4">
                        {t('subtitle')}
                    </span>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
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
                <div className="relative px-4 sm:px-12 touch-pan-y">
                    {/* Navigation Arrows */}
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

                    {/* CRITICAL: key={activeCategory} forces React to destroy and re-create Swiper */}
                    <Swiper
                        key={activeCategory}
                        modules={[Navigation, Pagination, FreeMode]}
                        spaceBetween={20}
                        slidesPerView={1.2}
                        speed={500}
                        touchRatio={1.5}
                        touchAngle={45}
                        grabCursor={true}
                        touchStartPreventDefault={false}
                        shortSwipes={true}
                        longSwipes={true}
                        longSwipesRatio={0.5}
                        resistance={true}
                        resistanceRatio={0.85}
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
                            640: { slidesPerView: 2.2, spaceBetween: 24 },
                            1024: { slidesPerView: 3, spaceBetween: 32 },
                        }}
                        className="!pb-14 touch-pan-y"
                    >
                        {filteredCases.map((item) => (
                            <SwiperSlide key={item.id}>
                                <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl overflow-hidden hover:border-[#a02595]/50 transition-all duration-300 group h-full">
                                    {/* Before/After Images Side by Side */}
                                    <div className="grid grid-cols-2 gap-0.5 bg-black/20">
                                        {/* Before Image */}
                                        <div className="relative aspect-square overflow-hidden">
                                            <Image
                                                src={item.beforeImage}
                                                alt={`Before ${t(`items.${item.titleKey}.title`)}`}
                                                fill
                                                sizes="(max-width: 640px) 50vw, 33vw"
                                                className="object-cover"
                                                quality={80}
                                            />
                                        </div>

                                        {/* After Image */}
                                        <div className="relative aspect-square overflow-hidden">
                                            <Image
                                                src={item.afterImage}
                                                alt={`After ${t(`items.${item.titleKey}.title`)}`}
                                                fill
                                                sizes="(max-width: 640px) 50vw, 33vw"
                                                className="object-cover"
                                                quality={80}
                                            />
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="p-5">
                                        <span className="inline-block px-2.5 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] text-white/70 mb-3">
                                            {t(`categories.${item.categoryKey}`)}
                                        </span>
                                        <h3 className="text-base font-bold text-white mb-1 group-hover:text-[#F7931E] transition-colors">
                                            {t(`items.${item.titleKey}.title`)}
                                        </h3>
                                        <p className="text-white/60 text-xs leading-relaxed">
                                            {t(`items.${item.titleKey}.description`)}
                                        </p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>

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
