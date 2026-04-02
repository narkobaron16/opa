import Header from "@/app/components/ui/Header";
import PodcastsSection from "@/app/(pages)/podcasts/PodcastsSection";
import PodcastCard from "@/app/(pages)/podcasts/PodcastCard";
import Content from "@/app/(pages)/podcasts/Content";
import PodcastGrid from "@/app/(pages)/podcasts/PodcastGrid";
import FutureTech from "@/app/(pages)/Home/FutureTech";
import Footer from "@/app/components/ui/Footer";

export default function Podcasts() {
    return (
        <div>
         <Header />
         <PodcastsSection />
         <PodcastCard />
          <Content />
          <PodcastGrid/>
         <FutureTech />
         <Footer />
        </div>
    )
}