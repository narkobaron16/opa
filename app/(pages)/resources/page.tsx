'use client';

import React from 'react';
import Footer from "@/app/components/ui/Footer";
import Header from "@/app/components/ui/Header";
import StatsSection from "@/app/(pages)/resources/StatsSection";
import ResourceGrid from "@/app/(pages)/resources/ResourceGrid";


export default function NewsPage() {
    return (
        // Основной контейнер с темным фоном из макета
        <div className="min-h-screen bg-white dark:bg-black text-white flex flex-col relative overflow-hidden">

            {/* 2. ШАПКА: Header */}
            <Header />

            {/* ГЛАВНЫЙ КОНТЕНТ: Ограничен по ширине и центрирован */}
            <main className="relative z-10 flex-grow mx-auto px-6 md:px-10 w-full space-y-24 md:space-y-32 py-16 md:py-24">

                {/* 3. HERO СЕКЦИЯ: Заголовок и Статистика */}
                <section className="animate-in fade-in duration-700">
                    <StatsSection />
                </section>

                <ResourceGrid />

            </main>

            {/* 7. ПОДВАЛ: Footer */}
            <Footer />

        </div>
    );
}