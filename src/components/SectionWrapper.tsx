"use client";

import { motion } from "framer-motion";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

interface SectionWrapperProps {
    children: React.ReactNode;
    id?: string;
    className?: string;
    withGrid?: boolean;
    innerClassName?: string;
    style?: React.CSSProperties;
    overlay?: React.ReactNode;
}

export default function SectionWrapper({
    children,
    id,
    className,
    withGrid = false,
    innerClassName,
    style,
    overlay,
}: SectionWrapperProps) {
    return (
        <section
            id={id}
            className={cn(
                "relative py-32 overflow-hidden border-b border-zinc-800/50",
                withGrid && "industrial-grid",
                className
            )}
            style={style}
        >
            {overlay}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className={cn("max-w-7xl mx-auto px-6", innerClassName)}
            >
                {children}
            </motion.div>
        </section>
    );
}
