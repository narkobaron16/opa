import Link from 'next/link';
import React from 'react';
import { Heart, Send, ArrowUpRight } from 'lucide-react';
import Image from 'next/image';

const NewsHero = () => {
    const users = [
        {
            title: "A Decisive Victory for Progressive Policies",
            cat: "Politics",
            likes: "2.2k",
            shares: "60",
            image: "/card/Image (1).svg",
            link: "/news/1"
        },
        {
            title: "Tech Giants Unveil Cutting-Edge AI Innovations",
            cat: "Technology",
            likes: "6k",
            shares: "92",
            image: "/card/Image (2).svg",
            link: "/news/2"
        },
        {
            title: "COVID-19 Variants",
            cat: "Health",
            likes: "10k",
            shares: "124",
            image: "/card/Image (3).svg",
            link: "/news/Covid"
        }
    ];

    return (
        <div className="bg-[#0a0a0a] text-white min-h-screen font-sans md:p-10">
            <div className="w-full">
                <header className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 border-b border-white/10 pb-12">
                    <h1 className="text-4xl md:text-6xl font-medium leading-tight">
                        Today's Headlines: Stay <br className="hidden md:block" /> Informed
                    </h1>
                    <p className="text-gray-400 text-sm md:text-base max-w-md">
                        Explore the latest news from around the world. We bring you up-to-the-minute
                        updates on the most significant events, trends, and stories.
                    </p>
                </header>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-6 bg-[#0a0a0a]">
                    {users.map((item, idx) => (
                        <div key={idx} className="group flex flex-col">
                            <div className="relative aspect-video overflow-hidden rounded-xl mb-4">
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    width={500}
                                    height={300}
                                    className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                                />
                            </div>
                            <Link href={item.link}>
                                <h3 className="text-white font-medium text-lg mb-1 leading-snug hover:text-yellow-200 transition-colors cursor-pointer">
                                    {item.title}
                                </h3>
                            </Link>
                            <p className="text-gray-500 text-sm mb-4">
                                {item.cat}
                            </p>
                            <div className="flex items-center justify-between mt-auto">
                                <div className="flex gap-2">
                                    <span className="flex items-center gap-1 text-[15px] text-gray-300 bg-white/5 border border-white/10 px-2 py-1 rounded-full">
                                        <Heart size={10} /> {item.likes}
                                    </span>
                                    <span className="flex items-center gap-1 text-[15px] text-gray-300 bg-white/5 border border-white/10 px-2 py-1 rounded-full">
                                        <Send size={10} /> {item.shares}
                                    </span>
                                </div>
                                <Link href={item.link}>
                                    <button className="flex items-center gap-1 text-sm text-gray-400 group-hover:text-white border border-white/10 px-4 py-1.5 rounded-lg transition-colors">
                                        Read More <ArrowUpRight size={14} className="text-yellow-200" />
                                    </button>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default NewsHero;