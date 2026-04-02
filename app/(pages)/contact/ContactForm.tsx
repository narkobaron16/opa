"use client";

import React, { useState, useRef, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { ChevronDown, CheckCircle2, Loader2, X } from "lucide-react";
import * as Flags from 'country-flag-icons/react/3x2';

const COUNTRIES = [
    { code: 'IN', name: 'India', dialCode: '+91', Flag: Flags.IN },
    { code: 'US', name: 'USA', dialCode: '+1', Flag: Flags.US },
    { code: 'RU', name: 'Russia', dialCode: '+7', Flag: Flags.RU },
    { code: 'KZ', name: 'Kazakhstan', dialCode: '+7', Flag: Flags.KZ },
    { code: 'GB', name: 'UK', dialCode: '+44', Flag: Flags.GB },
];

export const ContactForm = () => {
    // Состояния для полей формы
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [agreed, setAgreed] = useState(false);

    const [selectedCountry, setSelectedCountry] = useState(COUNTRIES[0]);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showModal, setShowModal] = useState(false);

    const dropdownRef = useRef<HTMLDivElement>(null);

    // Очистка формы
    const resetForm = () => {
        setFirstName('');
        setLastName('');
        setEmail('');
        setMessage('');
        setPhoneNumber('');
        setAgreed(false);
        setSelectedCountry(COUNTRIES[0]);
    };

    useEffect(() => {
        if (showModal) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [showModal]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Имитация отправки
        await new Promise(resolve => setTimeout(resolve, 1500));

        setIsSubmitting(false);
        setShowModal(true);
        resetForm(); // <--- ОБНУЛЯЕМ ПОЛЯ ПОСЛЕ ОТПРАВКИ
    };

    return (
        <>
            <section className="px-6 md:px-10 max-w-8xl mx-auto border-t border-white/5 bg-black">
                <div className="grid grid-cols-1 lg:grid-cols-12">
                    <div className="lg:col-span-5 flex flex-col  pt-20 md:pt-30 lg:pt-50 pb-20 lg:pr-16">
                        <div className="w-16 h-16 mb-10 grid grid-cols-2 gap-2">
                            <div className="w-6 h-6 bg-yellow-400 rounded-full" />
                            <div className="w-6 h-6 bg-[#262626] rounded-full" />
                            <div className="w-6 h-6 bg-[#262626] rounded-full" />
                            <div className="w-6 h-6 bg-yellow-400 rounded-full" />
                        </div>
                        <h1 className="text-4xl md:text-5xl font-medium leading-[1.1] text-white">
                            Get in Touch with AI Podcasts
                        </h1>
                    </div>

                    <div className="lg:col-span-7 pt-20 pb-20 lg:pl-16 border-t lg:border-t-0 lg:border-l border-white/5">
                        <form onSubmit={handleSubmit} className="space-y-10">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10">
                                <Field
                                    label="First Name"
                                    placeholder="Enter First Name"
                                    value={firstName}
                                    onChange={(e: any) => setFirstName(e.target.value)}
                                    required
                                />
                                <Field
                                    label="Last Name"
                                    placeholder="Enter Last Name"
                                    value={lastName}
                                    onChange={(e: any) => setLastName(e.target.value)}
                                    required
                                />
                                <Field
                                    label="Email"
                                    placeholder="Enter your Email"
                                    type="email"
                                    value={email}
                                    onChange={(e: any) => setEmail(e.target.value)}
                                    required
                                />

                                <div className="space-y-3">
                                    <label className="block text-sm font-medium text-white uppercase tracking-wider opacity-90 mb-3">
                                        Phone Number
                                    </label>
                                    <div className="flex gap-3 relative" ref={dropdownRef}>
                                        <button
                                            type="button"
                                            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                            className="flex items-center gap-2 px-4 bg-[#111111] border border-white/5 rounded-xl h-[60px] hover:bg-[#1a1a1a] transition-all outline-none"
                                        >
                                            <selectedCountry.Flag className="w-6 h-auto rounded-sm shadow-sm" />
                                            <ChevronDown className={`w-4 h-4 text-gray-500 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
                                        </button>

                                        {isDropdownOpen && (
                                            <div className="absolute top-[70px] left-0 z-50 w-[200px] bg-[#111111] border border-white/10 rounded-xl shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200">
                                                {COUNTRIES.map((country) => (
                                                    <div
                                                        key={country.code}
                                                        onClick={() => {
                                                            setSelectedCountry(country);
                                                            setIsDropdownOpen(false);
                                                        }}
                                                        className="flex items-center gap-3 p-4 hover:bg-yellow-400 hover:text-black cursor-pointer transition-colors text-white"
                                                    >
                                                        <country.Flag className="w-5 h-auto rounded-sm" />
                                                        <span className="text-sm font-medium">{country.name}</span>
                                                        <span className="text-xs opacity-50 ml-auto">{country.dialCode}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        )}

                                        <div className="relative flex-1">
                                            <span className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 font-medium pointer-events-none">
                                                {selectedCountry.dialCode}
                                            </span>
                                            <Input
                                                required
                                                value={phoneNumber}
                                                onChange={(e) => setPhoneNumber(e.target.value.replace(/\D/g, ''))}
                                                placeholder="Enter Phone Number"
                                                style={{ paddingLeft: `${selectedCountry.dialCode.length * 10 + 35}px` }}
                                                className="w-full bg-[#111111] border-white/5 h-[60px] rounded-xl focus:border-yellow-400/50 focus:ring-0 text-white"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-3">
                                <label className="block text-sm font-medium text-white uppercase tracking-wider opacity-90 mb-3">Message</label>
                                <Textarea
                                    required
                                    placeholder="Enter your Message"
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    className="bg-[#111111] border-white/5 min-h-[180px] rounded-xl focus:border-yellow-400/50 focus:ring-0 text-white resize-none p-5"
                                />
                            </div>

                            <div className="flex flex-col md:flex-row justify-between items-center gap-8 pt-4">
                                <div className="flex items-center space-x-3 group cursor-pointer">
                                    <Checkbox
                                        required
                                        id="terms"
                                        checked={agreed}
                                        onCheckedChange={(checked: boolean) => setAgreed(checked)}
                                        className="w-5 h-5 border-white/10 data-[state=checked]:bg-yellow-400"
                                    />
                                    <label htmlFor="terms" className="text-sm text-gray-400 cursor-pointer group-hover:text-gray-300 transition-colors">
                                        I agree with Terms of Use and Privacy Policy
                                    </label>
                                </div>
                                <Button
                                    disabled={isSubmitting}
                                    type="submit"
                                    className="bg-yellow-400 hover:bg-yellow-500 disabled:bg-yellow-700 text-black font-bold px-10 py-7 rounded-xl text-base shadow-lg active:scale-95 transition-all min-w-[200px]"
                                >
                                    {isSubmitting ? <Loader2 className="w-5 h-5 animate-spin" /> : "Send Message"}
                                </Button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>

            {/* МОДАЛКА УСПЕХА */}
            {showModal && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 animate-in fade-in duration-300">
                    <div className="absolute inset-0 bg-black/80 backdrop-blur-md" onClick={() => setShowModal(false)} />
                    <div className="relative w-full max-w-xl bg-[#111111] border border-white/10 rounded-[32px] p-12 shadow-2xl animate-in zoom-in-95 slide-in-from-bottom-10 duration-500 text-center text-white">
                        <button onClick={() => setShowModal(false)} className="absolute top-6 right-6 text-gray-500 hover:text-white transition-colors">
                            <X className="w-6 h-6" />
                        </button>
                        <div className="flex justify-center mb-8">
                            <div className="w-20 h-20 bg-yellow-400 rounded-full flex items-center justify-center">
                                <CheckCircle2 className="w-10 h-10 text-black" />
                            </div>
                        </div>
                        <h2 className="text-4xl font-bold mb-4">Message Sent!</h2>
                        <p className="text-gray-400 text-lg mb-10 leading-relaxed">
                            Thank you! Your inquiry has been delivered. We'll contact you shortly.
                        </p>
                        <Button onClick={() => setShowModal(false)} className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-6 rounded-2xl text-lg">
                            Great!
                        </Button>
                    </div>
                </div>
            )}
        </>
    );
};

const Field = ({ label, value, onChange, ...props }: any) => (
    <div className="space-y-3">
        <label className="block text-sm font-medium text-white uppercase tracking-wider opacity-90 mb-3">{label}</label>
        <Input
            {...props}
            value={value}
            onChange={onChange}
            className="bg-[#111111] border-white/5 h-[60px] rounded-xl focus:border-yellow-400/50 focus:ring-0 text-white px-5"
        />
    </div>
);