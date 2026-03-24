import React from 'react';

interface Resource {
    id: number;
    title: string;
    description: string;
    image: string;
}

const resources: Resource[] = [
    {
        id: 1,
        title: "FutureTech Trends 2024",
        description: "An ebook that predicts upcoming technology trends for the next year, including AI developments",
        image: "/resources/Image.svg",
    },
    {
        id: 2,
        title: "Space Exploration Ebook",
        description: "An ebook that predicts upcoming technology trends for the next year, including AI developments",
        image: "/resources/Image (1).svg",
    },
    {
        id: 3,
        title: "Quantum Computing Whitepaper",
        description: "An in-depth whitepaper exploring the principles,applications.",
        image: "/resources/Image (2).svg",
    },
];

const ResourceCard = ({ resource }: { resource: Resource }) => {
    return (
        <div className="flex flex-col py-12 px-4 space-y-2">
            <div className="relative aspect-video w-full overflow-hidden rounded-xl border border-white/10">
                <img
                    src={resource.image}
                    alt={resource.title}
                    className="h-full w-full object-cover"
                />
            </div>
            <div className="max-w-9xl mx-auto sm:grid-cols-2 md:grid-cols-3 gap-8">
                <h3 className="text-xl font-semibold text-white">
                    {resource.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                    {resource.description}
                </p>
            </div>
            <div className="flex items-center gap-3 pt-2">
                <button className="flex-1 rounded-lg border border-white/10 bg-[#1A1A1A] py-3 text-sm font-medium text-gray-300 transition hover:bg-[#252525]">
                    View Details
                </button>
                <button className="flex-1 rounded-lg border border-white/10 bg-[#1A1A1A] py-3 text-sm font-medium text-gray-300 transition hover:bg-[#252525]">
                    Download PDF Now
                </button>
            </div>
        </div>
    );
};

export default function ResourceGrid() {
    return (
        <section className="bg-[#0F0F0F] border-t border-white/10 py-12 px-4 md:px-8">
            <div className="mx-auto max-w-7xl">
                <div className="grid grid-cols-1 gap-10 md:grid-cols-3 lg:grid-cols-3">
                    {resources.map((item) => (
                        <ResourceCard key={item.id} resource={item} />
                    ))}
                </div>
            </div>
        </section>
    );
}