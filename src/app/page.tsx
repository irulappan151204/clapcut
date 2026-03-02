import { Metadata } from 'next';
import PremiumNavbar from "@/components/sections/PremiumNavbar";
import CinematicHero from "@/components/sections/CinematicHero";
import AnimatedMetrics from "@/components/sections/AnimatedMetrics";
import FeaturedCampaigns from "@/components/sections/FeaturedCampaigns";
import AnimatedFooter from "@/components/sections/AnimatedFooter";
import RevealText from "@/components/ui/RevealText";
import Link from "next/link";

export const metadata: Metadata = {
  title: 'Clap Cut Universe | Ultra Premium Digital Agency & Production House',
  description: 'Clap Cut Universe is an Awwwards-level digital powerhouse offering cinematic film campaigns, high-performance web development, photography, and scriptwriting. Founded by J. Jeyabal.',
  openGraph: {
    title: 'Clap Cut Universe | The Cinematic Agency',
    description: 'We build digital universes. 50+ campaigns, 10M+ reach, award-winning productions.',
    type: 'website',
  }
};

const services = [
  { num: '01', icon: '🎬', title: 'Film & Campaigns', desc: 'Blockbuster storytelling for the modern brand. Tamil cinema aesthetics meet global-scale digital campaigns. From anthems to documentaries.', href: '/film-campaigns', accent: 'from-ccu-accent/20 to-ccu-accent/[0.02]' },
  { num: '02', icon: '💻', title: 'Web & App Engineering', desc: 'Awwwards-level digital experiences. Next.js 14, Framer Motion, GSAP, and Lighthouse 95+ performance out of the box.', href: '/web-app-development', accent: 'from-blue-500/15 to-blue-500/[0.02]' },
  { num: '03', icon: '📸', title: 'Photography', desc: 'Cinematic stills, commercial shoots, and luxury brand photography. Every frame is a composed narrative.', href: '/photography', accent: 'from-purple-500/15 to-purple-500/[0.02]' },
  { num: '04', icon: '🎥', title: 'Videography', desc: 'From sweeping 8K drone cinematics to intimate brand documentaries. Feature-film discipline on every shoot.', href: '/videography', accent: 'from-amber-500/15 to-amber-500/[0.02]' },
  { num: '05', icon: '✍️', title: 'Ads & Scripts', desc: 'High-retention screenplays, provocative ad copy, and pitch-perfect narratives that refuse to be ignored.', href: '/ads-scripts', accent: 'from-rose-500/15 to-rose-500/[0.02]' },
  { num: '06', icon: '🎪', title: 'Event Management', desc: 'Large-scale cultural events, government functions, elite weddings, and brand activations at any scale.', href: '/contact', accent: 'from-emerald-500/15 to-emerald-500/[0.02]' },
];

const whyChoose = [
  { icon: '🎬', title: 'Cinematic DNA', desc: 'Every frame art-directed with the precision of a feature film. 60fps luxury experiences that move audiences.' },
  { icon: '⚡', title: 'Technical Supremacy', desc: 'Next.js 14, Framer Motion, GSAP, WebGL. We build at the bleeding edge of web technology.' },
  { icon: '🏆', title: 'Award-Winning', desc: '6+ awards for documentaries, social impact campaigns, and cultural anthems that define generations.' },
  { icon: '🏛️', title: 'Government Trust', desc: 'Collaborated with high-ranking Tamil Nadu officials for official campaigns and state-level events.' },
  { icon: '🌍', title: 'Global Reach', desc: '500M+ total campaign reach across YouTube, Instagram, and broadcast television networks.' },
  { icon: '🤝', title: 'End-to-End', desc: 'From scriptwriting to post-production, from UI wireframes to deployed web apps — everything in-house.' },
];

const recentProjects = [
  { title: 'Deepavali Bonus', type: 'Tamil Feature Film', year: '2024', category: 'Film', featured: true, desc: 'Tamil drama feature film directed by J. Jeyabal, starring Vikranth & Riythvika. Produced by Sri Ankali Parameswari Productions.' },
  { title: 'Space Antham', type: 'ISRO Scientist Tribute', year: '2024', category: 'Anthem', featured: true, desc: 'A cinematic tribute to Indian space scientists and innovation excellence. Reached 2M+ views across platforms.' },
  { title: 'Say No To Drugs', type: 'Anti-Drug Campaign', year: '2024', category: 'Social Impact', featured: false, desc: 'Government-backed public awareness musical campaign addressing drug prevention among youth in Tamil Nadu.' },
  { title: 'Veeravanam', type: 'Sports Anthem', year: '2024', category: 'Anthem', featured: false, desc: 'High-energy sports anthem for youth athletics.' },
  { title: 'Student Anthem', type: 'Youth Motivation', year: '2023', category: 'Education', featured: false, desc: 'Empowering students with vision and ambition.' },
  { title: 'Queen Mira School', type: 'Educational Platform', year: '2022', category: 'Web Dev', featured: false, desc: 'Full-stack school management platform.' },
];

export default function Home() {
  return (
    <main className="bg-ccu-900 min-h-screen">
      <PremiumNavbar />
      <CinematicHero />
      <AnimatedMetrics />

      {/* ──────────────── WHAT WE DO ──────────────── */}
      <section className="py-32 px-8 max-w-7xl mx-auto z-10 relative border-t border-white/[0.06]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-widest text-ccu-accent mb-4">What We Do</p>
            <h2 className="text-4xl md:text-6xl font-display font-bold uppercase tracking-tighter mb-8 text-white leading-tight">
              <RevealText text="Beyond" delay={0.1} className="block text-ccu-accent" />
              <RevealText text="Ordinary Marketing." delay={0.2} className="block" />
            </h2>
            <p className="text-lg text-white/50 font-sans leading-relaxed mb-6">
              Clap Cut Universe isn&apos;t just another agency — we are a premium production powerhouse where elite engineering meets award-winning storytelling. Founded by J. Jeyabal, we operate at the bleeding edge of creative &amp; digital.
            </p>
            <p className="text-base text-white/35 font-sans leading-relaxed mb-12">
              From Tamil cinema campaigns that dominate social feeds, to hyper-optimized React applications that crush Lighthouse scores, to documentaries that win national awards — we craft experiences that demand to be seen.
            </p>

            {/* Value Props */}
            <div className="grid grid-cols-2 gap-6">
              <div className="border-l-2 border-ccu-accent pl-5">
                <h3 className="text-white font-display uppercase tracking-widest font-bold text-sm mb-2">Cinematic DNA</h3>
                <p className="text-xs text-white/40 font-sans leading-relaxed">Every frame art-directed for 60fps luxury experiences.</p>
              </div>
              <div className="border-l-2 border-white/20 pl-5">
                <h3 className="text-white font-display uppercase tracking-widest font-bold text-sm mb-2">Technical Scale</h3>
                <p className="text-xs text-white/40 font-sans leading-relaxed">Next.js, Framer Motion, GSAP. Speed without compromise.</p>
              </div>
              <div className="border-l-2 border-white/20 pl-5">
                <h3 className="text-white font-display uppercase tracking-widest font-bold text-sm mb-2">Award-Winning</h3>
                <p className="text-xs text-white/40 font-sans leading-relaxed">6+ awards for documentaries and social impact campaigns.</p>
              </div>
              <div className="border-l-2 border-white/20 pl-5">
                <h3 className="text-white font-display uppercase tracking-widest font-bold text-sm mb-2">Government Trust</h3>
                <p className="text-xs text-white/40 font-sans leading-relaxed">Worked with high-ranking officials for official campaigns.</p>
              </div>
            </div>
          </div>

          {/* Quote Card + Quick Links */}
          <div className="relative">
            <div className="p-12 rounded-3xl border border-white/[0.06] bg-white/[0.02] overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-br from-ccu-accent/[0.05] to-transparent pointer-events-none" />
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-ccu-accent/20 to-transparent border border-ccu-accent/20 flex items-center justify-center mb-8">
                  <span className="text-3xl">✦</span>
                </div>
                <blockquote className="text-2xl md:text-3xl font-display font-bold text-white uppercase tracking-tight leading-snug mb-6">
                  &quot;The intersection of art and architecture.&quot;
                </blockquote>
                <p className="font-mono text-[10px] uppercase tracking-widest text-ccu-accent">— Our Philosophy</p>
              </div>
            </div>
            <div className="mt-6 grid grid-cols-2 gap-3">
              {[
                { label: 'Film & Campaigns', href: '/film-campaigns' },
                { label: 'Web & App Dev', href: '/web-app-development' },
                { label: 'Photography', href: '/photography' },
                { label: 'Ads & Scripts', href: '/ads-scripts' },
              ].map((item) => (
                <Link key={item.href} href={item.href} className="group p-4 rounded-xl border border-white/[0.06] bg-white/[0.02] hover:border-ccu-accent/30 hover:bg-white/[0.04] transition-all duration-500 flex items-center justify-between">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-white/50 group-hover:text-white transition-colors">{item.label}</span>
                  <svg className="w-3 h-3 text-white/20 group-hover:text-ccu-accent transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ──────────────── SERVICE SHOWCASE ──────────────── */}
      <section className="py-32 bg-[#030303] border-t border-white/[0.06] relative z-10 overflow-hidden">
        {/* Background Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-ccu-accent/[0.03] rounded-full blur-[200px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-8 relative">
          <div className="text-center mb-20">
            <p className="font-mono text-[10px] uppercase tracking-widest text-ccu-accent mb-4">Our Divisions</p>
            <h2 className="text-4xl md:text-7xl font-display font-bold uppercase tracking-tighter text-white mb-4">
              What We <span className="text-ccu-accent">Master.</span>
            </h2>
            <p className="text-white/30 font-sans max-w-xl mx-auto">Six specialized divisions working in concert to deliver world-class results.</p>
          </div>

          {/* Bento Grid — 2 large + 4 compact */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            {services.slice(0, 2).map((service) => (
              <Link key={service.num} href={service.href} className={`relative p-10 md:p-12 rounded-2xl border border-white/[0.06] bg-white/[0.02] overflow-hidden group transition-all duration-700 hover:border-white/15 min-h-[280px] flex flex-col justify-end`}>
                <div className={`absolute inset-0 bg-gradient-to-br ${service.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none`} />
                <div className="absolute top-6 right-6 w-14 h-14 rounded-2xl bg-white/[0.04] border border-white/[0.06] flex items-center justify-center text-2xl group-hover:scale-110 group-hover:bg-white/[0.08] transition-all duration-500">{service.icon}</div>
                <div className="relative z-10">
                  <span className="font-mono text-white/15 text-6xl font-bold absolute -top-8 -left-1 select-none group-hover:text-white/[0.06] transition-colors">{service.num}</span>
                  <h3 className="text-2xl md:text-3xl font-display font-bold uppercase tracking-tight text-white mb-3 group-hover:text-ccu-accent transition-colors">{service.title}</h3>
                  <p className="text-sm text-white/40 font-sans leading-relaxed max-w-md">{service.desc}</p>
                </div>
                <div className="absolute bottom-6 right-6 w-10 h-10 rounded-full border border-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:bg-white group-hover:text-black transition-all duration-500">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
                </div>
              </Link>
            ))}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {services.slice(2).map((service) => (
              <Link key={service.num} href={service.href} className={`relative p-8 rounded-2xl border border-white/[0.06] overflow-hidden group transition-all duration-700 hover:border-white/15`}>
                <div className={`absolute inset-0 bg-gradient-to-br ${service.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none`} />
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-white/[0.04] border border-white/[0.06] flex items-center justify-center text-xl group-hover:scale-110 group-hover:bg-white/[0.08] transition-all duration-500">{service.icon}</div>
                    <span className="font-mono text-white/10 text-sm font-bold">{service.num}</span>
                  </div>
                  <h3 className="text-lg font-display font-bold uppercase tracking-tight text-white mb-2 group-hover:text-ccu-accent transition-colors">{service.title}</h3>
                  <p className="text-xs text-white/30 font-sans leading-relaxed">{service.desc}</p>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/services" className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-white/10 font-mono text-[10px] uppercase tracking-widest text-white/40 hover:border-ccu-accent hover:text-ccu-accent transition-all duration-500">
              Explore All Services
              <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
            </Link>
          </div>
        </div>
      </section>

      <FeaturedCampaigns />

      {/* ──────────────── WHY CHOOSE US ──────────────── */}
      <section className="py-32 px-8 max-w-7xl mx-auto border-t border-white/[0.06] relative z-10">
        <div className="text-center mb-20">
          <p className="font-mono text-[10px] uppercase tracking-widest text-ccu-accent mb-4">The CCU Advantage</p>
          <h2 className="text-4xl md:text-6xl font-display font-bold uppercase tracking-tighter text-white mb-4">Why Brands Choose Us</h2>
          <p className="text-white/30 font-sans max-w-2xl mx-auto">Six reasons why leading brands, government bodies, and production houses trust Clap Cut Universe.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {whyChoose.map((item) => (
            <div key={item.title} className="p-8 rounded-2xl border border-white/[0.06] bg-white/[0.02] hover:border-ccu-accent/30 hover:bg-white/[0.04] transition-all duration-500 group">
              <div className="text-3xl mb-5 group-hover:scale-110 transition-transform duration-500">{item.icon}</div>
              <h3 className="text-lg font-display font-bold uppercase tracking-tight text-white mb-2 group-hover:text-ccu-accent transition-colors">{item.title}</h3>
              <p className="text-xs text-white/35 font-sans leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ──────────────── RECENT PROJECTS ──────────────── */}
      <section className="py-32 bg-[#030303] border-t border-white/[0.06] relative z-10">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-20">
            <p className="font-mono text-[10px] uppercase tracking-widest text-ccu-accent mb-4">Recent Work</p>
            <h2 className="text-4xl md:text-7xl font-display font-bold uppercase tracking-tighter text-white mb-4">Projects That <span className="text-ccu-accent">Echo.</span></h2>
            <p className="text-white/30 font-sans max-w-xl mx-auto">From ISRO tributes to anti-drug campaigns — work that doesn&apos;t just get views, it makes impact.</p>
          </div>

          {/* Featured 2 large cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            {recentProjects.filter(p => p.featured).map((project) => (
              <div key={project.title} className="relative p-10 md:p-12 rounded-2xl border border-white/[0.06] bg-white/[0.02] overflow-hidden group hover:border-ccu-accent/20 transition-all duration-700 min-h-[300px] flex flex-col justify-end">
                <div className="absolute inset-0 bg-gradient-to-br from-ccu-accent/[0.04] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                <div className="absolute top-6 right-6 flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full text-[9px] font-mono uppercase tracking-widest bg-ccu-accent/10 text-ccu-accent border border-ccu-accent/20">{project.category}</span>
                  <span className="px-3 py-1 rounded-full text-[9px] font-mono uppercase tracking-widest border border-white/10 text-white/30">{project.year}</span>
                </div>
                <div className="relative z-10">
                  <h3 className="text-3xl md:text-4xl font-display font-extrabold uppercase tracking-tighter text-white mb-3 group-hover:text-ccu-accent transition-colors">{project.title}</h3>
                  <p className="text-sm text-white/40 font-sans leading-relaxed max-w-md mb-2">{project.desc}</p>
                  <p className="font-mono text-[10px] uppercase tracking-widest text-white/20">{project.type}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Remaining projects as stacked rows */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            {recentProjects.filter(p => !p.featured).map((project, i) => (
              <div key={project.title} className="p-6 rounded-xl border border-white/[0.06] bg-white/[0.02] hover:border-white/10 hover:bg-white/[0.04] transition-all duration-500 group">
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-white/10 text-2xl font-bold">{String(i + 3).padStart(2, '0')}</span>
                  <span className="px-2 py-0.5 rounded-full text-[8px] font-mono uppercase tracking-widest border border-white/[0.06] text-white/20">{project.category}</span>
                </div>
                <h3 className="text-lg font-display font-bold uppercase tracking-tight text-white mb-1 group-hover:text-ccu-accent transition-colors">{project.title}</h3>
                <p className="text-xs text-white/30 font-sans mb-2">{project.desc}</p>
                <span className="font-mono text-[9px] uppercase tracking-widest text-white/15">{project.year} · {project.type}</span>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link href="/portfolio" className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-white/10 font-mono text-[10px] uppercase tracking-widest text-white/40 hover:border-ccu-accent hover:text-ccu-accent transition-all duration-500">
              View Full Portfolio
              <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ──────────────── FOUNDER STRIP ──────────────── */}
      <section className="py-24 px-8 max-w-7xl mx-auto border-t border-white/[0.06] relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-widest text-ccu-accent mb-4">The Visionary</p>
            <h2 className="text-4xl md:text-5xl font-display font-bold uppercase tracking-tighter text-white mb-6">
              Founded by <span className="text-ccu-accent">J. Jeyabal.</span>
            </h2>
            <p className="text-lg text-white/50 font-sans leading-relaxed mb-6">
              With 10+ years of creative industry experience, J. Jeyabal worked independently before unifying his team under one banner — Clap Cut Universe — in 2024. From anthem productions to government-grade campaigns, he&apos;s built a production powerhouse in Madurai.
            </p>
            <div className="flex gap-8 mb-8 border-t border-white/[0.06] pt-6">
              <div>
                <span className="block text-2xl font-display font-bold text-white tracking-tighter">10+</span>
                <span className="font-mono text-[9px] uppercase tracking-widest text-white/30">Years</span>
              </div>
              <div>
                <span className="block text-2xl font-display font-bold text-white tracking-tighter">50+</span>
                <span className="font-mono text-[9px] uppercase tracking-widest text-white/30">Campaigns</span>
              </div>
              <div>
                <span className="block text-2xl font-display font-bold text-white tracking-tighter">6</span>
                <span className="font-mono text-[9px] uppercase tracking-widest text-white/30">Awards</span>
              </div>
              <div>
                <span className="block text-2xl font-display font-bold text-white tracking-tighter">500M+</span>
                <span className="font-mono text-[9px] uppercase tracking-widest text-white/30">Reach</span>
              </div>
            </div>
            <Link href="/founder" className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-white/20 text-white font-mono text-[10px] uppercase tracking-widest hover:border-ccu-accent hover:text-ccu-accent transition-all duration-500">
              Read Full Story
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
            </Link>
          </div>
          <div className="relative">
            <div className="p-10 rounded-3xl border border-white/[0.06] bg-white/[0.02] relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-ccu-accent/[0.04] to-transparent pointer-events-none" />
              <div className="relative z-10">
                <blockquote className="text-xl md:text-2xl font-display font-bold text-white uppercase tracking-tight leading-snug mb-6">
                  &quot;To not just participate in the digital age, but to art-direct it.&quot;
                </blockquote>
                <p className="font-mono text-[10px] uppercase tracking-widest text-ccu-accent mb-6">— J. Jeyabal, Founder</p>
                <div className="flex flex-wrap gap-2">
                  {['Director', 'Producer', 'Strategist', 'Entrepreneur'].map((role) => (
                    <span key={role} className="px-3 py-1 rounded-full text-[9px] font-mono uppercase tracking-widest border border-white/10 text-white/30">{role}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ──────────────── TRUSTED BY VISIONARIES ──────────────── */}
      <section className="py-24 bg-[#030303] relative z-10 border-y border-white/[0.06] overflow-hidden">
        <div className="max-w-7xl mx-auto px-8 text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold uppercase tracking-tighter text-white mb-3">Trusted by Visionaries</h2>
          <p className="text-white/30 font-mono text-[10px] uppercase tracking-widest">Government Officials • Production Houses • Leading Brands • Educational Institutions</p>
        </div>
        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#030303] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#030303] to-transparent z-10 pointer-events-none" />
          <div className="flex gap-12 px-8 animate-[slideLeft_30s_linear_infinite] whitespace-nowrap">
            {['Gabriel India (Anand Group)', 'Madhaven Jewellery', 'Queen Mira International School', 'Government of TN', 'Radio Mirchi', 'Pothys', 'Rafithub Fitness', 'Ganesh Brand Foods', 'JK Hair & Skin Care', 'Youvathi Cookies', 'Gabriel India (Anand Group)', 'Madhaven Jewellery', 'Queen Mira International School', 'Government of TN', 'Radio Mirchi', 'Pothys'].map((brand, i) => (
              <span key={i} className="font-display text-xl md:text-2xl uppercase tracking-widest font-bold text-white/[0.12] hover:text-white/30 transition-colors duration-500 cursor-default flex-shrink-0">
                {brand}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ──────────────── CTA ──────────────── */}
      <section className="py-40 px-8 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <p className="font-mono text-[10px] uppercase tracking-widest text-ccu-accent mb-6">Ready to Begin?</p>
          <h2 className="text-4xl md:text-7xl font-display font-extrabold uppercase tracking-tighter text-white mb-8 leading-tight">
            Let&apos;s Build Something <span className="text-ccu-accent">Extraordinary.</span>
          </h2>
          <p className="text-lg text-white/40 font-sans max-w-xl mx-auto mb-10">
            Whether it&apos;s a blockbuster campaign, a high-performance web platform, or an award-winning documentary — we&apos;re ready.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link href="/contact" className="px-10 py-5 rounded-full bg-white text-black font-mono text-xs uppercase tracking-widest font-bold hover:bg-ccu-accent transition-colors duration-500">
              Start a Project
            </Link>
            <Link href="/portfolio" className="px-10 py-5 rounded-full border border-white/20 text-white font-mono text-xs uppercase tracking-widest hover:border-white/50 transition-colors duration-500">
              View Portfolio
            </Link>
          </div>
        </div>
      </section>

      <AnimatedFooter />
    </main>
  );
}
