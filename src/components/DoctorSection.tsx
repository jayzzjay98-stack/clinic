"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, FreeMode } from "swiper/modules";
import { X, ChevronLeft, ChevronRight, Calendar, GraduationCap, Briefcase, Stethoscope, CircleCheck } from "lucide-react";
import DoctorCard from "@/components/cards/DoctorCard";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/free-mode";

import { useIsMobile } from "@/hooks/useIsMobile";

import { Doctor } from "@/types";
import { doctors } from "@/data/doctors";

export default function DoctorSection() {
    const [selectedDoctor, setSelectedDoctor] = useState<Doctor | null>(null);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const isMobile = useIsMobile();

    const openModal = (doctor: Doctor) => {
        setSelectedDoctor(doctor);
        // Small delay to allow React to render the modal before animating
        requestAnimationFrame(() => {
            setIsModalVisible(true);
        });
        document.body.style.overflow = "hidden";
    };

    const closeModal = () => {
        setIsModalVisible(false);
        // Wait for animation to complete before removing from DOM
        setTimeout(() => {
            setSelectedDoctor(null);
            document.body.style.overflow = "unset";
        }, 300);
    };

    // Close modal on Escape key
    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === "Escape" && selectedDoctor) {
                closeModal();
            }
        };
        window.addEventListener("keydown", handleEscape);
        return () => window.removeEventListener("keydown", handleEscape);
    }, [selectedDoctor]);

    return (
        <section id="doctor" className="py-12 lg:py-16 relative">
            <div className="absolute inset-0 bg-gradient-to-bl from-[#a02595]/10 to-orange-500/10" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
                        Our{" "}
                        <span className="text-white drop-shadow-[0_4px_12px_rgba(160,37,149,0.4)]">
                            Dental Team
                        </span>
                    </h2>
                </div>

                {/* Swiper Carousel with FreeMode */}
                <div className="relative px-4 md:px-12">
                    {/* Custom Navigation Buttons - Desktop only */}
                    {!isMobile && (
                        <>
                            <button
                                className="doctor-swiper-prev absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white/20 hover:scale-110 transition-all duration-300 border border-white/20"
                                aria-label="Previous"
                            >
                                <ChevronLeft className="w-5 h-5" />
                            </button>
                            <button
                                className="doctor-swiper-next absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white/20 hover:scale-110 transition-all duration-300 border border-white/20"
                                aria-label="Next"
                            >
                                <ChevronRight className="w-5 h-5" />
                            </button>
                        </>
                    )}

                    {/* Mobile: Native CSS Scroll */}
                    {isMobile ? (
                        <div
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
                    ) : (
                        /* Desktop: Swiper */
                        <Swiper
                            modules={[Navigation, Pagination, FreeMode]}
                            spaceBetween={20}
                            slidesPerView={3}
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
                                prevEl: ".doctor-swiper-prev",
                                nextEl: ".doctor-swiper-next",
                            }}
                            pagination={{
                                clickable: true,
                                dynamicBullets: true,
                            }}
                            breakpoints={{
                                768: { slidesPerView: 3, spaceBetween: 24 },
                                1024: { slidesPerView: 4, spaceBetween: 32 },
                                1280: { slidesPerView: 5, spaceBetween: 32 },
                            }}
                            className="!pb-12"
                        >
                            {doctors.map((doctor) => (
                                <SwiperSlide key={doctor.id}>
                                    <DoctorCard doctor={doctor} onClick={openModal} variant="desktop" />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    )}
                </div>
            </div>

            {/* Modal Popup with Smooth Animations */}
            {selectedDoctor && (
                <div
                    className="fixed inset-0 z-[100] flex items-center justify-center p-4"
                    onClick={closeModal}
                >
                    {/* Backdrop with Fade Animation */}
                    <div
                        className={`absolute inset-0 bg-black/70 backdrop-blur-sm transition-opacity duration-300 ease-out ${isModalVisible ? "opacity-100" : "opacity-0"
                            }`}
                    />

                    {/* Modal Content with Zoom + Fade Animation */}
                    <div
                        className={`relative bg-[#1a1a2e] border border-white/20 rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl transition-all duration-300 ease-out ${isModalVisible
                            ? "opacity-100 scale-100 translate-y-0"
                            : "opacity-0 scale-95 translate-y-4"
                            }`}
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Close Button */}
                        <button
                            onClick={closeModal}
                            className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white/20 hover:rotate-90 transition-all duration-300"
                            aria-label="Close"
                        >
                            <X className="w-5 h-5" />
                        </button>

                        {/* Modal Content - Flex Layout */}
                        <div className="p-6 sm:p-8">
                            <div className="flex flex-col md:flex-row gap-6 md:gap-8">
                                {/* Left - Doctor Image (Smaller, Circular) */}
                                <div className="flex-shrink-0 flex flex-col items-center md:items-start">
                                    <div className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden ring-4 ring-gradient-to-r ring-[#F7931E] shadow-xl">
                                        <Image
                                            src={selectedDoctor.image}
                                            alt={`${selectedDoctor.name} - ${selectedDoctor.specialty}`}
                                            fill
                                            sizes="(max-width: 640px) 128px, 160px"
                                            className="object-cover"
                                            quality={80}
                                        />
                                    </div>
                                    {/* Experience Badge */}
                                    <div className="mt-4 px-4 py-2 bg-gradient-to-r from-[#F7931E] to-[#a02595] rounded-full">
                                        <p className="text-white text-sm font-semibold">{selectedDoctor.experience}</p>
                                    </div>
                                </div>

                                {/* Right - Text Details */}
                                <div className="flex-1 text-center md:text-left">
                                    {/* Name & Title */}
                                    <div className="mb-4">
                                        <p className="text-[#F7931E] text-sm font-medium mb-1">{selectedDoctor.specialty}</p>
                                        <h3 className="text-2xl sm:text-3xl font-bold text-white">
                                            {selectedDoctor.name}
                                        </h3>
                                        <p className="text-white/60 text-lg">{selectedDoctor.title}</p>
                                    </div>

                                    {/* Education & Experience Info */}
                                    <div className="space-y-3 mb-5">
                                        <div className="flex items-start gap-3">
                                            <div className="w-8 h-8 rounded-lg bg-[#FEF3E2] flex items-center justify-center flex-shrink-0">
                                                <GraduationCap className="w-4 h-4 text-[#a02595]" />
                                            </div>
                                            <div>
                                                <p className="text-white/50 text-xs uppercase tracking-wide">Education</p>
                                                <p className="text-white/90 text-sm">{selectedDoctor.education}</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <div className="w-8 h-8 rounded-lg bg-[#FEF3E2] flex items-center justify-center flex-shrink-0">
                                                <Stethoscope className="w-4 h-4 text-[#a02595]" />
                                            </div>
                                            <div>
                                                <p className="text-white/50 text-xs uppercase tracking-wide">Specialty</p>
                                                <p className="text-white/90 text-sm">{selectedDoctor.specialty}</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <div className="w-8 h-8 rounded-lg bg-[#FEF3E2] flex items-center justify-center flex-shrink-0">
                                                <Briefcase className="w-4 h-4 text-[#a02595]" />
                                            </div>
                                            <div>
                                                <p className="text-white/50 text-xs uppercase tracking-wide">Experience</p>
                                                <p className="text-white/90 text-sm">{selectedDoctor.experience}</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Bio */}
                                    <p className="text-white/70 leading-relaxed text-sm mb-5">
                                        {selectedDoctor.bio}
                                    </p>

                                    {/* Credentials */}
                                    <div className="flex flex-wrap gap-2 mb-6 justify-center md:justify-start">
                                        {selectedDoctor.credentials.map((credential, index) => (
                                            <span
                                                key={index}
                                                className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/5 border border-white/10 rounded-full text-xs text-white/80"
                                            >
                                                <CircleCheck className="w-3 h-3 text-[#F7931E]" />
                                                {credential}
                                            </span>
                                        ))}
                                    </div>

                                    {/* CTA Button */}
                                    <a
                                        href="#contact"
                                        onClick={closeModal}
                                        className="inline-flex items-center gap-2 bg-gradient-to-r from-[#F7931E] to-[#a02595] text-white px-6 py-3 rounded-full font-semibold hover:shadow-xl hover:shadow-[#a02595]/30 hover:-translate-y-0.5 transition-all duration-300"
                                    >
                                        <Calendar className="w-5 h-5" />
                                        Book with {selectedDoctor.name.split(" ")[1]}
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}


        </section>
    );
}
