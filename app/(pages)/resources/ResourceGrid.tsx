import Image from "next/image";

const cards = [
    {
        image: "/images/vr.jpg",
        tag: "VIRTUAL REALITY",
        date: "22nd October, 2023",
        title: "VR in Education: Transforming how we learn, teach, and experience.",
        views: "1,204",
        readTime: "5 min read",
    },
    {
        image: "/images/space2.jpg",
        tag: "SPACE EXPLORATION",
        date: "22nd October, 2023",
        title: "Space Exploration: A look at the latest advancements in space technology.",
        views: "2,104",
        readTime: "5 min read",
    },
    {
        image: "/images/quantum2.jpg",
        tag: "QUANTUM COMPUTING",
        date: "22nd October, 2023",
        title: "Quantum Computing Whitepaper: The future of computing is here.",
        views: "3,204",
        readTime: "5 min read",
    },
];

export default function ResourceGrid() {
    return (
        <section className="bg-[#0d0d0d] px-6 md:px-16 py-12 border-t border-[#1a1a1a]">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-5">
                {cards.map((card) => (
                    <div
                        key={card.title}
                        className="bg-[#111] rounded-lg overflow-hidden border border-[#1e1e1e] hover:border-[#2e2e2e] transition-colors"
                    >
                        <div className="relative w-full h-44">
                            <Image src={card.image} alt={card.title} fill className="object-cover" />
                        </div>
                        <div className="p-4">
                            <div className="flex items-center gap-2 mb-2">
                <span className="text-[10px] text-yellow-400 font-semibold tracking-wider">
                  {card.tag}
                </span>
                                <span className="text-[10px] text-gray-600">{card.date}</span>
                            </div>
                            <p className="text-sm text-white font-medium leading-snug mb-4">
                                {card.title}
                            </p>
                            <div className="flex items-center justify-between text-[11px] text-gray-600">
                                <span>{card.views} views</span>
                                <span>{card.readTime}</span>
                                <button className="text-white border border-[#2a2a2a] rounded px-2.5 py-1 hover:border-yellow-400 transition-colors text-[10px]">
                                    View Guide →
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
