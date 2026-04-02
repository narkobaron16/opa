"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

const ContactForm = () => {
    const [phone, setPhone] = useState('');

    return (
        <section className="bg-[#0F0F0F] text-white flex items-center justify-center">
            <div className="max-w-8xl w-full flex flex-col lg:flex-row border-b border-zinc-800/50">
                <div className="flex flex-col items-start justify-center space-y-8 flex-1 p-10 lg:p-16 lg:border-r border-zinc-800/50">
                    <div className="relative w-16 h-16">
                        <Image
                            src="/get/Icon (2).svg"
                            alt="Logo"
                            fill
                            className="object-contain"
                        />
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold leading-tight max-w-sm">
                        Get in Touch with AI Podcasts
                    </h1>
                </div>
                <div className="flex-1 md:p-10 lg:p-20 w-full">
                    <form className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="flex flex-col gap-2">
                                <label className="text-sm font-medium">First Name</label>
                                <input
                                    type="text"
                                    placeholder="Enter First Name"
                                    className="bg-[#1A1A1A] border border-zinc-800 rounded-lg p-3 text-sm outline-none focus:border-white/10 transition-colors"
                                />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="text-sm font-medium">Last Name</label>
                                <input
                                    type="text"
                                    placeholder="Enter Last Name"
                                    className="bg-[#1A1A1A] border border-zinc-800 rounded-lg p-3 text-sm outline-none focus:border-white/10 transition-colors"
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="flex flex-col gap-2">
                                <label className="text-sm font-medium">Email</label>
                                <input
                                    type="email"
                                    placeholder="Enter your Email"
                                    className="bg-[#1A1A1A] border border-zinc-800 rounded-lg p-3 text-sm outline-none focus:border-white/10 transition-colors"
                                />
                            </div>

                            <div className="flex flex-col gap-2 custom-phone-input">
                                <label className="text-sm font-medium">Phone Number</label>
                                <PhoneInput
                                    country={'kg'}
                                    value={phone}
                                    onChange={(val) => setPhone(val)}
                                    placeholder="Enter Phone Number"
                                    containerClass="!w-full"
                                    inputClass="!w-full !bg-[#1A1A1A] !border-zinc-800 !rounded-lg  !text-sm !text-white !h-[46px] focus:!border-white/10 !outline-none"
                                    buttonClass="!bg-[#1A1A1A] !border-zinc-800 !rounded-l-lg !border-r-0 hover:!bg-[#222]"
                                    dropdownClass="!bg-[#1A1A1A] !text-white !border-zinc-800"
                                    searchClass="!bg-[#1A1A1A] !text-white"
                                />
                            </div>
                        </div>

                        <div className="flex flex-col gap-2">
                            <label className="text-sm font-medium">Message</label>
                            <textarea
                                rows={5}
                                placeholder="Enter your Message"
                                className="bg-[#1A1A1A] border border-zinc-800 rounded-lg p-3 text-sm outline-none focus:border-white/10 resize-none transition-colors"
                            ></textarea>
                        </div>

                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pt-4">
                            <div className="flex items-center gap-3">
                                <input
                                    type="checkbox"
                                    id="agree"
                                    className="w-5 h-5 accent-yellow-400 bg-transparent border-[#262626] rounded cursor-pointer"
                                />
                                <label htmlFor="agree" className="text-sm text-white/25 cursor-pointer">
                                    I agree with Terms of Use and Privacy Policy
                                </label>
                            </div>
                            <button
                                type="submit"
                                className="bg-yellow-400 text-black font-bold py-3 px-10 rounded-xl hover:bg-yellow-500 transition-all active:scale-95">
                                Send
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default ContactForm;