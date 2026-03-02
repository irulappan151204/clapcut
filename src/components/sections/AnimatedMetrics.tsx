'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

function Counter({ from = 0, to, duration = 2 }: { from?: number; to: number; duration?: number }) {
    const nodeRef = useRef<HTMLSpanElement>(null);
    const inView = useInView(nodeRef, { once: true, margin: '-100px' });
    const [count, setCount] = useState(from);

    useEffect(() => {
        if (inView) {
            let startTime: number | null = null;
            const step = (timestamp: number) => {
                if (!startTime) startTime = timestamp;
                const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);

                // Easing function (easeOutExpo)
                const easeOutExpo = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);

                setCount(Math.floor(from + easeOutExpo * (to - from)));

                if (progress < 1) {
                    window.requestAnimationFrame(step);
                }
            };
            window.requestAnimationFrame(step);
        }
    }, [inView, from, to, duration]);

    return <span ref={nodeRef}>{count}</span>;
}

const metrics = [
    { label: 'Campaigns Delivered', value: 50, suffix: '+' },
    { label: 'Awards Won', value: 6, suffix: '' },
    { label: 'Global Reach', value: 10, suffix: 'M+', isFloat: false },
    { label: 'Brands Elevated', value: 20, suffix: '+' },
];

export default function AnimatedMetrics() {
    return (
        <section className="py-32 bg-ccu-900 text-white relative z-10">
            <div className="max-w-7xl mx-auto px-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-8 divide-x divide-white/10">
                    {metrics.map((metric, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-50px' }}
                            transition={{ duration: 0.8, delay: i * 0.1, ease: 'easeOut' }}
                            className="flex flex-col items-center text-center px-4"
                        >
                            <div className="text-5xl md:text-7xl font-display font-bold text-ccu-accent mb-4 tracking-tighter">
                                {metric.isFloat ? (
                                    <span className="inline-flex items-baseline">
                                        <Counter from={0} to={metric.value * 10} duration={2} />
                                        <span style={{ transform: 'translateX(-1ch) scale(0)', opacity: 0, position: 'absolute' }}>.</span>
                                    </span>
                                ) : (
                                    <Counter from={0} to={metric.value} duration={2} />
                                )}
                                {/* Formatting hack for float - hardcoded for 1.2B */}
                                {metric.isFloat && <span className="absolute -translate-x-[1.2ch]">.</span>}
                                {metric.isFloat ? (
                                    <span className="ml-[0.2ch]">2{metric.suffix}</span>
                                ) : (
                                    <span>{metric.suffix}</span>
                                )}
                            </div>
                            <p className="text-sm md:text-base font-mono uppercase tracking-widest text-white/50">
                                {metric.label}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
