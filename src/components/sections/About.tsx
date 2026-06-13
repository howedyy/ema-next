import Image from 'next/image';
import { Award, Users, Sparkles } from 'lucide-react';

export default function About() {
    return (
        <section id="about" className="min-h-screen py-20 bg-white dark:bg-luxury-surface transition-colors duration-500 overflow-hidden">
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
                                <div className="text-primary-600 dark:text-accent-400 font-serif text-2xl font-bold">Est. 2021</div>
                                <div className="text-gray-500 dark:text-gray-400 text-sm">Luxury & Care</div>
                            </div>
                        </div>
                    </div>


                    {/* Text Content */}
                    <div className="space-y-8 order-1 md:order-2">
                        <div className="space-y-4">
                            <h2 className="text-5xl md:text-7xl font-serif font-bold bg-gradient-to-r from-primary-600 to-accent-500 bg-clip-text text-transparent leading-tight">
                                About Us
                            </h2>
                            <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed font-light">
                                Welcome to <span className="font-semibold text-primary-600 dark:text-accent-400">EMA Beauty Lounge</span>.
                                We established our sanctuary in 2021 with a simple vision: to create a haven where luxury meets holistic wellness.
                            </p>
                        </div>

                        <div className="space-y-6 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                            <p>
                                From state-of-the-art beauty services to serene wellness offerings, we provide a
                                tranquil environment for relaxation and rejuvenation. Every detail of our lounge
                                is designed to embark you on a journey of self-care and tranquility.
                            </p>

                            <div className="relative border-l-4 border-primary-500 pl-8 py-6 bg-primary-50/50 dark:bg-gray-800/50 rounded-r-2xl transform hover:translate-x-2 transition-transform duration-300">
                                <h3 className="text-2xl font-serif font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                                    <Sparkles className="w-6 h-6 text-primary-500" />
                                    Why Choose Us
                                </h3>
                                <p className="text-gray-600 dark:text-gray-400 italic">
                                    "Whether you're looking to unwind after a long day or pamper yourself for a special occasion,
                                    our lounge is the perfect destination for rejuvenation and self-discovery."
                                </p>
                            </div>
                        </div>

                        {/* Stats Grid */}
                        <div className="grid grid-cols-3 gap-4 pt-8">
                            {[
                                { label: 'Years Experience', value: '5+', icon: Award },
                                { label: 'Happy Clients', value: '1K+', icon: Users },
                                { label: 'Luxury Services', value: '10+', icon: Sparkles },
                            ].map((stat, i) => (
                                <div key={i} className="text-center p-6 bg-white dark:bg-gray-800/80 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md transition-shadow">
                                    <div className="flex justify-center mb-2">
                                        <stat.icon className="w-5 h-5 text-primary-500 opacity-50" />
                                    </div>
                                    <div className="text-3xl font-bold text-primary-600 dark:text-accent-400 font-serif">{stat.value}</div>
                                    <div className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-widest mt-1">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
