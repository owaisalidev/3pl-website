import { servicesData } from "@/lib/services-data";
import Navbar from "@/components/Navbar";
import SectionWrapper from "@/components/SectionWrapper";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, CheckCircle2, Factory, Phone } from "lucide-react";

// Generate static params for all services
export async function generateStaticParams() {
    return servicesData.map((service) => ({
        slug: service.slug,
    }));
}

export default async function ServiceDetail({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const service = servicesData.find((s) => s.slug === slug);

    if (!service) {
        notFound();
    }

    const Icon = service.icon;

    return (
        <main className="min-h-screen grain bg-white text-slate-900">
            <Navbar />

            {/* HERO HEADER */}
            <SectionWrapper
                className="pt-40 pb-20 border-none relative bg-slate-900 overflow-hidden"
                innerClassName="relative z-10 w-full"
            >
                <div className="absolute inset-0 bg-slate-950/50 z-0"></div>

                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <Link href="/services" className="inline-flex items-center text-slate-400 hover:text-white transition-colors text-sm font-bold uppercase tracking-widest mb-8">
                        <ArrowLeft className="w-4 h-4 mr-2" /> Back to Services
                    </Link>

                    <div className="flex flex-col md:flex-row gap-12 items-start justify-between">
                        <div className="max-w-3xl">
                            <div className="inline-flex items-center gap-3 px-4 py-2 bg-orange-500/10 border border-orange-500/20 sharp-edge mb-6 w-fit">
                                <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                                <span className="text-[11px] font-bold tracking-[0.2em] text-orange-400 uppercase">SERVICE OVERVIEW</span>
                            </div>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter text-white uppercase mb-6">
                                {service.title}
                            </h1>
                            <p className="text-xl text-slate-300 font-medium leading-relaxed max-w-2xl">
                                {service.shortDesc}
                            </p>
                        </div>

                        {/* ICON BADGE */}
                        <div className="hidden md:flex w-32 h-32 bg-slate-800 border border-slate-700 sharp-edge items-center justify-center shrink-0">
                            <Icon className="w-16 h-16 text-orange-500" />
                        </div>
                    </div>
                </div>
            </SectionWrapper>

            <SectionWrapper withGrid>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
                    {/* MAIN CONTENT */}
                    <div className="lg:col-span-2 space-y-12">
                        <div>
                            <h2 className="text-2xl font-bold text-slate-900 uppercase tracking-tight mb-6">Create precise, efficient, and scalable operations.</h2>
                            <p className="text-lg text-slate-600 leading-relaxed font-medium">
                                {service.longDesc}
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {service.features.map((feature, idx) => (
                                <div key={idx} className="flex items-start gap-4 p-6 bg-slate-50 border border-slate-200 sharp-edge">
                                    <CheckCircle2 className="w-6 h-6 text-blue-600 shrink-0 mt-1" />
                                    <div>
                                        <h4 className="font-bold text-slate-900 uppercase tracking-tight mb-2 text-sm">Key Feature</h4>
                                        <p className="text-slate-600 font-medium">{feature}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="p-8 bg-blue-50 border border-blue-100 sharp-edge border-l-4 border-l-blue-600">
                            <h4 className="text-blue-900 font-bold uppercase tracking-widest text-xs mb-3">Why this matters</h4>
                            <p className="text-blue-800 text-lg font-bold italic">
                                "{service.benefit}"
                            </p>
                        </div>
                    </div>

                    {/* SIDEBAR */}
                    <div className="space-y-8">
                        <div className="p-8 bg-slate-50 border border-slate-200 sharp-edge">
                            <h3 className="text-lg font-bold uppercase tracking-tight text-slate-900 mb-6">Need this service?</h3>
                            <p className="text-slate-600 text-sm mb-8 font-medium">
                                Contact our team today to discuss your requirements and get a custom quote.
                            </p>
                            <Link href="/contact" className="btn-primary w-full text-center block">
                                GET A QUOTE
                            </Link>
                        </div>

                        <div className="p-8 bg-slate-900 text-white sharp-edge relative overflow-hidden">
                            <div className="relative z-10">
                                <Phone className="w-8 h-8 text-orange-500 mb-6" />
                                <h3 className="text-xl font-bold uppercase tracking-tight mb-2">Speak to an Expert</h3>
                                <p className="text-slate-400 text-sm mb-6">
                                    Call us directly to discuss your logistics needs.
                                </p>
                                <a href="tel:+440000000000" className="text-xl font-bold hover:text-orange-500 transition-colors">
                                    +44 (0) 000 000 0000
                                </a>
                            </div>
                            {/* Background accent */}
                            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-orange-500/10 rounded-full blur-2xl"></div>
                        </div>
                    </div>
                </div>
            </SectionWrapper>
        </main>
    );
}
