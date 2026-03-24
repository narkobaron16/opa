import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

const users = [
    { id: 1, src: "/icon/Image.png" },
    { id: 2, src: "/icon/Image (1).png" },
    { id: 3, src: "/icon/Image (2).png" },
    { id: 4, src: "/icon/Image (3).png" },
];

export default function HeroSection() {
    return (
        <div className=" bg-black text-white min-h-screen font-sans selection:bg-yellow-400 selection:text-black">
            <div className="grid grid-cols-1 lg:grid-cols-12 border-b border-gray-800">
                <div className="lg:col-span-7 flex flex-col  border-r border-gray-800">
                    <div className="p-10 lg:py-20">
                        <p className="text-gray-400 text-lg mb-4">Your Journey to Tomorrow Begins Here</p>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-8">
                            Explore the Frontiers of <br className="hidden md:block" />
                            Artificial Intelligence
                        </h1>
                        <p className="text-gray-500 text-sm md:text-base max-w-xl leading-relaxed">
                            Welcome to the epicenter of AI innovation. FutureTech AI News is your passport to a world where machines think, learn, and reshape the future.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 border-t border-gray-800">
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
                </div>

                <div className="lg:col-span-5 p-10 lg:p-12 flex flex-col justify-end relative">
                    {/* Фон с градиентом */}
                    <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-gray-900/50 to-transparent pointer-events-none" />

                    <div className="relative z-10 space-y-6">
                        <div className="flex -space-x-3 items-center">
                            {users.map((user) => (
                                <div key={user.id} className="w-12 h-12 rounded-full border-2 border-black overflow-hidden bg-zinc-800">
                                    <Image
                                        src={user.src}
                                        alt={`User ${user.id}`}
                                        width={48}
                                        height={48}
                                        className="object-cover w-full h-full"
                                    />
                                </div>
                            ))}
                        </div>
                        <div>
                            <h3 className="text-2xl font-semibold mb-2">Explore 1000+ resources</h3>
                            <p className="text-gray-400 text-sm mb-6">Over 1,000 articles on emerging tech trends and breakthroughs.</p>
                            <button className="flex items-center gap-2 border border-gray-800 px-6 py-3 rounded-xl hover:bg-zinc-900 transition w-fit">
                                Explore Resources
                                <ArrowUpRight className="text-yellow-400 w-5 h-5" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3">
                <div className="flex-col p-10 items-center justify-between border-r border-gray-800 group hover:bg-zinc-900/30 transition-colors">
                    <div className="flex justify-between items-start mb-12">
                        <div className="p-4 bg-zinc-900 rounded-lg border border-gray-800">
                            <Image src="/icon/Icon%20(1).png" alt="" width={40} height={40} />
                        </div>
                    </div>
                    <div className="flex items-center justify-between ">
                        <div className="flex-col">
                          <h4 className="text-xl font-medium mb-1">Latest News Updates</h4>
                          <p className="text-gray-500 text-xs mb-4">Stay Current</p>
                          <p className="text-gray-400 text-sm">Over 1,000 articles published monthly</p>
                        </div>
                        <div className="p-3 bg-yellow-400 rounded-full text-black group-hover:bg-yellow-300">
                            <ArrowUpRight size={20} />
                        </div>

                    </div>
                </div>
                <div className="p-10 border-r border-gray-800 group hover:bg-zinc-900/30 transition-colors">
                    <div className="flex justify-between items-start mb-12">
                        <div className="p-4 bg-zinc-900 rounded-lg border border-gray-800">
                            <Image src="/icon/Icon%20(2).png" alt="" width={40} height={40} />
                        </div>
                    </div>
                    <div className="flex items-center justify-between ">
                        <div className="flex-col">
                          <h4 className="text-xl font-medium mb-1">Expert Contributors</h4>
                          <p className="text-gray-500 text-xs mb-4">Trusted Insights</p>
                          <p className="text-gray-400 text-sm">50+ renowned AI experts on our team</p>
                        </div>
                        <div className="p-3 bg-yellow-400 rounded-full text-black group-hover:bg-yellow-300">
                            <ArrowUpRight size={20} />
                        </div>
                    </div>
                </div>
                <div className="p-10 group hover:bg-zinc-900/30 transition-colors">
                    <div className="flex justify-between items-start mb-12">
                        <div className="p-4 bg-zinc-900 rounded-lg border border-gray-800">
                            <Image src="/icon/Icon%20(3).png" alt="" width={40} height={40} />
                        </div>
                    </div>
                    <div className="flex items-center justify-between ">
                        <div className="flex-col">
                          <h4 className="text-xl font-medium mb-1">Global Readership</h4>
                          <p className="text-gray-500 text-xs mb-4">Worldwide Impact</p>
                          <p className="text-gray-400 text-sm">2 million monthly readers</p>
                        </div>
                        <div className="p-3 bg-yellow-400 rounded-full text-black group-hover:bg-yellow-300">
                            <ArrowUpRight size={20} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}