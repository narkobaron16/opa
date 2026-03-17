"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import { Heart, Eye, Send, ArrowDown } from 'lucide-react';

const Covid = () => {
    const [isExpanded, setIsExpanded] = useState(false);
    const Contents = [
        "Introduction", "AI in Diagnostic Imaging", "Predictive Analytics and Disease Prevention",
        "Personalized Treatment Plans", "Drug Discovery and Research", "AI in Telemedicine",
        "Ethical Considerations", "The Future of AI in Healthcare", "Conclusion"
    ];
    return (
        <div className="bg-black text-white min-h-screen">
            <section className="relative w-full h-[400px] md:h-[500px] overflow-hidden flex items-center justify-center border-b border-white/10">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/card/Image (4).svg"
                        alt="Hero"
                        fill
                        priority
                        className="object-cover animate-subtle-zoom"
                    />
                    <div className="absolute inset-0 bg-black/60" />
                </div>
                <div className="relative z-10 container text-center">
                    <h1 className="text-3xl md:text-5xl font-bold leading-tight tracking-tight">
                        The Rise of Artificial Intelligence in Healthcare
                    </h1>
                </div>
            </section>

            <section className="">
                <div className="container m-auto flex flex-col lg:flex-row gap-12">
                    <div className="flex-1 space-y-12">
                        <div className="border-b border-white/10 py-6">
                            <h3 className="text-gray-400 text-sm mb-4 uppercase tracking-widest">Introduction</h3>
                            <p className="text-gray-300 text-lg leading-relaxed">
                                Artificial Intelligence (AI) has emerged as a transformative force in the healthcare industry, reshaping patient care, diagnostics, and research. In this blog post, we explore the profound impact of AI in healthcare, from revolutionizing diagnostic accuracy to enhancing patient outcomes.
                            </p>
                        </div>

                        <div className="space-y-8 border-t-[#262626]">
                            <h2 className="text-2xl md:text-3xl font-semibold">Artificial Intelligence (AI)</h2>
                            <p className="text-gray-400 leading-relaxed">
                                Artificial Intelligence (AI) has permeated virtually every aspect of our lives, and healthcare is no exception. The integration of
                                AI in healthcare is ushering in a new era of medical practice, where machines complement the capabilities of healthcare
                                professionals, ultimately improving patient outcomes and the efficiency of the healthcare system.
                            </p>

                            <h2 className="text-2xl md:text-3xl font-semibold">Predictive Analytics</h2>
                            <div className="relative group">
                                <div className={`transition-all duration-500 ease-in-out ${isExpanded ? 'blur-0' : 'max-h-40 overflow-hidden blur-[2px] select-none'}`}>
                                    <p className="text-gray-400 leading-relaxed">
                                        One of the most prominent applications of AI in healthcare is in diagnostic imaging. AI algorithms have demonstrated
                                        remarkable proficiency in interpreting medical images such as X-rays, MRIs, and CT scans. They can identify anomalies and
                                        deviations that might be overlooked by the human eye. This is particularly valuable in early disease detection. For instance,
                                        AI can aid radiologists in detecting minute irregularities in mammograms or identifying critical findings in chest X-rays, potentially indicative of life-threatening conditions.
                                        AI is also being used to predict patient outcomes and identify those at high risk for certain conditions. By analyzing vast amounts of patient data, including electronic health records and genetic information, AI models can provide insights that help clinicians make more informed decisions.
                                    </p>
                                </div>
                                {!isExpanded && (
                                    <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-t from-black via-transparent to-transparent">
                                        <button
                                            onClick={() => setIsExpanded(true)}
                                            className="flex items-center gap-2 bg-[#1A1A1A] border border-gray-800 px-6 py-3 rounded-lg hover:bg-[#252525] transition shadow-xl">
                                            Read Full Blog <ArrowDown size={16} className="text-yellow-500" />
                                        </button>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    <aside className="border-l border-[#262626] pr-12 pl-12 py-10 space-y-8">
                        <div className="flex flex-wrap gap-3">
                            <div className="flex items-center gap-2 bg-[#1A1A1A] px-4 py-2 rounded-full border border-[#262626]">
                                <Heart size={18} className="text-orange-500 fill-orange-500" />
                                <span className="text-sm text-gray-300">24.5k</span>
                            </div>
                            <div className="flex items-center gap-2 bg-[#1A1A1A] px-4 py-2 rounded-full border border-[#262626]">
                                <Eye size={18} className="text-gray-400" />
                                <span className="text-sm text-gray-300">50k</span>
                            </div>
                            <div className="flex items-center gap-2 bg-[#1A1A1A] px-4 py-2 rounded-full border border-[#262626]">
                                <Send size={18} className="text-gray-400" />
                                <span className="text-sm text-gray-300">206</span>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 pt-6 border-t border-[#262626]">
                            <div>
                                <p className="text-gray-500 text-xs uppercase mb-1">Publication Date</p>
                                <p className="font-medium text-sm">October 15, 2023</p>
                            </div>
                            <div>
                                <p className="text-gray-500 text-xs uppercase mb-1">Category</p>
                                <p className="font-medium text-sm">Healthcare</p>
                            </div>
                        </div>
                        <div className="bg-[#111111] p-5 rounded-2xl border border-[#262626]">
                            <h4 className="text-gray-400 text-xs uppercase mb-4 font-bold tracking-tighter">Table of Contents</h4>
                            <ul className="space-y-4 text-sm text-gray-400">
                                {Contents.map((item, index) => (
                                    <li key={index} className="flex items-center gap-2 hover:text-white cursor-pointer transition">
                                        <div className="w-1 h-1 rounded-full bg-white" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </aside>
                </div>
            </section>
        </div>
    );
};

export default Covid;