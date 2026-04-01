import Header from "@/app/components/ui/Header";
import HeroSection from "@/app/components/ui/HeroSection";
import FeaturesHeader from "@/app/components/ui/FeaturesHeader"
import BlogSection from "@/app/components/ui/BlogSection"
import Trove from "@/app/components/ui/Trove";
import CategoryFilter from "@/app/components/ui/CategoryFilter";
import Information from "@/app/components/ui/Information";
import EbooksSection from "@/app/components/ui/EbooksSection";
import Readers from "@/app/components/ui/Readers";
import Constants from "@/app/components/ui/Constants";
import FutureTech from "@/app/components/ui/FutureTech";
import Footer from "@/app/components/ui/Footer";

export default function HomePage() {
    return (
        <div>
            <Header/>
            <HeroSection />
            <FeaturesHeader />
            <BlogSection />
            <Trove />
            <CategoryFilter />
            <Information />
            <EbooksSection/>
            <Readers />
            <Constants/>
            <FutureTech />
            <Footer />
        </div>
    )
}