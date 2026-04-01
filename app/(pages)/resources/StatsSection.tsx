import React from "react";

const statsData = [
    { value: "300", label: "Resources available" },
    { value: "12k", label: "Total Downloads" },
    { value: "10k", label: "Active Users" },
    { value: "100", label: "Countries Accesses Our Content" },
];

const StatsSection: React.FC = () => {
    return (
        <section className="bg-[#0B0B0B] text-white py-24 px-6 md:px-12">
            <div className="max-w-8xl mx-auto">

                {/* TOP */}
                <div className="flex flex-col lg:flex-row justify-between gap-10 mb-16">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight max-w-2xl">
                        Unlock a World of <br /> Knowledge
                    </h2>

                    <p className="text-zinc-500 text-sm md:text-base max-w-md leading-relaxed">
                        Dive deep into the AI universe with our collection of insightful podcasts.
                        Explore the latest trends, breakthroughs, and discussions on artificial intelligence.
                        Whether you're an enthusiast or a professional, our AI podcasts offer a gateway
                        to knowledge and innovation.
                    </p>
                </div>

                <div className="flex border border-zinc-800 rounded-2xl overflow-hidden bg-[#0E0E0E]">

                    {statsData.map((stat, index) => (
                        <div
                            key={index}
                            className={`
                            flex-1 p-8 md:p-12 flex flex-col justify-center
                            ${index !== 0 ? "border-l border-zinc-800" : ""}
                        `}
                        >
                            <h3 className="text-3xl md:text-4xl font-semibold mb-2 tracking-tight">
                                {stat.value}
                                <span className="text-yellow-400">+</span>
                            </h3>

                            <p className="text-zinc-500 text-xs md:text-sm">
                                {stat.label}
                            </p>
                        </div>
                    ))}

                </div>
            </div>
        </section>
    );
};

export default StatsSection;