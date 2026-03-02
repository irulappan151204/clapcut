import { cn } from "@/lib/utils";
import React from "react";

interface GlassCardProps {
    children: React.ReactNode;
    className?: string;
    hoverEffect?: boolean;
}

export default function GlassCard({
    children,
    className,
    hoverEffect = true,
}: GlassCardProps) {
    return (
        <div
            className={cn(
                "glass rounded-2xl p-6 transition-all duration-500",
                hoverEffect && "hover:bg-ccu-glassHover hover:-translate-y-2 hover:shadow-2xl hover:shadow-ccu-accent/10 hover:border-white/20",
                className
            )}
        >
            {children}
        </div>
    );
}
