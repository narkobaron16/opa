import Header from "@/app/components/ui/Header";
import World from "@/app/resources/World"
import Details from "@/app/resources/Details";
import Computing from "@/app/resources/Computing";
import EbookSection from "@/app/resources/EbookSection";
import FutureTech from "@/app/components/ui/FutureTech";
import Footer from "@/app/components/ui/Footer";


export default function ResourcesPage() {
    return (
        <div>
            <Header />
            <World/>
            <Details />
            <Computing/>
            <EbookSection/>
            <FutureTech />
            <Footer />
        </div>
    )
}