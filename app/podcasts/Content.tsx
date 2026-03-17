import { ArrowUpRight } from "lucide-react";

export default function Content() {
    return (
        <section className="bg-[#141414] py-5 md:py-20 ">
            <div className="flex flex-col max-w-9xl lg:flex-row items-start lg:items-center justify-between px-6">

                <div className="flex flex-col w-full">
                    <div className="flex mt-6 lg:mt-[40px]">
                       <span className="bg-[#1A1A1A] text-white text-sm md:text-xs font-light px-4 py-2 rounded-sm border border-zinc-800">
                        Stay Informed with Fresh Content
                       </span>
                    </div>
                    <h2 className="text-white text-[58px] lg:text-[60px] py-3.5 font-medium tracking-tight leading-tight">
                        Latest Podcast Episodes
                    </h2>
                </div>
            </div>
        </section>
    )
}