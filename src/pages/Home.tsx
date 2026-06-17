import * as React from 'react';
import { HeroSection } from '../sections/HeroSection';
import { MetricsSection } from '../sections/MetricsSection';
import { AboutSection } from '../sections/AboutSection';
import { SkillsSection } from '../sections/SkillsSection';
import { ProjectsPreviewSection } from '../sections/ProjectsPreviewSection';
import { HowIBuildSection } from '../sections/HowIBuildSection';
import { GithubSection } from '../sections/GithubSection';
import { ExperienceSection } from '../sections/ExperienceSection';
import { FutureProjectsSection } from '../sections/FutureProjectsSection';

export function Home() {
  return (
    <div className="flex flex-col gap-24 pb-24">
      <HeroSection />
      <MetricsSection />
      <div className="mx-auto w-full max-w-5xl px-6 flex flex-col gap-32 pb-32">
        <AboutSection />
        <SkillsSection />
        <HowIBuildSection />
        <ExperienceSection />
        <ProjectsPreviewSection />
        <FutureProjectsSection />
        <GithubSection />
      </div>
    </div>
   );
}