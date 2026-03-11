import { ArrowUpRight } from "lucide-react";

export default function HeroSection() {
    return (
        <div className="bg-black text-white min-h-screen font-sans selection:bg-yellow-400 selection:text-black">
            {/* Main Grid Container */}
            <div className="max-w-7xl mx-auto px-6 py-12 lg:py-20 grid grid-cols-1 lg:grid-cols-12 gap-8">

                <div className="lg:col-span-7 flex flex-col justify-center">
                    <p className="text-gray-400 text-lg mb-4">Your Journey to Tomorrow Begins Here</p>
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8">
                        Explore the Frontiers of <br className="hidden md:block" />
                        Artificial Intelligence
                    </h1>
                    <p className="text-gray-500 text-sm md:text-base max-w-xl leading-relaxed">
                        Welcome to the epicenter of AI innovation. FutureTech AI News is your passport to a world where machines think, learn, and reshape the future. Join us on this visionary expedition into the heart of AI.
                    </p>
                </div>

                <div className="lg:col-span-5 flex flex-col items-start lg:items-end justify-center relative">
                    <div className="w-full h-64 md:h-80 bg-gradient-to-tr from-gray-900 to-transparent rounded-2xl relative overflow-hidden mb-6">
                        <div className="absolute inset-0 opacity-30">
                            <img
                                src=""
                                alt=""/>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <div className="flex items-start p-3 gap-[-14px] bg-[#1A1A1A] border border-[#1A1A1A] rounded-full">
                            {[1, 2, 3, 4].map((i) => (
                                <div key={i} className="w-10 h-10">
                                    <img
                                        src="/icon/Image.png"
                                        alt="User 1"
                                        className="w-full h-full object-cover"/>
                                </div>
                            ))}
                        </div>
                        <h3 className="text-xl font-semibold">Explore 1000+ resources</h3>
                        <p className="text-gray-400 text-sm">Over 1,000 articles on emerging tech trends and breakthroughs.</p>
                        <button className="flex items-center gap-2 border border-gray-700 px-6 py-3 rounded-xl hover:bg-gray-800 transition">
                            Explore Resources
                            <ArrowUpRight className="text-yellow-400"/>
                        </button>
                    </div>
                </div>

                <div className="lg:col-span-12 grid grid-cols-1 md:grid-cols-3 gap-0 border-y border-gray-800 my-10">
                    <div className="p-8 border-b md:border-b-0 md:border-r border-gray-800">
                        <h2 className="text-3xl font-bold mb-1">300<span className="text-yellow-400">+</span></h2>
                        <p className="text-gray-500 text-sm">Resources available</p>
                    </div>
                    <div className="p-8 border-b md:border-b-0 md:border-r border-gray-800">
                        <h2 className="text-3xl font-bold mb-1">12k<span className="text-yellow-400">+</span></h2>
                        <p className="text-gray-500 text-sm">Total Downloads</p>
                    </div>
                    <div className="p-8">
                        <h2 className="text-3xl font-bold mb-1">10k<span className="text-yellow-400">+</span></h2>
                        <p className="text-gray-500 text-sm">Active Users</p>
                    </div>
                </div>

                <div className="lg:col-span-12 grid grid-cols-1 md:grid-cols-3 gap-6">

                    <div className="p-8 bg-zinc-900/30 rounded-2xl border border-gray-800 flex flex-col justify-between group">
                        <div className="mb-8 flex justify-between items-start">
                            <div className="p-3 bg-yellow-400/10 rounded-lg">
                              <img
                                  src="/icon/Icon%20(1).png"
                                  alt=""
                                  className="w-[50px] h-[50px]"/>
                            </div>
                            <div className="flex rounded-full bg-yellow-300 "></div>
                        </div>
                        <div>
                            <h4 className="text-lg font-medium mb-1">Latest News Updates</h4>
                            <p className="text-gray-500 text-xs mb-4">Stay Current</p>
                            <p className="text-gray-400 text-sm">Over 1,000 articles published monthly</p>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="p-8 bg-zinc-900/30 rounded-2xl border border-gray-800 flex flex-col justify-between group">
                        <div className="mb-8 flex justify-between items-start">
                            <div className="flex gap-1">
                                <div className="w-4 h-4 bg-yellow-400 rounded-full"></div>
                                <div className="w-4 h-4 bg-gray-600 rounded-full"></div>
                            </div>
                            <div className="p-3 bg-yellow-400 rounded-full group-hover:bg-yellow-300 transition-colors">
                            </div>
                        </div>
                        <div>
                            <h4 className="text-lg font-medium mb-1">Expert Contributors</h4>
                            <p className="text-gray-500 text-xs mb-4">Trusted Insights</p>
                            <p className="text-gray-400 text-sm">50+ renowned AI experts on our team</p>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className="p-8 bg-zinc-900/30 rounded-2xl border border-gray-800 flex flex-col justify-between group">
                        <div className="mb-8 flex justify-between items-start">
                            <div className="w-8 h-8 bg-gradient-to-br from-yellow-400 to-transparent rounded-full overflow-hidden border border-gray-600"></div>
                            <div className="p-3 bg-yellow-400 rounded-full group-hover:bg-yellow-300 transition-colors">
                            </div>
                        </div>
                        <div>
                            <h4 className="text-lg font-medium mb-1">Global Readership</h4>
                            <p className="text-gray-500 text-xs mb-4">Worldwide Impact</p>
                            <p className="text-gray-400 text-sm">2 million monthly readers</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}