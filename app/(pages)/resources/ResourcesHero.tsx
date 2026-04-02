"use client";

import React from 'react';

const STATS_DATA = [
    { value: "300+", label: "Resources available" },
    { value: "12k+", label: "Total Downloads" },
    { value: "10k+", label: "Active Users" },
    { value: "100+", label: "Countries Accessing Our Content" },
];

export const ResourcesHero = () => {
    return (
        /* Секция на весь экран с верхним бордером */
        <section className="py-24 md:py-32 px-6 md:px-10 max-w-8xl mx-auto border-t border-white/5 ">
            <div className="flex flex-col gap-16 md:gap-24">

                {/* ЗАГОЛОВОК И ОПИСАНИЕ */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">

                    {/* Крупный заголовок на 5 колонок */}
                    <div className="md:col-span-5">
                        <h1 className="text-5xl md:text-6xl font-medium tracking-tight text-white leading-[1.1]">
                            Unlock a World of <br /> Knowledge
                        </h1>
                    </div>

                    {/* Описание на 7 колонок, чуть правее */}
                    <div className="md:col-span-7">
                        <p className="text-lg md:text-xl text-gray-400 leading-relaxed max-w-2xl">
                            Dive deep into the AI universe with our collection of insightful resources. Explore the latest trends, breakthrough, and discussions on artificial intelligence. Whether you’re a student or a professional, our resources offer a gateway to knowledge and innovations.
                        </p>
                    </div>
                </div>

                {/* БЛОК СТАТИСТИКИ (КАРТОЧКИ) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 mt-16 border border-white/10 rounded-[20px] overflow-hidden bg-white/[0.02]">
                    {STATS_DATA.map((stat, index) => (
                        <div
                            key={index}
                            className={`
                flex flex-col items-center justify-center text-center 
                py-12 px-6 md:py-16 
                transition-all hover:bg-white/[0.04] group
                /* Вертикальный бордер справа для всех, кроме последней, на десктопе */
                md:border-r border-white/10 last:border-r-0
                /* Бордер снизу для мобилок, чтобы разделять строки */
                border-b sm:even:border-l sm:border-b last:border-b-0 md:border-b-0
            `}
                        >
                            {/* Значение */}
                            <div className="text-4xl md:text-5xl font-bold text-white mb-3">
                                {stat.value.replace('+', '')}
                                <span className="text-yellow-400 ml-1">+</span>
                            </div>

                            {/* Подпись */}
                            <p className="text-sm md:text-[16px] text-gray-500 w-full  group-hover:text-gray-300 transition-colors uppercase tracking-wider font-medium">
                                {stat.label}
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};