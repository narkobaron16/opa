import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import GroupPng from "@/public/Group.png"
import Image from "next/image";

const features = [
    {
        title: "Resource Access",
        description: "Visitors can access a wide range of resources, including ebooks, whitepapers, reports.",
    },
    {
        title: "Community Forum",
        description: "Join our active community forum to discuss industry trends, share insights, and collaborate with peers.",
    },
    {
        title: "Tech Events",
        description: "Stay updated on upcoming tech events, webinars, and conferences to enhance your knowledge.",
    },
];

const FutureTech = () => {
    return (
        <section className="bg-[#121212] text-white py-16 px-4 md:px-8">
            <div className="mt-4 max-w-8xl mx-auto">
                <div className="flex flex-col md:flex-row items-start gap-8 mb-16">
                    <div className="w-24 h-24 flex-shrink-0">
                            <Image
                                src={GroupPng}
                                alt="Group Png"
                                width={96}
                                height={96}
                                className="w-full h-full object-cover"
                            />
                    </div>
                    <div className="flex-1">
                       <span className="bg-[#1A1A1A] border border-zinc-800 px-3 py-1 rounded text-sm text-zinc-400">
                           Learn, Connect, and Innovate
                       </span>
                        <h2 className="text-4xl md:text-5xl font-semibold mt-4 mb-6">
                            Be Part of the Future Tech Revolution
                        </h2>
                        <p className="text-zinc-500 max-w-4xl leading-relaxed">
                            Immerse yourself in the world of future technology. Explore our comprehensive resources, connect with fellow tech enthusiasts, and drive innovation in the industry. Join a dynamic community of forward-thinkers.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 bg-[#0A0A0A] p-4 rounded-2xl border border-zinc-800">
                    {features.map((item, index) => (
                        <div
                            key={index}
                            className="bg-[#1A1A1A] p-8 rounded-xl border border-zinc-800 flex flex-col justify-between group cursor-pointer hover:border-zinc-600 transition-colors"
                        >
                            <div className="flex justify-between items-start mb-4">
                                <h3 className="text-xl font-medium">{item.title}</h3>
                                <div className="bg-[#FFD700] p-2 rounded-full text-black">
                                    <ArrowUpRight size={24} strokeWidth={2.5} />
                                </div>
                            </div>
                            <p className="text-zinc-500 text-sm leading-relaxed">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FutureTech;