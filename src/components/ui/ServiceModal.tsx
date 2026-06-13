'use client';

import Image from 'next/image';
import { X, ArrowRight, Sparkles } from 'lucide-react';
import { useEffect } from 'react';

interface ServiceModalProps {
    isOpen: boolean;
    onClose: () => void;
    service: {
        id: string;
        title: string;
        price: string;
        description: string;
        image: string;
        items?: { id: string; name: string; price: string; }[];
    } | null;
}

export default function ServiceModal({ isOpen, onClose, service }: ServiceModalProps) {
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isOpen]);

    if (!isOpen || !service) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-4 overflow-y-auto">
            {/* Overlay */}
            <div
                className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
                onClick={onClose}
            ></div>

            {/* Modal Content */}
            <div className="relative bg-white dark:bg-luxury-surface rounded-[2rem] shadow-2xl max-w-4xl w-full overflow-hidden animate-fadeInUp">
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-black/10 hover:bg-black/30 dark:bg-white/10 dark:hover:bg-white/30 text-gray-800 dark:text-white transition-all"
                >
                    <X size={20} />
                </button>

                <div className="grid md:grid-cols-2">
                    {/* Left: Image Side */}
                    <div className="relative h-64 md:h-auto min-h-[350px]">

                        <Image
                            src={service.image}
                            alt={service.title}
                            fill
                            className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                        <div className="absolute bottom-6 left-8">
                            <span className="inline-flex items-center gap-1 px-3 py-1 bg-primary-500 text-white text-xs font-bold rounded-full mb-2">
                                <Sparkles size={12} />
                                MOST POPULAR
                            </span>
                        </div>
                    </div>

                    {/* Right: Text Side */}
                    <div className="p-8 md:p-12 space-y-6 flex flex-col justify-center">
                        <div className="space-y-2">
                            <h2 className="text-4xl font-serif font-bold text-gray-900 dark:text-white">
                                {service.title}
                            </h2>
                            <p className="text-2xl font-bold text-primary-500 font-sans">
                                {service.price}
                            </p>
                        </div>

                        <div className="space-y-4">
                            <h3 className="text-sm font-bold uppercase tracking-widest text-gray-500 dark:text-gray-400">
                                Description
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
                                {service.description}
                            </p>
                        </div>

                        {service.items && service.items.length > 0 && (
                            <div className="space-y-4 pt-4 border-t border-gray-100 dark:border-gray-800">
                                <h3 className="text-sm font-bold uppercase tracking-widest text-primary-500">
                                    Service Details
                                </h3>
                                <div className="space-y-3">
                                    {service.items.map((item) => (
                                        <div key={item.id} className="flex justify-between items-center text-sm">
                                            <span className="text-gray-700 dark:text-gray-300 font-medium">{item.name}</span>
                                            <span className="text-primary-500 font-bold font-mono">{item.price}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        <div className="pt-6 space-y-4">
                            <a
                                href="#contact"
                                onClick={onClose}
                                className="flex items-center justify-center gap-2 w-full px-8 py-4 bg-gradient-to-r from-primary-600 to-accent-500 text-white font-bold rounded-xl hover:shadow-xl transform hover:scale-[1.02] transition-all"
                            >
                                Book This Service
                                <ArrowRight size={20} />
                            </a>
                            <p className="text-center text-sm text-gray-500 dark:text-gray-400">
                                Or call us for immediate scheduling
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
