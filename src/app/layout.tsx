import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: ["300", "400", "500", "700", "900"],
});

export const metadata: Metadata = {
  title: "3PL Solution UK | Streamline Your UK Fulfillment & Logistics",
  description: "Expert 3PL services designed to help eCommerce brands scale, reduce costs, and deliver exceptional customer experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${outfit.variable} font-sans antialiased bg-[#0A1A13] text-[#F5F5F5]`}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
