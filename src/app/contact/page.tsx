import Navbar from "@/components/Navbar";
import SectionWrapper from "@/components/SectionWrapper";
import { ArrowRight, ExternalLink, Globe, Mail, MapPin, Phone, Zap } from "lucide-react";

export default function ContactPage() {
    return (
        <main className="min-h-screen grain bg-white text-slate-900">
            <Navbar />

            {/* HERO HEADER */}
            <SectionWrapper
                className="pt-40 pb-20 border-none relative bg-slate-900 overflow-hidden"
                innerClassName="relative z-10 w-full"
            >
                <div className="absolute inset-0 bg-orange-900/10 z-0"></div>

                <div className="max-w-4xl mx-auto text-center">
                    <div className="inline-flex items-center gap-3 px-4 py-2 bg-orange-500/10 border border-orange-500/20 sharp-edge mb-8">
                        <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                        <span className="text-[11px] font-bold tracking-[0.2em] text-orange-400 uppercase">GET IN TOUCH</span>
                    </div>

                    <h1 className="text-4xl md:text-6xl font-black tracking-tighter text-white uppercase mb-6">
                        Let's Talk <span className="text-orange-500">Logistics.</span>
                    </h1>
                    <p className="text-xl text-slate-400 font-medium leading-relaxed max-w-2xl mx-auto">
                        Whether you need a quote, have a question about our services, or want to discuss a partnership, we're here to help.
                    </p>
                </div>
            </SectionWrapper>

            <SectionWrapper withGrid>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-24 items-start">
                    {/* CONTACT INFO */}
                    <div>
                        <h2 className="text-3xl font-bold uppercase tracking-tight text-slate-900 mb-8">
                            Contact Information
                        </h2>

                        <div className="space-y-10 mb-12">
                            <div className="flex gap-8 group">
                                <div className="w-16 h-16 bg-slate-50 border border-slate-200 flex items-center justify-center sharp-edge group-hover:border-orange-500 transition-colors shadow-sm shrink-0">
                                    <MapPin className="w-6 h-6 text-blue-700" />
                                </div>
                                <div>
                                    <p className="text-[11px] font-bold tracking-widest text-slate-400 uppercase mb-2">Location</p>
                                    <p className="text-xl font-bold uppercase text-slate-900">United Kingdom</p>
                                    <p className="text-slate-500 text-sm mt-1">Strategic warehouse locations across the UK.</p>
                                </div>
                            </div>

                            <div className="flex gap-8 group">
                                <div className="w-16 h-16 bg-slate-50 border border-slate-200 flex items-center justify-center sharp-edge group-hover:border-orange-500 transition-colors shadow-sm shrink-0">
                                    <Phone className="w-6 h-6 text-blue-700" />
                                </div>
                                <div>
                                    <p className="text-[11px] font-bold tracking-widest text-slate-400 uppercase mb-2">Support Line</p>
                                    <p className="text-xl font-bold uppercase text-slate-900">+44 (0) 000 000 0000</p>
                                    <p className="text-slate-500 text-sm mt-1">Mon-Sat, 9am - 5pm GMT</p>
                                </div>
                            </div>

                            <div className="flex gap-8 group">
                                <div className="w-16 h-16 bg-slate-50 border border-slate-200 flex items-center justify-center sharp-edge group-hover:border-orange-500 transition-colors shadow-sm shrink-0">
                                    <Mail className="w-6 h-6 text-blue-700" />
                                </div>
                                <div>
                                    <p className="text-[11px] font-bold tracking-widest text-slate-400 uppercase mb-2">Email Us</p>
                                    <p className="text-xl font-bold uppercase text-slate-900">HELLO@3PLSOLUTION.CO.UK</p>
                                    <p className="text-slate-500 text-sm mt-1">We typically reply within 24 hours.</p>
                                </div>
                            </div>
                        </div>

                        <div className="p-8 bg-slate-50 border border-slate-200 sharp-edge">
                            <h4 className="font-bold text-slate-900 uppercase tracking-tight mb-4">Why choose us?</h4>
                            <ul className="space-y-3">
                                {[
                                    "Dedicated account manager",
                                    "Transparent pricing structure",
                                    "Real-time inventory visibility",
                                    "Fast implementation & onboarding"
                                ].map((item, idx) => (
                                    <li key={idx} className="flex items-center gap-3 text-sm font-medium text-slate-600">
                                        <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* CONTACT FORM */}
                    <div className="bg-white border border-slate-200 p-10 sharp-edge shadow-2xl relative z-10 overflow-hidden group">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-slate-50 blur-3xl group-hover:bg-slate-100 transition-all"></div>

                        <div className="flex items-center justify-between mb-10">
                            <h3 className="text-2xl font-bold uppercase tracking-tight text-slate-900">Send a Message</h3>
                            <ExternalLink className="w-5 h-5 text-slate-400" />
                        </div>

                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-[10px] font-bold tracking-widest uppercase text-slate-400">Name</label>
                                    <input type="text" className="w-full bg-slate-50 border border-slate-200 sharp-edge p-4 focus:border-orange-500 outline-none transition-colors text-slate-900 text-sm font-medium" placeholder="Full Name" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] font-bold tracking-widest uppercase text-slate-400">Email</label>
                                    <input type="email" className="w-full bg-slate-50 border border-slate-200 sharp-edge p-4 focus:border-orange-500 outline-none transition-colors text-slate-900 text-sm font-medium" placeholder="name@company.com" />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-[10px] font-bold tracking-widest uppercase text-slate-400">Company (Optional)</label>
                                <input type="text" className="w-full bg-slate-50 border border-slate-200 sharp-edge p-4 focus:border-orange-500 outline-none transition-colors text-slate-900 text-sm font-medium" placeholder="Business Name" />
                            </div>

                            <div className="space-y-2">
                                <label className="text-[10px] font-bold tracking-widest uppercase text-slate-400">Phone</label>
                                <input type="tel" className="w-full bg-slate-50 border border-slate-200 sharp-edge p-4 focus:border-orange-500 outline-none transition-colors text-slate-900 text-sm font-medium" placeholder="+44 ..." />
                            </div>

                            <div className="space-y-2">
                                <label className="text-[10px] font-bold tracking-widest uppercase text-slate-400">Message</label>
                                <textarea rows={5} className="w-full bg-slate-50 border border-slate-200 sharp-edge p-4 focus:border-orange-500 outline-none transition-colors text-slate-900 text-sm font-medium resize-none" placeholder="Tell us about your requirements..."></textarea>
                            </div>

                            <button className="btn-primary w-full text-sm font-bold tracking-widest py-5 group shadow-lg shadow-orange-500/20 mt-4">
                                SEND MESSAGE <ArrowRight className="inline ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </form>
                    </div>
                </div>
            </SectionWrapper>
        </main>
    );
}
