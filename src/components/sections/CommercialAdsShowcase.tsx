'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { brandAds } from '@/lib/portfolio-data';
import RevealText from '@/components/ui/RevealText';
import VideoModal from '@/components/ui/VideoModal';

export default function CommercialAdsShowcase() {
    const [activeVideo, setActiveVideo] = useState<{ youtubeId?: string; videoUrl?: string; title: string } | null>(null);

    const gabrielAd = brandAds.find(ad => ad.brand.includes('Gabriel'));
    const pioneerAd = brandAds.find(ad => ad.brand.includes('Pioneer'));
    const otherAds = brandAds.filter(ad => !ad.brand.includes('Gabriel') && !ad.brand.includes('Pioneer'));

    return (
        <>
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

                    {/* ── Featured Clients Row ── */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                        {/* Gabriel India */}
                        {gabrielAd && (
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.7 }}
                                className="relative p-8 md:p-10 rounded-2xl border border-white/[0.06] bg-gradient-to-br from-white/[0.01] to-transparent overflow-hidden group min-h-[420px] flex flex-col justify-between"
                            >
                                <div className="absolute top-6 right-6 flex items-center gap-2 z-10">
                                    <span className="px-3 py-1 rounded-full text-[9px] font-mono uppercase tracking-widest bg-white/[0.05] text-white/60 border border-white/10">Automotive</span>
                                </div>
                                <span className="font-mono text-white/[0.02] text-[120px] font-bold absolute -top-4 -left-4 select-none leading-none pointer-events-none">GI</span>
                                <div className="relative z-10">
                                    <div className="flex items-center gap-4 mb-6">
                                        <div className="w-14 h-14 rounded-xl bg-white/[0.04] border border-white/[0.06] flex items-center justify-center">
                                            <span className="font-display font-bold text-white/70 text-2xl">G</span>
                                        </div>
                                        <div>
                                            <h3 className="text-2xl font-display font-extrabold uppercase tracking-tight text-white">Gabriel India</h3>
                                            <p className="font-mono text-[9px] uppercase tracking-widest text-white/40">Anand Group</p>
                                        </div>
                                    </div>
                                    <p className="text-sm text-white/50 font-sans leading-relaxed mb-6">
                                        {gabrielAd.description}
                                    </p>
                                </div>
                                <div className="flex flex-wrap gap-2 relative z-10">
                                    {['Est. 1961', '75% CV Market Share', 'Supplies to TATA & Mahindra'].map((tag) => (
                                        <span key={tag} className="px-2.5 py-1 rounded-full text-[8px] font-mono uppercase tracking-widest border border-white/[0.08] text-white/30 bg-white/[0.01]">{tag}</span>
                                    ))}
                                </div>
                            </motion.div>
                        )}

                        {/* Pioneer Corporation Coimbatore — AI Video Banner */}
                        {pioneerAd && (
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.7, delay: 0.1 }}
                                className="relative p-8 md:p-10 rounded-2xl border border-ccu-accent/20 bg-gradient-to-br from-ccu-accent/[0.04] to-transparent overflow-hidden group min-h-[420px] flex flex-col justify-between"
                            >
                                <div className="absolute top-6 right-6 flex items-center gap-2 z-10">
                                    <span className="px-3 py-1 rounded-full text-[9px] font-mono uppercase tracking-widest bg-ccu-accent/10 text-ccu-accent border border-ccu-accent/35">AI Video Campaign</span>
                                </div>
                                <span className="font-mono text-ccu-accent/[0.02] text-[120px] font-bold absolute -top-4 -left-4 select-none leading-none pointer-events-none">PC</span>
                                
                                <div className="relative z-10 w-full mb-6">
                                    <div className="flex items-center gap-4 mb-4">
                                        <div className="w-14 h-14 rounded-xl bg-ccu-accent/5 border border-ccu-accent/20 flex items-center justify-center">
                                            <span className="font-display font-bold text-ccu-accent text-2xl">P</span>
                                        </div>
                                        <div>
                                            <h3 className="text-2xl font-display font-extrabold uppercase tracking-tight text-white group-hover:text-ccu-accent transition-colors">Pioneer Corp</h3>
                                            <p className="font-mono text-[9px] uppercase tracking-widest text-white/40">Coimbatore</p>
                                        </div>
                                    </div>

                                    {/* Inline video player */}
                                    <div className="relative w-full aspect-video rounded-xl overflow-hidden border border-white/[0.08] bg-black shadow-lg">
                                        <video
                                            src="/realme_sample.mp4"
                                            controls
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                </div>

                                <div className="relative z-10">
                                    <p className="text-xs text-white/50 font-sans leading-relaxed mb-4">
                                        {pioneerAd.description}
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        {['realme Campaign', 'Neural Motion', 'Stable Diffusion'].map((tag) => (
                                            <span key={tag} className="px-2.5 py-1 rounded-full text-[8px] font-mono uppercase tracking-widest border border-ccu-accent/20 text-ccu-accent/60 bg-ccu-accent/[0.02]">{tag}</span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </div>

                    {/* Other Brand Cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {otherAds.map((ad, i) => {
                            const isClickable = !!(ad.videoUrl || ad.youtubeId);
                            return (
                                <motion.div
                                    key={ad.brand}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.05, duration: 0.5 }}
                                    onClick={() => isClickable && setActiveVideo({ youtubeId: ad.youtubeId, videoUrl: ad.videoUrl, title: ad.brand })}
                                    className={`group relative p-6 rounded-2xl border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-500 ${isClickable ? 'cursor-pointer hover:border-ccu-accent/30' : 'hover:border-white/15'}`}
                                >
                                    <div className="w-12 h-12 rounded-xl bg-white/[0.04] border border-white/[0.06] flex items-center justify-center mb-5 group-hover:bg-ccu-accent/10 group-hover:border-ccu-accent/30 transition-all duration-500">
                                        {isClickable ? (
                                            <span className="text-white/60 group-hover:text-ccu-accent text-lg transition-colors">▶</span>
                                        ) : (
                                            <span className="font-display font-bold text-white/60 text-lg group-hover:text-ccu-accent transition-colors">{ad.brand.charAt(0)}</span>
                                        )}
                                    </div>
                                    <div className="flex items-center justify-between mb-2">
                                        <h3 className="text-base font-display font-bold uppercase tracking-tight text-white group-hover:text-ccu-accent transition-colors">
                                            {ad.brand}
                                        </h3>
                                        {isClickable && (
                                            <span className="font-mono text-[8px] uppercase tracking-widest text-ccu-accent border border-ccu-accent/30 px-2 py-0.5 rounded bg-ccu-accent/5">AI Video</span>
                                        )}
                                    </div>
                                    <p className="text-xs text-white/35 font-sans leading-relaxed">
                                        {ad.description}
                                    </p>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Video Modal */}
            {activeVideo && (
                <VideoModal
                    isOpen={!!activeVideo}
                    onClose={() => setActiveVideo(null)}
                    youtubeId={activeVideo.youtubeId}
                    videoUrl={activeVideo.videoUrl}
                    title={activeVideo.title}
                />
            )}
        </>
    );
}
