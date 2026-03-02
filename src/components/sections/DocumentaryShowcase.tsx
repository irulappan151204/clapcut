'use client';

import { motion } from 'framer-motion';
import { documentaryProjects } from '@/lib/portfolio-data';
import RevealText from '@/components/ui/RevealText';

export default function DocumentaryShowcase() {
    return (
        <section className="py-32 bg-[#050505] relative z-10 border-t border-white/10">
            <div className="max-w-7xl mx-auto px-8">
                {/* Section Header */}
                <div className="mb-20">
                    <p className="font-mono text-xs uppercase tracking-widest text-ccu-accent mb-4">02 / Documentaries</p>
                    <h2 className="text-4xl md:text-7xl font-display font-bold uppercase tracking-tighter text-white leading-none">
                        <RevealText text="Stories That" delay={0.1} className="block text-white/50" />
                        <RevealText text="Change Worlds." delay={0.2} className="block" />
                    </h2>
                </div>

                {/* Vertical Storytelling */}
                <div className="space-y-16">
                    {documentaryProjects.map((doc, i) => (
                        <motion.div
                            key={doc.id}
                            initial={{ opacity: 0, x: i % 2 === 0 ? -80 : 80 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: '-100px' }}
                            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                            className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
                        >
                            {/* Image Side */}
                            <div className={`relative aspect-video rounded-2xl overflow-hidden bg-[#111] border border-white/[0.06] ${i % 2 !== 0 ? 'md:order-2' : ''}`}>
                                <div className="absolute inset-0 bg-gradient-to-br from-ccu-accent/10 to-transparent" />
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <span className="font-mono text-xs uppercase tracking-widest text-white/20">Documentary Still</span>
                                </div>
                            </div>

                            {/* Text Side */}
                            <div className={`${i % 2 !== 0 ? 'md:order-1 md:text-right' : ''}`}>
                                {doc.awards && (
                                    <span className="inline-block px-3 py-1 rounded-full text-[10px] font-mono uppercase tracking-widest bg-amber-500/20 text-amber-400 border border-amber-500/30 mb-4">
                                        ★ Award Winning
                                    </span>
                                )}
                                <h3 className="text-3xl font-display font-bold uppercase tracking-tight text-white mb-3">
                                    {doc.title}
                                </h3>
                                <p className="text-white/50 font-sans leading-relaxed mb-4">
                                    {doc.description}
                                </p>
                                <p className="font-mono text-[10px] uppercase tracking-widest text-white/30">
                                    {doc.type}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
