import React, { useState, useEffect } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { SafeImage } from './SafeImage';
import { 
  ArrowLeft, 
  Mail, 
  MapPin, 
  Menu, 
  X, 
  Copy, 
  Check, 
  Linkedin, 
  Github, 
  Instagram, 
  Dribbble,
  Calendar,
  CalendarCheck,
  Rocket,
  Building2,
  Users,
  FileText,
  ExternalLink,
  Layers, 
  Cpu, 
  Target,
  ArrowRight,
  MousePointerClick,
  Volume2,
  VolumeX
} from 'lucide-react';

interface AboutPageProps {
  onNavigateHome: () => void;
  onNavigateProjects: () => void;
  onNavigateCaseStudy?: (projectId: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ 
  onNavigateHome, 
  onNavigateProjects,
  onNavigateCaseStudy
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [scrollProgress, setScrollProgress] = useState<number[]>([0, 0, 0, 0]);
  const [activeFullscreenMedia, setActiveFullscreenMedia] = useState<{ src: string; caption?: string; isVideo?: boolean } | null>(null);
  const [isWalkingVideoMuted, setIsWalkingVideoMuted] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const paras = document.querySelectorAll('.scroll-reveal-para');
      const windowHeight = window.innerHeight;
      const progressArr: number[] = [];
      paras.forEach((p) => {
        const rect = p.getBoundingClientRect();
        const start = windowHeight * 0.82;
        const end = windowHeight * 0.52;
        const prog = Math.min(1, Math.max(0, (start - rect.top) / (start - end)));
        progressArr.push(prog);
      });
      if (progressArr.length > 0) {
        setScrollProgress(progressArr);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText(PORTFOLIO_DATA.profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const experienceItems = [
    {
      id: "bamsthetics",
      company: "Bamsthetics Design",
      period: "10/2024 – Present",
      role: "Senior UI/UX Designer",
      description: "Leading design strategy for hybrid cloud solutions. Mentoring junior designers and establishing the Carbon Design System implementation for internal tools.",
      skills: ["Figma", "Design System", "Data Visualization", "Web Development"]
    },
    {
      id: "signaladoc",
      company: "SignalADoc",
      period: "09/2022 – 02/2025",
      role: "Lead UI/UX Designer",
      description: "Leading design strategy for hybrid cloud solutions. Mentoring junior designers and establishing the Carbon Design System implementation for internal tools.",
      skills: ["Figma", "Design System", "Onboarding", "Web Development"]
    },
    {
      id: "deniafehub",
      company: "DeniafeHub",
      period: "08/2019 – 09/2022",
      role: "UI/UX Designer",
      description: "Leading design strategy for hybrid cloud solutions. Mentoring junior designers and establishing the Carbon Design System implementation for internal tools.",
      skills: ["Figma", "Design System", "Data Visualization", "Web Development"]
    }
  ];

  return (
    <div className="relative min-h-screen bg-[#FFFDFB] text-[#18120F]">
      {/* Floating Glassmorphism Header - Full width respecting 60px padding on desktop (Pushed up 10px, down 8px on mobile) */}
      <header className="fixed top-2 sm:top-1 left-0 right-0 z-40 w-full px-4 sm:px-8 md:px-[60px] pointer-events-none">
        <div className="glass-header pointer-events-auto w-full px-5 sm:px-8 py-3.5 md:py-4 min-h-[56px] md:min-h-[60px] flex items-center justify-between gap-4">
          {/* Logo */}
          <button 
            onClick={onNavigateHome} 
            className="flex items-center gap-2 shrink-0 cursor-pointer"
            aria-label="Back to Homepage"
          >
            <SafeImage
              src={PORTFOLIO_DATA.profile.logoNav}
              alt="An Introverted Designer Logo"
              fallbackType="logo"
              title="AID"
              className="h-7 md:h-8 w-auto object-contain"
            />
          </button>

          {/* Desktop Nav - Clean links, ABOUT is active in orange */}
          <nav className="hidden md:flex items-center gap-8 font-['Work_Sans',sans-serif] font-medium text-[12px] tracking-wider uppercase">
            <button 
              onClick={onNavigateProjects} 
              className="text-[#18120F] hover:text-[#F37335] transition-colors cursor-pointer"
            >
              PROJECTS
            </button>
            <span className="text-[#F37335] font-semibold cursor-default">
              ABOUT
            </span>
            <button 
              onClick={onNavigateProjects} 
              className="text-[#18120F] hover:text-[#F37335] transition-colors cursor-pointer"
            >
              RESOURCES
            </button>
          </nav>

          {/* Avatar + CTA */}
          <div className="flex items-center gap-3 shrink-0">
            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full p-[2px] bg-gradient-to-tr from-[#F37335] to-[#BE5EC6] shrink-0">
              <SafeImage
                src="https://res.cloudinary.com/driutxwdh/image/upload/v1792069386/IMG_4778__gbnjiq.jpg"
                alt={PORTFOLIO_DATA.profile.name}
                fallbackType="avatar"
                className="w-full h-full rounded-full object-cover"
              />
            </div>
            
            <a
              href="https://cal.com/anintroverteddesigner/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="gradient-stroke-btn hidden sm:inline-flex items-center justify-center"
            >
              <span 
                className="gradient-stroke-btn-inner !text-[12px] font-semibold uppercase tracking-wider !py-2 !px-3 text-[#18120F] leading-none whitespace-nowrap"
                style={{ fontSize: '12px' }}
              >
                WORK WITH ME
              </span>
            </a>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-[#18120F] hover:text-[#BE5EC6] transition-colors cursor-pointer"
              aria-label="Toggle navigation"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-2 p-5 bg-white/95 backdrop-blur-xl border border-white/80 rounded-2xl shadow-xl pointer-events-auto flex flex-col gap-3 font-semibold text-sm">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onNavigateProjects();
              }}
              className="py-2.5 px-3.5 rounded-xl hover:bg-[#FAF0FC] hover:text-[#BE5EC6] text-[#18120F] text-left transition-colors cursor-pointer"
            >
              PROJECTS
            </button>
            <span className="py-2.5 px-3.5 rounded-xl bg-[#FFF5ED] text-[#F37335] text-left font-semibold">
              ABOUT
            </span>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onNavigateProjects();
              }}
              className="py-2.5 px-3.5 rounded-xl hover:bg-[#FAF0FC] hover:text-[#BE5EC6] text-[#18120F] text-left transition-colors cursor-pointer"
            >
              RESOURCES
            </button>
            <div className="pt-2 border-t border-slate-100 flex flex-col gap-2">
              <a
                href="https://cal.com/anintroverteddesigner/30min"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="gradient-stroke-btn text-center"
              >
                <span 
                  className="gradient-stroke-btn-inner w-full py-2.5 !text-[12px] font-semibold uppercase tracking-wider text-[#18120F]"
                  style={{ fontSize: '12px' }}
                >
                  WORK WITH ME
                </span>
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Sticky Hero & Overlap Container: Stickiness ends after Experience section */}
      <div className="relative bg-[#FFFDFB]">
        {/* Sticky Hero Section - Fixed in background while scrolling */}
        <section className="sticky top-0 min-h-screen lg:h-screen z-0 bg-[#FFFDFB] pt-20 sm:pt-24 lg:pt-[96px] pb-12 px-4 sm:px-8 md:px-[60px] w-full mx-auto overflow-hidden flex flex-col justify-center">
        {/* Ambient hero interaction placed strictly behind section bg */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden -z-20">
          <div className="liquid-rolling-ribbon -top-10 left-1/4 opacity-60" />
          <div className="liquid-glass-blob top-1/3 -right-20 opacity-55" />
        </div>
        {/* Translucent section background overlay for soft frosted ambient glow */}
        <div className="absolute inset-0 bg-[#FFFDFB]/85 backdrop-blur-[45px] pointer-events-none -z-10" />

        <div className="relative z-10 pt-[10px]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-8 items-stretch">
            {/* Left Column: Portrait image card - Tall and prominent on mobile and tablet portrait, full height on desktop */}
            <div className="lg:col-span-5 flex flex-col h-full">
              <div className="wp-testimonial-card-outer w-full h-full flex flex-col !p-[1.5px]">
                <div className="wp-testimonial-card-inner !p-[2px] w-full h-full flex flex-col flex-1 !rounded-[11px] overflow-hidden">
                  <div className="relative w-full h-full min-h-[360px] sm:min-h-[440px] md:min-h-[500px] lg:min-h-0 flex-1 overflow-hidden rounded-[10px] bg-slate-50">
                    <SafeImage
                      src="https://res.cloudinary.com/driutxwdh/image/upload/v1792069386/IMG_4778__gbnjiq.jpg"
                      alt="Esther Oreoluwa Bamidele (Bamz)"
                      fallbackType="avatar"
                      className="absolute inset-0 w-full h-full object-cover object-top filter grayscale hover:grayscale-0 transition-all duration-500"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Heading, Bio, View Resume & LinkedIn Icon, Stat Boxes (stacked 2 2) */}
            <div className="lg:col-span-7 flex flex-col justify-start">
              <div className="space-y-2.5">
                {/* Main Heading */}
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-medium tracking-tight text-[#18120F] leading-[1.2] font-['Cabinet_Grotesk',sans-serif]">
                  Hey 👋, I'm Oreoluwa, you can call me Bamz 🙂
                </h1>

                {/* Bio Paragraph */}
                <p className="text-sm sm:text-base text-[#18120F] font-['Work_Sans',sans-serif] leading-relaxed">
                  I am an AI Design Engineer and product builder. I specialize in the intersection of dense information architecture and frontend engineering—taking complex, fragmented systems and turning them into scalable, high-conversion platforms. Whether I am leading UX for health-tech platforms or rapidly building React/Supabase MVPs for early-stage founders, my focus is always on creating frictionless user experiences that drive measurable business growth.
                </p>

                {/* Action Row: View Resume Button (opened outside) and LinkedIn Icon moved UP directly under description */}
                <div className="flex items-center gap-3.5 pt-1 pb-0.5">
                  {/* View Resume Button */}
                  <a
                    href="https://drive.google.com/file/d/1aW2qp094P2Dl2tL8wIvHw6jK-ZXiet6M/view"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="gradient-stroke-btn inline-flex items-center cursor-pointer"
                    title="Open resume in Google Drive to view and download"
                  >
                    <span className="gradient-stroke-btn-inner !py-2 !px-5 text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#18120F] flex items-center gap-2">
                      <span>VIEW RESUME</span>
                      <ExternalLink className="w-3.5 h-3.5 text-[#F37335]" />
                    </span>
                  </a>

                  {/* LinkedIn: Just the icon */}
                  <a
                    href="https://www.linkedin.com/in/orebamz/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center p-0.5 rounded-xl hover:scale-105 active:scale-95 transition-all cursor-pointer"
                    title="Connect with Esther on LinkedIn"
                  >
                    <img
                      src="https://res.cloudinary.com/driutxwdh/image/upload/v1792073336/Linkedin_xdl5qd.svg"
                      alt="LinkedIn"
                      className="w-9 h-9 sm:w-10 sm:h-10 object-contain drop-shadow-xs hover:drop-shadow-sm transition-all"
                    />
                  </a>
                </div>
              </div>

              {/* Stats Cards Pushed UP 16px under View Resume button row - Larger Icons */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mt-[16px]">
                {/* 1. Years of Experience */}
                <div className="wp-stat-card-outer !rounded-[4px]">
                  <div className="wp-stat-card-inner !py-[18px] !px-4 !rounded-[3px]">
                    <div className="flex flex-col">
                      <span className="text-xl sm:text-2xl font-bold font-['Cabinet_Grotesk',sans-serif] text-[#18120F] tracking-tight leading-none">
                        6+
                      </span>
                      <span className="text-xs font-medium font-['Work_Sans',sans-serif] text-[#18120F]/80 mt-1">
                        Years Experience
                      </span>
                    </div>
                    {/* Increased icon size */}
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-[#FFF3ED] border border-[#F37335]/30 flex items-center justify-center text-[#F37335] shrink-0">
                      <CalendarCheck className="w-4.5 h-4.5 sm:w-5 sm:h-5" />
                    </div>
                  </div>
                </div>

                {/* 2. Projects Shipped */}
                <div className="wp-stat-card-outer !rounded-[4px]">
                  <div className="wp-stat-card-inner !py-[18px] !px-4 !rounded-[3px]">
                    <div className="flex flex-col">
                      <span className="text-xl sm:text-2xl font-bold font-['Cabinet_Grotesk',sans-serif] text-[#18120F] tracking-tight leading-none">
                        20+
                      </span>
                      <span className="text-xs font-medium font-['Work_Sans',sans-serif] text-[#18120F]/80 mt-1">
                        Projects Shipped
                      </span>
                    </div>
                    {/* Increased icon size */}
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-[#FAF0FC] border border-[#BE5EC6]/30 flex items-center justify-center text-[#BE5EC6] shrink-0">
                      <Rocket className="w-4.5 h-4.5 sm:w-5 sm:h-5" />
                    </div>
                  </div>
                </div>

                {/* 3. Industries (Building icon matching Elementor snippet) */}
                <div className="wp-stat-card-outer !rounded-[4px]">
                  <div className="wp-stat-card-inner !py-[18px] !px-4 !rounded-[3px]">
                    <div className="flex flex-col">
                      <span className="text-xl sm:text-2xl font-bold font-['Cabinet_Grotesk',sans-serif] text-[#18120F] tracking-tight leading-none">
                        8+
                      </span>
                      <span className="text-xs font-medium font-['Work_Sans',sans-serif] text-[#18120F]/80 mt-1">
                        Industries
                      </span>
                    </div>
                    {/* Increased icon size */}
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-[#FFF3ED] border border-[#F37335]/30 flex items-center justify-center text-[#F37335] shrink-0">
                      <Building2 className="w-4.5 h-4.5 sm:w-5 sm:h-5" />
                    </div>
                  </div>
                </div>

                {/* 4. Happy Clients */}
                <div className="wp-stat-card-outer !rounded-[4px]">
                  <div className="wp-stat-card-inner !py-[18px] !px-4 !rounded-[3px]">
                    <div className="flex flex-col">
                      <span className="text-xl sm:text-2xl font-bold font-['Cabinet_Grotesk',sans-serif] text-[#18120F] tracking-tight leading-none">
                        12+
                      </span>
                      <span className="text-xs font-medium font-['Work_Sans',sans-serif] text-[#18120F]/80 mt-1">
                        Happy Clients
                      </span>
                    </div>
                    {/* Increased icon size */}
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-[#FAF0FC] border border-[#BE5EC6]/30 flex items-center justify-center text-[#BE5EC6] shrink-0">
                      <Users className="w-4.5 h-4.5 sm:w-5 sm:h-5" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Beyond The Screen - Slides up over the sticky hero section, with 20px word-by-word scroll reveal (no border-radius) */}
      <section className="relative z-20 w-full bg-[#FFFDFB] rounded-none shadow-[0_-25px_60px_rgba(24,18,15,0.07)] border-t border-[#F37335]/20 pt-20 sm:pt-28 pb-20 sm:pb-28 px-4 sm:px-8 md:px-[60px]">
        <div className="max-w-6xl mx-auto">
          {/* Scroll Reveal Text Container */}
          <div className="max-w-3xl mx-auto text-center space-y-6 mb-14 sm:mb-18">
            {/* Tag matching Career History tag */}
            <span className="text-xs uppercase tracking-widest text-[#F37335] font-['Work_Sans',sans-serif] font-medium block mb-2">
              Beyond The Screen
            </span>

            {/* 20px storytelling typography with smooth word-by-word scroll reveal (3 lines per paragraph) */}
            <div className="space-y-6 text-[20px] sm:text-[20px] font-['Work_Sans',sans-serif] leading-[1.75] pt-2 max-w-[980px] mx-auto text-center font-normal">
              {/* Paragraph 1 - 3 lines */}
              <p className="scroll-reveal-para">
                {"When I’m not architecting components in Figma or shipping live web applications, I’m usually designing and printing custom clothing prints—there’s something magical about seeing a digital pattern turn into a physical reality.".split(' ').map((word, wIdx, arr) => {
                  const isRevealed = (scrollProgress[0] || 0) >= (wIdx / arr.length);
                  return (
                    <span
                      key={wIdx}
                      className="inline-block transition-colors duration-200 mr-[0.28em]"
                      style={{
                        color: isRevealed ? '#18120F' : 'rgba(24, 18, 15, 0.22)'
                      }}
                    >
                      {word}
                    </span>
                  );
                })}
              </p>

              {/* Paragraph 2 - 3 lines */}
              <p className="scroll-reveal-para">
                {"Outside of work, I’m a certified foodie always searching for new flavors and dishes to try out. You’ll usually also find me reading, laughing with my sisters, or taking slow sunset walks to recharge.".split(' ').map((word, wIdx, arr) => {
                  const isRevealed = (scrollProgress[1] || 0) >= (wIdx / arr.length);
                  return (
                    <span
                      key={wIdx}
                      className="inline-block transition-colors duration-200 mr-[0.28em]"
                      style={{
                        color: isRevealed ? '#18120F' : 'rgba(24, 18, 15, 0.22)'
                      }}
                    >
                      {word}
                    </span>
                  );
                })}
              </p>

              {/* Paragraph 3 - 3 lines */}
              <p className="scroll-reveal-para">
                {"I’ve also fallen in love with the Spanish language. I practice it daily on Duolingo, with a goal to spend more time traveling across Spain and the US—exploring new cities, new cultures, and of course... more food.".split(' ').map((word, wIdx, arr) => {
                  const isRevealed = (scrollProgress[2] || 0) >= (wIdx / arr.length);
                  return (
                    <span
                      key={wIdx}
                      className="inline-block transition-colors duration-200 mr-[0.28em]"
                      style={{
                        color: isRevealed ? '#18120F' : 'rgba(24, 18, 15, 0.22)'
                      }}
                    >
                      {word}
                    </span>
                  );
                })}
              </p>

              {/* Paragraph 4 - Accent Final Statement in Brand Orange */}
              <p className="scroll-reveal-para font-medium pt-2">
                {"At my core, I believe the best designers stay curious—constantly learning, refining, and evolving both in and outside the work.".split(' ').map((word, wIdx, arr) => {
                  const isRevealed = (scrollProgress[3] || 0) >= (wIdx / arr.length);
                  return (
                    <span
                      key={wIdx}
                      className="inline-block transition-colors duration-200 mr-[0.28em]"
                      style={{
                        color: isRevealed ? '#F37335' : 'rgba(243, 115, 53, 0.28)'
                      }}
                    >
                      {word}
                    </span>
                  );
                })}
              </p>
            </div>
          </div>

          {/* Bento Grid: 5 columns ending evenly at the bottom, restoring original height */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-3.5 md:gap-4 items-stretch">
            
            {/* COLUMN 1 (2 cards) */}
            <div className="flex flex-col gap-3 sm:gap-3.5 md:gap-4 h-full justify-between">
              {/* Card 1: Girl sipping drink / Foodie Reel */}
              <div 
                onClick={() => setActiveFullscreenMedia({ 
                  src: "https://res.cloudinary.com/driutxwdh/video/upload/v1792192108/60D2301F-FFFE-4520-8022-DB2A0CD89724_ospdvf.mp4", 
                  caption: "Foodie Reel — Sipping Toast & Desserts", 
                  isVideo: true 
                })}
                className="group relative rounded-xl overflow-hidden border border-slate-200/80 bg-slate-100 shadow-2xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer flex-1 min-h-[220px] sm:min-h-[250px] w-full"
              >
                <div className="absolute top-2.5 left-2.5 z-10 bg-black/65 backdrop-blur-md border border-white/20 text-white text-[9px] sm:text-[10px] font-medium px-2 py-0.5 rounded-full flex items-center gap-1 shadow-md">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#BE5EC6]" />
                  <span>Foodie</span>
                </div>
                <video
                  src="https://res.cloudinary.com/driutxwdh/video/upload/v1792192108/60D2301F-FFFE-4520-8022-DB2A0CD89724_ospdvf.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Card 2: Girl on bed with laptop */}
              <div 
                onClick={() => setActiveFullscreenMedia({ 
                  src: "https://res.cloudinary.com/driutxwdh/image/upload/v1792245531/Snapchat-1551556684_evfnde.jpg", 
                  caption: "Late Night Focus & Creative Flow", 
                  isVideo: false 
                })}
                className="group relative rounded-xl overflow-hidden border border-slate-200/80 bg-slate-100 shadow-2xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer flex-1 min-h-[220px] sm:min-h-[250px] w-full"
              >
                <div className="absolute top-2.5 left-2.5 z-10 bg-black/65 backdrop-blur-md border border-white/20 text-white text-[9px] sm:text-[10px] font-medium px-2 py-0.5 rounded-full flex items-center gap-1 shadow-md">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00A8A8]" />
                  <span>Craft & Focus</span>
                </div>
                <SafeImage
                  src="https://res.cloudinary.com/driutxwdh/image/upload/v1792245531/Snapchat-1551556684_evfnde.jpg"
                  alt="Late Night Focus & Laptop Work"
                  fallbackType="dashboard"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

            {/* COLUMN 2 (3 cards) */}
            <div className="flex flex-col gap-3 sm:gap-3.5 md:gap-4 h-full justify-between">
              {/* Card 3: White Sweatshirt */}
              <div 
                onClick={() => setActiveFullscreenMedia({ 
                  src: "https://res.cloudinary.com/driutxwdh/image/upload/v1792191380/White_Sweatshirt_wq6cbv.png", 
                  caption: "Custom Prints — White Sweatshirt Apparel Print", 
                  isVideo: false 
                })}
                className="group relative rounded-xl overflow-hidden border border-slate-200/80 bg-slate-100 shadow-2xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer aspect-[4/3] w-full"
              >
                <div className="absolute top-2.5 left-2.5 z-10 bg-black/65 backdrop-blur-md border border-white/20 text-white text-[9px] sm:text-[10px] font-medium px-2 py-0.5 rounded-full flex items-center gap-1 shadow-md">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#F37335]" />
                  <span>Custom Prints</span>
                </div>
                <SafeImage
                  src="https://res.cloudinary.com/driutxwdh/image/upload/v1792191380/White_Sweatshirt_wq6cbv.png"
                  alt="Custom Prints - White Sweatshirt"
                  fallbackType="dashboard"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Card 4: Foodie Image */}
              <div 
                onClick={() => setActiveFullscreenMedia({ 
                  src: "https://res.cloudinary.com/driutxwdh/image/upload/v1792189420/IMG_20241101_171109_020_zulutb.jpg", 
                  caption: "Foodie & Culinary Discoveries", 
                  isVideo: false 
                })}
                className="group relative rounded-xl overflow-hidden border border-slate-200/80 bg-slate-100 shadow-2xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer aspect-[4/3] w-full"
              >
                <div className="absolute top-2.5 left-2.5 z-10 bg-black/65 backdrop-blur-md border border-white/20 text-white text-[9px] sm:text-[10px] font-medium px-2 py-0.5 rounded-full flex items-center gap-1 shadow-md">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#BE5EC6]" />
                  <span>Foodie</span>
                </div>
                <SafeImage
                  src="https://res.cloudinary.com/driutxwdh/image/upload/v1792189420/IMG_20241101_171109_020_zulutb.jpg"
                  alt="Foodie Photo"
                  fallbackType="dashboard"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Card 5: Woman sitting on deck bench (Español & Culture) */}
              <div 
                onClick={() => setActiveFullscreenMedia({ 
                  src: "https://res.cloudinary.com/driutxwdh/image/upload/v1792190971/IMG-20240125-WA0020_cdzdz7.jpg", 
                  caption: "Español & Culture — Rooftop Moments", 
                  isVideo: false 
                })}
                className="group relative rounded-xl overflow-hidden border border-slate-200/80 bg-slate-100 shadow-2xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer flex-1 min-h-[160px] w-full"
              >
                <div className="absolute top-2.5 left-2.5 z-10 bg-black/65 backdrop-blur-md border border-white/20 text-white text-[9px] sm:text-[10px] font-medium px-2 py-0.5 rounded-full flex items-center gap-1 shadow-md">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#EC4899]" />
                  <span>Español & Culture</span>
                </div>
                <SafeImage
                  src="https://res.cloudinary.com/driutxwdh/image/upload/v1792190971/IMG-20240125-WA0020_cdzdz7.jpg"
                  alt="Español & Culture Photo"
                  fallbackType="dashboard"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

            {/* COLUMN 3 (3 cards) */}
            <div className="flex flex-col gap-3 sm:gap-3.5 md:gap-4 h-full justify-between">
              {/* Card 6: Black Sweatshirt */}
              <div 
                onClick={() => setActiveFullscreenMedia({ 
                  src: "https://res.cloudinary.com/driutxwdh/image/upload/v1792191519/Black_Sweatshirt_darker_cenagj.png", 
                  caption: "Custom Prints — Black Sweatshirt Apparel Print", 
                  isVideo: false 
                })}
                className="group relative rounded-xl overflow-hidden border border-slate-200/80 bg-slate-100 shadow-2xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer aspect-[4/3] w-full"
              >
                <div className="absolute top-2.5 left-2.5 z-10 bg-black/65 backdrop-blur-md border border-white/20 text-white text-[9px] sm:text-[10px] font-medium px-2 py-0.5 rounded-full flex items-center gap-1 shadow-md">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#F37335]" />
                  <span>Custom Prints</span>
                </div>
                <SafeImage
                  src="https://res.cloudinary.com/driutxwdh/image/upload/v1792191519/Black_Sweatshirt_darker_cenagj.png"
                  alt="Custom Prints - Black Sweatshirt"
                  fallbackType="dashboard"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Card 7: Book Cover "Redeeming Love" */}
              <div 
                onClick={() => setActiveFullscreenMedia({ 
                  src: "https://res.cloudinary.com/driutxwdh/image/upload/v1792192008/c22784a5-b284-435f-81d6-ebac262a533b.png", 
                  caption: "Reading & Books — Redeeming Love by Francine Rivers", 
                  isVideo: false 
                })}
                className="group relative rounded-xl overflow-hidden border border-slate-200/80 bg-slate-100 shadow-2xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer flex-1 min-h-[160px] w-full"
              >
                <div className="absolute top-2.5 left-2.5 z-10 bg-black/65 backdrop-blur-md border border-white/20 text-white text-[9px] sm:text-[10px] font-medium px-2 py-0.5 rounded-full flex items-center gap-1 shadow-md">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#4F46E5]" />
                  <span>Books</span>
                </div>
                <SafeImage
                  src="https://res.cloudinary.com/driutxwdh/image/upload/v1792192008/c22784a5-b284-435f-81d6-ebac262a533b.png"
                  alt="Redeeming Love"
                  fallbackType="dashboard"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Card 8: Movement Image */}
              <div 
                onClick={() => setActiveFullscreenMedia({ 
                  src: "https://res.cloudinary.com/driutxwdh/image/upload/v1792254259/Screenshot_20250219_200037_Fit_rzbcix.jpg", 
                  caption: "Movement & Fitness Activity Stats", 
                  isVideo: false 
                })}
                className="group relative rounded-xl overflow-hidden border border-slate-200/80 bg-slate-100 shadow-2xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer aspect-[4/3] w-full"
              >
                <div className="absolute top-2.5 left-2.5 z-10 bg-black/65 backdrop-blur-md border border-white/20 text-white text-[9px] sm:text-[10px] font-medium px-2 py-0.5 rounded-full flex items-center gap-1 shadow-md">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00A8A8]" />
                  <span>Movement</span>
                </div>
                <SafeImage
                  src="https://res.cloudinary.com/driutxwdh/image/upload/v1792254259/Screenshot_20250219_200037_Fit_rzbcix.jpg"
                  alt="Movement Activity Stats"
                  fallbackType="dashboard"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

            {/* COLUMN 4 (3 cards) */}
            <div className="flex flex-col gap-3 sm:gap-3.5 md:gap-4 h-full justify-between">
              {/* Card 9: Sunset Sky */}
              <div 
                onClick={() => setActiveFullscreenMedia({ 
                  src: "https://res.cloudinary.com/driutxwdh/image/upload/v1792192104/IMG_20241030_183956_261_biwjpv.jpg", 
                  caption: "Sunset Walks — Golden Hour Sky", 
                  isVideo: false 
                })}
                className="group relative rounded-xl overflow-hidden border border-slate-200/80 bg-slate-100 shadow-2xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer aspect-[4/3] w-full"
              >
                <div className="absolute top-2.5 left-2.5 z-10 bg-black/65 backdrop-blur-md border border-white/20 text-white text-[9px] sm:text-[10px] font-medium px-2 py-0.5 rounded-full flex items-center gap-1 shadow-md">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#F59E0B]" />
                  <span>Sunset Walks</span>
                </div>
                <SafeImage
                  src="https://res.cloudinary.com/driutxwdh/image/upload/v1792192104/IMG_20241030_183956_261_biwjpv.jpg"
                  alt="Sunset Sky"
                  fallbackType="dashboard"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Card 10: Book Cover "Piercing the Darkness" */}
              <div 
                onClick={() => setActiveFullscreenMedia({ 
                  src: "https://res.cloudinary.com/driutxwdh/image/upload/v1792191122/62c711a5-d033-4c43-9302-fca00b012fc1.png", 
                  caption: "Reading & Books — Piercing the Darkness by Frank E. Peretti", 
                  isVideo: false 
                })}
                className="group relative rounded-xl overflow-hidden border border-slate-200/80 bg-slate-100 shadow-2xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer flex-1 min-h-[160px] w-full"
              >
                <div className="absolute top-2.5 left-2.5 z-10 bg-black/65 backdrop-blur-md border border-white/20 text-white text-[9px] sm:text-[10px] font-medium px-2 py-0.5 rounded-full flex items-center gap-1 shadow-md">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#4F46E5]" />
                  <span>Books</span>
                </div>
                <SafeImage
                  src="https://res.cloudinary.com/driutxwdh/image/upload/v1792191122/62c711a5-d033-4c43-9302-fca00b012fc1.png"
                  alt="Piercing the Darkness"
                  fallbackType="dashboard"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Card 11: Green Nails & Laptop photo */}
              <div 
                onClick={() => setActiveFullscreenMedia({ 
                  src: "https://res.cloudinary.com/driutxwdh/image/upload/v1792189417/20250709_232748_ssyifq.jpg", 
                  caption: "Code, Craft & Daily Focus", 
                  isVideo: false 
                })}
                className="group relative rounded-xl overflow-hidden border border-slate-200/80 bg-slate-100 shadow-2xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer aspect-[4/3] w-full"
              >
                <div className="absolute top-2.5 left-2.5 z-10 bg-black/65 backdrop-blur-md border border-white/20 text-white text-[9px] sm:text-[10px] font-medium px-2 py-0.5 rounded-full flex items-center gap-1 shadow-md">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00A8A8]" />
                  <span>Craft & Focus</span>
                </div>
                <SafeImage
                  src="https://res.cloudinary.com/driutxwdh/image/upload/v1792189417/20250709_232748_ssyifq.jpg"
                  alt="Code, Craft & Green Nails"
                  fallbackType="dashboard"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

            {/* COLUMN 5 (2 cards): Sunset Walks video & Español & Culture video sit beside each other on mobile & tablet, and column stacked on desktop */}
            <div className="col-span-2 md:col-span-2 lg:col-span-1 grid grid-cols-2 lg:flex lg:flex-col gap-3 sm:gap-3.5 md:gap-4 h-full justify-between items-stretch">
              {/* Card 12: Walking Talking Video (Sunset Walks) */}
              <div 
                onClick={() => setActiveFullscreenMedia({ 
                  src: "https://res.cloudinary.com/driutxwdh/video/upload/v1792194687/walking-talking__sim7r5.mp4", 
                  caption: "Sunset Walks & Lifestyle Moments", 
                  isVideo: true 
                })}
                className="group relative rounded-xl overflow-hidden border border-slate-200/80 bg-slate-100 shadow-2xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer flex-1 h-full min-h-[220px] sm:min-h-[250px] w-full"
              >
                <div className="absolute top-2.5 left-2.5 z-10 bg-black/65 backdrop-blur-md border border-white/20 text-white text-[9px] sm:text-[10px] font-medium px-2 py-0.5 rounded-full flex items-center gap-1 shadow-md">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#F59E0B]" />
                  <span>Sunset Walks</span>
                </div>
                <video
                  src="https://res.cloudinary.com/driutxwdh/video/upload/v1792194687/walking-talking__sim7r5.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Card 13: Woman in Traditional Purple Dress & Gele Headwrap */}
              <div 
                onClick={() => setActiveFullscreenMedia({ 
                  src: "https://res.cloudinary.com/driutxwdh/video/upload/v1792190980/Snapchat-24019283_voq1zl.mp4", 
                  caption: "Español & Culture — Celebrations & Traditional Attire", 
                  isVideo: true 
                })}
                className="group relative rounded-xl overflow-hidden border border-slate-200/80 bg-slate-100 shadow-2xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer flex-1 h-full min-h-[220px] sm:min-h-[250px] w-full"
              >
                <div className="absolute top-2.5 left-2.5 z-10 bg-black/65 backdrop-blur-md border border-white/20 text-white text-[9px] sm:text-[10px] font-medium px-2 py-0.5 rounded-full flex items-center gap-1 shadow-md">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#EC4899]" />
                  <span>Español & Culture</span>
                </div>
                <video
                  src="https://res.cloudinary.com/driutxwdh/video/upload/v1792190980/Snapchat-24019283_voq1zl.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Experience Section - Follows naturally in document flow under Beyond The Screen */}
      <section className="relative z-20 mt-0 py-16 sm:py-20 px-4 sm:px-8 md:px-[60px] w-full mx-auto bg-[#F9F5EE] border-y border-[#F37335]/20 shadow-none">
        {/* Subtle ambient backdrop for background change */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#FFFDFB] via-[#F8F3EC] to-[#FAF5ED] pointer-events-none -z-10" />

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 pb-1">
          <div className="shrink-0">
            <span className="text-xs uppercase tracking-widest text-[#F37335] font-['Work_Sans',sans-serif] font-medium block mb-1">
              Career History
            </span>
            <h2 className="text-3xl sm:text-4xl font-medium tracking-tight text-[#18120F] font-['Cabinet_Grotesk',sans-serif]">
              Experience
            </h2>
          </div>
          <p className="text-base sm:text-[16px] text-[#18120F]/85 font-['Work_Sans',sans-serif] max-w-md lg:max-w-lg md:text-right leading-relaxed font-normal">
            A track record of shipping scalable platforms, intuitive dashboards, and technical MVPs that drive measurable business growth.
          </p>
        </div>

        {/* Experience Cards Stack: Reduced font-weight for company title (font-medium), thin bottom border line on hover */}
        <div className="space-y-0 flex flex-col">
          {experienceItems.map((item) => (
            <div 
              key={item.id}
              className="group relative w-full rounded-none border-b border-b-transparent hover:border-b-[#F37335] border-t-0 border-l-0 border-r-0 bg-white/80 backdrop-blur-md px-4 sm:px-6 py-7 sm:py-9 transition-all duration-300 shadow-none hover:shadow-none"
            >
              <div className="w-full">
                {/* Header Row: Company Title + Period Badge */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 mb-2">
                  <h3 className="experience-company-title text-xl sm:text-2xl font-medium leading-tight">
                    {item.company}
                  </h3>

                  {/* Period */}
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#FFF3ED] border border-[#F37335]/35 text-xs font-['Work_Sans',sans-serif] font-normal text-[#18120F] self-start sm:self-auto">
                    <Calendar className="w-3 h-3 text-[#F37335]" />
                    <span>{item.period}</span>
                  </span>
                </div>

                {/* Role: Work Sans CAPS 12px Medium font weight */}
                <div className="text-[12px] font-medium uppercase tracking-wider text-[#F37335] group-hover:text-[#BE5EC6] transition-colors duration-300 font-['Work_Sans',sans-serif] mb-2">
                  {item.role}
                </div>

                {/* Description as a list */}
                <ul className="list-disc pl-4 space-y-1.5 text-xs sm:text-sm text-[#18120F] font-['Work_Sans',sans-serif] leading-relaxed mb-3 max-w-3xl">
                  {item.description.split(/\r?\n|(?<=\.)\s+/).map(bullet => bullet.trim()).filter(Boolean).map((bullet, bIdx) => (
                    <li key={bIdx}>{bullet}</li>
                  ))}
                </ul>

                {/* Skill Pills */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {item.skills.map((skill, sIdx) => (
                    <span 
                      key={sIdx}
                      className="inline-flex items-center px-2.5 py-0.5 rounded-[14px] border border-[#F37335]/35 bg-[#FFF3ED] text-[10px] sm:text-[11px] font-['Work_Sans',sans-serif] font-normal uppercase text-[#18120F]"
                    >
                      • {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
    {/* End of Sticky Context Wrapper */}

      {/* Design Principles / Philosophy - Content width matches navbar padding (60px on desktop) */}
      <section className="relative z-20 py-16 px-4 sm:px-8 md:px-[60px] w-full mx-auto bg-[#FFFDFB]">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs uppercase tracking-widest text-[#F37335] font-['Work_Sans',sans-serif] font-medium block mb-2">
            Design Philosophy
          </span>
          <h2 className="text-3xl sm:text-4xl font-medium tracking-tight text-[#18120F] font-['Cabinet_Grotesk',sans-serif]">
            How I Approach Enterprise Products
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 sm:p-8 rounded-2xl bg-white/80 border border-[#F37335]/25 backdrop-blur-md shadow-xs flex flex-col justify-between">
            <div>
              <span className="text-2xl font-bold font-['Cabinet_Grotesk',sans-serif] text-[#F37335] block mb-3">01</span>
              <h3 className="text-xl font-medium text-[#18120F] font-['Cabinet_Grotesk',sans-serif] mb-2">
                Systems-First Architecture
              </h3>
              <p className="text-sm text-[#18120F] font-['Work_Sans',sans-serif] leading-relaxed">
                Design components are not just static drawings; they are scalable engineering contracts. Every token, variant, and state is mapped to eliminate development ambiguity.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs text-[#F37335] font-medium font-['Work_Sans',sans-serif]">
              <Layers className="w-4 h-4" />
              <span>Tokenized Consistency</span>
            </div>
          </div>

          <div className="p-6 sm:p-8 rounded-2xl bg-white/80 border border-[#BE5EC6]/25 backdrop-blur-md shadow-xs flex flex-col justify-between">
            <div>
              <span className="text-2xl font-bold font-['Cabinet_Grotesk',sans-serif] text-[#BE5EC6] block mb-3">02</span>
              <h3 className="text-xl font-medium text-[#18120F] font-['Cabinet_Grotesk',sans-serif] mb-2">
                Density With Cognitive Clarity
              </h3>
              <p className="text-sm text-[#18120F] font-['Work_Sans',sans-serif] leading-relaxed">
                Enterprise power-users require immense information density. The key is contextual gating, typographic hierarchy, and scannable visual patterns that prevent fatigue.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs text-[#BE5EC6] font-medium font-['Work_Sans',sans-serif]">
              <Cpu className="w-4 h-4" />
              <span>High-Throughput UX</span>
            </div>
          </div>

          <div className="p-6 sm:p-8 rounded-2xl bg-white/80 border border-[#F37335]/25 backdrop-blur-md shadow-xs flex flex-col justify-between">
            <div>
              <span className="text-2xl font-bold font-['Cabinet_Grotesk',sans-serif] text-[#F37335] block mb-3">03</span>
              <h3 className="text-xl font-medium text-[#18120F] font-['Cabinet_Grotesk',sans-serif] mb-2">
                Business-Driven Impact
              </h3>
              <p className="text-sm text-[#18120F] font-['Work_Sans',sans-serif] leading-relaxed">
                Aesthetics must move business metrics. Whether shortening incident resolution time by 62% or boosting customer activation by 25%, design serves tangible ROI.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs text-[#F37335] font-medium font-['Work_Sans',sans-serif]">
              <Target className="w-4 h-4" />
              <span>Measurable Outcomes</span>
            </div>
          </div>
        </div>
      </section>

      {/* Skills & Tools Section - Content width matches navbar padding (60px on desktop) */}
      <section className="relative z-20 py-16 px-4 sm:px-8 md:px-[60px] w-full mx-auto bg-[#FFFDFB]">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs uppercase tracking-widest text-[#F37335] font-['Work_Sans',sans-serif] font-medium block mb-2">
            Toolbox &amp; Methods
          </span>
          <h2 className="text-3xl font-medium tracking-tight text-[#18120F] font-['Cabinet_Grotesk',sans-serif]">
            Skills &amp; Competencies
          </h2>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-2.5 max-w-4xl mx-auto">
          {PORTFOLIO_DATA.skills.map((skill, idx) => (
            <span
              key={idx}
              className="px-4 py-2 rounded-full border border-slate-200/90 bg-white/90 text-xs sm:text-sm font-['Work_Sans',sans-serif] font-normal text-[#18120F] shadow-2xs hover:border-[#F37335] hover:text-[#F37335] transition-colors"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* Contact Section - Content width matches navbar padding (60px on desktop) */}
      <section id="contact" className="relative z-20 py-20 px-4 sm:px-8 md:px-[60px] w-full mx-auto text-center bg-[#FFFDFB]">
        <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-[#18120F] mb-4 font-['Cabinet_Grotesk',sans-serif]">
          Let’s Build Something <br className="hidden sm:inline" />
          <span className="gradient-text">Amazing Together</span>
        </h2>
        <p className="text-[16px] text-[#18120F] max-w-2xl mx-auto mb-14 font-['Work_Sans',sans-serif] leading-relaxed text-center">
          I’m always interested in hearing about new projects and opportunities. Whether you have a question or just want to say hi, feel free to reach out!
        </p>

        {/* Email Me Card styled like Testimonial Card with reduced height */}
        <div className="wp-testimonial-card-outer max-w-xl sm:max-w-2xl mx-auto w-full">
          <div className="wp-testimonial-card-inner !p-6 sm:!p-8 text-center flex flex-col items-center justify-center">
            {/* Centered Mail Icon */}
            <div className="w-12 h-12 rounded-xl bg-[#FFF3ED] border border-[#F37335]/30 flex items-center justify-center text-[#F37335] mb-3 shadow-2xs">
              <Mail className="w-6 h-6" />
            </div>

            {/* Heading */}
            <h3 className="text-[26px] font-medium text-[#18120F] mb-1 font-['Cabinet_Grotesk',sans-serif] text-center">
              Email Me
            </h3>

            {/* Body copy */}
            <p className="text-[18px] text-[#18120F] mb-4 font-['Work_Sans',sans-serif] text-center">
              For project enquiries and collaborations
            </p>

            {/* Email in Purple (#BE5EC6) with Copy Icon */}
            <div className="flex items-center justify-center gap-2 sm:gap-2.5 mb-5 flex-nowrap max-w-full">
              <span className="text-[13px] min-[360px]:text-[14px] min-[400px]:text-[16px] sm:text-xl font-semibold text-[#BE5EC6] whitespace-nowrap font-['Work_Sans',sans-serif] select-all cursor-text pointer-events-auto">
                {PORTFOLIO_DATA.profile.email}
              </span>
              <button
                onClick={handleCopyEmail}
                className="inline-flex items-center justify-center p-1.5 sm:p-2 rounded-xl bg-[#FAF0FC] hover:bg-[#FFF3ED] text-[#BE5EC6] hover:text-[#F37335] hover:border-[#F37335]/40 transition-all cursor-pointer border border-[#BE5EC6]/30 shadow-2xs active:scale-95 shrink-0"
                title="Copy email to clipboard"
                aria-label="Copy email to clipboard"
              >
                {copied ? (
                  <span className="flex items-center gap-1 text-xs font-semibold text-emerald-600">
                    <Check className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-600" /> Copied!
                  </span>
                ) : (
                  <Copy className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                )}
              </button>
            </div>

            {/* Social Icons at the bottom of the Email card, centered */}
            <div className="w-full pt-4 border-t border-slate-200/70 flex flex-col items-center">
              <p className="text-xs font-['Work_Sans',sans-serif] uppercase tracking-wider text-[#18120F] mb-3 font-medium">
                Connect &amp; Follow
              </p>
              <div className="flex items-center justify-center gap-3">
                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/orebamz/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full border border-slate-200/90 hover:border-[#F37335] bg-white/80 hover:bg-[#FFF3ED] text-[#18120F] hover:text-[#F37335] flex items-center justify-center transition-all duration-200 shadow-2xs hover:scale-105"
                  title="LinkedIn"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </a>

                {/* Dribbble */}
                <a
                  href="https://dribbble.com/orebamz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full border border-slate-200/90 hover:border-[#F37335] bg-white/80 hover:bg-[#FFF3ED] text-[#18120F] hover:text-[#F37335] flex items-center justify-center transition-all duration-200 shadow-2xs hover:scale-105"
                  title="Dribbble"
                  aria-label="Dribbble"
                >
                  <Dribbble className="w-4 h-4" />
                </a>

                {/* GitHub */}
                <a
                  href="https://github.com/orebamz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full border border-slate-200/90 hover:border-[#F37335] bg-white/80 hover:bg-[#FFF3ED] text-[#18120F] hover:text-[#F37335] flex items-center justify-center transition-all duration-200 shadow-2xs hover:scale-105"
                  title="GitHub"
                  aria-label="GitHub"
                >
                  <Github className="w-4 h-4" />
                </a>

                {/* Instagram */}
                <a
                  href="https://instagram.com/orebamz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full border border-slate-200/90 hover:border-[#F37335] bg-white/80 hover:bg-[#FFF3ED] text-[#18120F] hover:text-[#F37335] flex items-center justify-center transition-all duration-200 shadow-2xs hover:scale-105"
                  title="Instagram"
                  aria-label="Instagram"
                >
                  <Instagram className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-20 mt-28 sm:mt-40 border-t border-slate-200 py-10 px-4 sm:px-8 md:px-[60px] bg-white">
        <div className="w-full flex flex-col md:flex-row items-center justify-between gap-4">
          <button
            onClick={onNavigateHome}
            className="flex items-center gap-3 transition-opacity hover:opacity-80 cursor-pointer"
            title="Go to homepage"
            aria-label="Go to homepage"
          >
            <SafeImage
              src={PORTFOLIO_DATA.profile.logoFooter}
              alt="Logo"
              fallbackType="logo"
              title="AID"
              className="h-7 w-auto object-contain"
            />
          </button>

          <div className="text-xs text-[#18120F]">
            Copyright © 2026 | Powered by An Introverted Designer
          </div>
        </div>
      </footer>
    </div>
  );
};
