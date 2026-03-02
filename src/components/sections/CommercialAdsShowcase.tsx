'use client';

import { motion } from 'framer-motion';
import { brandAds } from '@/lib/portfolio-data';
import RevealText from '@/components/ui/RevealText';

export default function CommercialAdsShowcase() {
    return (
        <section className="py-32 relative z-10 border-t border-white/10">
            <div className="max-w-7xl mx-auto px-8">
                {/* Section Header */}
                <div className="mb-20">
                    <p className="font-mono text-xs uppercase tracking-widest text-ccu-accent mb-4">03 / Commercial Advertising</p>
                    <h2 className="text-4xl md:text-7xl font-display font-bold uppercase tracking-tighter text-white leading-none">
                        <RevealText text="Brands We" delay={0.1} className="block text-white/50" />
                        <RevealText text="Elevated." delay={0.2} className="block" />
                    </h2>
                    <p className="text-lg text-white/50 font-sans mt-6 max-w-2xl leading-relaxed">
                        Full-scale advertising campaigns including concept development, production, editing, branding strategy, and distribution planning.
                    </p>
                </div>

                {/* Premium Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {brandAds.map((ad, i) => (
                        <motion.div
                            key={ad.brand}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.05, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                            className="group relative p-6 rounded-2xl border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.05] hover:border-ccu-accent/30 transition-all duration-500 cursor-pointer"
                        >
                            {/* Brand Icon Placeholder */}
                            <div className="w-12 h-12 rounded-xl bg-white/[0.05] border border-white/10 flex items-center justify-center mb-5 group-hover:bg-ccu-accent/10 group-hover:border-ccu-accent/30 transition-all duration-500">
                                <span className="font-display font-bold text-white text-lg">{ad.brand.charAt(0)}</span>
                            </div>

                            <h3 className="text-base font-display font-bold uppercase tracking-tight text-white mb-2 group-hover:text-ccu-accent transition-colors">
                                {ad.brand}
                            </h3>
                            <p className="text-xs text-white/40 font-sans leading-relaxed">
                                {ad.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
