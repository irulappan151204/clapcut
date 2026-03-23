'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

export interface TabData {
    id: string;
    label: string;
    content: React.ReactNode;
}

export interface ModalData {
    title: string;
    desc: string;
    icon: string;
    image?: string;
    tabs?: TabData[];
}

interface DetailModalProps {
    isOpen: boolean;
    onClose: () => void;
    data: ModalData | null;
    onNext?: () => void;
    onPrev?: () => void;
    hasNext?: boolean;
    hasPrev?: boolean;
}

export default function DetailModal({ isOpen, onClose, data, onNext, onPrev, hasNext, hasPrev }: DetailModalProps) {
    const [activeTab, setActiveTab] = useState<string>('');

    // Reset tab when data changes
    useEffect(() => {
        if (data?.tabs?.length) {
            setActiveTab(data.tabs[0].id);
        } else {
            setActiveTab('');
        }
    }, [data]);

    // Handle escape key
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape' && isOpen) onClose();
            if (e.key === 'ArrowRight' && isOpen && hasNext && onNext) onNext();
            if (e.key === 'ArrowLeft' && isOpen && hasPrev && onPrev) onPrev();
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [isOpen, onClose, hasNext, hasPrev, onNext, onPrev]);

    if (!data) return null;

    // Determine layout depending on image existence
    const hasImage = !!data.image;

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-12">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.4 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-black/60 backdrop-blur-md cursor-pointer"
                    />

                    {/* Modal Container */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                        className="relative w-full max-w-5xl max-h-[90vh] bg-[#0a0a0a] border border-white/[0.08] rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row shadow-black/50"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Close Button - Absolute */}
                        <button 
                            onClick={onClose}
                            className="absolute top-4 right-4 md:top-6 md:right-6 z-50 w-10 h-10 rounded-full bg-black/50 backdrop-blur-md border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:bg-white/10 transition-all duration-300"
                            aria-label="Close Modal"
                        >
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
                        </button>

                        {/* Optional Image Panel */}
                        {hasImage && (
                            <div className="w-full md:w-2/5 h-64 md:h-auto relative bg-ccu-900 border-b md:border-b-0 md:border-r border-white/[0.06] overflow-hidden shrink-0">
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] to-transparent md:bg-gradient-to-r md:from-transparent md:to-[#0a0a0a] z-10" />
                                <img src={data.image} alt={data.title} className="w-full h-full object-cover" />
                            </div>
                        )}

                        {/* Content Panel */}
                        <div className={`flex flex-col flex-1 h-full max-h-[90vh] ${hasImage ? 'w-full md:w-3/5' : 'w-full'}`}>
                            {/* Header */}
                            <div className="p-8 md:p-12 pb-6 shrink-0 relative">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-16 h-16 rounded-2xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-3xl">
                                        {data.icon}
                                    </div>
                                    <div className="flex-1">
                                        <p className="font-mono text-[10px] uppercase tracking-widest text-ccu-accent mb-2">Detailed View</p>
                                        <h2 className="text-2xl md:text-4xl font-display font-bold uppercase tracking-tight text-white">{data.title}</h2>
                                    </div>
                                </div>
                                
                                {data.tabs && data.tabs.length > 0 && (
                                    <div className="flex flex-wrap gap-2 border-b border-white/[0.06] pb-4">
                                        {data.tabs.map(tab => (
                                            <button
                                                key={tab.id}
                                                onClick={() => setActiveTab(tab.id)}
                                                className={`px-4 py-2 rounded-full font-mono text-[10px] uppercase tracking-widest transition-all duration-300 ${activeTab === tab.id ? 'bg-white text-black font-bold' : 'border border-white/10 text-white/40 hover:text-white hover:border-white/30'}`}
                                            >
                                                {tab.label}
                                            </button>
                                        ))}
                                    </div>
                                )}
                            </div>

                            {/* Scrollable Body */}
                            <div className="flex-1 overflow-y-auto px-8 md:px-12 pb-8 custom-scrollbar">
                                {!data.tabs || data.tabs.length === 0 ? (
                                    <div className="text-white/60 font-sans leading-relaxed text-sm md:text-base">
                                        {data.desc}
                                    </div>
                                ) : (
                                    <AnimatePresence mode="wait">
                                        <motion.div
                                            key={activeTab}
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -10 }}
                                            transition={{ duration: 0.3 }}
                                            className="text-white/60 font-sans leading-relaxed text-sm md:text-base"
                                        >
                                            {data.tabs.find(t => t.id === activeTab)?.content}
                                        </motion.div>
                                    </AnimatePresence>
                                )}
                            </div>

                            {/* Footer Navigation */}
                            {(hasNext || hasPrev) && (
                                <div className="p-6 md:p-8 border-t border-white/[0.06] flex items-center justify-between shrink-0 bg-white/[0.01]">
                                    <button 
                                        onClick={onPrev}
                                        disabled={!hasPrev}
                                        className={`flex items-center gap-3 font-mono text-[10px] uppercase tracking-widest transition-all duration-300 ${!hasPrev ? 'opacity-30 cursor-not-allowed' : 'text-white/50 hover:text-white group'}`}
                                    >
                                        <span className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-colors">
                                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
                                        </span>
                                        Previous
                                    </button>
                                    
                                    <button 
                                        onClick={onNext}
                                        disabled={!hasNext}
                                        className={`flex items-center gap-3 font-mono text-[10px] uppercase tracking-widest transition-all duration-300 ${!hasNext ? 'opacity-30 cursor-not-allowed' : 'text-white/50 hover:text-white group'}`}
                                    >
                                        Next
                                        <span className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-colors">
                                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
                                        </span>
                                    </button>
                                </div>
                            )}
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
