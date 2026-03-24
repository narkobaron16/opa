import Image from 'next/image';
import { ArrowUpRight, Eye } from 'lucide-react';

export default function EbooksSection() {
    const users = [
        { id: 1, src: "/ebooks/Image (2).svg" },
        { id: 2, src: "/ebooks/Image (3).svg" },
        { id: 3, src: "/ebooks/Image (4).svg" },
        { id: 4, src: "/ebooks/Image (5).svg" },
    ];

    const resources = [
        {
            title: "Ebooks",
            desc: "Explore our collection of ebooks covering a wide spectrum of future technology topics.",
            icon: "/ebooks/Icon.png",
            mainImg: "/video/video01.mp4",
            topics: "Topics include AI in education (25%), renewable energy (20%), healthcare (15%), space exploration (25%), and biotechnology (15%).",
            stats: [
                { label: "Total Ebooks", value: "Over 100 ebooks" },
                { label: "Download Formats", value: "PDF format for access.", preview: true }
            ],
            expertise: "Ebooks are authored by renowned experts with an average of 15 years of experience"
        },
        {
            title: "Whitepapers",
            desc: "Dive into comprehensive reports and analyses with our collection of whitepapers.",
            icon: "/ebooks/Icon1.svg",
            mainImg: "/video/video2.mp4",
            topics: "Whitepapers cover quantum computing (20%), AI ethics (15%), space mining prospects (20%), AI in healthcare (15%), and renewable energy strategies (30%).",
            stats: [
                { label: "Total Whitepapers", value: "Over 50 whitepapers" },
                { label: "Download Formats", value: "PDF format for access.", preview: true }
            ],
            expertise: "Whitepapers are authored by subject matter experts with an average of 20 years of experience."
        }
    ];

    return (
        <section className="bg-black text-white">
            {resources.map((item, idx) => (
                <div key={idx} className="flex flex-col lg:flex-row border-b border-[#262626] last:border-0">
                    <div className="w-full lg:w-[40%] p-6 md:p-10 lg:p-20 border-b lg:border-b-0 lg:border-r border-[#262626]">
                        <Image src={item.icon} alt="" width={60} height={60} className="mb-8" />
                        <h2 className="text-3xl lg:text-4xl font-medium mb-4">{item.title}</h2>
                        <p className="text-gray-500 text-sm mb-10">{item.desc}</p>
                        <button className="w-full bg-[#141414] border border-[#262626] py-4 rounded-xl flex items-center justify-center gap-2 text-[#98989A] mb-10 hover:border-zinc-600 transition-all">
                            Download {item.title} Now <ArrowUpRight size={20} className="text-[#FFD11A]" />
                        </button>

                        <div className="bg-[#1A1A1A] w-full max-w-[500px] border border-[#262626] rounded-xl p-4 md:p-5 flex justify-between items-center">
                            <div>
                                <p className="text-xs text-gray-500">Downloaded By</p>
                                <p className="text-lg md:text-xl font-medium">10k + Users</p>
                            </div>
                            <div className="flex -space-x-3">
                                {users.map((user) => (
                                    <div
                                        key={user.id}
                                        className="relative w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-zinc-600 overflow-hidden bg-zinc-800">
                                        <Image
                                            src={user.src}
                                            alt="User avatar"
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="w-full lg:w-[60%] p-6 md:p-10 lg:p-20">
                        <div className="flex flex-col md:flex-row justify-between mb-8 gap-4">
                            <h3 className="text-xl font-medium whitespace-nowrap">
                                {idx === 0 ? "Variety of Topics" : "Topics Coverage"}
                            </h3>
                            <p className="text-gray-500 text-sm max-w-md">{item.topics}</p>
                        </div>
                        <div className="relative w-full h-[250px] md:h-[400px] rounded-2xl overflow-hidden mb-8 border border-[#262626]">
                            <video
                                src={item.mainImg}
                                autoPlay
                                loop
                                muted
                                playsInline
                                className="w-full h-full object-cover"
                            />

                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                            {item.stats.map((stat, i) => (
                                <div key={i} className="bg-[#1A1A1A] border border-[#262626] rounded-xl p-6 flex justify-between items-center">
                                    <div>
                                        <p className="text-xs text-gray-500">{stat.label}</p>
                                        <p className="font-medium">{stat.value}</p>
                                    </div>
                                    {stat.preview && (
                                        <button className="flex items-center gap-2 bg-black border border-[#262626] px-4 py-2 rounded-lg text-sm text-[#98989A]">
                                            Preview <Eye size={16} className="text-[#FFD11A]" />
                                        </button>
                                    )}
                                </div>
                            ))}
                        </div>

                        <div className="bg-[#1A1A1A] border border-[#262626] rounded-xl p-6">
                            <p className="text-xs text-gray-500">Average Author Expertise</p>
                            <p className="font-medium text-sm md:text-base">{item.expertise}</p>
                        </div>
                    </div>

                </div>
            ))}
        </section>
    );
}