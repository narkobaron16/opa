import Header from "@/app/components/ui/Header";
import NewsHero from "@/app/news/NewsHero";
import Discover from "@/app/news/Discover"
import Blog from "@/app/news/Blog";
import Videos from "@/app/news/Videos"
import VideoNews from "@/app/news/VideoNews"
import FutureTech from "@/app/components/ui/FutureTech";
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