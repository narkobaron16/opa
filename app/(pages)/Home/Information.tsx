import { ArrowUpRight } from "lucide-react";

export default function Information() {
    return (
        <section className="bg-[#0A0A0A] py-10 md:py-20 lg:py-24">
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between px-6 lg:px-10">

                <div className="flex flex-col p-0 lg:p-10 w-full lg:w-auto">
                    <div className="flex mt-6 lg:mt-[40px]">
              <span className="bg-[#1A1A1A] text-white text-sm md:text-xs font-light px-4 py-2 rounded-sm border border-zinc-800">
                Your Gateway to In-Depth Information
              </span>
                    </div>
                    <h2 className="text-white text-3xl lg:text-[60px] py-3.5 font-medium tracking-tight leading-tight lg:max-w-[900px]">
                        Unlock Valuable Knowledge with FutureTech's Resources
                    </h2>
                </div>

                <div className="flex items-center justify-between w-full md:w-auto gap-2 mt-8 lg:m-[100px] bg-[#141414] border border-[#262626] py-3 px-5 rounded-xl hover:border-zinc-600 transition-all cursor-pointer group">
                    <button className="text-[#98989A] text-sm md:text-base lg:text-[18px] font-medium whitespace-nowrap">
                        View All Resources
                    </button>
                    <ArrowUpRight
                        size={20}
                        className="text-[#FFD11A] lg:w-[24px] lg:h-[24px] shrink-0"
                    />
                </div>

            </div>
        </section>
    )
}