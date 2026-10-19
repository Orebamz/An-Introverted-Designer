import React, { useState, useEffect } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { SafeImage } from './SafeImage';
import { 
  ArrowRight, 
  Lock, 
  Mail, 
  MapPin, 
  ChevronLeft, 
  ChevronRight, 
  Menu, 
  X,
  ExternalLink,
  Code2,
  Linkedin,
  Github,
  Instagram,
  Dribbble,
  Copy,
  Check
} from 'lucide-react';

interface ArchivedHomepageProps {
  onNavigateNew: () => void;
  onNavigateAbout?: () => void;
  onNavigateCaseStudy?: (projectId: string) => void;
  onOpenCodeModal: () => void;
}

export const ArchivedHomepage: React.FC<ArchivedHomepageProps> = ({ 
  onNavigateNew, 
  onNavigateAbout,
  onNavigateCaseStudy,
  onOpenCodeModal 
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const [slideDirection, setSlideDirection] = useState<'next' | 'prev'>('next');
  const [activeSection, setActiveSection] = useState<string>('');
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText(PORTFOLIO_DATA.profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const testimonials = PORTFOLIO_DATA.testimonials;

  // Auto-advance testimonials (slow and sleek)
  useEffect(() => {
    const timer = setInterval(() => {
      setSlideDirection('next');
      setTestimonialIndex((prev) => (prev + 1) % testimonials.length);
    }, 8500);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  // Track active section on scroll so projects is ONLY highlighted when in projects section
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 220;
      const projectsEl = document.getElementById('projects');
      const testimonialsEl = document.getElementById('testimonials');
      const contactEl = document.getElementById('contact');

      // If user is near top/hero, no section is active
      if (projectsEl && scrollPosition < projectsEl.offsetTop) {
        setActiveSection('');
        return;
      }

      if (contactEl && scrollPosition >= contactEl.offsetTop - 100) {
        setActiveSection('contact');
      } else if (testimonialsEl && scrollPosition >= testimonialsEl.offsetTop - 100) {
        setActiveSection('about');
      } else if (projectsEl && scrollPosition >= projectsEl.offsetTop - 100) {
        setActiveSection('projects');
      } else {
        setActiveSection('');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handlePrevTestimonial = () => {
    setSlideDirection('prev');
    setTestimonialIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNextTestimonial = () => {
    setSlideDirection('next');
    setTestimonialIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <div className="relative min-h-screen bg-[#FFFDFB] text-[#18120F] overflow-x-hidden">
      {/* Floating Glassmorphism Header - Full width respecting 60px padding on desktop (Pushed up 10px, down 8px on mobile) */}
      <header className="fixed top-2 sm:top-1 left-0 right-0 z-40 w-full px-4 sm:px-8 md:px-[60px] pointer-events-none">
        <div className="glass-header pointer-events-auto w-full px-5 sm:px-8 py-3.5 md:py-4 min-h-[56px] md:min-h-[60px] flex items-center justify-between gap-4">
          {/* Logo */}
          <a href="#hero" className="flex items-center gap-2 shrink-0">
            <SafeImage
              src={PORTFOLIO_DATA.profile.logoFull}
              alt="An Introverted Designer Logo"
              fallbackType="logo"
              title="AID"
              className="h-7 md:h-8 w-auto object-contain"
            />
          </a>

          {/* Desktop Nav - Clean links with no background box, only active section in orange */}
          <nav className="hidden md:flex items-center gap-8 font-['Work_Sans',sans-serif] font-medium text-[12px] tracking-wider uppercase">
            <a 
              href="#projects" 
              className={`transition-colors ${
                activeSection === 'projects' 
                  ? 'text-[#F37335] font-semibold' 
                  : 'text-[#18120F] hover:text-[#F37335]'
              }`}
            >
              PROJECTS
            </a>
            <a 
              href="#about" 
              onClick={(e) => {
                if (onNavigateAbout) {
                  e.preventDefault();
                  onNavigateAbout();
                }
              }}
              className={`transition-colors cursor-pointer ${
                activeSection === 'about' 
                  ? 'text-[#F37335] font-semibold' 
                  : 'text-[#18120F] hover:text-[#F37335]'
              }`}
            >
              ABOUT
            </a>
            <a 
              href="#resources" 
              className={`transition-colors ${
                activeSection === 'resources' 
                  ? 'text-[#F37335] font-semibold' 
                  : 'text-[#18120F] hover:text-[#F37335]'
              }`}
            >
              RESOURCES
            </a>
          </nav>

          {/* Avatar + CTA (Button height increased by 4px, font strict 12px) */}
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
            <a
              href="#projects"
              onClick={() => setMobileMenuOpen(false)}
              className={`py-2.5 px-3.5 rounded-xl transition-colors ${
                activeSection === 'projects' ? 'bg-[#FFF5ED] text-[#F37335]' : 'hover:bg-[#FAF0FC] hover:text-[#BE5EC6] text-[#18120F]'
              }`}
            >
              PROJECTS
            </a>
            <a
              href="#about"
              onClick={(e) => {
                setMobileMenuOpen(false);
                if (onNavigateAbout) {
                  e.preventDefault();
                  onNavigateAbout();
                }
              }}
              className={`py-2.5 px-3.5 rounded-xl transition-colors cursor-pointer ${
                activeSection === 'about' ? 'bg-[#FFF5ED] text-[#F37335]' : 'hover:bg-[#FAF0FC] hover:text-[#BE5EC6] text-[#18120F]'
              }`}
            >
              ABOUT
            </a>
            <a
              href="#resources"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2.5 px-3.5 rounded-xl hover:bg-[#FAF0FC] hover:text-[#BE5EC6] text-[#18120F] transition-colors"
            >
              RESOURCES
            </a>
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

      {/* Hero Section */}
      <section id="hero" className="relative min-h-[85vh] pt-24 pb-0 flex flex-col justify-between items-stretch text-center overflow-hidden isolate">
        {/* Base background layer */}
        <div className="absolute inset-0 bg-[#FFFDFB] -z-30 pointer-events-none" />

        {/* 1. Vivid Animated Liquid Blobs & Ribbon Interaction */}
        <div className="hero-stage -z-20 pointer-events-none">
          {/* Main 600px 3D Liquid Glass Blob with specular highlights */}
          <div className="liquid-glass-blob" />
          {/* Secondary Liquid Glass Blob moving on opposite path */}
          <div className="liquid-glass-blob-alt opacity-85" />
          {/* Long Rolling Rainbow Gradient Ribbon */}
          <div className="forced-hero-stage">
            <div className="liquid-rolling-ribbon" />
          </div>
          {/* Ambient Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[720px] h-[400px] bg-gradient-to-r from-[#F37335]/25 via-[#BE5EC6]/20 to-[#7F00FF]/15 blur-[60px] rounded-full pointer-events-none" />
        </div>

        {/* 80% Background overlay covering the blob interaction */}
        <div className="absolute inset-0 bg-[#FFFDFB]/80 backdrop-blur-[6px] pointer-events-none -z-10" />

        {/* 2. Hero Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 flex flex-col items-center pt-4 w-full">
          {/* Greeting in exact orange color with reliably rendered emoji */}
          <p className="text-base sm:text-lg font-medium text-[#F37335] mb-5 flex items-center justify-center gap-2 font-['Work_Sans',sans-serif]">
            <span>Hi</span>
            <span className="inline-block text-xl sm:text-2xl align-middle leading-none select-none hover:rotate-12 transition-transform duration-200" role="img" aria-label="waving hand">👋</span>
            <span>, I'm Esther Oreoluwa Bamidele</span>
          </p>

          {/* Headline (Mobile +16px [38px] centered, Tablet +8px [44px], Desktop +4px [58px]) */}
          <h1 className="font-medium tracking-tight text-[#18120F] mb-6 max-w-4xl font-['Cabinet_Grotesk',sans-serif] mx-auto text-center text-[36px] sm:text-[38px] md:text-[44px] lg:text-[58px] leading-[1.12]">
            <span className="block md:whitespace-nowrap">AI Design Engineer &amp; Product Builder</span>
            <span className="block md:whitespace-nowrap">Scaling Enterprise SaaS.</span>
          </h1>

          {/* Subtitle - #18120F body color */}
          <p className="text-base sm:text-lg text-[#18120F] max-w-2xl mx-auto leading-relaxed mb-8 font-['Work_Sans',sans-serif]">
            Lately, I've been bridging high-fidelity design with production-ready code. I build scalable design systems, intuitive dashboards, marketing landing pages and websites, and rapid 14-day MVPs for founders and agencies.
          </p>

          {/* Recommended By Founders: One line with orange bar on the left */}
          <div className="flex items-center justify-center gap-3 mb-10 flex-wrap sm:flex-nowrap font-['Work_Sans',sans-serif]">
            <a href="#testimonials" className="flex items-center gap-2 group cursor-pointer hover:opacity-90 transition-opacity">
              <span className="w-1 h-5 bg-[#F37335] rounded-full inline-block shrink-0" />
              <span className="text-[11px] sm:text-[12px] font-normal uppercase tracking-wider text-[#18120F]">
                RECOMMENDED BY FOUNDERS AT
              </span>
            </a>

            {/* 4 Overlapping Company Logos - All strictly Icons with white bg circles */}
            <div className="flex items-center -space-x-1.5 ml-1">
              {/* PDFGuideStack Icon with white bg circle */}
              <div className="w-8 h-8 rounded-full bg-white border-2 border-white shadow-xs overflow-hidden flex items-center justify-center p-1" title="PDFGuideStack">
                <SafeImage
                  src="https://res.cloudinary.com/driutxwdh/image/upload/v1778354520/Favicon_milev0.png"
                  alt="PDFGuideStack"
                  fallbackType="logo"
                  title="PDFGuideStack"
                  className="w-full h-full object-contain"
                />
              </div>

              {/* TecoMetrics Icon with white bg circle */}
              <div className="w-8 h-8 rounded-full bg-white border-2 border-white shadow-xs overflow-hidden flex items-center justify-center p-1" title="TecoMetrics">
                <SafeImage
                  src="https://res.cloudinary.com/driutxwdh/image/upload/v1792162625/Logo_ICON_xo7uyh.svg"
                  alt="TecoMetrics"
                  fallbackType="logo"
                  title="TecoMetrics"
                  className="w-full h-full object-contain"
                />
              </div>

              {/* SnapVista Icon with white bg circle */}
              <div className="w-8 h-8 rounded-full bg-white border-2 border-white shadow-xs overflow-hidden flex items-center justify-center p-1" title="SnapVista">
                <SafeImage
                  src="https://anintroverteddesigner.com/wp-content/uploads/2026/05/SnapVista-Logo-ICON.png"
                  alt="SnapVista"
                  fallbackType="logo"
                  title="SnapVista"
                  className="w-full h-full object-contain"
                />
              </div>

              {/* SignalADoc Icon with white bg circle */}
              <div className="w-8 h-8 rounded-full bg-white border-2 border-white shadow-xs overflow-hidden flex items-center justify-center p-1" title="SignalADoc">
                <SafeImage
                  src="https://anintroverteddesigner.com/wp-content/uploads/2026/05/Signaladoc-Logo-ICON.png"
                  alt="SignalADoc"
                  fallbackType="logo"
                  title="SignalADoc"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>

          {/* Primary CTA Button */}
          <a
            href="#projects"
            className="gradient-fill-btn text-[12px] font-semibold uppercase tracking-wider py-3.5 px-14 sm:px-20 min-w-[280px] sm:min-w-[320px] text-center transition-all shadow-md hover:shadow-lg font-['Work_Sans',sans-serif]"
          >
            EXPLORE PROJECTS
          </a>
        </div>

        <div className="w-full overflow-hidden py-10 mt-2 mb-10 relative z-10 pointer-events-none">
          <div className="marquee-bar">
            <div className="marquee-inner">
              <div className="flex shrink-0 items-center">
                {PORTFOLIO_DATA.skills.map((skill, idx) => (
                  <span key={`track1-${idx}`} className="marquee-item">
                    {skill}
                  </span>
                ))}
              </div>
              <div className="flex shrink-0 items-center">
                {PORTFOLIO_DATA.skills.map((skill, idx) => (
                  <span key={`track2-${idx}`} className="marquee-item">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Curated Projects Section - Full width with 8px margin (px-2) and light orange bordered cards */}
      <section id="projects" className="py-24 px-2 w-full max-w-[calc(100%-16px)] mx-auto bg-[#FFFDFB]">
        {/* Header: Left title (medium weight), Right description in Work Sans with NO line break */}
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-16 px-3 sm:px-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-[#18120F] tracking-tight shrink-0 font-['Cabinet_Grotesk',sans-serif]">
            Curated Projects
          </h2>
          <p className="text-sm sm:text-base text-[#18120F] max-w-xl md:text-right leading-relaxed font-['Work_Sans',sans-serif]">
            A curated selection of enterprise platforms, dashboards, and design systems delivered for Fortune 500 companies.
          </p>
        </div>

        {/* Project Items Stack - Zero gap between project cards, border radius 4, border color does not change on hover */}
        <div className="flex flex-col -space-y-px">
          {PORTFOLIO_DATA.projects.filter(p => p.id !== 'skylink').map((project) => (
            <div
              key={project.id}
              onClick={() => {
                if (!project.isLocked && onNavigateCaseStudy) {
                  onNavigateCaseStudy(project.id);
                }
              }}
              className={`project-card group relative w-full rounded-[4px] border border-[#F37335]/35 bg-white/70 backdrop-blur-sm p-4 sm:p-8 lg:p-10 shadow-xs transition-all duration-300 flex items-center overflow-hidden ${
                project.isLocked ? 'cursor-default opacity-50 hover:opacity-65 grayscale-[20%]' : 'cursor-pointer'
              }`}
            >
              {/* Thinner, sleek reveal arrow in orange OR Lock icon when locked */}
              <div className="reveal-arrow text-[#F37335] mr-3 hidden md:flex items-center shrink-0">
                {project.isLocked ? (
                  <Lock className="w-4 h-4 text-[#F37335]" />
                ) : (
                  <ArrowRight className="w-5 h-5 text-[#F37335]" strokeWidth={2} />
                )}
              </div>

              {/* Card Grid Content - Contained strictly within card bounds */}
              <div className="card-inner-wrap grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-center w-full min-w-0 max-w-full">
                {/* Project Info Column */}
                <div className="project-info lg:col-span-6 space-y-4">
                  {/* Industry tag row with Coming Soon Badge */}
                  <div className="flex items-center justify-between gap-3 flex-wrap">
                    <span className="industry-text font-['Work_Sans',sans-serif] text-[12px] uppercase font-medium text-[#18120F] group-hover:text-[#BE5EC6] tracking-wider block transition-colors">
                      {project.number} {project.industry}
                    </span>

                    {/* Coming Soon Lock Badge when locked */}
                    {project.isLocked && (
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFF3ED] border border-[#F37335]/35 text-[#F37335] text-[11px] font-semibold uppercase tracking-wider font-['Work_Sans',sans-serif] shadow-2xs">
                        <Lock className="w-3 h-3 text-[#F37335]" />
                        <span>Coming Soon</span>
                      </span>
                    )}
                  </div>

                  {/* Project Logo Icon (Reduced to half size for elegant proportion) */}
                  <div className="h-5 sm:h-6 w-auto max-w-[120px] flex items-center justify-start my-1.5">
                    <SafeImage
                      src={project.logoIcon}
                      alt={`${project.title} icon`}
                      fallbackType="logo"
                      title={project.title}
                      className="h-full w-auto max-w-full object-contain object-left"
                    />
                  </div>

                  {/* Title with single element to prevent overlap, medium font weight */}
                  <h3 className="card-title text-2xl sm:text-3xl lg:text-4xl font-medium tracking-tight text-[#18120F]">
                    {project.title}
                  </h3>

                  {/* Description in Work Sans with #18120F body color */}
                  <p className="text-sm sm:text-base text-[#18120F] leading-relaxed font-['Work_Sans',sans-serif]">
                    {project.description}
                  </p>

                  {/* Project Impact Pill Design: font-normal (regular), text color same as body font (#18120F), border #F37335, bg #FFF3ED */}
                  <div className="flex flex-wrap gap-2.5 pt-3">
                    {project.metrics.map((metric, mIdx) => (
                      <div 
                        key={mIdx}
                        className="inline-flex items-center px-3.5 sm:px-4 py-1.5 rounded-[20px] border border-[#F37335] bg-[#FFF3ED] text-[11px] sm:text-[11.5px] font-['Work_Sans',sans-serif] font-normal tracking-wider uppercase text-[#18120F] shadow-2xs"
                      >
                        <p className="m-0 leading-normal text-[#18120F] font-normal">
                          • {metric.replace(/^[•\-\*]\s*/, '')}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Dashboard Image Column with 400px height, NO border radius, and delicate light orange dropshadow on hover */}
                <div className="lg:col-span-6 flex items-center justify-center">
                  <div className="dashboard-img relative w-full h-[240px] sm:h-[320px] lg:h-[400px] overflow-hidden rounded-none border border-slate-200/80 bg-white flex items-center justify-center">
                    <SafeImage
                      src={project.image}
                      alt={`${project.title} Dashboard`}
                      fallbackType="dashboard"
                      title={project.title}
                      className="w-full h-full object-cover object-top rounded-none"
                    />
                    {project.isLocked && (
                      <div className="absolute top-4 right-4 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/95 backdrop-blur-md border border-[#F37335]/35 text-[#F37335] text-[11px] font-semibold uppercase tracking-wider font-['Work_Sans',sans-serif] shadow-xs">
                        <Lock className="w-3.5 h-3.5" />
                        <span>Coming Soon</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Recommended By (Testimonials) Section - Background Matching Hero Section (bg-[#FFFDFB] + blob behind) */}
      <section id="testimonials" className="relative py-28 overflow-hidden bg-[#FFFDFB]">
        {/* 1. Blob Interaction (Behind Recommended By BG Color) */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
          <div className="liquid-rolling-ribbon -top-20 left-10 opacity-75" />
          <div className="liquid-glass-blob top-1/4 -right-10 opacity-65" />
        </div>

        {/* 2. Section Background Color Tint (Exact same as Hero Section: bg-[#FFFDFB]/85 backdrop-blur-[24px]) */}
        <div className="absolute inset-0 bg-[#FFFDFB]/85 backdrop-blur-[24px] pointer-events-none z-[1]" />

        {/* 3. Section Content - Wider Container */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="flex flex-row items-center justify-between mb-12">
            <div>
              <div className="hidden" id="testimonials-anchor" />
              <h2 className="text-3xl md:text-4xl font-medium text-[#18120F] tracking-tight font-['Cabinet_Grotesk',sans-serif]">
                Recommended By
              </h2>
            </div>
            
            {/* Carousel Arrow Controls */}
            <div className="flex items-center gap-2">
              <button
                onClick={handlePrevTestimonial}
                className="wp-carousel-arrow"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNextTestimonial}
                className="wp-carousel-arrow"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Testimonials Responsive Carousel - 1 Card on Mobile, 2 Cards on Desktop with Sleek, Fluid Slide-In */}
          <div className="overflow-hidden py-3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-stretch w-full">
              {[
                testimonials[testimonialIndex],
                testimonials[(testimonialIndex + 1) % testimonials.length]
              ].map((item, idx) => (
                <div 
                  key={`${item.id}-${testimonialIndex}-${idx}`} 
                  className={`wp-testimonial-card-outer ${idx === 1 ? 'hidden md:flex' : 'flex'} ${
                    slideDirection === 'prev' 
                      ? (idx === 0 ? 'testimonial-slide-prev-0' : 'testimonial-slide-prev-1')
                      : (idx === 0 ? 'testimonial-slide-next-0' : 'testimonial-slide-next-1')
                  }`}
                >
                  <div className="wp-testimonial-card-inner">
                    {/* Top Quote Box with bottom border */}
                    <div className="wp-testimonial-quote-box">
                      <p className="wp-testimonial-quote-text">
                        {item.quote}
                      </p>
                    </div>

                    {/* Bottom Author Box */}
                    <div className="wp-testimonial-author-box">
                      <h5 className="wp-testimonial-author-name">
                        {item.author}
                      </h5>
                      <p className="wp-testimonial-author-role">
                        {item.role}
                      </p>
                      <h5 className="wp-testimonial-author-company">
                        {item.company}
                      </h5>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Slick Dots Pagination */}
          <div className="flex items-center justify-center gap-2 mt-8">
            {testimonials.map((_, dotIdx) => (
              <button
                key={dotIdx}
                onClick={() => {
                  setSlideDirection(dotIdx >= testimonialIndex ? 'next' : 'prev');
                  setTestimonialIndex(dotIdx);
                }}
                className={`transition-all duration-300 rounded-full cursor-pointer ${
                  testimonialIndex === dotIdx 
                    ? 'w-7 h-2.5 bg-[#BE5EC6]' 
                    : 'w-2.5 h-2.5 bg-slate-300 hover:bg-slate-400'
                }`}
                aria-label={`Go to slide ${dotIdx + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-4 sm:px-6 md:px-12 max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-[#18120F] mb-4 font-['Cabinet_Grotesk',sans-serif]">
          Let’s Build Something <br className="hidden sm:inline" />
          <span className="gradient-text">Amazing Together</span>
        </h2>
        {/* Contact subtitle with NO line break, 4px smaller: 20px -> 16px */}
        <p className="text-[16px] text-[#18120F] max-w-2xl mx-auto mb-14 font-['Work_Sans',sans-serif] leading-relaxed text-center">
          I’m always interested in hearing about new projects and opportunities. Whether you have a question or just want to say hi, feel free to reach out!
        </p>

        {/* Email & Booking Card */}
        <div className="wp-testimonial-card-outer max-w-xl sm:max-w-2xl mx-auto w-full">
          <div className="wp-testimonial-card-inner !p-6 sm:!p-8 text-center flex flex-col items-center justify-center">
            {/* Centered Mail Icon */}
            <div className="w-12 h-12 rounded-xl bg-[#FFF3ED] border border-[#F37335]/30 flex items-center justify-center text-[#F37335] mb-3 shadow-2xs">
              <Mail className="w-6 h-6" />
            </div>

            {/* Heading */}
            <h3 className="text-[26px] font-medium text-[#18120F] mb-1 font-['Cabinet_Grotesk',sans-serif] text-center">
              Let's Connect
            </h3>

            {/* Body copy */}
            <p className="text-[16px] text-[#18120F] mb-4 font-['Work_Sans',sans-serif] text-center">
              For project enquiries, bookings and collaborations
            </p>

            {/* Email in Purple (#BE5EC6) with Copy Icon - No hover interaction on email */}
            <div className="flex items-center justify-center gap-2 sm:gap-2.5 mb-4 flex-nowrap max-w-full">
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

            {/* Direct Cal.com booking CTA */}
            <div className="mb-4">
              <a
                href="https://cal.com/anintroverteddesigner/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="gradient-fill-btn text-[12px] font-semibold uppercase tracking-wider py-2.5 px-6 inline-flex items-center gap-2 shadow-sm hover:shadow-md"
              >
                <span>Schedule a 30-min Call</span>
                <ArrowRight className="w-4 h-4" />
              </a>
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

                {/* Dribbble (Replaced Behance) */}
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
      <footer className="border-t border-slate-200 py-10 px-4 md:px-8 bg-white mt-28 sm:mt-40">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center gap-3 transition-opacity hover:opacity-80 cursor-pointer"
            title="Go to homepage"
            aria-label="Go to homepage"
          >
            <SafeImage
              src={PORTFOLIO_DATA.profile.logoFull}
              alt="Logo"
              fallbackType="logo"
              title="AID"
              className="h-7 w-auto object-contain"
            />
          </a>

          <div className="text-xs text-[#18120F]">
            Copyright © 2026 | Powered by An Introverted Designer
          </div>
        </div>
      </footer>
    </div>
  );
};
