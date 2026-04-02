import Image from "next/image";

interface WhitepaperCardProps {
    title: string;
    description: string;
    image: string;
    date: string;
    category: string;
    author: string;
}

export default function WhitepaperCard({
                                           title,
                                           description,
                                           image,
                                           date,
                                           category,
                                           author,
                                       }: WhitepaperCardProps) {
    return (
        /* Сетка 1:2 для десктопа, чтобы левая колонка была уже */
        <div className="grid md:grid-cols-[350px_1fr] gap-12 py-16 border-t border-[#1e1e1e]">

            {/* Left Column: Short Info */}
            <div className="flex flex-col gap-6">
                {/* Иконка в стиле макета */}
                <div className="relative w-12 h-12 bg-[#FFD700] flex items-center justify-center rounded-sm">
                    {/* Маленький черный треугольник/вырез для стиля как на картинке */}
                    <div className="absolute top-0 right-0 w-0 h-0 border-t-[12px] border-t-[#0d0d0d] border-l-[12px] border-l-transparent"></div>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="black">
                        <path d="M13 10V3L4 14H11V21L20 10H13Z" />
                    </svg>
                </div>

                <div className="space-y-4">
                    <h2 className="text-2xl font-semibold text-white leading-tight">
                        {title}
                    </h2>
                    <p className="text-[13px] text-gray-500 leading-relaxed max-w-[280px]">
                        {description}
                    </p>
                </div>
            </div>

            {/* Right Column: Main Card Content */}
            <div className="bg-[#111111] border border-white/5 rounded-xl p-6 lg:p-8">
                {/* Image Section */}
                <div className="relative w-full h-[280px] rounded-lg overflow-hidden mb-8 border border-white/5">
                    <Image
                        src={image}
                        alt={title}
                        fill
                        className="object-cover opacity-90 hover:scale-105 transition-transform duration-700"
                    />
                </div>

                {/* Content & Action Row */}
                <div className="flex flex-col lg:flex-row justify-between items-start gap-6 mb-10">
                    <div className="max-w-md">
                        <h3 className="text-xl font-medium text-white mb-2">{title}</h3>
                        <p className="text-[13px] text-gray-500 leading-relaxed">
                            An in-depth whitepaper exploring the principles, applications, and potential impact of this technology in the modern world.
                        </p>
                    </div>
                    <button className="flex items-center gap-2 text-[11px] font-bold text-white border border-white/10 rounded-md px-5 py-3 hover:bg-white hover:text-black transition-all shrink-0 uppercase tracking-wider">
                        Download PDF Now
                        <span className="text-yellow-400 text-lg leading-none">↗</span>
                    </button>
                </div>

                {/* Meta Data Grid - 3 Columns */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8 border-t border-white/5">
                    <div className="bg-[#181818] border border-white/5 rounded-lg p-4">
                        <p className="text-[10px] text-gray-600 uppercase tracking-widest mb-1.5 font-bold">Publication Date</p>
                        <p className="text-[13px] text-white font-medium">{date}</p>
                    </div>
                    <div className="bg-[#181818] border border-white/5 rounded-lg p-4">
                        <p className="text-[10px] text-gray-600 uppercase tracking-widest mb-1.5 font-bold">Category</p>
                        <p className="text-[13px] text-white font-medium">{category}</p>
                    </div>
                    <div className="bg-[#181818] border border-white/5 rounded-lg p-4">
                        <p className="text-[10px] text-gray-600 uppercase tracking-widest mb-1.5 font-bold">Author</p>
                        <p className="text-[13px] text-white font-medium">{author}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}