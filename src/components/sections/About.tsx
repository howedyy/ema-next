'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Award, Users, Sparkles } from 'lucide-react';

export default function About() {
    const [content, setContent] = useState<any>(null);

    useEffect(() => {
        fetch('/api/content')
            .then(res => res.json())
            .then(data => setContent(data.about));
    }, []);

    if (!content) return <div className="h-screen bg-white animate-pulse"></div>;

    const iconMap: any = { Award, Users, Sparkles };

    return (
        <section id="about" className="py-24 bg-white dark:bg-luxury-surface transition-colors duration-500 overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Image Area */}
                    <div className="order-2 md:order-1 relative group flex justify-center">
                        <div className="relative max-w-sm md:max-w-md">
                            <div className="absolute inset-0 bg-gradient-to-r from-accent-500 to-primary-500 rounded-3xl transform -rotate-6 opacity-30 group-hover:rotate-0 transition-transform duration-700"></div>
                            <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                                <Image
                                    src="/FB_IMG_(5).jpg"
                                    alt="About EMA Beauty Lounge"
                                    width={600}
                                    height={800}
                                    className="w-full h-auto transform hover:scale-105 transition-all duration-700 object-cover"
                                />
                            </div>
                            {/* Elegant floating badge */}
                            <div className="absolute -bottom-6 -right-6 bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-xl border border-primary-100 dark:border-gray-700 animate-float translate-y-[-10px]">
                                <div className="text-primary-600 dark:text-accent-400 font-serif text-2xl font-bold">Est. {content.established || '2021'}</div>
                                <div className="text-gray-500 dark:text-gray-400 text-sm">Luxury & Care</div>
                            </div>

                        </div>
                    </div>


                    {/* Text Content */}
                    <div className="space-y-8 order-1 md:order-2">
                        <div className="space-y-4">
                            <h2 className="text-5xl font-serif font-bold text-gray-900 dark:text-white leading-tight">
                                {content.title}
                            </h2>
                            <div className="h-1 w-20 bg-primary-500 rounded-full"></div>
                        </div>

                        <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed font-light">
                            {content.content}
                        </p>

                        <div className="bg-primary-50 dark:bg-gray-800/50 p-8 rounded-3xl border-l-4 border-primary-500 italic text-gray-700 dark:text-gray-300">
                            {content.highlight}
                        </div>

                        <div className="grid grid-cols-3 gap-6 pt-4">
                            {content.stats && content.stats.map((stat: any, index: number) => {

                                const Icon = iconMap[stat.icon] || Award;
                                return (
                                    <div key={index} className="text-center group">
                                        <div className="w-12 h-12 bg-white dark:bg-gray-800 rounded-2xl shadow-md flex items-center justify-center mx-auto mb-3 text-primary-500 group-hover:bg-primary-500 group-hover:text-white transition-all duration-300">
                                            <Icon size={24} />
                                        </div>
                                        <div className="text-2xl font-bold dark:text-white">{stat.value}</div>
                                        <div className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-widest">{stat.label}</div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
