"use client";

import React from 'react';

interface ResourcesHeaderProps {
    activeTab: string;
    setActiveTab: (tab: string) => void;
}

const TABS = [
    { label: "Whitepapers", value: "whitepapers" },
    { label: "Ebooks", value: "ebooks" },
    { label: "Reports", value: "reports" },
];

export const ResourcesHeader = ({ activeTab, setActiveTab }: ResourcesHeaderProps) => {
    return (
        /* Контейнер теперь имеет мягкий серый фон и скругление, как на макете */
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center mb-16 p-6 md:p-8 bg-[#1A1A1A] border border-white/5 rounded-[24px]">
            <div className="md:col-span-7">
                <div className="inline-block px-3 py-1 bg-white/5 border border-white/10 rounded-md text-xs uppercase tracking-widest text-white/60 mb-4">
                    Dive into the Details
                </div>
                <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-white leading-tight">
                    In-Depth Reports and Analysis
                </h2>
            </div>

            <div className="md:col-span-5 flex md:justify-end">
                {/* Фон подложки табов теперь темно-серый, чтобы выделяться на фоне #1A1A1A */}
                <div className="flex items-center gap-1 p-1.5 bg-[#141414] border border-white/5 rounded-xl shadow-inner">
                    {TABS.map((tab) => (
                        <button
                            key={tab.value}
                            onClick={() => setActiveTab(tab.value)}
                            className={`px-6 py-2.5 rounded-lg text-sm font-medium transition-all ${
                                activeTab === tab.value
                                    ? 'bg-[#262626] text-white shadow-lg'
                                    : 'text-gray-500 hover:text-gray-300'
                            }`}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};