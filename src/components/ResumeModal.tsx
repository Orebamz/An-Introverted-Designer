import React, { useState } from 'react';
import { 
  X, 
  Download, 
  ExternalLink, 
  FileText, 
  Briefcase, 
  GraduationCap, 
  Target, 
  Check, 
  Copy, 
  Mail, 
  MapPin, 
  Linkedin, 
  Globe 
} from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'preview' | 'experience' | 'skills'>('preview');
  const [copiedEmail, setCopiedEmail] = useState(false);

  if (!isOpen) return null;

  const resumePdfUrl = 'https://drive.google.com/file/d/1aW2qp094P2Dl2tL8wIvHw6jK-ZXiet6M/view';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PORTFOLIO_DATA.profile.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 md:p-8 bg-black/60 backdrop-blur-md animate-fade-in"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-4xl max-h-[92vh] bg-white rounded-3xl shadow-2xl border border-white/80 overflow-hidden flex flex-col pointer-events-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header Bar */}
        <div className="px-6 py-4 border-b border-slate-100 flex flex-wrap items-center justify-between gap-4 bg-gradient-to-r from-white via-[#FFF8F4] to-white">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#FFF3ED] border border-[#F37335]/30 flex items-center justify-center text-[#F37335] shrink-0">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold font-['Cabinet_Grotesk',sans-serif] text-[#18120F] leading-tight">
                Esther Oreoluwa Bamidele
              </h3>
              <p className="text-xs text-[#18120F]/70 font-['Work_Sans',sans-serif]">
                Curriculum Vitae • Product Designer & Design Architect
              </p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-2">
            <a
              href={resumePdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white border border-slate-200 hover:border-[#F37335] text-xs font-semibold text-[#18120F] transition-all shadow-2xs hover:shadow-xs"
              title="Open Original PDF"
            >
              <ExternalLink className="w-3.5 h-3.5 text-[#F37335]" />
              <span className="hidden sm:inline">Open PDF</span>
            </a>

            <a
              href={resumePdfUrl}
              download="Esther-Oreoluwa-Bamidele-Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-gradient-to-r from-[#F37335] to-[#BE5EC6] text-white text-xs font-semibold hover:opacity-95 transition-opacity shadow-xs"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </a>

            <button
              onClick={onClose}
              className="w-9 h-9 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center transition-colors ml-1 cursor-pointer"
              aria-label="Close resume modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Tab navigation */}
        <div className="px-6 pt-3 pb-2 border-b border-slate-100 bg-white flex items-center gap-2 overflow-x-auto">
          <button
            onClick={() => setActiveTab('preview')}
            className={`px-4 py-1.5 rounded-lg text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer ${
              activeTab === 'preview' 
                ? 'bg-[#FFF3ED] text-[#F37335]' 
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
            }`}
          >
            Formatted Resume
          </button>
          <button
            onClick={() => setActiveTab('experience')}
            className={`px-4 py-1.5 rounded-lg text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer ${
              activeTab === 'experience' 
                ? 'bg-[#FFF3ED] text-[#F37335]' 
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
            }`}
          >
            Career Timeline
          </button>
          <button
            onClick={() => setActiveTab('skills')}
            className={`px-4 py-1.5 rounded-lg text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer ${
              activeTab === 'skills' 
                ? 'bg-[#FFF3ED] text-[#F37335]' 
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
            }`}
          >
            Skills & Competencies
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-8 bg-slate-50/50">
          {activeTab === 'preview' && (
            <div className="max-w-3xl mx-auto bg-white p-6 sm:p-10 rounded-2xl border border-slate-200/80 shadow-sm space-y-8">
              {/* Profile Header */}
              <div className="border-b border-slate-200 pb-6">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <h1 className="text-2xl sm:text-3xl font-bold font-['Cabinet_Grotesk',sans-serif] text-[#18120F]">
                      Esther Oreoluwa Bamidele
                    </h1>
                    <p className="text-base text-[#F37335] font-medium font-['Work_Sans',sans-serif] mt-1">
                      Senior UI/UX Designer & Product Designer
                    </p>
                  </div>
                  <div className="text-xs text-slate-500 space-y-1 sm:text-right">
                    <div className="flex items-center sm:justify-end gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-[#F37335]" />
                      <span>Lagos, Nigeria • Remote & Relocation</span>
                    </div>
                    <div className="flex items-center sm:justify-end gap-1.5">
                      <Mail className="w-3.5 h-3.5 text-[#BE5EC6]" />
                      <button 
                        onClick={handleCopyEmail}
                        className="hover:text-[#F37335] cursor-pointer"
                      >
                        {copiedEmail ? 'Email Copied!' : PORTFOLIO_DATA.profile.email}
                      </button>
                    </div>
                    <div className="flex items-center sm:justify-end gap-1.5">
                      <Globe className="w-3.5 h-3.5 text-blue-500" />
                      <a href="https://anintroverteddesigner.com" target="_blank" rel="noopener noreferrer" className="hover:underline">
                        anintroverteddesigner.com
                      </a>
                    </div>
                  </div>
                </div>

                <div className="mt-5 p-4 rounded-xl bg-[#FFF9F5] border border-[#F37335]/20 text-xs sm:text-sm text-[#18120F]/85 leading-relaxed font-['Work_Sans',sans-serif]">
                  <strong>Executive Summary:</strong> Senior Product Designer with 6+ years of experience leading UX/UI design across high-density enterprise SaaS, health-tech, and fintech platforms. Proven track record in creating design tokens and scalable atomic design systems for 120,000+ users, executing CRO redesigns that boosted onboarding activation by 25%, and bridging engineering-design workflows.
                </div>
              </div>

              {/* Core Experience */}
              <div className="space-y-6">
                <h2 className="text-sm font-bold uppercase tracking-wider text-[#18120F] flex items-center gap-2">
                  <Briefcase className="w-4 h-4 text-[#F37335]" />
                  <span>Professional Work Experience</span>
                </h2>

                <div className="space-y-6">
                  {PORTFOLIO_DATA.experience.map((exp) => (
                    <div key={exp.id} className="relative pl-4 border-l-2 border-[#F37335]/30 space-y-2">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <h3 className="text-base font-bold text-[#18120F] font-['Cabinet_Grotesk',sans-serif]">
                          {exp.role} <span className="text-slate-400 font-normal">at</span> <span className="text-[#F37335]">{exp.company}</span>
                        </h3>
                        <span className="text-xs font-semibold text-slate-500 px-2.5 py-0.5 rounded-full bg-slate-100">
                          {exp.period}
                        </span>
                      </div>
                      <p className="text-xs sm:text-sm text-[#18120F]/80 leading-relaxed font-['Work_Sans',sans-serif]">
                        {exp.description}
                      </p>
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {exp.skills.map((skill, sIdx) => (
                          <span key={sIdx} className="text-[11px] px-2 py-0.5 rounded bg-slate-100 text-slate-700">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Education & Credentials */}
              <div className="border-t border-slate-200 pt-6 space-y-4">
                <h2 className="text-sm font-bold uppercase tracking-wider text-[#18120F] flex items-center gap-2">
                  <GraduationCap className="w-4 h-4 text-[#BE5EC6]" />
                  <span>Education & Specializations</span>
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm">
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/70">
                    <p className="font-bold text-[#18120F]">Bachelor of Science (B.Sc)</p>
                    <p className="text-slate-500 text-xs mt-0.5">Focus on Digital Technologies & Interaction Systems</p>
                  </div>
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/70">
                    <p className="font-bold text-[#18120F]">Design Systems & CRO Leadership</p>
                    <p className="text-slate-500 text-xs mt-0.5">Enterprise Token Architecture & Usability Engineering</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'experience' && (
            <div className="max-w-3xl mx-auto space-y-4">
              {PORTFOLIO_DATA.experience.map((exp, idx) => (
                <div key={exp.id} className="p-6 bg-white rounded-2xl border border-slate-200/80 shadow-xs space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs uppercase tracking-wider font-semibold text-[#F37335]">
                      Role 0{idx + 1} • {exp.type}
                    </span>
                    <span className="text-xs text-slate-500 font-medium">{exp.period}</span>
                  </div>
                  <h3 className="text-xl font-bold font-['Cabinet_Grotesk',sans-serif] text-[#18120F]">
                    {exp.role} — {exp.company}
                  </h3>
                  <p className="text-xs text-slate-500">{exp.location}</p>
                  <p className="text-sm text-[#18120F]/80 leading-relaxed font-['Work_Sans',sans-serif]">
                    {exp.description}
                  </p>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {exp.skills.map((s, i) => (
                      <span key={i} className="text-xs px-2.5 py-1 rounded-full bg-[#FFF3ED] text-[#F37335] font-medium border border-[#F37335]/20">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'skills' && (
            <div className="max-w-3xl mx-auto space-y-6">
              <div className="p-6 bg-white rounded-2xl border border-slate-200/80 shadow-xs space-y-4">
                <h3 className="text-base font-bold text-[#18120F] flex items-center gap-2">
                  <Target className="w-4 h-4 text-[#F37335]" />
                  <span>Design Systems, Tooling & Methodologies</span>
                </h3>
                <div className="flex flex-wrap gap-2">
                  {PORTFOLIO_DATA.skills.map((skill, idx) => (
                    <span key={idx} className="px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-[#FFF3ED] hover:text-[#F37335] text-xs font-medium text-slate-700 transition-colors">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-5 bg-white rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h4 className="text-sm font-bold text-[#18120F]">Design Competencies</h4>
                  <ul className="text-xs text-slate-600 space-y-1.5 list-disc list-inside">
                    <li>Multi-platform Enterprise Dashboards</li>
                    <li>Design Tokens & Scalable Figma Libraries</li>
                    <li>Conversion Rate Optimization (CRO)</li>
                    <li>Interactive Prototyping & Micro-interactions</li>
                    <li>Qualitative & Quantitative User Research</li>
                  </ul>
                </div>

                <div className="p-5 bg-white rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                  <h4 className="text-sm font-bold text-[#18120F]">Technical & Architecture</h4>
                  <ul className="text-xs text-slate-600 space-y-1.5 list-disc list-inside">
                    <li>Design Token Pipelines (JSON / CSS variables)</li>
                    <li>Frontend Handoff & Specs (HTML/CSS/Tailwind)</li>
                    <li>Component State Trees & Accessibility (WCAG 2.1)</li>
                    <li>Analytics-informed iterative design sprints</li>
                    <li>Design System Governance & Documentation</li>
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer with quick download */}
        <div className="px-6 py-3.5 bg-white border-t border-slate-100 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-500">
          <div className="flex items-center gap-4">
            <a 
              href="https://www.linkedin.com/in/orebamz/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center gap-1.5 hover:text-[#0A66C2]"
            >
              <Linkedin className="w-3.5 h-3.5 text-[#0A66C2]" />
              <span>LinkedIn Profile</span>
            </a>
            <button 
              onClick={handleCopyEmail}
              className="inline-flex items-center gap-1.5 hover:text-[#F37335] cursor-pointer"
            >
              {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copiedEmail ? 'Copied to Clipboard' : 'Copy Email Address'}</span>
            </button>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-slate-400">PDF document hosted on official portfolio</span>
            <a
              href={resumePdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#F37335] font-semibold hover:underline"
            >
              Download PDF &rarr;
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
