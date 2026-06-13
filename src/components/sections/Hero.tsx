'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Sparkles } from 'lucide-react';

export default function Hero() {
    const [content, setContent] = useState<any>(null);

    useEffect(() => {
        fetch('/api/content')
            .then(res => res.json())
            .then(data => setContent(data.hero));
    }, []);

    if (!content) return <div className="min-h-screen bg-gray-50 dark:bg-luxury-dark animate-pulse"></div>;

    return (
        <section id="home" className="min-h-screen relative overflow-hidden">
            <div className="hero-gradient min-h-screen flex items-center relative">
                {/* Modern background elements */}
                <div className="absolute top-20 left-10 w-64 h-64 bg-primary-500/10 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl animate-float"></div>

                <div className="container mx-auto px-6 relative z-10 pt-20">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        {/* Text Content */}
                        <div className="space-y-8 animate-fadeIn">
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-xs font-bold tracking-[0.2em] uppercase text-primary-600 dark:text-accent-400">
                                <Sparkles size={14} className="animate-spin-slow" />
                                Welcome to Sanctuari
                            </div>

                            <h1 className="text-6xl md:text-8xl font-serif font-bold text-gray-900 dark:text-white leading-[1.1]">
                                {content.title}
                            </h1>

                            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-lg font-light leading-relaxed">
                                {content.subtitle}
                            </p>

                            <div className="flex flex-col sm:flex-row gap-6">
                                <a
                                    href="#contact"
                                    className="px-10 py-5 bg-primary-600 text-white rounded-full font-bold hover:bg-primary-700 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 text-center"
                                >
                                    {content.button1}
                                </a>
                                <a
                                    href="#services"
                                    className="px-10 py-5 bg-white/10 dark:bg-gray-800/40 backdrop-blur-md border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white rounded-full font-bold hover:bg-white/20 transition-all duration-300 text-center"
                                >
                                    {content.button2}
                                </a>
                            </div>
                        </div>

                        <div className="animate-slideInRight flex justify-center">
                            <div className="relative max-w-lg md:max-w-xl">
                                <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-accent-500 rounded-3xl transform rotate-6 opacity-30"></div>
                                <Image
                                    src={content.image}
                                    alt="Beauty Lounge"
                                    width={1200}
                                    height={1000}
                                    priority
                                    className="relative rounded-3xl shadow-2xl transform hover:scale-105 transition-all duration-500 w-full"
                                />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}
