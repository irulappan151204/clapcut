'use client';

import { motion } from 'framer-motion';
import { majorEvents, eventCategories } from '@/lib/portfolio-data';
import RevealText from '@/components/ui/RevealText';

const eventIcons: Record<string, string> = {
    'Madurai Radio Mirchi Events': '📻',
    'TN Pongal Festival — Pothys Presented Gramiya Thiruvila': '🎉',
    'CM Events': '🏛️',
    'Book Release — Vairamuthu': '📖',
    'Book Release — Kabilan Vairamuthu': '📖',
    'Book Release — Madhan Karky': '📖',
};

export default function EventShowcase() {
    const featured = majorEvents.slice(0, 2);
    const rest = majorEvents.slice(2);

    return (
        <section className="py-32 bg-[#030303] relative z-10 border-t border-white/[0.06] overflow-hidden">
            {/* Ambient Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-emerald-500/[0.02] rounded-full blur-[200px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-8 relative">
                {/* Header — Centered */}
                <div className="text-center mb-20">
                    <p className="font-mono text-[10px] uppercase tracking-widest text-ccu-accent mb-4">04 / Events &amp; Branding</p>
                    <h2 className="text-4xl md:text-7xl font-display font-bold uppercase tracking-tighter text-white mb-4 leading-none">
                        <RevealText text="Moments We" delay={0.1} className="block text-white/50" />
                        <RevealText text="Orchestrated." delay={0.2} className="block text-ccu-accent" />
                    </h2>
                    <p className="text-white/30 font-sans max-w-xl mx-auto">From 10,000+ seat festivals to elite book launches — events that create cultural gravity.</p>
                </div>

                {/* Category Pills */}
                <div className="flex flex-wrap justify-center gap-3 mb-16">
                    {eventCategories.map((cat) => (
                        <span key={cat} className="px-5 py-2.5 rounded-full text-[10px] font-mono uppercase tracking-widest border border-white/[0.06] bg-white/[0.02] text-white/30 hover:border-ccu-accent/30 hover:text-ccu-accent transition-all duration-500 cursor-default">
                            {cat}
                        </span>
                    ))}
                </div>

                {/* Featured 2 Large Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    {featured.map((event, i) => (
                        <motion.div
                            key={event.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, duration: 0.6 }}
                            className="relative p-10 md:p-12 rounded-2xl border border-white/[0.06] bg-white/[0.02] overflow-hidden group hover:border-ccu-accent/20 transition-all duration-700 min-h-[280px] flex flex-col justify-end"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/[0.05] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                            <div className="absolute top-6 right-6 flex items-center gap-2">
                                <div className="w-12 h-12 rounded-2xl bg-white/[0.04] border border-white/[0.06] flex items-center justify-center text-xl group-hover:scale-110 group-hover:bg-white/[0.08] transition-all duration-500">
                                    {eventIcons[event.title] || '🎪'}
                                </div>
                            </div>
                            {event.scale && (
                                <span className="absolute top-6 left-8 px-3 py-1 rounded-full text-[9px] font-mono uppercase tracking-widest bg-ccu-accent/10 text-ccu-accent border border-ccu-accent/20">
                                    {event.scale}
                                </span>
                            )}
                            <div className="relative z-10">
                                <h3 className="text-2xl md:text-3xl font-display font-extrabold uppercase tracking-tighter text-white mb-3 group-hover:text-ccu-accent transition-colors">{event.title}</h3>
                                <p className="text-sm text-white/40 font-sans leading-relaxed max-w-lg mb-2">{event.description}</p>
                                {event.client && (
                                    <p className="font-mono text-[10px] uppercase tracking-widest text-white/20">Client: {event.client}</p>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Remaining Events Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
                    {rest.map((event, i) => (
                        <motion.div
                            key={event.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.05, duration: 0.5 }}
                            className="p-6 rounded-xl border border-white/[0.06] bg-white/[0.02] hover:border-white/10 hover:bg-white/[0.04] transition-all duration-500 group"
                        >
                            <div className="flex items-center justify-between mb-4">
                                <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.06] flex items-center justify-center text-lg group-hover:scale-110 transition-transform duration-500">
                                    {eventIcons[event.title] || '🎪'}
                                </div>
                                {event.scale && (
                                    <span className="px-2 py-0.5 rounded-full text-[8px] font-mono uppercase tracking-widest border border-white/[0.06] text-white/20">{event.scale}</span>
                                )}
                            </div>
                            <h3 className="text-base font-display font-bold uppercase tracking-tight text-white mb-2 group-hover:text-ccu-accent transition-colors leading-tight">{event.title}</h3>
                            <p className="text-xs text-white/30 font-sans leading-relaxed mb-2">{event.description}</p>
                            {event.client && (
                                <span className="font-mono text-[8px] uppercase tracking-widest text-white/15">Client: {event.client}</span>
                            )}
                        </motion.div>
                    ))}
                </div>

                {/* Stats Strip */}
                <div className="flex flex-wrap justify-center gap-8 py-8 border-t border-white/[0.06]">
                    {[
                        { num: '30+', label: 'Events Produced' },
                        { num: '50K+', label: 'Total Audience Reached' },
                        { num: '10+', label: 'Government Events' },
                        { num: '5+', label: 'Celebrity Collaborations' },
                    ].map((stat) => (
                        <div key={stat.label} className="text-center">
                            <span className="block text-2xl font-display font-bold text-white tracking-tighter">{stat.num}</span>
                            <span className="font-mono text-[8px] uppercase tracking-widest text-white/25">{stat.label}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
