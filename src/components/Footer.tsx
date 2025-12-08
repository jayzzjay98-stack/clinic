import Image from "next/image";
import { Phone, Clock, MapPin, Mail } from "lucide-react";

export default function Footer() {
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
                                    alt="Laone Dental Clinic Logo - Expert Dental Care in Vientiane"
                                    width={200}
                                    height={100}
                                    className="h-16 w-auto object-contain"
                                    loading="lazy"
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
                                        alt="Laone Dental Clinic location in Vientiane, Laos"
                                        fill
                                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                                        className="object-cover opacity-70"
                                        loading="lazy"
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
