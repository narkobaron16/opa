'use client';

import React, { useState } from 'react';
import Footer from "@/app/components/ui/Footer";
import Header from "@/app/components/ui/Header";
import { ResourcesHero } from "@/app/(pages)/resources/ResourcesHero";
import { ResourcesHeader } from "@/app/(pages)/resources/ResourcesHeader";
import { ResourceFeaturedCard } from "@/app/(pages)/resources/ResourceFeaturedCard";
import { CONTENT_BY_TAB } from "./data";
import {ResourceGrid} from "@/app/(pages)/resources/ResourceGrid";
import FutureTech from "@/app/(pages)/Home/FutureTech";

export default function NewsPage() {
    const [tab, setTab] = useState("whitepapers");

    // Выбираем объект данных для текущего таба
    const currentData = CONTENT_BY_TAB[tab as keyof typeof CONTENT_BY_TAB];

    return (
        <div className="min-h-screen bg-black/60 text-white flex flex-col relative overflow-hidden">
            <Header />

            <main className="relative z-10 flex-grow mx-auto w-full max-w-8xl">
                <ResourcesHero />

                <div className="px-6 md:px-10 space-y-24 md:space-y-32 py-16 md:py-24">
                    <ResourcesHeader activeTab={tab} setActiveTab={setTab} />

                    <div className="">
                        {currentData && Array.isArray(currentData) ? (
                            currentData.map((item, index) => (
                                <ResourceFeaturedCard
                                    key={`${tab}-${index}`}
                                    globalInfo={item.globalInfo}
                                    cards={item.cards}
                                />
                            ))
                        ) : (
                            <div className="text-center py-20 text-gray-500">
                                No resources available.
                            </div>
                        )}
                    </div>

                    <ResourceGrid />
                    <FutureTech/>
                </div>
            </main>

            <Footer />
        </div>
    );
}