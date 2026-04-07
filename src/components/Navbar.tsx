"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Phone, ArrowRight, Package } from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={cn(
                "fixed top-0 left-0 w-full z-[100] transition-all duration-500",
                isScrolled
                    ? "bg-white/90 backdrop-blur-xl border-b border-slate-200/50 py-4 px-8 shadow-lg shadow-slate-200/20"
                    : "bg-white/80 backdrop-blur-md border-b border-white/20 py-6 px-8"
            )}
        >
            <div className="flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-3 group">
                    <div className="w-10 h-10 bg-orange-500 flex items-center justify-center sharp-edge group-hover:bg-orange-600 transition-colors shadow-lg shadow-orange-500/10">
                        <Package className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex flex-col">
                        <span className="text-xl font-bold tracking-tighter leading-none text-slate-900">3PL SOLUTION</span>
                        <span className="text-[10px] font-bold tracking-[0.3em] text-orange-500 uppercase">UNITED KINGDOM</span>
                    </div>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden lg:flex items-center gap-12">
                    <Link
                        href="/services"
                        className="text-sm font-semibold tracking-tight text-slate-500 hover:text-blue-700 transition-colors relative group"
                    >
                        SERVICES
                        <span className="absolute -bottom-1 left-0 w-0 h-px bg-orange-500 transition-all group-hover:w-full" />
                    </Link>
                    <Link
                        href="/pricing"
                        className="text-sm font-semibold tracking-tight text-slate-500 hover:text-blue-700 transition-colors relative group"
                    >
                        PRICING
                        <span className="absolute -bottom-1 left-0 w-0 h-px bg-orange-500 transition-all group-hover:w-full" />
                    </Link>
                    <Link
                        href="/#faq"
                        className="text-sm font-semibold tracking-tight text-slate-500 hover:text-blue-700 transition-colors relative group"
                    >
                        FAQ
                        <span className="absolute -bottom-1 left-0 w-0 h-px bg-orange-500 transition-all group-hover:w-full" />
                    </Link>
                    <Link
                        href="/contact"
                        className="text-sm font-semibold tracking-tight text-slate-500 hover:text-blue-700 transition-colors relative group"
                    >
                        CONTACT
                        <span className="absolute -bottom-1 left-0 w-0 h-px bg-orange-500 transition-all group-hover:w-full" />
                    </Link>
                </div>


                {/* CTA */}
                <div className="flex items-center gap-8">
                    <Link href="tel:+440000000000" className="hidden xl:flex items-center gap-2 text-sm font-medium hover:text-blue-700 transition-colors text-slate-500">
                        <Phone className="w-4 h-4" />
                        <span>+44 (0) 000 000 0000</span>
                    </Link>
                    <Link href="#contact" className="btn-primary py-3 px-8 text-sm border-none shadow-lg shadow-orange-500/10">
                        SPEAK WITH A SPECIALIST
                    </Link>
                </div>
            </div>
        </nav>
    );
}
