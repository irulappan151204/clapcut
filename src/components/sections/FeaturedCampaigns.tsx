'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import RevealText from '../ui/RevealText';
import GlassCard from '../ui/GlassCard';

const campaigns = [
    {
        title: 'Space Antham',
        category: 'ISRO Tribute Anthem',
        image: 'https://img.youtube.com/vi/sdRSNHfu8dI/maxresdefault.jpg',
    },
    {
        title: 'Say No To Drugs',
        category: 'Social Impact Anthem',
        image: 'https://img.youtube.com/vi/gx4HRjRWT28/maxresdefault.jpg',
    },
    {
        title: 'Veeravanam',
        category: 'Sports Anthem',
        image: 'https://img.youtube.com/vi/GYlpQDrQt2Y/maxresdefault.jpg',
    }
];

export default function FeaturedCampaigns() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start end', 'end start'],
    });

    const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
    const yAlternating = useTransform(scrollYProgress, [0, 1], [-50, 50]);

    return (
        <section ref={containerRef} className="py-40 bg-ccu-900 relative overflow-hidden z-10">
            <div className="max-w-7xl mx-auto px-8 relative z-10">
                <div className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-8">
                    <h2 className="text-5xl md:text-8xl font-display font-bold uppercase tracking-tighter leading-none">
                        <RevealText text="Featured" delay={0.1} className="block text-white/50" />
                        <RevealText text="Campaigns" delay={0.2} className="block text-white" />
                    </h2>
                    <motion.a
                        href="/portfolio"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="text-ccu-accent border-b border-ccu-accent/30 hover:border-ccu-accent transition-colors pb-1 uppercase tracking-widest text-sm font-mono self-start md:self-auto mb-4"
                    >
                        View All Work
                    </motion.a>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {campaigns.map((campaign, i) => (
                        <motion.div
                            key={i}
                            style={{ y: i % 2 === 0 ? y : yAlternating }}
                            className="group cursor-pointer"
                        >
                            <GlassCard className="p-4" hoverEffect={true}>
                                <div className="relative aspect-[4/5] overflow-hidden rounded-xl mb-6">
                                    <motion.div
                                        className="absolute inset-0 bg-cover bg-center"
                                        style={{ backgroundImage: `url(${campaign.image})` }}
                                        whileHover={{ scale: 1.1 }}
                                        transition={{ duration: 0.8, ease: "easeOut" }}
                                    />
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-display font-bold uppercase tracking-tight mb-2 group-hover:text-ccu-accent transition-colors">{campaign.title}</h3>
                                    <p className="text-white/50 font-mono text-xs uppercase tracking-widest">{campaign.category}</p>
                                </div>
                            </GlassCard>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
