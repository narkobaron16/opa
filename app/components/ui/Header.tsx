"use client"

import React from 'react';
import Link from 'next/link';
import Image from "next/image";


const Header = () => {
    return (
        <header className="w-full bg-[#0F0F0F] border-b border-zinc-800 sticky top-0 z-50">
            <div className="container mx-auto px-4 h-20 flex items-center justify-between">

                <div className="flex items-center justify-between gap-2">
                    <div className="w-10 h-10 flex items-center justify-center">
                        <div className="w-6 h-6 border-4 border-black  border-t-transparent rotate-45">
                          <Image src="/Group.png" width={200} height={20} alt=""/>
                        </div>
                    </div>
                    <span className="text-white font-bold text-xl tracking-tight">FutureTech</span>
                </div>

                <nav className="hidden md:flex items-center gap-1 bg-zinc-900/50 border border-zinc-800 rounded-full px-2 py-1">
                    <Link href="/" className="px-6 py-2 rounded-full bg-zinc-800 text-white text-sm font-medium transition">
                        Home
                    </Link>
                    <Link href="/news" className="px-6 py-2 rounded-full text-zinc-400 hover:text-white text-sm font-medium transition">
                        News
                    </Link>
                    <Link href="" className="px-6 py-2 rounded-full text-zinc-400 hover:text-white text-sm font-medium transition">
                        Podcasts
                    </Link>
                    <Link href="#" className="px-6 py-2 rounded-full text-zinc-400 hover:text-white text-sm font-medium transition">
                        Resources
                    </Link>
                </nav>

                <div>
                    <Link
                        href="#"
                        className="bg-yellow-400 hover:bg-yellow-500 text-black px-6 py-2.5 rounded-lg text-sm font-bold transition-all">
                        Contact Us
                    </Link>
                </div>
            </div>
        </header>
    );
};

export default Header;