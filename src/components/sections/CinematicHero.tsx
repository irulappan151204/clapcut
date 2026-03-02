'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';
import RevealText from '../ui/RevealText';
import MagneticButton from '../ui/MagneticButton';

export default function CinematicHero() {
    const container = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start start', 'end start'],
    });

    const lgScale = useTransform(scrollYProgress, [0, 1], [1, 1.3]);
    const textY = useTransform(scrollYProgress, [0, 1], [0, 250]);
    const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
    const badgeY = useTransform(scrollYProgress, [0, 1], [0, 100]);

    return (
        <section ref={container} className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-ccu-900">

            {/* Dynamic Background */}
            <motion.div style={{ scale: lgScale }} className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/[0.03] via-ccu-900 to-ccu-900" />
                <div className="absolute top-1/3 left-1/4 w-[60vw] h-[60vw] bg-ccu-accent/[0.06] rounded-full blur-[150px] mix-blend-screen" />
                <div className="absolute bottom-1/4 right-1/4 w-[30vw] h-[30vw] bg-purple-500/[0.04] rounded-full blur-[100px]" />
            </motion.div>

            {/* Grid Pattern Overlay */}
            <div className="absolute inset-0 z-[1] opacity-[0.015]" style={{
                backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
                backgroundSize: '60px 60px'
            }} />

            {/* Main Content */}
            <motion.div
                style={{ y: textY, opacity }}
                className="relative z-10 text-center max-w-6xl px-4 flex flex-col items-center"
            >
                {/* Top Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    className="flex items-center gap-3 mb-8"
                >
                    <div className="w-2 h-2 rounded-full bg-ccu-accent animate-pulse" />
                    <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-white/40">
                        Premium Digital Agency &amp; Production House
                    </span>
                </motion.div>

                {/* Giant Title */}
                <h1 className="select-none flex flex-col items-center">
                    <span className="text-[14vw] lg:text-[180px] font-display font-extrabold uppercase leading-[0.85] tracking-tighter block">
                        <RevealText text="Clap Cut" delay={0.4} className="block text-white" />
                        <RevealText text="Universe" delay={0.6} className="block text-white/80" />
                    </span>
                </h1>

                {/* Subtitle */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2, duration: 0.8 }}
                    className="text-lg md:text-xl text-white/40 font-sans max-w-xl mt-8 leading-relaxed"
                >
                    Where cinematic storytelling meets elite digital engineering. Founded by J. Jeyabal.
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.5, duration: 0.8 }}
                    className="flex flex-wrap items-center gap-4 mt-10"
                >
                    <MagneticButton>
                        <Link
                            href="/portfolio"
                            className="px-8 py-4 rounded-full bg-white text-black font-mono text-xs uppercase tracking-widest font-bold hover:bg-ccu-accent transition-colors duration-500"
                        >
                            View Our Work
                        </Link>
                    </MagneticButton>
                    <MagneticButton>
                        <Link
                            href="/contact"
                            className="px-8 py-4 rounded-full border border-white/20 text-white font-mono text-xs uppercase tracking-widest hover:border-white/50 transition-colors duration-500"
                        >
                            Start a Project
                        </Link>
                    </MagneticButton>
                </motion.div>
            </motion.div>

            {/* Side Badges */}
            <motion.div
                style={{ y: badgeY }}
                className="absolute left-8 bottom-1/3 z-10 hidden xl:block"
            >
                <div className="flex flex-col gap-4 font-mono text-[10px] uppercase tracking-widest text-white/20">
                    <span>Film &amp; Campaigns</span>
                    <span>Web Engineering</span>
                    <span>Brand Strategy</span>
                </div>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
                className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 1 }}
            >
                <span className="text-[10px] uppercase tracking-widest text-white/30 font-mono mb-4">Scroll</span>
                <div className="w-[1px] h-10 bg-white/10 overflow-hidden rounded-full">
                    <motion.div
                        className="w-full h-full bg-ccu-accent origin-top"
                        animate={{ y: ['-100%', '100%'] }}
                        transition={{ repeat: Infinity, duration: 1.5, ease: 'circInOut' }}
                    />
                </div>
            </motion.div>
        </section>
    );
}
