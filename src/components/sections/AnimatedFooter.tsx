'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import RevealText from '../ui/RevealText';
import MagneticButton from '../ui/MagneticButton';

const footerLinks = [
    {
        title: 'Navigate', links: [
            { href: '/', label: 'Home' },
            { href: '/about', label: 'About Us' },
            { href: '/services', label: 'Services' },
            { href: '/portfolio', label: 'Portfolio' },
            { href: '/founder', label: 'Founder' },
        ]
    },
    {
        title: 'Services', links: [
            { href: '/film-campaigns', label: 'Film & Campaigns' },
            { href: '/web-app-development', label: 'Web & App Dev' },
            { href: '/photography', label: 'Photography' },
            { href: '/ads-scripts', label: 'Ads & Scripts' },
        ]
    },
    {
        title: 'Connect', links: [
            { href: '/contact', label: 'Contact' },
            { href: '/videography', label: 'Videography' },
            { href: '#', label: 'Instagram' },
            { href: '#', label: 'LinkedIn' },
        ]
    },
];

export default function AnimatedFooter() {
    return (
        <footer className="relative bg-[#030303] border-t border-white/[0.06] overflow-hidden">
            {/* Ambient Glow */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-ccu-accent/5 rounded-full blur-[120px] pointer-events-none" />

            {/* Main Footer Content */}
            <div className="max-w-7xl mx-auto px-8 pt-24 pb-16 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-20">
                    {/* CTA Column */}
                    <div className="lg:col-span-5">
                        <h2 className="text-3xl md:text-5xl font-display font-bold uppercase tracking-tighter leading-tight text-white mb-6">
                            <RevealText text="Let's build" delay={0.1} className="block text-white/60" />
                            <RevealText text="the universe." delay={0.2} className="block text-ccu-accent" />
                        </h2>
                        <p className="text-white/40 font-sans text-base leading-relaxed mb-8 max-w-sm">
                            Ready to create something cinematic? Let&apos;s transform your brand into a story the world remembers.
                        </p>
                        <MagneticButton>
                            <Link
                                href="/contact"
                                className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white text-black font-mono text-xs uppercase tracking-widest font-bold hover:bg-ccu-accent transition-colors duration-500"
                            >
                                Start a Project
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
                                </svg>
                            </Link>
                        </MagneticButton>
                    </div>

                    {/* Links Columns */}
                    <div className="lg:col-span-7 grid grid-cols-3 gap-8">
                        {footerLinks.map((group) => (
                            <div key={group.title}>
                                <h3 className="font-mono text-[10px] uppercase tracking-widest text-white/30 mb-6">{group.title}</h3>
                                <ul className="space-y-3">
                                    {group.links.map((link) => (
                                        <li key={link.label}>
                                            <Link
                                                href={link.href}
                                                className="text-sm text-white/50 hover:text-white transition-colors duration-300 font-sans"
                                            >
                                                {link.label}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Contact Row */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 border-t border-white/[0.06] pt-8 mb-16">
                    <a
                        href="mailto:clapcutuniverse@gmail.com"
                        className="text-lg md:text-xl font-sans text-white/60 hover:text-ccu-accent transition-colors duration-300 border-b border-white/10 hover:border-ccu-accent pb-1"
                    >
                        clapcutuniverse@gmail.com
                    </a>
                    <p className="font-mono text-[10px] uppercase tracking-widest text-white/25">
                        Madurai, Tamil Nadu • India
                    </p>
                </div>
            </div>

            {/* Giant Typography Reveal */}
            <div className="w-full relative overflow-hidden flex justify-center pb-8">
                <motion.div
                    initial={{ y: 120, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
                    className="relative"
                >
                    <h1
                        className="text-[10vw] xl:text-[180px] leading-none text-transparent whitespace-nowrap select-none font-extrabold font-display uppercase tracking-tighter"
                        style={{
                            WebkitTextStroke: '1px rgba(255,255,255,0.08)',
                            letterSpacing: '-0.04em',
                        }}
                    >
                        CLAPCUT UNIVERSE
                    </h1>
                    <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-transparent to-transparent pointer-events-none" />
                </motion.div>
            </div>

            {/* Bottom Bar */}
            <div className="max-w-7xl mx-auto px-8 py-6 flex flex-col md:flex-row justify-between items-center gap-4 border-t border-white/[0.04] relative z-10">
                <div className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-md bg-gradient-to-br from-ccu-accent to-amber-500 flex items-center justify-center">
                        <span className="font-display font-black text-black text-[8px]">CC</span>
                    </div>
                    <p className="text-[11px] text-white/30 font-mono">© 2026 Clap Cut Universe. All rights reserved.</p>
                </div>
                <p className="text-[11px] text-white/20 font-mono uppercase tracking-widest">
                    Designed & Engineered for Scale
                </p>
            </div>
        </footer>
    );
}
