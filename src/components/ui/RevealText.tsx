'use client';

import { motion, Variants } from 'framer-motion';
import React from 'react';

interface RevealTextProps {
    text: string;
    className?: string;
    delay?: number;
    as?: React.ElementType;
}

export default function RevealText({
    text,
    className = '',
    delay = 0,
    as: Component = 'span',
}: RevealTextProps) {
    const words = text.split(' ');

    const container: Variants = {
        hidden: { opacity: 0 },
        visible: (i = 1) => ({
            opacity: 1,
            transition: { staggerChildren: 0.05, delayChildren: delay * i },
        }),
    };

    const child: Variants = {
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: 'spring',
                damping: 12,
                stiffness: 100,
            },
        },
        hidden: {
            opacity: 0,
            y: 40,
        },
    };

    return (
        <Component className={className}>
            <motion.div
                variants={container}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-50px' }}
                className="flex flex-wrap"
            >
                {words.map((word, index) => (
                    <motion.span variants={child} key={index} className="mr-2 pb-1 inline-block">
                        {word}
                    </motion.span>
                ))}
            </motion.div>
        </Component>
    );
}
