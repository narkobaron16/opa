"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { Plus, Minus, ArrowUpRight } from 'lucide-react';

export default function Asked(){
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const faqs = [
        {
            question: "What is AI?",
            answer: "AI stands for Artificial Intelligence, which refers to the simulation of human intelligence in machines. It enables them to perform tasks like problem-solving, learning, and decision-making."
        },
        { question: "How can I listen to your podcasts?", answer: "You can listen on our website or any major podcast platform." },
        { question: "Are your podcasts free to listen to?", answer: "Yes, all our basic episodes are completely free." },
        { question: "Can I download episodes to listen offline?", answer: "Yes, our mobile app supports offline downloads." },
        { question: "How often do you release new episodes?", answer: "We release new episodes every Tuesday and Thursday." }
    ];

    return (
        <section className="bg-[#0F0F0F] text-white flex items-center justify-center">
            <div className="max-w-8xl w-full flex flex-col lg:flex-row border-b border-zinc-800/50">
                <div className="flex flex-col items-start justify-center space-y-8 flex-1 p-10 lg:p-16 lg:border-r border-zinc-800/50">
                    <div className="relative w-16 h-16">
                        <Image
                            src="/get/Icon (3).svg"
                            alt="Logo"
                            fill
                            className="object-contain"
                        />
                    </div>
                    <div className="space-y-4">
                        <h1 className="text-4xl md:text-5xl font-bold leading-tight max-w-sm">
                            Asked question
                        </h1>
                        <p className="max-w-[413px] text-[#98989A] text-[16px] font-light leading-relaxed">
                            If the question is not available on our FAQ section, Feel free to contact us personally, we will resolve your respective doubts.
                        </p>
                    </div>
                    <button className="flex items-center gap-2 bg-[#1A1A1A] border border-zinc-800 px-6 py-4 rounded-xl text-sm font-medium hover:bg-[#222] transition-all group">
                        Ask Question
                        <ArrowUpRight size={20} className="text-yellow-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </button>
                </div>
                <div className="flex-1 p-6 md:p-10 lg:p-20 space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="border-b border-zinc-800/50 last:border-none pb-4">
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full flex items-center justify-between py-6 text-left hover:text-zinc-300 transition">
                                <span className="text-lg md:text-xl font-medium">{faq.question}</span>
                                {openIndex === index ? (
                                    <Minus size={24} className="text-zinc-400" />
                                ) : (
                                    <Plus size={24} className="text-yellow-400" />
                                )}
                            </button>

                            {openIndex === index && (
                                <div className="pb-6 text-zinc-500 text-[16px] font-light leading-relaxed animate-in fade-in slide-in-from-top-2 duration-300">
                                    {faq.answer}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
