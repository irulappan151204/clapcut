'use client';

import PremiumNavbar from "@/components/sections/PremiumNavbar";
import AnimatedFooter from "@/components/sections/AnimatedFooter";
import RevealText from "@/components/ui/RevealText";
import Link from "next/link";
import { motion } from "framer-motion";

const genres = [
    { title: 'Commercial & Product', desc: 'Luxury product photography with precise lighting, composition, and color grading for maximum brand impact.' },
    { title: 'Event Coverage', desc: 'Government events, corporate summits, concerts, and cultural festivals captured with cinematic precision.' },
    { title: 'Portrait & Editorial', desc: 'Celebrity portraits, corporate headshots, and fashion editorial shoots with studio-grade production.' },
    { title: 'Architectural & Interior', desc: 'Real estate, hospitality, and office space photography with wide-angle mastery and HDR processing.' },
    { title: 'Food & Lifestyle', desc: 'Restaurant menus, food brands, and lifestyle campaigns that make viewers taste the experience.' },
    { title: 'Candid & Documentary', desc: 'Authentic moments captured with journalistic instinct — weddings, cultural events, and human stories.' },
];

const equipment = ['Canon EOS R5', 'Sony A7 IV', 'DJI Mavic 3 Pro', 'Profoto B10+', 'Capture One Pro', 'Adobe Lightroom'];

const stats = [
    { num: '10K+', label: 'Shots Delivered' },
    { num: '50+', label: 'Events Covered' },
    { num: '20+', label: 'Brand Clients' },
    { num: '4K/8K', label: 'Resolution Output' },
];

export default function PhotographyPage() {
    return (
        <main className="bg-ccu-900 min-h-screen pt-32 relative">
            <PremiumNavbar />

            {/* Hero */}
            <section className="px-8 max-w-7xl mx-auto mb-16 z-10 relative">
                <p className="font-mono text-[10px] uppercase tracking-widest text-ccu-accent mb-4">Service / 03</p>
                <h1 className="text-5xl md:text-8xl font-display font-extrabold uppercase tracking-tighter text-white mb-6">
                    <RevealText text="Every Frame" delay={0.1} className="block text-white/50" />
                    <RevealText text="Tells a Story." delay={0.2} className="block text-ccu-accent" />
                </h1>
                <p className="text-xl text-white/50 max-w-2xl font-sans leading-relaxed mb-8">
                    Our commercial and cinematic photography captures the visceral emotion of your brand. Every frame is a composed narrative engineered for high-impact visual campaigns.
                </p>
                <div className="flex flex-wrap gap-3 mb-16">
                    {['Commercial', 'Portraiture', 'Events', 'Documentary', 'Product', 'Aerial'].map((tag) => (
                        <span key={tag} className="px-4 py-2 border border-white/10 rounded-full font-mono text-[10px] uppercase tracking-widest text-white/40">{tag}</span>
                    ))}
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 border-t border-white/[0.06] pt-8">
                    {stats.map((stat) => (
                        <div key={stat.label}>
                            <span className="block text-3xl font-display font-bold text-white tracking-tighter">{stat.num}</span>
                            <span className="font-mono text-[9px] uppercase tracking-widest text-white/30">{stat.label}</span>
                        </div>
                    ))}
                </div>
            </section>

            {/* Genres */}
            <section className="px-8 max-w-7xl mx-auto mb-24 z-10 relative">
                <p className="font-mono text-[10px] uppercase tracking-widest text-ccu-accent mb-8">Specializations</p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {genres.map((genre, i) => (
                        <motion.div
                            key={genre.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.05, duration: 0.5 }}
                            className="p-8 rounded-2xl border border-white/[0.06] bg-white/[0.02] hover:border-ccu-accent/30 transition-all duration-500 group"
                        >
                            <h3 className="text-lg font-display font-bold uppercase tracking-tight text-white mb-2 group-hover:text-ccu-accent transition-colors">{genre.title}</h3>
                            <p className="text-xs text-white/35 font-sans leading-relaxed">{genre.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Equipment */}
            <section className="py-24 bg-[#030303] border-t border-white/[0.06] relative z-10">
                <div className="max-w-7xl mx-auto px-8">
                    <p className="font-mono text-[10px] uppercase tracking-widest text-ccu-accent mb-4">Our Arsenal</p>
                    <h2 className="text-3xl md:text-4xl font-display font-bold uppercase tracking-tighter text-white mb-12">Professional Equipment</h2>
                    <div className="flex flex-wrap gap-4">
                        {equipment.map((item) => (
                            <div key={item} className="px-6 py-4 rounded-xl border border-white/[0.06] bg-white/[0.02] font-mono text-sm text-white/50 hover:border-ccu-accent/30 hover:text-white transition-all duration-500">
                                {item}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Gallery Placeholder */}
            <section className="py-24 border-t border-white/[0.06] relative z-10">
                <div className="max-w-7xl mx-auto px-8">
                    <p className="font-mono text-[10px] uppercase tracking-widest text-ccu-accent mb-4">Gallery</p>
                    <h2 className="text-3xl md:text-4xl font-display font-bold uppercase tracking-tighter text-white mb-12">Recent Work</h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                        {[...Array(6)].map((_, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.05 }}
                                className={`${i % 3 === 0 ? 'aspect-[3/4]' : i % 3 === 1 ? 'aspect-square' : 'aspect-[4/5]'} rounded-xl border border-white/[0.06] bg-white/[0.02] overflow-hidden group relative`}
                            >
                                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <span className="font-mono text-[10px] uppercase tracking-widest text-white/15">Shot {String(i + 1).padStart(2, '0')}</span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 px-8 max-w-7xl mx-auto text-center border-t border-white/[0.06] relative z-10">
                <p className="text-2xl md:text-3xl font-display font-bold uppercase tracking-tight text-white mb-6">Need cinematic photography for your brand?</p>
                <Link href="/contact" className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white text-black font-mono text-xs uppercase tracking-widest font-bold hover:bg-ccu-accent transition-colors duration-500">
                    Book a Shoot
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
                </Link>
            </section>

            <AnimatedFooter />
        </main>
    );
}
