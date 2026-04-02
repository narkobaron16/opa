'use client'
import React from 'react';
import { Heart, Send, ArrowUpRight } from 'lucide-react';
import Image from "next/image";
import Link from "next/link";

export default function SimilarNews() {
    const user = [
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
        <div className="bg-black text-white border-t border-white/10 font-sans">
            <div className="w-full">
                <div className="flex justify-between items-center p-6 mb-12">
                    <h2 className="text-xl md:text-2xl font-medium">Similar News</h2>
                    <button className="flex items-center gap-2 px-4 py-2 border border-zinc-800 rounded-lg text-sm text-zinc-400 hover:bg-zinc-900 transition">
                        View All News <ArrowUpRight size={18} className="text-[#FFD700]" />
                    </button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-6 bg-black">
                    {user.map((item, idx) => (
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
                            <h3 className="text-white font-medium text-lg mb-1 leading-snug hover:text-yellow-200 transition-colors cursor-pointer">
                                {item.title}
                            </h3>
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