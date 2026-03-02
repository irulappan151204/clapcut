'use client';

import PremiumNavbar from "@/components/sections/PremiumNavbar";
import AnimatedFooter from "@/components/sections/AnimatedFooter";
import RevealText from "@/components/ui/RevealText";
import GlassCard from "@/components/ui/GlassCard";
import MagneticButton from "@/components/ui/MagneticButton";

export default function ContactPage() {
    return (
        <main className="bg-ccu-900 min-h-screen pt-32">
            <PremiumNavbar />

            <section className="px-8 max-w-7xl mx-auto mb-20 z-10 relative">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                    <div>
                        <p className="font-mono text-[10px] uppercase tracking-widest text-ccu-accent mb-4">Get in Touch</p>
                        <h1 className="text-5xl md:text-8xl font-display font-extrabold uppercase tracking-tighter text-white mb-6">
                            <RevealText text="Start" delay={0.1} className="block text-white/50" />
                            <RevealText text="Here." delay={0.2} className="block text-ccu-accent" />
                        </h1>
                        <p className="text-xl text-white/50 font-sans mb-12 max-w-lg leading-relaxed">
                            Ready to elevate your brand to a cinematic scale? Reach out. Our team of visionaries, developers, and filmmakers is standing by to bring your narrative to life.
                        </p>

                        <div className="space-y-10 font-mono text-sm tracking-widest uppercase">
                            <div>
                                <p className="text-ccu-accent font-bold mb-4">Direct Inquiries</p>
                                <div className="space-y-2">
                                    <p className="text-white/40">Email: <a href="mailto:clapcutuniverse@gmail.com" className="text-white hover:text-ccu-accent transition-colors">clapcutuniverse@gmail.com</a></p>
                                    <p className="text-white/40">Phone: <a href="tel:+917708453772" className="text-white hover:text-ccu-accent transition-colors">+91 7708453772</a></p>
                                </div>
                            </div>

                            <div className="border-t border-white/10 pt-8">
                                <p className="text-ccu-accent font-bold mb-4">Office Address</p>
                                <p className="text-white leading-loose normal-case">
                                    2nd Floor, 3/5B ABHI Complex<br />
                                    QMIS, Kochadai<br />
                                    Madurai, Tamil Nadu 625019<br />
                                    <span className="text-white/40">(Next to QMIS School)</span>
                                </p>
                            </div>

                            <div className="border-t border-white/10 pt-8">
                                <p className="text-ccu-accent font-bold mb-4">Social Network</p>
                                <div className="flex gap-6">
                                    <a href="#" className="text-white hover:text-ccu-accent transition-colors underline underline-offset-4 decoration-white/30">Instagram</a>
                                    <a href="#" className="text-white hover:text-ccu-accent transition-colors underline underline-offset-4 decoration-white/30">YouTube</a>
                                    <a href="#" className="text-white hover:text-ccu-accent transition-colors underline underline-offset-4 decoration-white/30">LinkedIn</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <GlassCard hoverEffect={false} className="p-8 md:p-12">
                            <form className="space-y-8 flex flex-col">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="flex flex-col gap-2">
                                        <label className="font-mono text-xs uppercase tracking-widest text-white/50">Name</label>
                                        <input type="text" className="bg-transparent border-b border-white/20 focus:border-ccu-accent outline-none py-2 text-white font-sans transition-colors" placeholder="Your Name" />
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <label className="font-mono text-xs uppercase tracking-widest text-white/50">Email</label>
                                        <input type="email" className="bg-transparent border-b border-white/20 focus:border-ccu-accent outline-none py-2 text-white font-sans transition-colors" placeholder="you@example.com" />
                                    </div>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label className="font-mono text-xs uppercase tracking-widest text-white/50">Phone</label>
                                    <input type="tel" className="bg-transparent border-b border-white/20 focus:border-ccu-accent outline-none py-2 text-white font-sans transition-colors" placeholder="+91 XXXXX XXXXX" />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label className="font-mono text-xs uppercase tracking-widest text-white/50">Service</label>
                                    <select className="bg-ccu-900 border-b border-white/20 focus:border-ccu-accent outline-none py-2 text-white font-sans transition-colors appearance-none">
                                        <option>Film &amp; Campaigns</option>
                                        <option>Web &amp; App Development</option>
                                        <option>Photography</option>
                                        <option>Videography</option>
                                        <option>Ads &amp; Scripts</option>
                                        <option>Event Management</option>
                                        <option>Other</option>
                                    </select>
                                </div>
                                <div className="flex flex-col gap-2 flex-grow">
                                    <label className="font-mono text-xs uppercase tracking-widest text-white/50">Project Details</label>
                                    <textarea className="bg-transparent border-b border-white/20 focus:border-ccu-accent outline-none py-2 text-white font-sans transition-colors h-32 resize-none" placeholder="Tell us about your vision..." />
                                </div>

                                <MagneticButton className="self-end mt-4">
                                    <button type="button" className="bg-white text-black px-8 py-4 rounded-full font-mono text-xs uppercase tracking-widest font-bold hover:bg-ccu-accent transition-colors">
                                        Submit Inquiry
                                    </button>
                                </MagneticButton>
                            </form>
                        </GlassCard>
                    </div>
                </div>
            </section>

            {/* Google Maps */}
            <section className="px-8 max-w-7xl mx-auto mb-32 z-10 relative">
                <p className="font-mono text-[10px] uppercase tracking-widest text-ccu-accent mb-6">Find Us</p>
                <div className="rounded-2xl overflow-hidden border border-white/[0.06] aspect-[16/7]">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.8!2d78.0520!3d9.9450!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sKochadai%2C%20Madurai%2C%20Tamil%20Nadu%20625019!5e0!3m2!1sen!2sin!4v1"
                        width="100%"
                        height="100%"
                        style={{ border: 0, filter: 'invert(0.9) hue-rotate(180deg) brightness(0.6) contrast(1.2)' }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Clap Cut Universe Office - Kochadai, Madurai"
                    />
                </div>
                <div className="mt-4 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                    <p className="text-sm text-white/40 font-sans">2nd Floor, 3/5B ABHI Complex, QMIS, Kochadai, Madurai 625019</p>
                    <a
                        href="https://www.google.com/maps/search/3%2F5B+ABHI+complex+QMIS+Kochadai+Madurai+625019"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-mono text-[10px] uppercase tracking-widest text-ccu-accent hover:text-white transition-colors flex items-center gap-2"
                    >
                        Open in Google Maps
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15,3 21,3 21,9" /><line x1="10" y1="14" x2="21" y2="3" /></svg>
                    </a>
                </div>
            </section>

            <AnimatedFooter />
        </main >
    );
}
