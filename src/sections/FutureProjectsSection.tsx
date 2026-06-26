import * as React from 'react';
import { FadeIn } from '../components/ui/FadeIn';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Card } from '../components/ui/Card';

import { Terminal } from 'lucide-react';
import { Badge } from '../components/ui/Badge';

const roadmap = ['Role-based academic modules', 'Document-grounded student assistant', 'PostgreSQL-backed service design'];

export function FutureProjectsSection() {
  return (
    <section id="future-projects" className="scroll-mt-24">
      <SectionHeading title="Currently Building" subtitle="Projects in the pipeline focused on scale and architecture." />
      <div className="grid gap-6">
        <FadeIn delay={0.1}>
          <Card className="relative overflow-hidden border-zinc-800 bg-zinc-900/45 p-8">
            <div className="absolute right-0 top-0 rounded-bl-lg bg-zinc-800 px-3 py-1 text-xs font-semibold text-zinc-300">WIP</div>
            <Terminal className="text-zinc-400 mb-6" size={24} />
            <h3 className="text-xl font-bold text-zinc-50 mb-3">College Management System (with RAG)</h3>
            <p className="text-zinc-400 text-sm leading-relaxed mb-6">
              A comprehensive backend for academic management, integrating an AI chatbot that answers student queries using syllabus and policy documents as grounded context.
            </p>
            <div className="mb-6 grid gap-2 sm:grid-cols-3">
              {roadmap.map((item) => (
                <div key={item} className="rounded-md border border-zinc-800 bg-zinc-950/55 p-3 text-xs leading-5 text-zinc-400">
                  {item}
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-2"><Badge variant="outline">Spring Boot</Badge><Badge variant="outline">PostgreSQL</Badge><Badge variant="outline">RAG</Badge><Badge variant="outline">LLM</Badge></div>
          </Card>
        </FadeIn>
      </div>
    </section>
  );
}
