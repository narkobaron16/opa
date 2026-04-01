"use client";

import React from 'react';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {ArrowUpRight, Plus} from "lucide-react";

const FAQ_DATA = [
    {
        q: "What is AI?",
        a: "AI stands for Artificial Intelligence, which refers to the simulation of human intelligence in machines. It enables them to perform tasks like problem-solving, learning, and decision-making."
    },
    {
        q: "How can I listen to your podcasts?",
        a: "You can listen to our podcasts directly on our website or through major platforms like Spotify, Apple Podcasts, and Google Podcasts."
    },
    {
        q: "Are your podcasts free to listen to?",
        a: "Yes, all our standard episodes are completely free. We also offer premium content for our subscribers."
    },
    {
        q: "Can I download episodes to listen offline?",
        a: "Absolutely! If you use our mobile app or supported platforms, you can download any episode for offline playback."
    },
    {
        q: "How often do you release new episodes?",
        a: "We release new episodes every Tuesday and Friday to keep you updated with the latest in AI."
    }
];

export const FaqSection = () => {
    return (
        <section className="px-6 md:px-10 max-w-8xl mx-auto border-t border-white/5 bg-black">
            <div className="grid grid-cols-1 lg:grid-cols-12">

                {/* Левая часть */}
                <div className="lg:col-span-5 flex flex-col pt-20 md:pt-20 lg:pt-30 pb-20 lg:pr-16">
                    {/* Иконка в стиле логотипа */}
                    <div className="w-16 h-16 mb-10 grid grid-cols-2 gap-2">
                        <div className="w-6 h-6 bg-yellow-400 rounded-full" />
                        <div className="w-6 h-6 bg-[#262626] rounded-full" />
                        <div className="w-6 h-6 bg-[#262626] rounded-full" />
                        <div className="w-6 h-6 bg-yellow-400 rounded-full" />
                    </div>

                    <h2 className="text-4xl md:text-5xl font-medium leading-[1.1] text-white mb-6">
                        Asked question
                    </h2>
                    <p className="text-gray-400 text-lg mb-10 max-w-sm">
                        If the question is not available on our FAQ section, Feel free to contact us personally, we will resolve your respective doubts.
                    </p>

                    <div>
                        <Button
                            variant="outline"
                            className="bg-[#111111] border-white/10 text-white hover:bg-white/5 rounded-xl px-8 h-14 text-base transition-all"
                        >
                            Ask Question <ArrowUpRight className="ml-2 w-5 h-5 text-yellow-400" />
                        </Button>
                    </div>
                </div>

                <div className="lg:col-span-7 pt-20 pb-20 lg:pl-16 border-t lg:border-t-0 lg:border-l border-white/5">
                    <Accordion className="w-full space-y-5">
                        {FAQ_DATA.map((item, index) => (
                            <AccordionItem
                                key={index}
                                value={`item-${index}`}
                                className="border border-white/5 bg-[#111111] rounded-2xl px-8 transition-all"
                            >
                                <AccordionTrigger className="flex w-full items-center justify-between py-6 text-white text-lg font-medium">
                                    <span className="text-left">{item.q}</span>
                                </AccordionTrigger>
                                <AccordionContent className="text-gray-400 text-base leading-relaxed pb-6 border-t border-white/5 pt-4">
                                    {item.a}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>

            </div>
        </section>
    );
};