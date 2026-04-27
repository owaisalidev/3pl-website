export interface PricingTier {
    name: string;
    range: string;
    savings?: string;
}

export interface PricingRow {
    service: string;
    prices: string[]; // Order: T1, T2, T3, T4, T5
}

export interface PricingCategory {
    category: string;
    services: PricingRow[];
}

export const pricingTiers: PricingTier[] = [
    { name: "Tier 1", range: "1-100 Per Month", savings: "" },
    { name: "Tier 2", range: "101-500 Per Month", savings: "10% SAVE" },
    { name: "Tier 3", range: "501-1000 Per Month", savings: "15% SAVE" },
    { name: "Tier 4", range: "1001-2000 Per Month", savings: "20% SAVE" },
    { name: "Tier 5", range: "2000+ Per Month", savings: "30% SAVE" },
];

export const pricingData: PricingCategory[] = [
    {
        category: "Fulfillment & Prep",
        services: [
            { service: "FNSKU labels", prices: ["£0.30", "£0.27", "£0.26", "£0.24", "£0.21"] },
            { service: "Prep (Poly Box, Labeling, Pick & Pack) - Small/Standard", prices: ["£1.20", "£1.08", "£1.02", "£0.96", "£0.84"] },
            { service: "Prep (Poly Box, Labeling, Pick & Pack) - Oversize", prices: ["£1.50", "£1.35", "£1.28", "£1.20", "£1.05"] },
            { service: "Inspection per Unit", prices: ["£0.15", "£0.14", "£0.13", "£0.12", "£0.11"] },
            { service: "Bundling (up to 3 units) - Cost per unit", prices: ["£0.09", "£0.08", "£0.08", "£0.072", "£0.06"] },
        ],
    },
    {
        category: "Packaging Materials",
        services: [
            { service: "Bubble Wrap - Small/Medium", prices: ["£0.30", "£0.27", "£0.26", "£0.24", "£0.21"] },
            { service: "Bubble Wrap - Large", prices: ["£0.45", "£0.41", "£0.38", "£0.36", "£0.32"] },
            { service: "New Carton Box - Small", prices: ["£0.40", "£0.36", "£0.34", "£0.32", "£0.28"] },
            { service: "New Carton Box - Medium", prices: ["£0.55", "£0.50", "£0.47", "£0.44", "£0.39"] },
            { service: "New Carton Box - Large", prices: ["£0.85", "£0.77", "£0.72", "£0.68", "£0.60"] },
            { service: "Fragile Taping", prices: ["£0.10", "£0.09", "£0.09", "£0.08", "£0.07"] },
            { service: "Box Filling - Small/Medium", prices: ["£0.40", "£0.36", "£0.34", "£0.32", "£0.28"] },
            { service: "Box Filling - Large", prices: ["£0.55", "£0.50", "£0.47", "£0.44", "£0.39"] },
        ],
    },
    {
        category: "Returns & Storage",
        services: [
            { service: "Returns Handling", prices: ["£0.40", "£0.36", "£0.34", "£0.32", "£0.28"] },
            { service: "Storage (per Cubic Meter / Month)", prices: ["£10.00", "£10.00", "£10.00", "£10.00", "£10.00"] },
        ],
    },
];

export const additionalCharges = [
    { name: "Ad-Hoc Requirements", price: "Contact Us" },
    { name: "Dangerous Products Handling", price: "NOT HANDLED" },
];

export const keyInformation = [
    "1st month storage is FREE",
    "We do not handle dangerous products",
    "Invoices issued weekly",
    "VAT applies to all prices",
    "All prices exclude VAT",
    "For special requirements, please contact us",
];

