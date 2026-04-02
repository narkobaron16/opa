'use client'
import { Play, ArrowUpRight, X } from 'lucide-react';
import React, { useState } from 'react'

const podcasts = [
    {
        title: "AI in Healthcare",
        desc: "Dr. Lisa Adams discusses how AI is revolutionizing healthcare, from diagnostic tools to patient care.",
        image: "/podcast/medium2.mp4",
        duration: "2.30 min"
    },
    {
        title: "AI Ethics",
        desc: "Explore the ethical dilemmas and considerations surrounding AI with guest speaker Dr. Michael Turner.",
        image: "/podcast/medium1.mp4",
        duration: "2.30 min"
    },
    {
        title: "Machine Learning Explained",
        desc: "Dive into the intricacies of machine learning with AI expert Sarah Davis. In this episode",
        image: "/podcast/medium6.mp4",
        duration: "2.30 min"
    },
    {
        title: "AI and the Future of Work",
        desc: "Dr. Olivia White joins John Parker to discuss the evolving role of AI in the workplace.",
        image: "/podcast/medium3.mp4",
        duration: "2.30 min"
    },
    {
        title: "AI in Education",
        desc: "Explore the role of AI in education as Emily Turner discusses how AI is transforming the learning experience.",
        image: "/podcast/medium4.mp4",
        duration: "2.30 min"
    },
    {
        title: "AI in Entertainment",
        desc: "David Smith as they explore the influence of AI in the entertainment industry.",
        image: "/podcast/medium5.mp4",
        duration: "2.30 min"
    }
];

export default function PodcastGrid() {
    const [selectedPodcast, setSelectedPodcast] = useState<any>(null);

    return (
        <section className="bg-black py-12 px-4">
            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                {podcasts.map((podcast, index) => (
                    <div key={index} className="flex flex-col space-y-4 group">
                        <div className="relative rounded-xl border border-white/10 aspect-video overflow-hidden">
                            {podcast.image.includes('.mp4') ? (
                                <video
                                    src={podcast.image}
                                    className="w-full h-full object-cover"
                                />
                            ) : (
                                <img
                                    src={podcast.image}
                                    alt={podcast.title}
                                    className=" transition-transform duration-300 "
                                />
                            )}
                            <div
                                onClick={() => setSelectedPodcast(podcast)}
                                className="absolute inset-0 bg-black/40 flex items-center justify-center cursor-pointer">
                                <div className="bg-white/20 backdrop-blur-sm p-3 rounded-full border border-white/30 hover:scale-110 transition-transform">
                                    <Play className="w-6 h-6 text-white fill-white" />
                                </div>
                                <div className="absolute bottom-3 right-3 bg-black/60 backdrop-blur-md px-2 py-1 rounded-md text-[10px] text-white/80 border border-white/10">
                                    {podcast.duration}
                                </div>
                            </div>
                        </div>
                        <div className="space-y-2">
                            <h3 className="text-white text-lg font-medium tracking-tight">
                                {podcast.title}
                            </h3>
                            <p className="text-gray-400 text-sm line-clamp-2">
                                {podcast.desc}
                            </p>
                        </div>
                        <button
                            onClick={() => setSelectedPodcast(podcast)}
                            className="flex items-center w-full sm:w-[157px] justify-center bg-[#1A1A1A] border border-white/10 text-gray-300 p-3 rounded-lg text-sm hover:bg-white/5 transition-colors">
                            <span>Listen Podcast</span>
                            <ArrowUpRight className="w-4 h-4 ml-2 text-yellow-500" />
                        </button>
                    </div>
                ))}
            </div>
            {selectedPodcast && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm">
                    <div className="relative bg-[#1A1A1A] border border-white/10 p-4 md:p-6 rounded-2xl max-w-2xl w-full">
                        <button
                            onClick={() => setSelectedPodcast(null)}
                            className="absolute -top-12 right-0 md:top-4 md:right-4 text-gray-400 hover:text-white transition-colors">
                            <X className="w-4 h-4" />
                        </button>

                        <div className="aspect-video bg-black rounded-lg mb-4 overflow-hidden">
                            <video
                                src={selectedPodcast.image}
                                controls
                                autoPlay
                                className="w-full h-full"
                            />
                        </div>

                        <h2 className="text-xl text-white font-bold mb-2">{selectedPodcast.title}</h2>
                        <p className="text-gray-400 text-sm leading-relaxed">{selectedPodcast.desc}</p>
                    </div>
                </div>
            )}
        </section>
    );
}