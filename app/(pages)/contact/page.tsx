import Header from "@/app/components/ui/Header";
import {ContactInfo} from "@/app/(pages)/contact/ContactInfo";
import {ContactForm} from "@/app/(pages)/contact/ContactForm";
import {FaqSection} from "@/app/(pages)/contact/FaqSection";
import Footer from "@/app/components/ui/Footer";
import FutureTech from "@/app/(pages)/Home/FutureTech";

export default function ContactPage() {
    return (
        <div className="min-h-screen bg-[#050505] text-white">
            <Header />

            <main className="relative z-10">
                <ContactInfo />
                <ContactForm />
                <FaqSection />
                <FutureTech/>
            </main>

            <Footer />
        </div>
    );
}