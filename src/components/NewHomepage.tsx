import React, { useState } from 'react';
import { PORTFOLIO_DATA, ProjectItem } from '../data/portfolioData';
import { SafeImage } from './SafeImage';
import { 
  ArrowRight, 
  ExternalLink, 
  Mail, 
  MapPin, 
  Layers, 
  Sliders, 
  CheckCircle2, 
  ArrowUpRight,
  Code2,
  Copy,
  Check,
  ChevronRight,
  Archive
} from 'lucide-react';

interface NewHomepageProps {
  onNavigateOld: () => void;
  onOpenCodeModal: () => void;
}

export const NewHomepage: React.FC<NewHomepageProps> = ({ 
  onNavigateOld, 
  onOpenCodeModal 
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [previewProject, setPreviewProject] = useState<ProjectItem | null>(null);

  // Design system interactive preview state
  const [previewTheme, setPreviewTheme] = useState<'light' | 'dark'>('light');
  const [activeTab, setActiveTab] = useState<'tokens' | 'components' | 'states'>('tokens');

  const categories = [
    { id: 'all', label: 'All Work' },
    { id: 'Energy Tech', label: 'Energy Tech' },
    { id: 'Fin-Tech', label: 'Fin-Tech' },
    { id: 'Marketing', label: 'Design Systems' },
    { id: 'Health-Tech', label: 'Health-Tech' },
    { id: 'Aviation', label: 'Aviation' },
  ];

  const filteredProjects = activeCategory === 'all' 
    ? PORTFOLIO_DATA.projects 
    : PORTFOLIO_DATA.projects.filter(p => p.industry.toLowerCase().includes(activeCategory.toLowerCase()));

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PORTFOLIO_DATA.profile.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <div className="min-h-screen bg-[#FCFAF8] text-[#18120F]">
      {/* Modern Top Bar Contract (3 Zones: Brand, Nav, CTA) */}
      <header className="sticky top-0 z-40 bg-[#FCFAF8]/90 backdrop-blur-md border-b border-slate-200/80 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-8">
          {/* Zone 1: Brand Wordmark */}
          <a href="#" className="flex items-center gap-3 shrink-0 group">
            <SafeImage
              src={PORTFOLIO_DATA.profile.logoFull}
              alt="Logo"
              fallbackType="logo"
              title="AID"
              className="h-8 md:h-9 w-auto object-contain"
            />
            <div className="hidden sm:block">
              <span className="font-bold text-sm text-[#18120F] block tracking-tight">
                Esther O. Bamidele
              </span>
              <span className="text-[11px] text-[#64748B] block font-medium">
                Senior UI/UX &amp; Systems Architect
              </span>
            </div>
          </a>

          {/* Zone 2: Navigation Links (Including Link to /old) */}
          <nav className="hidden md:flex items-center gap-7 text-xs font-semibold tracking-wider uppercase text-[#334155]">
            <a href="#work" className="hover:text-[#F37335] transition-colors whitespace-nowrap">
              Selected Work
            </a>
            <a href="#systems" className="hover:text-[#F37335] transition-colors whitespace-nowrap">
              Design Systems
            </a>
            <a href="#impact" className="hover:text-[#F37335] transition-colors whitespace-nowrap">
              Impact
            </a>
            <a href="#testimonials" className="hover:text-[#F37335] transition-colors whitespace-nowrap">
              Recommendations
            </a>
            <button
              onClick={onNavigateOld}
              className="text-[#BE5EC6] hover:text-[#7F00FF] transition-colors flex items-center gap-1 whitespace-nowrap bg-purple-50 px-2.5 py-1 rounded-full border border-purple-200"
            >
              <Archive className="w-3 h-3" />
              <span>Archived (v1)</span>
            </button>
          </nav>

          {/* Zone 3: Single Primary Action */}
          <div className="flex items-center gap-3 shrink-0">
            <a
              href="#contact"
              className="gradient-fill-btn text-xs uppercase tracking-wider py-2.5 px-6"
            >
              Start Collaboration
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-16 pb-24 px-6 max-w-7xl mx-auto overflow-hidden">
        {/* Soft Ambient Brand Mesh */}
        <div className="absolute top-0 right-10 w-96 h-96 bg-gradient-to-br from-[#F37335]/15 via-[#BE5EC6]/15 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-gradient-to-tr from-[#046BD2]/10 via-[#F5AF19]/10 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Positioning & Copy */}
          <div className="lg:col-span-7 space-y-6">
            {/* Status Kicker */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 shadow-xs text-xs font-medium text-[#475569]">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <span>Open to Staff / Lead Product Design Roles &amp; Consultations</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#18120F] leading-[1.12]">
              Architecting <span className="gradient-text">Scalable SaaS</span> Systems &amp; Complex Dashboards.
            </h1>

            <p className="text-lg text-[#334155] leading-relaxed max-w-2xl">
              I’m <strong>Esther Oreoluwa Bamidele</strong>. I translate mission-critical operations into intuitive, 
              high-throughput web platforms for global enterprise clients across energy, fintech, and health-tech.
            </p>

            {/* Quick Metrics Strip */}
            <div className="grid grid-cols-3 gap-4 pt-2 border-t border-slate-200/80">
              <div>
                <span className="block text-2xl font-bold text-[#18120F] font-mono tabular-nums">$50M+</span>
                <span className="text-xs text-[#64748B]">Tracked Portfolio Assets</span>
              </div>
              <div>
                <span className="block text-2xl font-bold text-[#F37335] font-mono tabular-nums">40%</span>
                <span className="text-xs text-[#64748B]">Faster Dev Cycles</span>
              </div>
              <div>
                <span className="block text-2xl font-bold text-[#BE5EC6] font-mono tabular-nums">200+</span>
                <span className="text-xs text-[#64748B]">Tokenized Components</span>
              </div>
            </div>

            {/* Action Group */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a href="#work" className="gradient-fill-btn text-sm font-semibold tracking-wide py-3 px-7">
                Explore Case Studies
              </a>
              <button
                onClick={onNavigateOld}
                className="gradient-stroke-btn"
              >
                <span className="gradient-stroke-btn-inner text-sm font-semibold py-2.5 px-6">
                  Compare with /old (v1)
                </span>
              </button>
            </div>
          </div>

          {/* Right Column: Interactive Profile & Design System Token Matrix */}
          <div className="lg:col-span-5">
            <div className="bg-white border border-slate-200/90 rounded-2xl p-6 shadow-xl relative overflow-hidden">
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full p-[2px] bg-gradient-to-tr from-[#F37335] to-[#BE5EC6]">
                    <SafeImage
                      src={PORTFOLIO_DATA.profile.avatar}
                      alt={PORTFOLIO_DATA.profile.name}
                      fallbackType="avatar"
                      className="w-full h-full rounded-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold text-sm text-[#18120F]">Esther O. Bamidele</h3>
                    <p className="text-xs text-[#64748B] flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-[#F37335]" /> Lagos, NG · Remote Worldwide
                    </p>
                  </div>
                </div>

                <span className="px-2.5 py-1 rounded-md bg-[#FDEDE5] text-[#F37335] text-[11px] font-semibold">
                  Atomic DS v2.4
                </span>
              </div>

              {/* Live Token Sandbox */}
              <div className="mt-5 space-y-4">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-semibold text-[#334155]">Brand Color Tokens</span>
                  <span className="text-[#64748B] font-mono">Hex verified</span>
                </div>

                <div className="grid grid-cols-4 gap-2">
                  <div className="p-2 rounded-lg bg-[#FAF8F5] border border-slate-200 text-center">
                    <div className="w-full h-7 rounded bg-[#F37335] mb-1.5 shadow-xs" />
                    <span className="text-[10px] font-mono font-bold block text-slate-700">#F37335</span>
                    <span className="text-[9px] text-slate-400">Orange</span>
                  </div>
                  <div className="p-2 rounded-lg bg-[#FAF8F5] border border-slate-200 text-center">
                    <div className="w-full h-7 rounded bg-[#F5AF19] mb-1.5 shadow-xs" />
                    <span className="text-[10px] font-mono font-bold block text-slate-700">#F5AF19</span>
                    <span className="text-[9px] text-slate-400">Amber</span>
                  </div>
                  <div className="p-2 rounded-lg bg-[#FAF8F5] border border-slate-200 text-center">
                    <div className="w-full h-7 rounded bg-[#BE5EC6] mb-1.5 shadow-xs" />
                    <span className="text-[10px] font-mono font-bold block text-slate-700">#BE5EC6</span>
                    <span className="text-[9px] text-slate-400">Purple</span>
                  </div>
                  <div className="p-2 rounded-lg bg-[#FAF8F5] border border-slate-200 text-center">
                    <div className="w-full h-7 rounded bg-[#7F00FF] mb-1.5 shadow-xs" />
                    <span className="text-[10px] font-mono font-bold block text-slate-700">#7F00FF</span>
                    <span className="text-[9px] text-slate-400">Violet</span>
                  </div>
                </div>

                {/* Typography Ramp */}
                <div className="bg-[#FAF8F5] p-3 rounded-xl border border-slate-200/70 space-y-1.5">
                  <div className="flex justify-between items-center text-[10px] text-slate-400 font-mono">
                    <span>TYPOGRAPHY PAIRING</span>
                    <span>Cabinet Grotesk + Work Sans + Lora</span>
                  </div>
                  <div className="font-bold text-base text-[#18120F]">
                    Cabinet Grotesk Display Headings
                  </div>
                  <div className="text-xs text-slate-600">
                    Work Sans for high-density tabular metadata and body copy.
                  </div>
                  <div className="font-serif italic text-xs text-[#BE5EC6]">
                    Lora Serif italic for hover state micro-delight.
                  </div>
                </div>

                {/* Micro CTA */}
                <div className="pt-2 flex items-center justify-between text-xs text-slate-500">
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                    WCAG AA 4.5:1 Compliant
                  </span>
                  <a href="#systems" className="text-[#046BD2] font-semibold hover:underline">
                    View Full Spec →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Marquee Ticker: Modern Clean Style */}
      <div className="border-y border-slate-200/80 bg-white py-4 overflow-hidden">
        <div className="marquee-inner">
          {PORTFOLIO_DATA.skills.concat(PORTFOLIO_DATA.skills).map((skill, idx) => (
            <div key={idx} className="flex items-center gap-6 px-4 shrink-0">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-700">
                {skill}
              </span>
              <span className="text-[#F37335]">★</span>
            </div>
          ))}
        </div>
      </div>

      {/* Selected Work Section with Category Filters */}
      <section id="work" className="py-24 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="text-xs font-mono uppercase tracking-wider text-[#F37335] font-semibold">
              Curated Portfolio
            </span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#18120F] mt-1">
              Enterprise Case Studies
            </h2>
            <p className="text-sm text-[#475569] max-w-xl mt-2">
              Deep dives into operational platforms, real-time telemetry dashboards, and multi-platform design tokens.
            </p>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex items-center gap-1.5 p-1 bg-slate-100 rounded-xl overflow-x-auto max-w-full">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all whitespace-nowrap ${
                  activeCategory === cat.id
                    ? 'bg-white text-[#18120F] shadow-xs'
                    : 'text-[#64748B] hover:text-[#18120F]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setPreviewProject(project)}
              className="group bg-white border border-slate-200/90 rounded-2xl overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between cursor-pointer"
            >
              {/* Image Preview Container */}
              <div className="relative aspect-16/10 bg-slate-100 overflow-hidden border-b border-slate-100">
                <SafeImage
                  src={project.image}
                  alt={project.title}
                  fallbackType="dashboard"
                  title={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />

                <div className="absolute top-4 left-4 flex items-center gap-2">
                  <span className="bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-md text-[11px] font-bold text-[#18120F] shadow-xs">
                    {project.number} · {project.industry}
                  </span>
                </div>

                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="inline-flex items-center gap-1 text-xs font-semibold bg-white px-3 py-1.5 rounded-full text-[#18120F] shadow-md">
                    <span>Inspect</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#BE5EC6]" />
                  </span>
                </div>
              </div>

              {/* Content Body */}
              <div className="p-7 space-y-4 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl md:text-2xl font-bold text-[#18120F] group-hover:text-[#F37335] transition-colors">
                      {project.title}
                    </h3>
                    <div className="w-7 h-7 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center p-1">
                      <SafeImage
                        src={project.logoIcon}
                        alt="icon"
                        fallbackType="logo"
                        title={project.title}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </div>

                  <p className="text-sm text-[#475569] leading-relaxed line-clamp-3">
                    {project.description}
                  </p>
                </div>

                {/* Metrics */}
                <div className="pt-4 border-t border-slate-100 space-y-1.5">
                  {project.metrics.map((metric, mIdx) => (
                    <div key={mIdx} className="flex items-center gap-2 text-xs text-[#334155] font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#BE5EC6]" />
                      <span>{metric}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Atomic Design Systems Deep-Dive */}
      <section id="systems" className="py-20 px-6 bg-[#FAF8F5] border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 space-y-5">
              <span className="text-xs font-mono uppercase tracking-wider text-[#BE5EC6] font-semibold">
                Architecture Focus
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#18120F] tracking-tight">
                Scalable Atomic Systems Designed for Engineering Velocity
              </h2>
              <p className="text-base text-[#475569] leading-relaxed">
                Modern enterprise applications fail without clear taxonomy. I build design token architectures that
                synchronize directly between Figma, React, and CSS variables—preventing styling regressions and cutting
                front-end sprint cycle times by 40%.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-orange-100 text-[#F37335] flex items-center justify-center shrink-0 text-xs font-bold mt-0.5">
                    1
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#18120F]">Semantic Token Layers</h4>
                    <p className="text-xs text-slate-500">Abstracting brand primitives into semantic usage roles for automated theming.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-purple-100 text-[#BE5EC6] flex items-center justify-center shrink-0 text-xs font-bold mt-0.5">
                    2
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#18120F]">High-Density Data Grids</h4>
                    <p className="text-xs text-slate-500">Engineered for energy management, crypto telemetries, and operational logistics.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-blue-100 text-[#046BD2] flex items-center justify-center shrink-0 text-xs font-bold mt-0.5">
                    3
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#18120F]">Multi-Platform Parity</h4>
                    <p className="text-xs text-slate-500">Component libraries that bridge desktop enterprise consoles and mobile companion apps.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Design System Visualizer */}
            <div className="lg:col-span-7">
              <div className="bg-white rounded-2xl border border-slate-200 shadow-lg p-6">
                <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                  <div className="flex items-center gap-2">
                    <Layers className="w-4 h-4 text-[#F37335]" />
                    <span className="font-bold text-sm text-[#18120F]">Design System Token Inspector</span>
                  </div>

                  <div className="flex items-center gap-1.5 p-1 bg-slate-100 rounded-lg text-xs">
                    <button
                      onClick={() => setActiveTab('tokens')}
                      className={`px-3 py-1 rounded font-medium transition-colors ${
                        activeTab === 'tokens' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-500'
                      }`}
                    >
                      Tokens
                    </button>
                    <button
                      onClick={() => setActiveTab('components')}
                      className={`px-3 py-1 rounded font-medium transition-colors ${
                        activeTab === 'components' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-500'
                      }`}
                    >
                      Buttons
                    </button>
                    <button
                      onClick={() => setActiveTab('states')}
                      className={`px-3 py-1 rounded font-medium transition-colors ${
                        activeTab === 'states' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-500'
                      }`}
                    >
                      Cards
                    </button>
                  </div>
                </div>

                {/* Tab 1: Tokens */}
                {activeTab === 'tokens' && (
                  <div className="py-5 space-y-4">
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                      <div className="p-3 rounded-lg border border-slate-100 bg-[#FCFAF8]">
                        <div className="h-10 rounded bg-[#F37335] mb-2" />
                        <span className="text-xs font-bold block text-slate-800">Primary Orange</span>
                        <code className="text-[11px] text-slate-500">var(--brand-orange)</code>
                      </div>
                      <div className="p-3 rounded-lg border border-slate-100 bg-[#FCFAF8]">
                        <div className="h-10 rounded bg-[#BE5EC6] mb-2" />
                        <span className="text-xs font-bold block text-slate-800">Accent Purple</span>
                        <code className="text-[11px] text-slate-500">var(--brand-purple)</code>
                      </div>
                      <div className="p-3 rounded-lg border border-slate-100 bg-[#FCFAF8]">
                        <div className="h-10 rounded bg-[#7F00FF] mb-2" />
                        <span className="text-xs font-bold block text-slate-800">Deep Violet</span>
                        <code className="text-[11px] text-slate-500">var(--brand-violet)</code>
                      </div>
                      <div className="p-3 rounded-lg border border-slate-100 bg-[#FCFAF8]">
                        <div className="h-10 rounded bg-[#18120F] mb-2" />
                        <span className="text-xs font-bold block text-slate-800">Dark Ink</span>
                        <code className="text-[11px] text-slate-500">var(--brand-ink)</code>
                      </div>
                    </div>

                    <div className="p-4 bg-slate-900 text-slate-200 rounded-xl text-xs font-mono overflow-x-auto">
                      <p className="text-emerald-400">// Tailwind / CSS Tokens Synchronized</p>
                      <p>:root &#123;</p>
                      <p className="pl-4">--brand-orange: #F37335;</p>
                      <p className="pl-4">--brand-purple: #BE5EC6;</p>
                      <p className="pl-4">--font-display: 'Cabinet Grotesk', sans-serif;</p>
                      <p className="pl-4">--font-accent: 'Lora', serif;</p>
                      <p>&#125;</p>
                    </div>
                  </div>
                )}

                {/* Tab 2: Components */}
                {activeTab === 'components' && (
                  <div className="py-5 space-y-4">
                    <p className="text-xs text-slate-500">Interactive live variants generated from token rules:</p>
                    <div className="flex flex-wrap items-center gap-4">
                      <button className="gradient-fill-btn text-xs uppercase tracking-wider py-2.5 px-6">
                        Primary Gradient
                      </button>
                      <button className="gradient-stroke-btn">
                        <span className="gradient-stroke-btn-inner text-xs font-semibold py-2 px-5">
                          Border Stroke
                        </span>
                      </button>
                      <button className="px-5 py-2.5 rounded-full border border-slate-200 bg-white hover:bg-slate-50 text-xs font-semibold text-slate-800 transition-colors">
                        Secondary Neutral
                      </button>
                      <button className="px-5 py-2.5 rounded-full bg-slate-100 text-slate-400 text-xs font-semibold cursor-not-allowed">
                        Disabled State
                      </button>
                    </div>
                  </div>
                )}

                {/* Tab 3: States */}
                {activeTab === 'states' && (
                  <div className="py-5">
                    <div className="p-5 rounded-xl border border-slate-200 bg-[#FFFDFB] shadow-sm flex items-center justify-between">
                      <div>
                        <span className="text-[11px] font-mono text-[#F37335] uppercase font-bold">Token Spec</span>
                        <h4 className="text-base font-bold text-[#18120F]">Dynamic Dashboard Node</h4>
                        <p className="text-xs text-slate-500 mt-1">Automatic hover lift + 200ms settling curves.</p>
                      </div>
                      <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-semibold">
                        Ready for Prod
                      </span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recommendations / Social Proof */}
      <section id="testimonials" className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-mono uppercase tracking-wider text-[#046BD2] font-semibold">
            Industry Endorsements
          </span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#18120F] mt-1">
            Recommended by Enterprise Leaders
          </h2>
          <p className="text-sm text-[#475569] mt-2">
            Feedback from engineers, product managers, and marketing heads across high-growth startups and global firms.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PORTFOLIO_DATA.testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-white border border-slate-200/90 rounded-2xl p-6 shadow-xs flex flex-col justify-between hover:shadow-md transition-shadow"
            >
              <div className="space-y-4">
                <div className="w-8 h-8 rounded-full bg-orange-50 border border-orange-100 flex items-center justify-center text-xs font-bold text-[#F37335]">
                  {t.author.split(' ').map(n => n[0]).join('')}
                </div>
                <p className="text-xs md:text-sm text-[#334155] leading-relaxed italic">
                  "{t.quote}"
                </p>
              </div>

              <div className="pt-6 border-t border-slate-100 mt-6">
                <h5 className="font-bold text-sm text-[#18120F]">{t.author}</h5>
                <span className="text-[11px] font-semibold text-[#F37335] block uppercase tracking-wider">
                  {t.role}
                </span>
                <span className="text-[11px] text-[#64748B] block font-medium">
                  {t.company}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 bg-[#18120F] text-white">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          <span className="inline-block px-3.5 py-1 rounded-full bg-white/10 text-xs font-semibold tracking-wider uppercase text-[#FDEDE5]">
            Let’s Connect
          </span>

          <h2 className="text-3xl md:text-5xl font-bold tracking-tight leading-tight">
            Ready to Scale Your Product with an <br />
            <span className="gradient-text">Atomic Design System?</span>
          </h2>

          <p className="text-base text-white/70 max-w-xl mx-auto leading-relaxed">
            I’m available for full-time Senior/Staff UI/UX roles, design system architecture sprints, 
            and complex dashboard overhauls.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <a
              href={`mailto:${PORTFOLIO_DATA.profile.email}`}
              className="gradient-fill-btn text-sm font-semibold tracking-wide py-3 px-8 inline-flex items-center gap-2"
            >
              <Mail className="w-4 h-4" />
              <span>Send An Email</span>
            </a>

            <button
              onClick={handleCopyEmail}
              className="px-6 py-3 rounded-full border border-white/20 bg-white/5 hover:bg-white/15 text-sm font-semibold text-white transition-all inline-flex items-center gap-2"
            >
              {copiedEmail ? (
                <>
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span>Copied to Clipboard!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  <span>Copy: {PORTFOLIO_DATA.profile.email}</span>
                </>
              )}
            </button>
          </div>

          <div className="pt-8 border-t border-white/10 flex flex-wrap items-center justify-center gap-8 text-xs text-white/50">
            <span>📍 Based in Lagos, Nigeria</span>
            <span>🌐 Open to Global Relocation &amp; Remote</span>
            <span>⚡ Available immediately</span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-28 sm:mt-40 border-t border-slate-200 py-10 px-6 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <SafeImage
              src={PORTFOLIO_DATA.profile.logoFull}
              alt="Logo"
              fallbackType="logo"
              title="AID"
              className="h-7 w-auto object-contain"
            />
            <span className="text-xs font-semibold text-[#18120F]">
              {PORTFOLIO_DATA.profile.shortName} · Senior UI/UX Designer
            </span>
          </div>

          {/* Quick links including archive */}
          <div className="flex items-center gap-6 text-xs text-slate-500 font-medium">
            <a href="#work" className="hover:text-slate-900 transition-colors">Work</a>
            <a href="#systems" className="hover:text-slate-900 transition-colors">Systems</a>
            <button 
              onClick={onNavigateOld} 
              className="text-[#BE5EC6] hover:text-[#7F00FF] font-semibold underline underline-offset-4"
            >
              Archived WordPress Portfolio (/old)
            </button>
            <button 
              onClick={onOpenCodeModal}
              className="text-[#F37335] hover:underline"
            >
              WP Theme Files (.php)
            </button>
          </div>

          <div className="text-xs text-slate-400">
            © 2026 {PORTFOLIO_DATA.profile.shortName}. Powered by An Introverted Designer.
          </div>
        </div>
      </footer>

      {/* Interactive Project Modal */}
      {previewProject && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          <div className="bg-white rounded-2xl max-w-3xl w-full p-6 md:p-8 shadow-2xl relative animate-in fade-in zoom-in-95 duration-200">
            <div className="flex items-center justify-between pb-4 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono text-[#F37335] font-bold">
                  {previewProject.number} · {previewProject.industry}
                </span>
                <h3 className="text-xl font-bold text-[#18120F]">
                  {previewProject.title}
                </h3>
              </div>
              <button
                onClick={() => setPreviewProject(null)}
                className="p-1.5 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-700 transition-colors"
                aria-label="Close modal"
              >
                ✕
              </button>
            </div>

            <div className="my-6 aspect-16/9 rounded-xl overflow-hidden border border-slate-200 bg-slate-100">
              <SafeImage
                src={previewProject.image}
                alt={previewProject.title}
                fallbackType="dashboard"
                title={previewProject.title}
                className="w-full h-full object-cover"
              />
            </div>

            <p className="text-sm md:text-base text-slate-700 leading-relaxed mb-6">
              {previewProject.description}
            </p>

            <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 space-y-2 mb-6">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 font-mono">
                Key Quantified Outcomes
              </h4>
              {previewProject.metrics.map((metric, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs md:text-sm text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>{metric}</span>
                </div>
              ))}
            </div>

            <div className="flex items-center justify-between gap-4">
              {previewProject.link ? (
                <a
                  href={previewProject.link}
                  target="_blank"
                  rel="noreferrer"
                  className="gradient-fill-btn text-xs uppercase tracking-wider py-2.5 px-6 inline-flex items-center gap-2"
                >
                  <span>Launch Live Case Study</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              ) : (
                <span className="text-xs text-slate-400 italic">
                  Internal enterprise platform protected under NDA
                </span>
              )}

              <button
                onClick={() => setPreviewProject(null)}
                className="px-5 py-2.5 rounded-full border border-slate-200 text-xs font-semibold text-slate-700 hover:bg-slate-50 transition-colors"
              >
                Close Preview
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
