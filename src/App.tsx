/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { PORTFOLIO_DATA } from './data/portfolioData';
import { ArchivedHomepage } from './components/ArchivedHomepage';
import { NewHomepage } from './components/NewHomepage';
import { AboutPage } from './components/AboutPage';
import { CaseStudyPage } from './components/CaseStudyPage';

export default function App() {
  const [currentRoute, setCurrentRoute] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      const path = window.location.pathname.toLowerCase();
      const hash = window.location.hash.toLowerCase();
      if (path.includes('/about') || hash === '#about' || hash === '#about-page') {
        return '/about';
      }
      if (path.includes('/new') || hash.includes('/new')) {
        return '/new';
      }
      if (path.includes('/case-study/') || hash.includes('#case-study/')) {
        const parts = path.includes('/case-study/') 
          ? path.split('/case-study/')[1] 
          : hash.split('#case-study/')[1];
        const id = parts?.split('/')[0]?.split('?')[0];
        if (id) return `/case-study/${id}`;
      }
    }
    // Default page is the clean reconstructed portfolio
    return '/';
  });

  // Sync with browser back/forward and hash changes
  useEffect(() => {
    const handleLocationChange = () => {
      const path = window.location.pathname.toLowerCase();
      const hash = window.location.hash.toLowerCase();
      if (path.includes('/about') || hash === '#about' || hash === '#about-page') {
        setCurrentRoute('/about');
      } else if (path.includes('/new') || hash.includes('/new')) {
        setCurrentRoute('/new');
      } else if (path.includes('/case-study/') || hash.includes('#case-study/')) {
        const parts = path.includes('/case-study/') 
          ? path.split('/case-study/')[1] 
          : hash.split('#case-study/')[1];
        const id = parts?.split('/')[0]?.split('?')[0];
        if (id) {
          setCurrentRoute(`/case-study/${id}`);
        } else {
          setCurrentRoute('/');
        }
      } else {
        setCurrentRoute('/');
      }
    };

    window.addEventListener('popstate', handleLocationChange);
    window.addEventListener('hashchange', handleLocationChange);
    return () => {
      window.removeEventListener('popstate', handleLocationChange);
      window.removeEventListener('hashchange', handleLocationChange);
    };
  }, []);

  const navigateTo = (route: string) => {
    setCurrentRoute(route);
    if (typeof window !== 'undefined') {
      try {
        window.history.pushState({}, '', route);
      } catch (e) {
        window.location.hash = route;
      }
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleNavigateCaseStudy = (projectId: string) => {
    const target = PORTFOLIO_DATA.projects.find((p) => p.id === projectId);
    if (target?.isLocked) {
      return; // Do not link to locked projects yet
    }
    navigateTo(`/case-study/${projectId}`);
  };

  const handleNavigateProjects = () => {
    navigateTo('/');
    setTimeout(() => {
      if (typeof document !== 'undefined') {
        const el = document.getElementById('projects');
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }, 150);
  };

  // Determine if viewing a case study
  const isCaseStudy = currentRoute.startsWith('/case-study/');
  const currentCaseStudyId = isCaseStudy ? currentRoute.replace('/case-study/', '') : '';

  return (
    <div className="relative min-h-screen bg-[#FFFDFB]">
      {isCaseStudy ? (
        <CaseStudyPage 
          projectId={currentCaseStudyId}
          onNavigateHome={() => navigateTo('/')}
          onNavigateProjects={handleNavigateProjects}
          onNavigateAbout={() => navigateTo('/about')}
          onNavigateCaseStudy={handleNavigateCaseStudy}
        />
      ) : currentRoute === '/about' ? (
        <AboutPage 
          onNavigateHome={() => navigateTo('/')}
          onNavigateProjects={handleNavigateProjects}
          onNavigateCaseStudy={handleNavigateCaseStudy}
        />
      ) : currentRoute === '/new' ? (
        <NewHomepage 
          onNavigateOld={() => navigateTo('/')}
          onOpenCodeModal={() => {}}
        />
      ) : (
        <ArchivedHomepage 
          onNavigateNew={() => navigateTo('/new')}
          onNavigateAbout={() => navigateTo('/about')}
          onNavigateCaseStudy={handleNavigateCaseStudy}
          onOpenCodeModal={() => {}}
        />
      )}
    </div>
  );
}
