import Navbar from "@/components/Navbar";
import SectionWrapper from "@/components/SectionWrapper";
import { pricingData, pricingTiers, additionalCharges, keyInformation } from "@/lib/pricing-data";
import { Check, Info, AlertCircle } from "lucide-react";

export default function PricingPage() {
    return (
        <main className="min-h-screen grain bg-white text-slate-900">
            <Navbar />

            {/* HERO SECTION */}
            <SectionWrapper
                className="pt-32 pb-20 border-none relative bg-slate-900 overflow-hidden"
                innerClassName="relative z-10 w-full"
            >
                <div className="absolute inset-0 bg-orange-500/5 z-0"></div>
                <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-orange-500/10 rounded-full blur-3xl"></div>

                <div className="max-w-4xl">
                    <div className="inline-flex items-center gap-3 px-4 py-2 bg-orange-500/10 border border-orange-500/20 sharp-edge mb-8 w-fit">
                        <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                        <span className="text-[11px] font-bold tracking-[0.2em] text-orange-400 uppercase">TRANSPARENT PRICING</span>
                    </div>

                    <h1 className="text-4xl md:text-5xl xl:text-6xl font-black tracking-tighter leading-[0.95] text-white uppercase mb-8">
                        Simple, Scalable <br />
                        <span className="text-orange-500">Logistics Pricing.</span>
                    </h1>

                    <p className="text-lg md:text-xl text-slate-400 max-w-2xl font-medium leading-relaxed">
                        Choose the tier that fits your volume and grow with confidence. No hidden fees, just clear fulfillment costs.
                    </p>
                </div>
            </SectionWrapper>

            {/* PRICING TABLE SECTION */}
            <SectionWrapper withGrid className="py-24 md:py-32">
                <div className="mb-12 flex items-center justify-between">
                    <div>
                        <h2 className="text-3xl font-black uppercase tracking-tighter text-slate-900">Service Breakdown</h2>
                        <p className="text-slate-500 text-sm font-medium mt-2">Scroll horizontally to view all tiers on mobile.</p>
                    </div>
                    <div className="hidden md:flex items-center gap-2 text-xs font-bold text-orange-600 bg-orange-50 px-3 py-1 sharp-edge border border-orange-100 italic">
                        <Info className="w-3 h-3" /> All prices exclude VAT
                    </div>
                </div>

                <div className="relative group">
                    <div className="overflow-x-auto pb-4 scrollbar-thin scrollbar-thumb-slate-200">
                        <table className="w-full border-separate border-spacing-0 border border-slate-900 min-w-[900px]">
                            <thead>
                                <tr className="bg-orange-500 text-slate-900">
                                    <th className="border border-slate-900 py-6 px-4 text-sm font-black uppercase tracking-wider w-[220px] min-w-[220px] sticky left-0 z-30 bg-orange-500 border-r-2 shadow-[1px_0_0_0_#0f172a]">Service</th>
                                    {pricingTiers.map((tier, idx) => (
                                        <th key={idx} className="border border-slate-900 py-6 px-4 text-center min-w-[150px] relative group/header">
                                            <div className="text-sm font-black uppercase tracking-wider leading-tight">{tier.name}</div>
                                            <div className="text-[10px] font-bold opacity-80 mt-1 uppercase tracking-tighter whitespace-nowrap">{tier.range}</div>
                                            {tier.savings && (
                                                <div className="mt-3 inline-flex items-center gap-1.5 bg-slate-900 text-white text-[10px] font-black px-3 py-1.5 sharp-edge tracking-tight shadow-[3px_3px_0px_0px_#f97316] relative transition-transform group-hover/header:-translate-y-0.5">
                                                    <span className="w-1.5 h-1.5 bg-orange-500 rounded-full animate-pulse"></span>
                                                    {tier.savings}
                                                </div>
                                            )}
                                        </th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {pricingData.map((cat, catIdx) => (
                                    cat.services.map((row, rowIdx) => (
                                        <tr key={`${catIdx}-${rowIdx}`} className="bg-white hover:bg-slate-50/50 transition-colors group/row">
                                            <td className="border border-slate-900 py-4 px-6 font-bold text-slate-900 uppercase tracking-tight text-sm sticky left-0 z-20 bg-white group-hover/row:bg-slate-50 transition-colors shadow-[2px_0_0_0_#0f172a]">
                                                {row.service}
                                            </td>
                                            {row.prices.map((price, priceIdx) => (
                                                <td key={priceIdx} className="border border-slate-900 py-4 px-6 text-center font-medium text-slate-700 text-sm">
                                                    <span className={priceIdx === row.prices.length - 1 ? "font-black text-slate-900" : ""}>
                                                        {price}
                                                    </span>
                                                </td>
                                            ))}
                                        </tr>
                                    ))
                                ))}
                            </tbody>
                        </table>
                    </div>
                    {/* Scroll Fade Indicator for Mobile */}
                    <div className="absolute top-0 right-0 h-full w-12 bg-gradient-to-l from-white/20 to-transparent pointer-events-none md:hidden"></div>
                </div>

                {/* ADDITIONAL CHARGES & KEY INFO WRAPPER */}
                <div className="mt-24 md:mt-32 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
                    <div>
                        <div className="inline-flex items-center gap-2 mb-8 border-b-2 border-orange-500 pb-2">
                            <AlertCircle className="w-5 h-5 text-orange-500" />
                            <h3 className="text-xl font-black uppercase tracking-tight text-slate-900">Additional Charges</h3>
                        </div>
                        <div className="space-y-4">
                            {additionalCharges.map((charge, idx) => (
                                <div key={idx} className="flex justify-between items-center p-5 bg-white border border-slate-200 sharp-edge hover:border-orange-500/30 transition-all shadow-sm">
                                    <span className="font-bold text-sm text-slate-700 uppercase tracking-tight">{charge.name}</span>
                                    <span className="font-black text-orange-600 text-lg">{charge.price}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div>
                        <div className="inline-flex items-center gap-2 mb-8 border-b-2 border-blue-700 pb-2">
                            <Info className="w-5 h-5 text-blue-700" />
                            <h3 className="text-xl font-black uppercase tracking-tight text-slate-900">Key Information</h3>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {keyInformation.map((info, idx) => (
                                <div key={idx} className="flex items-start gap-4 p-5 bg-slate-50 border border-slate-200 sharp-edge group hover:bg-white transition-all">
                                    <div className="w-6 h-6 bg-blue-700 flex items-center justify-center sharp-edge shrink-0 mt-0.5">
                                        <Check className="w-3 h-3 text-white" />
                                    </div>
                                    <span className="text-[11px] font-bold text-slate-600 uppercase tracking-tight leading-relaxed">{info}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* CTA BOTTOM */}
                <div className="mt-20 p-12 bg-blue-700 sharp-edge text-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                    <div className="relative z-10">
                        <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-white uppercase mb-6">
                            Ready to started?
                        </h2>
                        <p className="text-blue-100 text-lg font-medium mb-10 max-w-2xl mx-auto">
                            Contact our logistics specialists today for a detailed breakdown and onboarding.
                        </p>
                        <a href="/contact" className="btn-primary bg-white text-blue-700 hover:bg-slate-100 border-none py-4 px-12 text-base shadow-2xl">
                            SPEAK WITH US TODAY
                        </a>
                    </div>
                </div>
            </SectionWrapper>
        </main>
    );
}
