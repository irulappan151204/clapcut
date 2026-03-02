'use client';

import PremiumNavbar from "@/components/sections/PremiumNavbar";
import AnimatedFooter from "@/components/sections/AnimatedFooter";
import RevealText from "@/components/ui/RevealText";
import AnthemShowcase from "@/components/sections/AnthemShowcase";
import DocumentaryShowcase from "@/components/sections/DocumentaryShowcase";
import CommercialAdsShowcase from "@/components/sections/CommercialAdsShowcase";
import EventShowcase from "@/components/sections/EventShowcase";
import Link from "next/link";
import { motion } from "framer-motion";
import { impactStats } from "@/lib/portfolio-data";

const categories = [
    { label: 'Anthems', count: '12+', active: true },
    { label: 'Documentaries', count: '8+', active: false },
    { label: 'Brand Ads', count: '25+', active: false },
    { label: 'Events', count: '50+', active: false },
    { label: 'Web Projects', count: '5+', active: false },
];

function AnimatedCounter({ value, suffix = '' }: { value: number; suffix?: string }) {
    return (
        <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            {value}{suffix}
        </motion.span>
    );
}

export default function PortfolioPage() {
    return (
        <main className="bg-ccu-900 min-h-screen pt-32 relative overflow-hidden">
            <PremiumNavbar />

            {/* Ambient Background */}
            <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0">
                <div className="absolute top-1/3 -right-40 w-[600px] h-[600px] bg-ccu-accent/[0.03] rounded-full blur-[200px]" />
                <div className="absolute bottom-1/3 -left-40 w-[500px] h-[500px] bg-purple-500/[0.02] rounded-full blur-[200px]" />
            </div>

            {/* Hero */}
            <section className="px-8 max-w-7xl mx-auto mb-12 z-10 relative min-h-[60vh] flex flex-col justify-center">
                <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                    <p className="font-mono text-[10px] uppercase tracking-widest text-ccu-accent mb-4">The Complete Portfolio</p>
                    <h1 className="text-5xl md:text-9xl font-display font-extrabold uppercase tracking-tighter text-white mb-6 leading-[0.85]">
                        <RevealText text="Our" delay={0.1} className="block text-white/50" />
                        <RevealText text="Universe." delay={0.2} className="block text-ccu-accent" />
                    </h1>
                    <p className="text-xl text-white/40 font-sans max-w-2xl leading-relaxed mb-12">
                        A cinematic journey through anthems, documentaries, brand campaigns, events, and digital ecosystems — crafted by founding visionary J. Jeyabal and the Clap Cut Universe team.
                    </p>

                    {/* Impact Stats — Premium Cards */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
                        {[
                            { value: impactStats.campaigns, suffix: '+', label: 'Campaigns' },
                            { value: 0, suffix: '', label: 'Global Reach', display: impactStats.reach },
                            { value: impactStats.awards, suffix: '', label: 'Awards Won' },
                            { value: impactStats.brands, suffix: '+', label: 'Brands Served' },
                        ].map((stat) => (
                            <div key={stat.label} className="p-6 rounded-2xl border border-white/[0.06] bg-white/[0.02] group hover:border-ccu-accent/30 transition-all duration-500">
                                <p className="text-3xl md:text-4xl font-display font-bold text-white tracking-tighter group-hover:text-ccu-accent transition-colors">
                                    {stat.display || <AnimatedCounter value={stat.value} suffix={stat.suffix} />}
                                </p>
                                <p className="font-mono text-[9px] uppercase tracking-widest text-white/30 mt-1">{stat.label}</p>
                            </div>
                        ))}
                    </div>

                    {/* Category Pills */}
                    <div className="flex flex-wrap gap-3">
                        {categories.map((cat) => (
                            <div key={cat.label} className={`px-5 py-2.5 rounded-full border font-mono text-[10px] uppercase tracking-widest ${cat.active ? 'border-ccu-accent/30 bg-ccu-accent/10 text-ccu-accent' : 'border-white/10 text-white/30'}`}>
                                {cat.label} <span className="ml-1 opacity-50">{cat.count}</span>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </section>

            {/* Showcase Sections */}
            <AnthemShowcase />
            <DocumentaryShowcase />
            <CommercialAdsShowcase />
            <EventShowcase />

            {/* Trusted by */}
            <section className="py-24 bg-[#030303] border-t border-white/[0.06] relative z-10 overflow-hidden">
                <div className="max-w-7xl mx-auto px-8 text-center mb-12">
                    <p className="font-mono text-[10px] uppercase tracking-widest text-ccu-accent mb-4">Trust</p>
                    <h2 className="text-3xl md:text-4xl font-display font-bold uppercase tracking-tighter text-white mb-4">Trusted by Leaders</h2>
                </div>
                <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto px-8">
                    {['Government of TN', 'Pothys', 'Radio Mirchi', 'Queen Mira School', 'Gabriel India (Anand Group)', 'Madhaven Jewellery', 'Rafithub Fitness'].map((brand) => (
                        <span key={brand} className="px-5 py-2.5 rounded-full border border-white/[0.06] bg-white/[0.02] font-mono text-[10px] uppercase tracking-widest text-white/30 hover:border-ccu-accent/30 hover:text-white transition-all duration-500 cursor-default">
                            {brand}
                        </span>
                    ))}
                </div>
            </section>

            {/* CTA */}
            <section className="py-32 px-8 text-center relative z-10">
                <div className="max-w-3xl mx-auto">
                    <p className="font-mono text-[10px] uppercase tracking-widest text-ccu-accent mb-6">Your Turn</p>
                    <h2 className="text-3xl md:text-5xl font-display font-bold uppercase tracking-tight text-white mb-8">
                        Want to be in our <span className="text-ccu-accent">next showreel?</span>
                    </h2>
                    <div className="flex flex-wrap items-center justify-center gap-4">
                        <Link href="/contact" className="px-10 py-5 rounded-full bg-white text-black font-mono text-xs uppercase tracking-widest font-bold hover:bg-ccu-accent transition-colors duration-500">
                            Start a Project
                        </Link>
                        <Link href="/services" className="px-10 py-5 rounded-full border border-white/20 text-white font-mono text-xs uppercase tracking-widest hover:border-white/50 transition-colors duration-500">
                            View Services
                        </Link>
                    </div>
                </div>
            </section>

            <AnimatedFooter />
        </main>
    );
}
