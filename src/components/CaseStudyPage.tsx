import React, { useState, useEffect, useRef } from 'react';
import { PORTFOLIO_DATA, ProjectItem } from '../data/portfolioData';
import { SafeImage } from './SafeImage';
import { 
  ArrowLeft, 
  ArrowRight,
  Mail, 
  Check, 
  Copy, 
  Linkedin, 
  Dribbble, 
  Github, 
  Instagram, 
  Menu, 
  X,
  ExternalLink,
  Layers,
  BarChart3,
  ShieldCheck,
  Zap,
  Target,
  Bot,
  CheckSquare,
  BookOpen,
  CloudLightning,
  Sliders,
  Maximize2,
  Palette,
  Boxes,
  SunMoon,
  Code2,
  Compass,
  Database,
  Users,
  Smartphone,
  Wallet,
  TrendingUp,
  MousePointerClick
} from 'lucide-react';

interface CaseStudyPageProps {
  projectId: string;
  onNavigateHome: () => void;
  onNavigateProjects: () => void;
  onNavigateAbout: () => void;
  onNavigateCaseStudy: (projectId: string) => void;
}

export const CaseStudyPage: React.FC<CaseStudyPageProps> = ({
  projectId,
  onNavigateHome,
  onNavigateProjects,
  onNavigateAbout,
  onNavigateCaseStudy
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [activeFullscreenImage, setActiveFullscreenImage] = useState<{ src: string; alt: string } | null>(null);

  // Close fullscreen image on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActiveFullscreenImage(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Scroll to top on mount or when projectId changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [projectId]);

  // Find project data
  const project = PORTFOLIO_DATA.projects.find((p) => p.id === projectId) || PORTFOLIO_DATA.projects[0];
  
  // Calculate next and previous project for seamless browsing (only available, unlocked projects)
  const availableProjects = PORTFOLIO_DATA.projects.filter((p) => !p.isLocked);
  const currentIndex = availableProjects.findIndex((p) => p.id === project.id);
  const safeCurrentIndex = currentIndex >= 0 ? currentIndex : 0;
  const nextProject = availableProjects[(safeCurrentIndex + 1) % availableProjects.length] || availableProjects[0];
  const prevProject = availableProjects[(safeCurrentIndex - 1 + availableProjects.length) % availableProjects.length] || availableProjects[0];

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    if (navigator.clipboard) {
      navigator.clipboard.writeText(PORTFOLIO_DATA.profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    }
  };

  const videoRef = useRef<HTMLVideoElement>(null);

  // Robust video autoplay handling across route and project changes
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.defaultMuted = true;
      videoRef.current.muted = true;
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // Auto-play was prevented; video will remain ready for interaction
        });
      }
    }
  }, [projectId, project.videoUrl]);

  // Intuitive icon resolver based on solution topic
  const getSolutionIcon = (title: string, description: string) => {
    const t = (title + " " + description).toLowerCase();
    if (t.includes('ai') || t.includes('gemini') || t.includes('knowledge') || t.includes('assistant') || t.includes('chat') || t.includes('streaming')) {
      return <Bot className="w-5 h-5" />;
    }
    if (t.includes('savings') || t.includes('wallet') || t.includes('refund') || t.includes('cost')) {
      return <Wallet className="w-5 h-5" />;
    }
    if (t.includes('split') || t.includes('group') || t.includes('squad') || t.includes('collaborative') || t.includes('share')) {
      return <Users className="w-5 h-5" />;
    }
    if (t.includes('task') || t.includes('workspace') || t.includes('checklist') || t.includes('execution') || t.includes('step') || t.includes('action')) {
      return <CheckSquare className="w-5 h-5" />;
    }
    if (t.includes('library') || t.includes('bookmark') || t.includes('social') || t.includes('reading') || t.includes('engagement') || t.includes('reader')) {
      return <BookOpen className="w-5 h-5" />;
    }
    if (t.includes('serverless') || t.includes('publishing') || t.includes('monetiz') || t.includes('paystack') || t.includes('backend') || t.includes('gating')) {
      return <CloudLightning className="w-5 h-5" />;
    }
    if (t.includes('progressive') || t.includes('disclosure') || t.includes('builder') || t.includes('form') || t.includes('quiz') || t.includes('micro-step')) {
      return <Sliders className="w-5 h-5" />;
    }
    if (t.includes('canvas') || t.includes('export') || t.includes('dpi') || t.includes('retina') || t.includes('render') || t.includes('png')) {
      return <Maximize2 className="w-5 h-5" />;
    }
    if (t.includes('theme') || t.includes('palette') || t.includes('aesthetic') || t.includes('color') || t.includes('style')) {
      return <Palette className="w-5 h-5" />;
    }
    if (t.includes('token') || t.includes('system') || t.includes('component') || t.includes('atomic') || t.includes('reusable')) {
      return <Boxes className="w-5 h-5" />;
    }
    if (t.includes('dual-theme') || t.includes('dark mode') || t.includes('semantic') || t.includes('contrast') || t.includes('light')) {
      return <SunMoon className="w-5 h-5" />;
    }
    if (t.includes('handoff') || t.includes('engineering') || t.includes('code') || t.includes('contract') || t.includes('tailwind')) {
      return <Code2 className="w-5 h-5" />;
    }
    if (t.includes('mobile') || t.includes('bottom sheet') || t.includes('screen') || t.includes('viewport') || t.includes('layout')) {
      return <Smartphone className="w-5 h-5" />;
    }
    if (t.includes('telemetry') || t.includes('map') || t.includes('gps') || t.includes('driver') || t.includes('tracking') || t.includes('courier')) {
      return <Compass className="w-5 h-5" />;
    }
    if (t.includes('inventory') || t.includes('database') || t.includes('pipeline') || t.includes('scan') || t.includes('batch')) {
      return <Database className="w-5 h-5" />;
    }
    if (t.includes('audit') || t.includes('regulatory') || t.includes('compliance') || t.includes('prescript') || t.includes('safety')) {
      return <ShieldCheck className="w-5 h-5" />;
    }
    if (t.includes('checkout') || t.includes('express') || t.includes('speed') || t.includes('fast') || t.includes('conversion')) {
      return <Zap className="w-5 h-5" />;
    }
    return <Zap className="w-5 h-5" />;
  };

  return (
    <div className="min-h-screen bg-[#FFFDFB] text-[#18120F] font-['Work_Sans',sans-serif] selection:bg-[#F37335]/20 selection:text-[#18120F]">
      {/* Floating Glassmorphism Navbar - Full width respecting 60px padding on desktop (down 8px on mobile) */}
      <header className="fixed top-2 sm:top-1 left-0 right-0 z-40 w-full px-4 sm:px-8 md:px-[60px] pointer-events-none">
        <div className="glass-header pointer-events-auto w-full px-5 sm:px-8 py-3.5 md:py-4 min-h-[56px] md:min-h-[60px] flex items-center justify-between gap-4">
          {/* Logo linked to home */}
          <button 
            onClick={onNavigateHome}
            className="flex items-center gap-3 group focus:outline-none cursor-pointer"
            aria-label="Go to homepage"
          >
            <SafeImage
              src={PORTFOLIO_DATA.profile.logoNav}
              alt="An Introverted Designer Logo"
              fallbackType="logo"
              title="AID"
              className="h-7 md:h-8 w-auto object-contain transition-transform group-hover:scale-[1.02]"
            />
          </button>

          {/* Desktop Nav - Clean links, no CONTACT */}
          <nav className="hidden md:flex items-center gap-8 font-['Work_Sans',sans-serif] font-medium text-[12px] tracking-wider uppercase">
            <button 
              onClick={onNavigateProjects} 
              className="text-[#F37335] font-semibold transition-colors cursor-pointer"
            >
              PROJECTS
            </button>
            <button 
              onClick={onNavigateAbout} 
              className="text-[#18120F] hover:text-[#F37335] transition-colors cursor-pointer"
            >
              ABOUT
            </button>
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
                src={PORTFOLIO_DATA.profile.avatar}
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
              className="md:hidden p-2 text-[#18120F] hover:text-[#BE5EC6] transition-colors"
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
              className="py-2.5 px-3.5 rounded-xl bg-[#FFF5ED] text-[#F37335] text-left font-semibold cursor-pointer"
            >
              PROJECTS
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onNavigateAbout();
              }}
              className="py-2.5 px-3.5 rounded-xl hover:bg-[#FAF0FC] hover:text-[#BE5EC6] text-[#18120F] text-left transition-colors cursor-pointer"
            >
              ABOUT
            </button>
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

      {/* Case Study Hero Section */}
      {/* Hero Section */}
      <section className="relative pt-32 sm:pt-36 pb-16 px-4 sm:px-6 md:px-8 max-w-5xl mx-auto overflow-hidden">
        {/* Ambient liquid backdrop behind section bg */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden -z-20">
          <div className="liquid-rolling-ribbon -top-16 left-1/4 opacity-60" />
          <div className="liquid-glass-blob top-1/3 -right-20 opacity-50" />
        </div>
        <div className="absolute inset-0 bg-[#FFFDFB]/85 backdrop-blur-[45px] pointer-events-none -z-10" />

        <div className="relative z-10">
          {/* Breadcrumb Navigation & View Live Project link opposite */}
          <div className="flex items-center justify-between gap-4 mb-8 flex-wrap">
            <div className="flex items-center gap-2 text-xs text-[#18120F]/70 font-['Work_Sans',sans-serif]">
              <button 
                className="cursor-pointer hover:text-[#F37335] transition-colors" 
                onClick={onNavigateHome}
              >
                Home
              </button>
              <span className="text-[#18120F]/40">/</span>
              <button 
                className="cursor-pointer hover:text-[#F37335] transition-colors" 
                onClick={onNavigateProjects}
              >
                Projects
              </button>
              <span className="text-[#18120F]/40">/</span>
              <span className="text-[#18120F] font-semibold">{project.title}</span>
            </div>

            {/* View Live Project link opposite breadcrumbs (Removed from SignalADoc, in brand orange turning purple on hover) */}
            {(project.id !== 'signaladoc' && project.id !== 'snapvista' && (project.liveUrl || project.link || project.id === 'drg' || project.id === 'pdfguidestack')) && (
              <a
                href={project.liveUrl || project.link || (project.id === 'drg' ? 'https://datingresumegenerator.com' : 'https://pdfguidestack.com')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 bg-transparent hover:bg-transparent text-[#F37335] hover:text-[#BE5EC6] border-0 shadow-none text-[11px] sm:text-xs font-semibold tracking-wider uppercase transition-colors group cursor-pointer"
                title="Open live project in new tab"
              >
                <span>View Live Project</span>
                <ExternalLink className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-current" />
              </a>
            )}
          </div>

          {/* Title & Tagline */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-[#18120F] font-['Cabinet_Grotesk',sans-serif] mb-6 leading-[1.12]">
            {project.title}
          </h1>

          {/* Subheadline reduced in size by 4px */}
          <p className="text-sm sm:text-base md:text-[18px] text-[#18120F]/85 font-['Work_Sans',sans-serif] leading-relaxed max-w-3xl mb-8 font-normal">
            {project.tagline || project.description}
          </p>

          {/* Impact Pills */}
          <div className="flex flex-wrap gap-2.5 mb-10">
            {project.metrics.map((metric, idx) => (
              <div 
                key={idx}
                className="inline-flex items-center px-4 py-1.5 rounded-[20px] border border-[#F37335] bg-[#FFF3ED] text-[11.5px] font-['Work_Sans',sans-serif] font-normal tracking-wider uppercase text-[#18120F] shadow-2xs"
              >
                <span className="leading-normal text-[#18120F] font-normal">
                  • {metric.replace(/^[•\-\*]\s*/, '')}
                </span>
              </div>
            ))}
          </div>

          {/* Meta Attributes Strip (Industry, Role, Duration, Tools) */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-5 sm:p-6 rounded-xl bg-white/75 backdrop-blur-md border border-[#F37335]/25 shadow-xs mb-12">
            <div>
              <span className="block text-[11px] uppercase tracking-wider text-[#18120F]/60 font-medium mb-1">
                Industry
              </span>
              <p className="text-sm font-normal text-[#18120F]">
                {project.industry}
              </p>
            </div>
            <div>
              <span className="block text-[11px] uppercase tracking-wider text-[#18120F]/60 font-medium mb-1">
                Role & Focus
              </span>
              <p className="text-sm font-normal text-[#18120F]">
                {project.role || "Lead UI/UX Designer"}
              </p>
            </div>
            <div>
              <span className="block text-[11px] uppercase tracking-wider text-[#18120F]/60 font-medium mb-1">
                Duration
              </span>
              <p className="text-sm font-normal text-[#18120F]">
                {project.timeline || "6 Months"}
              </p>
            </div>
            <div>
              <span className="block text-[11px] uppercase tracking-wider text-[#18120F]/60 font-medium mb-1">
                Key Stack
              </span>
              <p className="text-sm font-normal text-[#18120F]">
                {project.tools ? project.tools.join(", ") : "Figma, React, Tokens"}
              </p>
            </div>
          </div>
        </div>

        {/* Hero Mockup Showcase */}
        <div className="relative rounded-xl overflow-hidden border border-[#F37335]/30 bg-white shadow-[0_20px_50px_rgba(243,115,53,0.12)]">
          <div className="bg-[#FAF8F5] border-b border-slate-200/80 px-4 py-3 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-[#F37335]/40" />
              <div className="w-3 h-3 rounded-full bg-[#F5AF19]/40" />
              <div className="w-3 h-3 rounded-full bg-[#BE5EC6]/40" />
            </div>
            <div className="text-xs font-mono text-[#18120F]/50 px-4 py-1 rounded-md bg-white border border-slate-200/60 max-w-xs truncate">
              {project.link || `app.${project.id}.internal/console`}
            </div>
            <div className="w-12" />
          </div>

          <div 
            onClick={() => setActiveFullscreenImage({ src: project.image, alt: `${project.title} Interface Master Showcase` })}
            className="relative aspect-[16/10] sm:aspect-[16/9] w-full bg-slate-50 flex items-center justify-center overflow-hidden cursor-pointer group"
            title="Click to view full screen"
          >
            <SafeImage
              src={project.image}
              alt={`${project.title} Interface Master Showcase`}
              fallbackType="dashboard"
              title={project.title}
              className="w-full h-full object-cover object-top group-hover:scale-102 transition-transform duration-500"
            />
            <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-black/75 backdrop-blur-xs text-white text-[11px] px-2.5 py-1 rounded-full flex items-center gap-1.5 shadow-md">
              <MousePointerClick className="w-3.5 h-3.5 text-[#F37335]" />
              <span>Click to view full screen</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Case Study Body */}
      <section className="relative py-12 px-4 sm:px-6 md:px-8 max-w-5xl mx-auto space-y-28 sm:space-y-36">
        {/* Executive Overview & Project Goals */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          <div className="md:col-span-5">
            <span className="text-xs font-semibold text-[#F37335] uppercase tracking-widest block mb-2">
              Executive Overview
            </span>
            <h2 className="text-2xl sm:text-3xl font-medium font-['Cabinet_Grotesk',sans-serif] text-[#18120F] leading-tight mb-4">
              {project.overviewHeading || "Transforming complex workflows into actionable clarity."}
            </h2>

            {/* Scope of Deliverables directly under Executive Overview Heading */}
            {project.deliverables && (
              <div className="pt-2 pb-4">
                <span className="block text-xs uppercase tracking-wider text-[#18120F]/70 font-semibold mb-3">
                  Scope of Deliverables
                </span>
                <div className="flex flex-wrap gap-2">
                  {project.deliverables.map((item, dIdx) => (
                    <span 
                      key={dIdx}
                      className="px-3 py-1 text-xs rounded-md bg-white border border-slate-200 font-medium text-[#18120F]"
                    >
                      ✓ {item}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
          <div className="md:col-span-7 space-y-4 text-base sm:text-lg text-[#18120F]/90 leading-relaxed font-normal">
            {(project.overview || project.description).split(/\n\s*\n/).map((para, pIdx) => (
              <p key={pIdx}>
                {para}
              </p>
            ))}
          </div>
        </div>

        {/* The Core Challenges */}
        {project.challenges && project.challenges.length > 0 && (
          <div className="space-y-8">
            <div className="text-center max-w-2xl mx-auto">
              <span className="text-xs font-semibold text-[#F37335] uppercase tracking-widest block mb-2">
                Problem Space
              </span>
              <h2 className="text-2xl sm:text-4xl font-medium font-['Cabinet_Grotesk',sans-serif] text-[#18120F]">
                The Friction Points
              </h2>
              <p className="text-sm sm:text-base text-[#18120F]/80 mt-2">
                Critical bottlenecks identified during stakeholder and user discovery.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {project.challenges.map((c, cIdx) => (
                <div 
                  key={cIdx}
                  className="p-6 rounded-xl bg-white/80 backdrop-blur-sm border border-[#F37335]/25 shadow-xs flex flex-col justify-between"
                >
                  <div>
                    <span className="text-2xl font-['Cabinet_Grotesk',sans-serif] font-bold text-[#F37335] block mb-3">
                      0{cIdx + 1}
                    </span>
                    <h3 className="text-lg font-semibold text-[#18120F] mb-2 leading-snug">
                      {c.title}
                    </h3>
                    <p className="text-sm text-[#18120F]/85 leading-relaxed font-normal">
                      {c.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* The Strategic Solutions */}
        {project.solutions && project.solutions.length > 0 && (
          <div className="space-y-8">
            <div className="text-center max-w-2xl mx-auto">
              <span className="text-xs font-semibold text-[#BE5EC6] uppercase tracking-widest block mb-2">
                Design &amp; Technical Architecture
              </span>
              <h2 className="text-2xl sm:text-4xl font-medium font-['Cabinet_Grotesk',sans-serif] text-[#18120F]">
                {(project.id === 'drg' || project.id === 'pdfguidestack')
                  ? 'Key Design & Technical Interventions'
                  : 'Key Design Interventions'}
              </h2>
              <p className="text-sm sm:text-base text-[#18120F]/80 mt-2">
                Engineered solutions designed for density, accessibility, and high adoption.
              </p>
            </div>

            {/* 3 or 4 cards: 4 cards stack 2 by 2, 3 cards on one line on desktop */}
            <div className={`grid ${project.solutions.length === 4 ? 'grid-cols-1 sm:grid-cols-2' : project.solutions.length === 3 ? 'grid-cols-1 md:grid-cols-3' : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4'} gap-6`}>
              {project.solutions.map((s, sIdx) => (
                <div 
                  key={sIdx}
                  className="p-6 rounded-xl bg-gradient-to-br from-white/95 to-[#FFF7F2]/90 border border-[#BE5EC6]/30 shadow-xs flex flex-col justify-between"
                >
                  <div>
                    <div className="w-10 h-10 rounded-lg bg-[#BE5EC6]/10 flex items-center justify-center text-[#BE5EC6] mb-4">
                      {getSolutionIcon(s.title, s.description)}
                    </div>
                    <h3 className="text-lg font-semibold text-[#18120F] mb-2 leading-snug">
                      {s.title}
                    </h3>
                    <p className="text-sm text-[#18120F]/85 leading-relaxed font-normal">
                      {s.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Design Intervention Visual Cards (Renders project.interventionImages if available) */}
            {project.interventionImages && project.interventionImages.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-3">
                {project.interventionImages.map((imgItem, imgIdx) => (
                  <div key={imgIdx} className="rounded-lg overflow-hidden border border-[#BE5EC6]/30 bg-white/95 shadow-xs group">
                    <div 
                      onClick={() => setActiveFullscreenImage({ src: imgItem.url, alt: imgItem.caption || `${project.title} Design Intervention ${imgIdx + 1}` })}
                      className="relative h-64 sm:h-80 w-full overflow-hidden bg-slate-100 flex items-center justify-center cursor-pointer group"
                      title="Click to view full screen"
                    >
                      {imgItem.url.includes('.mp4') || imgItem.url.includes('/video/upload/') ? (
                        <video
                          src={imgItem.url}
                          autoPlay
                          loop
                          muted
                          playsInline
                          className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                        />
                      ) : (
                        <SafeImage
                          src={imgItem.url}
                          alt={imgItem.caption || `${project.title} Design Intervention ${imgIdx + 1}`}
                          fallbackType="dashboard"
                          className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                        />
                      )}
                      <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-black/75 backdrop-blur-xs text-white text-[11px] px-2.5 py-1 rounded-full flex items-center gap-1.5 shadow-md">
                        <MousePointerClick className="w-3.5 h-3.5 text-[#F37335]" />
                        <span>Click to view full screen</span>
                      </div>
                    </div>
                    {imgItem.caption && (
                      <div className="p-3 bg-white border-t border-slate-100">
                        <p className="text-[11.5px] sm:text-xs font-normal text-[#18120F]/80 truncate font-['Work_Sans',sans-serif]" title={imgItem.caption}>
                          {imgItem.caption}
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-3">
                <div className="rounded-lg overflow-hidden border border-[#BE5EC6]/30 bg-white/95 shadow-xs group">
                  <div 
                    onClick={() => setActiveFullscreenImage({ src: project.image, alt: `${project.title} Interface System Architecture` })}
                    className="relative h-64 sm:h-80 w-full overflow-hidden bg-slate-100 cursor-pointer group"
                    title="Click to view full screen"
                  >
                    <SafeImage
                      src={project.image}
                      alt={`${project.title} Interface System Architecture`}
                      fallbackType="dashboard"
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-black/75 backdrop-blur-xs text-white text-[11px] px-2.5 py-1 rounded-full flex items-center gap-1.5 shadow-md">
                      <MousePointerClick className="w-3.5 h-3.5 text-[#F37335]" />
                      <span>Click to view full screen</span>
                    </div>
                  </div>
                  <div className="p-3 bg-white border-t border-slate-100">
                    <p className="text-[11.5px] sm:text-xs font-normal text-[#18120F]/80 truncate font-['Work_Sans',sans-serif]" title="Systemic design tokens, interactive component states & responsive typography">
                      Systemic design tokens, interactive component states &amp; responsive typography
                    </p>
                  </div>
                </div>

                <div className="rounded-lg overflow-hidden border border-[#F37335]/30 bg-white/95 shadow-xs group">
                  <div 
                    onClick={() => setActiveFullscreenImage({ src: "https://res.cloudinary.com/driutxwdh/image/upload/v1791243680/Gemini_Generated_Image_nh7u19nh7u19nh7u_1_o8l0vl.jpg", alt: `${project.title} High-Throughput UX Canvas` })}
                    className="relative h-64 sm:h-80 w-full overflow-hidden bg-slate-100 cursor-pointer group"
                    title="Click to view full screen"
                  >
                    <SafeImage
                      src="https://res.cloudinary.com/driutxwdh/image/upload/v1791243680/Gemini_Generated_Image_nh7u19nh7u19nh7u_1_o8l0vl.jpg"
                      alt={`${project.title} High-Throughput UX Canvas`}
                      fallbackType="dashboard"
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-black/75 backdrop-blur-xs text-white text-[11px] px-2.5 py-1 rounded-full flex items-center gap-1.5 shadow-md">
                      <MousePointerClick className="w-3.5 h-3.5 text-[#F37335]" />
                      <span>Click to view full screen</span>
                    </div>
                  </div>
                  <div className="p-3 bg-white border-t border-slate-100">
                    <p className="text-[11.5px] sm:text-xs font-normal text-[#18120F]/80 truncate font-['Work_Sans',sans-serif]" title="Contextual guidance, proactive state feedbacks & frictionless batch actions">
                      Contextual guidance, proactive state feedbacks &amp; frictionless batch actions
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Methodology: Open unboxed timeline architecture - Removed from the card */}
        {project.process && project.process.length > 0 && (
          <div className="space-y-10 py-4">
            <div>
              <span className="text-xs font-semibold text-[#F37335] uppercase tracking-widest block mb-2">
                Methodology
              </span>
              <h2 className="text-2xl sm:text-4xl font-medium font-['Cabinet_Grotesk',sans-serif] text-[#18120F]">
                How We Designed &amp; Validated It
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {project.process.map((step, pIdx) => (
                <div 
                  key={pIdx} 
                  className="relative flex flex-col space-y-3 group"
                >
                  {/* Phase header with clean top track line that highlights on hover */}
                  <div className="pt-4 border-t-2 border-[#F37335]/35 group-hover:border-[#F37335] transition-colors duration-300">
                    <span className="text-xs font-['Work_Sans',sans-serif] font-medium text-[#F37335] tracking-wider block mb-1.5">
                      PHASE {step.step}
                    </span>
                    <h4 className="text-base sm:text-lg font-semibold text-[#18120F] leading-snug">
                      {step.title}
                    </h4>
                  </div>
                  <p className="text-xs sm:text-sm text-[#18120F]/80 leading-relaxed font-normal">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Measurable Business Outcomes & Metrics */}
        {project.outcomes && project.outcomes.length > 0 && (
          <div className="space-y-6">
            <div className="text-center max-w-xl mx-auto">
              <span className="text-xs font-semibold text-[#F37335] uppercase tracking-widest block mb-2">
                Business ROI
              </span>
              <h2 className="text-2xl sm:text-4xl font-medium font-['Cabinet_Grotesk',sans-serif] text-[#18120F]">
                Measurable Impact Delivered
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {project.outcomes.map((out, oIdx) => (
                <div 
                  key={oIdx}
                  className="p-6 rounded-xl bg-white border border-[#F37335]/30 shadow-xs text-center space-y-2"
                >
                  <span className="text-4xl sm:text-5xl font-['Cabinet_Grotesk',sans-serif] font-bold text-[#F37335] block">
                    {out.stat}
                  </span>
                  <h4 className="text-sm font-semibold uppercase tracking-wider text-[#18120F]">
                    {out.label}
                  </h4>
                  <p className="text-xs text-[#18120F]/80 font-normal leading-relaxed">
                    {out.description}
                  </p>
                </div>
              ))}
            </div>

            {/* 2 Featured Business ROI Visual Cards (Always renders 2 cards) */}
            {(() => {
              const outcomeList = project.outcomeImages && project.outcomeImages.length > 0
                ? [
                    project.outcomeImages[0],
                    project.outcomeImages[1] || {
                      url: project.image || "https://res.cloudinary.com/driutxwdh/image/upload/v1778757166/Dashboard_m3xgei.png",
                      caption: `${project.title} Operational Performance & System Architecture`
                    }
                  ]
                : [
                    {
                      url: "https://res.cloudinary.com/driutxwdh/image/upload/v1792374215/Dashboard_-_Home_Base-_phgga5.jpg",
                      caption: "Quarter-over-quarter engagement surge & reduced customer onboarding friction"
                    },
                    {
                      url: "https://res.cloudinary.com/driutxwdh/image/upload/v1778757166/Dashboard_m3xgei.png",
                      caption: "100% token adoption across squads with zero UI regressions"
                    }
                  ];

              return (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-3">
                  {outcomeList.map((imgItem, imgIdx) => (
                    <div key={imgIdx} className="rounded-lg overflow-hidden border border-[#F37335]/30 bg-white/95 shadow-xs group">
                      <div 
                        onClick={() => setActiveFullscreenImage({ src: imgItem.url, alt: imgItem.caption || `${project.title} Business ROI ${imgIdx + 1}` })}
                        className="relative h-64 sm:h-80 w-full overflow-hidden bg-slate-100 flex items-center justify-center cursor-pointer group"
                        title="Click to view full screen"
                      >
                        <SafeImage
                          src={imgItem.url}
                          alt={imgItem.caption || `${project.title} Business ROI ${imgIdx + 1}`}
                          fallbackType="dashboard"
                          className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-black/75 backdrop-blur-xs text-white text-[11px] px-2.5 py-1 rounded-full flex items-center gap-1.5 shadow-md">
                          <MousePointerClick className="w-3.5 h-3.5 text-[#F37335]" />
                          <span>Click to view full screen</span>
                        </div>
                      </div>
                      {imgItem.caption && (
                        <div className="p-3 bg-white border-t border-slate-100">
                          <p className="text-[11.5px] sm:text-xs font-normal text-[#18120F]/80 truncate font-['Work_Sans',sans-serif]" title={imgItem.caption}>
                            {imgItem.caption}
                          </p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              );
            })()}

            {/* Large Interactive Video Card Under Measurable Impact */}
            <div className="pt-6">
              <div className="rounded-xl overflow-hidden border border-[#F37335]/30 bg-white shadow-md group">
                {/* Video Window Top Bar */}
                <div className="px-4 py-3 bg-[#18120F] text-white flex items-center justify-between border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#EF4444]/90 inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#F59E0B]/90 inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#10B981]/90 inline-block" />
                    <span className="ml-2 text-xs font-mono text-slate-300 font-medium">
                      {project.title} — Interface Walkthrough &amp; Interaction Architecture
                    </span>
                  </div>
                  <span className="text-[10px] uppercase font-mono tracking-widest text-[#F37335] font-semibold bg-[#F37335]/20 px-2.5 py-0.5 rounded-full border border-[#F37335]/30">
                    Live Demo
                  </span>
                </div>

                {/* Video Player / Animated Showcase Container */}
                <div className="relative aspect-video w-full bg-slate-900 overflow-hidden flex items-center justify-center">
                  {(project.videoUrl?.includes('.gif') || project.videoUrl?.includes('Animate_')) ? (
                    <img
                      src={project.videoUrl}
                      alt={`${project.title} Interface Demonstration`}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <video
                      ref={videoRef}
                      autoPlay
                      muted
                      loop
                      controls
                      playsInline
                      poster={project.image}
                      className="w-full h-full object-cover"
                      src={project.videoUrl || (project.id === 'drg' ? "https://res.cloudinary.com/driutxwdh/video/upload/v1791378009/SHowcase_WOrk_DRG_ryyccm.mp4" : "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4")}
                    >
                      Your browser does not support the video tag.
                    </video>
                  )}
                </div>

                {/* Description under Video: Smaller and regular font weight */}
                <div className="p-3 bg-white border-t border-slate-100 flex items-center justify-between gap-4">
                  <p className="text-[11.5px] sm:text-xs font-normal text-[#18120F]/80 truncate font-['Work_Sans',sans-serif]" title="End-to-end interface execution: High-density interactive workflows, component states & responsiveness">
                    End-to-end interface execution: High-density interactive workflows, component states &amp; responsiveness
                  </p>
                  <span className="text-[10px] uppercase font-mono text-[#F37335] tracking-widest shrink-0 font-medium">
                    HD • 60 FPS
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* New Combined Section: Left-aligned Testimonial & Let's Build Something Amazing Together */}
        <section id="contact" className="mt-16 sm:mt-20 pt-14 border-t border-slate-200/80">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
            {/* Left Column: Left-aligned Testimonial styled like homepage testimonial cards */}
            <div className="lg:col-span-6 flex flex-col">
              <div className="wp-testimonial-card-outer h-full">
                <div className="wp-testimonial-card-inner">
                  {/* Top Quote Box with bottom border */}
                  <div className="wp-testimonial-quote-box">
                    <p className="wp-testimonial-quote-text">
                      {project.quote?.text || "Esther’s mastery of scalable design systems is incredible. She built an adaptive framework that effortlessly organizes dense data and accelerates engineering speed."}
                    </p>
                  </div>

                  {/* Bottom Author Box */}
                  <div className="wp-testimonial-author-box">
                    <h5 className="wp-testimonial-author-name">
                      {project.quote?.author || "Barbara Russo"}
                    </h5>
                    <p className="wp-testimonial-author-role">
                      {project.quote?.role || "HEAD OF MARKETING"}
                    </p>
                    <h5 className="wp-testimonial-author-company">
                      {project.quote?.company || "SNAPVISTA"}
                    </h5>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Let's Build Something Amazing Together - Centered & No Subheading */}
            <div className="lg:col-span-6 flex flex-col items-center justify-center text-center p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-[#FFF5ED] via-white to-[#FAF0FC] border border-[#BE5EC6]/30 shadow-xs space-y-6">
              <div className="flex flex-col items-center text-center">
                <span className="text-xs font-semibold uppercase tracking-widest text-[#F37335] block mb-2 font-['Work_Sans',sans-serif]">
                  Get In Touch
                </span>
                <h3 className="text-2xl sm:text-3xl font-medium tracking-tight text-[#18120F] font-['Cabinet_Grotesk',sans-serif] text-center leading-snug">
                  Let’s Build Something <br className="hidden sm:inline" />
                  <span className="gradient-text">Amazing Together</span>
                </h3>
              </div>

              <div className="space-y-3.5 w-full max-w-[280px] mx-auto">
                {/* Email with copy icon */}
                <div className="flex items-center justify-between gap-3 px-4 py-2.5 rounded-full bg-white border border-[#BE5EC6]/30 shadow-2xs">
                  <span className="text-xs sm:text-sm font-semibold text-[#BE5EC6] truncate font-['Work_Sans',sans-serif] select-all">
                    anintroverteddesigner@gmail.com
                  </span>
                  <button
                    onClick={handleCopyEmail}
                    className="p-1.5 rounded-lg hover:bg-[#FFF3ED] text-[#BE5EC6] hover:text-[#F37335] transition-all cursor-pointer shrink-0 active:scale-95"
                    title="Copy email address"
                    aria-label="Copy email address"
                  >
                    {copied ? (
                      <span className="flex items-center gap-1 text-[11px] font-semibold text-emerald-600">
                        <Check className="w-3.5 h-3.5 text-emerald-600" /> Copied!
                      </span>
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>

                {/* Work With Me Button */}
                <div>
                  <a
                    href="https://cal.com/anintroverteddesigner/30min"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="gradient-stroke-btn inline-flex w-full text-center"
                  >
                    <span 
                      className="gradient-stroke-btn-inner w-full !text-[12px] font-semibold uppercase tracking-wider !py-2.5 text-[#18120F] leading-none text-center"
                      style={{ fontSize: '12px' }}
                    >
                      WORK WITH ME
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Next / Previous Project Navigation Switcher with Project Images */}
        <div className="mt-28 sm:mt-36 pt-16 sm:pt-20 border-t border-slate-200/80">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {/* Previous Project Card: Arrow + Text on left, Big Expanded Image on right taking up all available space */}
            <button
              onClick={() => onNavigateCaseStudy(prevProject.id)}
              className="p-4 sm:p-5 rounded-xl border border-[#F37335]/25 bg-white/95 hover:bg-white hover:border-[#F37335] transition-all duration-300 text-left flex items-center justify-between gap-4 sm:gap-5 group cursor-pointer shadow-2xs hover:shadow-md min-h-[130px] sm:min-h-[160px]"
            >
              <div className="flex items-center gap-3 shrink-0 max-w-[42%] min-w-[125px] sm:min-w-[150px]">
                <ArrowLeft className="w-5 h-5 text-[#F37335] shrink-0 transition-transform group-hover:-translate-x-1" />
                
                <div className="min-w-0">
                  <span className="block text-[11px] uppercase tracking-wider text-[#F37335] font-semibold mb-0.5">
                    Previous Project
                  </span>
                  <span className="text-base sm:text-lg font-bold text-[#18120F] group-hover:text-[#F37335] transition-colors leading-snug line-clamp-1 block font-['Cabinet_Grotesk',sans-serif]">
                    {prevProject.title}
                  </span>
                  <span className="text-xs text-[#18120F]/70 font-['Work_Sans',sans-serif] line-clamp-1 block mt-0.5">
                    {prevProject.industry}
                  </span>
                </div>
              </div>

              {/* Expanded Project Image taking up all available space */}
              <div className="flex-1 h-28 sm:h-36 md:h-40 rounded-lg overflow-hidden bg-slate-100 border border-slate-200/80 shadow-2xs">
                <SafeImage
                  src={prevProject.image}
                  alt={prevProject.title}
                  fallbackType="dashboard"
                  title={prevProject.title}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </button>

            {/* Next Project Card: Big Expanded Image on left taking up all available space, Text + Arrow on right */}
            <button
              onClick={() => onNavigateCaseStudy(nextProject.id)}
              className="p-4 sm:p-5 rounded-xl border border-[#BE5EC6]/25 bg-white/95 hover:bg-white hover:border-[#BE5EC6] transition-all duration-300 text-right flex items-center justify-between gap-4 sm:gap-5 group cursor-pointer shadow-2xs hover:shadow-md min-h-[130px] sm:min-h-[160px]"
            >
              {/* Expanded Project Image on the left taking up all available space */}
              <div className="flex-1 h-28 sm:h-36 md:h-40 rounded-lg overflow-hidden bg-slate-100 border border-slate-200/80 shadow-2xs">
                <SafeImage
                  src={nextProject.image}
                  alt={nextProject.title}
                  fallbackType="dashboard"
                  title={nextProject.title}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="flex items-center justify-end gap-3 shrink-0 max-w-[42%] min-w-[125px] sm:min-w-[150px]">
                <div className="min-w-0 text-right">
                  <span className="block text-[11px] uppercase tracking-wider text-[#BE5EC6] font-semibold mb-0.5">
                    Next Project
                  </span>
                  <span className="text-base sm:text-lg font-bold text-[#18120F] group-hover:text-[#BE5EC6] transition-colors leading-snug line-clamp-1 block font-['Cabinet_Grotesk',sans-serif]">
                    {nextProject.title}
                  </span>
                  <span className="text-xs text-[#18120F]/70 font-['Work_Sans',sans-serif] line-clamp-1 block mt-0.5">
                    {nextProject.industry}
                  </span>
                </div>

                <ArrowRight className="w-5 h-5 text-[#BE5EC6] shrink-0 transition-transform group-hover:translate-x-1" />
              </div>
            </button>
          </div>
        </div>
      </section>

      {/* Footer with social links - Generous gap above footer */}
      <footer className="mt-28 sm:mt-40 py-12 px-4 text-center border-t border-slate-200/60 text-xs text-[#18120F]/60">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <button
            onClick={onNavigateHome}
            className="flex items-center gap-2 group cursor-pointer"
          >
            <SafeImage
              src={PORTFOLIO_DATA.profile.logoFooter}
              alt="An Introverted Designer"
              fallbackType="logo"
              title="AID"
              className="h-6 w-auto object-contain transition-opacity group-hover:opacity-80"
            />
          </button>

          {/* Social Icons in footer */}
          <div className="flex items-center justify-center gap-2.5">
            <a
              href="https://www.linkedin.com/in/orebamz/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full border border-slate-200/90 hover:border-[#F37335] bg-white/80 hover:bg-[#FFF3ED] text-[#18120F] hover:text-[#F37335] flex items-center justify-center transition-all duration-200 shadow-2xs hover:scale-105"
              title="LinkedIn"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-3.5 h-3.5" />
            </a>
            <a
              href="https://dribbble.com/orebamz"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full border border-slate-200/90 hover:border-[#F37335] bg-white/80 hover:bg-[#FFF3ED] text-[#18120F] hover:text-[#F37335] flex items-center justify-center transition-all duration-200 shadow-2xs hover:scale-105"
              title="Dribbble"
              aria-label="Dribbble"
            >
              <Dribbble className="w-3.5 h-3.5" />
            </a>
            <a
              href="https://github.com/orebamz"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full border border-slate-200/90 hover:border-[#F37335] bg-white/80 hover:bg-[#FFF3ED] text-[#18120F] hover:text-[#F37335] flex items-center justify-center transition-all duration-200 shadow-2xs hover:scale-105"
              title="GitHub"
              aria-label="GitHub"
            >
              <Github className="w-3.5 h-3.5" />
            </a>
            <a
              href="https://instagram.com/orebamz"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full border border-slate-200/90 hover:border-[#F37335] bg-white/80 hover:bg-[#FFF3ED] text-[#18120F] hover:text-[#F37335] flex items-center justify-center transition-all duration-200 shadow-2xs hover:scale-105"
              title="Instagram"
              aria-label="Instagram"
            >
              <Instagram className="w-3.5 h-3.5" />
            </a>
          </div>

          <p>© {new Date().getFullYear()} An Introverted Designer. All rights reserved.</p>
        </div>
      </footer>

      {/* Fullscreen Lightbox / Image Zoom Modal */}
      {activeFullscreenImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/92 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-in fade-in duration-200"
          onClick={() => setActiveFullscreenImage(null)}
        >
          {/* Top Control Bar */}
          <div className="absolute top-4 right-4 sm:top-6 sm:right-6 z-10 flex items-center gap-3">
            <span className="text-xs text-white/70 font-['Work_Sans',sans-serif] hidden sm:inline-block bg-white/10 px-3 py-1 rounded-full border border-white/15">
              Press Esc or click anywhere to close
            </span>
            <button
              onClick={() => setActiveFullscreenImage(null)}
              className="p-2.5 rounded-full bg-white/15 hover:bg-white/30 text-white transition-colors cursor-pointer border border-white/20 shadow-lg"
              title="Close full screen view"
              aria-label="Close full screen view"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Image Container */}
          <div 
            className="relative max-w-full max-h-full flex flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            {activeFullscreenImage.src.includes('.mp4') || activeFullscreenImage.src.includes('/video/upload/') ? (
              <video
                src={activeFullscreenImage.src}
                autoPlay
                loop
                controls
                playsInline
                className="max-w-[92vw] max-h-[85vh] object-contain rounded-lg shadow-2xl border border-white/10"
              />
            ) : (
              <SafeImage
                src={activeFullscreenImage.src}
                alt={activeFullscreenImage.alt}
                fallbackType="dashboard"
                className="max-w-[92vw] max-h-[85vh] object-contain rounded-lg shadow-2xl border border-white/10"
              />
            )}
            {activeFullscreenImage.alt && (
              <p className="mt-3 text-xs sm:text-sm text-white/80 font-['Work_Sans',sans-serif] text-center max-w-2xl bg-black/50 px-4 py-1.5 rounded-full border border-white/10">
                {activeFullscreenImage.alt}
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
