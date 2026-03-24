import React from 'react';
import { ArrowUpRight, Twitter, Linkedin } from 'lucide-react';

const ContactSection = () => {
    const contactData = [
        {
            title: 'General Inquiries',
            email: 'contact@ai-podcasts.com',
            phone: '+1 (123) 456-7890',
        },
        {
            title: 'Technical Support',
            email: 'contact@ai-podcasts.com',
            phone: '+1 (123) 456-7890',
        },
    ];
    return (
        <footer className="bg-[#0F0F0F] border-b border-white/10 text-white py-1 px-6">
            <div className="max-w-9xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                {contactData.map((item, index) => (
                    <div key={index} className="flex flex-col gap-4 border-zinc-800 lg:border-r p-8">
                        <h3 className="text-zinc-400 text-sm font-medium">{item.title}</h3>
                        <div className="flex flex-col gap-2">
                            <a href={`mailto:${item.email}`} className="flex items-center justify-between bg-[#1A1A1A] border border-zinc-800 p-3 rounded-lg hover:bg-zinc-800 transition-colors text-sm">
                                {item.email} <ArrowUpRight size={16} className="text-yellow-500" />
                            </a>
                            <a href={`tel:${item.phone}`} className="flex items-center justify-between bg-[#1A1A1A] border border-zinc-800 p-3 rounded-lg hover:bg-zinc-800 transition-colors text-sm">
                                {item.phone} <ArrowUpRight size={16} className="text-yellow-500" />
                            </a>
                        </div>
                    </div>
                ))}
                <div className="flex flex-col gap-4 border-zinc-800 lg:border-r p-8">
                    <h3 className="text-zinc-400 text-sm font-medium">Our Office</h3>
                    <p className="text-zinc-300 text-sm leading-relaxed">
                        Адрес: 123 AI Tech Avenue,<br /> Techville, 54321
                    </p>
                    <button className="flex items-center justify-between bg-[#1A1A1A] border border-zinc-800 p-3 rounded-lg hover:bg-zinc-800 transition-colors text-sm mt-auto">
                        Get Directions<ArrowUpRight size={16} className="text-yellow-500" />
                    </button>
                </div>
                <div className="flex flex-col gap-4 p-8">
                    <h3 className="text-zinc-400 text-sm font-medium">Connect with Us</h3>
                    <div className="flex gap-3">
                        {[
                            { icon: <Twitter size={20} />, href: '#' },
                            { icon: <MediumIcon />, href: '#' },
                            { icon: <Linkedin size={20} />, href: '#' },
                        ].map((social, i) => (
                            <a key={i} href={social.href} className="bg-[#1A1A1A] border border-zinc-800 p-4 rounded-lg hover:bg-zinc-800 transition-colors flex-1 flex justify-center">
                                {social.icon}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
};

const MediumIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42zM24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
    </svg>
);

export default ContactSection;