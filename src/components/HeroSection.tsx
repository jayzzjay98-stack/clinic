import Image from "next/image";
import {
    Calendar,
    ShieldCheck,
    Phone,
    Star,
} from "lucide-react";

export default function HeroSection() {
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
                                        alt="Happy dental patient smiling after treatment"
                                        width={48}
                                        height={48}
                                        className="object-cover w-full h-full"
                                    />
                                </div>
                                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden border-2 border-white shadow-lg">
                                    <Image
                                        src="/dental-treatment.png"
                                        alt="Patient receiving dental treatment"
                                        width={48}
                                        height={48}
                                        className="object-cover w-full h-full"
                                    />
                                </div>
                                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden border-2 border-white shadow-lg">
                                    <Image
                                        src="/teeth-whitening.png"
                                        alt="Professional teeth whitening result"
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
                                        alt="Modern Laone Dental Clinic interior with state-of-the-art equipment"
                                        fill
                                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 50vw"
                                        className="object-cover"
                                        priority
                                        fetchPriority="high"
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
