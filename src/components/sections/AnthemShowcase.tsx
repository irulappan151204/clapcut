'use client';

import { useState } from 'react';
import { anthemProjects } from '@/lib/portfolio-data';
import RevealText from '@/components/ui/RevealText';
import YouTubeCard from '@/components/ui/YouTubeCard';
import VideoModal from '@/components/ui/VideoModal';

export default function AnthemShowcase() {
    const [activeVideo, setActiveVideo] = useState<{ youtubeId: string; title: string } | null>(null);

    return (
        <>
            <section className="py-32 relative z-10">
                <div className="max-w-7xl mx-auto px-8">
                    {/* Section Header */}
                    <div className="mb-20">
                        <p className="font-mono text-xs uppercase tracking-widest text-ccu-accent mb-4">01 / Anthems &amp; Albums</p>
                        <h2 className="text-4xl md:text-7xl font-display font-bold uppercase tracking-tighter text-white leading-none">
                            <RevealText text="Voices That Move" delay={0.1} className="block text-white/50" />
                            <RevealText text="a Nation." delay={0.2} className="block" />
                        </h2>
                        <p className="text-lg text-white/50 font-sans mt-6 max-w-2xl leading-relaxed">
                            High-impact cinematic anthem productions combining storytelling, large-scale visuals, orchestration, and emotion-driven narratives that define movements.
                        </p>
                    </div>

                    {/* Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {anthemProjects.map((project, i) => (
                            <YouTubeCard
                                key={project.id}
                                project={project}
                                index={i}
                                onClick={() => project.youtubeId && setActiveVideo({ youtubeId: project.youtubeId, title: project.title })}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* Modal */}
            {activeVideo && (
                <VideoModal
                    isOpen={!!activeVideo}
                    onClose={() => setActiveVideo(null)}
                    youtubeId={activeVideo.youtubeId}
                    title={activeVideo.title}
                />
            )}
        </>
    );
}
