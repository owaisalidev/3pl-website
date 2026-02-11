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

export default function Home() {
    return (
        <main className="min-h-screen grain bg-white text-slate-900">
            <Navbar />

            {/* 1️⃣ ENTERPRISE HERO SECTION */}
            <SectionWrapper
                className="pt-32 pb-20 border-none relative bg-cover bg-center overflow-hidden min-h-[90vh] flex items-center"
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=2000')" }}
                innerClassName="relative z-10 w-full"
            >
                {/* Clean Stage Background Overlay */}
                <div className="absolute inset-0 bg-slate-900/10 z-0"></div>

                <div className="relative z-10 max-w-7xl mx-auto w-full">
                    {/* The "Boxed" Container */}
                    <div className="bg-white/98 backdrop-blur-3xl p-10 md:p-16 lg:p-24 shadow-[0_100px_150px_-30px_rgba(0,0,0,0.2)] border border-white/40 sharp-edge flex flex-col lg:flex-row items-stretch gap-16 lg:gap-24 relative overflow-hidden">
                        {/* Material Accent */}
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 via-orange-400 to-transparent opacity-50"></div>

                        {/* Main Content Area */}
                        <div className="lg:w-[65%] flex flex-col justify-center">
                            <div className="inline-flex items-center gap-3 px-4 py-2 bg-orange-500/10 border border-orange-500/20 sharp-edge mb-10 w-fit">
                                <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                                <span className="text-[11px] font-bold tracking-[0.2em] text-orange-600 uppercase">PREMIUM UK FULFILLMENT HUB</span>
                            </div>

                            <h1 className="text-4xl md:text-5xl xl:text-6xl font-black tracking-tighter leading-[0.95] text-slate-900 uppercase">
                                STREAMLINE YOUR <br />
                                <span className="text-slate-900">UK FULFILLMENT & LOGISTICS</span> <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-400">WITH 3PL SOLUTION UK</span>
                            </h1>

                            <p className="mt-8 text-lg md:text-xl text-slate-700 max-w-2xl font-semibold leading-relaxed">
                                Expert 3PL services designed to help eCommerce brands scale, reduce costs, and deliver exceptional customer experiences.
                            </p>

                            <div className="mt-12 flex flex-wrap gap-6">
                                <a href="#contact" className="btn-primary py-4 px-10 text-center">
                                    GET A FREE QUOTE <ArrowRight className="w-5 h-5 ml-2" />
                                </a>
                                <a href="#contact" className="btn-secondary py-4 px-10 text-center">
                                    SPEAK WITH A LOGISTICS SPECIALIST
                                </a>
                            </div>
                        </div>

                        {/* Integrated Info Card */}
                        <div className="lg:w-[30%] flex items-center">
                            <div className="w-full card-premium bg-slate-50/50 border-slate-200/50 p-10 group relative transition-all duration-700 hover:bg-white hover:shadow-2xl">
                                <div className="absolute top-0 right-0 w-24 h-24 bg-orange-500/5 blur-3xl rounded-full"></div>
                                <div className="w-14 h-14 bg-orange-500/10 flex items-center justify-center sharp-edge mb-8">
                                    <Factory className="w-7 h-7 text-orange-500" />
                                </div>
                                <h3 className="text-xl font-bold mb-4 uppercase tracking-tight text-slate-900">UK Operations</h3>
                                <p className="text-sm text-slate-600 mb-8 leading-relaxed font-medium">Direct warehousing and distribution for global eCommerce brands.</p>
                                <div className="h-px w-full bg-slate-200/60 mb-8"></div>
                                <div className="flex items-center gap-3 text-xs font-bold tracking-widest text-blue-700">
                                    <ShieldCheck className="w-5 h-5" /> 100% COMPLIANCE
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </SectionWrapper>

            {/* 2️⃣ PLATFORM TRUST SECTION */}
            <div className="py-16 bg-slate-50 border-y border-slate-200/50">
                <div className="max-w-7xl mx-auto px-6 mb-10 text-center lg:text-left">
                    <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-slate-900 mb-2">
                        Trusted by Leading E-commerce Platforms
                    </h2>
                    <p className="text-slate-600 font-medium">
                        We integrate seamlessly with all major marketplaces and eCommerce platforms to simplify your fulfilment operations.
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
                            desc: "We connect directly with your online store, manage inventory, orders, picking, packing and shipping — freeing you up to grow your sales.",
                            icon: Zap
                        },
                        {
                            title: "Retail (B2B)",
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
                        Struggling with Your <br /> <span className="text-orange-500">Current Fulfillment Provider?</span>
                    </h2>
                    <p className="section-subtitle">
                        Operational bottlenecks are costing you more than just time. They are eroding your brand and eating your margins.
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
                        { title: "Hourly Labour Support", desc: "Flexible workforce for warehouse operations and special handling support.", icon: Users },
                        { title: "Cross Docking", desc: "Fast turnaround from inbound to outbound shipping with minimal storage dwell time.", icon: Ship },
                        { title: "Bundling & Kitting", desc: "Create multi-product bundles, promotional kits, and ready-to-sell packages.", icon: Boxes },
                        { title: "Storage & Warehousing", desc: "Secure storage with real-time inventory tracking and flexible storage terms.", icon: Factory },
                        { title: "Container Unloading", desc: "Professional container handling, palletizing and inventory reception.", icon: ArrowRightLeft },
                        { title: "Consulting Services", desc: "Supply chain optimisation, warehouse layout design and systems integration.", icon: BarChart3 }
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
                            End-to-End <br /> <span className="text-blue-700">Amazon FBA Prep & Fulfilment.</span>
                        </h2>

                        <div className="space-y-6">
                            {[
                                { title: "FBA Prep & Labeling", desc: "Precise FNSKU application and compliant carton labeling." },
                                { title: "Seller Fulfilled Prime", desc: "Meet the highest delivery standards with our SFP capabilities." },
                                { title: "Hazardous Materials", desc: "Certified handling for specialized product categories." }
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
                    <div>
                        <div className="space-y-4 mb-12">
                            {[
                                "Over a decade of Amazon FBA experience",
                                "ASIN & FNSKU sticker placement",
                                "FBA pallet labelling & shipment creation",
                                "Pick, pack and dispatch fulfilment",
                                "Long-term warehousing for bulk inventory"
                            ].map((point, i) => (
                                <div key={i} className="flex items-center gap-4 text-slate-600 font-medium">
                                    <Check className="w-5 h-5 text-blue-700" />
                                    <span>{point}</span>
                                </div>
                            ))}
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
                        Clear pricing you can trust — no hidden fees.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                    {/* TABLE 1: 2-STEP DROP SHIPPING */}
                    <div className="card-premium p-0 bg-white shadow-sm overflow-hidden">
                        <div className="px-6 py-4 bg-slate-900 flex items-center gap-3">
                            <Ship className="w-4 h-4 text-orange-400" />
                            <h3 className="text-xs font-bold uppercase tracking-widest text-white">2-Step Drop Shipping</h3>
                        </div>
                        <table className="w-full text-xs">
                            <thead className="bg-slate-50 border-b border-slate-200">
                                <tr>
                                    <th className="px-6 py-3 text-left font-bold text-slate-400 uppercase tracking-tighter">Box Size</th>
                                    <th className="px-6 py-3 text-right font-bold text-slate-400 uppercase tracking-tighter">Price</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100">
                                {[
                                    { s: "6×4×4", p: "£0.84" },
                                    { s: "9×4×4", p: "£0.94" },
                                    { s: "10×7×4", p: "£1.24" },
                                    { s: "12×12×15", p: "£2.40" }
                                ].map((r, i) => (
                                    <tr key={i} className="hover:bg-slate-50/50">
                                        <td className="px-6 py-3 font-medium text-slate-600">{r.s}</td>
                                        <td className="px-6 py-3 text-right font-bold text-slate-900">{r.p}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* TABLE 2: PROCESSING CHARGES */}
                    <div className="card-premium p-0 bg-white shadow-sm overflow-hidden">
                        <div className="px-6 py-4 bg-blue-700 flex items-center gap-3">
                            <RefreshCw className="w-4 h-4 text-white" />
                            <h3 className="text-xs font-bold uppercase tracking-widest text-white">Processing Charges</h3>
                        </div>
                        <table className="w-full text-xs">
                            <thead className="bg-slate-50 border-b border-slate-200">
                                <tr>
                                    <th className="px-6 py-3 text-left font-bold text-slate-400 uppercase tracking-tighter">Orders / Month</th>
                                    <th className="px-6 py-3 text-right font-bold text-slate-400 uppercase tracking-tighter">Price</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100">
                                {[
                                    { s: "0–1000", p: "£4.00" },
                                    { s: "1000+", p: "£3.00" }
                                ].map((r, i) => (
                                    <tr key={i} className="hover:bg-slate-50/50">
                                        <td className="px-6 py-3 font-medium text-slate-600">{r.s}</td>
                                        <td className="px-6 py-3 text-right font-bold text-slate-900">{r.p}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* TABLE 3: BOX CHARGES */}
                    <div className="card-premium p-0 bg-white shadow-sm overflow-hidden">
                        <div className="px-6 py-4 bg-orange-500 flex items-center gap-3">
                            <Box className="w-4 h-4 text-white" />
                            <h3 className="text-xs font-bold uppercase tracking-widest text-white">Box Charges</h3>
                        </div>
                        <table className="w-full text-xs">
                            <thead className="bg-slate-50 border-b border-slate-200">
                                <tr>
                                    <th className="px-6 py-3 text-left font-bold text-slate-400 uppercase tracking-tighter">Units/ASIN</th>
                                    <th className="px-6 py-3 text-right font-bold text-slate-400 uppercase tracking-tighter">Price</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100">
                                {[
                                    { s: "1–20", p: "£0.40" },
                                    { s: "21–100", p: "£0.55" },
                                    { s: "101–200", p: "£0.65" },
                                    { s: "201–500", p: "£0.70" },
                                    { s: "501–999", p: "£0.75" },
                                    { s: "1000+", p: "£0.80" }
                                ].map((r, i) => (
                                    <tr key={i} className="hover:bg-slate-50/50">
                                        <td className="px-6 py-3 font-medium text-slate-600">{r.s}</td>
                                        <td className="px-6 py-3 text-right font-bold text-slate-900">{r.p}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* TABLE 4: LABELING SERVICES */}
                    <div className="card-premium p-0 bg-white shadow-sm overflow-hidden">
                        <div className="px-6 py-4 bg-slate-800 flex items-center gap-3">
                            <Tag className="w-4 h-4 text-orange-400" />
                            <h3 className="text-xs font-bold uppercase tracking-widest text-white">Labeling Services</h3>
                        </div>
                        <table className="w-full text-xs">
                            <thead className="bg-slate-50 border-b border-slate-200">
                                <tr>
                                    <th className="px-6 py-3 text-left font-bold text-slate-400 uppercase tracking-tighter">Service</th>
                                    <th className="px-6 py-3 text-right font-bold text-slate-400 uppercase tracking-tighter">Price</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100">
                                {[
                                    { s: "Label Set (1)", p: "£0.80" },
                                    { s: "Label Set (2)", p: "£1.00" },
                                    { s: "Polybagging (1 unit)", p: "£2.25" }
                                ].map((r, i) => (
                                    <tr key={i} className="hover:bg-slate-50/50">
                                        <td className="px-6 py-3 font-medium text-slate-600">{r.s}</td>
                                        <td className="px-6 py-3 text-right font-bold text-slate-900">{r.p}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* TABLE 5: CROSS DOCKING */}
                    <div className="card-premium p-0 bg-white shadow-sm overflow-hidden">
                        <div className="px-6 py-4 bg-blue-600 flex items-center gap-3">
                            <ArrowRightLeft className="w-4 h-4 text-white" />
                            <h3 className="text-xs font-bold uppercase tracking-widest text-white">Cross Docking & Pick Pack</h3>
                        </div>
                        <table className="w-full text-xs">
                            <thead className="bg-slate-50 border-b border-slate-200">
                                <tr>
                                    <th className="px-6 py-3 text-left font-bold text-slate-400 uppercase tracking-tighter">Service</th>
                                    <th className="px-6 py-3 text-right font-bold text-slate-400 uppercase tracking-tighter">Price</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100">
                                {[
                                    { s: "Cross Dock (box)", p: "£40.00" },
                                    { s: "Pick/Pack (box)", p: "£40.00" },
                                    { s: "Cross Dock (pallet)", p: "£4.00" },
                                    { s: "Pick/Pack (pallet)", p: "£4.00" }
                                ].map((r, i) => (
                                    <tr key={i} className="hover:bg-slate-50/50">
                                        <td className="px-6 py-3 font-medium text-slate-600">{r.s}</td>
                                        <td className="px-6 py-3 text-right font-bold text-slate-900">{r.p}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* TABLE 6: STORAGE SERVICES */}
                    <div className="card-premium p-0 bg-white shadow-sm overflow-hidden">
                        <div className="px-6 py-4 bg-slate-700 flex items-center gap-3">
                            <Factory className="w-4 h-4 text-orange-400" />
                            <h3 className="text-xs font-bold uppercase tracking-widest text-white">Storage Services</h3>
                        </div>
                        <table className="w-full text-xs">
                            <thead className="bg-slate-50 border-b border-slate-200">
                                <tr>
                                    <th className="px-6 py-3 text-left font-bold text-slate-400 uppercase tracking-tighter">Type</th>
                                    <th className="px-6 py-3 text-right font-bold text-slate-400 uppercase tracking-tighter">Price</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100">
                                {[
                                    { s: "1 Pallet / Month", p: "£65.00" },
                                    { s: "Half Pallet", p: "£40.00" }
                                ].map((r, i) => (
                                    <tr key={i} className="hover:bg-slate-50/50">
                                        <td className="px-6 py-3 font-medium text-slate-600">{r.s}</td>
                                        <td className="px-6 py-3 text-right font-bold text-slate-900">{r.p}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* TABLE 7: CONTAINER UNLOADING */}
                    <div className="card-premium p-0 bg-white shadow-sm overflow-hidden">
                        <div className="px-6 py-4 bg-orange-600 flex items-center gap-3">
                            <Ship className="w-4 h-4 text-white" />
                            <h3 className="text-xs font-bold uppercase tracking-widest text-white">Container Unloading</h3>
                        </div>
                        <table className="w-full text-xs">
                            <thead className="bg-slate-50 border-b border-slate-200">
                                <tr>
                                    <th className="px-6 py-3 text-left font-bold text-slate-400 uppercase tracking-tighter">Container</th>
                                    <th className="px-6 py-3 text-right font-bold text-slate-400 uppercase tracking-tighter">Rate</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100">
                                {[
                                    { s: "20ft Container", p: "£350.00" },
                                    { s: "40ft Container", p: "£500.00" }
                                ].map((r, i) => (
                                    <tr key={i} className="hover:bg-slate-50/50">
                                        <td className="px-6 py-3 font-medium text-slate-600">{r.s}</td>
                                        <td className="px-6 py-3 text-right font-bold text-slate-900">{r.p}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* TABLE 8: LABOUR & FBM */}
                    <div className="card-premium p-0 bg-white shadow-sm overflow-hidden">
                        <div className="px-6 py-4 bg-blue-800 flex items-center gap-3">
                            <Users className="w-4 h-4 text-white" />
                            <h3 className="text-xs font-bold uppercase tracking-widest text-white">Labour & FBM Services</h3>
                        </div>
                        <table className="w-full text-xs">
                            <thead className="bg-slate-50 border-b border-slate-200">
                                <tr>
                                    <th className="px-6 py-3 text-left font-bold text-slate-400 uppercase tracking-tighter">Service</th>
                                    <th className="px-6 py-3 text-right font-bold text-slate-400 uppercase tracking-tighter">Price</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100">
                                {[
                                    { s: "Warehouse Labour", p: "£35 / hr" },
                                    { s: "FBM Charges (Up to 8x8x8)", p: "£4.99" }
                                ].map((r, i) => (
                                    <tr key={i} className="hover:bg-slate-50/50">
                                        <td className="px-6 py-3 font-medium text-slate-600">{r.s}</td>
                                        <td className="px-6 py-3 text-right font-bold text-slate-900">{r.p}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="mt-12 p-8 border border-slate-200 sharp-edge bg-white flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="flex items-center gap-4">
                        <Clock className="w-6 h-6 text-blue-700" />
                        <div>
                            <div className="text-[10px] font-bold tracking-widest text-slate-400 uppercase">Operational Hours</div>
                            <div className="text-lg font-bold text-slate-900">Monday – Saturday: 9:00 AM – 5:00 PM</div>
                        </div>
                    </div>
                    <a href="#contact" className="btn-primary">GET A CUSTOM QUOTE</a>
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
