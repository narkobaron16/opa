import Image from "next/image"; // Добавили импорт
import Header from "@/app/components/ui/Header";
import HeroSection from "@/app/(pages)/Home/HeroSection";
import FeaturesHeader from "@/app/(pages)/Home/FeaturesHeader";
import BlogSection from "@/app/(pages)/Home/BlogSection";
import Trove from "@/app/(pages)/Home/Trove";
import CategoryFilter from "@/app/(pages)/Home/CategoryFilter";
import Information from "@/app/(pages)/Home/Information";
import EbooksSection from "@/app/(pages)/Home/EbooksSection";
import Readers from "@/app/(pages)/Home/Readers";
import Constants from "@/app/(pages)/Home/Constants";
import FutureTech from "@/app/(pages)/Home/FutureTech";
import Footer from "@/app/components/ui/Footer";

export default function HomePage() {
    return (
        <div className="min-h-screen bg-white dark:bg-black">
            <Header />
            <main className="flex flex-col items-center">
                <HeroSection />
                <FeaturesHeader />
                <BlogSection />
                <Trove />
                <CategoryFilter />
                <Information />
                <EbooksSection />
                <Readers />
                <Constants />
                <FutureTech />

                {/* Секция из входящих изменений (если она нужна) */}
                <div className="py-20 flex flex-col items-center gap-6">
                    <Image
                        className="dark:invert"
                        src="/next.svg"
                        alt="Next.js logo"
                        width={100}
                        height={20}
                        priority
                    />
                    <h1 className="text-3xl font-semibold text-black dark:text-zinc-50">
                        Project Started
                    </h1>
                </div>
            </main>
            <Footer />
        </div>
    );
}