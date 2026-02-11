import Link from "next/link";
import { Package } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-slate-900 py-32 border-t border-slate-800 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[40%] h-full bg-blue-500/5 blur-[120px] pointer-events-none"></div>
            <div className="max-w-7xl mx-auto px-6 relative z-10 text-white">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-24 mb-24">
                    <div className="col-span-1 md:col-span-2 space-y-10">
                        <Link href="/" className="flex items-center gap-3">
                            <div className="w-12 h-12 bg-orange-500 flex items-center justify-center sharp-edge">
                                <Package className="text-white w-7 h-7" />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-2xl font-bold tracking-tighter leading-none">3PL SOLUTION</span>
                                <span className="text-[10px] font-bold tracking-[0.4em] text-orange-500 uppercase">UNITED KINGDOM</span>
                            </div>
                        </Link>
                        <p className="text-slate-400 text-base font-medium leading-relaxed max-w-sm">
                            3PL Solution UK provides UK & international eCommerce sellers with reliable, scalable and affordable fulfilment and logistics solutions.
                        </p>
                        <div className="flex gap-10">
                            {["Facebook", "LinkedIn", "Instagram", "X"].map((social) => (
                                <a key={social} href="#" className="text-[11px] font-bold tracking-widest text-slate-500 hover:text-white transition-colors uppercase">
                                    {social}
                                </a>
                            ))}
                        </div>
                    </div>
                    <div>
                        <h4 className="text-[11px] font-bold tracking-[0.3em] uppercase mb-10 text-white">EXPLORE</h4>
                        <ul className="space-y-4 text-sm font-semibold text-slate-400 tracking-tight">
                            <li><Link href="/" className="hover:text-orange-500 transition-colors">Home</Link></li>
                            <li><Link href="/services" className="hover:text-orange-500 transition-colors">Services</Link></li>
                            <li><Link href="/#pricing" className="hover:text-orange-500 transition-colors">Pricing</Link></li>
                            <li><Link href="/contact" className="hover:text-orange-500 transition-colors">Contact Us</Link></li>
                            <li><Link href="/#faq" className="hover:text-orange-500 transition-colors">FAQ</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-[11px] font-bold tracking-[0.3em] uppercase mb-10 text-white">OPERATIONS</h4>
                        <div className="space-y-4">
                            <p className="text-sm font-semibold text-slate-400 tracking-tight">Monday – Saturday</p>
                            <p className="text-2xl font-bold text-white tracking-tight italic">09:00 — 17:00</p>
                        </div>
                    </div>
                </div>

                <div className="pt-12 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-8 text-slate-500">
                    <p className="text-[10px] font-bold tracking-[0.2em] uppercase">
                        © 2024 3PL SOLUTION UK. ALL RIGHTS RESERVED.
                    </p>
                    <div className="flex gap-12 text-[10px] font-bold tracking-[0.2em] uppercase">
                        <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
