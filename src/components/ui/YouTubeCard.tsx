'use client';

import { motion } from 'framer-motion';
import { getYouTubeThumbnail, type PortfolioProject } from '@/lib/portfolio-data';

interface YouTubeCardProps {
    project: PortfolioProject;
    onClick: () => void;
    index?: number;
}

export default function YouTubeCard({ project, onClick, index = 0 }: YouTubeCardProps) {
    const hasThumbnail = !!project.youtubeId;

    return (
        <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ delay: (index % 3) * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            onClick={hasThumbnail ? onClick : undefined}
            className={`group relative rounded-2xl overflow-hidden ${hasThumbnail ? 'cursor-pointer' : ''}`}
        >
            {/* Thumbnail */}
            <div className="relative aspect-video overflow-hidden bg-[#0a0a0a]">
                {hasThumbnail ? (
                    <img
                        src={getYouTubeThumbnail(project.youtubeId!)}
                        alt={project.title}
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                ) : (
                    <div className="w-full h-full flex items-center justify-center">
                        <span className="font-mono text-xs uppercase tracking-widest text-white/20">Coming Soon</span>
                    </div>
                )}

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

                {/* Category Pill */}
                <div className="absolute top-4 left-4 z-20">
                    <span className="px-3 py-1 rounded-full text-[10px] font-mono uppercase tracking-widest bg-ccu-accent/20 text-ccu-accent border border-ccu-accent/30 backdrop-blur-md">
                        {project.category}
                    </span>
                </div>

                {/* Award Badge */}
                {project.awards && (
                    <div className="absolute top-4 right-4 z-20">
                        <span className="px-3 py-1 rounded-full text-[10px] font-mono uppercase tracking-widest bg-amber-500/20 text-amber-400 border border-amber-500/30 backdrop-blur-md">
                            ★ Award
                        </span>
                    </div>
                )}

                {/* Play Icon */}
                {hasThumbnail && (
                    <div className="absolute inset-0 flex items-center justify-center z-20 opacity-0 group-hover:opacity-100 transition-all duration-500">
                        <motion.div
                            whileHover={{ scale: 1.15 }}
                            className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md border border-white/30 flex items-center justify-center"
                        >
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                                <polygon points="5 3 19 12 5 21 5 3" />
                            </svg>
                        </motion.div>
                    </div>
                )}

                {/* Status Badge */}
                {project.status && (
                    <div className="absolute top-4 right-4 z-20">
                        <span className="px-3 py-1 rounded-full text-[10px] font-mono uppercase tracking-widest bg-blue-500/20 text-blue-400 border border-blue-500/30 backdrop-blur-md">
                            {project.status}
                        </span>
                    </div>
                )}
            </div>

            {/* Info Panel */}
            <div className="p-5 bg-white/[0.03] border border-white/[0.06] border-t-0 rounded-b-2xl">
                <h3 className="text-lg font-display font-bold uppercase tracking-tight text-white mb-1 group-hover:text-ccu-accent transition-colors">
                    {project.title}
                </h3>
                <p className="text-sm text-white/50 font-sans leading-relaxed line-clamp-2 mb-3">
                    {project.description}
                </p>

                {/* Metadata Row */}
                <div className="flex flex-wrap gap-3 font-mono text-[10px] uppercase tracking-widest text-white/30">
                    {project.year && <span>{project.year}</span>}
                    {project.type && <span className="border-l border-white/10 pl-3">{project.type}</span>}
                    {project.impact && <span className="text-ccu-accent border-l border-white/10 pl-3">{project.impact}</span>}
                </div>
            </div>
        </motion.div>
    );
}
