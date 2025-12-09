"use client";

import { useRef } from "react";
import Image from "next/image";
import { useTranslations } from 'next-intl';
import { useIsMobile } from '@/hooks/useIsMobile';
import { useFontConfig } from "@/hooks/useFontConfig";
import MobileScrollButtons from "@/components/ui/MobileScrollButtons";
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation } from 'swiper/modules';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';

export default function ReviewsSection() {
    const t = useTranslations('reviews');
    const isMobile = useIsMobile();
    const fonts = useFontConfig();
    const scrollRef = useRef<HTMLElement>(null);

    // 8 review images from Laone Dental Clinic
    const reviewImages = [
        "/reviews/review-1.webp",
        "/reviews/review-2.webp",
        "/reviews/review-3.webp",
        "/reviews/review-4.webp",
        "/reviews/review-5.webp",
        "/reviews/review-6.webp",
        "/reviews/review-7.webp",
        "/reviews/review-8.webp",
    ];

    return (
        <section id="reviews" className="py-8 md:py-12 lg:py-16 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-tr from-[#a02595]/10 via-transparent to-orange-400/10" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-6 md:mb-12">
                    <h2 className={`${fonts.reviews.title} sm:text-4xl lg:text-5xl font-bold text-white mb-6`}>
                        <span className="text-white drop-shadow-[0_4px_12px_rgba(160,37,149,0.4)]">
                            {t('title')}
                        </span>
                    </h2>
                </div>

                {/* Swiper Reviews */}
                <div className="relative px-4 md:px-12">
                    {/* Navigation Arrows - Desktop only */}
                    {!isMobile && (
                        <>
                            <button
                                className="reviews-swiper-prev absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white/20 hover:scale-110 transition-all duration-300 border border-white/20"
                                aria-label="Previous"
                            >
                                <ChevronLeft className="w-5 h-5" />
                            </button>
                            <button
                                className="reviews-swiper-next absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white/20 hover:scale-110 transition-all duration-300 border border-white/20"
                                aria-label="Next"
                            >
                                <ChevronRight className="w-5 h-5" />
                            </button>
                        </>
                    )}

                    {/* Mobile: Native CSS Scroll with MobileScrollButtons */}
                    {isMobile ? (
                        <div className="relative">
                            <div
                                ref={scrollRef as any}
                                className="flex gap-4 overflow-x-auto pb-6 px-4 scrollbar-hide"
                                style={{
                                    WebkitOverflowScrolling: 'touch',
                                    scrollbarWidth: 'none',
                                    msOverflowStyle: 'none'
                                }}
                            >
                                {reviewImages.map((image, index) => (
                                    <div
                                        key={index}
                                        className="flex-shrink-0 w-[200px] aspect-[4/5] rounded-xl overflow-hidden border-4 border-white/30 shadow-xl"
                                    >
                                        <div className="relative w-full h-full bg-gradient-to-br from-[#a02595]/20 to-[#F7931E]/20">
                                            <Image
                                                src={image}
                                                alt={`Review ${index + 1}`}
                                                fill
                                                sizes="200px"
                                                className="object-cover"
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <MobileScrollButtons containerRef={scrollRef as any} itemWidth={220} />
                        </div>
                    ) : (
                        /* Desktop: Swiper with FreeMode */
                        <Swiper
                            modules={[FreeMode, Navigation]}
                            spaceBetween={16}
                            slidesPerView="auto"
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
                                prevEl: '.reviews-swiper-prev',
                                nextEl: '.reviews-swiper-next',
                            }}
                            className="!overflow-visible"
                        >
                            {reviewImages.map((image, index) => (
                                <SwiperSlide key={index} className="!w-auto">
                                    <div
                                        className="w-[200px] sm:w-[220px] lg:w-[240px] aspect-[4/5] rounded-xl overflow-hidden border-4 border-white/30 hover:border-white/60 transition-all duration-300 shadow-xl hover:scale-105"
                                    >
                                        <div className="relative w-full h-full bg-gradient-to-br from-[#a02595]/20 to-[#F7931E]/20">
                                            <Image
                                                src={image}
                                                alt={`Review ${index + 1}`}
                                                fill
                                                sizes="240px"
                                                className="object-cover"
                                            />
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    )}
                </div>
            </div>
        </section>
    );
}
