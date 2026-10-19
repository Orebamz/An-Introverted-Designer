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
import { NotFoundPage } from './components/NotFoundPage';

function resolveRoute(): string {
  if (typeof window === 'undefined') return '/';
  const path = window.location.pathname.toLowerCase();
  const hash = window.location.hash.toLowerCase();

  // Explicit 404 route
  if (path === '/404' || path === '/404.html' || hash === '#404' || hash === '#/404') {
    return '/404';
  }

  // Root / Home
  if (path === '/' || path === '' || path === '/index.html') {
    if (hash === '#about' || hash === '#about-page') return '/about';
    if (hash === '#new' || hash === '#/new') return '/new';
    if (hash.includes('#case-study/') || hash.includes('#/case-study/')) {
      const parts = hash.includes('#case-study/') ? hash.split('#case-study/')[1] : hash.split('#/case-study/')[1];
      const id = parts?.split('/')[0]?.split('?')[0];
      if (id && PORTFOLIO_DATA.projects.some((p) => p.id.toLowerCase() === id.toLowerCase())) {
        return `/case-study/${id}`;
      }
      return '/404';
    }
    if (hash === '#404' || hash === '#/404') return '/404';
    return '/';
  }

  // About page
  if (path === '/about' || path === '/about/' || hash === '#about' || hash === '#about-page') {
    return '/about';
  }

  // New homepage version
  if (path === '/new' || path === '/new/' || hash === '#new') {
    return '/new';
  }

  // Case study pages
  if (path.startsWith('/case-study/')) {
    const id = path.split('/case-study/')[1]?.split('/')[0]?.split('?')[0];
    if (id && PORTFOLIO_DATA.projects.some((p) => p.id.toLowerCase() === id.toLowerCase())) {
      return `/case-study/${id}`;
    }
    return '/404';
  }

  // Any other unmatched pathname is a 404
  return '/404';
}

export default function App() {
  const [currentRoute, setCurrentRoute] = useState<string>(resolveRoute);

  // Sync with browser back/forward and hash changes
  useEffect(() => {
    const handleLocationChange = () => {
      setCurrentRoute(resolveRoute());
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
      {currentRoute === '/404' ? (
        <NotFoundPage
          onNavigateHome={() => navigateTo('/')}
          onNavigateProjects={handleNavigateProjects}
          onNavigateAbout={() => navigateTo('/about')}
          onNavigateCaseStudy={handleNavigateCaseStudy}
        />
      ) : isCaseStudy ? (
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
