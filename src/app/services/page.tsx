'use client';

import PremiumNavbar from "@/components/sections/PremiumNavbar";
import AnimatedFooter from "@/components/sections/AnimatedFooter";
import RevealText from "@/components/ui/RevealText";
import MagneticButton from "@/components/ui/MagneticButton";
import Link from 'next/link';
import { motion } from "framer-motion";
import { useState } from "react";
import DetailModal, { ModalData } from "@/components/ui/DetailModal";

const services = [
    { title: 'Film & Campaigns', description: 'Blockbuster storytelling for the modern brand. Tamil cinema aesthetics meet global-scale digital campaigns. From anthem productions to viral marketing.', link: '/film-campaigns', number: '01', icon: '🎬', tags: ['Anthem Production', 'Viral Marketing', 'AR/VR'], accent: 'from-ccu-accent/20 to-ccu-accent/[0.02]', bgImage: 'https://images.unsplash.com/photo-1594909122845-11baa439b7bf?auto=format&fit=crop&q=80&w=1200' },
    { title: 'Web & App Development', description: 'Awwwards-level digital experiences. High-performance React architectures, Lighthouse 95+ compliance, and immersive scroll-driven interactions.', link: '/web-app-development', number: '02', icon: '💻', tags: ['Next.js 14', 'Framer Motion', 'WebGL'], accent: 'from-blue-500/15 to-blue-500/[0.02]', bgImage: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=1200' },
    { title: 'Photography', description: 'Cinematic stills, commercial shoots, and luxury brand photography. Every frame is a composed narrative engineered for impact.', link: '/photography', number: '03', icon: '📸', tags: ['Commercial', 'Portraiture', 'Product'], accent: 'from-purple-500/15 to-purple-500/[0.02]', bgImage: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80&w=1200' },
    { title: 'Videography', description: 'From sweeping 8K drone cinematics to intimate brand documentaries. We operate with feature-film discipline on every shoot.', link: '/videography', number: '04', icon: '🎥', tags: ['4K/8K Production', 'Color Grading', 'VFX'], accent: 'from-amber-500/15 to-amber-500/[0.02]', bgImage: 'https://images.unsplash.com/photo-1522858102604-037042813158?auto=format&fit=crop&q=80&w=1200' },
    { title: 'Ads & Scripts', description: 'High-retention screenplays, provocative ad copy, and pitch-perfect corporate narratives that refuse to be ignored.', link: '/ads-scripts', number: '05', icon: '✍️', tags: ['Screenwriting', 'Copywriting', 'Storyboarding'], accent: 'from-rose-500/15 to-rose-500/[0.02]', bgImage: 'https://images.unsplash.com/photo-1516805096590-ea805b5ceb4a?auto=format&fit=crop&q=80&w=1200' },
    { title: 'Event Management', description: 'Large-scale cultural events, government functions, elite weddings, and brand activations. Protocol-grade execution at every scale.', link: '/contact', number: '06', icon: '🎪', tags: ['Concerts', 'Government', 'Weddings'], accent: 'from-emerald-500/15 to-emerald-500/[0.02]', bgImage: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&q=80&w=1200' },
    { title: 'Digital Media', description: 'End-to-end social media strategy, celebrity page management, influencer campaigns, paid ads optimization, and reputation management.', link: '#social-media', number: '07', icon: '📱', tags: ['Social Strategy', 'Influencer', 'Analytics'], accent: 'from-cyan-500/15 to-cyan-500/[0.02]', bgImage: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=1200' },
    { title: 'Branding Solutions', description: '360-degree branding: newspaper ads, theatre branding, hoardings, bus/train wraps, and event backdrop execution.', link: '/contact', number: '08', icon: '✨', tags: ['Outdoor Media', 'Print', 'Identity'], accent: 'from-pink-500/15 to-pink-500/[0.02]', bgImage: 'https://images.unsplash.com/photo-1434626881859-194d67b2b86f?auto=format&fit=crop&q=80&w=1200' },
];

const methodology = [
    { num: '01', title: 'Discovery', desc: 'Deep dive into brand DNA, market positioning, and target audience psychology.', icon: '🔍' },
    { num: '02', title: 'Narrative', desc: 'Scriptwriting, concepting, and outlining the cinematic or digital roadmap.', icon: '📝' },
    { num: '03', title: 'Production', desc: 'High-end shoots, scalable code architecture, and precise UI/UX execution.', icon: '⚡' },
    { num: '04', title: 'Deployment', desc: 'Launch with impact. Monitoring Lighthouse metrics, conversions, and campaign KPIs.', icon: '🚀' },
];

const creativeEngine: ModalData[] = [
    { 
        title: 'Video Content Creation', 
        desc: 'Short-form (Reels, TikToks), long-form YouTube strategies, hooks, AIDA/PAS frameworks, AI video content, and cinematic editing.', 
        icon: '🎬',
        image: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=1200',
        tabs: [
            { id: 'overview', label: 'Overview', content: <p>Short-form vertical video has become the default mechanism for consumer discovery. We utilize data-backed hooks to retain attention past the critical 3-second mark, employing AIDA and PAS frameworks to guide the viewer toward predefined conversion goals. Our long-form YouTube strategy focuses on advanced SEO, high-retention cinematic editing structure, and sophisticated thumbnail psychology.</p> },
            { id: 'tools', label: 'Tools Stack', content: <ul className="list-disc pl-5 mt-2 space-y-2"><li><b>Editing:</b> DaVinci Resolve, Premiere Pro, CapCut (rapid deliverables)</li><li><b>AI Integration:</b> ElevenLabs for VO, Midjourney for assets</li><li><b>Strategy:</b> TubeBuddy, VidIQ</li></ul> }
        ]
    },
    { 
        title: 'Photo & Image Content', 
        desc: 'Commercial photography, flat lays. Advanced editing (Lightroom), Canva/Adobe graphics, infographics, flexes, and banners.', 
        icon: '📸',
        image: 'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?q=80&w=1200',
        tabs: [
            { id: 'overview', label: 'Overview', content: <p>A single frame must capture the entire brand ethos. We execute highly stylized photography, combining lifestyle shots with precision product photography and flat lays. Each visual asset goes through cinematic color grading.</p> },
            { id: 'examples', label: 'Deliverables', content: <ul className="list-disc pl-5 mt-2 space-y-1"><li>High-CTR Carousel Posts</li><li>Complex Infographics & Data Visualization</li><li>Mass-scale Flexes and Banners</li></ul> }
        ]
    },
    { 
        title: 'Copywriting & Captions', 
        desc: 'Engaging captions with compelling hooks & CTAs, storytelling techniques, optimization, and rigorous SEO keyword research.', 
        icon: '✍️',
        tabs: [
            { id: 'overview', label: 'Overview', content: <p>Words remain the primary driver of conversion. We write surgically precise copy that aligns flawlessly with your brand&apos;s tone of voice. This includes bio optimization, rigorous hashtag targeting, and embedding core SEO keywords naturally into the captions without diluting the narrative.</p> }
        ]
    },
    { 
        title: 'Graphic Design', 
        desc: 'Visual brand identity creation — logos, fonts, colors. Brand kit management using Figma, Illustrator, and Canva.', 
        icon: '🎨',
        image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=1200',
        tabs: [
            { id: 'design_system', label: 'Brand Architecture', content: <p>We do not just create posts; we establish a total visual identity. From defining custom typography stacks to orchestrating unified color palettes, we provide you with a comprehensive aesthetic blueprint.</p> },
            { id: 'tools', label: 'Software Suite', content: <ul className="list-disc pl-5 mt-2 space-y-1"><li>Figma (Prototyping & Layouts)</li><li>Adobe Illustrator (Vector Assets & Logos)</li><li>Canva Enterprise (Template Systems)</li></ul> }
        ]
    },
];

const distributionStrategy: ModalData[] = [
    { 
        title: 'Platform Strategy', 
        desc: 'Mastery over Instagram, TikTok, YouTube, LinkedIn, X, and Threads fitting optimal posting frequencies.', 
        icon: '📱',
        image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1200',
        tabs: [
            { id: 'overview', label: 'Omnichannel Precision', content: <p>Context is as important as content. We deploy platform-agnostic strategies that natively adapt to each environment—be it B2B authority building on LinkedIn or high-velocity micro-trends on TikTok.</p> }
        ]
    },
    { 
        title: 'Content Planning', 
        desc: 'Monthly/weekly content calendars, strategic pillars, batch creation, and cross-platform repurposing.', 
        icon: '📅',
        tabs: [
            { id: 'methodology', label: 'Execution', content: <p>We don&apos;t believe in erratic posting. Through rigorous content batching and rigid monthly scheduling calendars, we guarantee an uninterrupted pipeline of top-tier assets. We utilize Buffer, Meta Suite, and custom Notion architectures.</p> }
        ]
    },
    { 
        title: 'Community Management', 
        desc: 'Active engagement via DMs, polls, Q&As. Turn followers into loyal advocates and drive UGC.', 
        icon: '🤝',
        tabs: [
            { id: 'engagement', label: 'Engagement Protocol', content: <p>A brand without a strong community is fragile. We deploy active engagement via DMs, responsive comment moderation, dynamic interactive polls, and strategic Q&A systems.</p> }
        ]
    },
    { 
        title: 'Influencer & UGC', 
        desc: 'Vetting nano to mega influencers, strategic outreach, gifting vs. paid partnerships.', 
        icon: '🤳',
        image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1200',
        tabs: [
            { id: 'overview', label: 'Creator Network', content: <p>We meticulously vet influencers—from highly converting nano-creators to broad-reach mega-influencers. Our team handles everything from custom outreach templates to intense campaign briefing and UGC collection.</p> }
        ]
    },
    { 
        title: 'Paid Social Ads', 
        desc: 'High-ROAS Meta and LinkedIn ad sets. A/B testing creatives and optimal bidding strategies.', 
        icon: '💰',
        tabs: [
            { id: 'strategy', label: 'Ad Operations', content: <p>Organic reach is only the beginning. We supercharge proven organic assets with paid capital. From precise retargeting drops to granular A/B testing across Meta, TikTok, and LinkedIn ad managers.</p> }
        ]
    },
];

const intelligence: ModalData[] = [
    { 
        title: 'Analytics & Tracking', 
        desc: 'Data-driven pivoting. We track Reach, Impressions, Engagement, CTR, and ROAS to deliver actionable reports.', 
        icon: '📊',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200',
        tabs: [
            { id: 'metrics', label: 'The Math', content: <p>Gut feeling does not scale. We rely on hard data metrics including Reach, Impressions, true Engagement Rate, Click-Through Rate (CTR), and Return on Ad Spend (ROAS). Delivered via monthly executive reports.</p> },
            { id: 'tools', label: 'Analytics Engine', content: <ul className="list-disc pl-5 mt-2 space-y-1"><li>Sprout Social</li><li>Google Analytics 4</li><li>Native Platform Dashboards</li></ul> }
        ]
    },
    { 
        title: 'Trends & Viral Content', 
        desc: 'Riding audio, meme, and challenge trends without losing brand equity to manufacture virality systematically.', 
        icon: '🔥',
        tabs: [
            { id: 'virality', label: 'Algorithm Hacking', content: <p>Virality is rarely accidental; it is engineered. We leverage tools like TrendTok and Exploding Topics to intercept trends at their inception, allowing brands to ride cultural momentum without sacrificing their premium identity.</p> }
        ]
    },
];

export default function ServicesPage() {
    const [selectedItemIndex, setSelectedItemIndex] = useState<number | null>(null);
    const [activeArray, setActiveArray] = useState<ModalData[] | null>(null);

    const openModal = (array: ModalData[], index: number) => {
        setActiveArray(array);
        setSelectedItemIndex(index);
    };

    const closeModal = () => {
        setSelectedItemIndex(null);
        setTimeout(() => setActiveArray(null), 300); // Wait for exit animation
    };

    const handleNext = () => {
        if (activeArray && selectedItemIndex !== null && selectedItemIndex < activeArray.length - 1) {
            setSelectedItemIndex(selectedItemIndex + 1);
        }
    };

    const handlePrev = () => {
        if (activeArray && selectedItemIndex !== null && selectedItemIndex > 0) {
            setSelectedItemIndex(selectedItemIndex - 1);
        }
    };

    const isModalOpen = selectedItemIndex !== null && activeArray !== null;
    const currentModalData = isModalOpen ? activeArray[selectedItemIndex] : null;

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
                            <Link href={service.link} className={`relative block p-10 md:p-12 rounded-2xl border border-white/[0.06] bg-[#030303] overflow-hidden group transition-all duration-700 hover:border-white/15 min-h-[320px] flex flex-col justify-end`}>
                                <img src={service.bgImage} alt={service.title} className="absolute inset-0 w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-1000 grayscale group-hover:grayscale-0 opacity-40 mix-blend-overlay z-0" />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-[#030303]/80 to-transparent z-0" />
                                <div className={`absolute inset-0 bg-gradient-to-br ${service.accent} opacity-20 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-0`} />
                                <div className="absolute top-8 right-8 w-16 h-16 rounded-2xl bg-black/50 backdrop-blur-md border border-white/[0.06] flex items-center justify-center text-3xl group-hover:scale-110 group-hover:bg-white/[0.08] transition-all duration-500 z-10 shadow-lg">{service.icon}</div>
                                <span className="font-mono text-white/20 text-8xl font-bold absolute top-4 left-8 select-none drop-shadow-md group-hover:text-white/10 transition-colors z-10">{service.number}</span>
                                <div className="relative z-10">
                                    <h3 className="text-3xl md:text-4xl font-display font-bold uppercase tracking-tight text-white mb-3 group-hover:text-ccu-accent transition-colors drop-shadow-lg">{service.title}</h3>
                                    <p className="text-sm text-white/60 font-sans leading-relaxed max-w-lg mb-4 drop-shadow-md">{service.description}</p>
                                    <div className="flex flex-wrap gap-2">
                                        {service.tags.map((tag) => (
                                            <span key={tag} className="px-3 py-1 rounded-full text-[9px] font-mono uppercase tracking-widest bg-black/50 backdrop-blur border border-white/10 text-white/70 shadow-md">{tag}</span>
                                        ))}
                                    </div>
                                </div>
                                <div className="absolute bottom-8 right-8 w-12 h-12 rounded-full bg-white text-black flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 z-10 shadow-xl">
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
                            <Link href={service.link} className={`relative block p-8 rounded-2xl border border-white/[0.06] bg-[#030303] overflow-hidden group transition-all duration-700 hover:border-white/15 min-h-[250px] flex flex-col justify-between`}>
                                <img src={service.bgImage} alt={service.title} className="absolute inset-0 w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-1000 grayscale opacity-20 group-hover:opacity-40 mix-blend-overlay z-0" />
                                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#030303] z-0" />
                                <div className={`absolute inset-0 bg-gradient-to-br ${service.accent} opacity-10 group-hover:opacity-60 transition-opacity duration-700 pointer-events-none z-0`} />
                                <div className="relative z-10">
                                    <div className="flex items-center justify-between mb-8">
                                        <div className="w-12 h-12 rounded-xl bg-black/50 backdrop-blur-md border border-white/[0.06] flex items-center justify-center text-xl group-hover:scale-110 group-hover:bg-white/[0.08] transition-all duration-500 shadow-md">{service.icon}</div>
                                        <span className="font-mono text-white/30 text-sm font-bold drop-shadow">{service.number}</span>
                                    </div>
                                    <h3 className="text-xl font-display font-bold uppercase tracking-tight text-white mb-2 group-hover:text-ccu-accent transition-colors drop-shadow-lg">{service.title}</h3>
                                    <p className="text-xs text-white/60 font-sans leading-relaxed mb-3 drop-shadow-md">{service.description}</p>
                                    <div className="flex flex-wrap gap-1.5">
                                        {service.tags.map((tag) => (
                                            <span key={tag} className="px-2 py-0.5 rounded-full text-[8px] font-mono uppercase tracking-widest bg-black/40 backdrop-blur border border-white/[0.1] text-white/60 shadow-md">{tag}</span>
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
                            <Link href={service.link} className={`relative block p-8 rounded-2xl border border-white/[0.06] bg-[#030303] overflow-hidden group transition-all duration-700 hover:border-white/15 min-h-[250px] flex flex-col justify-between`}>
                                <img src={service.bgImage} alt={service.title} className="absolute inset-0 w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-1000 grayscale opacity-20 group-hover:opacity-40 mix-blend-overlay z-0" />
                                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#030303] z-0" />
                                <div className={`absolute inset-0 bg-gradient-to-br ${service.accent} opacity-10 group-hover:opacity-60 transition-opacity duration-700 pointer-events-none z-0`} />
                                <div className="relative z-10">
                                    <div className="flex items-center justify-between mb-8">
                                        <div className="w-12 h-12 rounded-xl bg-black/50 backdrop-blur-md border border-white/[0.06] flex items-center justify-center text-xl group-hover:scale-110 group-hover:bg-white/[0.08] transition-all duration-500 shadow-md">{service.icon}</div>
                                        <span className="font-mono text-white/30 text-sm font-bold drop-shadow">{service.number}</span>
                                    </div>
                                    <h3 className="text-xl font-display font-bold uppercase tracking-tight text-white mb-2 group-hover:text-ccu-accent transition-colors drop-shadow-lg">{service.title}</h3>
                                    <p className="text-xs text-white/60 font-sans leading-relaxed mb-3 drop-shadow-md">{service.description}</p>
                                    <div className="flex flex-wrap gap-1.5">
                                        {service.tags.map((tag) => (
                                            <span key={tag} className="px-2 py-0.5 rounded-full text-[8px] font-mono uppercase tracking-widest bg-black/40 backdrop-blur border border-white/[0.1] text-white/60 shadow-md">{tag}</span>
                                        ))}
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Social Media Market Deep Dive */}
            <section id="social-media" className="py-32 relative z-10 border-t border-white/[0.06] overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-500/[0.03] rounded-full blur-[200px] pointer-events-none" />
                <div className="px-8 max-w-7xl mx-auto">
                    <div className="text-center mb-24">
                        <p className="font-mono text-[10px] uppercase tracking-widest text-cyan-400 mb-4">Digital Dominance (A to Z)</p>
                        <h2 className="text-4xl md:text-7xl font-display font-bold uppercase tracking-tighter text-white mb-6">
                            Social Media &amp; <span className="text-cyan-400">Content.</span>
                        </h2>
                        <p className="text-white/40 font-sans max-w-2xl mx-auto leading-relaxed mb-4">
                            We don&apos;t just post content; we architect brand universes, engineer virality, and convert attention into measurable capital.
                        </p>
                        <p className="text-xs text-white/30 uppercase tracking-widest font-mono">
                            Scroll. Click any card for profound details.
                        </p>
                    </div>

                    {/* Phase 1 with Image */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
                        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="relative h-[400px] md:h-[600px] rounded-3xl overflow-hidden border border-white/[0.06] group">
                            <div className="absolute inset-0 bg-cyan-500/10 mix-blend-overlay z-10 group-hover:bg-transparent transition-all duration-700" />
                            <img src="https://images.unsplash.com/photo-1622737133809-d95047b9e673?auto=format&fit=crop&q=80&w=1200" alt="Social Media Creation" className="absolute inset-0 w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-1000 grayscale group-hover:grayscale-0" />
                        </motion.div>
                        <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
                            <div className="border-l-2 border-cyan-400 pl-6 mb-10">
                                <p className="font-mono text-[10px] uppercase tracking-widest text-white/40 mb-2">Phase 01</p>
                                <h3 className="text-3xl font-display font-bold uppercase tracking-tight text-white mb-2">The Creative Engine</h3>
                                <p className="text-sm text-white/50 font-sans">World-class visual and textual assets designed to stop the scroll.</p>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {creativeEngine.map((item, i) => (
                                    <button 
                                        key={item.title} 
                                        onClick={() => openModal(creativeEngine, i)}
                                        className="text-left p-6 rounded-2xl border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.05] hover:border-cyan-400/50 transition-all duration-500 group relative overflow-hidden"
                                    >
                                        <div className="text-2xl mb-4 group-hover:scale-110 transition-transform duration-500">{item.icon}</div>
                                        <h4 className="text-sm font-display font-bold uppercase tracking-tight text-white mb-2 group-hover:text-cyan-400 transition-colors pr-6">{item.title}</h4>
                                        <p className="text-xs text-white/40 font-sans leading-relaxed line-clamp-3">{item.desc}</p>
                                        
                                        <div className="absolute top-4 right-4 w-6 h-6 rounded-full bg-white/5 border border-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                                            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
                                        </div>
                                    </button>
                                ))}
                            </div>
                        </motion.div>
                    </div>

                    {/* Phase 2 with Image */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32 lg:flex-row-reverse">
                        <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="order-1 lg:order-2 relative h-[400px] md:h-[600px] rounded-3xl overflow-hidden border border-white/[0.06] group">
                            <div className="absolute inset-0 bg-purple-500/10 mix-blend-overlay z-10 group-hover:bg-transparent transition-all duration-700" />
                            <img src="https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?auto=format&fit=crop&q=80&w=1200" alt="Strategy & Distribution" className="absolute inset-0 w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-1000 grayscale group-hover:grayscale-0" />
                        </motion.div>
                        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="order-2 lg:order-1">
                            <div className="border-l-2 border-purple-400 pl-6 mb-10">
                                <p className="font-mono text-[10px] uppercase tracking-widest text-white/40 mb-2">Phase 02</p>
                                <h3 className="text-3xl font-display font-bold uppercase tracking-tight text-white mb-2">Distribution & Scale</h3>
                                <p className="text-sm text-white/50 font-sans">Precision-guided platform architectures and paid amplification.</p>
                            </div>
                            <div className="space-y-4">
                                {distributionStrategy.map((item, i) => (
                                    <button 
                                        key={item.title} 
                                        onClick={() => openModal(distributionStrategy, i)}
                                        className="w-full text-left p-6 flex items-start gap-5 rounded-2xl border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.04] hover:border-purple-400/50 transition-all duration-500 group relative overflow-hidden"
                                    >
                                        <div className="text-2xl mt-1 group-hover:-translate-y-1 transition-transform duration-500 shrink-0">{item.icon}</div>
                                        <div className="pr-10">
                                            <h4 className="text-sm font-display font-bold uppercase tracking-tight text-white mb-1 group-hover:text-purple-400 transition-colors">{item.title}</h4>
                                            <p className="text-xs text-white/40 font-sans leading-relaxed">{item.desc}</p>
                                        </div>
                                        <div className="absolute top-1/2 -translate-y-1/2 right-6 w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
                                        </div>
                                    </button>
                                ))}
                            </div>
                        </motion.div>
                    </div>

                    {/* Phase 3 with Image */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="relative h-[400px] md:h-[600px] rounded-3xl overflow-hidden border border-white/[0.06] group">
                            <div className="absolute inset-0 bg-amber-500/10 mix-blend-overlay z-10 group-hover:bg-transparent transition-all duration-700" />
                            <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200" alt="Intelligence" className="absolute inset-0 w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-1000 grayscale group-hover:grayscale-0" />
                        </motion.div>
                        <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
                            <div className="border-l-2 border-amber-400 pl-6 mb-10">
                                <p className="font-mono text-[10px] uppercase tracking-widest text-white/40 mb-2">Phase 03</p>
                                <h3 className="text-3xl font-display font-bold uppercase tracking-tight text-white mb-2">Intelligence</h3>
                                <p className="text-sm text-white/50 font-sans">Decoding the algorithm using hard data to pivot strategies systematically.</p>
                            </div>
                            <div className="grid grid-cols-1 gap-4">
                                {intelligence.map((item, i) => (
                                    <button 
                                        key={item.title} 
                                        onClick={() => openModal(intelligence, i)}
                                        className="w-full text-left flex items-start sm:items-center gap-6 p-8 rounded-2xl border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.04] hover:border-amber-400/50 transition-all duration-500 group relative"
                                    >
                                        <div className="text-4xl group-hover:rotate-12 transition-transform duration-500 shrink-0 mt-1 sm:mt-0">{item.icon}</div>
                                        <div className="pr-10">
                                            <h4 className="text-lg font-display font-bold uppercase tracking-tight text-white mb-1 group-hover:text-amber-400 transition-colors">{item.title}</h4>
                                            <p className="text-xs text-white/40 font-sans leading-relaxed">{item.desc}</p>
                                        </div>
                                        <div className="absolute bottom-4 right-4 sm:top-1/2 sm:-translate-y-1/2 sm:bottom-auto sm:right-8 w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-white/50 group-hover:text-amber-400 group-hover:border-amber-400/50 transition-all duration-300">
                                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
                                        </div>
                                    </button>
                                ))}
                            </div>
                        </motion.div>
                    </div>
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
            <section className="py-32 px-8 text-center relative z-10 border-t border-white/[0.06]">
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

            {/* Detailed Interactive Modal */}
            <DetailModal 
                isOpen={isModalOpen}
                onClose={closeModal}
                data={currentModalData}
                onNext={handleNext}
                onPrev={handlePrev}
                hasNext={activeArray !== null && selectedItemIndex !== null && selectedItemIndex < activeArray.length - 1}
                hasPrev={activeArray !== null && selectedItemIndex !== null && selectedItemIndex > 0}
            />
        </main>
    );
}
