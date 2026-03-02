import { Metadata } from 'next';
import PremiumNavbar from "@/components/sections/PremiumNavbar";
import AnimatedFooter from "@/components/sections/AnimatedFooter";
import RevealText from "@/components/ui/RevealText";
import GlassCard from "@/components/ui/GlassCard";

export const metadata: Metadata = {
    title: 'About | Clap Cut Universe',
    description: 'Clap Cut Universe is an ecosystem of creators, visionaries, and technologists. Learn about our philosophy and the legacy of our founder, J. Jeyabal.',
};

export default function AboutPage() {
    return (
        <main className="bg-ccu-900 min-h-screen pt-32">
            <PremiumNavbar />

            {/* Hero */}
            <section className="relative min-h-[60vh] flex items-center px-8 z-10 max-w-7xl mx-auto mb-16">
                <div className="w-full md:w-2/3">
                    <p className="font-mono text-[10px] uppercase tracking-widest text-ccu-accent mb-4">About Us</p>
                    <h1 className="text-5xl md:text-8xl font-display font-extrabold uppercase tracking-tighter mb-8 text-white">
                        <RevealText text="We narrate" delay={0.1} className="block text-ccu-accent" />
                        <RevealText text="the universe." delay={0.3} className="block" />
                    </h1>
                    <p className="text-xl md:text-2xl font-sans text-white/60 leading-relaxed max-w-3xl mb-8">
                        Clap Cut Universe is not just an agency. We are an ecosystem of creators, visionaries, and technologists. Rooted in cinematic language, we build premium digital experiences, blockbuster campaigns, and scalable applications.
                    </p>
                    <div className="flex flex-wrap gap-3">
                        <div className="px-5 py-2.5 border border-white/10 rounded-full font-mono text-[10px] uppercase tracking-widest text-white/60 backdrop-blur-md">Founded by J. Jeyabal</div>
                        <div className="px-5 py-2.5 border border-ccu-accent/30 rounded-full font-mono text-[10px] uppercase tracking-widest text-ccu-accent backdrop-blur-md">Madurai, India</div>
                        <div className="px-5 py-2.5 border border-white/10 rounded-full font-mono text-[10px] uppercase tracking-widest text-white/60 backdrop-blur-md">Est. 2024</div>
                    </div>
                </div>
            </section>

            {/* Philosophy */}
            <section className="py-24 px-8 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center border-t border-white/[0.06]">
                <div>
                    <p className="font-mono text-[10px] uppercase tracking-widest text-ccu-accent mb-4">Our Philosophy</p>
                    <h2 className="text-4xl font-display font-bold uppercase mb-6 text-white tracking-tight">
                        No Basic <span className="text-ccu-accent">Layouts.</span>
                    </h2>
                    <div className="space-y-6">
                        <p className="text-white/50 font-sans leading-relaxed text-lg">
                            We believe that every brand has a blockbuster story waiting to be told. Through strict design tokens, fluid motion mechanics, and uncompromising technical scale, we bring these narratives to life.
                        </p>
                        <p className="text-white/50 font-sans leading-relaxed text-lg">
                            We execute with the precision of an Awwwards-winning studio and the narrative depth of Tamil cinema&apos;s greatest filmmakers. If it doesn&apos;t move the audience, it doesn&apos;t ship.
                        </p>
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <GlassCard hoverEffect={true} className="p-8 aspect-square flex flex-col justify-end relative overflow-hidden group">
                        <div className="absolute inset-0 bg-gradient-to-br from-ccu-accent/10 to-transparent" />
                        <h3 className="relative z-10 text-xl font-display font-bold text-white uppercase tracking-widest">50+</h3>
                        <p className="relative z-10 font-mono text-[10px] uppercase tracking-widest text-white/40 mt-1">Campaigns</p>
                    </GlassCard>
                    <GlassCard hoverEffect={true} className="p-8 aspect-square flex flex-col justify-end translate-y-8 relative overflow-hidden group">
                        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent" />
                        <h3 className="relative z-10 text-xl font-display font-bold text-white uppercase tracking-widest">20+</h3>
                        <p className="relative z-10 font-mono text-[10px] uppercase tracking-widest text-white/40 mt-1">Brands Served</p>
                    </GlassCard>
                </div>
            </section>

            {/* Core Pillars */}
            <section className="py-32 bg-[#030303] relative z-10 border-t border-white/[0.06]">
                <div className="max-w-7xl mx-auto px-8">
                    <p className="font-mono text-[10px] uppercase tracking-widest text-ccu-accent mb-4 text-center">What Drives Us</p>
                    <h2 className="text-4xl md:text-5xl font-display font-bold uppercase tracking-tighter text-white mb-20 text-center">Core Pillars</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            { icon: '🎬', title: 'Cinematic Storytelling', desc: 'Infusing the emotion, pacing, and visual grandeur of cinema into every corporate campaign and digital interface.' },
                            { icon: '⚡', title: 'Technical Supremacy', desc: 'Leveraging Next.js, Framer Motion, and WebGL to build ultra-fast, Lighthouse-optimized digital platforms.' },
                            { icon: '💎', title: 'Uncompromising Quality', desc: 'A relentless commitment to pixel perfection, resulting in a premium output that elevates brand equity.' },
                        ].map((pillar) => (
                            <div key={pillar.title} className="p-8 border border-white/[0.06] rounded-2xl bg-white/[0.02] hover:border-ccu-accent/30 hover:bg-white/[0.04] transition-all duration-500 group">
                                <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-500">{pillar.icon}</div>
                                <h3 className="text-xl font-display font-bold uppercase tracking-widest text-white mb-4 group-hover:text-ccu-accent transition-colors">{pillar.title}</h3>
                                <p className="text-sm text-white/40 font-sans leading-relaxed">{pillar.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="py-32 px-8 max-w-7xl mx-auto border-t border-white/[0.06] relative z-10">
                <p className="font-mono text-[10px] uppercase tracking-widest text-ccu-accent mb-4">Why Choose Us</p>
                <h2 className="text-4xl md:text-5xl font-display font-bold uppercase tracking-tighter text-white mb-16">The CCU Difference</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {[
                        { num: '01', title: 'End-to-End Production', desc: 'From scriptwriting to post-production, from UI wireframes to deployed web apps — we handle every stage in-house.' },
                        { num: '02', title: 'Government-Grade Trust', desc: 'Collaborated with high-ranking Tamil Nadu officials for official campaigns and state-level events.' },
                        { num: '03', title: 'Cultural Depth', desc: 'Rooted in Tamil heritage with a global outlook. Our campaigns resonate locally and scale internationally.' },
                        { num: '04', title: 'Technology-First', desc: 'Every project is built on modern tech stacks: Next.js 14, React, Framer Motion, GSAP — no shortcuts.' },
                    ].map((item) => (
                        <div key={item.num} className="flex gap-6 group">
                            <span className="font-mono text-ccu-accent text-2xl font-bold group-hover:text-white transition-colors">{item.num}</span>
                            <div>
                                <h3 className="text-xl font-display font-bold uppercase tracking-tight text-white mb-2 group-hover:text-ccu-accent transition-colors">{item.title}</h3>
                                <p className="text-sm text-white/40 font-sans leading-relaxed">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <AnimatedFooter />
        </main>
    );
}
