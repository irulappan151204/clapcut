'use client';

import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';
import MagneticButton from '../ui/MagneticButton';

const links = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/services', label: 'Services' },
    { href: '/portfolio', label: 'Portfolio' },
    { href: '/founder', label: 'Founder' },
    { href: '/contact', label: 'Contact' },
];

export default function PremiumNavbar() {
    const { scrollY } = useScroll();
    const [isOpen, setIsOpen] = useState(false);

    const navBackground = useTransform(
        scrollY,
        [0, 80],
        ['rgba(5, 5, 5, 0)', 'rgba(5, 5, 5, 0.85)']
    );

    const navBlur = useTransform(
        scrollY,
        [0, 80],
        ['blur(0px)', 'blur(20px)']
    );

    const borderOpacity = useTransform(scrollY, [0, 80], [0, 0.08]);

    return (
        <>
            <motion.header
                style={{
                    backgroundColor: navBackground,
                    backdropFilter: navBlur,
                    WebkitBackdropFilter: navBlur,
                    borderBottomColor: useTransform(borderOpacity, (v) => `rgba(255,255,255,${v})`),
                }}
                className="fixed top-0 left-0 right-0 z-50 border-b"
            >
                <div className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-8 py-4 md:py-5">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-3 z-50 group">
                        <div className="relative">
                            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-ccu-accent to-amber-500 flex items-center justify-center shadow-lg shadow-ccu-accent/20 group-hover:shadow-ccu-accent/40 transition-shadow duration-500">
                                <span className="font-display font-black text-black text-sm tracking-tighter">CC</span>
                            </div>
                            <div className="absolute -inset-1 rounded-xl bg-ccu-accent/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        </div>
                        <div className="hidden sm:block">
                            <span className="font-display font-bold text-sm tracking-widest uppercase text-white">Clap Cut</span>
                            <span className="font-display font-bold text-sm tracking-widest uppercase text-ccu-accent ml-1">Universe</span>
                        </div>
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden lg:flex items-center gap-1">
                        {links.map((link) => (
                            <MagneticButton key={link.href}>
                                <Link
                                    href={link.href}
                                    className="relative px-4 py-2 text-[13px] font-mono uppercase tracking-widest text-white/70 hover:text-white transition-colors duration-300 group"
                                >
                                    {link.label}
                                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-ccu-accent group-hover:w-full transition-all duration-300" />
                                </Link>
                            </MagneticButton>
                        ))}
                    </nav>

                    {/* CTA + Hamburger */}
                    <div className="flex items-center gap-4">
                        <Link
                            href="/contact"
                            className="hidden md:flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/[0.06] border border-white/10 text-[12px] font-mono uppercase tracking-widest text-white hover:bg-ccu-accent hover:text-black hover:border-ccu-accent transition-all duration-500"
                        >
                            Start a Project
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
                            </svg>
                        </Link>

                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="lg:hidden z-50 relative w-10 h-10 flex flex-col items-center justify-center gap-1.5"
                            aria-label="Toggle menu"
                        >
                            <motion.span
                                animate={isOpen ? { rotate: 45, y: 5 } : { rotate: 0, y: 0 }}
                                className="block w-6 h-[1.5px] bg-white origin-center"
                            />
                            <motion.span
                                animate={isOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
                                className="block w-6 h-[1.5px] bg-white"
                            />
                            <motion.span
                                animate={isOpen ? { rotate: -45, y: -5 } : { rotate: 0, y: 0 }}
                                className="block w-6 h-[1.5px] bg-white origin-center"
                            />
                        </button>
                    </div>
                </div>
            </motion.header>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                        className="fixed inset-0 bg-ccu-900/98 backdrop-blur-xl z-40 flex flex-col justify-center items-center"
                    >
                        <nav className="flex flex-col items-center gap-2">
                            {links.map((link, i) => (
                                <motion.div
                                    key={link.href}
                                    initial={{ y: 40, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    exit={{ y: -20, opacity: 0 }}
                                    transition={{ delay: 0.05 * i, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                                >
                                    <Link
                                        href={link.href}
                                        onClick={() => setIsOpen(false)}
                                        className="text-4xl md:text-6xl font-display font-bold uppercase tracking-tight hover:text-ccu-accent transition-colors duration-300 block py-2"
                                    >
                                        {link.label}
                                    </Link>
                                </motion.div>
                            ))}
                        </nav>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4 }}
                            className="absolute bottom-12 font-mono text-[10px] uppercase tracking-widest text-white/30"
                        >
                            clapcutuniverse@gmail.com
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
