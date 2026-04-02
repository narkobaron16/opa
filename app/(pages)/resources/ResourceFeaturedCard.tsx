// app/(pages)/resources/ResourceFeaturedCard.tsx
import React from 'react';
import Image from 'next/image';
import { Button } from "@/components/ui/button";
import { ArrowUpRight, LucideIcon } from "lucide-react";

interface FeaturedCardProps {
    globalInfo: {
        title: string;
        description: string;
        icon: LucideIcon;
    };
    cards: {
        title: string;
        description: string;
        image: string;
        stats: { label: string; value: string }[];
    }[];
}

export const ResourceFeaturedCard = ({ globalInfo, cards }: FeaturedCardProps) => {
    // Деструктурируем Icon для использования как компонент
    const { icon: GlobalIcon } = globalInfo;

    return (
        <div className="flex flex-col lg:flex-row border-t border-white/5">

            {/* ЛЕВАЯ КОЛОНКА: Глобальная информация (как на макете) */}
            <div className="w-full lg:w-[40%] p-8 md:p-12 lg:border-r border-white/5 flex flex-col justify-center">
                <div className="w-16 h-16 bg-yellow-400/10 rounded-2xl flex items-center justify-center border border-yellow-400/20 mb-8 shadow-[0_0_20px_rgba(250,204,21,0.1)]">
                    {GlobalIcon && (
                        <GlobalIcon className="w-7 h-7 text-yellow-400 drop-shadow-[0_0_8px_rgba(250,204,21,0.6)]" />
                    )}
                </div>

                <h3 className="text-3xl md:text-4xl font-medium text-white tracking-tight mb-6 leading-tight">
                    {globalInfo.title}
                </h3>

                <p className="text-gray-400 leading-relaxed text-lg">
                    {globalInfo.description}
                </p>
            </div>

            {/* ПРАВАЯ КОЛОНКА: Локальная информация для каждой карточки */}
            <div className="w-full lg:w-[60%] flex flex-col bg-white/[0.01]">

                {cards.map((card, index) => (
                    <div
                        key={`${globalInfo.title}-${index}`}
                        className="p-8 md:p-12 border-b border-white/5 last:border-b-0"
                    >
                        {/* 1. Большое изображение */}
                        <div className="relative aspect-video rounded-[32px] overflow-hidden mb-10 border border-white/5 shadow-2xl bg-[#141414]">
                            <Image
                                src={card.image}
                                alt={card.title}
                                fill
                                sizes="(max-w-1200px) 100vw, 50vw"
                                className="object-cover"
                                priority={index === 0} // Приоритет загрузки только для первой карточки
                            />
                            {/* Легкие градиенты */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-50 pointer-events-none" />
                            <div className="absolute inset-0 shadow-[inset_0_0_60px_rgba(0,0,0,0.3)] pointer-events-none" />
                        </div>

                        {/* 2. Блок "Заголовок + Описание + Кнопка" (в ряд на десктопе) */}
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mb-12">
                            <div className="space-y-3">
                                <h4 className="text-2xl font-medium text-white tracking-tight leading-tight">
                                    {card.title}
                                </h4>
                                <p className="text-gray-500 leading-relaxed max-w-xl">
                                    {card.description}
                                </p>
                            </div>

                            {/* Кнопка "Download" (как на макете) */}
                            <Button
                                variant="outline"
                                className="w-full sm:w-auto bg-white/5 border-white/10 text-white hover:bg-white/10 rounded-xl px-6 h-14 transition-all group shrink-0"
                            >
                                Download PDF Now <ArrowUpRight className="ml-2 w-4 h-4 text-yellow-400" />
                            </Button>
                        </div>

                        {/* 3. Статистика (в ряд) */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-10 border-t border-white/5">
                            {card.stats.map((stat, i) => (
                                <div
                                    key={i}
                                    className="p-6 bg-white/[0.03] border border-white/5 rounded-2xl flex flex-col items-start justify-center"
                                >
                                    <p className="text-sm text-gray-500 mb-2 uppercase tracking-wider font-medium">
                                        {stat.label}
                                    </p>
                                    <p className="text-xl font-medium text-white">
                                        {stat.value}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};