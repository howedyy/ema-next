'use client';

import { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';

export default function BackToTop() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.pageYOffset > 500) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <button
            onClick={scrollToTop}
            className={`fixed bottom-8 right-8 z-50 w-14 h-14 bg-primary-600 dark:bg-accent-500 text-white rounded-full shadow-2xl flex items-center justify-center transition-all duration-500 hover:scale-110 focus:outline-none ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-24 opacity-0'
                }`}
            aria-label="Back to top"
        >
            <ChevronUp size={28} />
        </button>
    );
}
