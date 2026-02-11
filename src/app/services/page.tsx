import Navbar from "@/components/Navbar";
import SectionWrapper from "@/components/SectionWrapper";
import Link from "next/link";
import { servicesData } from "@/lib/services-data";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function ServicesPage() {
    return (
        <main className="min-h-screen grain bg-white text-slate-900">
            <Navbar />

            {/* HERO SECTION */}
            <SectionWrapper
                className="pt-32 pb-20 border-none relative bg-slate-900 overflow-hidden"
                innerClassName="relative z-10 w-full"
            >
                <div className="absolute inset-0 bg-blue-900/10 z-0"></div>
                <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-3xl"></div>

                <div className="max-w-4xl">
                    <div className="inline-flex items-center gap-3 px-4 py-2 bg-blue-500/10 border border-blue-500/20 sharp-edge mb-8 w-fit">
                        <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                        <span className="text-[11px] font-bold tracking-[0.2em] text-blue-400 uppercase">OUR EXPERTISE</span>
                    </div>

                    <h1 className="text-4xl md:text-5xl xl:text-6xl font-black tracking-tighter leading-[0.95] text-white uppercase mb-8">
                        Comprehensive <br />
                        <span className="text-blue-500">Logistics Solutions.</span>
                    </h1>

                    <p className="text-lg md:text-xl text-slate-400 max-w-2xl font-medium leading-relaxed">
                        From storage to shipping, and everything in between. We provide the infrastructure you need to scale your eCommerce business.
                    </p>
                </div>
            </SectionWrapper>

            {/* SERVICES GRID */}
            <SectionWrapper withGrid>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {servicesData.map((service, idx) => (
                        <Link
                            href={`/services/${service.slug}`}
                            key={idx}
                            className="card-premium group relative hover:-translate-y-1 block"
                        >
                            <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/5 blur-2xl rounded-full group-hover:bg-blue-500/10 transition-colors"></div>

                            <div className="flex flex-col h-full">
                                <div className="w-14 h-14 bg-slate-50 border border-slate-100 flex items-center justify-center sharp-edge mb-6 group-hover:bg-blue-600 group-hover:border-blue-600 transition-all duration-500 shadow-sm">
                                    <service.icon className="w-7 h-7 text-blue-600 group-hover:text-white transition-colors" />
                                </div>

                                <h3 className="text-xl font-bold mb-3 uppercase tracking-tight text-slate-900 group-hover:text-blue-700 transition-colors">
                                    {service.title}
                                </h3>

                                <p className="text-slate-500 text-sm leading-relaxed font-medium mb-6 flex-grow">
                                    {service.shortDesc}
                                </p>

                                <div className="flex items-center text-xs font-bold tracking-widest text-blue-600 uppercase mt-auto group-hover:underline decoration-2 underline-offset-4">
                                    View Details <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </SectionWrapper>

            {/* CTA SECTION */}
            <SectionWrapper className="bg-slate-50">
                <div className="bg-blue-600 sharp-edge p-12 md:p-20 relative overflow-hidden text-center">
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-500/0 via-blue-900/50 to-blue-900/80"></div>

                    <div className="relative z-10 max-w-3xl mx-auto">
                        <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-white uppercase mb-8">
                            Ready to Optimize Your Supply Chain?
                        </h2>
                        <p className="text-blue-100 text-lg font-medium mb-10 max-w-2xl mx-auto">
                            Get a custom quote tailored to your specific volume and requirements.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-6 justify-center">
                            <Link href="/contact" className="btn-primary bg-white text-blue-900 hover:bg-slate-100 shadow-xl border-none">
                                GET A FREE QUOTE
                            </Link>
                            <Link href="/contact" className="btn-secondary border-blue-400 text-white hover:bg-blue-700 hover:border-blue-700 hover:text-white">
                                TALK TO AN EXPERT
                            </Link>
                        </div>
                    </div>
                </div>
            </SectionWrapper>


        </main>
    );
}
