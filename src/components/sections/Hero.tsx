import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
    return (
        <section id="home" className="min-h-screen relative overflow-hidden">
            <div className="hero-gradient min-h-screen flex items-center relative">
                {/* Animated Background Elements */}
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute top-20 left-10 w-72 h-72 bg-[#FFDCDC] rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float"></div>
                    <div className="absolute top-40 right-10 w-72 h-72 bg-[#FFE8CD] rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float" style={{ animationDelay: '1s' }}></div>
                    <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-[#FFD6BA] rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float" style={{ animationDelay: '2s' }}></div>
                </div>

                <div className="container mx-auto px-6 py-20 relative z-10">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        {/* Text Content */}
                        <div className="space-y-6 animate-fadeInUp">
                            <h1 className="text-6xl md:text-8xl font-serif font-bold text-gray-900 dark:text-white leading-tight">
                                EMA <span className="text-primary-600 dark:text-accent-400">Beauty</span> Lounge
                            </h1>
                            <p className="text-xl text-gray-800 dark:text-gray-100 leading-relaxed">
                                As you step into our salon, you&apos;ll be greeted by a warm and welcoming atmosphere,
                                infused with soothing aromas and music. Our team of skilled and experienced
                                professionals is dedicated to providing you with personalized treatments tailored to
                                your specific needs and preferences.
                            </p>
                            <div className="flex flex-wrap gap-4 pt-4">
                                <Link href="#contact"
                                    className="px-8 py-4 bg-gray-900 dark:bg-white text-white dark:text-luxury-dark font-bold rounded-full hover:bg-opacity-90 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl">
                                    Contact Us
                                </Link>
                                <Link href="#services"
                                    className="px-8 py-4 border-2 border-gray-900 dark:border-white text-gray-900 dark:text-white font-bold rounded-full hover:bg-gray-900 dark:hover:bg-white hover:text-white dark:hover:text-luxury-dark transform hover:scale-105 transition-all duration-300">
                                    Our Services
                                </Link>
                            </div>
                        </div>

                        <div className="animate-slideInRight flex justify-center">
                            <div className="relative max-w-lg md:max-w-xl">
                                <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-accent-500 rounded-3xl transform rotate-6 opacity-30"></div>
                                <Image
                                    src="/FB_IMG_(3).jpg"
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
