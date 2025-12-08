"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, FreeMode } from "swiper/modules";
import { X, ChevronLeft, ChevronRight, Calendar, GraduationCap, Briefcase, Stethoscope, CircleCheck } from "lucide-react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/free-mode";

// Doctor data - 10 doctors with expanded information
const doctors = [
    {
        id: 1,
        name: "Dr. Somsri Jaidee",
        title: "DDS, MSc",
        specialty: "Implants & Cosmetic Dentistry",
        education: "DDS, Chulalongkorn University • MSc Implantology, Heidelberg University",
        experience: "15+ Years Experience",
        image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=600&h=600&fit=crop&crop=face",
        bio: "Founder and lead dentist at Laone Dental Clinic. Specializes in dental implants, cosmetic makeovers, and full-mouth rehabilitation. Trained in Germany for advanced implantology techniques.",
        credentials: ["Implant Specialist", "Cosmetic Expert", "Dental Member", "Licensed Dentist"],
    },
    {
        id: 2,
        name: "Dr. Kanya Siriporn",
        title: "DDS, PhD",
        specialty: "Orthodontics & Aligners",
        education: "DDS, Mahidol University • PhD Orthodontics, Seoul National University",
        experience: "12+ Years Experience",
        image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=600&h=600&fit=crop&crop=face",
        bio: "Expert orthodontist with extensive experience in braces and clear aligners. Certified Invisalign Diamond provider. Passionate about creating perfect smiles for patients of all ages.",
        credentials: ["Orthodontic Specialist", "Invisalign Diamond", "PhD Research", "Licensed Dentist"],
    },
    {
        id: 3,
        name: "Dr. Panya Rattanaporn",
        title: "DDS, MSc",
        specialty: "Oral Surgery",
        education: "DDS, Khon Kaen University • MSc Oral Surgery, Tokyo Medical University",
        experience: "10+ Years Experience",
        image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=600&h=600&fit=crop&crop=face",
        bio: "Skilled oral surgeon specializing in wisdom tooth extractions, dental implants, and complex surgical procedures. Known for gentle techniques that minimize discomfort and recovery time.",
        credentials: ["Oral Surgery Specialist", "Implant Surgery", "Hospital Trained", "Licensed Dentist"],
    },
    {
        id: 4,
        name: "Dr. Maliwan Thongchai",
        title: "DDS",
        specialty: "Pediatric Dentistry",
        education: "DDS, Prince of Songkla University • Cert. Pediatric Dentistry, UCLA",
        experience: "8+ Years Experience",
        image: "https://images.unsplash.com/photo-1651008376811-b90baee60c1f?w=600&h=600&fit=crop&crop=face",
        bio: "Dedicated pediatric dentist who creates a fun, stress-free environment for children. Specializes in preventive care, sealants, and early orthodontic intervention.",
        credentials: ["Pediatric Specialist", "Child Psychology", "Sedation Certified", "Licensed Dentist"],
    },
    {
        id: 5,
        name: "Dr. Niran Suksawat",
        title: "DDS, MSc",
        specialty: "Periodontics & Gum Care",
        education: "DDS, Chiang Mai University • MSc Periodontics, University of Michigan",
        experience: "11+ Years Experience",
        image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=600&h=600&fit=crop&crop=face",
        bio: "Periodontal specialist focused on gum health and treating gum disease. Uses laser technology for minimally invasive treatments. Expert in gum grafting and bone regeneration.",
        credentials: ["Periodontal Specialist", "Laser Dentistry", "Gum Surgery Expert", "Licensed Dentist"],
    },
    {
        id: 6,
        name: "Dr. Lalita Wongkham",
        title: "DDS, PhD",
        specialty: "Endodontics",
        education: "DDS, Thammasat University • PhD Endodontics, King's College London",
        experience: "9+ Years Experience",
        image: "https://images.unsplash.com/photo-1614608682850-e0d6ed316d47?w=600&h=600&fit=crop&crop=face",
        bio: "Endodontic specialist with expertise in root canal therapy and saving damaged teeth. Uses microscopic technology for precision treatments and painless procedures.",
        credentials: ["Endodontic Specialist", "Microscopic Dentistry", "PhD Research", "Licensed Dentist"],
    },
    {
        id: 7,
        name: "Dr. Chai Prasert",
        title: "DDS, MSc",
        specialty: "Prosthodontics",
        education: "DDS, Naresuan University • MSc Prosthodontics, University of Sydney",
        experience: "13+ Years Experience",
        image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=600&h=600&fit=crop&crop=face",
        bio: "Prosthodontic specialist creating beautiful crowns, bridges, and dentures. Expert in full-mouth reconstruction using digital CAD/CAM technology for precise restorations.",
        credentials: ["Prosthodontic Specialist", "CAD/CAM Expert", "Smile Design", "Licensed Dentist"],
    },
    {
        id: 8,
        name: "Dr. Supaporn Lertpanya",
        title: "DDS",
        specialty: "Teeth Whitening & Veneers",
        education: "DDS, Srinakharinwirot University • Cert. Cosmetic Dentistry, NYU",
        experience: "7+ Years Experience",
        image: "https://images.unsplash.com/photo-1559839914-17aae19cec71?w=600&h=600&fit=crop&crop=face",
        bio: "Cosmetic dentistry expert specializing in teeth whitening and smile makeovers. Uses LED and laser whitening technology to achieve bright, confident smiles safely.",
        credentials: ["Cosmetic Specialist", "Whitening Expert", "Veneer Artist", "Licensed Dentist"],
    },
    {
        id: 9,
        name: "Dr. Virat Kasemsan",
        title: "DDS, MSc",
        specialty: "TMJ & Sleep Dentistry",
        education: "DDS, Silpakorn University • MSc Sleep Medicine, Stanford University",
        experience: "14+ Years Experience",
        image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=600&h=600&fit=crop&crop=face",
        bio: "Specialist in TMJ disorders and sleep apnea treatment. Creates custom oral appliances for snoring and sleep disorders. Expert in treating jaw pain and bite problems.",
        credentials: ["TMJ Specialist", "Sleep Medicine", "Bite Analysis", "Licensed Dentist"],
    },
    {
        id: 10,
        name: "Dr. Pimchanok Udom",
        title: "DDS",
        specialty: "General & Family Dentistry",
        education: "DDS, Burapha University • Cert. Family Dentistry, ADA",
        experience: "6+ Years Experience",
        image: "https://images.unsplash.com/photo-1527613426441-4da17471b66d?w=600&h=600&fit=crop&crop=face",
        bio: "General dentist providing comprehensive care for the whole family. Expert in preventive dentistry, fillings, and routine checkups. Known for gentle care and thorough patient education.",
        credentials: ["General Dentistry", "Preventive Care", "Family Dentistry", "Licensed Dentist"],
    },
];

type Doctor = typeof doctors[0];

export default function DoctorSection() {
    const [selectedDoctor, setSelectedDoctor] = useState<Doctor | null>(null);
    const [isModalVisible, setIsModalVisible] = useState(false);

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
        <section id="doctor" className="py-20 lg:py-28 relative">
            <div className="absolute inset-0 bg-gradient-to-bl from-[#a02595]/10 to-orange-500/10" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <span className="inline-block text-white font-semibold text-sm uppercase tracking-wider mb-4">
                        Meet Our Experts
                    </span>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
                        Our{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F7931E] to-[#a02595]">
                            Dental Team
                        </span>
                    </h2>
                    <p className="text-lg text-white/80">
                        Click on any doctor to learn more about their expertise
                    </p>
                </div>

                {/* Swiper Carousel with FreeMode */}
                <div className="relative px-12">
                    {/* Custom Navigation Buttons */}
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

                    <Swiper
                        modules={[Navigation, Pagination, FreeMode]}
                        spaceBetween={24}
                        slidesPerView={2}
                        freeMode={{
                            enabled: true,
                            sticky: false,
                            momentumRatio: 0.5,
                            momentumVelocityRatio: 0.5,
                        }}
                        grabCursor={true}
                        navigation={{
                            prevEl: ".doctor-swiper-prev",
                            nextEl: ".doctor-swiper-next",
                        }}
                        pagination={{
                            clickable: true,
                            dynamicBullets: true,
                        }}
                        breakpoints={{
                            480: { slidesPerView: 2, spaceBetween: 20 },
                            640: { slidesPerView: 3, spaceBetween: 24 },
                            1024: { slidesPerView: 4, spaceBetween: 32 },
                            1280: { slidesPerView: 5, spaceBetween: 32 },
                        }}
                        className="!pb-12"
                    >
                        {doctors.map((doctor) => (
                            <SwiperSlide key={doctor.id}>
                                <button
                                    onClick={() => openModal(doctor)}
                                    className="group flex flex-col items-center gap-4 p-4 rounded-2xl hover:bg-white/5 transition-all duration-300 w-full"
                                >
                                    {/* Avatar */}
                                    <div className="relative w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 rounded-full overflow-hidden ring-4 ring-white/20 group-hover:ring-[#F7931E] transition-all duration-300 shadow-xl group-hover:shadow-[#F7931E]/20">
                                        <Image
                                            src={doctor.image}
                                            alt={doctor.name}
                                            fill
                                            sizes="128px"
                                            className="object-cover group-hover:scale-110 transition-transform duration-500"
                                            unoptimized
                                        />
                                    </div>
                                    {/* Name */}
                                    <div className="text-center">
                                        <p className="text-white font-semibold text-sm sm:text-base group-hover:text-[#F7931E] transition-colors duration-300">
                                            {doctor.name.replace("Dr. ", "")}
                                        </p>
                                        <p className="text-white/60 text-xs sm:text-sm mt-1">
                                            {doctor.specialty}
                                        </p>
                                    </div>
                                </button>
                            </SwiperSlide>
                        ))}
                    </Swiper>
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
                                            alt={selectedDoctor.name}
                                            fill
                                            sizes="160px"
                                            className="object-cover"
                                            unoptimized
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

            {/* Custom Swiper Pagination Styles */}
            <style jsx global>{`
        .swiper-pagination-bullet {
          background: rgba(255, 255, 255, 0.5);
          opacity: 1;
          transition: all 0.3s ease;
        }
        .swiper-pagination-bullet-active {
          background: linear-gradient(to right, #F7931E, #a02595);
          transform: scale(1.2);
        }
      `}</style>
        </section>
    );
}
