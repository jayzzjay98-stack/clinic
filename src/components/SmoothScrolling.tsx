"use client";

import { ReactLenis } from "lenis/react";

interface SmoothScrollingProps {
    children: React.ReactNode;
}

export default function SmoothScrolling({ children }: SmoothScrollingProps) {
    return (
        <ReactLenis
            root
            options={{
                lerp: 0.1, // Linear interpolation - lower = smoother (0.05-0.2 recommended)
                duration: 1.5, // Animation duration multiplier
                smoothWheel: true, // Enable smooth scrolling for mouse wheel
                wheelMultiplier: 1, // Scroll speed multiplier
                touchMultiplier: 2, // Touch scroll speed multiplier
                infinite: false, // Disable infinite scroll
            }}
        >
            {children}
        </ReactLenis>
    );
}
