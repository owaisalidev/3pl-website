"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Phone, ArrowRight, Package, Menu, X } from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "HOME", href: "/" },
        { name: "SERVICES", href: "/services" },
        { name: "PRICING", href: "/pricing" },
        { name: "FAQ", href: "/#faq" },
        { name: "CONTACT", href: "/contact" },
    ];

    return (
        <>
            <nav
                className={cn(
                    "fixed top-0 left-0 w-full z-[100] transition-all duration-500",
                    isScrolled
                        ? "bg-white/90 backdrop-blur-xl border-b border-slate-200/50 py-4 px-8 shadow-lg shadow-slate-200/20"
                        : "bg-white/5 backdrop-blur-md border-b border-white/10 py-6 px-8"
                )}
            >
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-3 group">
                        <div className={cn(
                            "w-10 h-10 flex items-center justify-center sharp-edge transition-colors shadow-lg",
                            isScrolled ? "bg-orange-500 shadow-orange-500/10" : "bg-orange-600 shadow-orange-600/20"
                        )}>
                            <Package className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex flex-col">
                            <span className={cn(
                                "text-xl font-bold tracking-tighter leading-none transition-colors",
                                isScrolled ? "text-slate-900" : "text-white"
                            )}>3PL SOLUTION</span>
                            <span className="text-[10px] font-bold tracking-[0.3em] text-orange-500 uppercase">UNITED KINGDOM</span>
                        </div>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden lg:flex items-center gap-12">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={cn(
                                    "text-sm font-semibold tracking-tight transition-colors relative group",
                                    isScrolled ? "text-slate-500 hover:text-blue-700" : "text-white/80 hover:text-white"
                                )}
                            >
                                {link.name}
                                <span className="absolute -bottom-1 left-0 w-0 h-px bg-orange-500 transition-all group-hover:w-full" />
                            </Link>
                        ))}
                    </div>

                    {/* CTA & Mobile Toggle */}
                    <div className="flex items-center gap-4 lg:gap-8">
                        <Link href="tel:+440000000000" className={cn(
                            "hidden xl:flex items-center gap-2 text-sm font-medium transition-colors",
                            isScrolled ? "text-slate-500 hover:text-blue-700" : "text-white/80 hover:text-white"
                        )}>
                            <Phone className="w-4 h-4" />
                            <span>+44 (0) 000 000 0000</span>
                        </Link>
                        <Link href="#contact" className={cn(
                            "hidden lg:block py-3 px-8 text-sm font-bold tracking-tight rounded-full transition-all",
                            isScrolled 
                                ? "bg-orange-500 text-white hover:bg-orange-600 shadow-lg shadow-orange-500/10" 
                                : "bg-orange-600 text-white hover:bg-orange-700 shadow-lg shadow-orange-600/20"
                        )}>
                            SPEAK WITH A SPECIALIST
                        </Link>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className={cn(
                                "p-2 lg:hidden transition-colors",
                                isScrolled ? "text-slate-900" : "text-white"
                            )}
                        >
                            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            <div className={cn(
                "fixed inset-0 z-[90] bg-slate-900 transition-all duration-500 lg:hidden flex flex-col items-center justify-center gap-8 p-8",
                isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
            )}>
                {navLinks.map((link) => (
                    <Link
                        key={link.name}
                        href={link.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="text-2xl font-black text-white hover:text-orange-500 transition-colors uppercase tracking-tighter"
                    >
                        {link.name}
                    </Link>
                ))}
                <div className="w-full h-px bg-white/10 my-4" />
                <Link
                    href="tel:+440000000000"
                    className="flex items-center gap-3 text-lg font-bold text-white/70 hover:text-white transition-colors"
                >
                    <Phone className="w-5 h-5 text-orange-500" />
                    <span>+44 (0) 000 000 0000</span>
                </Link>
                <Link
                    href="#contact"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="w-full bg-orange-600 text-white text-center py-5 rounded-full font-bold text-lg shadow-xl shadow-orange-600/20"
                >
                    GET A FREE QUOTE
                </Link>
            </div>
        </>
    );
}
