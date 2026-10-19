import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { SafeImage } from './SafeImage';
import { 
  ArrowLeft, 
  Compass, 
  Menu, 
  X,
  Headphones
} from 'lucide-react';

interface NotFoundPageProps {
  onNavigateHome: () => void;
  onNavigateProjects: () => void;
  onNavigateAbout: () => void;
  onNavigateCaseStudy: (projectId: string) => void;
}

export const NotFoundPage: React.FC<NotFoundPageProps> = ({
  onNavigateHome,
  onNavigateProjects,
  onNavigateAbout
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-[#FFFDFB] text-[#18120F] flex flex-col justify-between selection:bg-[#F37335]/20 selection:text-[#F37335]">
      {/* Floating Glassmorphism Header - Exactly consistent with Homepage and About page */}
      <header className="fixed top-2 sm:top-1 left-0 right-0 z-40 w-full px-4 sm:px-8 md:px-[60px] pointer-events-none">
        <div className="glass-header pointer-events-auto w-full px-5 sm:px-8 py-3.5 md:py-4 min-h-[56px] md:min-h-[60px] flex items-center justify-between gap-4">
          {/* Logo */}
          <button 
            onClick={onNavigateHome} 
            className="flex items-center gap-2 shrink-0 cursor-pointer transition-transform hover:scale-102"
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

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8 font-['Work_Sans',sans-serif] font-medium text-[12px] tracking-wider uppercase">
            <button 
              onClick={onNavigateProjects} 
              className="text-[#18120F] hover:text-[#F37335] transition-colors cursor-pointer"
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
              className="text-left py-2.5 px-3.5 rounded-xl hover:bg-[#FFF5ED] hover:text-[#F37335] text-[#18120F] transition-colors cursor-pointer"
            >
              PROJECTS
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onNavigateAbout();
              }}
              className="text-left py-2.5 px-3.5 rounded-xl hover:bg-[#FFF5ED] hover:text-[#F37335] text-[#18120F] transition-colors cursor-pointer"
            >
              ABOUT
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onNavigateProjects();
              }}
              className="text-left py-2.5 px-3.5 rounded-xl hover:bg-[#FFF5ED] hover:text-[#F37335] text-[#18120F] transition-colors cursor-pointer"
            >
              RESOURCES
            </button>
            <div className="pt-2 border-t border-slate-100">
              <a
                href="https://cal.com/anintroverteddesigner/30min"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="gradient-stroke-btn w-full inline-flex items-center justify-center"
              >
                <span className="gradient-stroke-btn-inner !text-[12px] font-semibold uppercase tracking-wider !py-2.5 !px-3 text-[#18120F] w-full text-center">
                  WORK WITH ME
                </span>
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Main Content Area */}
      <main className="flex-1 flex items-center justify-center pt-32 pb-20 px-4 sm:px-6 md:px-8">
        <div className="max-w-2xl w-full mx-auto text-center">
          
          {/* Big Stylized 404 */}
          <div className="relative my-2 select-none">
            <h1 className="text-8xl sm:text-9xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[#F37335] via-[#F5AF19] to-[#BE5EC6] font-['Cabinet_Grotesk',sans-serif]">
              404
            </h1>
            <div className="absolute -top-2 sm:-top-4 right-1/4 sm:right-1/3 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-slate-200/90 shadow-2xs text-[11px] sm:text-xs font-medium text-slate-700 flex items-center gap-1.5 rotate-6">
              <Headphones className="w-3.5 h-3.5 text-[#F37335]" />
              <span>Quiet Mode On</span>
            </div>
          </div>

          {/* Punchy Headline */}
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#18120F] mt-2 mb-4 font-['Cabinet_Grotesk',sans-serif] leading-tight">
            I’m not here. I saw someone walking towards me and took a different route.
          </h2>

          {/* Requested Exact Description */}
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-xl mx-auto mb-10 font-['Work_Sans',sans-serif]">
            This page went into Do Not Disturb mode. Whatever you were looking for doesn’t live here—and honestly, fewer meetings is a win for both of us.
          </p>

          {/* Brand Primary and Secondary Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            {/* Primary Button */}
            <button
              onClick={onNavigateHome}
              className="gradient-fill-btn w-full sm:w-auto text-[12px] sm:text-[13px] font-semibold uppercase tracking-wider py-3.5 px-8 inline-flex items-center justify-center gap-2.5 shadow-md hover:shadow-lg font-['Work_Sans',sans-serif] cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4 text-white" />
              <span>Escape To Safe Haven (Home)</span>
            </button>

            {/* Secondary Button */}
            <button
              onClick={onNavigateProjects}
              className="gradient-stroke-btn w-full sm:w-auto inline-flex items-center justify-center cursor-pointer"
            >
              <span className="gradient-stroke-btn-inner !text-[12px] sm:!text-[13px] font-semibold uppercase tracking-wider !py-3 !px-7 text-[#18120F] leading-none whitespace-nowrap flex items-center justify-center gap-2.5 font-['Work_Sans',sans-serif] w-full">
                <Compass className="w-4 h-4 text-[#F37335]" />
                <span>Browse Real Case Studies</span>
              </span>
            </button>
          </div>

        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-20 border-t border-slate-200/80 py-8 px-4 sm:px-8 md:px-[60px] bg-white/70 backdrop-blur-xs">
        <div className="w-full flex flex-col md:flex-row items-center justify-between gap-4">
          <button
            onClick={onNavigateHome}
            className="flex items-center gap-3 transition-opacity hover:opacity-80 cursor-pointer"
            title="Go to homepage"
            aria-label="Go to homepage"
          >
            <SafeImage
              src={PORTFOLIO_DATA.profile.logoFooter}
              alt="An Introverted Designer"
              fallbackType="logo"
              title="AID"
              className="h-7 w-auto object-contain"
            />
          </button>

          <div className="text-xs text-slate-500 font-['Work_Sans',sans-serif]">
            Copyright © 2026 | Powered by An Introverted Designer
          </div>
        </div>
      </footer>
    </div>
  );
};
