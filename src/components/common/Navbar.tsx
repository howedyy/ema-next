'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Sun, Moon, Menu, X } from 'lucide-react';

export default function Navbar() {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
        document.documentElement.classList.toggle('dark');
    };

    return (
        <nav className={`fixed left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ease-in-out w-[92%] max-w-5xl
            ${isScrolled
                ? 'top-4 rounded-2xl py-2 px-6 shadow-2xl bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl border border-white/20'
                : 'top-8 rounded-full py-4 px-10 shadow-lg bg-white/30 dark:bg-gray-800/20 backdrop-blur-sm border border-white/10'
            }`}
        >
            <div className="w-full">

                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="text-3xl font-serif font-bold bg-gradient-to-r from-primary-500 to-accent-400 bg-clip-text text-transparent hover:scale-110 transform transition-all duration-300">
                        EMA
                    </Link>

                    {/* Desktop Navigation */}
                    <ul className="hidden md:flex items-center space-x-8">
                        {['Home', 'About', 'Services', 'Contact'].map((item) => (
                            <li key={item}>
                                <Link
                                    href={`#${item.toLowerCase()}`}
                                    className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-accent-400 font-medium transition-all duration-300"
                                >
                                    {item}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    {/* Theme Toggle & Mobile Menu */}
                    <div className="flex items-center space-x-4">
                        <button
                            onClick={toggleTheme}
                            className="p-2 rounded-full hover:bg-white/20 dark:hover:bg-white/10 transition-all duration-300"
                            aria-label="Toggle theme"
                        >
                            {isDarkMode ? (
                                <Sun className="text-accent-400" size={24} />
                            ) : (
                                <Moon className="text-primary-600" size={24} />
                            )}
                        </button>

                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="md:hidden p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300"
                        >
                            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                {isMobileMenuOpen && (
                    <div className="md:hidden mt-4 pb-4 animate-fadeInDown">
                        <ul className="flex flex-col space-y-3">
                            {['Home', 'About', 'Services', 'Contact'].map((item) => (
                                <li key={item}>
                                    <Link
                                        href={`#${item.toLowerCase()}`}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className="block py-2 px-4 rounded-lg hover:bg-primary-100 dark:hover:bg-gray-700 transition-all duration-300"
                                    >
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </nav>
    );
}
