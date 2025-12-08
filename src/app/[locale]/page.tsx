/* ============================================
   LAONE DENTAL CLINIC - LANDING PAGE
   SEO-Optimized Server Component
   ============================================ */

import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";
import DoctorSection from "@/components/DoctorSection";
import CaseGallerySection from "@/components/CaseGallerySection";
import ReviewsSection from "@/components/ReviewsSection";
import Footer from "@/components/Footer";

export default function Home() {
    return (
        <main className="min-h-screen overflow-x-hidden relative">
            <Navbar />
            <HeroSection />
            <ServicesSection />
            <WhyChooseUsSection />
            <DoctorSection />
            <CaseGallerySection />
            <ReviewsSection />
            <Footer />
        </main>
    );
}
