import React from 'react';

const PodcastsSection = () => {
    return (
        <section className="bg-[#141414] text-white py-12 px-6 md:py-20 border-b border-gray-800">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-end justify-between">
                <div className="flex-[1.5]">
                    <h2 className="text-3xl md:text-5xl lg:text-6xl font-semibold leading-tight tracking-tight">
                        Unlock the World of Artificial Intelligence <br className="hidden md:block" /> through Podcasts
                    </h2>
                </div>
                <div className="flex-1">
                    <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                        Dive deep into the AI universe with our collection of insightful podcasts.
                        Explore the latest trends, breakthroughs, and discussions on artificial intelligence.
                        Whether you're an enthusiast or a professional, our AI podcasts offer a
                        gateway to knowledge and innovation.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default PodcastsSection;