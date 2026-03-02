'use client';

import PremiumNavbar from "@/components/sections/PremiumNavbar";
import AnimatedFooter from "@/components/sections/AnimatedFooter";
import RevealText from "@/components/ui/RevealText";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const techStack = [
    { name: 'Next.js 14', desc: 'App Router, Server Components, and edge-first architecture.' },
    { name: 'React 18', desc: 'Concurrent rendering, Suspense boundaries, and streaming SSR.' },
    { name: 'TypeScript', desc: 'Strict mode, full type safety across every interface and API.' },
    { name: 'Framer Motion', desc: 'Declarative animations with spring physics and gesture support.' },
    { name: 'GSAP ScrollTrigger', desc: 'Scroll-driven cinematic transitions and parallax storytelling.' },
    { name: 'TailwindCSS', desc: 'Custom design tokens, utility-first CSS with zero runtime cost.' },
];

const projects = [
    { title: 'Clap Cut Universe', type: 'Corporate Website', tech: 'Next.js 14 · Framer Motion · GSAP', desc: 'Ultra-premium cinematic portfolio with scroll-driven transitions, magnetic buttons, and 60fps motion.' },
    { title: 'Queen Mira School', type: 'Educational Platform', tech: 'React · Node.js · MongoDB', desc: 'Complete school management system with student portals, fee management, and parent communication.' },
    { title: 'Rafithub Fitness', type: 'Web Application', tech: 'Next.js · Prisma · PostgreSQL', desc: 'Full-featured gym management platform with membership tracking, workout planning, and analytics.' },
    { title: 'Brand Campaign Dashboards', type: 'Analytics Platform', tech: 'React · D3.js · REST APIs', desc: 'Real-time campaign performance dashboards for tracking ROI, engagement metrics, and conversion funnels.' },
];

const process = [
    { num: '01', title: 'Discovery & Architecture', desc: 'Deep dive into requirements, technology audit, and system architecture design. We define the entire technical roadmap.' },
    { num: '02', title: 'UI/UX Design', desc: 'Awwwards-level mockups with micro-interactions, dark theme systems, and responsive breakpoint strategies.' },
    { num: '03', title: 'Development Sprint', desc: 'Agile sprints with CI/CD pipelines, code reviews, and Lighthouse optimization at every merge.' },
    { num: '04', title: 'Testing & Deployment', desc: 'End-to-end testing, edge deployment, CDN configuration, and post-launch monitoring.' },
];

export default function WebAppDevelopmentPage() {
    const container = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({ target: container, offset: ['start start', 'end end'] });
    const codeY = useTransform(scrollYProgress, [0, 1], [0, -150]);

    return (
        <main ref={container} className="bg-ccu-900 min-h-screen pt-32 relative">
            <PremiumNavbar />

            {/* Hero */}
            <section className="px-8 max-w-7xl mx-auto mb-16 z-10 relative">
                <p className="font-mono text-[10px] uppercase tracking-widest text-ccu-accent mb-4">Service / 02</p>
                <h1 className="text-5xl md:text-8xl font-display font-extrabold uppercase tracking-tighter text-white mb-6">
                    <RevealText text="Web & App" delay={0.1} className="block text-white/50" />
                    <RevealText text="Engineering." delay={0.2} className="block text-ccu-accent" />
                </h1>
                <p className="text-xl text-white/50 max-w-2xl font-sans leading-relaxed mb-8">
                    We don&apos;t build websites — we engineer high-performance digital ecosystems. Lighthouse 95+, Awwwards-level UI, and scroll-driven cinematic interfaces.
                </p>
                <div className="flex flex-wrap gap-3 mb-16">
                    {['Next.js 14', 'React', 'TypeScript', 'Framer Motion', 'GSAP', 'Lighthouse 95+'].map((tag) => (
                        <span key={tag} className="px-4 py-2 border border-white/10 rounded-full font-mono text-[10px] uppercase tracking-widest text-white/40">{tag}</span>
                    ))}
                </div>
            </section>

            {/* Tech Stack */}
            <section className="px-8 max-w-7xl mx-auto mb-24 z-10 relative">
                <p className="font-mono text-[10px] uppercase tracking-widest text-ccu-accent mb-8">Technology Stack</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {techStack.map((tech, i) => (
                        <motion.div
                            key={tech.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.05, duration: 0.5 }}
                            className="p-6 rounded-xl border border-white/[0.06] bg-white/[0.02] hover:border-ccu-accent/30 transition-all duration-500 group"
                        >
                            <h3 className="text-base font-display font-bold uppercase tracking-tight text-white mb-1 group-hover:text-ccu-accent transition-colors">{tech.name}</h3>
                            <p className="text-xs text-white/30 font-sans">{tech.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Code Block + Process */}
            <section className="py-24 bg-[#030303] border-t border-white/[0.06] relative z-10">
                <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {/* Process */}
                    <div>
                        <p className="font-mono text-[10px] uppercase tracking-widest text-ccu-accent mb-4">Our Process</p>
                        <h2 className="text-3xl md:text-4xl font-display font-bold uppercase tracking-tighter text-white mb-12">How We Build</h2>
                        <div className="space-y-8">
                            {process.map((step) => (
                                <div key={step.num} className="flex gap-6 group">
                                    <span className="font-mono text-ccu-accent/50 text-lg font-bold group-hover:text-ccu-accent transition-colors shrink-0 mt-0.5">{step.num}</span>
                                    <div>
                                        <h3 className="text-lg font-display font-bold uppercase tracking-tight text-white mb-1 group-hover:text-ccu-accent transition-colors">{step.title}</h3>
                                        <p className="text-xs text-white/35 font-sans leading-relaxed">{step.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Floating Code */}
                    <div className="relative rounded-2xl overflow-hidden border border-white/[0.06] bg-[#0a0a0a] p-8">
                        <div className="absolute inset-0 bg-gradient-to-b from-ccu-accent/[0.03] to-transparent pointer-events-none" />
                        <div className="flex items-center gap-2 mb-6">
                            <div className="w-3 h-3 rounded-full bg-white/10" />
                            <div className="w-3 h-3 rounded-full bg-white/10" />
                            <div className="w-3 h-3 rounded-full bg-white/10" />
                            <span className="ml-3 font-mono text-[10px] text-white/20">system.ts</span>
                        </div>
                        <motion.pre style={{ y: codeY }} className="font-mono text-sm text-white/50 overflow-hidden break-words whitespace-pre-wrap">
                            <code dangerouslySetInnerHTML={{
                                __html: `<span style="color:rgb(204,255,0)">import</span> { Scalability } <span style="color:rgb(204,255,0)">from</span> '@ccu/core';

<span style="color:rgb(204,255,0)">export class</span> CinematicApp {
  <span style="color:rgb(204,255,0)">constructor</span>(private ctx: AppContext) {
    this.initMotionEngine();
  }

  private initMotionEngine() {
    Engine.setFPS(60);
    Engine.enableSmoothScroll({ lerp: 0.1 });
    
    console.log('Awwwards mode: ON');
  }

  <span style="color:rgb(204,255,0)">async</span> deploy() {
    <span style="color:rgb(204,255,0)">await</span> this.ctx.build({
      target: 'edge-network',
      optimization: 'maximum',
      lighthouse: '95+'
    });
  }
}` }} />
                        </motion.pre>
                    </div>
                </div>
            </section>

            {/* Projects */}
            <section className="py-24 border-t border-white/[0.06] relative z-10">
                <div className="max-w-7xl mx-auto px-8">
                    <p className="font-mono text-[10px] uppercase tracking-widest text-ccu-accent mb-4">Portfolio</p>
                    <h2 className="text-3xl md:text-5xl font-display font-bold uppercase tracking-tighter text-white mb-12">Built by CCU</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {projects.map((project, i) => (
                            <motion.div
                                key={project.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.05, duration: 0.5 }}
                                className="p-8 rounded-2xl border border-white/[0.06] bg-white/[0.02] hover:border-white/10 transition-all duration-500 group"
                            >
                                <span className="px-3 py-1 rounded-full text-[9px] font-mono uppercase tracking-widest border border-white/10 text-white/30 mb-4 inline-block">{project.type}</span>
                                <h3 className="text-xl font-display font-bold uppercase tracking-tight text-white mb-2 group-hover:text-ccu-accent transition-colors">{project.title}</h3>
                                <p className="text-sm text-white/35 font-sans mb-3">{project.desc}</p>
                                <p className="font-mono text-[10px] uppercase tracking-widest text-white/20">{project.tech}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 px-8 max-w-7xl mx-auto text-center border-t border-white/[0.06] relative z-10">
                <p className="text-2xl md:text-3xl font-display font-bold uppercase tracking-tight text-white mb-6">Need a high-performance web application?</p>
                <Link href="/contact" className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white text-black font-mono text-xs uppercase tracking-widest font-bold hover:bg-ccu-accent transition-colors duration-500">
                    Discuss Your Project
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
                </Link>
            </section>

            <AnimatedFooter />
        </main>
    );
}
