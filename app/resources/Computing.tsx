import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import React from "react";

export default function Computing() {
    const resources = [
        {
            title: "Quantum Computing Whitepaper",
            desc: "Provides technical specifications and requirements for implementing quantum computing systems.",
            icon: "/resources/Icon.svg",
            mainImg: "/resources/medium1.mp4",
            text: "Quantum Computing Whitepaper",
            stats: [
                { label: "Publication Date", value: "July 2023" },
                { label: "Category", value: "Quantum Computing" },
                { label: "Author", value: "Dr. Quantum" }
            ]
        },
        {
            title: "Space Exploration Whitepaper",
            desc: "Explores Mars colonization, asteroid resource potential, and space tourism.",
            icon: "/resources/Icon (1).svg",
            mainImg: "/resources/medium2.mp4",
            text: "Space Exploration Whitepaper",
            stats: [
                { label: "Publication Date", value: "September 2023" },
                { label: "Category", value: "Space Exploration" },
                { label: "Author", value: "FutureTech Space Division" }
            ]
        }
    ];

    return (
        <section className="bg-[#0F0F0F] text-white">
            {resources.map((item, idx) => (
                <div key={idx} className="flex flex-col lg:flex-row border-b border-[#262626] last:border-0">
                    <div className="w-full lg:w-[35%] p-6 py-12 lg:p-10 border-b lg:border-b-0 lg:border-r border-[#262626] flex flex-col items-start justify-center">
                        <div className="bg-[#1A1A1A] p-4 rounded-xl mb-8 border border-[#262626]">
                            <Image src={item.icon} alt="" width={40} height={40} />
                        </div>
                        <h2 className="text-2xl lg:text-3xl font-semibold mb-4">{item.title}</h2>
                        <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                    <div className="w-full lg:w-[65%] p-6 lg:p-12 flex flex-col justify-center">
                        <div className="relative w-full h-[220px] md:h-[350px] lg:h-[400px] rounded-2xl overflow-hidden mb-10 border border-[#262626]">
                            <video
                                src={item.mainImg}
                                autoPlay
                                loop
                                muted
                                playsInline
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
                            <div className="max-w-xl">
                                <h3 className="text-xl font-bold mb-2">{item.text}</h3>
                                <p className="text-sm text-gray-500 leading-relaxed">
                                    An in-depth whitepaper exploring the principles, applications, and potential impact of quantum computing.
                                </p>
                            </div>
                            <div className="flex items-center justify-center gap-2 bg-[#141414] border border-[#262626] py-3 px-6 rounded-xl hover:bg-[#1A1A1A] transition-all cursor-pointer group shrink-0 self-start md:self-center">
                                <span className="text-[#98989A] text-sm font-medium whitespace-nowrap">
                                    Download PDF Now
                                </span>
                                <ArrowUpRight
                                    size={18}
                                    className="text-[#FFD11A] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                                />
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            {item.stats.map((stat, i) => (
                                <div key={i} className="bg-[#141414] border border-[#262626] rounded-xl p-5 shadow-sm flex flex-col gap-1">
                                    <p className="text-xs text-[#98989A]">{stat.label}</p>
                                    <p className="text-sm lg:text-base font-medium">{stat.value}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            ))}
        </section>
    );
}