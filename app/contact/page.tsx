'use client'
import Header from "@/app/components/ui/Header";
import ContactSection from "@/app/contact/ContactSection";
import ContactFaq from "@/app/contact/ContactFaq";
import Asked from "@/app/contact/Asked"
import FutureTech from "@/app/components/ui/FutureTech";
import Footer from "@/app/components/ui/Footer";

export default function ContactPage() {
    return (
        <div>
            <Header/>
            <ContactSection/>
            <ContactFaq/>
            <Asked/>
            <FutureTech />
            <Footer />
        </div>
    )
}
