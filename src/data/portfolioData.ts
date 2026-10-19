




export const PORTFOLIO_DATA = {
  projects: [
    {
      id: "pdfguidestack",
      number: "01",
      industry: "AI Platform / Digital Publishing SaaS",
      title: "PDFGuideStack",
      tagline: "An interactive digital guide marketplace and subscription reading platform featuring an embedded AI assistant, execution checklists, and automated asset delivery.",
      client: "PDFGuideStack SaaS",
      role: "AI Product Builder & Design Engineer",
      timeline: "2 Weeks Rapid Build MVP • 2026",
      description: "An interactive digital guide marketplace and subscription reading platform featuring an embedded AI assistant, execution checklists, and automated asset delivery.",
      metrics: [
        "1K+ Active Subscribers",
        "14-Day Rapid Deployment",
        "100% Automated Content Gating",
        "Zero-Latency AI Streaming"
      ],
      image: "https://res.cloudinary.com/driutxwdh/image/upload/v1791245801/Gemini_Generated_Image_evgrxvevgrxvevgr_1_y8feph.jpg",
      logoIcon: "https://res.cloudinary.com/driutxwdh/image/upload/v1778332643/PDFGS_LOGO_z7n7jj.png",
      liveUrl: "https://pdfguidestack.com",
      isLocked: false,
      deliverables: ["Embedded AI Knowledge Extraction", "Interactive Execution Workspaces", "Unified Library & Social Engagement", "Unified Serverless Publishing Engine"],
      tools: ["React", "Tailwind CSS", "Gemini", "Supabase", "Netlify", "Paystack"],
      overviewHeading: "From Static PDFs to Interactive Reading and AI Conversations in 14 Days.",
      overview: "PDFGuideStack was built to transform static, passive reading into an actionable digital platform and marketplace. The platform supports both individual guide purchases and recurring all-access reading subscriptions.\n\nBuilt from concept to production in just two weeks, the application gives readers a personal digital library, interactive chapter checklists with gamified progress tracking, and an embedded AI assistant to extract insights directly from the material in real time.",
      videoUrl: "https://res.cloudinary.com/driutxwdh/video/upload/v1791412800/SHowcase_WOrk_PDFGuideStack_kvwbwv.mp4",
      interventionImages: [
        {
          url: "https://res.cloudinary.com/driutxwdh/video/upload/v1792187806/SHowcase_WOrk_pdfguidestack_ai_interaction_vhujja.mp4",
          caption: "Embedded AI Knowledge Assistant & Real-Time Query Streaming"
        },
        {
          url: "https://res.cloudinary.com/driutxwdh/video/upload/v1792188024/SHowcase_WOrk_pdfguidestack_likes_saves_checklist_interaction_mninot.mp4",
          caption: "Interactive Chapter Checklists, Bookmarking & Reader Engagement"
        },
        {
          url: "https://res.cloudinary.com/driutxwdh/image/upload/v1791377711/e560575a-33c9-4012-a338-fe5fc51be60b.png",
          caption: "Interactive Execution Workspaces & Reader Library"
        },
        {
          url: "https://res.cloudinary.com/driutxwdh/image/upload/v1791377805/983901fc-4760-4b52-88ad-c02ef373e9d6.png",
          caption: "Embedded AI Knowledge Extraction & Streaming Assistant"
        }
      ],
      outcomeImages: [
        {
          url: "https://res.cloudinary.com/driutxwdh/image/upload/v1791245351/a5c3e799-9c15-4f69-a9d8-4c5d7029d0b2.png",
          caption: "100% Automated Content Gating & Subscriber Analytics"
        },
        {
          url: "https://res.cloudinary.com/driutxwdh/image/upload/v1791377610/f81f5003-5597-4ab4-aa12-537a7d4863dc.png",
          caption: "Interactive Reader Execution Workspaces & Progress Tracking"
        }
      ],
      challenges: [
        { 
          title: "Information Overload", 
          description: "Long, multi-page PDFs make it exhausting for readers to quickly extract specific takeaways and put them into practice." 
        },
        { 
          title: "Passive Content Consumption", 
          description: "Traditional document marketplaces offer no way to interact with content, track reading milestones, complete action items, or engage through likes and bookmarks." 
        },
        { 
          title: "Publishing & Monetization Overhead", 
          description: "Selling digital downloads typically requires juggling disconnected tools for member logins, payment gateways, file gating, and catalog administration." 
        }
      ],
      solutions: [
        { 
          title: "Embedded AI Knowledge Extraction", 
          description: "Integrated a Gemini-powered chat assistant with real-time streaming, allowing users to query documents and instantly extract specific insights without reading end-to-end." 
        },
        { 
          title: "Interactive Execution Workspaces", 
          description: "Built interactive chapter tasks, progress tracking, and gamified completion badges, transforming static reading into an actionable, rewarding experience." 
        },
        { 
          title: "Unified Library & Social Engagement", 
          description: "Designed an intuitive reader dashboard where users manage purchased guides, bookmark favorites, track progress, and like chapters." 
        },
        { 
          title: "Unified Serverless Publishing Engine", 
          description: "Architected a centralized Supabase and Paystack backend that seamlessly handles recurring subscriptions, instant payment verification, content gating, and administrative guide management in one place." 
        }
      ],
      process: [
        { step: "01", title: "Information Architecture & Reader Flow", description: "Mapped out a distraction-free reader interface, integrating chapter navigation, task checklists, and an AI chat drawer into a unified workspace." },
        { step: "02", title: "AI-Driven Rapid Scaffolding", description: "Leveraged Gemini to architect core React components, state handlers, and Tailwind layouts directly in code, completely bypassing static Figma wireframes." },
        { step: "03", title: "Serverless Backend & Paystack Integration", description: "Structured Supabase database schemas, storage buckets, and Netlify payment-verification functions to securely gate content and automate access." },
        { step: "04", title: "Creator CMS & Gamification Engine", description: "Engineered an internal admin dashboard equipped with rich-text chapter formatting, dynamic cross-sell recommendations, and reader execution checklists." }
      ],
      outcomes: [
        { stat: "1K+", label: "Active Subscribers", description: "Scaled the platform to over 1,000 active readers within the initial launch phase with steady community bookmarking and chapter completion." },
        { stat: "14-Day", label: "Rapid Deployment", description: "Shipped a full-stack digital product—spanning user authentication, recurring subscriptions, custom CMS, and AI endpoints—in two weeks." },
        { stat: "100%", label: "Automated Monetization", description: "Automated user onboarding, Paystack checkout, library gating, and digital delivery with zero manual management needed." }
      ],
      quote: {
        text: "Building our marketplace and Integrating a live AI reading assistant changed everything. Flawless technical execution from the database architecture to frontend design.",
        author: "Esther Reed",
        role: "Founder",
        company: "PDFGuideStack"
      }
    },
    {
      id: "drg",
      number: "02",
      industry: "Consumer Social Web App",
      title: "Dating Resume Generator (DRG)",
      tagline: "A highly interactive consumer web application that allows users to generate, customize, and share personalized dating resumes.",
      client: "DRG Consumer Product",
      role: "Design Engineer & Product Builder",
      timeline: "2 weeks Rapid MVP Build • 2026",
      description: "A highly interactive consumer web application that allows users to generate, customize, and share personalized dating resumes.",
      metrics: [
        "2k+ Profile Generations",
        "2x Social Viral Coefficient",
        "Integrated Affiliate System",
        "78% Completion Rate"
      ],
      image: "https://res.cloudinary.com/driutxwdh/image/upload/v1791243430/Gemini_Generated_Image_3asih13asih13asi_1_py2yki.jpg",
      logoIcon: "https://res.cloudinary.com/driutxwdh/image/upload/v1792092278/DRG_Logo_red_yparuo.png",
      liveUrl: "https://datingresumegenerator.com",
      isLocked: false,
      deliverables: ["Interactive Multi-Step Builder", "10 Dynamic Aesthetic Themes", "Serverless High-DPI Canvas Exporter", "Integrated Affiliate & Viral Pass Engine"],
      tools: ["React", "Tailwind CSS", "Gemini", "Supabase", "Netlify", "Paystack"],
      overviewHeading: "Build a highly shareable, customizable platform where users could generate aesthetic \"dating resumes\" outside of traditional swiping apps.",
      overview: "Dating Resume Generator (DRG) is a consumer-facing web application designed to inject fun and structure into modern dating.\n\nThe project required a frictionless UI for rapid generation, coupled with a robust backend capable of handling dynamic state management, affiliate marketing, and promotional passes to drive viral growth.",
      videoUrl: "https://res.cloudinary.com/driutxwdh/video/upload/v1791378009/SHowcase_WOrk_DRG_ryyccm.mp4",
      interventionImages: [
        {
          url: "https://res.cloudinary.com/driutxwdh/image/upload/v1791370762/1660aa1b-ae28-49c6-acdc-1fc9e85bea72.png",
          caption: "Playful Progressive Disclosure Multi-Step Builder"
        },
        {
          url: "https://res.cloudinary.com/driutxwdh/image/upload/v1791370856/273ceb41-0036-45df-98ee-b12bcd750711.png",
          caption: "Dynamic Theme Engine & High-DPI Canvas Exporter"
        }
      ],
      outcomeImages: [
        {
          url: "https://res.cloudinary.com/driutxwdh/image/upload/v1788467091/download_uelqri.png",
          caption: "High-DPI Canvas Exporter & Multi-Theme Generation Engine"
        },
        {
          url: "https://res.cloudinary.com/driutxwdh/image/upload/v1791370955/8b020f65-7767-4c37-90ce-4cc936ff0243.png",
          caption: "Viral Growth Engine & Integrated Affiliate Pass Analytics"
        }
      ],
      challenges: [
        { 
          title: "High Drop-Off in Long Forms", 
          description: "Multi-field forms felt tedious, leading users to abandon creation midway." 
        },
        { 
          title: "Cross-Device Export Rendering", 
          description: "Generating high-resolution PNGs on mobile browsers caused canvas memory crashes." 
        },
        { 
          title: "Monotony in Visual Styles", 
          description: "One-size-fits-all layouts failed to express individual user personalities." 
        }
      ],
      solutions: [
        { 
          title: "Playful Progressive Disclosure", 
          description: "Divided profile creation into 4 micro-steps with live instant previews that makes inputting personal details feel like a lightweight, engaging quiz rather than a chore." 
        },
        { 
          title: "Serverless High-DPI Canvas Exporter", 
          description: "Engineered client-side canvas rendering with crisp 3x pixel density for Retina displays." 
        },
        { 
          title: "Dynamic Theme Engine", 
          description: "Created 10 distinct aesthetic themes with color palettes each (Minimal, Retro, Vogue, Vintage, Espresso, Front Page, Teal, Hearts, Midnight Grunge, Scrapbook)." 
        }
      ],
      process: [
        { step: "01", title: "AI-Driven Scaffolding", description: "Prompted Google AI Studio to architect the initial React components and state logic, completely bypassing static wireframes to immediately begin working in code." },
        { step: "02", title: "In-Browser UX Refinement", description: "Tackled complex micro-interactions—like the high-DPI canvas exporter and step-by-step form states—directly in the browser, iterating on the UX as the build naturally unraveled." },
        { step: "03", title: "Monetization & Affiliate Loop", description: "Engineered a Paystack-integrated affiliate and promo-pass backend to automatically incentivize sharing and drive user acquisition." },
        { step: "04", title: "Social Optimization", description: "Tested dynamic social card previews across iMessage, Twitter/X, and Instagram Stories to maximize the visual hook when links were shared." }
      ],
      outcomes: [
        { stat: "2K+", label: "Resumes Generated", description: "Reached 2,000+ generated profiles and deployed seamlessly on a highly performant stack with zero downtime during traffic spikes." },
        { stat: "4.8x", label: "Viral Coefficient", description: "The built-in affiliate and promo pass integrations created a self-sustaining growth loop, where every user share resulted in an average of 2+ new profile creations." },
        { stat: "78%", label: "Creation Completion", description: "The gamified, step-by-step UI successfully eliminated form fatigue, achieving a 78% form completion benchmark." }
      ],
      quote: {
        text: "DRG went viral within 48 hours of launch. The multi-step builder and instant high-DPI canvas exporter created a frictionless experience that converted casual visitors into daily shares.",
        author: "Eniola Smith",
        role: "Founder",
        company: "DRG"
      }
    },
    {
      id: "snapvista",
      number: "03",
      industry: "Marketing Analytics",
      title: "SnapVista",
      tagline: "Architected a tokenized, dual-theme design system for a 120K+ user analytics platform to scale rapid feature development.",
      client: "SnapVista Marketing Intelligence",
      role: "Lead Design Engineer & Systems Architect",
      timeline: "4 Weeks • 2025",
      description: "Architected a tokenized, dual-theme design system for a 120K+ user analytics platform to scale rapid feature development.",
      metrics: [
        "40% Faster Development Time",
        "200+ Tokenized Components",
        "99.4% Design Token Adoption"
      ],
      image: "https://res.cloudinary.com/driutxwdh/image/upload/v1791243680/Gemini_Generated_Image_nh7u19nh7u19nh7u_1_o8l0vl.jpg",
      logoIcon: "https://res.cloudinary.com/driutxwdh/image/upload/v1792092409/logo_official_pannhs.png",
      link: "https://anintroverteddesigner.com/snapvista/",
      isLocked: false,
      deliverables: ["Tokenized System Architecture", "Semantic Dual-Theming Engine", "Interactive Visualization Prototypes", "Production-Ready Engineering Hand-off"],
      tools: ["Figma", "Design Tokens", "React", "Tailwind CSS"],
      overviewHeading: "From UI Fragmentation to a Scalable Dual-Theme Design System for 120K+ Active Users.",
      overview: "SnapVista is a high-traffic marketing analytics dashboard serving over 120,000 active users. As the platform scaled, design inconsistencies and a lack of reusable frontend components severely bottlenecked the engineering team.\n\nThis project focused on architecting a robust, scalable design system from the ground up, engineering a seamless dark and light mode architecture that eliminated development ambiguity and drastically accelerated the time it takes to ship new features.",
      videoUrl: "https://res.cloudinary.com/driutxwdh/video/upload/v1791380528/SHowcase_WOrk_Snapvista_vrmehb.mp4",
      interventionImages: [
        {
          url: "https://res.cloudinary.com/driutxwdh/image/upload/v1791380535/variables_m91hjk.png",
          caption: "Tokenized System Variables & Component Architecture"
        },
        {
          url: "https://res.cloudinary.com/driutxwdh/image/upload/v1791379463/Showcase_Design_System_sisrm6.png",
          caption: "Atomic Design System & Production-Ready Token Library"
        }
      ],
      outcomeImages: [
        {
          url: "https://res.cloudinary.com/driutxwdh/image/upload/v1791379462/Dashboard_tjrbwk.png",
          caption: "Light Mode Analytics Console — High Density Data UX"
        },
        {
          url: "https://res.cloudinary.com/driutxwdh/image/upload/v1791379410/Dark_Mode_Dashboard_fueh1s.png",
          caption: "Dark Mode Analytics Console — Semantic Dual-Theming"
        }
      ],
      challenges: [
        { 
          title: "Component Fragmentation", 
          description: "Engineers were repeatedly rebuilding identical UI elements from scratch, resulting in visual regressions and bloated codebases." 
        },
        { 
          title: "Inconsistent Theming", 
          description: "The lack of standardized color semantics made implementing a unified dark mode nearly impossible without hardcoding hundreds of overlapping hex values." 
        },
        { 
          title: "Handoff Friction", 
          description: "Static design files left developers guessing at hover states, transitions, and responsive behaviors, slowing down the QA cycle." 
        }
      ],
      solutions: [
        { 
          title: "Tokenized System Architecture", 
          description: "Engineered a scalable atomic design system with over 200 interconnected components, establishing a single source of truth for the entire platform." 
        },
        { 
          title: "Semantic Dual-Theming", 
          description: "Created a mathematically precise color token hierarchy that allowed instantaneous toggling between light and dark modes with zero accessibility or contrast degradation." 
        },
        { 
          title: "Production-Ready Handoff", 
          description: "Mapped every Figma component directly to its corresponding Tailwind utility class and React prop structure, transforming static mockups into explicit engineering contracts." 
        }
      ],
      process: [
        { step: "01", title: "Component Audit & Consolidation", description: "Conducted a comprehensive UI audit of the legacy dashboard to identify redundant elements and establish a foundational primitive token library." },
        { step: "02", title: "Semantic Theming Engine", description: "Architected the light and dark mode color matrices, mapping raw hex values to functional, predictable semantic tokens (e.g., surface-primary-dark)." },
        { step: "03", title: "High-Fidelity Prototyping", description: "Prototyped complex interactive data visualizations and data tables across both themes to stress-test WCAG contrast ratios and visual hierarchy." },
        { step: "04", title: "Engineering Alignment & QA", description: "Partnered directly with the frontend team to mirror the Figma architecture perfectly in code, ensuring the token system scaled without breaking the live product." }
      ],
      outcomes: [
        { stat: "40%", label: "Faster Development Time", description: "The reusable component library allowed engineers to assemble new analytics dashboards in days rather than weeks." },
        { stat: "200+", label: "Tokenized Components", description: "Delivered a fully comprehensive UI kit that now serves as the operational baseline for all future product iterations." },
        { stat: "99.4%", label: "Design Token Adoption", description: "Achieved near-total alignment between design and engineering, practically eliminating CSS-related visual bugs and QA tickets." }
      ],
      quote: {
        text: "Esther’s mastery of scalable design systems is incredible. She built an adaptive framework that effortlessly organizes dense analytics data.",
        author: "Barbara Russo",
        role: "Head of Marketing",
        company: "SnapVista"
      }
    },
    {
      id: "thumo",
      number: "04",
      industry: "Food-Tech / Social Commerce",
      title: "Thumo (Collaborative Food Delivery)",
      tagline: "A collaborative food delivery mobile application designed to eliminate cart abandonment by enabling localized group ordering and shared delivery fees.",
      client: "Thumo Logistics & Social Commerce",
      role: "Lead UI/UX Designer",
      timeline: "4 Weeks • 2026",
      description: "A collaborative food delivery mobile application designed to eliminate cart abandonment by enabling localized group ordering and shared delivery fees.",
      metrics: [
        "40% Lower Delivery Costs",
        "Frictionless 1-Tap Squad Sharing",
        "Integrated Wallet Refund Model",
        "High-Fidelity Interactive Prototype"
      ],
      image: "https://res.cloudinary.com/driutxwdh/image/upload/v1791243431/Gemini_Generated_Image_xpmn89xpmn89xpmn_1_ojv2x2.jpg",
      logoIcon: "https://res.cloudinary.com/driutxwdh/image/upload/v1792092339/Thumo_logo_tsvznu.png",
      isLocked: false,
      deliverables: ["Visualized Squad Savings Engine", "Frictionless Group Split Architecture", "Unified Multi-State Mobile Layout", "High-Fidelity Interactive Prototype"],
      tools: ["Figma", "Interactive Prototyping", "Mobile Design Systems"],
      overviewHeading: "Designing Collaborative Commerce to Solve Food Delivery Abandonment.",
      overview: "Thumo is a food ordering mobile app designed to remove the friction of steep delivery fees through social coordination. By introducing \"Squad Orders,\" the platform allows colleagues and neighbors within the same vicinity (such as Lekki Phase 1 or Victoria Island) to pool orders from local spots and split delivery costs by up to 40%.\n\nThe primary UX challenge was taking a complex multi-user purchasing model—encompassing dynamic cost-splitting, order countdown timers, and payment gating—and packaging it into an intuitive, frictionless mobile interface designed entirely in Figma.",
      videoUrl: "https://res.cloudinary.com/driutxwdh/video/upload/v1791384163/SHowcase_WOrk_Thumo_b0vjmb.mp4",
      interventionImages: [
        {
          url: "https://res.cloudinary.com/driutxwdh/image/upload/v1791383701/9_vmdykb.png",
          caption: "Visualized Squad Savings Engine & Discovery"
        },
        {
          url: "https://res.cloudinary.com/driutxwdh/image/upload/v1791383693/10_hu1vuf.png",
          caption: "Frictionless Squad Split & Multi-Payment Pathways"
        }
      ],
      outcomeImages: [
        {
          url: "https://res.cloudinary.com/driutxwdh/image/upload/v1791383695/11_rwtwrj.png",
          caption: "40% Lower Delivery Logistics & High-Conversion Squad Checkout"
        },
        {
          url: "https://res.cloudinary.com/driutxwdh/image/upload/v1791383694/12_zhwdz8.png",
          caption: "Integrated Wallet Refund Model & 1-Tap Viral Acquisition"
        }
      ],
      challenges: [
        { 
          title: "Solo Checkout Fatigue", 
          description: "Steep delivery fees relative to low-ticket food items caused significant user drop-off at the final checkout screen." 
        },
        { 
          title: "Fragmented Social Coordination", 
          description: "Manually gathering group orders in messaging apps, calculating individual bills, and chasing bank transfers created severe user friction." 
        },
        { 
          title: "Mobile Viewport Density", 
          description: "Communicating live squad statuses, multiple payment pathways, countdown timers, and savings calculations on a single mobile screen risked overwhelming the user." 
        }
      ],
      solutions: [
        { 
          title: "Visualized Squad Savings Engine", 
          description: "Designed high-contrast \"Squad Order\" discovery cards and an active \"Live Savings Tracker\" that explicitly compares solo delivery fees against per-person squad shares to immediately validate financial ROI." 
        },
        { 
          title: "Frictionless Group Split Architecture", 
          description: "Designed an intuitive decision modal allowing hosts to choose how squads handle payment—selecting between \"Pay Upfront + Wallet Refund\" or \"Pay at Close\" to eliminate manual bill-splitting disputes." 
        },
        { 
          title: "Unified Multi-State Mobile Layout", 
          description: "Structured high-density bottom sheets and state screens with 1-tap \"Share to WhatsApp\" action cards, real-time member payment chips (\"Paid\" vs. \"Ordering\"), and an interactive timeline tracking order dispatch and delivery milestones." 
        }
      ],
      process: [
        { step: "01", title: "Social Ordering User Flows", description: "Mapped parallel user journeys for Squad Creators and Squad Joiners to ensure joining an existing squad required fewer steps than placing a traditional solo order." },
        { step: "02", title: "Mobile Component Library", description: "Constructed an atomic Figma design system with Auto Layout components, responsive bottom sheets, category pills, and dynamic theme tokens." },
        { step: "03", title: "Payment & Edge-Case Architecture", description: "Designed structured UI states for complex conditions, including countdown timer expirations, early squad closures, and multi-method checkout screens (Wallet, Bank Transfer, Debit Card, USSD)." },
        { step: "04", title: "Interactive Prototype Testing", description: "Built realistic mobile micro-interactions and transitions to stress-test touch targets, checkout velocity, and real-time delivery tracking screens." }
      ],
      outcomes: [
        { stat: "40%", label: "Delivery Cost Reduction", description: "Delivered a high-conversion checkout experience that saves users up to 40% on delivery logistics through pooled ordering." },
        { stat: "1-Tap", label: "Zero-Friction Group Acquisition", description: "Integrated direct-to-WhatsApp link sharing that embeds viral customer acquisition right into the checkout workflow." },
        { stat: "100%", label: "Production-Ready Design Specs", description: "Delivered a fully documented, componentized Figma design file with explicit variant states, ready for immediate engineering handoff." }
      ],
      quote: {
        text: "Thumo’s collaborative food ordering and squad cost-splitting makes group delivery completely frictionless and addictive to use.",
        author: "Aubrey",
        role: "Founder & CEO",
        company: "Thumo"
      }
    },
    {
      id: "signaladoc",
      number: "05",
      industry: "Health-Tech / B2B SaaS",
      title: "SignalADoc (Pharmacy Management)",
      tagline: "A data-driven onboarding redesign for a B2B pharmacy management platform that eliminated upfront friction and increased activation.",
      client: "SignalADoc Telemedicine & Digital Pharmacy",
      role: "Lead UI/UX Designer & Product Strategist",
      timeline: "12 weeks • 2025",
      description: "A data-driven onboarding redesign for a B2B pharmacy management platform that eliminated upfront friction and increased activation.",
      metrics: [
        "25% Increase in Onboarding",
        "79% \"Aha!\" Moment Reach Rate",
        "65% Drop-Off Bottleneck Resolved",
        "Data-Driven UX Optimization"
      ],
      image: "https://res.cloudinary.com/driutxwdh/image/upload/v1791245098/Gemini_Generated_Image_kyr40gkyr40gkyr4_1_nh26bc.jpg",
      logoIcon: "https://res.cloudinary.com/driutxwdh/image/upload/v1792092358/signaadoc_logo_zowj6p.png",
      link: "https://anintroverteddesigner.com/signaladoc-pharmacy-app/",
      isLocked: false,
      deliverables: ["Frictionless Quick-Commit Entry", "Gradual Activation Dashboard", "Contextual Gating & Monetization", "Figma Design System & Specs"],
      tools: ["Figma", "Mixpanel", "Hotjar"],
      overviewHeading: "Architecting a Frictionless B2B Onboarding Flow to Bypass a 65% Bottleneck.",
      overview: "SignalADoc is a robust Pharmacy Management platform designed to help owners manage inventory, sales, and operations. Despite strong acquisition, the product suffered a critical 60% drop-off during its multi-step onboarding flow. Users were confronted by a \"Commitment Wall\"—forced to upload sensitive business documents and select paid subscription plans before ever seeing the dashboard.\n\nThis project focused on architecting a Gradual Activation Flow that delayed high-friction steps, moving users to the core product value instantly while fulfilling compliance requirements contextually.",
      videoUrl: "https://res.cloudinary.com/driutxwdh/image/upload/v1778756268/Animate_f2zqhf.gif",
      interventionImages: [
        {
          url: "https://res.cloudinary.com/driutxwdh/image/upload/v1778756228/Hotjar_Session_tc7ksu.png",
          caption: "Data-Driven Friction Mapping — Hotjar Session Recordings"
        },
        {
          url: "https://res.cloudinary.com/driutxwdh/image/upload/v1778756227/Onboarding_email_fswlop.png",
          caption: "Contextual Quick-Commit Email Onboarding Verification"
        },
        {
          url: "https://res.cloudinary.com/driutxwdh/image/upload/v1778756227/Dashboard_Onboarding_Documents_hhw94u.png",
          caption: "Gradual Activation — Persistent Compliance Checklist"
        },
        {
          url: "https://res.cloudinary.com/driutxwdh/image/upload/v1778756227/Dashboard_Onboarding_Pricing_xdmomj.png",
          caption: "Contextual Gating & Monetization — Subscription Plan Selection"
        }
      ],
      outcomeImages: [
        {
          url: "https://res.cloudinary.com/driutxwdh/image/upload/v1778756227/Dashboard_Activation_Restricted_t1wxw3.png",
          caption: "Limited-Access Dashboard — Immediate Product Value"
        },
        {
          url: "https://res.cloudinary.com/driutxwdh/image/upload/v1778756227/Dashboard_ynkwhg.png",
          caption: "Pharmacy Management Console — Unlocked Full Activation"
        }
      ],
      challenges: [
        { 
          title: "Compliance & Commitment Overload", 
          description: "Forcing users to upload sensitive legal and business documents immediately caused massive hesitation, resulting in a severe 65% drop-off at the document upload stage." 
        },
        { 
          title: "Value Delay", 
          description: "The core selling point—the dashboard—was entirely blocked behind tedious setup forms, meaning users abandoned the app before experiencing the product's value." 
        },
        { 
          title: "Premature Monetization", 
          description: "Forcing users to choose and commit to a paid subscription plan before they had even seen the platform's functionality destroyed conversion momentum." 
        }
      ],
      solutions: [
        { 
          title: "Frictionless Quick-Commit Entry", 
          description: "Redesigned the initial flow to require only basic info, allowing users to reach the next stage in under 2 minutes and immediately experience the dashboard." 
        },
        { 
          title: "Gradual Activation Dashboard", 
          description: "Transformed mandatory compliance steps (like document uploads) from a blocking wall into a persistent, structured \"Activation Checklist\" on a limited-access dashboard." 
        },
        { 
          title: "Contextual Gating & Monetization", 
          description: "Shifted subscription selection from upfront to usage-based gating (e.g., prompting for a plan only after the 5th order), aligning payment with proven value." 
        }
      ],
      process: [
        { step: "01", title: "Data-Driven Friction Mapping", description: "Utilized Mixpanel funnel analysis and Hotjar session recordings to pinpoint exactly where users were abandoning the flow, revealing the massive document upload bottleneck." },
        { step: "02", title: "Information Architecture Redesign", description: "Mapped a transition from a \"Linear Hard-Gated Flow\" to a \"Graduated Activation Flow\" based on the \"Micro-Commitment Principle\"." },
        { step: "03", title: "High-Fidelity Prototyping", description: "Designed the new limited-access dashboard states, activation checklists, and contextual soft gates in Figma to guide users at their own pace." },
        { step: "04", title: "A/B Testing & Experimentation", description: "Ran the Graduated Activation variant against the original flow, rigorously tracking metrics like time-to-dashboard and overall onboarding completion rates." }
      ],
      outcomes: [
        { stat: "25%", label: "ONBOARDING UPLIFT", description: "Increased overall onboarding completion by 25% by removing the upfront friction-heavy setup steps." },
        { stat: "79%", label: "DASHBOARD REACH RATE", description: "Dramatically increased the number of users experiencing the platform's core value, with 79% reaching the \"Aha!\" moment compared to just 35% in the old flow." },
        { stat: "65%", label: "ELIMINATED BOTTLENECKS", description: "Successfully bypassed the critical 65% drop-off point by transforming compliance requirements into contextual, self-paced dashboard tasks." }
      ],
      quote: {
        text: "Ore is always looking for ways to improve products. She upgraded our onboarding experience by cutting down friction, solved our drop-off crisis, and vastly boosted partner satisfaction.",
        author: "Joy Odele",
        role: "Product Manager",
        company: "SignalADoc"
      }
    },
    {
      id: "tecometrics",
      number: "06",
      industry: "Energy Tech",
      title: "Tecometrics (Enterprise Dashboard)",
      tagline: "Unifying telemetry, predictive maintenance, and ESG compliance reporting across distributed industrial assets.",
      client: "Tecometrics Global Energy Solutions",
      role: "Lead Product Designer & Design Architect",
      timeline: "8 Months • 2024",
      description: "Enterprise energy operations platform unifying real-time monitoring, predictive maintenance, and compliance reporting across distributed industrial assets.",
      metrics: [
        "62% faster incident response",
        "85% reduction in reporting time",
        "34% decrease in unplanned downtime"
      ],
      image: "https://anintroverteddesigner.com/wp-content/uploads/2026/04/Dashboard-Home-Base-.jpg",
      logoIcon: "https://res.cloudinary.com/driutxwdh/image/upload/v1792092692/Logo1_mzam39.svg",
      isLocked: true,
      comingSoon: true,
      deliverables: ["Interactive High-Fidelity Prototype", "Component Design System", "Telemetry Dashboard", "Alert Matrix & Incident Workflows"],
      tools: ["Figma", "Design Tokens", "React/TypeScript", "Tailwind CSS", "Notion"],
      overview: "Tecometrics is an enterprise-scale energy operations and telemetry suite utilized by power plants, commercial facilities, and green grids. The legacy system suffered from alarm fatigue, siloed telemetry streams, and clunky regulatory reporting.",
      challenges: [
        { title: "Telemetry Fragmentation", description: "Engineers had to navigate across 7 disconnected subsystems to correlate a single voltage spike with thermal sensor anomalies." },
        { title: "Alarm Fatigue & Delayed Response", description: "Control room operators received over 1,400 daily notifications with no contextual prioritization." },
        { title: "Cumbersome Compliance Reporting", description: "Generating quarterly ESG audit filings required 18+ hours of manual data collation." }
      ],
      solutions: [
        { title: "Unified Asset Topology & Real-Time Telemetry", description: "Architected a single-pane-of-glass dashboard mapping global substations with live power flow vectors." },
        { title: "Contextual Smart Alerting & Incident Workflows", description: "Introduced dynamic severity thresholds and incident triage trees, grouping duplicate pings." },
        { title: "One-Click Automated ESG & Audit Filings", description: "Designed an automated audit pipeline with pre-configured regulatory templates." }
      ],
      process: [
        { step: "01", title: "Operator Shadowing & Discovery", description: "Conducted 14 on-site and remote interviews with plant operators." },
        { step: "02", title: "Information Architecture & Density Mapping", description: "Restructured the asset hierarchy into 3 levels: Region > Facility > Equipment Node." },
        { step: "03", title: "Prototyping & Stress Testing", description: "Built high-stress simulation prototypes testing operator reaction speeds during synthetic grid failure drills." },
        { step: "04", title: "Design System Delivery & QA", description: "Authored 140+ component states in Figma with strict WCAG AAA contrast ratios." }
      ],
      outcomes: [
        { stat: "62%", label: "Faster Incident Response", description: "Average time to acknowledge and dispatch field engineers dropped from 34 minutes to 13 minutes." },
        { stat: "85%", label: "Reduction in Reporting Time", description: "Quarterly compliance cycles reduced from 18 hours per facility to under 2.5 hours." },
        { stat: "34%", label: "Decrease in Unplanned Downtime", description: "Predictive asset health alerts caught thermal degradation before physical equipment failure occurred." }
      ],
      quote: {
        text: "Esther transformed an overwhelming cockpit of raw numbers into the cleanest industrial interface our field teams have ever operated.",
        author: "Paul Arting",
        role: "Energy Manager",
        company: "Tecometrics"
      }
    },
    {
      id: "portfolioiq",
      number: "07",
      industry: "Fin-Tech",
      title: "Portfolio IQ",
      tagline: "AI-powered portfolio intelligence unifying stocks, crypto, and fixed income with automated rebalancing.",
      client: "PortfolioIQ Fintech Inc.",
      role: "Staff Product Designer",
      timeline: "7 Months • 2023",
      description: "AI-powered portfolio management platform unifying stocks, crypto, and bonds with automated rebalancing and intelligent insights for retail investors.",
      metrics: [
        "$50M+ in tracked assets (6 months)",
        "67% AI recommendation adoption",
        "58% daily active usage (industry average: 23%)"
      ],
      image: "https://anintroverteddesigner.com/wp-content/uploads/2026/05/Dashboard-975x1024.png",
      logoIcon: "https://res.cloudinary.com/driutxwdh/image/upload/v1792093488/PortfolioIQ_logo_jnanad.png",
      isLocked: true,
      comingSoon: true,
      deliverables: ["Multi-Asset Aggregation Engine", "Algorithmic Rebalancing Flow", "Risk Heatmap & Stress Testing UI", "Cross-Platform Mobile & Web App"],
      tools: ["Figma", "Highcharts", "Tailwind CSS", "Lottie", "ProtoPie"],
      overview: "Portfolio IQ unifies fragmented investor holdings across multiple brokerages into a coherent real-time financial control center powered by machine learning portfolio optimization.",
      challenges: [
        { title: "Cognitive Overload from Disparate Asset Classes", description: "Investors struggled to evaluate net risk exposure when assets were spread across equities and crypto." },
        { title: "Algorithmic Black Box Mistrust", description: "Users distrusted AI portfolio recommendations when the rationale behind buy/sell suggestions wasn't clearly explainable." },
        { title: "High Attrition During Market Volatility", description: "Spikes in market drawdowns induced panic selling because users lacked historical stress-testing context." }
      ],
      solutions: [
        { title: "Unified Net-Worth & Exposure Visualization", description: "Crafted interactive sunburst and allocation charts breaking down assets by geography, sector, and liquidity." },
        { title: "Explainable AI Insight Cards", description: "Designed modular recommendation cards breaking down the exact mathematical rationale of every proposed rebalance." },
        { title: "Interactive Monte Carlo Stress Simulator", description: "Empowered investors to simulate historical crisis scenarios against their exact asset allocation." }
      ],
      process: [
        { step: "01", title: "Quantitative Investor Surveys", description: "Surveyed 350 active retail investors to uncover confidence drivers in automated advisory interfaces." },
        { step: "02", title: "Data Visualization Explorations", description: "Tested 8 data visualization prototypes to discover the optimal balance between density and glanceable clarity." },
        { step: "03", title: "Micro-Interaction & State Choreography", description: "Designed smooth micro-animations for rebalancing execution states." },
        { step: "04", title: "Design System Scaling", description: "Created an extensive tokenized chart theme supporting high-contrast color accessibility." }
      ],
      outcomes: [
        { stat: "$50M+", label: "Assets Under Monitoring", description: "Scaled to over $50 million in synchronized retail investment portfolios within 6 months." },
        { stat: "67%", label: "AI Recommendation Adoption", description: "67% of users accepted automated rebalance suggestions." },
        { stat: "58%", label: "Daily Active Usage (DAU)", description: "User engagement achieved 58% DAU/MAU ratio, outperforming industry norms." }
      ],
      quote: {
        text: "The balance Esther struck between deep financial intelligence and serene, trustworthy simplicity has been our greatest product differentiator.",
        author: "Marcus Vance",
        role: "VP of Product",
        company: "Portfolio IQ"
      }
    }
  ],
  testimonials: [
    {
      id: "t1",
      quote: "Esther’s mastery of scalable design systems is incredible. She built an adaptive, multi-platform dashboard framework that effortlessly bridges light and dark modes while flawlessly organizing dense analytics data.",
      author: "Barbara Russo",
      role: "HEAD OF MARKETING",
      company: "SNAPVISTA"
    },
    {
      id: "t2",
      quote: "Building our marketplace and Integrating a live AI reading assistant changed everything. Flawless technical execution from the database architecture to frontend design.",
      author: "Esther Reed",
      role: "FOUNDER",
      company: "PDFGUIDESTACK"
    },
    {
      id: "t3",
      quote: "DRG went viral within 48 hours of launch. The multi-step builder and instant high-DPI canvas exporter created a frictionless experience that converted casual visitors into daily shares.",
      author: "Eniola Smith",
      role: "FOUNDER",
      company: "DRG"
    },
    {
      id: "t4",
      quote: "Thumo’s collaborative food ordering and squad cost-splitting makes group delivery completely frictionless and addictive to use.",
      author: "Aubrey",
      role: "FOUNDER & CEO",
      company: "THUMO"
    },
    {
      id: "t5",
      quote: "Ore is always looking for ways to improve products, she upgraded our onboarding experience by cutting down user friction. She helped us solve a massive drop-off problem and vastly improved product adoption.",
      author: "Joy Odele",
      role: "PRODUCT MANAGER",
      company: "SIGNALADOC"
    }
  ],
  experience: [
    {
      id: "bamsthetics",
      period: "10/2024 – Present",
      role: "Lead AI Design Engineer",
      company: "Bamsthetics Design",
      location: "Remote",
      type: "Design & Development Studio",
      description: "Directing full-cycle product design and frontend development for B2B SaaS, mobile apps, and technical MVPs. Leveraging generative AI and prompt engineering to bridge high-fidelity Figma designs into production-ready React/Tailwind code.",
      skills: ["AI Design Engineering", "React & Tailwind CSS", "B2B SaaS", "Generative AI", "Mobile Apps", "Design Systems"]
    },
    {
      id: "signaladoc",
      period: "09/2022 – 02/2025",
      role: "Lead UI/UX Designer",
      company: "SignalADoc",
      location: "Lagos, Nigeria",
      type: "Health-Tech",
      description: "Redesigned the pharmacy management onboarding flow, introducing contextual gating that increased activation by 25%. Led the design strategy for hybrid cloud solutions and established scalable design systems for internal tools.",
      skills: ["Health-Tech", "Contextual Gating", "Hybrid Cloud UX", "Design Systems", "User Onboarding", "Internal Tools"]
    },
    {
      id: "deniafehub",
      period: "08/2019 – 09/2022",
      role: "UI/UX Designer",
      company: "DeniafeHub",
      location: "Lagos, Nigeria",
      type: "Design Agency",
      description: "Translated complex client requirements into intuitive user interfaces, focusing on data visualization and high-throughput UX.",
      skills: ["Product Design", "Data Visualization", "Information Architecture", "High-Throughput UX", "Web & Mobile"]
    }
  ],
  profile: {
    name: "Esther \"Ore\" Orebiyi",
    nickname: "Ore",
    shortName: "Ore",
    title: "AI Design Engineer & Product Builder",
    subheadline: "I am an AI Design Engineer and product builder. I specialize in the intersection of dense information architecture and frontend engineering—taking complex, fragmented systems and turning them into scalable, high-conversion platforms.",
    email: "anintroverteddesigner@gmail.com",
    calBookingUrl: "https://cal.com/anintroverteddesigner/30min",
    location: "Lagos, Nigeria & Remote",
    avatar: "https://res.cloudinary.com/driutxwdh/image/upload/v1792069386/IMG_4778__gbnjiq.jpg",
    logoFull: "https://anintroverteddesigner.com/wp-content/uploads/2026/03/AID-Logo-Full-Oraple-1024x340.png",
    resumeUrl: "https://drive.google.com/file/d/1aW2qp094P2Dl2tL8wIvHw6jK-ZXiet6M/view",
    socials: {
      linkedin: "https://linkedin.com",
      github: "https://github.com",
      instagram: "https://instagram.com"
    }
  },
  skills: [
    "UI/UX Design",
    "Interaction Design",
    "Prototyping",
    "Design Systems",
    "Data Visualization",
    "Information Architecture",
    "Frontend Development",
    "Prompt Engineering",
    "API Integration",
    "Database Architecture",
    "Figma",
    "React / Next.js",
    "Tailwind CSS",
    "Supabase",
    "Firebase",
    "Netlify",
    "Gemini",
    "Claude",
    "Framer",
    "Webflow",
    "Elementor"
  ]
};

export interface ProjectItem {
  id: string;
  number: string;
  industry: string;
  title: string;
  tagline: string;
  client: string;
  role: string;
  timeline: string;
  description: string;
  metrics: string[];
  image: string;
  logoIcon: string;
  link?: string;
  liveUrl?: string;
  isLocked?: boolean;
  comingSoon?: boolean;
  deliverables?: string[];
  tools?: string[];
  overviewHeading?: string;
  overview?: string;
  videoUrl?: string;
  challenges?: { title: string; description: string }[];
  solutions?: { title: string; description: string }[];
  process?: { step: string; title: string; description: string }[];
  outcomes?: { stat: string; label: string; description: string }[];
  quote?: { text: string; author: string; role: string; company: string };
  interventionImages?: { url: string; caption?: string }[];
  outcomeImages?: { url: string; caption?: string }[];
}

