"use client";

import { useState, useEffect, RefObject } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface MobileScrollButtonsProps {
    containerRef: RefObject<HTMLElement>;
    itemWidth?: number; // Approximate width of one item to scroll by
}

export default function MobileScrollButtons({ containerRef, itemWidth = 300 }: MobileScrollButtonsProps) {
    const [showLeft, setShowLeft] = useState(false);
    const [showRight, setShowRight] = useState(true);

    // Update visibility on scroll with throttling
    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        let ticking = false;
        const checkScroll = () => {
            const { scrollLeft, scrollWidth, clientWidth } = container;
            setShowLeft(scrollLeft > 20);
            setShowRight(scrollLeft < scrollWidth - clientWidth - 20);
            ticking = false;
        };

        const throttledCheck = () => {
            if (!ticking) {
                requestAnimationFrame(checkScroll);
                ticking = true;
            }
        };

        // Initial check
        checkScroll();

        // Listen with passive for better performance
        container.addEventListener("scroll", throttledCheck, { passive: true });
        window.addEventListener("resize", throttledCheck, { passive: true });

        return () => {
            container.removeEventListener("scroll", throttledCheck);
            window.removeEventListener("resize", throttledCheck);
        };
    }, [containerRef]);

    const scroll = (direction: "left" | "right") => {
        const container = containerRef.current;
        if (!container) return;

        const scrollAmount = direction === "left" ? -itemWidth : itemWidth;
        container.scrollBy({ left: scrollAmount, behavior: "smooth" });
    };

    // Only render if needed (can be controlled by parent or CSS media queries)
    // We'll use CSS to hide on desktop (md:hidden) in the parent usage or here
    // But keeping it flexible, we'll just return the buttons

    return (
        <div className="md:hidden pointer-events-none absolute inset-y-0 left-0 right-0 z-20 flex items-center justify-between px-2">
            {/* Left Button */}
            <div className={`transition-opacity duration-300 ${showLeft ? "opacity-100" : "opacity-0"}`}>
                <button
                    onClick={() => scroll("left")}
                    className="pointer-events-auto w-8 h-8 rounded-full bg-white/20 backdrop-blur-md border border-white/20 flex items-center justify-center text-white shadow-lg hover:bg-white/30 active:scale-95 transition-all"
                    aria-label="Scroll left"
                    disabled={!showLeft}
                >
                    <ChevronLeft className="w-5 h-5" />
                </button>
            </div>

            {/* Right Button */}
            <div className={`transition-opacity duration-300 ${showRight ? "opacity-100" : "opacity-0"}`}>
                <button
                    onClick={() => scroll("right")}
                    className="pointer-events-auto w-8 h-8 rounded-full bg-white/20 backdrop-blur-md border border-white/20 flex items-center justify-center text-white shadow-lg hover:bg-white/30 active:scale-95 transition-all"
                    aria-label="Scroll right"
                    disabled={!showRight}
                >
                    <ChevronRight className="w-5 h-5" />
                </button>
            </div>
        </div>
    );
}
