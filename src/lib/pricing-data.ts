export interface PricingTier {
    name: string;
    range: string;
}

export interface PricingRow {
    service: string;
    prices: string[]; // Order: Starter, Growth, Professional, Enterprise
}

export interface PricingCategory {
    category: string;
    services: PricingRow[];
}

export const pricingTiers: PricingTier[] = [
    { name: "Starter", range: "0-250 Orders a Month" },
    { name: "Growth", range: "251-1000 Orders a Month" },
    { name: "Professional", range: "1001-2000 Orders a Month" },
    { name: "Enterprise", range: "2000+ Orders a Month" },
];

export const pricingData: PricingCategory[] = [
    {
        category: "Pick & Pack",
        services: [
            { service: "Order Pick Start", prices: ["£0.90", "£0.80", "£0.70", "£0.60"] },
            { service: "Per Units Picked", prices: ["£0.40", "£0.30", "£0.30", "£0.30"] },
            { service: "Marketing Material", prices: ["£0.20", "£0.20", "£0.20", "£0.20"] },
        ],
    },
    {
        category: "Goods In",
        services: [
            { service: "Carton", prices: ["£1.50", "£1.25", "£1.00", "£1.00"] },
            { service: "Pallet", prices: ["£5.00", "£5.00", "£5.00", "£5.00"] },
            { service: "20ft Container", prices: ["£300", "£280", "£250", "£225"] },
            { service: "40ft Container", prices: ["£400", "£380", "£350", "£325"] },
        ],
    },
    {
        category: "Storage",
        services: [
            { service: "Per Cubic Meter, Charged Daily", prices: ["£0.50", "£0.46", "£0.40", "£0.40"] },
        ],
    },
    {
        category: "Packaging",
        services: [
            { service: "Polybag", prices: ["Free", "Free", "Free", "Free"] },
            { service: "Pallet & Wrap", prices: ["£12.50", "£12.50", "£12.50", "£12.50"] },
        ],
    },
    {
        category: "Returns",
        services: [
            { service: "Single Item Return", prices: ["£2.50", "£2.50", "£2.50", "£2.50"] },
            { service: "Per additional items", prices: ["£0.50", "£0.50", "£0.50", "£0.50"] },
        ],
    },
];

export const additionalCharges = [
    { name: "Ad-Hoc Requirements", price: "" },
    { name: "FBA UPS Booking Per Carton", price: "£0.25" },
    { name: "Expedited Shipping", price: "£5" },
    { name: "Warehouse Labour Hourly", price: "£25" },
    { name: "IT Support Hourly", price: "£40" },
];

export const keyInformation = [
    "Invoices issued weekly",
    "Minimum invoice charge of £60",
    "VAT applies",
    "All Price Exclude VAT",
    "Prices Are Reviewed Annually & Subject To Change",
    "Payments Via GoCardless",
];
