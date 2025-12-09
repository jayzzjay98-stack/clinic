import Image from "next/image";
import { Doctor } from "@/types";

interface DoctorCardProps {
    doctor: Doctor;
    onClick: (doctor: Doctor) => void;
    variant?: "mobile" | "desktop";
}

export default function DoctorCard({ doctor, onClick, variant = "desktop" }: DoctorCardProps) {
    if (variant === "mobile") {
        return (
            <button
                onClick={() => onClick(doctor)}
                className="group flex-shrink-0 w-[140px] flex flex-col items-center gap-3 p-3 rounded-2xl hover:bg-white/5 transition-all duration-300"
            >
                {/* Avatar */}
                <div className="relative w-24 h-24 rounded-full overflow-hidden ring-4 ring-white/20 group-hover:ring-[#F7931E] transition-all duration-300 shadow-xl">
                    <Image
                        src={doctor.image}
                        alt={`${doctor.name} - ${doctor.specialty}`}
                        fill
                        sizes="96px"
                        className="object-cover"
                        loading="lazy"
                    />
                </div>
                {/* Name */}
                <div className="text-center">
                    <p className="text-white font-semibold text-sm">
                        {doctor.name.replace("Dr. ", "")}
                    </p>
                    <p className="text-white/60 text-xs mt-1">
                        {doctor.specialty}
                    </p>
                </div>
            </button>
        );
    }

    // Desktop Variant
    return (
        <button
            onClick={() => onClick(doctor)}
            className="group flex flex-col items-center gap-4 p-4 rounded-2xl hover:bg-white/5 transition-all duration-300 w-full"
        >
            {/* Avatar */}
            <div className="relative w-28 h-28 lg:w-32 lg:h-32 rounded-full overflow-hidden ring-4 ring-white/20 group-hover:ring-[#F7931E] transition-all duration-300 shadow-xl group-hover:shadow-[#F7931E]/20">
                <Image
                    src={doctor.image}
                    alt={`${doctor.name} - ${doctor.specialty} at Laone Dental Clinic`}
                    fill
                    sizes="(max-width: 1024px) 112px, 128px"
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    quality={80}
                    loading="lazy"
                />
            </div>
            {/* Name */}
            <div className="text-center">
                <p className="text-white font-semibold text-base group-hover:text-[#F7931E] transition-colors duration-300">
                    {doctor.name.replace("Dr. ", "")}
                </p>
                <p className="text-white/60 text-sm mt-1">
                    {doctor.specialty}
                </p>
            </div>
        </button>
    );
}
