import Link from 'next/link';
import { Mail } from 'lucide-react';

const FacebookIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
);

const InstagramIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
);

const TwitterIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
);


export default function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-300 py-20 border-t border-gray-800">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-4 gap-12 mb-16">
                    {/* Brand Section */}
                    <div className="space-y-6 col-span-1 md:col-span-1">
                        <h3 className="text-3xl font-serif font-bold bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent italic">
                            EMA
                        </h3>
                        <p className="text-gray-400 leading-relaxed">
                            Elevating beauty into an art form since 2021. Your sanctuary for luxury, tranquility, and expert care.
                        </p>
                        <div className="flex gap-4">
                            {[FacebookIcon, InstagramIcon, TwitterIcon].map((Icon, idx) => (
                                <a key={idx} href="#" className="w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center hover:bg-primary-500 hover:text-white transition-all transition-colors duration-300">
                                    <Icon />
                                </a>
                            ))}
                        </div>

                    </div>

                    {/* Quick Links */}
                    <div className="space-y-6">
                        <h4 className="text-white font-bold tracking-widest uppercase text-sm">Quick Links</h4>
                        <ul className="space-y-4">
                            {['Home', 'About', 'Services', 'Contact'].map((item) => (
                                <li key={item}>
                                    <Link href={`#${item.toLowerCase()}`} className="text-gray-400 hover:text-accent-400 transition-colors flex items-center gap-2 group">
                                        <div className="w-1.5 h-1.5 rounded-full bg-primary-500 scale-0 group-hover:scale-100 transition-transform"></div>
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div className="space-y-6">
                        <h4 className="text-white font-bold tracking-widest uppercase text-sm">Our Signature</h4>
                        <ul className="space-y-4">
                            {['Lash Extensions', 'Premium Nail Art', 'Facial Glow', 'Wellness Therapy'].map((item) => (
                                <li key={item} className="text-gray-400 cursor-default hover:text-white transition-colors">
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div className="space-y-6">
                        <h4 className="text-white font-bold tracking-widest uppercase text-sm">Inner Circle</h4>
                        <p className="text-gray-400">Join our newsletter to receive exclusive offers and beauty tips.</p>
                        <div className="flex flex-col gap-3">
                            <div className="relative">
                                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
                                <input
                                    type="email"
                                    placeholder="Your email"
                                    className="w-full px-12 py-4 rounded-xl bg-gray-800 border border-gray-700 focus:outline-none focus:border-primary-500 transition-all text-sm mb-2"
                                />
                            </div>
                            <button className="w-full px-6 py-4 bg-gradient-to-r from-primary-600 to-accent-500 text-white font-bold rounded-xl hover:shadow-lg transition-all duration-300">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-gray-500 text-sm">
                        &copy; {new Date().getFullYear()} EMA Beauty Lounge. Crafted with passion.
                    </p>
                    <div className="flex gap-8 text-xs text-gray-500 uppercase tracking-widest">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
