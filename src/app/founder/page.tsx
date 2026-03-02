'use client';

import PremiumNavbar from "@/components/sections/PremiumNavbar";
import AnimatedFooter from "@/components/sections/AnimatedFooter";
import RevealText from "@/components/ui/RevealText";
import GlassCard from "@/components/ui/GlassCard";
import Link from "next/link";
import { motion } from "framer-motion";

const achievements = [
    { num: '10+', label: 'Years in Industry' },
    { num: '50+', label: 'Campaigns' },
    { num: '500M+', label: 'Global Reach' },
    { num: '6', label: 'Awards' },
    { num: '20+', label: 'Brands' },
    { num: '10M+', label: 'Views' },
];

const timeline = [
    { year: '2016', title: 'The Beginning', desc: 'J. Jeyabal begins his creative journey in Madurai, Tamil Nadu — producing independent music albums, short films, and brand campaigns as a freelance creative director.' },
    { year: '2018', title: 'Building the Team', desc: 'A core team of cinematographers, editors, and designers starts working together on larger projects — celebrity campaigns, anthem productions, and commercial shoots.' },
    { year: '2020', title: 'Government Trust', desc: 'The team earns trust from Tamil Nadu government officials for official campaigns, public welfare programs, and strategic communications. Produced the "Say No To Drugs" campaign.' },
    { year: '2022', title: 'Award-Winning Work', desc: 'Multiple award-winning documentaries on water conservation, women empowerment, and child rights. "Moochirgai" and "Suttrum Suzhal" gain national recognition.' },
    { year: '2023', title: 'Digital Expansion', desc: 'Team begins building web applications and digital platforms — Queen Mira International School and Rafithub Fitness among key projects.' },
    { year: '2024', title: 'Clap Cut Universe Born', desc: 'All operations formalized under one banner — Clap Cut Universe. Headquartered at ABHI Complex, Kochadai, Madurai. Space Antham, Student Anthem, and Veeravanam anthems reach millions.' },
];

const roles = [
    { title: 'Creative Director', desc: 'Art-directing every major campaign, from concept to final frame. Ensuring cinematic DNA runs through every CCU production.', icon: '🎬' },
    { title: 'Executive Producer', desc: 'Overseeing anthem productions, documentary filmmaking, and commercial shoots with feature-film discipline and precision.', icon: '🎞️' },
    { title: 'Brand Strategist', desc: 'Crafting go-to-market strategies for 20+ brands, government bodies, and educational institutions across Tamil Nadu.', icon: '📊' },
    { title: 'Tech Visionary', desc: 'Driving the adoption of Next.js, Framer Motion, and GSAP for web development, pushing CCU into elite digital territory.', icon: '💻' },
];

const brands = ['Gabriel India (Anand Group)', 'Madhaven Jewellery', 'Queen Mira International School', 'Anand Group', 'Government of TN', 'Radio Mirchi', 'Pothys', 'Rafithub Fitness', 'Ganesh Brand Foods', 'JK Hair & Skin Care', 'Youvathi Cookies'];

const philosophy = [
    { title: 'Art Over Commerce', desc: "Every project is treated as a creative canvas. We never cut corners on quality, even when budgets are tight. The work must move audiences.", icon: '🎨' },
    { title: 'Technology as Craft', desc: "Digital isn't a channel — it's an art form. We push frameworks to their limits to create experiences that feel alive.", icon: '⚡' },
    { title: 'Impact Over Impressions', desc: "We measure success by cultural impact, not vanity metrics. If it doesn't change the conversation, it doesn't ship.", icon: '🎯' },
];

export default function FounderPage() {
    return (
        <main className="bg-ccu-900 min-h-screen pt-32 relative overflow-hidden">
            <PremiumNavbar />

            {/* Ambient Background */}
            <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0">
                <div className="absolute top-1/4 -left-40 w-[500px] h-[500px] bg-ccu-accent/[0.04] rounded-full blur-[200px]" />
                <div className="absolute bottom-1/3 -right-40 w-[600px] h-[600px] bg-purple-500/[0.02] rounded-full blur-[200px]" />
            </div>

            {/* ──────────────── HERO ──────────────── */}
            <section className="px-8 max-w-7xl mx-auto mb-8 z-10 relative">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center min-h-[70vh]">
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                        <p className="font-mono text-[10px] uppercase tracking-widest text-ccu-accent mb-4">Founder &amp; Proprietor</p>
                        <h1 className="text-6xl md:text-9xl font-display font-extrabold uppercase tracking-tighter text-white mb-6 leading-[0.85]">
                            <RevealText text="J." delay={0.1} className="block text-ccu-accent" />
                            <RevealText text="Jeyabal." delay={0.2} className="block" />
                        </h1>
                        <p className="text-xl text-white/50 font-sans leading-relaxed mb-4">
                            Visionary. Architect of Narratives. The driving force behind Clap Cut Universe.
                        </p>
                        <p className="text-base text-white/35 font-sans leading-relaxed mb-8">
                            With 10+ years of creative industry experience, J. Jeyabal worked independently — directing campaigns, producing anthems, and building brands across Tamil Nadu. In 2024, he unified his creative empire under one roof: Clap Cut Universe, headquartered in Madurai.
                        </p>

                        {/* Stats — Bento Mini Grid */}
                        <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
                            {achievements.map((a) => (
                                <div key={a.label} className="p-3 rounded-xl border border-white/[0.06] bg-white/[0.02] text-center group hover:border-ccu-accent/30 transition-all duration-500">
                                    <span className="block text-lg md:text-xl font-display font-bold text-white tracking-tighter group-hover:text-ccu-accent transition-colors">{a.num}</span>
                                    <span className="font-mono text-[7px] uppercase tracking-widest text-white/25">{a.label}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Portrait Card */}
                    <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }} className="relative">
                        <div className="relative aspect-[3/4] w-full max-w-md mx-auto lg:ml-auto rounded-2xl overflow-hidden border border-white/[0.06] group">
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10" />
                            <img src="/founder.jpg" alt="J. Jeyabal - Founder of Clap Cut Universe" className="absolute inset-0 w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-1000" />
                            <div className="absolute bottom-6 left-6 z-20">
                                <span className="font-mono text-xs uppercase tracking-widest text-white/60">J. Jeyabal</span>
                                <div className="flex gap-2 mt-2">
                                    {['Director', 'Producer', 'Strategist'].map((role) => (
                                        <span key={role} className="px-2 py-0.5 rounded-full text-[7px] font-mono uppercase tracking-widest border border-white/20 text-white/40 backdrop-blur-sm">{role}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* ──────────────── ROLES — Bento Cards ──────────────── */}
            <section className="px-8 max-w-7xl mx-auto py-24 border-t border-white/[0.06] relative z-10">
                <div className="text-center mb-16">
                    <p className="font-mono text-[10px] uppercase tracking-widest text-ccu-accent mb-4">Roles & Expertise</p>
                    <h2 className="text-3xl md:text-5xl font-display font-bold uppercase tracking-tighter text-white">A Multi-Disciplinary Leader</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {roles.map((role, i) => (
                        <motion.div
                            key={role.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, duration: 0.5 }}
                            className="p-8 rounded-2xl border border-white/[0.06] bg-white/[0.02] hover:border-ccu-accent/30 transition-all duration-700 group relative overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-ccu-accent/[0.05] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                            <div className="relative z-10 flex gap-5">
                                <div className="w-14 h-14 rounded-2xl bg-white/[0.04] border border-white/[0.06] flex items-center justify-center text-2xl shrink-0 group-hover:scale-110 group-hover:bg-white/[0.08] transition-all duration-500">{role.icon}</div>
                                <div>
                                    <h3 className="text-lg font-display font-bold uppercase tracking-tight text-white mb-2 group-hover:text-ccu-accent transition-colors">{role.title}</h3>
                                    <p className="text-xs text-white/35 font-sans leading-relaxed">{role.desc}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* ──────────────── JOURNEY TIMELINE ──────────────── */}
            <section className="py-32 bg-[#030303] relative z-10 border-t border-white/[0.06]">
                <div className="max-w-7xl mx-auto px-8">
                    <div className="text-center mb-20">
                        <p className="font-mono text-[10px] uppercase tracking-widest text-ccu-accent mb-4">The Journey</p>
                        <h2 className="text-4xl md:text-6xl font-display font-bold uppercase tracking-tighter text-white mb-4">Building an <span className="text-ccu-accent">Empire.</span></h2>
                        <p className="text-white/30 font-sans max-w-lg mx-auto">From solo freelance work to a full production powerhouse — the story of Clap Cut Universe.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {timeline.map((item, i) => (
                            <motion.div
                                key={item.year}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.05, duration: 0.5 }}
                                className={`relative p-8 rounded-2xl border overflow-hidden group transition-all duration-700 ${item.year === '2024'
                                    ? 'border-ccu-accent/30 bg-ccu-accent/[0.05] md:col-span-2 lg:col-span-1'
                                    : 'border-white/[0.06] bg-white/[0.02] hover:border-white/10'
                                    }`}
                            >
                                <div className="absolute top-4 right-4 font-mono text-5xl font-bold text-white/[0.04] select-none">{item.year}</div>
                                <div className="relative z-10">
                                    <span className="inline-block px-3 py-1 rounded-full text-[9px] font-mono uppercase tracking-widest border border-ccu-accent/20 text-ccu-accent mb-4">{item.year}</span>
                                    <h3 className="text-xl font-display font-bold uppercase tracking-tight text-white mb-3 group-hover:text-ccu-accent transition-colors">{item.title}</h3>
                                    <p className="text-xs text-white/35 font-sans leading-relaxed">{item.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ──────────────── PHILOSOPHY ──────────────── */}
            <section className="px-8 max-w-7xl mx-auto py-32 border-t border-white/[0.06] relative z-10">
                <div className="text-center mb-20">
                    <p className="font-mono text-[10px] uppercase tracking-widest text-ccu-accent mb-4">Guiding Principles</p>
                    <h2 className="text-4xl md:text-5xl font-display font-bold uppercase tracking-tighter text-white">His Philosophy</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {philosophy.map((item, i) => (
                        <motion.div
                            key={item.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, duration: 0.5 }}
                            className="p-8 md:p-10 rounded-2xl border border-white/[0.06] bg-white/[0.02] hover:border-ccu-accent/30 transition-all duration-700 group relative overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-ccu-accent/[0.04] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                            <div className="relative z-10">
                                <div className="w-14 h-14 rounded-2xl bg-ccu-accent/10 border border-ccu-accent/20 flex items-center justify-center mb-6 text-2xl group-hover:scale-110 transition-transform duration-500">{item.icon}</div>
                                <span className="font-mono text-ccu-accent/30 text-4xl font-bold block mb-3">{String(i + 1).padStart(2, '0')}</span>
                                <h3 className="text-xl font-display font-bold uppercase tracking-tight text-white mb-4 group-hover:text-ccu-accent transition-colors">{item.title}</h3>
                                <p className="text-white/40 font-sans leading-relaxed text-sm">{item.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* ──────────────── BRANDS ──────────────── */}
            <section className="py-24 bg-[#030303] border-t border-white/[0.06] relative z-10">
                <div className="max-w-7xl mx-auto px-8 text-center mb-12">
                    <p className="font-mono text-[10px] uppercase tracking-widest text-ccu-accent mb-4">Track Record</p>
                    <h2 className="text-3xl md:text-4xl font-display font-bold uppercase tracking-tighter text-white mb-4">Brands He Built</h2>
                </div>
                <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto px-8">
                    {brands.map((brand) => (
                        <span key={brand} className="px-5 py-2.5 rounded-full border border-white/[0.06] bg-white/[0.02] font-mono text-[10px] uppercase tracking-widest text-white/30 hover:border-ccu-accent/30 hover:text-white transition-all duration-500 cursor-default">
                            {brand}
                        </span>
                    ))}
                </div>
            </section>

            {/* ──────────────── LEGACY CARDS ──────────────── */}
            <section className="px-8 max-w-7xl mx-auto py-32 z-10 relative">
                <div className="text-center mb-16">
                    <p className="font-mono text-[10px] uppercase tracking-widest text-ccu-accent mb-4">The Legacy</p>
                    <h2 className="text-3xl md:text-4xl font-display font-bold uppercase tracking-tighter text-white">What He Stands For</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {[
                        { icon: '🏛️', title: 'The Establishment', desc: "Rising from Madurai's culturally rich heart, J. Jeyabal built Clap Cut Universe as a production powerhouse delivering cinematic quality to the corporate sector." },
                        { icon: '💎', title: 'Personal Worth', desc: 'Built on integrity and creative genius. His strategic insights have generated millions in ROI for clients, cementing his reputation as a kingmaker in marketing.' },
                        { icon: '🚀', title: 'The Vision', desc: '"To not just participate in the digital age, but to art-direct it." Integrating AI with human cinematic touch, pushing boundaries of design and film.' },
                    ].map((card, i) => (
                        <motion.div key={card.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                            <GlassCard hoverEffect={true} className="p-8 md:p-10 h-full">
                                <div className="w-14 h-14 rounded-2xl bg-ccu-accent/10 border border-ccu-accent/20 flex items-center justify-center mb-6 text-2xl">{card.icon}</div>
                                <h3 className="text-xl font-display font-bold uppercase tracking-tight text-white mb-4">{card.title}</h3>
                                <p className="text-white/40 font-sans leading-relaxed text-sm">{card.desc}</p>
                            </GlassCard>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* ──────────────── CTA ──────────────── */}
            <section className="py-32 px-8 text-center border-t border-white/[0.06] relative z-10">
                <div className="max-w-3xl mx-auto">
                    <p className="font-mono text-[10px] uppercase tracking-widest text-ccu-accent mb-6">Connect</p>
                    <h2 className="text-3xl md:text-5xl font-display font-bold uppercase tracking-tight text-white mb-8">Want to work with <span className="text-ccu-accent">J. Jeyabal?</span></h2>
                    <p className="text-white/40 font-sans mb-10 max-w-xl mx-auto">
                        Whether you&apos;re a brand seeking cinematic elevation, a government body needing campaign strategy, or an artist looking for collaboration — reach out.
                    </p>
                    <div className="flex flex-wrap items-center justify-center gap-4">
                        <Link href="/contact" className="inline-flex items-center gap-3 px-10 py-5 rounded-full bg-white text-black font-mono text-xs uppercase tracking-widest font-bold hover:bg-ccu-accent transition-colors duration-500">
                            Get in Touch
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
                        </Link>
                        <Link href="/portfolio" className="px-10 py-5 rounded-full border border-white/20 text-white font-mono text-xs uppercase tracking-widest hover:border-white/50 transition-colors duration-500">
                            View His Work
                        </Link>
                    </div>
                </div>
            </section>

            <AnimatedFooter />
        </main>
    );
}
