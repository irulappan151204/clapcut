'use client';

import PremiumNavbar from "@/components/sections/PremiumNavbar";
import AnimatedFooter from "@/components/sections/AnimatedFooter";
import RevealText from "@/components/ui/RevealText";

export default function VideographyPage() {
    return (
        <main className="bg-ccu-900 min-h-screen pt-32 relative flex flex-col items-center justify-between">
            <PremiumNavbar />
            <section className="px-8 max-w-7xl mx-auto z-10 relative text-center flex flex-col items-center flex-grow justify-center py-20">
                <h1 className="text-5xl md:text-8xl font-display font-extrabold uppercase tracking-tighter text-white mb-6">
                    <RevealText text="Motion" delay={0.1} className="block text-ccu-accent" />
                    <RevealText text="Pictures." delay={0.2} className="block" />
                </h1>
                <p className="text-xl text-white/60 max-w-2xl font-sans mb-8 leading-relaxed">
                    Motion is our native language. From sweeping 8K commercial drones to intimate brand documentaries, our video production team operates with the discipline of a feature-film crew.
                </p>
                <div className="flex gap-4 mb-24 font-mono text-xs uppercase tracking-widest flex-wrap">
                    <div className="px-4 py-2 border border-white/20 rounded-full text-white/50">4K/8K Production</div>
                    <div className="px-4 py-2 border border-white/20 rounded-full text-white/50">Color Grading</div>
                    <div className="px-4 py-2 border border-white/20 rounded-full text-white/50">VFX & Compositing</div>
                </div>
                <div className="w-full aspect-video glass bg-[#111] rounded-2xl flex items-center justify-center -rotate-1 hover:rotate-0 transition-transform duration-700 cursor-pointer group">
                    <div className="w-20 h-20 rounded-full border-2 border-white flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
                    </div>
                </div>
            </section>
            <AnimatedFooter />
        </main>
    );
}
