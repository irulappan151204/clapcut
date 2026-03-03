'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import RevealText from '../ui/RevealText';
import GlassCard from '../ui/GlassCard';

const projects = [
    {
        title: 'Gabriel India – Two Wheeler Campaign',
        subtitle: 'Anand Group — Automotive Industry',
        description:
            'A high-impact automotive visual production crafted to reflect the engineering excellence and brand legacy of Gabriel India. The campaign focused on performance storytelling, product positioning, and premium brand representation — reinforcing the brand\'s market presence with strong visual direction and production quality.',
        image: '/Two wheeler.jpg',
        director: null,
        cta: {
            label: 'View Project',
            href: 'https://drive.google.com/file/d/1rhkczs8iccwnMGKKRYZFPkLrwb9CUp7r/view?usp=sharing',
        },
        accent: 'from-ccu-accent/20 to-transparent',
        tags: ['Brand Film', 'Product Positioning', 'Automotive'],
    },
    {
        title: 'Deepavali Bonus – Tamil Film',
        subtitle: 'A to Z',
        description:
            'A full-length Tamil film where our team handled the entire production lifecycle from A-to-Z — from conceptualization and direction by Mr. Jeyabal to final release. The film celebrates the emotional essence of Deepavali through compelling storytelling, cultural warmth, and cinematic excellence.',
        image: null,
        director: 'Directed by Mr. Jeyabal',
        cta: {
            label: 'View PDF',
            href: '/DEEPAVALI BONUS-compressed 2.pdf',
        },
        accent: 'from-purple-500/20 to-transparent',
        tags: ['Feature Film', 'End-to-End Production', 'Theatrical Release'],
    },
];

const containerVariants = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.25 },
    },
};

const cardVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
    },
};

export default function BrandsWeElevated() {
    return (
        <section className="py-24 md:py-36 relative z-10 overflow-hidden">
            {/* Decorative glows */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-ccu-accent/[0.04] rounded-full blur-[180px] pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-[500px] h-[300px] bg-purple-500/[0.03] rounded-full blur-[160px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-8 relative z-10">
                {/* Section Header */}
                <div className="mb-16 md:mb-24">
                    <p className="font-mono text-[10px] uppercase tracking-widest text-ccu-accent mb-4">
                        Milestones
                    </p>
                    <h2 className="text-4xl md:text-7xl font-display font-bold uppercase tracking-tighter leading-none">
                        <RevealText text="Our Biggest" delay={0.1} className="block text-white/50" />
                        <RevealText text="Achievements." delay={0.2} className="block text-ccu-accent" />
                    </h2>
                    <p className="mt-6 text-lg text-white/35 font-sans max-w-2xl leading-relaxed">
                        Milestones that define our journey — delivering impact across industries, from leading automotive brands to culturally resonant festive campaigns.
                    </p>
                    <p className="mt-3 text-sm text-white/20 font-sans max-w-2xl leading-relaxed">
                        Each project represents a strategic collaboration built on creativity, precision execution, and measurable success.
                    </p>
                </div>

                {/* Project Cards Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.15 }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10"
                >
                    {projects.map((project) => (
                        <motion.div key={project.title} variants={cardVariants}>
                            <GlassCard className="p-0 overflow-hidden group h-full flex flex-col" hoverEffect={true}>
                                {/* Image Area */}
                                <div className="relative aspect-[16/10] overflow-hidden">
                                    {project.image ? (
                                        <>
                                            <Image
                                                src={project.image}
                                                alt={project.title}
                                                fill
                                                className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                                                sizes="(max-width: 768px) 100vw, 50vw"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                                        </>
                                    ) : (
                                        /* PDF placeholder — cinematic gradient with film-reel motif */
                                        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a] via-[#111] to-[#0a0a0a] flex items-center justify-center">
                                            <div className="relative">
                                                {/* Decorative rings */}
                                                <div className="absolute inset-0 -m-10 border border-white/[0.06] rounded-full animate-pulse" />
                                                <div className="absolute inset-0 -m-20 border border-white/[0.03] rounded-full" />
                                                <div className="absolute inset-0 -m-32 border border-white/[0.015] rounded-full" />
                                                {/* Film icon */}
                                                <div className="w-24 h-28 relative">
                                                    <div className="absolute inset-0 rounded-xl border border-white/10 bg-white/[0.03] backdrop-blur-sm" />
                                                    <div className="absolute top-0 right-0 w-7 h-7 border-b border-l border-white/10 bg-white/[0.05] rounded-bl-xl" />
                                                    <div className="absolute inset-0 flex flex-col items-center justify-center gap-1">
                                                        <svg className="w-6 h-6 text-ccu-accent/60" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                                            <path strokeLinecap="round" strokeLinejoin="round" d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z" />
                                                        </svg>
                                                        <span className="font-mono text-[9px] font-bold tracking-widest text-ccu-accent/70 uppercase">
                                                            Film
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                                        </div>
                                    )}

                                    {/* Accent gradient overlay */}
                                    <div className={`absolute inset-0 bg-gradient-to-t ${project.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                                </div>

                                {/* Card Content */}
                                <div className="p-6 md:p-8 flex flex-col flex-1">
                                    {/* Tags */}
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.tags.map((tag) => (
                                            <span key={tag} className="px-3 py-1 rounded-full border border-white/[0.06] bg-white/[0.02] font-mono text-[8px] uppercase tracking-widest text-white/25">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    <h3 className="text-xl md:text-2xl font-display font-bold uppercase tracking-tight text-white group-hover:text-ccu-accent transition-colors duration-300 mb-1">
                                        {project.title}
                                    </h3>

                                    {project.director && (
                                        <p className="font-mono text-[10px] uppercase tracking-widest text-ccu-accent/60 mb-3">
                                            {project.director}
                                        </p>
                                    )}

                                    <p className="font-mono text-[10px] uppercase tracking-widest text-white/30 mb-4">
                                        {project.subtitle}
                                    </p>

                                    <p className="text-sm text-white/30 font-sans leading-relaxed mb-6 flex-1">
                                        {project.description}
                                    </p>

                                    {/* CTA Button */}
                                    <a
                                        href={project.cta.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-ccu-accent/30 text-ccu-accent font-mono text-[10px] uppercase tracking-widest
                                                   hover:bg-ccu-accent hover:text-black hover:border-ccu-accent
                                                   transition-all duration-300 group/btn whitespace-nowrap self-start"
                                    >
                                        {project.cta.label}
                                        <svg
                                            className="w-3 h-3 transition-transform duration-300 group-hover/btn:translate-x-1"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                        </svg>
                                    </a>
                                </div>
                            </GlassCard>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Closing Statement */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="mt-16 md:mt-24 text-center"
                >
                    <div className="max-w-2xl mx-auto border-t border-white/[0.06] pt-10">
                        <p className="text-base md:text-lg text-white/25 font-sans leading-relaxed italic">
                            &ldquo;These achievements reflect our commitment to building powerful visual experiences that strengthen brand identity and deliver measurable success.&rdquo;
                        </p>
                        <div className="flex flex-wrap items-center justify-center gap-3 mt-8">
                            {['Impact', 'Execution Excellence', 'Creative Direction', 'Successful Delivery', 'Brand Elevation'].map((tag) => (
                                <span key={tag} className="px-4 py-2 rounded-full border border-white/[0.06] bg-white/[0.02] font-mono text-[9px] uppercase tracking-widest text-white/20 hover:border-ccu-accent/20 hover:text-white/40 transition-all duration-500">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
