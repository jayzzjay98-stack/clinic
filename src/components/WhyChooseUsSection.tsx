import Image from "next/image";
import {
    Cpu,
    BadgeCheck,
    ShieldCheck,
} from "lucide-react";

export default function WhyChooseUsSection() {
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
                                alt="Advanced 3D dental X-ray and digital imaging technology"
                                fill
                                sizes="(max-width: 768px) 66vw, (max-width: 1024px) 40vw, 33vw"
                                className="object-cover hover:scale-105 transition-transform duration-500"
                                loading="lazy"
                                quality={80}
                            />
                        </div>
                        {/* Small image - top right */}
                        <div className="col-span-1 row-span-1 rounded-2xl overflow-hidden shadow-lg relative">
                            <Image
                                src="/patient-review-1.jpg"
                                alt="Satisfied patient giving testimonial at Laone Dental"
                                fill
                                sizes="(max-width: 768px) 33vw, (max-width: 1024px) 20vw, 17vw"
                                className="object-cover hover:scale-105 transition-transform duration-500"
                                loading="lazy"
                                quality={80}
                            />
                        </div>
                        {/* Medium image - middle right */}
                        <div className="col-span-1 row-span-2 rounded-2xl overflow-hidden shadow-lg relative">
                            <Image
                                src="/patient-review-2.jpg"
                                alt="Happy patient sharing dental care experience"
                                fill
                                sizes="(max-width: 768px) 33vw, (max-width: 1024px) 20vw, 17vw"
                                className="object-cover hover:scale-105 transition-transform duration-500"
                                loading="lazy"
                                quality={80}
                            />
                        </div>
                        {/* Bottom left image */}
                        <div className="col-span-1 row-span-1 rounded-2xl overflow-hidden shadow-lg relative">
                            <Image
                                src="/teeth-whitening.png"
                                alt="Professional LED teeth whitening treatment"
                                fill
                                sizes="(max-width: 768px) 33vw, (max-width: 1024px) 20vw, 17vw"
                                className="object-cover hover:scale-105 transition-transform duration-500"
                                loading="lazy"
                                quality={80}
                            />
                        </div>
                        {/* Bottom center image */}
                        <div className="col-span-1 row-span-1 rounded-2xl overflow-hidden shadow-lg relative">
                            <Image
                                src="/clinic-interior.jpg"
                                alt="Clean and modern Laone Dental Clinic waiting area"
                                fill
                                sizes="(max-width: 768px) 33vw, (max-width: 1024px) 20vw, 17vw"
                                className="object-cover hover:scale-105 transition-transform duration-500"
                                loading="lazy"
                                quality={80}
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
            </div>
        </section>
    );
}
