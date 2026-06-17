import * as React from 'react';
import { FadeIn } from '../components/ui/FadeIn';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Card } from '../components/ui/Card';

import { GitBranch, BookOpen } from 'lucide-react';

export function GithubSection() {
  return (
    <section id="github" className="scroll-mt-24">
      <SectionHeading title="Engineering Focus Areas" subtitle="Exploring architecture and open source." />
      <div className="grid gap-6 md:grid-cols-2">
        <FadeIn>
          <Card className="p-8 h-full border-zinc-800 bg-zinc-900/40">
            <div className="flex items-center gap-3 mb-6">
              <GitBranch className="text-zinc-300" size={24} />
              <h3 className="text-xl font-bold text-zinc-50">What's in my repositories?</h3>
            </div>
            <ul className="space-y-6 text-sm text-zinc-400 leading-relaxed">
              <li className="flex gap-4">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 shrink-0"></div>
                <div><strong className="text-zinc-200">Backend Architecture:</strong> Extensive work with Spring Boot, demonstrating layered architecture, DTO patterns, and repository abstraction.</div>
              </li>
              <li className="flex gap-4">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 shrink-0"></div>
                <div><strong className="text-zinc-200">AI Integration:</strong> Projects bridging ML models with web interfaces using Flask, LangChain4j, and Vector Databases.</div>
              </li>
              <li className="flex gap-4">
                <div className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-1.5 shrink-0"></div>
                <div><strong className="text-zinc-200">Data Pipelines:</strong> Explorations into event-driven systems using Apache Kafka for real-time processing and asynchronous task handling.</div>
              </li>
            </ul>
          </Card>
        </FadeIn>
        <FadeIn delay={0.2}>
          <Card className="p-8 h-full border-zinc-800 bg-zinc-900/50 flex flex-col justify-center items-center text-center">
            <BookOpen className="text-zinc-400 mb-4" size={32} />
            <h3 className="text-xl font-bold text-zinc-50 mb-2">Explore the Code</h3>
            <p className="text-zinc-400 text-sm mb-6 max-w-sm">
              Dive into my commit history, architectural patterns, and full project structures on GitHub.
            </p>
            <a href="https://github.com/RupeshReddy37" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-zinc-50 text-zinc-900 font-medium hover:bg-zinc-200 transition-colors">
              View GitHub Profile
            </a>
          </Card>
        </FadeIn>
      </div>
    </section>
  );
}