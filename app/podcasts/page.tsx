import Header from "@/app/components/ui/Header";
import PodcastsSection from "@/app/podcasts/PodcastsSection";
import PodcastCard from "@/app/podcasts/PodcastCard";
import Content from "@/app/podcasts/Content";
import PodcastGrid from "@/app/podcasts/PodcastGrid";
import FutureTech from "@/app/components/ui/FutureTech";
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