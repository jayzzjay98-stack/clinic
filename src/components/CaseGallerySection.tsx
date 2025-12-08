"use client";

import { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, FreeMode } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Categories for filtering
const categories = ["All", "Orthodontics", "Implants", "Whitening", "Veneers"];

// Case studies data with locally generated dental images
const cases = [
    // Orthodontics - 3 cases
    {
        id: 1,
        category: "Orthodontics",
        title: "Crowded Teeth Fix",
        description: "14-month metal braces treatment for severe crowding.",
        beforeImage: "/cases/ortho_before_1.png",
        afterImage: "/cases/ortho_after_1.png",
    },
    {
        id: 2,
        category: "Orthodontics",
        title: "Gap Closure",
        description: "Invisalign treatment to close front tooth gaps.",
        beforeImage: "/cases/ortho_before_2.png",
        afterImage: "/cases/ortho_after_2.png",
    },
    {
        id: 3,
        category: "Orthodontics",
        title: "Overbite Correction",
        description: "24-month braces for severe overbite.",
        beforeImage: "/cases/ortho_before_3.png",
        afterImage: "/cases/ortho_after_3.png",
    },
    // Implants - 3 cases
    {
        id: 4,
        category: "Implants",
        title: "Single Molar Implant",
        description: "Titanium implant with ceramic crown.",
        beforeImage: "/cases/implant_before_1.png",
        afterImage: "/cases/implant_after_1.png",
    },
    {
        id: 5,
        category: "Implants",
        title: "Full Arch Restoration",
        description: "All-on-4 complete smile restoration.",
        beforeImage: "/cases/implant_before_2.png",
        afterImage: "/cases/implant_after_2.png",
    },
    {
        id: 6,
        category: "Implants",
        title: "Multiple Implants",
        description: "3 implants for missing molars.",
        beforeImage: "/cases/implant_before_3.png",
        afterImage: "/cases/implant_after_3.png",
    },
    // Whitening - 3 cases
    {
        id: 7,
        category: "Whitening",
        title: "Laser Whitening",
        description: "8 shades whiter in one hour.",
        beforeImage: "/cases/whitening_before_1.png",
        afterImage: "/cases/whitening_after_1.png",
    },
    {
        id: 8,
        category: "Whitening",
        title: "Stain Removal",
        description: "Professional cleaning for tobacco stains.",
        beforeImage: "/cases/whitening_before_2.png",
        afterImage: "/cases/whitening_after_2.png",
    },
    {
        id: 9,
        category: "Whitening",
        title: "Zoom Treatment",
        description: "Coffee stain removal with Zoom whitening.",
        beforeImage: "/cases/whitening_before_3.png",
        afterImage: "/cases/whitening_after_3.png",
    },
    // Veneers - 2 cases (using whitening after as placeholder for 2nd)
    {
        id: 10,
        category: "Veneers",
        title: "Hollywood Smile",
        description: "8 porcelain veneers for perfect shape.",
        beforeImage: "/cases/veneers_before_1.png",
        afterImage: "/cases/veneers_after_1.png",
    },
    {
        id: 11,
        category: "Veneers",
        title: "Smile Makeover",
        description: "Complete veneer transformation.",
        beforeImage: "/cases/veneers_before_2.png",
        afterImage: "/cases/veneers_after_1.png", // Reusing after image
    },
];

export default function CaseGallerySection() {
    const [activeCategory, setActiveCategory] = useState("All");

    // Filter cases based on active category
    const filteredCases =
        activeCategory === "All"
            ? cases
            : cases.filter((c) => c.category === activeCategory);

    return (
        <section
            id="cases"
            className="py-20 lg:py-28 relative [&_.swiper-pagination-bullet]:bg-white/50 [&_.swiper-pagination-bullet]:opacity-100 [&_.swiper-pagination-bullet-active]:bg-[#F7931E] [&_.swiper-pagination-bullet-active]:scale-125"
        >
            {/* Background - pointer-events-none prevents blocking clicks */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#a02595]/10 via-transparent to-orange-500/10 pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-10">
                    <span className="inline-block text-white font-semibold text-sm uppercase tracking-wider mb-4">
                        Success Stories
                    </span>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F7931E] to-[#a02595]">
                            Real Transformations
                        </span>
                    </h2>
                    <p className="text-base text-white/80">
                        See the results we&apos;ve achieved for our happy patients.
                    </p>
                </div>

                {/* Category Filter Tabs - relative z-50 ensures clickability */}
                <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10 relative z-50">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            className={`px-6 py-2.5 rounded-full font-medium text-sm transition-all duration-300 ${activeCategory === cat
                                    ? "bg-gradient-to-r from-[#F7931E] to-[#a02595] text-white shadow-lg scale-105"
                                    : "bg-white/10 text-white/70 hover:bg-white/20 hover:text-white"
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Carousel */}
                <div className="relative px-4 sm:px-12">
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
                        spaceBetween={24}
                        slidesPerView={1.2}
                        grabCursor={true}
                        observer={true}
                        observeParents={true}
                        freeMode={{
                            enabled: true,
                            sticky: false,
                            momentumRatio: 0.8,
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
                        className="!pb-14"
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
                                                alt={`Before ${item.title}`}
                                                fill
                                                sizes="(max-width: 640px) 50vw, 33vw"
                                                className="object-cover"
                                                quality={80}
                                            />
                                            <div className="absolute top-2 left-2 px-2 py-0.5 bg-black/60 backdrop-blur-sm rounded text-[10px] font-bold text-white uppercase tracking-wider border border-white/10">
                                                Before
                                            </div>
                                        </div>

                                        {/* After Image */}
                                        <div className="relative aspect-square overflow-hidden">
                                            <Image
                                                src={item.afterImage}
                                                alt={`After ${item.title}`}
                                                fill
                                                sizes="(max-width: 640px) 50vw, 33vw"
                                                className="object-cover"
                                                quality={80}
                                            />
                                            <div className="absolute top-2 right-2 px-2 py-0.5 bg-[#a02595] backdrop-blur-sm rounded text-[10px] font-bold text-white uppercase tracking-wider shadow-lg">
                                                After
                                            </div>
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="p-5">
                                        <span className="inline-block px-2.5 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] text-white/70 mb-3">
                                            {item.category}
                                        </span>
                                        <h3 className="text-base font-bold text-white mb-1 group-hover:text-[#F7931E] transition-colors">
                                            {item.title}
                                        </h3>
                                        <p className="text-white/60 text-xs leading-relaxed">
                                            {item.description}
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
