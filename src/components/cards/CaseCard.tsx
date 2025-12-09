import Image from "next/image";
import { CaseStudy } from "@/types";
import { useTranslations } from 'next-intl';

interface CaseCardProps {
    data: CaseStudy;
    priority?: boolean;
}

export default function CaseCard({ data, priority = false }: CaseCardProps) {
    const t = useTranslations('cases');

    return (
        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl overflow-hidden hover:border-[#a02595]/50 transition-all duration-300 group h-full">
            {/* Before/After Images Side by Side */}
            <div className="grid grid-cols-2 gap-0.5 bg-black/20">
                {/* Before Image */}
                <div className="relative aspect-square overflow-hidden">
                    <Image
                        src={data.beforeImage}
                        alt={`Before ${t(`items.${data.titleKey}.title`)}`}
                        fill
                        sizes="(max-width: 768px) 140px, (max-width: 1024px) 25vw, 20vw"
                        className="object-cover"
                        quality={80}
                        priority={priority}
                    />
                </div>

                {/* After Image */}
                <div className="relative aspect-square overflow-hidden">
                    <Image
                        src={data.afterImage}
                        alt={`After ${t(`items.${data.titleKey}.title`)}`}
                        fill
                        sizes="(max-width: 768px) 140px, (max-width: 1024px) 25vw, 20vw"
                        className="object-cover"
                        quality={80}
                        priority={priority}
                    />
                </div>
            </div>

            {/* Content */}
            <div className="p-5 lg:p-6">
                <span className="inline-block px-3 py-1.5 bg-white/5 border border-white/10 rounded-full text-xs text-white/70 mb-3">
                    {t(`categories.${data.categoryKey}`)}
                </span>
                <h3 className="text-lg lg:text-xl font-bold text-white mb-2 group-hover:text-[#F7931E] transition-colors">
                    {t(`items.${data.titleKey}.title`)}
                </h3>
                <p className="text-white/70 text-sm lg:text-base leading-relaxed line-clamp-2 lg:line-clamp-none">
                    {t(`items.${data.titleKey}.description`)}
                </p>
            </div>
        </div>
    );
}
