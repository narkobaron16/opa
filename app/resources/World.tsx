export default function World() {
    const stats = [
        { value: '300+', label: 'Resources available' },
        { value: '12k+', label: 'Total Downloads' },
        { value: '10k+', label: 'Active Users' },
        { value: '100+', label: 'Countries Accesses Our Content' },
    ];
    return (
        <section className="bg-[#0F0F0F] text-white py-4  md:px-12">
            <div className="flex flex-col p-2 lg:flex-row items-center justify-between border-b border-zinc-800 pb-12">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold max-w-2xl">
                    Unlock a World of Knowledge
                </h2>
                <p className="text-gray-500 mt-6 lg:mt-15">
                    Dive deep into the AI universe with our collection of insightful podcasts.
                    Explore the latest trends, breakthroughs, and discussions on artificial intelligence.
                    Whether you're an enthusiast or a professional, our AI podcasts offer a gateway to knowledge and innovation.
                </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-4 divide-x-0 lg:divide-x divide-zinc-800 border-t border-zinc-800 lg:border-t-0">
                {stats.map((item, index) => (
                    <div
                        key={index}
                        className={`flex flex-col items-center justify-center p-8  border-zinc-800 
                        ${index % 2 === 0 ? 'border-m lg:border-m-0' : ''}`}
                    >
            <span className="text-3xl md:text-4xl font-bold text-white mb-1">
                {item.value.split('+')[0]}
                <span className="text-yellow-500">+</span>
            </span>
                 <p className="text-zinc-500 text-xs md:text-sm text-center uppercase tracking-wide">
                    {item.label}
                 </p>
                    </div>
                ))}
            </div>
        </section>
    )
}