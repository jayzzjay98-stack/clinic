import Image from "next/image";
import { ChevronRight } from "lucide-react";

export default function ServicesSection() {
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
                                        alt={`${service.title} - ${service.description}`}
                                        fill
                                        sizes="(max-width: 640px) 85vw, (max-width: 1024px) 320px, 300px"
                                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                                        loading="lazy"
                                        quality={80}
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
            </div>
        </section>
    );
}
