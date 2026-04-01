import React from 'react';
import { ResourceCard } from './ResourceCard';

const GRID_DATA = [
    {
        title: "FutureTech Trends 2024",
        description: "An ebook that predicts upcoming technology trends for the next year, including AI developments.",
        image: "/resources/trends.png"
    },
    {
        title: "Space Exploration Ebook",
        description: "An ebook that predicts upcoming technology trends for the next year, including AI developments.",
        image: "/resources/space-ebook.png"
    },
    {
        title: "Quantum Computing Whitepaper",
        description: "An in-depth whitepaper exploring the principles, applications.",
        image: "/resources/quantum-small.png"
    }
];

export const ResourceGrid = () => {
    return (
        <div className="border border-white/10 rounded-[40px] overflow-hidden bg-white/[0.02]">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {GRID_DATA.map((item, index) => (
                    <div
                        key={index}
                        className={`
                            p-8 md:p-12 
                            border-white/10
                            /* Бордер снизу для всех, кроме последнего ряда */
                            border-b last:border-b-0
                            /* Бордер справа: */
                            /* Для планшетов (2 колонки) - у нечетных */
                            md:odd:border-r md:[&:nth-child(2)]:border-b
                            /* Для десктопа (3 колонки) - у 1-й и 2-й в ряду */
                            lg:border-r lg:[&:nth-child(3n)]:border-r-0
                            lg:border-b-0 /* Сбрасываем нижний бордер для десктопной сетки 1x3 */
                        `}
                    >
                        <ResourceCard
                            title={item.title}
                            description={item.description}
                            image={item.image}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};