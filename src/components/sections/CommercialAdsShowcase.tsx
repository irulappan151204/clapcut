'use client';

import { motion } from 'framer-motion';
import { brandAds } from '@/lib/portfolio-data';
import RevealText from '@/components/ui/RevealText';

export default function CommercialAdsShowcase() {
    const gabrielAd = brandAds.find(ad => ad.brand.includes('Gabriel'));
    const otherAds = brandAds.filter(ad => !ad.brand.includes('Gabriel'));

    return (
        <section className="py-32 relative z-10 border-t border-white/[0.06] overflow-hidden">
            {/* Ambient Glow */}
            <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-blue-500/[0.02] rounded-full blur-[200px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-8 relative">
                {/* Section Header — Centered */}
                <div className="text-center mb-20">
                    <p className="font-mono text-[10px] uppercase tracking-widest text-ccu-accent mb-4">03 / Commercial Advertising</p>
                    <h2 className="text-4xl md:text-7xl font-display font-bold uppercase tracking-tighter text-white leading-none mb-4">
                        <RevealText text="Brands We" delay={0.1} className="block text-white/50" />
                        <RevealText text="Elevated." delay={0.2} className="block text-ccu-accent" />
                    </h2>
                    <p className="text-lg text-white/30 font-sans max-w-2xl mx-auto leading-relaxed">
                        Full-scale advertising campaigns including concept development, production, editing, branding strategy, and distribution planning.
                    </p>
                </div>

                {/* ── Featured Client: Gabriel India ── */}
                {gabrielAd && (
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="relative p-10 md:p-14 rounded-2xl border border-ccu-accent/20 bg-gradient-to-br from-ccu-accent/[0.06] to-transparent overflow-hidden group mb-6"
                    >
                        <div className="absolute top-6 right-6 flex items-center gap-2">
                            <span className="px-3 py-1 rounded-full text-[9px] font-mono uppercase tracking-widest bg-ccu-accent/15 text-ccu-accent border border-ccu-accent/30">Prestigious Client</span>
                            <span className="px-3 py-1 rounded-full text-[9px] font-mono uppercase tracking-widest border border-white/10 text-white/30">Automotive</span>
                        </div>
                        <span className="font-mono text-white/[0.03] text-[100px] md:text-[140px] font-bold absolute -top-6 -left-4 select-none leading-none">GI</span>
                        <div className="relative z-10">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-16 h-16 rounded-2xl bg-white/[0.06] border border-white/[0.08] flex items-center justify-center group-hover:bg-ccu-accent/15 group-hover:border-ccu-accent/30 transition-all duration-500">
                                    <span className="font-display font-bold text-ccu-accent text-2xl">G</span>
                                </div>
                                <div>
                                    <h3 className="text-3xl md:text-4xl font-display font-extrabold uppercase tracking-tighter text-white group-hover:text-ccu-accent transition-colors">Gabriel India</h3>
                                    <p className="font-mono text-[10px] uppercase tracking-widest text-white/30">Anand Group — Flagship Company</p>
                                </div>
                            </div>
                            <p className="text-base text-white/50 font-sans leading-relaxed max-w-3xl mb-6">
                                {gabrielAd.description}
                            </p>
                            <div className="flex flex-wrap gap-3">
                                {['Est. 1961', '75% CV Market Share', '500+ Product Models', 'Supplies to TATA, Ashok Leyland, Mahindra', 'Indian Railways Partner'].map((tag) => (
                                    <span key={tag} className="px-3 py-1.5 rounded-full text-[9px] font-mono uppercase tracking-widest border border-white/[0.08] text-white/25 bg-white/[0.02]">{tag}</span>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                )}

                {/* Other Brand Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {otherAds.map((ad, i) => (
                        <motion.div
                            key={ad.brand}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.05, duration: 0.5 }}
                            className="group relative p-6 rounded-2xl border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.04] hover:border-ccu-accent/20 transition-all duration-500"
                        >
                            <div className="w-12 h-12 rounded-xl bg-white/[0.04] border border-white/[0.06] flex items-center justify-center mb-5 group-hover:bg-ccu-accent/10 group-hover:border-ccu-accent/30 transition-all duration-500">
                                <span className="font-display font-bold text-white/60 text-lg group-hover:text-ccu-accent transition-colors">{ad.brand.charAt(0)}</span>
                            </div>
                            <h3 className="text-base font-display font-bold uppercase tracking-tight text-white mb-2 group-hover:text-ccu-accent transition-colors">
                                {ad.brand}
                            </h3>
                            <p className="text-xs text-white/35 font-sans leading-relaxed">
                                {ad.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
