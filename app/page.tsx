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

<<<<<<< HEAD
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
=======
export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={100}
          height={20}
          priority
        />
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            fuck get started, edit the page.tsx file.
          </h1>
          <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            Looking for a starting point or more instructions? Head over to{" "}
            <a
              href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              className="font-medium text-zinc-950 dark:text-zinc-50"
            >
              Templates
            </a>{" "}
            or the{" "}
            <a
              href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              className="font-medium text-zinc-950 dark:text-zinc-50"
            >
              Learning
            </a>{" "}
            center.
          </p>
>>>>>>> b291eefeb2dacb7d749cdd4240d7080584d63b55
        </div>
    )
}