'use client';

import PremiumNavbar from "@/components/sections/PremiumNavbar";
import AnimatedFooter from "@/components/sections/AnimatedFooter";
import RevealText from "@/components/ui/RevealText";
import Link from "next/link";
import { motion } from "framer-motion";
import { anthemProjects, documentaryProjects } from '@/lib/portfolio-data';

const capabilities = [
    { title: 'Anthem Production', desc: 'ISRO tributes, social impact anthems, sports anthems, and cultural movements that define generations.' },
    { title: 'Documentary Filmmaking', desc: 'Award-winning documentaries on social justice, water conservation, women empowerment, and child rights.' },
    { title: 'Celebrity Campaign Management', desc: 'Full-scale digital campaigns for leading Tamil cinema actors, musicians, and cultural influencers.' },
    { title: 'Music Album Production', desc: 'Independent albums, remix compilations, and original soundtracks with cinematic production quality.' },
];

const deepavaliBonusCrew = [
    { role: 'Director & Writer', name: 'J. Jeyabal' },
    { role: 'Lead Cast', name: 'Vikranth, Riythvika, Sachin Chandraboss' },
    { role: 'Producer', name: 'Deepak Kumar Tala' },
    { role: 'Production', name: 'Sri Ankali Parameswari Productions' },
    { role: 'Music', name: 'Maria Jerald' },
    { role: 'Cinematography', name: 'Gautham Sethuram' },
    { role: 'Editor', name: 'Parthiv Murugan' },
];

export default function FilmCampaignsPage() {
    return (
        <main className="bg-ccu-900 min-h-screen pt-32 relative overflow-hidden">
            <PremiumNavbar />

            {/* Ambient Glow */}
            <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0">
                <div className="absolute top-1/4 -right-40 w-[500px] h-[500px] bg-ccu-accent/[0.03] rounded-full blur-[200px]" />
            </div>

            {/* Hero */}
            <section className="px-8 max-w-7xl mx-auto mb-16 z-10 relative">
                <p className="font-mono text-[10px] uppercase tracking-widest text-ccu-accent mb-4">Service / 01</p>
                <h1 className="text-5xl md:text-8xl font-display font-extrabold uppercase tracking-tighter text-white mb-6">
                    <RevealText text="Film &" delay={0.1} className="block text-white/50" />
                    <RevealText text="Campaigns." delay={0.2} className="block text-ccu-accent" />
                </h1>
                <p className="text-xl text-white/50 max-w-2xl font-sans leading-relaxed mb-8">
                    We don&apos;t just market films — we build digital universes around them. Under the strategic direction of J. Jeyabal, our campaigns create cultural moments that echo across millions.
                </p>
                <div className="flex flex-wrap gap-3 mb-16">
                    {['Feature Film', 'Anthem Production', 'Documentary', 'Celebrity Management', 'Music Albums', 'Viral Marketing'].map((tag) => (
                        <span key={tag} className="px-4 py-2 border border-white/10 rounded-full font-mono text-[10px] uppercase tracking-widest text-white/40">{tag}</span>
                    ))}
                </div>
            </section>

            {/* ── FEATURED FILM: Deepavali Bonus ── */}
            <section className="px-8 max-w-7xl mx-auto mb-24 z-10 relative">
                <p className="font-mono text-[10px] uppercase tracking-widest text-ccu-accent mb-8">🎬 Featured Film</p>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="relative p-10 md:p-14 rounded-2xl border border-ccu-accent/20 bg-gradient-to-br from-ccu-accent/[0.06] to-transparent overflow-hidden group"
                >
                    <div className="absolute top-6 right-6 flex items-center gap-2">
                        <span className="px-3 py-1 rounded-full text-[9px] font-mono uppercase tracking-widest bg-ccu-accent/15 text-ccu-accent border border-ccu-accent/30">Feature Film</span>
                        <span className="px-3 py-1 rounded-full text-[9px] font-mono uppercase tracking-widest border border-white/10 text-white/30">2024</span>
                    </div>
                    <span className="font-mono text-white/[0.04] text-[120px] font-bold absolute -top-6 -left-4 select-none leading-none">DB</span>
                    <div className="relative z-10">
                        <h2 className="text-4xl md:text-6xl font-display font-extrabold uppercase tracking-tighter text-white mb-4 group-hover:text-ccu-accent transition-colors">
                            Deepavali Bonus
                        </h2>
                        <p className="text-lg text-white/50 font-sans leading-relaxed max-w-3xl mb-8">
                            A Tamil-language drama feature film written and directed by J. Jeyabal. A powerful narrative starring Vikranth, Riythvika, and Sachin Chandraboss — produced by Sri Ankali Parameswari Productions with a cinematic vision that redefines independent Tamil cinema.
                        </p>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                            {deepavaliBonusCrew.slice(0, 4).map((member) => (
                                <div key={member.role} className="p-4 rounded-xl border border-white/[0.06] bg-white/[0.02]">
                                    <span className="font-mono text-[8px] uppercase tracking-widest text-ccu-accent block mb-1">{member.role}</span>
                                    <span className="text-sm font-sans text-white/60">{member.name}</span>
                                </div>
                            ))}
                        </div>
                        <div className="grid grid-cols-3 gap-4">
                            {deepavaliBonusCrew.slice(4).map((member) => (
                                <div key={member.role} className="p-4 rounded-xl border border-white/[0.06] bg-white/[0.02]">
                                    <span className="font-mono text-[8px] uppercase tracking-widest text-ccu-accent block mb-1">{member.role}</span>
                                    <span className="text-sm font-sans text-white/60">{member.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </section>

            {/* Capabilities Grid */}
            <section className="px-8 max-w-7xl mx-auto mb-24 z-10 relative">
                <p className="font-mono text-[10px] uppercase tracking-widest text-ccu-accent mb-8">Our Capabilities</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {capabilities.map((cap, i) => (
                        <motion.div
                            key={cap.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.05, duration: 0.6 }}
                            className="p-8 rounded-2xl border border-white/[0.06] bg-white/[0.02] hover:border-ccu-accent/30 transition-all duration-500 group"
                        >
                            <h3 className="text-lg font-display font-bold uppercase tracking-tight text-white mb-2 group-hover:text-ccu-accent transition-colors">{cap.title}</h3>
                            <p className="text-sm text-white/35 font-sans leading-relaxed">{cap.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Featured Anthems */}
            <section className="py-24 bg-[#030303] border-t border-white/[0.06] relative z-10">
                <div className="max-w-7xl mx-auto px-8">
                    <p className="font-mono text-[10px] uppercase tracking-widest text-ccu-accent mb-4">Featured Productions</p>
                    <h2 className="text-3xl md:text-5xl font-display font-bold uppercase tracking-tighter text-white mb-12">Our Anthem Portfolio</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {anthemProjects.slice(0, 6).map((project, i) => (
                            <motion.div
                                key={project.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.05, duration: 0.5 }}
                                className="p-6 rounded-xl border border-white/[0.06] bg-white/[0.02] hover:border-white/10 transition-all duration-500 group"
                            >
                                <span className="px-3 py-1 rounded-full text-[9px] font-mono uppercase tracking-widest border border-white/10 text-white/30 mb-3 inline-block">{project.category}</span>
                                <h3 className="text-xl font-display font-bold uppercase tracking-tight text-white group-hover:text-ccu-accent transition-colors">{project.title}</h3>
                                <p className="text-xs text-white/30 font-sans mt-2 line-clamp-2">{project.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Award-Winning Documentaries */}
            <section className="py-24 border-t border-white/[0.06] relative z-10">
                <div className="max-w-7xl mx-auto px-8">
                    <p className="font-mono text-[10px] uppercase tracking-widest text-ccu-accent mb-4">Award-Winning</p>
                    <h2 className="text-3xl md:text-5xl font-display font-bold uppercase tracking-tighter text-white mb-12">Documentaries</h2>
                    <div className="space-y-6">
                        {documentaryProjects.map((doc, i) => (
                            <motion.div
                                key={doc.id}
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1, duration: 0.6 }}
                                className="flex flex-col md:flex-row gap-6 items-start md:items-center p-6 rounded-xl border border-white/[0.06] bg-white/[0.02] group"
                            >
                                <div className="flex-1">
                                    <div className="flex items-center gap-3 mb-2">
                                        <h3 className="text-xl font-display font-bold uppercase tracking-tight text-white group-hover:text-ccu-accent transition-colors">{doc.title}</h3>
                                        {doc.awards && (
                                            <span className="px-3 py-1 rounded-full text-[9px] font-mono uppercase tracking-widest bg-amber-500/20 text-amber-400 border border-amber-500/30">★ Award</span>
                                        )}
                                    </div>
                                    <p className="text-sm text-white/35 font-sans">{doc.description}</p>
                                </div>
                                <span className="font-mono text-[10px] uppercase tracking-widest text-white/20 shrink-0">{doc.type}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 px-8 max-w-7xl mx-auto text-center border-t border-white/[0.06] relative z-10">
                <p className="text-2xl md:text-3xl font-display font-bold uppercase tracking-tight text-white mb-6">Ready to create your next blockbuster campaign?</p>
                <Link href="/contact" className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white text-black font-mono text-xs uppercase tracking-widest font-bold hover:bg-ccu-accent transition-colors duration-500">
                    Start a Project
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
                </Link>
            </section>

            <AnimatedFooter />
        </main>
    );
}
