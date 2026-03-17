import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';

const footerData = [
    {
        title: "Home",
        links: ["Features", "Blogs", { text: "Resources", badge: "New" }, "Testimonials", "Contact Us", "Newsletter"],
    },
    {
        title: "News",
        links: ["Trending Stories", "Featured Videos", "Technology", "Health", "Politics", "Environment"],
    },
    {
        title: "Blogs",
        links: ["Quantum Computing", "AI Ethics", "Space Exploration", { text: "Biotechnology", badge: "New" }, "Renewable Energy", "Biohacking"],
    },
    {
        title: "podcasts",
        links: ["AI Revolution", { text: "AI Revolution", badge: "New" }, "TechTalk AI", "AI Conversations"],
    },
];

const resourceButtons = ["Whitepapers", "Ebooks", "Reports", "Research Papers"];

const Footer = () => {
    return (
        <footer className="bg-[#0A0A0A] text-white pt-16 pb-8 px-4 md:px-12">
            <div className="max-w-9xl mx-auto">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 mb-16">
                    {footerData.map((section, idx) => (
                        <div key={idx}>
                            <h4 className="font-bold mb-6">{section.title}</h4>
                            <ul className="space-y-4">
                                {section.links.map((link, i) => (
                                    <li key={i} className="text-zinc-500 hover:text-white transition-colors cursor-pointer flex items-center gap-2">
                                        {typeof link === 'string' ? link : (
                                            <>
                                                {link.text}
                                                <span className="bg-[#1A1A1A] border border-zinc-800 text-[10px] px-2 py-0.5 rounded text-zinc-300">
                                                   {link.badge}
                                                </span>
                                            </>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                    <div>
                        <h4 className="font-bold mb-6">Resources</h4>
                        <div className="flex flex-col gap-3">
                            {resourceButtons.map((btn, i) => (
                                <button key={i} className="flex items-center justify-between border border-zinc-800 bg-[#121212] px-4 py-2 rounded-lg hover:bg-zinc-800 transition-colors group">
                                    <span className="text-sm">{btn}</span>
                                    <ArrowUpRight className="text-yellow-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" size={18} />
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Нижняя часть */}
                <div className="border-t border-zinc-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="flex gap-6 text-sm text-zinc-500">
                        <span className="hover:text-white cursor-pointer">Terms & Conditions</span>
                        <span className="border-l border-zinc-800 pl-6 hover:text-white cursor-pointer">Privacy Policy</span>
                    </div>
                    <div className="flex gap-4">
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                            <Image
                                src="/footer/Vector.svg"
                                alt="Twitter"
                                width={24}
                                height={24}
                            />
                        </a>
                        <a href="https://medium.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                            <Image
                                src="/footer/Icon.svg"
                                alt="Medium"
                                width={24}
                                height={24}
                            />
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                            <Image
                                src="/footer/Icon (1).svg"
                                alt="LinkedIn"
                                width={24}
                                height={24}
                            />
                        </a>
                    </div>

                    <p className="text-sm text-zinc-500">
                        © 2024 FutureTech. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;