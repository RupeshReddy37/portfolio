import * as React from 'react';
import { FadeIn } from '../components/ui/FadeIn';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Card } from '../components/ui/Card';

import { GitBranch, BookOpen } from 'lucide-react';
import { profile } from '../constants/profile';

export function GithubSection() {
  return (
    <section id="github" className="scroll-mt-24">
      <SectionHeading title="Engineering Focus Areas" subtitle="What reviewers should look for in my project work." />
      <div className="grid gap-6 md:grid-cols-2">
        <FadeIn>
          <Card className="h-full border-zinc-800 bg-zinc-900/45 p-8">
            <div className="flex items-center gap-3 mb-6">
              <GitBranch className="text-zinc-300" size={24} />
            <h3 className="text-xl font-bold text-zinc-50">What&apos;s in my repositories?</h3>
            </div>
            <ul className="space-y-6 text-sm text-zinc-400 leading-relaxed">
              <li className="flex gap-4">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 shrink-0"></div>
                <div><strong className="text-zinc-200">Backend Architecture:</strong> Spring Boot service layers, REST contracts, DTO patterns, repository abstraction, and validation boundaries.</div>
              </li>
              <li className="flex gap-4">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 shrink-0"></div>
                <div><strong className="text-zinc-200">AI + RAG Workflows:</strong> Projects bridging model workflows with backend APIs using Flask, LangChain4j, Qdrant, and vector retrieval.</div>
              </li>
              <li className="flex gap-4">
                <div className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-1.5 shrink-0"></div>
                <div><strong className="text-zinc-200">Data Pipelines:</strong> Event-driven processing concepts using Apache Kafka for streaming and asynchronous backend workflows.</div>
              </li>
            </ul>
          </Card>
        </FadeIn>
        <FadeIn delay={0.2}>
          <Card className="flex h-full flex-col items-center justify-center border-zinc-800 bg-zinc-950 p-8 text-center">
            <BookOpen className="text-zinc-400 mb-4" size={32} />
            <h3 className="text-xl font-bold text-zinc-50 mb-2">Explore the Code</h3>
            <p className="text-zinc-400 text-sm mb-6 max-w-sm">
              Dive into my commit history, architectural patterns, and full project structures on GitHub.
            </p>
            <a href={profile.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-md bg-cyan-300 px-6 py-3 font-medium text-zinc-950 transition-colors hover:bg-cyan-200">
              View GitHub Profile
            </a>
          </Card>
        </FadeIn>
      </div>
    </section>
  );
}
