
export default function Details() {
    return (
        <section className="bg-black py-5 md:py-20 ">
            <div className="flex flex-col max-w-9xl lg:flex-row items-start lg:items-center justify-between px-6">

                <div className="flex flex-col p-5 w-full">
                    <div className="flex mt-6 lg:mt-[40px]">
                       <span className="bg-[#1A1A1A] text-white text-sm md:text-xs font-light px-4 py-2 rounded-sm border border-zinc-800">
                        Dive into the Details
                       </span>
                    </div>
                    <h2 className="text-white text-[58px] lg:text-[60px] py-3.5 font-medium tracking-tight leading-tight">
                        In-Depth Reports and Analysis
                    </h2>
                </div>
                <div className="flex  md:flex-nowrap p-1.5 items-center justify-center gap-1.5 bg-[#141414] border border-[#262626] rounded-xl mx-auto">
                    <button className="text-white text-xs md:text-base font-medium bg-[#1A1A1A] border border-[#262626] py-2.5 px-4 md:py-3 md:px-6 rounded-lg transition-all cursor-pointer whitespace-nowrap">
                        Whitepapers
                    </button>
                    <button className="text-[#98989A] text-xs md:text-base font-medium py-2.5 px-4 md:py-3 md:px-6 hover:text-white transition-all cursor-pointer whitespace-nowrap">
                        Ebooks
                    </button>
                    <button className="text-[#98989A] text-xs md:text-base font-medium py-2.5 px-4 md:py-3 md:px-6 hover:text-white transition-all cursor-pointer whitespace-nowrap">
                        Reports
                    </button>
                </div>
            </div>
        </section>
    )
}