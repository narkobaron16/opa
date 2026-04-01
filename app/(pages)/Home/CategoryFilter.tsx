"use client"
import { useState } from "react"
import Image from "next/image";
import { Heart, MessageSquare, Send, ArrowUpRight } from "lucide-react";

export default function CategoryFilter() {

    const categories = [
        "All",
        "Quantum Computing",
        "AI Ethics",
        "Space Exploration",
        "Biotechnology",
        "Renewable Energy",
    ]

    const posts = [
        {
            id: 1,
            src: "/icon/Image (1).png",
            author: "John Techson",
            category: "Quantum Computing",
            title: "The Quantum Leap in Computing",
            date: "October 15, 2023",
            description: "Explore the revolution in quantum computing, its applications, and its potential impact on various industries.",
            likes: "24.5k",
            comments: "50",
            shares: "20"
        },
        {
            id: 2,
            src: "/icon/Image (2).png",
            author: "Sarah Ethicist",
            category: "AI Ethics",
            title: "The Ethical Dilemmas of AI",
            date: "November 5, 2023",
            description: "A deep dive into ethical challenges posed by AI, including bias, privacy, and transparency.",
            likes: "32k",
            comments: "72",
            shares: "18"
        },
        {
            id: 3,
            src: "/icon/Image (3).png",
            author: "Astronomer X",
            category: "Space Exploration",
            title: "The Mars Colonization Challenge",
            date: "December 10, 2023",
            description: "Exploring the technical and logistical challenges of human colonization on Mars.",
            likes: "20k",
            comments: "31",
            shares: "12"
        },
    ]

    const [active, setActive] = useState("All")
    const filteredPosts =
        active === "All"
            ? posts
            : posts.filter((post) => post.category === active)

    return (
        <div className="flex flex-col w-full bg-black min-h-screen text-white p-4 md:p-10">
            <div className="flex items-start justify-start md:justify-center gap-3 md:gap-6 mb-10 overflow-x-auto pb-4 no-scrollbar">
                {categories.map((item) => (
                    <button
                        key={item}
                        onClick={() => setActive(item)}
                        className={`px-4 md:px-6 py-2 border rounded-lg transition whitespace-nowrap text-sm md:text-base
                        ${active === item
                            ? "bg-zinc-800 border-zinc-600"
                            : "border-zinc-700 text-zinc-400 hover:text-white"
                        }`}>
                        {item}
                    </button>
                ))}
            </div>

            <div className="w-full flex flex-col border-t border-[#262626]">
                {filteredPosts.map((post) => (
                    <div
                        key={post.id}
                        className="w-full flex flex-col md:flex-row justify-between items-start border-b border-[#262626] py-6 md:py-10">

                        <div className="flex flex-col md:flex-row gap-6 md:gap-10 px-0 md:pl-10 w-full">
                            <div className="flex items-center gap-3 min-w-[180px]">
                                <div className="relative w-10 h-10 md:w-12 md:h-12">
                                    <Image
                                        src={post.src || "/api/placeholder/48/48"}
                                        alt={post.author}
                                        fill
                                        className="rounded-full object-cover"
                                    />
                                </div>
                                <div>
                                    <h4 className="text-white font-medium text-sm">{post.author}</h4>
                                    <p className="text-zinc-500 text-xs">{post.category}</p>
                                </div>
                            </div>
                            <div className="max-w-2xl w-full">
                                <p className="text-zinc-400 text-xs md:text-sm">{post.date}</p>
                                <h2 className="text-lg md:text-xl font-semibold mt-2 leading-tight">
                                    {post.title}
                                </h2>
                                <p className="text-zinc-400 text-sm mt-2 mb-6 line-clamp-3 md:line-clamp-none">
                                    {post.description}
                                </p>
                                <div className="flex flex-wrap gap-2 md:gap-3">
                                    <div className="flex items-center gap-2 bg-[#1A1A1A] border border-[#262626] px-3 md:px-4 py-1.5 md:py-2 rounded-full text-zinc-400 text-xs md:text-sm hover:text-white cursor-pointer transition-colors">
                                        <Heart size={16} className="text-red-500 fill-red-500/10" />
                                        <span>{post.likes}</span>
                                    </div>
                                    <div className="flex items-center gap-2 bg-[#1A1A1A] border border-[#262626] px-3 md:px-4 py-1.5 md:py-2 rounded-full text-zinc-400 text-xs md:text-sm hover:text-white cursor-pointer transition-colors">
                                        <MessageSquare size={16} />
                                        <span>{post.comments}</span>
                                    </div>
                                    <div className="flex items-center gap-2 bg-[#1A1A1A] border border-[#262626] px-3 md:px-4 py-1.5 md:py-2 rounded-full text-zinc-400 text-xs md:text-sm hover:text-white cursor-pointer transition-colors">
                                        <Send size={16} />
                                        <span>{post.shares}</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex w-full md:w-auto mt-6 md:mt-0 md:pr-10">
                            <button className="w-full border border-[#262626] bg-[#141414] px-5 py-3 rounded-xl hover:border-zinc-600 transition-all text-[#98989A] flex flex-row items-center justify-center gap-2">
                                <span className="text-base whitespace-nowrap">View Blog</span>
                                <ArrowUpRight size={20} className="text-[#FFD11A] shrink-0" />
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}