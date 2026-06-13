'use client';

import { useState, useEffect } from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

const FacebookIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
);

const InstagramIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
);

const TwitterIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
);

export default function Contact() {
    const [content, setContent] = useState<any>(null);

    useEffect(() => {
        fetch('/api/content')
            .then(res => res.json())
            .then(data => setContent(data.contact));
    }, []);

    if (!content) return <div className="py-24 bg-white dark:bg-luxury-dark animate-pulse min-h-[400px]"></div>;

    const contactItems = [
        { icon: MapPin, title: 'Visit Our Sanctuary', content: content.address },
        { icon: Phone, title: 'Speak With Us', content: content.phone },
        { icon: Mail, title: 'Send An Email', content: content.email },
        { icon: Clock, title: 'Opening Hours', content: content.hours, subContent: 'Sunday: Closed' },
    ];

    return (
        <section id="contact" className="py-24 bg-white dark:bg-luxury-dark transition-colors duration-500 overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="text-center mb-20">
                    <h2 className="text-5xl md:text-7xl font-serif font-bold bg-gradient-to-r from-primary-600 to-accent-500 bg-clip-text text-transparent mb-6">
                        Get In Touch
                    </h2>
                    <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto font-light leading-relaxed">
                        Ready to experience luxury? Contact us today to book your appointment or learn more about our premium services.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-16 max-w-7xl mx-auto">
                    {/* Contact Form */}
                    <div className="bg-gray-50 dark:bg-gray-800/50 p-10 rounded-[2.5rem] shadow-sm border border-gray-100 dark:border-gray-700">
                        <form className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-gray-700 dark:text-gray-300 ml-1">YOUR NAME</label>
                                    <input
                                        type="text"
                                        required
                                        className="w-full px-6 py-4 rounded-2xl border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all"
                                        placeholder="Jane Doe"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-gray-700 dark:text-gray-300 ml-1">EMAIL ADDRESS</label>
                                    <input
                                        type="email"
                                        required
                                        className="w-full px-6 py-4 rounded-2xl border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all"
                                        placeholder="jane@example.com"
                                    />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-gray-700 dark:text-gray-300 ml-1">PHONE NUMBER</label>
                                <input
                                    type="tel"
                                    required
                                    className="w-full px-6 py-4 rounded-2xl border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all"
                                    placeholder={content.phone}
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-gray-700 dark:text-gray-300 ml-1">MESSAGE</label>
                                <textarea
                                    rows={5}
                                    required
                                    className="w-full px-6 py-4 rounded-2xl border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all resize-none"
                                    placeholder="Tell us about the services you're interested in..."
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="group flex items-center justify-center gap-3 w-full px-8 py-5 bg-gray-900 dark:bg-white text-white dark:text-luxury-dark font-bold rounded-2xl hover:shadow-2xl transform hover:scale-[1.02] transition-all"
                            >
                                Send Message
                                <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            </button>
                        </form>
                    </div>

                    {/* Contact Info & Socials */}
                    <div className="flex flex-col justify-between py-4">
                        <div className="space-y-10">
                            {contactItems.map((item, idx) => (
                                <div key={idx} className="flex gap-6 group">
                                    <div className="w-14 h-14 shrink-0 bg-primary-100 dark:bg-primary-900/30 rounded-2xl flex items-center justify-center text-primary-600 dark:text-accent-400 group-hover:bg-primary-500 group-hover:text-white transition-all duration-300">
                                        <item.icon size={26} />
                                    </div>
                                    <div className="space-y-1">
                                        <h3 className="text-lg font-bold text-gray-900 dark:text-white">{item.title}</h3>
                                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{item.content}</p>
                                        {item.subContent && <p className="text-gray-500 dark:text-gray-500 text-sm">{item.subContent}</p>}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Social Presence */}
                        <div className="pt-12">
                            <h3 className="text-sm font-bold uppercase tracking-widest text-gray-500 dark:text-gray-400 mb-6 text-center lg:text-left">
                                Follow Our Journey
                            </h3>
                            <div className="flex justify-center lg:justify-start gap-4">
                                {[
                                    { Icon: FacebookIcon, label: 'Facebook', url: content.facebook },
                                    { Icon: InstagramIcon, label: 'Instagram', url: content.instagram },
                                    { Icon: TwitterIcon, label: 'Twitter', url: content.twitter },
                                ].map((social, i) => (
                                    <a
                                        key={i}
                                        href={social.url}
                                        className="w-14 h-14 bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-2xl flex items-center justify-center text-gray-700 dark:text-gray-300 hover:bg-primary-500 hover:text-white hover:border-primary-500 transform hover:-translate-y-2 transition-all duration-300 shadow-sm"
                                    >
                                        <social.Icon />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
