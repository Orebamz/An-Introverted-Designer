import type { Metadata, Viewport } from 'next';
import Script from 'next/script';
import React from 'react';
import './globals.css';

export const viewport: Viewport = {
  themeColor: '#FDEDE5',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: {
    default: 'An Introverted Designer — Lead UI/UX Designer & Design Engineer | B2B SaaS (Lagos, Nigeria)',
    template: '%s | An Introverted Designer',
  },
  description:
    'Portfolio of Orebamz, Lead UI/UX Designer & Design Engineer in Lagos, Nigeria specializing in high-converting B2B SaaS platforms, complex enterprise dashboards, and scalable atomic design systems.',
  keywords: [
    'Lead UI/UX Designer',
    'Design Engineer',
    'B2B SaaS',
    'Lead UI/UX Designer in Lagos',
    'Lead UI/UX Designer in Nigeria',
    'Design Engineer in Lagos',
    'Design Engineer in Nigeria',
    'B2B SaaS Designer in Lagos',
    'B2B SaaS Designer in Nigeria',
    'UI/UX Designer Lagos',
    'UI/UX Designer Nigeria',
    'Design Engineer Lagos Nigeria',
    'UI/UX Engineer',
    'Design Systems',
    'Product Designer',
    'Frontend Architecture',
    'User Experience Design',
    'An Introverted Designer',
    'Orebamz',
    'Enterprise UX',
  ],
  authors: [{ name: 'Orebamz', url: 'https://anintroverteddesigner.com' }],
  creator: 'Orebamz',
  publisher: 'An Introverted Designer',
  metadataBase: new URL('https://anintroverteddesigner.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'An Introverted Designer — Lead UI/UX Designer & Design Engineer | B2B SaaS (Lagos, Nigeria)',
    description:
      'Designing and engineering high-impact B2B SaaS applications, atomic design systems, and enterprise user experiences in Lagos, Nigeria.',
    url: 'https://anintroverteddesigner.com',
    siteName: 'An Introverted Designer',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://anintroverteddesigner.com/wp-content/uploads/2026/03/AID-Favicon.png',
        width: 1200,
        height: 630,
        alt: 'An Introverted Designer — Lead UI/UX Designer & Design Engineer in Lagos, Nigeria',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'An Introverted Designer — Lead UI/UX Designer & Design Engineer | B2B SaaS (Lagos, Nigeria)',
    description:
      'Designing and engineering high-impact B2B SaaS applications, atomic design systems, and enterprise user experiences in Lagos, Nigeria.',
    creator: '@orebamz',
    site: '@orebamz',
    images: ['https://anintroverteddesigner.com/wp-content/uploads/2026/03/AID-Favicon.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: 'https://anintroverteddesigner.com/wp-content/uploads/2026/03/AID-Favicon.png',
    apple: 'https://anintroverteddesigner.com/wp-content/uploads/2026/03/AID-Favicon.png',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      '@id': 'https://anintroverteddesigner.com/#person',
      name: 'Orebamz',
      alternateName: 'An Introverted Designer',
      jobTitle: 'Lead UI/UX Designer & Design Engineer',
      description:
        'Lead UI/UX Designer & Design Engineer in Lagos, Nigeria specializing in B2B SaaS applications, design systems, and frontend user experience architecture.',
      url: 'https://anintroverteddesigner.com',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Lagos',
        addressCountry: 'Nigeria',
      },
      homeLocation: {
        '@type': 'Place',
        name: 'Lagos, Nigeria',
      },
      knowsAbout: [
        'UI/UX Design',
        'Design Engineering',
        'B2B SaaS',
        'Design Systems',
        'React',
        'Next.js',
        'Tailwind CSS',
        'User Research',
        'Information Architecture',
      ],
    },
    {
      '@type': 'WebSite',
      '@id': 'https://anintroverteddesigner.com/#website',
      url: 'https://anintroverteddesigner.com',
      name: 'An Introverted Designer',
      description:
        'Portfolio of Lead UI/UX Designer & Design Engineer in Lagos, Nigeria focusing on B2B SaaS platforms and design systems.',
      publisher: {
        '@id': 'https://anintroverteddesigner.com/#person',
      },
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Google Analytics 4 (GA4) Tracking Script */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-YLMBBJW4KC"
          strategy="afterInteractive"
        />
        <Script id="google-analytics-ga4" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-YLMBBJW4KC', {
              page_path: window.location.pathname,
            });
          `}
        </Script>

        {/* JSON-LD Structured Data for Enhanced Search Snippets */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        {/* Google Fonts Preconnect */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,500;0,600;1,400;1,500&family=Work+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://api.fontshare.com/v2/css?f[]=cabinet-grotesk@800,700,500,400,300,900,100&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[#FFFDFB] text-[#18120F] antialiased selection:bg-[#046BD2] selection:text-white min-h-screen flex flex-col font-['Work_Sans',sans-serif]">
        {/* Global Wrapper for Application Layout */}
        <div id="app-root" className="flex-1 flex flex-col w-full relative">
          <main id="main-content" className="flex-1 w-full">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
