import React, { useState } from 'react';
import { Copy, Check, X, FileCode, CheckCircle2 } from 'lucide-react';

interface WordPressCodeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const WordPressCodeModal: React.FC<WordPressCodeModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'page-old' | 'front-page' | 'header' | 'footer' | 'style'>('page-old');
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const codeSnippets = {
    'page-old': `<?php
/**
 * Template Name: Archived Portfolio (v1)
 * Template Post Type: page
 * 
 * Cleaned and reconstructed standalone WordPress template for /old
 * Stripped of Elementor and Astra plugin bloat.
 * 
 * @package AnIntrovertedDesigner
 */

get_header('clean');
?>

<main id="primary" class="site-main archived-portfolio-v1">
    <!-- Archive Notice Banner -->
    <div class="archive-banner">
        <p>You are viewing the archived v1 homepage design. <a href="<?php echo esc_url( home_url( '/' ) ); ?>">Return to current homepage &rarr;</a></p>
    </div>

    <!-- Master Hero Section with Rolling Snake Ribbon -->
    <section id="master-hero" class="master-hero-stage">
        <div class="hero-content">
            <div class="hero-badge">Hi &#128075;, I'm Esther Oreoluwa Bamidele</div>
            <h1 class="hero-title">Product Designer Scaling Enterprise SaaS Products, &amp; Atomic Design Systems.</h1>
            <p class="hero-bio">Lately, I've been building enterprise-grade systems and translating complex workflows into seamless dashboards for global sectors including fintech, health-tech and aviation.</p>
            
            <div class="hero-experts-link">
                <a href="#testimonials">&mdash; Recommended By Experts &mdash;</a>
            </div>

            <div class="hero-cta-wrap">
                <a href="#projects" class="gradient-stroke-btn">
                    <span class="gradient-stroke-btn-inner">See Selected Projects</span>
                </a>
            </div>
        </div>

        <!-- Angled Running Skills Marquee -->
        <div class="marquee-wrapper">
            <div class="marquee-bar">
                <div class="marquee-inner">
                    <span class="marquee-item">UI/UX Design</span>
                    <span class="marquee-item">Interaction Design</span>
                    <span class="marquee-item">Prototyping</span>
                    <span class="marquee-item">Design Systems</span>
                    <span class="marquee-item">Data Visualization</span>
                    <span class="marquee-item">Frontend Development</span>
                    <span class="marquee-item">Information Architecture</span>
                    <span class="marquee-item">User Research</span>
                    <span class="marquee-item">Figma</span>
                    <span class="marquee-item">Framer</span>
                    <span class="marquee-item">Slack</span>
                    <span class="marquee-item">Webflow</span>
                    <!-- Repeat for infinite marquee loop -->
                    <span class="marquee-item" aria-hidden="true">UI/UX Design</span>
                    <span class="marquee-item" aria-hidden="true">Interaction Design</span>
                    <span class="marquee-item" aria-hidden="true">Prototyping</span>
                    <span class="marquee-item" aria-hidden="true">Design Systems</span>
                </div>
            </div>
        </div>
    </section>

    <!-- Curated Projects Section -->
    <section id="projects" class="projects-section">
        <div class="section-header">
            <h2>Curated Projects</h2>
            <p>A curated selection of enterprise platforms, dashboards, and design systems delivered for Fortune 500 companies.</p>
        </div>

        <div class="projects-grid">
            <!-- 01 Tecometrics -->
            <article class="project-card">
                <div class="reveal-arrow">&rarr;</div>
                <div class="project-info">
                    <div class="industry-text">01 Energy Tech &#128274;</div>
                    <div class="title-container">
                        <h3 class="title-base">Tecometrics</h3>
                        <h3 class="title-hover">Tecometrics</h3>
                    </div>
                    <p>Enterprise energy operations platform unifying real-time monitoring, predictive maintenance, and compliance reporting across distributed industrial assets.</p>
                    <ul class="metrics-list">
                        <li>&bull; 62% faster incident response</li>
                        <li>&bull; 85% reduction in reporting time</li>
                        <li>&bull; 34% decrease in unplanned downtime</li>
                    </ul>
                </div>
                <div class="dashboard-img">
                    <img src="<?php echo esc_url( get_theme_file_uri( '/assets/images/Dashboard-Home-Base-.jpg' ) ); ?>" alt="Tecometrics Dashboard" />
                </div>
            </article>

            <!-- 02 SnapVista -->
            <article class="project-card">
                <div class="reveal-arrow">&rarr;</div>
                <div class="project-info">
                    <div class="industry-text">02 Marketing &#128274;</div>
                    <div class="title-container">
                        <h3 class="title-base">SnapVista</h3>
                        <h3 class="title-hover">SnapVista</h3>
                    </div>
                    <p>Designed a tokenized design system for a 120K+ user analytics platform, cutting development time by 40%.</p>
                    <ul class="metrics-list">
                        <li>&bull; 40% faster development time</li>
                        <li>&bull; 200+ tokenized components</li>
                    </ul>
                </div>
                <div class="dashboard-img">
                    <img src="<?php echo esc_url( get_theme_file_uri( '/assets/images/Dashboard-2.png' ) ); ?>" alt="SnapVista Dashboard" />
                </div>
            </article>

            <!-- 03 FundHive -->
            <article class="project-card">
                <div class="reveal-arrow">&rarr;</div>
                <div class="project-info">
                    <div class="industry-text">03 Fin-Tech &#128274;</div>
                    <div class="title-container">
                        <h3 class="title-base">FundHive</h3>
                        <h3 class="title-hover">FundHive</h3>
                    </div>
                    <p>Designed crypto-powered crowdfunding platform enabling African creators to raise global funds through blockchain, smart contracts, and AI-assisted campaign creation.</p>
                    <ul class="metrics-list">
                        <li>&bull; 53 campaigns launched in first 2 months of beta</li>
                        <li>&bull; $823,000 raised across all campaigns</li>
                        <li>&bull; Average 12 minutes to create and publish a campaign</li>
                    </ul>
                </div>
                <div class="dashboard-img">
                    <img src="<?php echo esc_url( get_theme_file_uri( '/assets/images/Fundhive-AI-Fraud-Detection.png' ) ); ?>" alt="FundHive Dashboard" />
                </div>
            </article>

            <!-- 04 Portfolio IQ -->
            <article class="project-card">
                <div class="reveal-arrow">&rarr;</div>
                <div class="project-info">
                    <div class="industry-text">04 Fin-Tech &#128274;</div>
                    <div class="title-container">
                        <h3 class="title-base">Portfolio IQ</h3>
                        <h3 class="title-hover">Portfolio IQ</h3>
                    </div>
                    <p>AI-powered portfolio management platform unifying stocks, crypto, and bonds with automated rebalancing and intelligent insights for retail investors.</p>
                    <ul class="metrics-list">
                        <li>&bull; $50M+ in tracked assets (6 months)</li>
                        <li>&bull; 67% AI recommendation adoption</li>
                        <li>&bull; 58% daily active usage (industry average: 23%)</li>
                    </ul>
                </div>
                <div class="dashboard-img">
                    <img src="<?php echo esc_url( get_theme_file_uri( '/assets/images/Dashboard-975x1024.png' ) ); ?>" alt="Portfolio IQ Dashboard" />
                </div>
            </article>
        </div>
    </section>

    <!-- Testimonials Section -->
    <section id="testimonials" class="testimonials-section">
        <div class="section-header">
            <h2>Recommended By</h2>
        </div>
        <div class="testimonials-slider">
            <div class="testimonial-card">
                <blockquote>"Esther's mastery of scalable design systems is incredible. She built an adaptive, multi-platform dashboard framework that effortlessly bridges light and dark modes while flawlessly organizing dense analytics data."</blockquote>
                <div class="author-meta">
                    <strong>Barbara Russo</strong>
                    <span>HEAD OF MARKETING &bull; SNAPVISTA</span>
                </div>
            </div>
            <div class="testimonial-card">
                <blockquote>"Esther's handling of complex Web3 information architecture and AI logic made building FundHive incredibly smooth. She translated dense blockchain mechanics into clear user flows that our development team could implement flawlessly."</blockquote>
                <div class="author-meta">
                    <strong>Benjamin Duncan</strong>
                    <span>LEAD ENGINEER &bull; FUNDHIVE</span>
                </div>
            </div>
        </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="contact-section">
        <h2>Let's Build Something <span class="gradient-text">Amazing</span> Together</h2>
        <p>I'm always interested in hearing about new projects and opportunities.</p>
        <div class="contact-cards">
            <div class="contact-card">
                <h3>Email Me</h3>
                <p>For project enquiries and collaborations</p>
                <a href="mailto:orebamz@anintroverteddesigner.com">orebamz@anintroverteddesigner.com</a>
            </div>
            <div class="contact-card">
                <h3>Based In</h3>
                <p>Working remotely and open to relocation</p>
                <strong>Lagos, Nigeria</strong>
            </div>
        </div>
    </section>
</main>

<?php get_footer('clean'); ?>`,

    'front-page': `<?php
/**
 * The template for displaying the default modern Homepage
 * File: front-page.php
 * 
 * Features prominent navigation link to the /old archive page
 * 
 * @package AnIntrovertedDesigner
 */

get_header();
?>

<!-- Announcement notice pointing to /old -->
<div class="archive-nav-bar bg-slate-900 text-white py-2 px-4 text-xs flex justify-between items-center">
    <span>Viewing modern homepage template concept.</span>
    <a href="<?php echo esc_url( home_url( '/old/' ) ); ?>" class="underline text-purple-300 font-semibold hover:text-white">
        View Archived Portfolio (v1) &rarr;
    </a>
</div>

<header class="site-header">
    <nav class="nav-container flex justify-between items-center py-4 px-6 max-w-7xl mx-auto">
        <a href="<?php echo esc_url( home_url( '/' ) ); ?>" class="brand-logo font-bold text-xl">
            Esther O. Bamidele
        </a>
        <div class="nav-links flex gap-6 text-sm font-semibold uppercase">
            <a href="#work">Work</a>
            <a href="#systems">Design Systems</a>
            <a href="#testimonials">Recommendations</a>
            <!-- Direct link to the /old page -->
            <a href="<?php echo esc_url( home_url( '/old/' ) ); ?>" class="text-purple-600 font-bold">
                Archived (v1)
            </a>
            <a href="#contact" class="cta-link">Contact</a>
        </div>
    </nav>
</header>

<main id="primary" class="new-homepage-main">
    <!-- Hero Section -->
    <section class="hero py-20 px-6 max-w-7xl mx-auto">
        <h1 class="text-5xl font-bold tracking-tight">
            Architecting Scalable SaaS Systems &amp; Complex Dashboards.
        </h1>
        <p class="mt-4 text-lg text-slate-600 max-w-2xl">
            Senior UI/UX Designer translating dense enterprise operations into high-performance atomic design systems.
        </p>
        <div class="mt-8 flex gap-4">
            <a href="#work" class="btn-primary">View Case Studies</a>
            <a href="<?php echo esc_url( home_url( '/old/' ) ); ?>" class="btn-secondary">Inspect /old Archive</a>
        </div>
    </section>

    <!-- Case Studies Loop -->
    <section id="work" class="py-16 px-6 max-w-7xl mx-auto">
        <!-- Render curated projects -->
    </section>
</main>

<?php get_footer(); ?>`,

    'header': `<!doctype html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo( 'charset' ); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover">
    <link rel="profile" href="https://gmpg.org/xfn/11">
    
    <!-- Brand Fonts: Cabinet Grotesk & Work Sans & Lora -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;1,400;1,600&family=Work+Sans:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <link href="https://api.fontshare.com/v2/css?f[]=cabinet-grotesk@800,700,500,400&display=swap" rel="stylesheet">
    
    <?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
<?php wp_body_open(); ?>`,

    'footer': `<footer class="site-footer border-t border-slate-200 py-8 px-6 bg-white">
    <div class="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
        <div>&copy; <?php echo date('Y'); ?> Esther Oreoluwa Bamidele &bull; Powered by An Introverted Designer</div>
        <div class="flex gap-4">
            <a href="<?php echo esc_url( home_url( '/old/' ) ); ?>" class="text-purple-600 font-semibold">Archived v1 Template</a>
            <a href="#top">Back to top &uarr;</a>
        </div>
    </div>
</footer>
<?php wp_footer(); ?>
</body>
</html>`,

    'style': `/*
Theme Name: An Introverted Designer Portfolio
Author: Esther Oreoluwa Bamidele
Version: 2.0.0
Description: Clean reconstructed theme supporting /old archive and new modular front-page.
*/

:root {
  --brand-orange: #F37335;
  --brand-gold: #F5AF19;
  --brand-purple: #BE5EC6;
  --brand-violet: #7F00FF;
  --brand-ink: #18120F;
  --hover-purple: #BE5EC6;
}

body {
  font-family: 'Work Sans', sans-serif;
  color: var(--brand-ink);
  background-color: #FAF8F5;
  margin: 0;
}

/* Glass Header */
.glass-header {
  backdrop-filter: blur(24px);
  -webkit-backdrop-filter: blur(24px);
  background-color: rgba(255, 255, 255, 0.65);
  border: 1px solid rgba(255, 255, 255, 0.8);
  border-radius: 999px;
  box-shadow: 0 20px 25px -5px rgba(190, 154, 179, 0.12);
}

/* Project Card Hover Font Snap & Slide Lift */
.project-card {
  --move-distance: 24px;
  display: flex;
  align-items: center;
  transition: all 0.5s cubic-bezier(0.25, 1, 0.5, 1);
  overflow: hidden;
}

.project-card:hover .project-info,
.project-card:hover .dashboard-img {
  transform: translateX(var(--move-distance));
}

.project-card .title-hover {
  opacity: 0;
  color: var(--hover-purple);
  font-family: 'Lora', serif;
  font-style: italic;
  transition: opacity 0.2s ease-in-out;
}

.project-card:hover .title-base { opacity: 0; }
.project-card:hover .title-hover { opacity: 1; }
.project-card:hover .industry-text { color: var(--hover-purple); }`
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(codeSnippets[activeTab]);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 overflow-hidden">
      <div className="bg-[#18120F] text-white rounded-2xl max-w-4xl w-full h-[85vh] flex flex-col shadow-2xl border border-white/10 animate-in fade-in zoom-in-95 duration-200">
        {/* Modal Header */}
        <div className="p-4 sm:p-6 border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center text-[#F5AF19]">
              <FileCode className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-base sm:text-lg">WordPress Theme Architecture &amp; Clean Templates</h3>
              <p className="text-xs text-white/60">
                Production-ready PHP and CSS templates stripped of plugin bloat.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopy}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-gradient-to-r from-[#F37335] to-[#BE5EC6] text-white rounded-lg text-xs font-semibold hover:opacity-90 transition-opacity"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-300" />
                  <span>Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copy File Content</span>
                </>
              )}
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-white/50 hover:text-white hover:bg-white/10 transition-colors"
              aria-label="Close code modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Tab Selector */}
        <div className="flex items-center gap-2 px-4 sm:px-6 pt-3 border-b border-white/10 bg-white/5 overflow-x-auto">
          {[
            { id: 'page-old', label: 'page-old.php (Archive Template for /old)' },
            { id: 'front-page', label: 'front-page.php (Drafted New Homepage)' },
            { id: 'header', label: 'header.php' },
            { id: 'footer', label: 'footer.php' },
            { id: 'style', label: 'style.css (Cleaned CSS)' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-3 py-2 text-xs font-mono rounded-t-lg transition-colors whitespace-nowrap border-b-2 ${
                activeTab === tab.id
                  ? 'border-[#F37335] text-white bg-[#18120F]'
                  : 'border-transparent text-white/60 hover:text-white'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Code Content View */}
        <div className="p-4 sm:p-6 flex-1 overflow-auto bg-[#0F0A09]">
          <pre className="font-mono text-xs sm:text-[13px] text-white/90 leading-relaxed">
            <code>{codeSnippets[activeTab]}</code>
          </pre>
        </div>

        {/* Modal Footer Notes */}
        <div className="p-3 sm:p-4 border-t border-white/10 bg-white/5 flex flex-wrap items-center justify-between text-xs text-white/60 gap-2">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>To activate in WordPress: Create page in WP Admin &rarr; URL slug <code>/old</code> &rarr; Template: "Archived Portfolio (v1)"</span>
          </div>
          <button
            onClick={onClose}
            className="px-3 py-1 rounded bg-white/10 hover:bg-white/20 text-white transition-colors"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
};
