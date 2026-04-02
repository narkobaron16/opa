'use client'
import Image from 'next/image';
import { ArrowUpRight, Play, Pause, Star } from 'lucide-react';
import React, { useState, useRef } from 'react'

export default function PodcastCards() {
    const [playingIndex, setPlayingIndex] = useState<number | null>(null);
    const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

    const podcasts = [
        {
            title: "AI Revolution",
            desc: "Delves into the transformative impact of AI",
            longDesc: "Join Dr. Sarah Mitchell as she delves into the transformative impact of AI on industries, featuring expert interviews and real-world case studies. Explore the possibilities of AI in healthcare, finance, and more.",
            icon: "/podcast/Icon.svg",
            thumbnail: "/podcast/medium.mp4",
            host: "Dr. Sarah Mitchell",
            stats: [
                { label: "Total Episodes", value: "50" },
                { label: "Average Episode Length", value: "30 min" },
                { label: "Release Frequency", value: "Weekly" }
            ]
        },
        {
            title: "AI Conversations",
            desc: "Engage in thought-provoking conversations with leading experts.",
            longDesc: "Mark discusses the future of AI, the impact on society, and how it's shaping industries worldwide. Engage in thought-provoking conversations with leading experts.",
            icon: "/podcast/Icon (1).svg",
            thumbnail: "/podcast/medium1.mp4",
            host: "Mark Anderson",
            stats: [
                { label: "Total Episodes", value: "40" },
                { label: "Average Episode Length", value: "40 min" },
                { label: "Release Frequency", value: "Monthly" }
            ]
        }
    ];

    const togglePlay = (idx: number) => {
        const video = videoRefs.current[idx];
        if (video) {
            if (playingIndex === idx) {
                video.pause();
                setPlayingIndex(null);
            } else {
                if (playingIndex !== null && videoRefs.current[playingIndex]) {
                    videoRefs.current[playingIndex]?.pause();
                }
                video.play();
                setPlayingIndex(idx);
            }
        }
    };

    return (
        <section className="bg-[#0A0A0A] text-white">
            <div className="max-w-7xl mx-auto">
                {podcasts.map((item, idx) => (
                    <div key={idx} className="flex flex-col lg:flex-row border-b border-white/10 last:border-0">
                        <div className="w-full lg:w-[40%] p-6 py-10 border-b lg:border-b-0 lg:border-r border-white/10 flex flex-col items-start justify-center">
                            {/* Исправлено обращение к иконке */}
                            <img
                                src={item.icon}
                                alt={item.title}
                                className="transition-transform duration-300 mb-4"
                            />
                            <div className="w-full flex items-center justify-between py-4 mb-6">
                                <h2 className="text-2xl md:text-3xl font-semibold">{item.title}</h2>
                                <div className="flex gap-1">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} size={16} className="fill-yellow-500 text-[#FFD11A]" />
                                    ))}
                                </div>
                            </div>
                            <div className="w-full bg-[#141414] border border-white/10 rounded-xl p-5 flex items-center justify-between gap-4">
                                <div>
                                    <p className="text-xs text-gray-500 mb-1">Host</p>
                                    <p className="text-sm font-medium whitespace-nowrap">{item.host}</p>
                                </div>
                                <button className="bg-[#1A1A1A] border border-[#262626] px-4 py-2 rounded-lg text-xs flex items-center gap-2 hover:bg-[#262626] transition-colors whitespace-nowrap shrink-0">
                                    Listen Podcast <ArrowUpRight size={14} className="text-[#FFD11A]" />
                                </button>
                            </div>
                        </div>
                        <div className="p-8 lg:w-[60%] flex flex-col justify-center">
                            <div
                                className="relative aspect-video rounded-3xl mb-8 group cursor-pointer overflow-hidden"
                                onClick={() => togglePlay(idx)}
                            >
                                <video
                                    ref={(el) => { videoRefs.current[idx] = el; }}
                                    src={item.thumbnail}
                                    loop
                                    muted
                                    playsInline
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                                    <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/10">
                                        {playingIndex === idx ? (
                                            <Pause size={24} className="fill-white text-white" />
                                        ) : (
                                            <Play size={24} className="fill-white text-white ml-1" />
                                        )}
                                    </div>
                                </div>
                            </div>

                            <h3 className="text-xl font-semibold mb-3">{item.desc}</h3>
                            <p className="text-gray-400 text-sm mb-10 leading-relaxed">
                                {item.longDesc}
                            </p>
                            <div className="flex items-center justify-center sm:flex-row gap-1">
                                {item.stats.map((stat, i) => (
                                    <div key={i} className="flex-1 bg-[#141414] border border-[#262626] rounded-xl p-6 shadow-sm flex flex-col items-start justify-center">
                                        <p className="text-sm text-[#98989A] mb-2 leading-tight">{stat.label}</p>
                                        <p className="text-lg font-medium whitespace-nowrap">{stat.value}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}