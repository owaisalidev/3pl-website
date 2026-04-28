import Navbar from "@/components/Navbar";
import SectionWrapper from "@/components/SectionWrapper";
import Link from "next/link";
import {
    ArrowRight,
    ArrowRightLeft,
    BarChart,
    BarChart3,
    Box,
    Boxes,
    Check,
    CheckCircle2,
    Clock,
    ExternalLink,
    Factory,
    Globe,
    Info,
    LayoutDashboard,
    Package,
    Phone,
    RefreshCw,
    ShieldAlert,
    ShieldCheck,
    Ship,
    Tag,
    Target,
    TrendingDown,
    Users,
    Zap
} from "lucide-react";
import { pricingTiers, pricingData } from "@/lib/pricing-data";

export default function Home() {
    return (
        <main className="min-h-screen grain bg-white text-slate-900">
            <Navbar />

            {/* 1️⃣ ENTERPRISE HERO SECTION */}
            <SectionWrapper
                className="py-0 border-none relative bg-cover bg-center overflow-hidden min-h-screen flex items-center"
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&q=80&w=2000')" }}
                overlay={<div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent z-0"></div>}
                innerClassName="relative z-10 w-full"
            >
                <div className="relative z-10 max-w-7xl mx-auto w-full">
                    <div className="max-w-4xl">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight text-white uppercase mb-8">
                            STREAMLINE YOUR UK <br />
                            <span className="text-white">PREP & FULFILMENT
                            </span> <br />
                            <span className="text-orange-500">WITH 3PL SOLUTION UK</span>
                        </h1>

                        <p className="text-lg md:text-xl text-white/90 max-w-2xl font-medium leading-relaxed">
                            Reliable prep services for eCommerce sellers — from inspection and labeling to picking, packing, and fast courier handovers.
                        </p>

                        <div className="mt-12 flex flex-wrap gap-6">
                            <a href="#contact" className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-4 md:py-5 px-10 md:px-12 rounded-full transition-all shadow-xl shadow-orange-600/20 text-sm md:text-base uppercase tracking-tight text-center">
                                GET A FREE QUOTE
                            </a>
                            <a href="#contact" className="border-2 border-white/40 hover:border-white text-white font-bold py-4 md:py-5 px-10 md:px-12 rounded-full transition-all backdrop-blur-sm text-sm md:text-base uppercase tracking-tight text-center">
                                SPEAK WITH SPECIALIST
                            </a>
                        </div>
                    </div>
                </div>
            </SectionWrapper>

            {/* 2️⃣ PLATFORM TRUST SECTION */}
            <div className="py-16 bg-slate-50 border-y border-slate-200/50">
                <div className="max-w-7xl mx-auto px-6 mb-10 text-center lg:text-left">
                    <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-slate-900 mb-2">
                        Powering PREP &Fulfillment for E-commerce Brands
                    </h2>
                    <p className="text-slate-600 font-medium">
                        Whether you sell on Shopify, Amazon, or beyond — we handle your storage, packing and delivery with ease in UK.
                    </p>
                </div>
                <div className="w-full flex overflow-hidden group">
                    <div className="flex gap-24 py-4 animate-scroll whitespace-nowrap opacity-60 hover:opacity-100 transition-opacity duration-700">
                        {["Amazon", "eBay", "Shopify", "Etsy", "WooCommerce", "Magento", "TikTok Shop"].map((platform) => (
                            <span key={platform} className="text-3xl font-black text-slate-300 hover:text-blue-700 transition-colors cursor-default uppercase tracking-tight">
                                {platform}
                            </span>
                        ))}
                        {["Amazon", "eBay", "Shopify", "Etsy", "WooCommerce", "Magento", "TikTok Shop"].map((platform) => (
                            <span key={`${platform}-clone`} className="text-3xl font-black text-slate-300 hover:text-blue-700 transition-colors cursor-default uppercase tracking-tight">
                                {platform}
                            </span>
                        ))}
                    </div>
                </div>
            </div>

            {/* 3️⃣ VALUE PROPOSITION SECTION */}
            <SectionWrapper id="solutions" withGrid>
                <div className="flex flex-col lg:flex-row justify-between items-end mb-20 gap-12 text-center lg:text-left">
                    <div className="max-w-3xl">
                        <h2 className="text-4xl md:text-5xl font-black tracking-tighter leading-tight text-slate-900 uppercase">
                            We Scale Your Business <br /> <span className="text-blue-700">Where It Matters Most.</span>
                        </h2>
                    </div>
                    <p className="section-subtitle mb-2">
                        Advanced logistics infrastructure designed to handle the complexities of modern multi-channel commerce.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[
                        {
                            title: "Ecommerce Fulfillment",
                            desc: "We manage your inventory and orders, handle picking and packing and ensure smooth handover to courier partners so you can focus on growing your business.",
                            icon: Zap
                        },
                        {
                            title: "Two Step Dropshipping",
                            desc: "With EDI connections and multi-channel support, we manage single units, cases, pallets and LTL freight for your retail partners.",
                            icon: Factory
                        },
                        {
                            title: "Amazon FBA/FBM Support",
                            desc: "We prepare all shipments to Amazon (FBA) and fulfil orders via FBM with full compliance — helping UK & global Amazon sellers succeed.",
                            icon: LayoutDashboard
                        },
                        {
                            title: "Omnichannel Logistics",
                            desc: "A unified order management network connects all sales channels, enabling shared inventory and streamlined global fulfilment.",
                            icon: Globe
                        }
                    ].map((item, idx) => (
                        <div key={idx} className="card-premium group">
                            <div className="w-14 h-14 bg-slate-50 flex items-center justify-center sharp-edge mb-8 group-hover:bg-blue-700 transition-all duration-500 shadow-sm">
                                <item.icon className="w-7 h-7 text-blue-700 group-hover:text-white transition-colors" />
                            </div>
                            <h3 className="text-xl font-bold mb-4 uppercase tracking-tight text-slate-900">{item.title}</h3>
                            <p className="text-slate-500 text-sm leading-relaxed font-medium group-hover:text-slate-700 transition-colors">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </SectionWrapper>

            {/* 4️⃣ PAIN POINTS SECTION */}
            <SectionWrapper id="challenges" className="bg-slate-50">
                <div className="max-w-4xl mb-24">
                    <h2 className="section-title uppercase">
                        Struggling with Your <br /> <span className="text-orange-500">Current Prep Service Provider?</span>
                    </h2>
                    <p className="section-subtitle">
                        Delays, inconsistent prep quality and poor handling can lead to rejected inventory, lost sales and damaged customer trust.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
                    {[
                        { title: "Inaccurate Fulfillment", desc: "Errors in order picking and packing lead to returns and unhappy customers.", icon: ShieldAlert },
                        { title: "Customer Support", desc: "Lacklustre communication and response times frustrate your valued clients.", icon: Users },
                        { title: "Processing Delays", desc: "Slow turnaround times impact delivery speed and customer satisfaction.", icon: Clock }
                    ].map((point, idx) => (
                        <div key={idx} className="group">
                            <div className="flex gap-6">
                                <div className="w-16 h-16 bg-slate-50 border border-slate-200 flex items-center justify-center sharp-edge group-hover:border-orange-500 transition-colors shadow-sm">
                                    <point.icon className="w-7 h-7 text-orange-500" />
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-lg font-bold uppercase tracking-tight text-slate-900 mb-3">{point.title}</h3>
                                    <p className="text-sm text-slate-600 font-medium leading-relaxed">{point.desc}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {[
                        { title: "Business Distraction", desc: "Managing logistics in-house pulls focus from growth and product development.", icon: Target },
                        { title: "High Shipping Costs", desc: "Without volume discounts, shipping expenses erode your profit margins.", icon: TrendingDown }
                    ].map((item, idx) => (
                        <div key={idx} className="card-premium border-slate-200 group bg-white shadow-sm p-8">
                            <div className="w-12 h-12 bg-orange-500/10 flex items-center justify-center sharp-edge mb-6 group-hover:bg-orange-500 transition-colors duration-500">
                                <item.icon className="w-6 h-6 text-orange-600 group-hover:text-white" />
                            </div>
                            <h3 className="text-base font-bold mb-3 uppercase tracking-tight text-slate-900 leading-tight">{item.title}</h3>
                            <p className="text-xs text-slate-500 leading-relaxed font-medium group-hover:text-slate-700 transition-colors">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </SectionWrapper>

            {/* 5️⃣ DETAILED SERVICES SECTION */}
            <SectionWrapper id="services" withGrid>
                <div className="flex flex-col lg:flex-row justify-between items-end mb-24 gap-12 text-center lg:text-left">
                    <div className="max-w-3xl">
                        <h2 className="section-title uppercase">
                            Our <br /> <span className="text-blue-700">3PL Services.</span>
                        </h2>
                        <p className="text-lg text-slate-600 font-medium">Comprehensive logistics solutions designed for your business success.</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-12">
                    {[
                        { title: "Order Fulfillment", desc: "Efficient picking, packing and shipping to customers across the UK and worldwide.", icon: Package },
                        { title: "Poly Bagging", desc: "Protect your products with custom poly bagging and compliant packing.", icon: Box },
                        { title: "Labeling & Barcode Services", desc: "Marketplace and carrier-compliant labeling, including FNSKU, ASIN, QR & barcodes.", icon: Tag },
                        // { title: "Hourly Labour Support", desc: "Flexible workforce for warehouse operations and special handling support.", icon: Users },
                        { title: "Cross Docking", desc: "Fast turnaround from inbound to outbound shipping with minimal storage dwell time.", icon: Ship },
                        { title: "Bundling & Kitting", desc: "Create multi-product bundles, promotional kits, and ready-to-sell packages.", icon: Boxes },
                        { title: "Storage & Warehousing", desc: "Secure storage with real-time inventory tracking and flexible storage terms.", icon: Factory },
                        // { title: "Container Unloading", desc: "Professional container handling, palletizing and inventory reception.", icon: ArrowRightLeft },
                        // { title: "Consulting Services", desc: "Supply chain optimisation, warehouse layout design and systems integration.", icon: BarChart3 }
                    ].map((service, idx) => (
                        <div key={idx} className="group relative">
                            <div className="flex gap-6">
                                <div className="flex-shrink-0 w-12 h-12 bg-slate-50 border border-slate-200 flex items-center justify-center sharp-edge group-hover:bg-blue-700 group-hover:border-blue-700 transition-all duration-500 shadow-sm">
                                    <service.icon className="w-6 h-6 text-blue-700 group-hover:text-white" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold mb-3 uppercase tracking-tight text-slate-900 group-hover:text-blue-700 transition-colors">{service.title}</h3>
                                    <p className="text-sm text-slate-500 leading-relaxed font-medium group-hover:text-slate-700 transition-colors">{service.desc}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </SectionWrapper>

            {/* 6️⃣ AMAZON EXPERTISE SECTION */}
            <SectionWrapper id="amazon" className="bg-white" withGrid>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
                    <div>
                        <div className="inline-flex items-center gap-3 px-4 py-2 bg-blue-500/10 border border-blue-500/20 sharp-edge mb-10">
                            <ShieldCheck className="w-4 h-4 text-blue-700" />
                            <span className="text-[11px] font-bold tracking-[0.2em] text-blue-700 uppercase">EXPERIENCED FBA PARTNER</span>
                        </div>
                        <h2 className="section-title uppercase">
                            End-to-End <br />
                            {/* <span className="text-blue-700">Amazon FBA Prep & Fulfilment.</span> */}
                        </h2>

                        <div className="space-y-6">
                            {[
                                { title: "Amazon", desc: "Amazon FBA, FBM , Asim and FNSKU" },
                                { title: "TikTok Shop", desc: "Tiktok Shop Order fullfilment services" },
                                { title: "Shopify", desc: "Shopify order fulfillment services" },
                                { title: "Etsy", desc: "Etsy order fulfillement services" },
                                { title: "Onbuy", desc: "Onbuy order fulfillment services" },
                            ].map((item, idx) => (
                                <div key={idx} className="flex gap-6 p-6 bg-slate-50 border border-slate-200 sharp-edge group hover:border-orange-500/30 transition-all">
                                    <div className="w-10 h-10 bg-white flex items-center justify-center border border-slate-200 sharp-edge text-orange-500 font-bold group-hover:bg-orange-500 group-hover:text-white transition-all shadow-sm">
                                        0{idx + 1}
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-900 uppercase tracking-tight mb-1">{item.title}</h4>
                                        <p className="text-sm text-slate-500 font-medium group-hover:text-slate-700 transition-colors">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="relative">
                        <div className="aspect-square bg-slate-50 border border-slate-200 sharp-edge p-12 relative overflow-hidden group shadow-inner">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/5 blur-3xl group-hover:bg-orange-500/10 transition-all"></div>
                            <div className="relative z-10 h-full flex flex-col justify-between">
                                <div className="space-y-8">
                                    <div className="w-16 h-16 bg-blue-700 flex items-center justify-center sharp-edge shadow-lg shadow-blue-700/10">
                                        <Boxes className="w-8 h-8 text-white" />
                                    </div>
                                    <h3 className="text-3xl font-bold tracking-tight text-slate-900 uppercase italic leading-[1.1]">
                                        100% Marketplace <br /> <span className="text-orange-500">Alignment Guaranteed.</span>
                                    </h3>
                                    <p className="text-slate-600 font-medium leading-relaxed">
                                        From Shopify integration to TikTok Shop viral surges, our infrastructure is built to scale with your sales volume.
                                    </p>
                                </div>

                                <div className="grid grid-cols-2 gap-6">
                                    <div className="p-6 bg-white border border-slate-200 sharp-edge shadow-sm">
                                        <div className="text-2xl font-bold text-slate-900 mb-1">99.9%</div>
                                        <div className="text-[10px] font-bold tracking-widest text-slate-400 uppercase">INVENTORY ACCURACY</div>
                                    </div>
                                    <div className="p-6 bg-white border border-slate-200 sharp-edge shadow-sm">
                                        <div className="text-2xl font-bold text-slate-900 mb-1">24H</div>
                                        <div className="text-[10px] font-bold tracking-widest text-slate-400 uppercase">SLA PROCESSING</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </SectionWrapper>

            {/* 7️⃣ PRICING SECTION */}
            <SectionWrapper id="pricing" className="bg-slate-50/50">
                <div className="flex flex-col lg:flex-row justify-between items-end mb-20 gap-12 text-center lg:text-left">
                    <div className="max-w-3xl">
                        <h2 className="section-title uppercase">
                            Fair & Transparent <br /> <span className="text-blue-700">Pricing.</span>
                        </h2>
                    </div>
                    <p className="section-subtitle mb-2">
                        Transparent volume-based pricing that grows with your brand.
                    </p>
                </div>

                {/* New Premium Pricing Preview */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
                    {/* Main Tier Highlights */}
                    <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-5 gap-4">
                        {pricingTiers.map((tier, idx) => (
                            <div key={idx} className="bg-white border border-slate-200 p-6 sharp-edge group hover:border-orange-500 transition-all shadow-sm flex flex-col items-center text-center">
                                <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">{tier.name}</div>
                                <div className="text-xs font-bold text-slate-900 leading-tight mb-4 h-8 flex items-center">{tier.range}</div>
                                {tier.savings ? (
                                    <div className="mt-auto bg-slate-900 text-white text-[9px] font-black px-2 py-1 sharp-edge uppercase tracking-tighter">
                                        {tier.savings}
                                    </div>
                                ) : (
                                    <div className="mt-auto text-[9px] font-black text-slate-300 uppercase tracking-tighter">STANDARD</div>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Quick CTA Card */}
                    <div className="lg:col-span-4">
                        <div className="bg-slate-900 sharp-edge p-8 h-full flex flex-col justify-center relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/10 blur-3xl"></div>
                            <h3 className="text-xl font-bold text-white uppercase tracking-tight mb-4 relative z-10">Flexible Fulfillment</h3>
                            <p className="text-slate-400 text-sm mb-8 relative z-10 font-medium">We handle everything from single unit picks to complex kitting at scale. No hidden fees.</p>
                            <Link href="/pricing" className="btn-primary py-4 px-6 text-center text-[10px] group/btn bg-orange-500 hover:bg-orange-600 border-none transition-all">
                                VIEW FULL PRICE LIST <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform inline" />
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Popular Services Snippets */}
                <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        { title: "FNSKU Labeling", price: "£0.21", unit: "/unit", icon: Tag, color: "orange" },
                        { title: "Standard Prep", price: "£0.84", unit: "/unit", icon: Package, color: "blue" },
                        { title: "Monthly Storage", price: "£10.00", unit: "/m³", icon: Factory, color: "slate" }
                    ].map((item, idx) => (
                        <div key={idx} className="flex items-center gap-6 p-8 bg-white border border-slate-200 sharp-edge shadow-sm hover:shadow-md transition-all group">
                            <div className="w-14 h-14 bg-slate-50 flex items-center justify-center sharp-edge group-hover:bg-slate-900 transition-colors">
                                <item.icon className="w-6 h-6 text-slate-900 group-hover:text-white" />
                            </div>
                            <div>
                                <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">{item.title}</div>
                                <div className="flex items-baseline gap-1">
                                    <span className="text-2xl font-black text-slate-900">{item.price}</span>
                                    <span className="text-[10px] font-bold text-slate-400">{item.unit}*</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-12 p-8 border border-slate-200 sharp-edge bg-white flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="flex items-center gap-4">
                        <Clock className="w-6 h-6 text-blue-700" />
                        <div>
                            <div className="text-[10px] font-bold tracking-widest text-slate-400 uppercase">Operational Hours</div>
                            <div className="text-lg font-bold text-slate-900">Monday – Saturday: 9:00 AM – 5:00 PM</div>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row items-center gap-6">
                        <div className="flex items-center gap-2 text-[10px] font-bold text-slate-400 uppercase tracking-tight italic">
                            <Info className="w-3 h-3" /> *Price based on Tier 5 volume. All prices exclude VAT.
                        </div>
                        <a href="#contact" className="btn-primary py-4 px-10">GET A CUSTOM QUOTE</a>
                    </div>
                </div>
            </SectionWrapper>

            {/* 8️⃣ FAQ SECTION */}
            <SectionWrapper id="faq" className="bg-white">
                <div className="flex flex-col lg:flex-row gap-24">
                    <div className="lg:w-1/3">
                        <h2 className="section-title uppercase">
                            Frequently Asked <br /> <span className="text-blue-700">Questions.</span>
                        </h2>
                        <p className="section-subtitle">
                            Everything you need to know about our UK fulfillment network and compliance standards.
                        </p>
                    </div>
                    <div className="lg:w-2/3 space-y-4">
                        {[
                            {
                                q: "What is a Third-Party Logistics (3PL) provider?",
                                a: "A 3PL provider offers logistics, warehousing, fulfillment and shipping services so eCommerce brands can outsource complex operations and focus on growth."
                            },
                            {
                                q: "How does 3PL help with inventory & fulfilment?",
                                a: "We offer real-time inventory tracking, automated reordering alerts, efficient order picking, packing and dispatch — ensuring fast delivery and fewer errors."
                            },
                            {
                                q: "What are Prep services and why are they important for marketplaces?",
                                a: "Prep services include labelling, polybagging, bubble wrap and packaging to ensure compliance with marketplace requirements like Amazon FBA. This prevents inventory rejection and delays."
                            },
                            {
                                q: "How can a 3PL improve shipping efficiency & reduce costs?",
                                a: "We leverage carrier volume discounts, strategic warehouse locations and advanced routing software to speed up delivery and lower carrier charges."
                            },
                            {
                                q: "What should I consider when choosing a 3PL partner?",
                                a: "Look for integration capabilities, UK warehouse locations, scalability, pricing transparency and excellent customer support."
                            }
                        ].map((faq, idx) => (
                            <div key={idx} className="group border border-slate-200 sharp-edge p-8 hover:bg-slate-50 transition-all shadow-sm">
                                <h4 className="text-lg font-bold text-slate-900 uppercase tracking-tight mb-4 flex justify-between items-center group-hover:text-blue-700 transition-colors">
                                    {faq.q}
                                </h4>
                                <p className="text-slate-500 text-sm font-medium leading-relaxed group-hover:text-slate-600 transition-colors">{faq.a}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </SectionWrapper>

            {/* 9️⃣ CONTACT & LEAD GENERATION SECTION */}
            <SectionWrapper id="contact" className="bg-white pb-48">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
                    <div>
                        <div className="inline-flex items-center gap-3 px-4 py-2 bg-orange-500/10 border border-orange-500/20 sharp-edge mb-10">
                            <Phone className="w-4 h-4 text-orange-600" />
                            <span className="text-[11px] font-bold tracking-[0.2em] text-orange-600 uppercase">CONTACT 3PL SOLUTION UK</span>
                        </div>
                        <h2 className="section-title uppercase">
                            Connect with <br /> <span className="text-orange-500">Our Logistics Team.</span>
                        </h2>
                        <p className="section-subtitle mb-12">
                            Our team is here to help you streamline fulfilment, optimise operations, and build a logistics strategy tailored to your business.
                        </p>

                        <div className="space-y-10">
                            <div className="flex gap-8 group">
                                <div className="w-16 h-16 bg-slate-50 border border-slate-200 flex items-center justify-center sharp-edge group-hover:border-orange-500 transition-colors shadow-sm">
                                    <Globe className="w-6 h-6 text-blue-700" />
                                </div>
                                <div>
                                    <p className="text-[11px] font-bold tracking-widest text-slate-400 uppercase mb-2">Location</p>
                                    <p className="text-xl font-bold uppercase text-slate-900">United Kingdom</p>
                                </div>
                            </div>
                            <div className="flex gap-8 group">
                                <div className="w-16 h-16 bg-slate-50 border border-slate-200 flex items-center justify-center sharp-edge group-hover:border-orange-500 transition-colors shadow-sm">
                                    <Phone className="w-6 h-6 text-blue-700" />
                                </div>
                                <div>
                                    <p className="text-[11px] font-bold tracking-widest text-slate-400 uppercase mb-2">Direct Line</p>
                                    <p className="text-xl font-bold uppercase text-slate-900">+44 (0) 000 000 0000</p>
                                </div>
                            </div>
                            <div className="flex gap-8 group">
                                <div className="w-16 h-16 bg-slate-50 border border-slate-200 flex items-center justify-center sharp-edge group-hover:border-orange-500 transition-colors shadow-sm">
                                    <Zap className="w-6 h-6 text-blue-700" />
                                </div>
                                <div>
                                    <p className="text-[11px] font-bold tracking-widest text-slate-400 uppercase mb-2">Email Inquiry</p>
                                    <p className="text-xl font-bold uppercase text-slate-900">HELLO@3PLSOLUTION.CO.UK</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="relative">
                        <div className="bg-white border border-slate-200 p-12 sharp-edge shadow-2xl relative z-10 overflow-hidden group">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-slate-50 blur-3xl group-hover:bg-slate-100 transition-all"></div>
                            <div className="flex items-center justify-between mb-12">
                                <h3 className="text-xl font-bold uppercase tracking-tight text-slate-900">Project Brief</h3>
                                <div className="w-10 h-10 bg-slate-50 border border-slate-200 flex items-center justify-center sharp-edge">
                                    <ExternalLink className="w-4 h-4 text-slate-400" />
                                </div>
                            </div>
                            <form className="space-y-8">
                                <div className="grid grid-cols-2 gap-8">
                                    <div className="space-y-3">
                                        <label className="text-[11px] font-bold tracking-widest uppercase text-slate-400">Contact Name</label>
                                        <input type="text" className="w-full bg-slate-50 border border-slate-200 sharp-edge p-5 focus:border-orange-500 outline-none transition-colors text-slate-900 text-sm font-medium" />
                                    </div>
                                    <div className="space-y-3">
                                        <label className="text-[11px] font-bold tracking-widest uppercase text-slate-400">Business Email</label>
                                        <input type="email" className="w-full bg-slate-50 border border-slate-200 sharp-edge p-5 focus:border-orange-500 outline-none transition-colors text-slate-900 text-sm font-medium" />
                                    </div>
                                </div>
                                <div className="space-y-3">
                                    <label className="text-[11px] font-bold tracking-widest uppercase text-slate-400">Company Information</label>
                                    <input type="text" className="w-full bg-slate-50 border border-slate-200 sharp-edge p-5 focus:border-orange-500 outline-none transition-colors text-slate-900 text-sm font-medium" />
                                </div>
                                <div className="space-y-3">
                                    <label className="text-[11px] font-bold tracking-widest uppercase text-slate-400">Requirements Detail</label>
                                    <textarea rows={4} className="w-full bg-slate-50 border border-slate-200 sharp-edge p-5 focus:border-orange-500 outline-none transition-colors text-slate-900 text-sm font-medium resize-none"></textarea>
                                </div>
                                <button className="btn-primary w-full text-sm font-bold tracking-widest py-6 group shadow-lg shadow-orange-500/20">
                                    GET A FREE QUOTE <ArrowRight className="inline ml-2 group-hover:translate-x-1 transition-transform" />
                                </button>
                            </form>
                        </div>
                        {/* Advanced Shadow Accent */}
                        <div className="absolute -inset-4 border border-orange-500/10 -z-10 sharp-edge pointer-events-none translate-x-4 translate-y-4"></div>
                    </div>
                </div>
            </SectionWrapper>

        </main>
    );
}
