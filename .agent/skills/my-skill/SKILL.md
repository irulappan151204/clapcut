name: clapcut-universe-premium-frontend
role: Senior Frontend & UI/UX Engineer
version: 1.0.0
description: >
  Ultra-premium multi-page frontend architecture for Clap Cut Universe —
  a digital marketing powerhouse covering social media, photography,
  videography, Tamil film industry campaigns, ads, scripts,
  and web/app development.

stack:
  framework: Next.js 14 (App Router)
  language: TypeScript
  styling: TailwindCSS + Custom Design System
  animation:
    - Framer Motion
    - GSAP ScrollTrigger
    - Lenis Smooth Scroll
    - Lottie
  3d:
    - Three.js (selective cinematic hero scenes)
  state: Zustand
  cms: Headless-ready (Sanity/Strapi compatible)
  deployment: Vercel / Cloudflare
  performance:
    - Lighthouse 95+
    - Core Web Vitals optimized
    - Code splitting
    - Lazy loading
    - Image optimization

design_principles:
  - Ultra-premium cinematic design
  - Bold typography with oversized hero letters
  - Smooth parallax storytelling
  - High-contrast dark mode base
  - Glassmorphism overlays
  - Micro-interactions everywhere
  - Scroll-driven narrative experience
  - Minimal but powerful UI
  - Motion-first design philosophy

pages:
  - Home
  - About
  - Services
  - Portfolio
  - Film & Campaigns
  - Ads & Scripts
  - Photography
  - Videography
  - Web & App Development
  - Careers
  - Contact

page_architecture:
  Home:
    hero:
      type: cinematic-parallax
      features:
        - Giant animated typography
        - Letter-by-letter entrance animation
        - Parallax layered background
        - Scroll-triggered scale transitions
        - Floating 3D particles
    sections:
      - Brand Statement Scroll Reveal
      - Services Horizontal Scroll Slider
      - Featured Campaign Reel
      - Animated Metrics Counter
      - Client Showcase Marquee
      - CTA Cinematic Block

  Services:
    layout: multi-layer storytelling
    features:
      - Card hover depth effect
      - 3D tilt animation
      - Animated icon transitions
      - Scroll-based reveal
      - Background video integration

  Portfolio:
    layout: immersive grid
    features:
      - Masonry layout
      - Hover video preview
      - Category filter animation
      - Smooth modal transitions
      - Fullscreen cinematic view

  Film & Campaigns:
    features:
      - Timeline scroll animation
      - Tamil cinema styled typography
      - Motion poster integration
      - Trailer lightbox

  Web & App Development:
    features:
      - Animated tech stack visualization
      - Scroll-triggered code reveal
      - Split-screen layout
      - Interactive workflow diagram

animation_system:
  scroll_behavior:
    smooth_scroll: Lenis
    scroll_trigger: GSAP ScrollTrigger
    reveal_pattern: fade-up stagger
    section_transition: scale + opacity blend

  typography_animation:
    - SplitText letter animation
    - Gradient animated text
    - Stroke-to-fill transition
    - Typewriter hero variation

  parallax:
    - Multi-layer depth scroll
    - Image speed differential
    - Floating UI elements

  micro_interactions:
    - Magnetic buttons
    - Cursor follower
    - Ripple hover effects
    - Animated underline links

ui_system:
  theme:
    base: dark premium
    accent: neon gradient
    typography:
      hero: ExtraBold, oversized
      body: Clean geometric sans
    spacing: 8px scale system
  components:
    - PremiumNavbar (blur + shrink on scroll)
    - AnimatedFooter
    - RevealSection
    - GlassCard
    - CinematicHero
    - MagneticButton
    - ParallaxImage

performance_strategy:
  - Dynamic imports for animation libraries
  - Reduced motion fallback
  - SSR where required
  - Lazy load media
  - Use next/image for all assets

seo_strategy:
  - Structured metadata
  - OpenGraph optimization
  - Sitemap auto-generation
  - Dynamic OG image generation

accessibility:
  - ARIA compliant
  - Keyboard navigation
  - Motion-reduction mode
  - High contrast fallback

developer_standards:
  code_style:
    - Atomic components
    - Reusable motion wrappers
    - Strict typing
  folder_structure:
    - app/
    - components/
    - animations/
    - sections/
    - lib/
    - hooks/
    - store/
  commit_convention:
    - feat:
    - fix:
    - perf:
    - refactor:
    - chore:

future_scalability:
  - CMS-driven dynamic pages
  - Multi-language support (Tamil/English)
  - AI-based content personalization
  - Analytics heatmap integration
  - Motion-based storytelling upgrades