'use client'
import { Play, ArrowUpRight,X } from 'lucide-react';
import React, { useState } from 'react'


const podcasts = [
    {
        title: "AI in Healthcare",
        desc: "Dr. Lisa Adams discusses how AI is revolutionizing healthcare, from diagnostic tools to patient care.",
        image: "/podcast/medium1.mp4/",
        duration: "2.30 min"
    },
    {
        title: "AI Ethics",
        desc: "Explore the ethical dilemmas and considerations surrounding AI with guest speaker Dr. Michael Turner.",
        image: "/api/placeholder/400/250",
        duration: "2.30 min"
    },
    {
        title: "Machine Learning Explained",
        desc: "Dive into the intricacies of machine learning with AI expert Sarah Davis. In this episode",
        image: "/api/placeholder/400/250",
        duration: "2.30 min"
    },
    {
        title: "AI and the Future of Work",
        desc: "Dr. Olivia White joins John Parker to discuss the evolving role of AI in the workplace.",
        image: "/api/placeholder/400/250",
        duration: "2.30 min"
    },
    {
        title: "AI in Education",
        desc: "Explore the role of AI in education as Emily Turner discusses how AI is transforming the learning experience.",
        image: "/api/placeholder/400/250",
        duration: "2.30 min"
    },
    {
        title: "AI in Entertainment",
        desc: "David Smith as they explore the influence of AI in the entertainment industry.",
        image: "/api/placeholder/400/250",
        duration: "2.30 min"
    }
];

export default function PodcastGrid() {
    const [selectedPodcast, setSelectedPodcast] = useState<any>(null);
    return (
        <section className="bg-black py-12 px-4 md:px-10">
            <div className="  grid grid-rows-2 md:grid-rows-3 gap-8">
                {podcasts.map((podcast, index) => (
                    <div key={index} className="flex flex-col space-y-4">
                        <div className="relative group overflow-hidden rounded-xl border border-white/10 aspect-video">
                            <img
                                src={podcast.image}
                                alt={podcast.title}
                                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                            />
                            <div
                                onClick={() => setSelectedPodcast(podcast)}
                                className="absolute inset-0 bg-black/20 flex items-center justify-center cursor-pointer">
                                <div className="bg-white/20 backdrop-blur-sm p-3 rounded-full border border-white/30 hover:scale-110 transition-transform">
                                    <Play className="w-6 h-6 text-white fill-white" />
                                </div>
                                <div className="absolute bottom-3 right-3 bg-black/60 backdrop-blur-md px-2 py-1 rounded-md text-[10px] text-white/80 border border-white/10">
                                    {podcast.duration}
                                </div>
                            </div>
                        </div>
                        <div className="space-y-2 flex-grow">
                            <h3 className="text-white text-lg font-medium tracking-tight">
                                {podcast.title}
                            </h3>
                            <p className="text-gray-400 text-sm leading-relaxed line-clamp-2">
                                {podcast.desc}
                            </p>
                        </div>
                        <button
                            onClick={() => setSelectedPodcast(podcast)}
                            className="flex items-center justify-center bg-[#1A1A1A] border border-white/10 text-gray-300 p-4 rounded-lg text-sm hover:bg-white/5 ">
                            <span>Listen Podcast</span>
                            <ArrowUpRight className="w-4 h-4 text-yellow-500" />
                        </button>
                    </div>
                ))}
            </div>
            {selectedPodcast && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
                    <div className="relative bg-[#1A1A1A] border border-white/10 p-6 rounded-2xl max-w-lg w-full">
                        <button
                            onClick={() => setSelectedPodcast(null)}
                            className="absolute top-4 right-4 text-gray-400 hover:text-white">
                            <X className="w-6 h-6" />
                        </button>
                        <h2 className="text-xl text-white font-bold mb-4">{selectedPodcast.title}</h2>
                        <div className="aspect-video bg-black rounded-lg mb-4 flex items-center justify-center">
                            <p className="text-gray-500 italic">Здесь будет видео или аудио плеер</p>
                        </div>
                        <p className="text-gray-400 text-sm">{selectedPodcast.desc}</p>
                    </div>
                </div>
            )}
        </section>
    );
}