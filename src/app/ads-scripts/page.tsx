'use client';

import PremiumNavbar from "@/components/sections/PremiumNavbar";
import AnimatedFooter from "@/components/sections/AnimatedFooter";
import RevealText from "@/components/ui/RevealText";
import Link from "next/link";
import { motion } from "framer-motion";
import { brandAds } from "@/lib/portfolio-data";

const adFormats = [
    { title: 'Television Commercials', desc: 'High-production 30s/60s TVC scripts with cinematic storytelling, professional voice-over direction, and broadcast-ready output.' },
    { title: 'Social Media Ads', desc: 'Thumb-stopping vertical video scripts for Instagram Reels, YouTube Shorts, and TikTok. Optimized for 3-second hook rates.' },
    { title: 'Print & Outdoor', desc: 'Newspaper ads, hoarding campaigns, bus/train wraps, and event backdrop designs for maximum physical-world visibility.' },
    { title: 'Radio & Podcast Scripts', desc: 'Compelling audio narratives for Radio Mirchi campaigns, podcast sponsorships, and public announcement systems.' },
    { title: 'Corporate Presentations', desc: 'Pitch decks, investor presentations, and brand manifesto videos with premium motion graphics and narration.' },
    { title: 'Political & Government', desc: 'Official campaign communications, public program announcements, and election-grade media strategies.' },
];

const scriptProcess = [
    { num: '01', title: 'Brief & Research', desc: 'Deep understanding of target audience, competitor landscape, and brand voice. We study what makes your audience tick.' },
    { num: '02', title: 'Concept & Ideation', desc: 'Multiple creative directions presented with mood boards, reference cuts, and strategic rationale for each approach.' },
    { num: '03', title: 'Scriptwriting', desc: 'Professional screenwriting with scene breakdowns, dialogue polishing, and voice-over direction notes.' },
    { num: '04', title: 'Storyboarding', desc: 'Frame-by-frame visual planning with camera angles, transitions, and timing annotations for production teams.' },
    { num: '05', title: 'Production Support', desc: 'On-set script supervision, real-time rewrites, and post-production copy for final deliverables.' },
];

export default function AdsScriptsPage() {
    return (
        <main className="bg-ccu-900 min-h-screen pt-32">
            <PremiumNavbar />

            {/* Hero */}
            <section className="px-8 max-w-7xl mx-auto mb-16 z-10 relative">
                <p className="font-mono text-[10px] uppercase tracking-widest text-ccu-accent mb-4">Service / 05</p>
                <h1 className="text-5xl md:text-8xl font-display font-extrabold uppercase tracking-tighter text-white mb-6">
                    <RevealText text="Words That" delay={0.1} className="block text-white/50" />
                    <RevealText text="Sell." delay={0.2} className="block text-ccu-accent" />
                </h1>
                <p className="text-xl text-white/50 max-w-2xl font-sans leading-relaxed mb-8">
                    A multi-million dollar campaign lives or dies on the first page of the script. We engineer high-retention screenplays, provocative ad copy, and pitch-perfect corporate narratives.
                </p>
                <div className="flex flex-wrap gap-3 mb-16">
                    {['Screenwriting', 'Copywriting', 'Storyboarding', 'TVC Scripts', 'Social Ads', 'Print Media'].map((tag) => (
                        <span key={tag} className="px-4 py-2 border border-white/10 rounded-full font-mono text-[10px] uppercase tracking-widest text-white/40">{tag}</span>
                    ))}
                </div>
            </section>

            {/* Ad Formats */}
            <section className="px-8 max-w-7xl mx-auto mb-24 z-10 relative">
                <p className="font-mono text-[10px] uppercase tracking-widest text-ccu-accent mb-8">What We Write</p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {adFormats.map((format, i) => (
                        <motion.div
                            key={format.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.05, duration: 0.5 }}
                            className="p-8 rounded-2xl border border-white/[0.06] bg-white/[0.02] hover:border-ccu-accent/30 transition-all duration-500 group"
                        >
                            <h3 className="text-base font-display font-bold uppercase tracking-tight text-white mb-2 group-hover:text-ccu-accent transition-colors">{format.title}</h3>
                            <p className="text-xs text-white/35 font-sans leading-relaxed">{format.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Script Scene + Process */}
            <section className="py-24 bg-[#030303] border-t border-white/[0.06] relative z-10">
                <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {/* Script Excerpt */}
                    <div className="rounded-2xl border border-white/[0.06] bg-[#0a0a0a] p-8 md:p-12">
                        <div className="flex items-center gap-3 mb-8">
                            <div className="w-2 h-2 rounded-full bg-ccu-accent/50" />
                            <span className="font-mono text-[10px] uppercase tracking-widest text-white/30">Script Excerpt</span>
                        </div>
                        <pre className="font-mono text-sm text-white/40 whitespace-pre-wrap leading-loose">
                            {`[Scene Start]

INT. NEON CITY - NIGHT

Rain slices through the
neon glow. A lone figure
stands at the edge.

NARRATOR (V.O)
Some brands chase the light.
We become it.

[Beat]

NARRATOR (V.O) (CONT'D)
Clap Cut Universe.
Where stories never fade.

[Cut to Black]
[Logo Reveal]`}
                        </pre>
                    </div>

                    {/* Process */}
                    <div>
                        <p className="font-mono text-[10px] uppercase tracking-widest text-ccu-accent mb-4">From Brief to Broadcast</p>
                        <h2 className="text-3xl md:text-4xl font-display font-bold uppercase tracking-tighter text-white mb-12">Our Process</h2>
                        <div className="space-y-8">
                            {scriptProcess.map((step) => (
                                <div key={step.num} className="flex gap-6 group">
                                    <span className="font-mono text-ccu-accent/50 text-lg font-bold group-hover:text-ccu-accent transition-colors shrink-0 mt-0.5">{step.num}</span>
                                    <div>
                                        <h3 className="text-base font-display font-bold uppercase tracking-tight text-white mb-1 group-hover:text-ccu-accent transition-colors">{step.title}</h3>
                                        <p className="text-xs text-white/35 font-sans leading-relaxed">{step.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Brands We Write For */}
            <section className="py-24 border-t border-white/[0.06] relative z-10">
                <div className="max-w-7xl mx-auto px-8">
                    <p className="font-mono text-[10px] uppercase tracking-widest text-ccu-accent mb-4">Brands We Write For</p>
                    <h2 className="text-3xl md:text-4xl font-display font-bold uppercase tracking-tighter text-white mb-12">Client Portfolio</h2>
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
                        {brandAds.map((ad, i) => (
                            <motion.div
                                key={ad.brand}
                                initial={{ opacity: 0, y: 15 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.03, duration: 0.4 }}
                                className="p-5 rounded-xl border border-white/[0.06] bg-white/[0.02] hover:border-ccu-accent/30 transition-all duration-500 group"
                            >
                                <div className="w-10 h-10 rounded-lg bg-white/[0.05] border border-white/10 flex items-center justify-center mb-3 group-hover:bg-ccu-accent/10 group-hover:border-ccu-accent/30 transition-all">
                                    <span className="font-display font-bold text-white text-base">{ad.brand.charAt(0)}</span>
                                </div>
                                <h3 className="text-sm font-display font-bold uppercase tracking-tight text-white group-hover:text-ccu-accent transition-colors">{ad.brand}</h3>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 px-8 max-w-7xl mx-auto text-center border-t border-white/[0.06] relative z-10">
                <p className="text-2xl md:text-3xl font-display font-bold uppercase tracking-tight text-white mb-6">Need a script that converts?</p>
                <Link href="/contact" className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white text-black font-mono text-xs uppercase tracking-widest font-bold hover:bg-ccu-accent transition-colors duration-500">
                    Brief Us
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
                </Link>
            </section>

            <AnimatedFooter />
        </main>
    );
}
