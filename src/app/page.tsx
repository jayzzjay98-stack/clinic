"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Calendar,
  ShieldCheck,
  Phone,
  Menu,
  X,
  Cpu,
  BadgeCheck,
  MapPin,
  Clock,
  Mail,
  Star,
  ChevronRight,
  Stethoscope,
  CircleCheck,
} from "lucide-react";

/* ============================================
   LAONE DENTAL CLINIC - LANDING PAGE
   Laone Dental Clinic Website - English Version
   Theme: Clean Medical Minimalism
   ============================================ */

/* ============================================
   SECTION A: STICKY NAVBAR
   ============================================ */
function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Services", href: "#services" },
    { name: "Why Us", href: "#why-us" },
    { name: "Doctor", href: "#doctor" },
    { name: "Reviews", href: "#reviews" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      <nav
        className={`fixed top-4 left-0 right-0 mx-auto z-50 w-[95%] max-w-6xl backdrop-blur-xl border border-white/10 shadow-lg ${isMobileMenuOpen
          ? "hidden"
          : "bg-[#1a1a2e]/50 rounded-full"
          }`}
      >
        <div className="px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo - Fixed dimensions to prevent layout shift */}
            <a href="#" className="flex items-center">
              <div className="w-[160px] h-16 lg:w-[200px] lg:h-20 relative flex-shrink-0">
                <Image
                  src="/laone-logo-transparent.png"
                  alt="Laone Dental"
                  fill
                  sizes="200px"
                  className="object-contain object-left"
                  priority
                />
              </div>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-white/80 hover:text-white font-medium transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* CTA Button */}
            <div className="flex items-center gap-4">
              <a
                href="tel:+66123456789"
                className="hidden md:flex items-center gap-2 text-white font-semibold"
              >
                <Phone className="w-4 h-4" />
                02-123-4567
              </a>
              <a
                href="#contact"
                className="hidden sm:flex items-center gap-2 bg-gradient-to-r from-[#F7931E] to-[#a02595] text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg hover:shadow-[#a02595]/30 transition-all transform hover:-translate-y-0.5"
              >
                <Calendar className="w-4 h-4" />
                Book Now
              </a>

              {/* Mobile Menu Button - Only show when menu is closed */}
              {!isMobileMenuOpen && (
                <button
                  onClick={() => setIsMobileMenuOpen(true)}
                  className="lg:hidden p-2 text-white hover:text-white/80 transition-colors"
                  aria-label="Open menu"
                >
                  <Menu className="w-6 h-6" />
                </button>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation Menu - Compact Card */}
      {isMobileMenuOpen && (
        <div className="fixed top-4 left-4 right-4 z-[60] bg-[#1a1a2e]/98 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/10 animate-in slide-in-from-top duration-200 overflow-hidden">
          {/* Header */}
          <div className="flex items-center justify-between px-5 py-4 border-b border-white/10">
            <span className="text-white font-semibold text-base">Menu</span>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-1.5 text-white/70 hover:text-white transition-colors"
              aria-label="Close menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Links */}
          <div className="py-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-5 py-3 text-white/80 hover:text-white hover:bg-white/5 font-medium transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Bottom Button */}
          <div className="px-5 pb-5 pt-2">
            <a
              href="#contact"
              className="flex items-center justify-center gap-2 bg-gradient-to-r from-[#F7931E] to-[#a02595] text-white px-5 py-3 rounded-full font-semibold text-sm w-full"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <Calendar className="w-4 h-4" />
              Book Now
            </a>
          </div>
        </div>
      )}
    </>
  );
}

/* ============================================
   SECTION B: HERO SECTION
   ============================================ */
function HeroSection() {
  return (
    <section className="min-h-screen pt-24 lg:pt-20 relative overflow-hidden">
      {/* Decorative Background Orbs for Dimension */}
      <div className="absolute top-20 right-10 w-72 md:w-96 h-72 md:h-96 bg-gradient-to-br from-orange-500/20 to-pink-500/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-64 md:w-80 h-64 md:h-80 bg-gradient-to-tr from-[#a02595]/30 to-[#c94eb8]/20 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-[#a02595]/10 to-orange-400/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-10 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-6 lg:space-y-8 relative z-10 text-center lg:text-left order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 bg-[#FEF3E2] text-[#a02595] px-4 py-2 rounded-full text-sm font-medium">
              <ShieldCheck className="w-4 h-4" />
              Trusted by over 10,000+ patients
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white leading-tight">
              <span className="block">Every Smile</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#F7931E] to-[#FBB03B]">
                Shines Bright
              </span>
              <span className="block">Starts Here</span>
            </h1>

            <p className="text-base sm:text-lg lg:text-xl text-white/80 max-w-lg mx-auto lg:mx-0 leading-relaxed">
              Comprehensive dental care with modern technology
              <br />
              by our expert dental team
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#F7931E] to-[#a02595] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg hover:shadow-xl hover:shadow-[#a02595]/30 transition-all transform hover:-translate-y-1"
              >
                <Calendar className="w-5 h-5" />
                Book Free
              </a>
              <a
                href="tel:+66123456789"
                className="inline-flex items-center justify-center gap-2 border-2 border-white/50 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg hover:bg-white/10 transition-all"
              >
                <Phone className="w-5 h-5" />
                Call Us
              </a>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center gap-4 sm:gap-6 pt-2 sm:pt-4 justify-center lg:justify-start">
              <div className="flex -space-x-2 sm:-space-x-3">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden border-2 border-white shadow-lg">
                  <Image
                    src="/happy-patient.png"
                    alt="Patient"
                    width={48}
                    height={48}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden border-2 border-white shadow-lg">
                  <Image
                    src="/dental-treatment.png"
                    alt="Patient"
                    width={48}
                    height={48}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden border-2 border-white shadow-lg">
                  <Image
                    src="/teeth-whitening.png"
                    alt="Patient"
                    width={48}
                    height={48}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
              <div>
                <div className="flex items-center gap-1 text-amber-400">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="w-3 h-3 sm:w-4 sm:h-4 fill-current" />
                  ))}
                </div>
                <p className="text-white/80 text-xs sm:text-sm">500+ Reviews 4.9 Rating</p>
              </div>
            </div>
          </div>

          {/* Right Column - Clinic Image */}
          <div className="relative lg:-translate-x-32 order-1 lg:order-2">
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-[#F7931E] to-[#a02595] p-1 sm:p-1.5">
              <div className="rounded-2xl sm:rounded-3xl overflow-hidden">
                <div className="aspect-[4/3] sm:aspect-[16/10] lg:aspect-[16/12] relative">
                  <Image
                    src="/clinic-interior.jpg"
                    alt="Laone Dental Clinic Interior"
                    fill
                    sizes="(max-width: 768px) 100vw, 60vw"
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================
   SECTION C: DENTAL SERVICES
   ============================================ */
function ServicesSection() {
  const services = [
    {
      image: "/implant-service.jpg",
      title: "Dental Implants",
      titleEn: "Permanent Solution",
      description: "Replace missing teeth with titanium implants. Strong and durable like natural teeth.",
      price: "From $1,200",
    },
    {
      image: "/teeth-whitening.png",
      title: "Teeth Whitening",
      titleEn: "Bright Smile",
      description: "Whiten teeth up to 8 shades with safe LED technology. No sensitivity.",
      price: "From $120",
    },
    {
      image: "/dental-braces.png",
      title: "Orthodontics",
      titleEn: "Perfect Alignment",
      description: "Clear aligners Invisalign and metal braces. Fix misaligned teeth.",
      price: "From $1,500",
    },
    {
      image: "/dental-checkup.png",
      title: "Dental Checkup",
      titleEn: "Preventive Care",
      description: "Oral health examination, scaling and cleaning to prevent dental problems.",
      price: "From $20",
    },
  ];

  return (
    <section id="services" className="py-20 lg:py-28 relative">
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-white font-semibold text-sm uppercase tracking-wider mb-4">
            Our Services
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Comprehensive{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F7931E] to-[#a02595]">
              Dental Care
            </span>
          </h2>
          <p className="text-lg text-white/80">
            We offer complete dental services from checkups
            to specialized treatments by our expert dental team.
          </p>
        </div>

        {/* Services Carousel - Horizontal Scroll */}
        <div className="relative">
          {/* Scroll Container */}
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
                    alt={service.title}
                    fill
                    sizes="320px"
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-1">
                    {service.title}
                  </h3>
                  <p className="text-sm text-white font-medium mb-3">
                    {service.titleEn}
                  </p>
                  <p className="text-white/80 text-sm leading-relaxed mb-4">
                    {service.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-white font-bold">{service.price}</span>
                    <a
                      href="#contact"
                      className="text-white font-semibold flex items-center gap-1 hover:gap-2 transition-all"
                    >
                      Book Now
                      <ChevronRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Scroll Hint */}
          <div className="flex items-center justify-center gap-2 mt-4 text-white/60 text-sm">
            <ChevronRight className="w-4 h-4 animate-pulse" />
            <span>Swipe to see more services</span>
            <ChevronRight className="w-4 h-4 animate-pulse" />
          </div>
        </div>

        {/* More Services Banner */}
        <div className="mt-12 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#F7931E] to-[#a02595] flex items-center justify-center">
              <Stethoscope className="w-8 h-8 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">More Services</h3>
              <p className="text-white/80">Fillings, extractions, root canals, crowns and more</p>
            </div>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-[#F7931E] to-[#a02595] text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all whitespace-nowrap"
          >
            <Phone className="w-5 h-5" />
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
}

/* ============================================
   SECTION D: WHY CHOOSE US
   ============================================ */
function WhyChooseUsSection() {
  const features = [
    {
      icon: Cpu,
      title: "Modern Technology",
      description: "Latest dental equipment including 3D X-ray, laser, and digital systems for accurate and fast treatment.",
    },
    {
      icon: BadgeCheck,
      title: "Expert Dentists",
      description: "Dental team trained at leading institutions with professional licenses and over 15 years of experience.",
    },
    {
      icon: ShieldCheck,
      title: "Safe & Sterile",
      description: "International standard sterilization. All instruments sterilized. 100% clean and safe.",
    },
  ];

  return (
    <section id="why-us" className="py-20 lg:py-28 relative">
      <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 via-transparent to-[#c94eb8]/10" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Bento Grid Style */}
          <div className="grid grid-cols-3 grid-rows-3 gap-3 h-[500px] lg:h-[600px]">
            {/* Large image - top left, spans 2 cols */}
            <div className="col-span-2 row-span-2 rounded-2xl overflow-hidden shadow-lg relative">
              <Image
                src="/dental-technology.jpg"
                alt="Dental Technology"
                fill
                sizes="(max-width: 1024px) 66vw, 33vw"
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            {/* Small image - top right */}
            <div className="col-span-1 row-span-1 rounded-2xl overflow-hidden shadow-lg relative">
              <Image
                src="/patient-review-1.jpg"
                alt="Happy Patient"
                fill
                sizes="(max-width: 1024px) 33vw, 17vw"
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            {/* Medium image - middle right */}
            <div className="col-span-1 row-span-2 rounded-2xl overflow-hidden shadow-lg relative">
              <Image
                src="/patient-review-2.jpg"
                alt="Patient Review"
                fill
                sizes="(max-width: 1024px) 33vw, 17vw"
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            {/* Bottom left image */}
            <div className="col-span-1 row-span-1 rounded-2xl overflow-hidden shadow-lg relative">
              <Image
                src="/teeth-whitening.png"
                alt="Teeth Whitening"
                fill
                sizes="(max-width: 1024px) 33vw, 17vw"
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            {/* Bottom center image */}
            <div className="col-span-1 row-span-1 rounded-2xl overflow-hidden shadow-lg relative">
              <Image
                src="/clinic-interior.jpg"
                alt="Clinic Interior"
                fill
                sizes="(max-width: 1024px) 33vw, 17vw"
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="space-y-8 text-center lg:text-left">
            <div>
              <span className="inline-block text-white font-semibold text-sm uppercase tracking-wider mb-4">
                Why Choose Us
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-white mb-6">
                We Care About{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F7931E] to-[#a02595]">
                  Every Detail
                </span>
              </h2>
              <p className="text-base lg:text-lg text-white/80 max-w-lg mx-auto lg:mx-0">
                At Laone Dental, we believe everyone deserves the best dental care
                with excellent service at affordable prices.
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
                      {feature.title}
                    </h3>
                    <p className="text-white/80 text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="mt-16 bg-gradient-to-r from-[#F7931E] to-[#a02595] rounded-2xl p-6 sm:p-8 lg:p-12 shadow-xl">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8 text-center text-white">
            <div>
              <p className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-1 sm:mb-2">15+</p>
              <p className="text-white/80 text-sm sm:text-base">Years Exp.</p>
            </div>
            <div>
              <p className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-1 sm:mb-2">10K+</p>
              <p className="text-white/80 text-sm sm:text-base">Patients</p>
            </div>
            <div>
              <p className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-1 sm:mb-2">5</p>
              <p className="text-white/80 text-sm sm:text-base">Dentists</p>
            </div>
            <div>
              <p className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-1 sm:mb-2">98%</p>
              <p className="text-white/80 text-sm sm:text-base">Satisfied</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================
   SECTION E: MEET THE DOCTOR
   ============================================ */
function DoctorSection() {
  return (
    <section id="doctor" className="py-20 lg:py-28 relative">
      <div className="absolute inset-0 bg-gradient-to-bl from-[#a02595]/10 to-orange-500/10" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Doctor Photo */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-[#F7931E] to-[#a02595] p-1">
              <div className="bg-white rounded-3xl overflow-hidden">
                <div className="aspect-square relative">
                  <Image
                    src="/doctor-portrait.png"
                    alt="Dr. Somsri Jaidee - Expert Dentist"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>


          </div>

          {/* Right Column - Bio */}
          <div className="space-y-6">


            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
              Dr. Somsri Jaidee{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F7931E] to-[#a02595]">
                DDS, MSc
              </span>
            </h2>

            <p className="text-lg text-white/80 leading-relaxed">
              Dr. Somsri Jaidee is the founder and lead dentist at Laone Dental Clinic.
              With over 15 years of experience in dentistry,
              specializing in implants, cosmetic dentistry, and orthodontics.
            </p>

            <p className="text-lg text-white/80 leading-relaxed">
              Graduated from the Faculty of Dentistry at a leading university
              and further studied implant dentistry in Germany.
              Committed to providing the best care for all patients.
            </p>

            {/* Credentials */}
            <div className="flex flex-col gap-3 sm:gap-4 pt-4 items-center lg:items-start">
              <div className="space-y-3 sm:space-y-4">
                {[
                  "University Graduate",
                  "Implant Specialist",
                  "Dental Member",
                  "Licensed Dentist",
                ].map((credential, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#FEF3E2] flex items-center justify-center flex-shrink-0">
                      <CircleCheck className="w-4 h-4 text-[#a02595]" />
                    </div>
                    <span className="text-white font-medium text-sm">{credential}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 text-center lg:text-left">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-[#F7931E] to-[#a02595] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg hover:shadow-xl hover:shadow-[#a02595]/30 transition-all transform hover:-translate-y-1"
              >
                <Calendar className="w-5 h-5" />
                Book with Dr. Somsri
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================
   SECTION F: REVIEWS/TESTIMONIALS
   ============================================ */
function ReviewsSection() {
  const reviews = [
    {
      name: "Sarah M.",
      service: "Dental Implants",
      rating: 5,
      review: "Very impressed! The doctor was kind and explained everything in detail. No pain at all. Got 2 implants done and they work perfectly, just like real teeth!",
    },
    {
      name: "John D.",
      service: "Teeth Whitening",
      rating: 5,
      review: "My teeth are so much whiter now! No sensitivity at all. Staff service was excellent. Will definitely come back!",
    },
    {
      name: "Lisa K.",
      service: "Orthodontics",
      rating: 5,
      review: "Got clear aligners here. Very convenient, can remove when eating. Doctor follows up on treatment regularly. My teeth are beautifully aligned now!",
    },
  ];

  return (
    <section id="reviews" className="py-20 lg:py-28 relative">
      <div className="absolute inset-0 bg-gradient-to-tr from-[#a02595]/10 via-transparent to-orange-400/10" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-white font-semibold text-sm uppercase tracking-wider mb-4">
            Patient Reviews
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            What Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F7931E] to-[#a02595]">
              Patients Say
            </span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
              <div className="flex items-center gap-1 text-amber-400 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <p className="text-white/80 leading-relaxed mb-6">&ldquo;{review.review}&rdquo;</p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#F7931E] to-[#a02595] flex items-center justify-center text-white font-bold">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <p className="font-bold text-white">{review.name}</p>
                  <p className="text-sm text-white/80">{review.service}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================
   SECTION G: FOOTER
   ============================================ */
function Footer() {
  return (
    <footer id="footer" className="bg-[#1E293B] text-white">
      {/* Contact CTA */}
      <section id="contact" className="py-16 bg-gradient-to-r from-[#F7931E] to-[#a02595]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Ready for Us to Care for Your Smile?
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Book today and get special discount for new patients.
            Free consultation, no charge.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+66123456789"
              className="inline-flex items-center justify-center gap-2 bg-white text-[#a02595] px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl hover:bg-white/90 transition-all"
            >
              <Phone className="w-5 h-5" />
              02-123-4567
            </a>
            <a
              href="https://line.me"
              className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-[#a02595] transition-all"
            >
              <Mail className="w-5 h-5" />
              Line: @laonedental
            </a>
          </div>
        </div>
      </section>

      {/* Footer Content */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Logo & About */}
            <div className="lg:col-span-1">
              <a href="#" className="block mb-6">
                <Image
                  src="/laone-logo-transparent.png"
                  alt="Laone Dental"
                  width={200}
                  height={100}
                  className="h-16 w-auto object-contain"
                />
              </a>
              <p className="text-white/70 leading-relaxed">
                Comprehensive dental clinic with modern technology
                and expert dental team, ready to care for your smile.
              </p>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-bold mb-6">Services</h4>
              <ul className="space-y-3">
                {["Dental Implants", "Teeth Whitening", "Orthodontics", "Dental Checkup", "Fillings", "Extractions"].map((link) => (
                  <li key={link}>
                    <a href="#services" className="text-white/70 hover:text-white transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Working Hours */}
            <div>
              <h4 className="text-lg font-bold mb-6">Working Hours</h4>
              <ul className="space-y-3 text-white/70">
                <li className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-white" />
                  <span>Mon - Fri: 09:00 - 19:00</span>
                </li>
                <li className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-white" />
                  <span>Sat: 09:00 - 17:00</span>
                </li>
                <li className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-white" />
                  <span>Sun: 10:00 - 16:00</span>
                </li>
              </ul>
            </div>

            {/* Location */}
            <div>
              <h4 className="text-lg font-bold mb-6">Location</h4>
              <div className="space-y-4">
                <div className="flex items-start gap-3 text-white/70">
                  <MapPin className="w-5 h-5 text-white mt-1 flex-shrink-0" />
                  <span>
                    123 Health Building, 5th Floor<br />
                    Main Street<br />
                    Vientiane, Laos
                  </span>
                </div>
                <div className="w-full h-32 rounded-xl overflow-hidden relative">
                  <Image
                    src="/dental-treatment.png"
                    alt="Laone Dental Clinic"
                    fill
                    sizes="25vw"
                    className="object-cover opacity-70"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-white/70 text-sm">
              © 2024 Laone Dental Clinic. All Rights Reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-white/70 hover:text-white text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-white/70 hover:text-white text-sm transition-colors">
                Terms of Use
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ============================================
   MAIN PAGE COMPONENT
   ============================================ */
export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <WhyChooseUsSection />
      <DoctorSection />
      <ReviewsSection />
      <Footer />
    </main>
  );
}
