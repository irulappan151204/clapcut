'use client';

import PremiumNavbar from "@/components/sections/PremiumNavbar";
import AnimatedFooter from "@/components/sections/AnimatedFooter";
import RevealText from "@/components/ui/RevealText";
import MagneticButton from "@/components/ui/MagneticButton";
import Link from 'next/link';
import { motion } from "framer-motion";

const services = [
    { title: 'Film & Campaigns', description: 'Blockbuster storytelling for the modern brand. Tamil cinema aesthetics meet global-scale digital campaigns. From anthem productions to viral marketing.', link: '/film-campaigns', number: '01', icon: '🎬', tags: ['Anthem Production', 'Viral Marketing', 'AR/VR'], accent: 'from-ccu-accent/20 to-ccu-accent/[0.02]' },
    { title: 'Web & App Development', description: 'Awwwards-level digital experiences. High-performance React architectures, Lighthouse 95+ compliance, and immersive scroll-driven interactions.', link: '/web-app-development', number: '02', icon: '💻', tags: ['Next.js 14', 'Framer Motion', 'WebGL'], accent: 'from-blue-500/15 to-blue-500/[0.02]' },
    { title: 'Photography', description: 'Cinematic stills, commercial shoots, and luxury brand photography. Every frame is a composed narrative engineered for impact.', link: '/photography', number: '03', icon: '📸', tags: ['Commercial', 'Portraiture', 'Product'], accent: 'from-purple-500/15 to-purple-500/[0.02]' },
    { title: 'Videography', description: 'From sweeping 8K drone cinematics to intimate brand documentaries. We operate with feature-film discipline on every shoot.', link: '/videography', number: '04', icon: '🎥', tags: ['4K/8K Production', 'Color Grading', 'VFX'], accent: 'from-amber-500/15 to-amber-500/[0.02]' },
    { title: 'Ads & Scripts', description: 'High-retention screenplays, provocative ad copy, and pitch-perfect corporate narratives that refuse to be ignored.', link: '/ads-scripts', number: '05', icon: '✍️', tags: ['Screenwriting', 'Copywriting', 'Storyboarding'], accent: 'from-rose-500/15 to-rose-500/[0.02]' },
    { title: 'Event Management', description: 'Large-scale cultural events, government functions, elite weddings, and brand activations. Protocol-grade execution at every scale.', link: '/contact', number: '06', icon: '🎪', tags: ['Concerts', 'Government', 'Weddings'], accent: 'from-emerald-500/15 to-emerald-500/[0.02]' },
    { title: 'Digital Media', description: 'End-to-end social media strategy, celebrity page management, influencer campaigns, paid ads optimization, and reputation management.', link: '/contact', number: '07', icon: '📱', tags: ['Social Strategy', 'Influencer', 'Analytics'], accent: 'from-cyan-500/15 to-cyan-500/[0.02]' },
    { title: 'Branding Solutions', description: '360-degree branding: newspaper ads, theatre branding, hoardings, bus/train wraps, and event backdrop execution.', link: '/contact', number: '08', icon: '✨', tags: ['Outdoor Media', 'Print', 'Identity'], accent: 'from-pink-500/15 to-pink-500/[0.02]' },
];

const methodology = [
    { num: '01', title: 'Discovery', desc: 'Deep dive into brand DNA, market positioning, and target audience psychology.', icon: '🔍' },
    { num: '02', title: 'Narrative', desc: 'Scriptwriting, concepting, and outlining the cinematic or digital roadmap.', icon: '📝' },
    { num: '03', title: 'Production', desc: 'High-end shoots, scalable code architecture, and precise UI/UX execution.', icon: '⚡' },
    { num: '04', title: 'Deployment', desc: 'Launch with impact. Monitoring Lighthouse metrics, conversions, and campaign KPIs.', icon: '🚀' },
];

export default function ServicesPage() {
    return (
        <main className="bg-ccu-900 min-h-screen pt-32 relative overflow-hidden">
            <PremiumNavbar />

            {/* Ambient Background */}
            <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0">
                <div className="absolute top-1/4 -left-40 w-[500px] h-[500px] bg-ccu-accent/[0.03] rounded-full blur-[200px]" />
                <div className="absolute bottom-1/4 -right-40 w-[600px] h-[600px] bg-purple-500/[0.02] rounded-full blur-[200px]" />
            </div>

            {/* Hero */}
            <section className="px-8 max-w-7xl mx-auto mb-24 z-10 relative min-h-[50vh] flex flex-col justify-center">
                <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                    <p className="font-mono text-[10px] uppercase tracking-widest text-ccu-accent mb-4">Our Services</p>
                    <h1 className="text-5xl md:text-9xl font-display font-extrabold uppercase tracking-tighter text-white mb-6 leading-[0.85]">
                        <RevealText text="What We" delay={0.1} className="block text-white/50" />
                        <RevealText text="Master." delay={0.2} className="block text-ccu-accent" />
                    </h1>
                    <p className="text-xl text-white/40 font-sans max-w-2xl leading-relaxed mb-8">
                        Eight specialized divisions working in concert. From cinematic anthem productions to enterprise web applications — every service engineered for premium output.
                    </p>
                    <div className="flex flex-wrap gap-3">
                        {['Film', 'Web', 'Photo', 'Video', 'Ads', 'Events', 'Digital', 'Brand'].map((tag) => (
                            <span key={tag} className="px-4 py-2 border border-white/10 rounded-full font-mono text-[10px] uppercase tracking-widest text-white/30">{tag}</span>
                        ))}
                    </div>
                </motion.div>
            </section>

            {/* Service Bento Grid */}
            <section className="px-8 max-w-7xl mx-auto mb-32 z-10 relative">
                {/* Top 2 large */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    {services.slice(0, 2).map((service, i) => (
                        <motion.div key={service.number} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.6 }}>
                            <Link href={service.link} className={`relative block p-10 md:p-12 rounded-2xl border border-white/[0.06] bg-white/[0.02] overflow-hidden group transition-all duration-700 hover:border-white/15 min-h-[320px] flex flex-col justify-end`}>
                                <div className={`absolute inset-0 bg-gradient-to-br ${service.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none`} />
                                <div className="absolute top-8 right-8 w-16 h-16 rounded-2xl bg-white/[0.04] border border-white/[0.06] flex items-center justify-center text-3xl group-hover:scale-110 group-hover:bg-white/[0.08] transition-all duration-500">{service.icon}</div>
                                <span className="font-mono text-white/[0.06] text-8xl font-bold absolute top-4 left-8 select-none">{service.number}</span>
                                <div className="relative z-10">
                                    <h3 className="text-3xl md:text-4xl font-display font-bold uppercase tracking-tight text-white mb-3 group-hover:text-ccu-accent transition-colors">{service.title}</h3>
                                    <p className="text-sm text-white/40 font-sans leading-relaxed max-w-lg mb-4">{service.description}</p>
                                    <div className="flex flex-wrap gap-2">
                                        {service.tags.map((tag) => (
                                            <span key={tag} className="px-3 py-1 rounded-full text-[9px] font-mono uppercase tracking-widest border border-white/[0.06] text-white/20">{tag}</span>
                                        ))}
                                    </div>
                                </div>
                                <div className="absolute bottom-8 right-8 w-12 h-12 rounded-full border border-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:bg-white group-hover:text-black transition-all duration-500">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>

                {/* Middle 3 */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                    {services.slice(2, 5).map((service, i) => (
                        <motion.div key={service.number} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05, duration: 0.5 }}>
                            <Link href={service.link} className={`relative block p-8 rounded-2xl border border-white/[0.06] bg-white/[0.02] overflow-hidden group transition-all duration-700 hover:border-white/15 min-h-[250px] flex flex-col justify-between`}>
                                <div className={`absolute inset-0 bg-gradient-to-br ${service.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none`} />
                                <div className="relative z-10">
                                    <div className="flex items-center justify-between mb-8">
                                        <div className="w-12 h-12 rounded-xl bg-white/[0.04] border border-white/[0.06] flex items-center justify-center text-xl group-hover:scale-110 group-hover:bg-white/[0.08] transition-all duration-500">{service.icon}</div>
                                        <span className="font-mono text-white/10 text-sm font-bold">{service.number}</span>
                                    </div>
                                    <h3 className="text-xl font-display font-bold uppercase tracking-tight text-white mb-2 group-hover:text-ccu-accent transition-colors">{service.title}</h3>
                                    <p className="text-xs text-white/30 font-sans leading-relaxed mb-3">{service.description}</p>
                                    <div className="flex flex-wrap gap-1.5">
                                        {service.tags.map((tag) => (
                                            <span key={tag} className="px-2 py-0.5 rounded-full text-[8px] font-mono uppercase tracking-widest border border-white/[0.04] text-white/15">{tag}</span>
                                        ))}
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom 3 */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {services.slice(5).map((service, i) => (
                        <motion.div key={service.number} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05, duration: 0.5 }}>
                            <Link href={service.link} className={`relative block p-8 rounded-2xl border border-white/[0.06] bg-white/[0.02] overflow-hidden group transition-all duration-700 hover:border-white/15 min-h-[250px] flex flex-col justify-between`}>
                                <div className={`absolute inset-0 bg-gradient-to-br ${service.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none`} />
                                <div className="relative z-10">
                                    <div className="flex items-center justify-between mb-8">
                                        <div className="w-12 h-12 rounded-xl bg-white/[0.04] border border-white/[0.06] flex items-center justify-center text-xl group-hover:scale-110 group-hover:bg-white/[0.08] transition-all duration-500">{service.icon}</div>
                                        <span className="font-mono text-white/10 text-sm font-bold">{service.number}</span>
                                    </div>
                                    <h3 className="text-xl font-display font-bold uppercase tracking-tight text-white mb-2 group-hover:text-ccu-accent transition-colors">{service.title}</h3>
                                    <p className="text-xs text-white/30 font-sans leading-relaxed mb-3">{service.description}</p>
                                    <div className="flex flex-wrap gap-1.5">
                                        {service.tags.map((tag) => (
                                            <span key={tag} className="px-2 py-0.5 rounded-full text-[8px] font-mono uppercase tracking-widest border border-white/[0.04] text-white/15">{tag}</span>
                                        ))}
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Methodology */}
            <section className="py-32 bg-[#030303] relative z-10 border-t border-white/[0.06]">
                <div className="px-8 max-w-7xl mx-auto">
                    <div className="text-center mb-20">
                        <p className="font-mono text-[10px] uppercase tracking-widest text-ccu-accent mb-4">How We Work</p>
                        <h2 className="text-4xl md:text-7xl font-display font-bold uppercase tracking-tighter text-white mb-4">
                            The <span className="text-ccu-accent">Methodology.</span>
                        </h2>
                        <p className="text-white/30 font-sans max-w-lg mx-auto">Four battle-tested phases that take projects from concept to cultural impact.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                        {methodology.map((step, i) => (
                            <motion.div
                                key={step.num}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1, duration: 0.5 }}
                                className="relative p-8 rounded-2xl border border-white/[0.06] bg-white/[0.02] hover:border-ccu-accent/30 transition-all duration-500 group text-center"
                            >
                                <div className="w-16 h-16 rounded-2xl bg-ccu-accent/10 border border-ccu-accent/20 flex items-center justify-center mx-auto mb-6 text-2xl group-hover:bg-ccu-accent/20 group-hover:scale-110 transition-all duration-500">
                                    {step.icon}
                                </div>
                                <span className="font-mono text-ccu-accent/40 text-xs font-bold block mb-3">Step {step.num}</span>
                                <h3 className="text-lg font-display font-bold text-white uppercase tracking-widest mb-3 group-hover:text-ccu-accent transition-colors">{step.title}</h3>
                                <p className="text-xs text-white/35 font-sans leading-relaxed">{step.desc}</p>
                                {i < 3 && (
                                    <div className="hidden md:block absolute top-1/2 -right-3 w-6 text-white/10">→</div>
                                )}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-32 px-8 text-center relative z-10">
                <div className="max-w-3xl mx-auto">
                    <p className="font-mono text-[10px] uppercase tracking-widest text-ccu-accent mb-6">Ready?</p>
                    <h2 className="text-3xl md:text-5xl font-display font-bold uppercase tracking-tight text-white mb-8">Let&apos;s build something <span className="text-ccu-accent">legendary.</span></h2>
                    <MagneticButton>
                        <Link href="/contact" className="inline-flex items-center gap-3 px-10 py-5 rounded-full bg-white text-black font-mono text-xs uppercase tracking-widest font-bold hover:bg-ccu-accent transition-colors duration-500">
                            Start a Project
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
                        </Link>
                    </MagneticButton>
                </div>
            </section>

            <AnimatedFooter />
        </main>
    );
}
