"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import Image from "next/image";
import { Menu, X } from 'lucide-react';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const closeMenu = () => setIsOpen(false);
    return (
        <header className="w-full bg-[#141414] border-b border-zinc-800 sticky top-0 z-50 px-4 md:px-10">
            <div className="h-20 flex items-center justify-between max-w-9xl mx-auto">
                <Link href="/" className="flex items-center gap-2">
                    <Image src="/Group.png" width={40} height={40} alt="Logo" />
                    <span className="text-white font-bold text-xl tracking-tight">FutureTech</span>
                </Link>

                <nav className="hidden lg:flex items-center gap-1 bg-[#1A1A1A] border border-zinc-800 rounded-full px-1 py-1">
                    <Link href="/" className="px-6 py-2 rounded-full text-zinc-400 hover:text-white text-sm font-medium transition">
                        Home
                    </Link>
                    <Link href="/news" className="px-6 py-2 rounded-full text-zinc-400 hover:text-white text-sm font-medium transition">
                        News
                    </Link>
                    <Link href="/podcasts" className="px-6 py-2 rounded-full text-zinc-400 hover:text-white text-sm font-medium transition">
                        Podcasts
                    </Link>
                    <Link href="/resources" className="px-6 py-2 rounded-full text-zinc-400 hover:text-white text-sm font-medium transition">
                        Resources
                    </Link>
                </nav>
                <div className="hidden lg:block">
                    <Link href="/contact" className="bg-[#FFD700] hover:bg-yellow-500 text-black px-6 py-2.5 rounded-lg text-sm font-bold transition">
                        Contact Us
                    </Link>
                </div>
                <button
                    className="lg:hidden text-white p-2"
                    onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>
            {isOpen && (
                <div className="lg:hidden absolute top-20 left-0 w-full bg-[#141414] border-b border-zinc-800 p-6 flex flex-col gap-6 shadow-2xl">
                    <nav className="flex flex-col gap-4">
                        <Link href="/" onClick={closeMenu} className="text-zinc-400 text-lg border-b border-zinc-800 pb-2">Home</Link>
                        <Link href="/news" onClick={closeMenu} className="text-zinc-400 text-lg border-b border-zinc-800 pb-2">News</Link>
                        <Link href="/podcasts" onClick={closeMenu} className="text-zinc-400 text-lg border-b border-zinc-800 pb-2">Podcasts</Link>
                        <Link href="/resources" onClick={closeMenu} className="text-zinc-400 text-lg border-b border-zinc-800 pb-2">Resources</Link>
                    </nav>
                    <Link
                        href="/contact"
                        onClick={closeMenu}
                        className="bg-[#FFD700] text-black text-center py-3 rounded-lg font-bold"
                    >
                        Contact Us
                    </Link>
                </div>
            )}
        </header>
    );
};

export default Header;