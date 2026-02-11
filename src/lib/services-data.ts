import {
    Package,
    Box,
    Tag,
    Users,
    Ship,
    Boxes,
    Factory,
    ArrowRightLeft,
    BarChart3,
    ShieldCheck,
    Zap,
    Globe,
    LayoutDashboard,
    LucideIcon
} from "lucide-react";

export interface Service {
    id: string;
    title: string;
    slug: string;
    shortDesc: string;
    longDesc: string;
    icon: LucideIcon;
    features: string[];
    benefit: string;
}

export const servicesData: Service[] = [
    {
        id: "fulfillment",
        title: "Order Fulfillment",
        slug: "order-fulfillment",
        shortDesc: "Efficient picking, packing and shipping to customers across the UK and worldwide.",
        longDesc: "Our core order fulfillment service is designed for speed and accuracy. We integrate directly with your eCommerce platform to automatically import orders. Our team then picks, packs, and ships your products with 99.9% accuracy, ensuring your customers receive the right items on time, every time.",
        icon: Package,
        features: ["Same-day dispatch", "99.9% picking accuracy", "Real-time inventory syncing", "Branded packaging options"],
        benefit: "Scale your business without worrying about logistics bottlenecks."
    },
    {
        id: "poly-bagging",
        title: "Poly Bagging",
        slug: "poly-bagging",
        shortDesc: "Protect your products with custom poly bagging and compliant packing.",
        longDesc: "We offer professional poly bagging services to protect your items from dust, moisture, and damage during storage and transit. This is essential for apparel, plush toys, and other sensitive items, ensuring they arrive in pristine condition.",
        icon: Box,
        features: ["Marketplace compliant bags", "Suffocation warning labels", "Various sizes available", "Protective sealing"],
        benefit: "Ensure product integrity and meet strict marketplace packaging requirements."
    },
    {
        id: "labeling",
        title: "Labeling & Barcode Services",
        slug: "labeling-services",
        shortDesc: "Marketplace and carrier-compliant labeling, including FNSKU, ASIN, QR & barcodes.",
        longDesc: "Avoid compliance issues with our precise labeling services. We apply FNSKU, ASIN, UPC, and carrier labels to your products and cartons. Whether you need re-labeling for Amazon FBA or barcode application for retail, we handle it all with precision.",
        icon: Tag,
        features: ["FNSKU & ASIN labeling", "Barcode generation & printing", "Carton & pallet labels", "Correction of labeling errors"],
        benefit: "Eliminate rejection risks at Amazon fulfillment centers and other marketplaces."
    },
    {
        id: "labour",
        title: "Hourly Labour Support",
        slug: "hourly-labour",
        shortDesc: "Flexible workforce for warehouse operations and special handling support.",
        longDesc: "Need extra hands for a special project? Our skilled warehouse team is available for hourly hire. From quality control inspections and intricate assembly to re-boxing and inventory audits, we provide the flexible labor you need without the overhead of hiring permanent staff.",
        icon: Users,
        features: ["Quality control inspections", "Product assembly", "Re-packaging & re-work", "Inventory audits"],
        benefit: "Flexible, scalable labor on demand for ad-hoc logistical tasks."
    },
    {
        id: "cross-docking",
        title: "Cross Docking",
        slug: "cross-docking",
        shortDesc: "Fast turnaround from inbound to outbound shipping with minimal storage dwell time.",
        longDesc: "Accelerate your supply chain with our cross-docking solutions. We receive your bulk shipments, sort them, and immediately reload them for outbound distribution—skipping long-term storage entirely. This reduces handling costs and speeds up delivery to your customers or retailers.",
        icon: Ship,
        features: ["Rapid receiving & sorting", "Immediate outbound transfer", "Reduced storage costs", "Container breakdown"],
        benefit: "maximize supply chain velocity and minimize inventory holding costs."
    },
    {
        id: "bundling",
        title: "Bundling & Kitting",
        slug: "bundling-kitting",
        shortDesc: "Create multi-product bundles, promotional kits, and ready-to-sell packages.",
        longDesc: "Increase your average order value with our kitting and bundling services. We assemble multiple SKUs into a single sellable unit, perfect for subscription boxes, gift sets, or promotional campaigns. We handle the complexity so you can offer more value to your customers.",
        icon: Boxes,
        features: ["Custom kit assembly", "Subscription box fulfillment", "Promotional packaging", "Multi-SKU bundling"],
        benefit: "Drive sales with attractive product bundles and seamless subscription fulfillment."
    },
    {
        id: "storage",
        title: "Storage & Warehousing",
        slug: "storage-warehousing",
        shortDesc: "Secure storage with real-time inventory tracking and flexible storage terms.",
        longDesc: "Our secure, modern warehousing facilities offer flexible storage solutions for businesses of all sizes. With 24/7 security and climate-controlled options, your inventory is safe with us. Pay only for the space you use, with no long-term lease commitments.",
        icon: Factory,
        features: ["Secure, monitored facility", "Flexible pallet & shelf storage", "Real-time stock visibility", "Scalable space based on demand"],
        benefit: "Cost-effective, secure storage that scales with your inventory levels."
    },
    {
        id: "container",
        title: "Container Unloading",
        slug: "container-unloading",
        shortDesc: "Professional container handling, palletizing and inventory reception.",
        longDesc: "We expertly handle the arrival of your 20ft and 40ft containers. our team efficiently unloads, palletizes, wraps, and enters your stock into inventory. We ensure swift turnaround times so your goods are ready for sale as quickly as possible.",
        icon: ArrowRightLeft,
        features: ["20ft & 40ft container handling", "Palletizing & shrink wrapping", "Damage inspection", "Fast inventory intake"],
        benefit: "Streamline your inbound logistics with professional container destuffing."
    },
    {
        id: "consulting",
        title: "Consulting Services",
        slug: "consulting-services",
        shortDesc: "Supply chain optimisation, warehouse layout design and systems integration.",
        longDesc: "Leverage our decades of logistics expertise to optimize your supply chain. We offer consulting on inventory management, warehouse layout, systems integration, and shipping strategy to help you reduce costs and improve efficiency across your entire operation.",
        icon: BarChart3,
        features: ["Supply chain analysis", "Systems integration advice", "Shipping cost reduction", "Process optimization"],
        benefit: "Expert guidance to transform your logistics into a competitive advantage."
    }
];
