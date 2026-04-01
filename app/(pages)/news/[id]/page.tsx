import Header from "@/app/components/ui/Header";
import Covid from "@/app/(pages)/news/[id]/Covid";
import SimilarNews from "@/app/(pages)/news/[id]/SimilarNews";
import FutureTech from "@/app/(pages)/Home/FutureTech";
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