import React from 'react';

const users = [
    {
        id: 1,
        icon:"/const/Profile.png",
        name: "Sarah Thompson",
        location: "San Francisco, USA",
        text: "The ebooks on AI in education have been a game-changer for my research. They provide in-depth insights and case studies that are invaluable for staying updated.",
    },
    {
        id: 2,
        icon:"/const/Profile1.svg",
        name: "Raj Patel",
        location: "Mumbai, India",
        text: "The whitepapers on renewable energy strategies have greatly influenced my work. They offer detailed data and analysis, helping me make informed decisions.",
    },
    {
        id: 3,
        icon:"/const/Profile2.svg",
        name: "Emily Adams",
        location: "London, UK",
        text: "The AI in healthcare reports have been an essential resource for our hospital. They highlight the latest innovations and best practices, improving patient care.",
    },
    {
        id: 4,
        icon:"/const/Profile3.svg",
        name: "Alan Jackson",
        location: "Houston, USA",
        text: "The reports on space mining prospects have fueled my passion for space exploration. They provide a comprehensive view of what lies beyond Earth.",
    },
    {
        id: 5,
        icon:"/const/Profile4.svg",
        name: "Jessica Miller",
        location: "Boston, USA",
        text: "The research papers on genomic breakthroughs have been a goldmine of information. They've shaped the direction of my research in genomics.",
    },
    {
        id: 6,
        icon:"/const/Profile5.svg",
        name: "Diego Lopez",
        location: "Barcelona, Spain",
        text: "The ebooks on renewable energy strategies have given me the insights I needed to pivot our startup toward sustainability.",
    },
];

const Testimonials = () => {
    return (
        <section className="bg-black py-12 px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 text-white text-center">
                {users.map((item) => (
                    <div
                        key={item.id}
                        className="flex flex-col items-center text-center p-8 md:p-12 border border-zinc-800">
                        <div className="w-16 h-16 rounded-full bg-zinc-800 mb-4 overflow-hidden">
                            <img src={item.icon} alt={item.name} className="w-full h-full object-cover" />
                        </div>

                        <h3 className="text-white font-medium text-lg">{item.name}</h3>
                        <p className="text-zinc-500 text-sm mb-6">{item.location}</p>

                        <div className="bg-[#121212] border border-zinc-800 rounded-2xl p-6 w-full max-w-[380px] min-h-[180px] flex flex-col justify-center">
                            <div className="flex justify-center mb-4">
                                <img src="/const/Sub%20Container.svg" alt="stars" />
                            </div>

                            <p className="text-zinc-300 text-sm md:text-base text-center leading-relaxed">
                                {item.text}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Testimonials;
