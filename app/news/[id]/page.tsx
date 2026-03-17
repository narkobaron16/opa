import Header from "@/app/components/ui/Header";
import Covid from "@/app/news/[id]/Covid";
import SimilarNews from "@/app/news/[id]/SimilarNews";
import FutureTech from "@/app/components/ui/FutureTech";
import Footer from "@/app/components/ui/Footer";

export default function Covid19VariantsPage() {
    return (
        <>
            <Header />
            <Covid />
            <SimilarNews/>
            <FutureTech />
            <Footer />
        </>
    );
}