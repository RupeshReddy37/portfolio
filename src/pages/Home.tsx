import * as React from 'react';
import { useLocation } from 'react-router-dom';
import { HeroSection } from '../sections/HeroSection';
import { MetricsSection } from '../sections/MetricsSection';
import { AboutSection } from '../sections/AboutSection';
import { SkillsSection } from '../sections/SkillsSection';
import { ProjectsPreviewSection } from '../sections/ProjectsPreviewSection';
import { HowIBuildSection } from '../sections/HowIBuildSection';
import { GithubSection } from '../sections/GithubSection';
import { ExperienceSection } from '../sections/ExperienceSection';
import { FutureProjectsSection } from '../sections/FutureProjectsSection';
import { ContactSection } from '../sections/ContactSection';

export function Home() {
  const location = useLocation();

  React.useEffect(() => {
    if (!location.hash) return;
    const id = location.hash.replace('#', '');
    window.requestAnimationFrame(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    });
  }, [location.hash]);

  return (
    <div className="flex flex-col gap-20 pb-20 sm:gap-24 sm:pb-24">
      <HeroSection />
      <MetricsSection />
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-24 px-4 pb-24 sm:gap-32 sm:px-6 sm:pb-32">
        <AboutSection />
        <SkillsSection />
        <HowIBuildSection />
        <ExperienceSection />
        <ProjectsPreviewSection />
        <FutureProjectsSection />
        <GithubSection />
        <ContactSection />
      </div>
    </div>
   );
}
