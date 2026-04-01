import Header from "@/app/components/ui/Header";
import NewsHero from "@/app/(pages)/news/NewsHero";
import Discover from "@/app/(pages)/news/Discover"
import Blog from "@/app/(pages)/news/Blog";
import Videos from "@/app/(pages)/news/Videos"
import VideoNews from "@/app/(pages)/news/VideoNews"
import FutureTech from "@/app/(pages)/Home/FutureTech";
import Footer from "@/app/components/ui/Footer";

export default function NewsPage() {
    return (
        <main className="bg-[#0F0F0F] min-h-screen">
            <Header />
            <NewsHero />
            <Discover />
            <Blog />
            <Videos />
            <VideoNews />
            <FutureTech />
            <Footer />
        </main>
    )
}