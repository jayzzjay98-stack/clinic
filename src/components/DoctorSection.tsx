"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { useTranslations } from 'next-intl';
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Pagination } from "swiper/modules";
import { ChevronLeft, ChevronRight, Star, Calendar } from "lucide-react";

import { useIsMobile } from "@/hooks/useIsMobile";
import { useFontConfig } from "@/hooks/useFontConfig";
import DoctorCard from "@/components/cards/DoctorCard";
import MobileScrollButtons from "@/components/ui/MobileScrollButtons";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/free-mode";

import { Doctor } from "@/types";
import { doctors } from "@/data/doctors";

export default function DoctorSection() {
    const isMobile = useIsMobile();
    const fonts = useFontConfig();
    const t = useTranslations('doctor');
    const scrollRef = useRef<HTMLDivElement>(null);
    const [selectedDoctor, setSelectedDoctor] = useState<Doctor | null>(null);
    const [isModalVisible, setIsModalVisible] = useState(false);

    const openModal = (doctor: Doctor) => {
        setSelectedDoctor(doctor);
        setIsModalVisible(true);
    };

    const closeModal = () => {
        setIsModalVisible(false);
        setSelectedDoctor(null);
    };

    return (
        <section id="doctor" className="py-12 md:py-24 relative overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#a02595]/5 to-transparent pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-1/3 h-full bg-gradient-to-r from-[#F7931E]/5 to-transparent pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Section Header */}
                <div className="text-center mb-8 md:mb-16 max-w-3xl mx-auto">
                    <span className="text-[#F7931E] font-semibold tracking-wider uppercase text-base md:text-lg mb-3 block">
                        {t('subtitle')}
                    </span>
                    <h2 className={`${fonts.doctor.title} md:text-5xl font-bold text-white mb-6`}>
                        {t('title')}
                    </h2>
                    {t('description') && (
                        <p className="text-white/80 text-lg">
                            {t('description')}
                        </p>
                    )}
                </div>

                {isMobile ? (
                    <div className="relative">
                        <div
                            ref={scrollRef}
                            className="flex gap-4 overflow-x-auto pb-4 px-4 scrollbar-hide"
                            style={{
                                WebkitOverflowScrolling: 'touch',
                                scrollbarWidth: 'none',
                                msOverflowStyle: 'none'
                            }}
                        >
                            {doctors.map((doctor) => (
                                <DoctorCard key={doctor.id} doctor={doctor} onClick={openModal} variant="mobile" />
                            ))}
                        </div>
                        <MobileScrollButtons containerRef={scrollRef as any} itemWidth={280} />
                    </div>
                ) : (
                    /* Desktop: Swiper */
                    <Swiper
                        modules={[Navigation, Pagination, FreeMode]}
                        spaceBetween={24}
                        slidesPerView={1}
                        speed={800}
                        grabCursor={true}
                        centeredSlides={false}
                        freeMode={{
                            enabled: true,
                            momentum: true,
                            momentumRatio: 0.8,
                            momentumVelocityRatio: 0.6,
                        }}
                        navigation={{
                            prevEl: '.swiper-button-prev-custom',
                            nextEl: '.swiper-button-next-custom',
                        }}
                        pagination={{
                            clickable: true,
                            dynamicBullets: true,
                        }}
                        breakpoints={{
                            640: { slidesPerView: 2, spaceBetween: 20 },
                            1024: { slidesPerView: 3, spaceBetween: 30 },
                            1280: { slidesPerView: 4, spaceBetween: 30 },
                        }}
                        className="!pb-12"
                    >
                        {doctors.map((doctor) => (
                            <SwiperSlide key={doctor.id} className="h-auto">
                                <DoctorCard doctor={doctor} onClick={openModal} variant="desktop" />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                )}
            </div>

            {/* Doctor Detail Modal */}
            {isModalVisible && selectedDoctor && (
                <div
                    className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 animate-[fadeIn_0.3s_ease-out]"
                    role="dialog"
                    aria-modal="true"
                >
                    <div
                        className="absolute inset-0 bg-black/60 backdrop-blur-sm animate-[fadeIn_0.2s_ease-out]"
                        onClick={closeModal}
                    />
                    <div className="bg-gradient-to-br from-[#1a1a2e] via-[#2d1b3d] to-[#1a1a2e] border border-white/10 rounded-3xl shadow-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto relative z-[110] animate-[scaleIn_0.35s_cubic-bezier(0.34,1.56,0.64,1)]">
                        {/* Close Button */}
                        <button
                            onClick={closeModal}
                            className="absolute top-4 right-4 z-20 p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
                        >
                            <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>

                        <div className="p-6 md:p-8 flex flex-col md:flex-row gap-6 md:gap-8">
                            {/* Left: Circular Photo */}
                            <div className="flex flex-col items-center md:items-start shrink-0">
                                <div className="relative w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-[#F7931E] shadow-lg shadow-[#F7931E]/20">
                                    <Image
                                        src={selectedDoctor.image}
                                        alt={selectedDoctor.name}
                                        fill
                                        className="object-cover object-top"
                                    />
                                </div>
                                <div className="mt-4 px-4 py-2 bg-gradient-to-r from-[#F7931E] to-[#ff6b35] rounded-full text-white text-sm font-semibold shadow-lg">
                                    {selectedDoctor.experience}
                                </div>
                            </div>

                            {/* Right: Content */}
                            <div className="flex-1 min-w-0">
                                {/* Specialty Tag */}
                                <span className="inline-block text-[#F7931E] text-sm font-semibold mb-2 font-latin">
                                    {selectedDoctor.specialty}
                                </span>

                                {/* Name & Title */}
                                <h3 className="text-2xl md:text-3xl font-bold text-white mb-1 font-latin">{selectedDoctor.name}</h3>
                                <p className="text-white/60 mb-5 font-latin">{selectedDoctor.title}</p>

                                {/* Info Rows */}
                                <div className="space-y-3 mb-5">
                                    <div className="flex items-start gap-3">
                                        <div className="w-8 h-8 bg-[#a02595]/30 rounded-lg flex items-center justify-center shrink-0">
                                            <svg className="w-4 h-4 text-[#F7931E]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                            </svg>
                                        </div>
                                        <div>
                                            <p className="text-white/50 text-xs uppercase tracking-wider font-latin">Education</p>
                                            <p className="text-white text-sm font-latin">{selectedDoctor.education}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <div className="w-8 h-8 bg-[#a02595]/30 rounded-lg flex items-center justify-center shrink-0">
                                            <Star className="w-4 h-4 text-[#F7931E]" />
                                        </div>
                                        <div>
                                            <p className="text-white/50 text-xs uppercase tracking-wider font-latin">Specialty</p>
                                            <p className="text-white text-sm font-latin">{selectedDoctor.specialty}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <div className="w-8 h-8 bg-[#a02595]/30 rounded-lg flex items-center justify-center shrink-0">
                                            <Calendar className="w-4 h-4 text-[#F7931E]" />
                                        </div>
                                        <div>
                                            <p className="text-white/50 text-xs uppercase tracking-wider font-latin">Experience</p>
                                            <p className="text-white text-sm font-latin">{selectedDoctor.experience}</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Bio */}
                                <p className="text-white/70 text-sm leading-relaxed mb-5 font-latin">
                                    {selectedDoctor.bio}
                                </p>

                                {/* Credentials */}
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {selectedDoctor.credentials.map((cred, idx) => (
                                        <span key={idx} className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/5 border border-white/10 text-white/80 rounded-full text-xs font-latin">
                                            <svg className="w-3.5 h-3.5 text-[#F7931E]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                            {cred}
                                        </span>
                                    ))}
                                </div>

                                {/* Book Button */}
                                <button
                                    onClick={() => {
                                        closeModal();
                                        setTimeout(() => {
                                            const contactSection = document.getElementById('contact');
                                            if (contactSection) {
                                                contactSection.scrollIntoView({ behavior: 'smooth' });
                                            }
                                        }, 300);
                                    }}
                                    className="w-full md:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#F7931E] to-[#ff6b35] text-white py-3 px-8 rounded-xl font-semibold shadow-lg shadow-[#F7931E]/20 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 font-latin cursor-pointer"
                                >
                                    <Calendar className="w-5 h-5" />
                                    {t('bookWith')} {selectedDoctor.name.split(' ')[0]}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}
