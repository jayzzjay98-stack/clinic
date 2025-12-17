"use client";

import Image from "next/image";
import { Phone, Clock, MapPin } from "lucide-react";
import { useTranslations } from 'next-intl';
import { useFontConfig } from "@/hooks/useFontConfig";

export default function Footer() {
    const t = useTranslations('contact');
    const tf = useTranslations('footer');
    const ts = useTranslations('services');
    const fonts = useFontConfig();

    return (
        <footer id="footer" className="bg-transparent text-white">
            {/* Contact CTA */}
            <section id="contact" className="py-10 md:py-16 bg-white/5 backdrop-blur-sm border-y border-white/10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className={`${fonts.footer.title} sm:text-4xl font-bold mb-4`}>
                        {t('title')}
                    </h2>
                    <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
                        {t('subtitle')}
                    </p>
                    {/* Contact Buttons - Grid for equal sizes */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-3xl mx-auto">
                        <a
                            href="tel:+85620581555555"
                            className="flex items-center justify-center gap-2 bg-white text-[#a02595] px-4 py-3 rounded-xl font-semibold hover:shadow-xl hover:bg-white/90 transition-all"
                        >
                            <Phone className="w-5 h-5" />
                            <span>{t('call')}</span>
                        </a>
                        <a
                            href="https://wa.me/85620581555555"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-2 bg-[#25D366] text-white px-4 py-3 rounded-xl font-semibold hover:shadow-xl hover:bg-[#22c55e] transition-all"
                        >
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
                            <span>{t('whatsapp')}</span>
                        </a>
                        <a
                            href="https://facebook.com/laonedental"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-2 bg-[#1877F2] text-white px-4 py-3 rounded-xl font-semibold hover:shadow-xl hover:bg-[#166fe5] transition-all"
                        >
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
                            <span>{t('facebook')}</span>
                        </a>
                        <a
                            href="https://tiktok.com/@laonedental"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-2 bg-black text-white px-4 py-3 rounded-xl font-semibold hover:shadow-xl hover:bg-gray-800 transition-all"
                        >
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" /></svg>
                            <span>{t('tiktok')}</span>
                        </a>
                    </div>
                </div>
            </section>

            {/* Footer Content */}
            <div className="pt-0 pb-4 md:py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
                        {/* Logo & About */}
                        <div className="lg:col-span-2 text-center md:text-left">
                            <a href="#" className="block mb-1">
                                <Image
                                    src="/laone-dental-logo.png"
                                    alt="Laone Dental Clinic Logo - Expert Dental Care in Vientiane"
                                    width={280}
                                    height={140}
                                    className="h-28 w-auto object-contain mx-auto md:ml-12 -mt-4 md:mt-0"
                                    loading="lazy"
                                />
                            </a>
                            <p className="text-white/70 leading-relaxed text-lg whitespace-pre-line text-center md:text-left">
                                {tf('about')}
                            </p>
                        </div>

                        {/* Services & Working Hours */}
                        <div>
                            <div className="flex items-start justify-between gap-8">
                                {/* Services List */}
                                <div>
                                    <h4 className="text-2xl font-bold mb-6">{tf('services')}</h4>
                                    <ul className="space-y-3 text-lg">
                                        <li><a href="#services" className="text-white/70 hover:text-white transition-colors">{ts('implants.title')}</a></li>
                                        <li><a href="#services" className="text-white/70 hover:text-white transition-colors">{ts('whitening.title')}</a></li>
                                        <li><a href="#services" className="text-white/70 hover:text-white transition-colors">{ts('orthodontics.title')}</a></li>
                                        <li><a href="#services" className="text-white/70 hover:text-white transition-colors">{ts('checkup.title')}</a></li>
                                        <li><a href="#services" className="text-white/70 hover:text-white transition-colors">{ts('extraction.title')}</a></li>
                                    </ul>
                                </div>

                                {/* Working Hours */}
                                <div>
                                    <h4 className="text-2xl font-bold mb-6">{tf('hours')}</h4>
                                    <ul className="space-y-2 text-white/70 text-lg">
                                        <li className="flex items-center gap-2">
                                            <Clock className="w-5 h-5 md:w-4 md:h-4 text-white flex-shrink-0" />
                                            <span>08:30 - 12:30</span>
                                        </li>
                                        <li className="flex items-center gap-2 ml-7 md:ml-6">
                                            <span>14:00 - 19:00</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Location */}
                        <div className="flex justify-center lg:justify-end">
                            <div className="lg:max-w-xs">
                                <h4 className="text-2xl font-bold mb-6 flex items-center justify-center lg:justify-end gap-2">
                                    {tf('location')}
                                    <MapPin className="w-7 h-7 text-white flex-shrink-0" />
                                </h4>
                                <div className="space-y-4">
                                    <div className="text-white/70 text-center lg:text-right text-lg">
                                        <span>
                                            ບ້ານພະຂາວ, ເມືອງໄຊທານີ<br />
                                            ນະຄອນຫຼວງວຽງຈັນ<br />
                                            Vientiane, Laos
                                        </span>
                                    </div>
                                    <div className="w-full h-32 rounded-xl overflow-hidden relative">
                                        <Image
                                            src="/clinic-location-map.png"
                                            alt="Laone Dental Clinic location map in Vientiane, Laos"
                                            fill
                                            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                                            className="object-cover"
                                            loading="lazy"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Bottom Bar */}
                    <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
                        <p className="text-white/70 text-sm">
                            {tf('copyright')}
                        </p>
                        <div className="flex gap-6">
                            <a href="#" className="text-white/70 hover:text-white text-sm transition-colors">
                                {tf('privacy')}
                            </a>
                            <a href="#" className="text-white/70 hover:text-white text-sm transition-colors">
                                {tf('terms')}
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
