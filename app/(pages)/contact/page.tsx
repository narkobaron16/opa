'use client';

import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { ArrowUpRight, Mail, Phone, MapPin, Twitter, Linkedin, Github } from 'lucide-react';

export default function ContactPage() {
    return (
        <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-yellow-400/30">

            {/* 1. ВЕРХНЯЯ СЕКЦИЯ: Контактные данные */}
            <section className="border-b border-white/5 py-20 px-6 md:px-10">
                <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    <ContactDetailCard title="General Inquiries" value="contact@futuretech.com" icon={<Mail className="w-4 h-4" />} />
                    <ContactDetailCard title="Technical Support" value="support@futuretech.com" icon={<Mail className="w-4 h-4" />} />
                    <ContactDetailCard title="Our Office" value="123 AI Blvd, Tech City" icon={<MapPin className="w-4 h-4" />} />
                    <div className="bg-[#111111] p-6 rounded-xl border border-white/5 flex flex-col justify-between">
                        <p className="text-gray-500 text-xs uppercase tracking-widest mb-4">Connect with Us</p>
                        <div className="flex gap-4">
                            <SocialIcon icon={<Twitter />} />
                            <SocialIcon icon={<Linkedin />} />
                            <SocialIcon icon={<Github />} />
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. ГЛАВНАЯ СЕКЦИЯ: Форма обратной связи */}
            <section className="py-24 px-6 md:px-10 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">

                    {/* Левая колонка */}
                    <div className="lg:col-span-4 flex flex-col justify-center">
                        <div className="w-16 h-16 mb-8 bg-yellow-400 rounded-2xl flex items-center justify-center">
                            <div className="grid grid-cols-2 gap-1">
                                <div className="w-3 h-3 bg-black rounded-full"></div>
                                <div className="w-3 h-3 bg-black/40 rounded-full"></div>
                                <div className="w-3 h-3 bg-black/40 rounded-full"></div>
                                <div className="w-3 h-3 bg-black rounded-full"></div>
                            </div>
                        </div>
                        <h1 className="text-5xl font-semibold leading-tight mb-6">
                            Get in Touch with AI Podcasts
                        </h1>
                        <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
                            Whether you have questions, feedback, or just want to say hello, we're here to listen.
                        </p>
                    </div>

                    {/* Правая колонка: ФОРМА (shadcn) */}
                    <div className="lg:col-span-8 bg-[#0F0F0F] border border-white/5 p-8 md:p-12 rounded-3xl">
                        <form className="space-y-8">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-xs font-medium text-gray-400 uppercase tracking-wider">First Name</label>
                                    <Input placeholder="John" className="bg-[#161616] border-white/5 focus-visible:ring-yellow-400/50 h-12" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-medium text-gray-400 uppercase tracking-wider">Last Name</label>
                                    <Input placeholder="Doe" className="bg-[#161616] border-white/5 focus-visible:ring-yellow-400/50 h-12" />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-xs font-medium text-gray-400 uppercase tracking-wider">Email</label>
                                    <Input type="email" placeholder="john@example.com" className="bg-[#161616] border-white/5 h-12" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-medium text-gray-400 uppercase tracking-wider">Phone Number</label>
                                    <div className="flex gap-2">
                                        <div className="w-20 bg-[#161616] border border-white/5 rounded-md flex items-center justify-center text-sm">🇺🇸</div>
                                        <Input placeholder="+1 (555) 000-0000" className="bg-[#161616] border-white/5 h-12 flex-grow" />
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-medium text-gray-400 uppercase tracking-wider">Message</label>
                                <Textarea placeholder="How can we help you?" className="bg-[#161616] border-white/5 min-h-[150px] focus-visible:ring-yellow-400/50" />
                            </div>

                            <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-4">
                                <div className="flex items-center space-x-2">
                                    <Checkbox id="terms" className="border-white/20 data-[state=checked]:bg-yellow-400 data-[state=checked]:text-black" />
                                    <label htmlFor="terms" className="text-xs text-gray-500 leading-none cursor-pointer">
                                        I agree with Terms of Use and Privacy Policy
                                    </label>
                                </div>
                                <Button className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold px-10 py-6 rounded-lg text-sm transition-all duration-300">
                                    Send Message
                                </Button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>

            {/* 3. FAQ SECTION */}
            <section className="py-24 px-6 md:px-10 max-w-7xl mx-auto border-t border-white/5">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                    <div className="lg:col-span-4">
                        <div className="w-12 h-12 bg-[#1A1A1A] rounded-full mb-6 flex items-center justify-center">
                            <span className="text-yellow-400 text-xl font-bold">?</span>
                        </div>
                        <h2 className="text-3xl font-medium mb-4">Asked question</h2>
                        <p className="text-gray-500 text-sm mb-8">
                            If the question is not in our FAQ section, feel free to contact us personally.
                        </p>
                        <Button variant="outline" className="border-white/10 hover:bg-white hover:text-black">
                            Ask Question <ArrowUpRight className="ml-2 w-4 h-4" />
                        </Button>
                    </div>

                    <div className="lg:col-span-8">
                        <Accordion type="single" collapsible className="w-full space-y-4">
                            <FAQItem value="item-1" question="What is AI?" answer="Artificial Intelligence (AI) refers to the simulation of human intelligence in machines that are programmed to think and learn." />
                            <FAQItem value="item-2" question="How can I listen to your podcasts?" answer="You can listen on Spotify, Apple Podcasts, or directly on our Resources page." />
                            <FAQItem value="item-3" question="Are your podcasts free to listen to?" answer="Yes, all our educational podcasts are free, supported by our premium research reports." />
                            <FAQItem value="item-4" question="Can I download episodes to listen offline?" answer="Absolutely! Use our mobile app to save episodes directly to your device." />
                        </Accordion>
                    </div>
                </div>
            </section>

            {/* 4. CTA SECTION: Revolution */}
            <section className="py-24 px-6 md:px-10 max-w-7xl mx-auto">
                <div className="bg-[#111111] rounded-[40px] p-12 border border-white/5 text-center relative overflow-hidden">
                    <div className="relative z-10">
            <span className="bg-[#1A1A1A] text-gray-400 text-[10px] tracking-widest px-3 py-1 rounded uppercase mb-6 inline-block">
              Learn, Connect, and Innovate
            </span>
                        <h2 className="text-4xl md:text-5xl font-medium mb-8">Be Part of the Future Tech Revolution</h2>
                        <p className="text-gray-500 text-sm max-w-2xl mx-auto mb-12 leading-relaxed">
                            Join our dynamic community of forward-thinkers and stay updated on upcoming tech events, webinars, and policy papers.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
                            <CTACard title="Resource Access" />
                            <CTACard title="Community Forum" />
                            <CTACard title="Tech Events" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

// --- ВСПОМОГАТЕЛЬНЫЕ КОМПОНЕНТЫ ---

function ContactDetailCard({ title, value, icon }: { title: string; value: string; icon: React.ReactNode }) {
    return (
        <div className="bg-[#111111] p-6 rounded-xl border border-white/5 group hover:border-yellow-400/30 transition-all duration-500">
            <p className="text-gray-500 text-xs uppercase tracking-widest mb-4">{title}</p>
            <div className="flex items-center justify-between">
                <span className="text-sm font-medium">{value}</span>
                <div className="p-2 bg-[#1A1A1A] rounded-lg text-yellow-400 group-hover:bg-yellow-400 group-hover:text-black transition-colors">
                    <ArrowUpRight className="w-4 h-4" />
                </div>
            </div>
        </div>
    );
}

function SocialIcon({ icon }: { icon: React.ReactNode }) {
    return (
        <div className="w-10 h-10 bg-[#1A1A1A] border border-white/5 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:border-white/20 cursor-pointer transition-all">
            {React.cloneElement(icon as React.ReactElement, { className: 'w-5 h-5' })}
        </div>
    );
}

function FAQItem({ value, question, answer }: { value: string; question: string; answer: string }) {
    return (
        <AccordionItem value={value} className="border border-white/5 bg-[#111111] rounded-xl px-6 py-2 overflow-hidden">
            <AccordionTrigger className="hover:no-underline text-lg font-medium text-left">
                {question}
            </AccordionTrigger>
            <AccordionContent className="text-gray-500 leading-relaxed pt-2 pb-6">
                {answer}
            </AccordionContent>
        </AccordionItem>
    );
}

function CTACard({ title }: { title: string }) {
    return (
        <div className="bg-[#161616] p-8 rounded-2xl border border-white/5 group cursor-pointer hover:bg-[#1A1A1A] transition-all">
            <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-medium">{title}</h3>
                <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center text-black group-hover:scale-110 transition-transform">
                    <ArrowUpRight className="w-5 h-5" />
                </div>
            </div>
            <p className="text-xs text-gray-500">Stay updated on upcoming tech events and community highlights.</p>
        </div>
    );
}