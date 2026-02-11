import Navbar from "@/components/Navbar";
import SectionWrapper from "@/components/SectionWrapper";

export default function PrivacyPolicy() {
    return (
        <main className="min-h-screen grain bg-white text-slate-900">
            <Navbar />

            <SectionWrapper
                className="pt-40 pb-12 border-none relative bg-slate-50 overflow-hidden"
                innerClassName="relative z-10 w-full"
            >
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-black tracking-tighter text-slate-900 uppercase mb-4">
                        Privacy Policy
                    </h1>
                    <p className="text-slate-500 font-medium">Last Updated: October 2024</p>
                </div>
            </SectionWrapper>

            <SectionWrapper className="py-12">
                <div className="max-w-4xl mx-auto prose prose-slate prose-lg">
                    <p className="font-medium text-lg leading-relaxed text-slate-600 mb-8">
                        At 3PL Solution UK, we are committed to protecting your privacy and ensuring that your personal information is handled in a safe and responsible manner.
                    </p>

                    <h3 className="text-2xl font-bold text-slate-900 mb-4 uppercase tracking-tight">1. Information We Collect</h3>
                    <p className="text-slate-600 mb-6">
                        We may collect personal information such as your name, email address, phone number, and company details when you fill out a form on our website, request a quote, or contact our support team.
                    </p>

                    <h3 className="text-2xl font-bold text-slate-900 mb-4 uppercase tracking-tight">2. How We Use Your Information</h3>
                    <p className="text-slate-600 mb-6">
                        We use the information we collect to provide, operate, and maintain our services, to communicate with you, to send you updates and promotional materials (if you have opted in), and to improve our website and services.
                    </p>

                    <h3 className="text-2xl font-bold text-slate-900 mb-4 uppercase tracking-tight">3. Data Security</h3>
                    <p className="text-slate-600 mb-6">
                        We implement a variety of security measures to maintain the safety of your personal information. However, no method of transmission over the Internet or method of electronic storage is 100% secure.
                    </p>

                    <h3 className="text-2xl font-bold text-slate-900 mb-4 uppercase tracking-tight">4. Third-Party Disclosure</h3>
                    <p className="text-slate-600 mb-6">
                        We do not sell, trade, or otherwise transfer to outside parties your personally identifiable information unless we provide users with advance notice. This does not include website hosting partners and other parties who assist us in operating our website, conducting our business, or serving our users.
                    </p>

                    <h3 className="text-2xl font-bold text-slate-900 mb-4 uppercase tracking-tight">5. Contact Us</h3>
                    <p className="text-slate-600 mb-6">
                        If you have any questions regarding this privacy policy, you may contact us using the information on our Contact page.
                    </p>
                </div>
            </SectionWrapper>
        </main>
    );
}
