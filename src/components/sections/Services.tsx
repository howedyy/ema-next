'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ArrowRight, Sparkles } from 'lucide-react';
import ServiceModal from '../ui/ServiceModal';

const services = [
    {
        id: 'lashes',
        title: 'Lashes',
        price: 'Starting from $50',
        description: 'Enhance your natural beauty with our professional lash extensions and treatments. We use premium materials to ensure long-lasting results and maximum comfort.',
        image: '/FB_IMG_(4).jpg',
    },
    {
        id: 'nails',
        title: 'Nails',
        price: 'Starting from $35',
        description: 'Indulge in luxurious manicures and pedicures with our expert nail care services. From classic styles to modern nail art, we cover all your desires.',
        image: '/FB_IMG_(5).jpg',
    },
    {
        id: 'skincare',
        title: 'Skincare',
        price: 'Starting from $65',
        description: 'Rejuvenate your skin with our premium facial treatments and skincare solutions. Our specialists use advanced techniques to bring out your natural glow.',
        image: '/FB_IMG_(3).jpg',
    }
];

export default function Services() {
    const [selectedService, setSelectedService] = useState<typeof services[0] | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = (service: typeof services[0]) => {
        setSelectedService(service);
        setIsModalOpen(true);
    };

    return (
        <section id="services" className="py-24 bg-gradient-to-br from-primary-50 to-accent-50 dark:from-luxury-dark dark:to-luxury-surface transition-colors duration-500 overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="text-center mb-20">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-accent-400 rounded-full text-sm font-bold tracking-widest uppercase mb-6 animate-fadeIn">
                        <Sparkles size={16} />
                        Our Menu
                    </div>
                    <h2 className="text-5xl md:text-7xl font-serif font-bold bg-gradient-to-r from-primary-600 to-accent-500 bg-clip-text text-transparent mb-6">
                        Premium Services
                    </h2>
                    <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto font-light leading-relaxed">
                        Experience precision and luxury with our comprehensive range of beauty and wellness treatments.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-10">
                    {services.map((service, idx) => (
                        <div
                            key={service.id}
                            className="group bg-white dark:bg-gray-800 rounded-3xl shadow-xl hover:shadow-2xl transform hover:-translate-y-3 transition-all duration-500 overflow-hidden border border-gray-100 dark:border-gray-700"
                        >
                            <div
                                className="relative h-56 overflow-hidden cursor-pointer"
                                onClick={() => openModal(service)}
                            >
                                <Image
                                    src={service.image}
                                    alt={service.title}
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>
                                <div className="absolute bottom-6 left-6 text-white">
                                    <h3 className="text-3xl font-serif font-bold mb-1">{service.title}</h3>
                                    <p className="text-primary-300 font-semibold">{service.price}</p>
                                </div>
                            </div>

                            <div className="p-8 space-y-4">
                                <p className="text-gray-600 dark:text-gray-400 leading-relaxed line-clamp-2">
                                    {service.description}
                                </p>
                                <button
                                    onClick={() => openModal(service)}
                                    className="flex items-center gap-2 text-primary-600 dark:text-accent-400 font-bold hover:gap-4 transition-all"
                                >
                                    Experience Now <ArrowRight size={18} />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-20 text-center">
                    <a
                        href="#contact"
                        className="inline-block px-12 py-5 bg-gray-900 dark:bg-white text-white dark:text-luxury-dark font-bold rounded-full hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                    >
                        Book a Consultation
                    </a>
                </div>
            </div>

            <ServiceModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                service={selectedService}
            />
        </section>
    );
}
