
import Image from "next/image";

export default function BlogSection() {
 const users = [
     {id: 1, src:"/blog/Icon1.png"},
     {id: 2, src:"/blog/Icon2.png"},
 ];
        return (
            <section className="flex flex-col bg-black ">
                <div className="flex flex-col lg:flex-row w-full ">
                    <div className="flex flex-col border-b lg:border-r lg:border-b-2 border-gray-200/5 w-full lg:w-1/2 p-6 md:p-10 lg:p-20">
                        <Image src="/blog/Icon1.png" alt="" width={60} height={60} />
                        <h2 className="text-white font-medium text-2xl md:text-3xl lg:text-[40px] mt-4">Future Technology Blog</h2>
                        <p className="text-sm text-gray-500 mt-2">Stay informed with our blog section dedicated to future technology.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6 w-full lg:w-1/2 p-6 md:p-10 lg:p-20 border-b border-gray-200/5">
                        <div className="bg-[#1A1A1A] border border-[#262626] rounded-xl p-6 lg:p-8 hover:border-gray-600 transition-colors">
                            <h3 className="text-white text-lg md:text-2xl font-medium mb-2">Quantity</h3>
                            <p className="text-[#98989A] text-sm leading-relaxed">Over 1,000 articles on emerging tech trends and breakthroughs.</p>
                        </div>

                        <div className="bg-[#1A1A1A] border border-[#262626] rounded-xl p-6 lg:p-8 hover:border-gray-600 transition-colors">
                            <h3 className="text-white text-lg md:text-2xl font-medium mb-2">Variety</h3>
                            <p className="text-[#98989A] text-sm leading-relaxed">Articles cover fields like AI, robotics, biotechnology, and more.</p>
                        </div>

                        <div className="bg-[#1A1A1A] border border-[#262626] rounded-xl p-6 lg:p-8 hover:border-gray-600 transition-colors">
                            <h3 className="text-white text-lg md:text-2xl font-medium mb-2">Frequency</h3>
                            <p className="text-[#98989A] text-sm leading-relaxed">Fresh content added daily to keep you up to date.</p>
                        </div>

                        <div className="bg-[#1A1A1A] border border-[#262626] rounded-xl p-6 lg:p-8 hover:border-gray-600 transition-colors">
                            <h3 className="text-white text-lg md:text-2xl font-medium mb-2">Authoritative</h3>
                            <p className="text-[#98989A] text-sm leading-relaxed">Written by our team of tech experts and industry professionals.</p>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row w-full">
                    <div className="flex flex-col border-b lg:border-r lg:border-b-0 border-gray-200/5 w-full lg:w-1/2 p-6 md:p-10 lg:p-20">
                        <Image src="/blog/Icon2.png" alt="" width={60} height={60} />
                        <h2 className="text-white font-medium text-2xl md:text-3xl lg:text-[40px] mt-4">Research Insights Blogs</h2>
                        <p className="text-sm text-gray-500 mt-2">Dive deep into future technology concepts with our research section.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6 w-full lg:w-1/2 p-6 md:p-10 lg:p-20">
                        <div className="bg-[#1A1A1A] border border-[#262626] rounded-xl p-6 lg:p-8 hover:border-gray-600 transition-colors">
                            <h3 className="text-white text-lg md:text-2xl font-medium mb-2">Depth</h3>
                            <p className="text-[#98989A] text-sm leading-relaxed">500+ research articles for in-depth understanding.</p>
                        </div>

                        <div className="bg-[#1A1A1A] border border-[#262626] rounded-xl p-6 lg:p-8 hover:border-gray-600 transition-colors">
                            <h3 className="text-white text-lg md:text-2xl font-medium mb-2">Graphics</h3>
                            <p className="text-[#98989A] text-sm leading-relaxed">Visual aids and infographics to enhance comprehension.</p>
                        </div>

                        <div className="bg-[#1A1A1A] border border-[#262626] rounded-xl p-6 lg:p-8 hover:border-gray-600 transition-colors">
                            <h3 className="text-white text-lg md:text-2xl font-medium mb-2">Trends</h3>
                            <p className="text-[#98989A] text-sm leading-relaxed">Explore emerging trends in future technology research.</p>
                        </div>

                        <div className="bg-[#1A1A1A] border border-[#262626] rounded-xl p-6 lg:p-8 hover:border-gray-600 transition-colors">
                            <h3 className="text-white text-lg md:text-2xl font-medium mb-2">Contributors</h3>
                            <p className="text-[#98989A] text-sm leading-relaxed">Contributions from tech researchers and academics.</p>
                        </div>
                    </div>
                </div>
            </section>
        )


};