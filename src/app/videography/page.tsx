'use client';

import { useState, useRef } from 'react';
import PremiumNavbar from "@/components/sections/PremiumNavbar";
import AnimatedFooter from "@/components/sections/AnimatedFooter";
import RevealText from "@/components/ui/RevealText";

export default function VideographyPage() {
    const [isPlaying, setIsPlaying] = useState(false);
    const videoRef = useRef<HTMLVideoElement>(null);

    const togglePlay = () => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause();
            } else {
                videoRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    return (
        <main className="bg-ccu-900 min-h-screen pt-32 relative overflow-hidden">
            <PremiumNavbar />

            {/* Ambient Background Glow */}
            <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0">
                <div className="absolute top-1/3 -left-40 w-[600px] h-[600px] bg-ccu-accent/[0.03] rounded-full blur-[200px]" />
                <div className="absolute bottom-1/3 -right-40 w-[500px] h-[500px] bg-purple-500/[0.02] rounded-full blur-[200px]" />
            </div>

            {/* Hero Section */}
            <section className="px-8 max-w-7xl mx-auto mb-20 z-10 relative">
                <p className="font-mono text-[10px] uppercase tracking-widest text-ccu-accent mb-4">Service / 04</p>
                <h1 className="text-5xl md:text-8xl font-display font-extrabold uppercase tracking-tighter text-white mb-6">
                    <RevealText text="Motion" delay={0.1} className="block text-white/50" />
                    <RevealText text="Pictures." delay={0.2} className="block text-ccu-accent" />
                </h1>
                <p className="text-xl text-white/50 max-w-2xl font-sans leading-relaxed mb-8">
                    Motion is our native language. From sweeping 8K drone cinematics to high-retention AI commercials, we operate with feature-film discipline.
                </p>
                <div className="flex flex-wrap gap-3">
                    {['AI Video Creation', 'Commercial Shoots', 'Color Grading', 'VFX', 'Sound Engineering', 'Drone Cinematics'].map((tag) => (
                        <span key={tag} className="px-4 py-2 border border-white/10 rounded-full font-mono text-[10px] uppercase tracking-widest text-white/40">{tag}</span>
                    ))}
                </div>
            </section>

            {/* Featured Showcase: Pioneer Corporation Coimbatore (realme Campaign) */}
            <section className="px-8 max-w-7xl mx-auto mb-32 z-10 relative">
                <div className="border-t border-white/[0.06] pt-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                    
                    {/* Video Player (Left/Center) */}
                    <div className="lg:col-span-8">
                        <div className="mb-4 flex items-center justify-between">
                            <div>
                                <span className="font-mono text-[9px] uppercase tracking-widest text-ccu-accent bg-ccu-accent/10 px-3 py-1 rounded border border-ccu-accent/20">Featured Campaign</span>
                            </div>
                            <span className="font-mono text-[10px] uppercase tracking-widest text-white/40">AI-Powered / 2024</span>
                        </div>

                        {/* Custom Player Container */}
                        <div 
                            onClick={togglePlay}
                            className="relative w-full aspect-video rounded-3xl overflow-hidden bg-black border border-white/[0.08] cursor-pointer group shadow-2xl transition-all duration-700 hover:border-ccu-accent/30 shadow-black/80"
                        >
                            <video
                                ref={videoRef}
                                src="/realme_sample.mp4"
                                loop
                                playsInline
                                className="w-full h-full object-cover"
                                onPause={() => setIsPlaying(false)}
                                onPlay={() => setIsPlaying(true)}
                            />

                            {/* Neon border glow overlay */}
                            <div className="absolute inset-0 border border-ccu-accent/0 group-hover:border-ccu-accent/20 pointer-events-none transition-colors duration-500 rounded-3xl" />

                            {/* Play Overlay (Visible when paused) */}
                            {!isPlaying && (
                                <div className="absolute inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center transition-all duration-500 group-hover:bg-black/30">
                                    <div className="w-20 h-20 rounded-full border-2 border-white flex items-center justify-center text-white bg-black/20 group-hover:scale-110 group-hover:border-ccu-accent group-hover:text-ccu-accent group-hover:bg-ccu-accent/5 transition-all duration-500 shadow-xl">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
                                    </div>
                                </div>
                            )}

                            {/* Hover info strip */}
                            <div className="absolute bottom-6 left-6 right-6 flex justify-between items-center z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                                <span className="font-mono text-[9px] uppercase tracking-widest text-white/60 bg-black/60 px-3 py-1.5 rounded-full border border-white/10 backdrop-blur">
                                    {isPlaying ? 'Click to Pause' : 'Click to Play'}
                                </span>
                                <span className="font-mono text-[9px] uppercase tracking-widest text-ccu-accent bg-black/60 px-3 py-1.5 rounded-full border border-ccu-accent/20 backdrop-blur">
                                    realme_sample.mp4
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Project Info (Right Side) */}
                    <div className="lg:col-span-4 flex flex-col justify-center">
                        <div className="border-l-2 border-ccu-accent pl-6 mb-8">
                            <span className="font-mono text-[9px] uppercase tracking-widest text-white/40 block mb-1">Client Spotlight</span>
                            <h2 className="text-3xl md:text-4xl font-display font-extrabold uppercase tracking-tight text-white mb-2">
                                Pioneer Corporation
                            </h2>
                            <p className="font-mono text-xs uppercase tracking-widest text-ccu-accent">Coimbatore, India</p>
                        </div>

                        <p className="text-base text-white/50 font-sans leading-relaxed mb-8">
                            An ultra-premium AI-generated video commercial campaign designed for the next-generation realme smartphones. Merging cutting-edge neural style transfer, high-retention dynamic pacing, and cinematic edits to create a visually striking commercial.
                        </p>

                        {/* Metadata grid */}
                        <div className="grid grid-cols-2 gap-4 border-t border-white/[0.06] pt-8 mb-8">
                            <div>
                                <span className="font-mono text-[8px] uppercase tracking-widest text-ccu-accent block mb-1">Campaign</span>
                                <span className="text-sm font-sans text-white/70">realme Product Promo</span>
                            </div>
                            <div>
                                <span className="font-mono text-[8px] uppercase tracking-widest text-ccu-accent block mb-1">Asset Reference</span>
                                <span className="text-sm font-sans text-white/70">realme_sample</span>
                            </div>
                            <div>
                                <span className="font-mono text-[8px] uppercase tracking-widest text-ccu-accent block mb-1">Production Tech</span>
                                <span className="text-sm font-sans text-white/70">AI Neural Rendering</span>
                            </div>
                            <div>
                                <span className="font-mono text-[8px] uppercase tracking-widest text-ccu-accent block mb-1">Format</span>
                                <span className="text-sm font-sans text-white/70">Cinematic 4K MP4</span>
                            </div>
                        </div>

                        <div className="flex flex-wrap gap-2">
                            {['Neural Motion', 'Stable Diffusion', 'Framer Pacing', '60 FPS'].map((tech) => (
                                <span key={tech} className="px-3 py-1 rounded bg-white/[0.02] border border-white/[0.06] text-[9px] font-mono uppercase tracking-widest text-white/40">{tech}</span>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="py-20 px-8 max-w-7xl mx-auto text-center border-t border-white/[0.06] relative z-10">
                <p className="text-2xl md:text-3xl font-display font-bold uppercase tracking-tight text-white mb-6">Need an AI-assisted video campaign for your brand?</p>
                <a href="/contact" className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white text-black font-mono text-xs uppercase tracking-widest font-bold hover:bg-ccu-accent transition-colors duration-500">
                    Collaborate with us
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
                </a>
            </section>

            <AnimatedFooter />
        </main>
    );
}
