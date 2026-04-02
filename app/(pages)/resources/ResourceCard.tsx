import React from 'react';
import Image from 'next/image';
import { Button } from "@/components/ui/button";

interface ResourceCardProps {
    title: string;
    description: string;
    image: string;
}

export const ResourceCard = ({ title, description, image }: ResourceCardProps) => {
    return (
        <div className="flex flex-col group">
            {/* Изображение */}
            <div className="relative aspect-[16/10] rounded-[24px] overflow-hidden mb-6 border border-white/5 bg-[#141414]">
                <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
            </div>

            {/* Контент */}
            <div className="space-y-4 flex-grow">
                <h4 className="text-xl font-medium text-white leading-tight">
                    {title}
                </h4>
                <p className="text-gray-500 text-sm leading-relaxed line-clamp-2">
                    {description}
                </p>
            </div>

            {/* Кнопки */}
            <div className="flex gap-3 mt-8">
                <Button
                    variant="outline"
                    className="flex-1 bg-white/5 border-white/10 text-white hover:bg-white/10 rounded-xl h-12 text-sm"
                >
                    View Details
                </Button>
                <Button
                    variant="outline"
                    className="flex-1 bg-white/5 border-white/10 text-white hover:bg-white/10 rounded-xl h-12 text-sm"
                >
                    Download PDF Now
                </Button>
            </div>
        </div>
    );
};