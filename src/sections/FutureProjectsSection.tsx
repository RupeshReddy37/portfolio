import * as React from 'react';
import { FadeIn } from '../components/ui/FadeIn';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Card } from '../components/ui/Card';

import { Terminal, Database } from 'lucide-react';
import { Badge } from '../components/ui/Badge';

export function FutureProjectsSection() {
  return (
    <section id="future-projects" className="scroll-mt-24">
      <SectionHeading title="Currently Building" subtitle="Projects in the pipeline focused on scale and architecture." />
      <div className="grid gap-6 md:grid-cols-2">
        <FadeIn delay={0.1}>
          <Card className="p-8 h-full border-zinc-800 relative overflow-hidden bg-zinc-900/30">
            <div className="absolute top-0 right-0 px-3 py-1 bg-zinc-800 text-xs font-semibold text-zinc-300 rounded-bl-lg">WIP</div>
            <Terminal className="text-zinc-400 mb-6" size={24} />
            <h3 className="text-xl font-bold text-zinc-50 mb-3">College Management System (with RAG)</h3>
            <p className="text-zinc-400 text-sm leading-relaxed mb-6">
              A comprehensive backend for academic management integrating an AI chatbot that answers student queries strictly based on the college's syllabus and policy documents.
            </p>
            <div className="flex gap-2"><Badge variant="outline">Spring Boot</Badge><Badge variant="outline">PostgreSQL</Badge><Badge variant="outline">LLM</Badge></div>
          </Card>
        </FadeIn>
        <FadeIn delay={0.2}>
          <Card className="p-8 h-full border-zinc-800 relative overflow-hidden bg-zinc-900/30">
            <div className="absolute top-0 right-0 px-3 py-1 bg-zinc-800 text-xs font-semibold text-zinc-300 rounded-bl-lg">WIP</div>
            <Database className="text-zinc-400 mb-6" size={24} />
            <h3 className="text-|e font-bold text-zinc-50 mb-3">Enterprise RAG Deployment</h3>
            <p className="text-zinc-400 text-sm leading-relaxed mb-6">
              Evolving my existing RAG system by moving from Docker Compose to a Kubernetes orchestration model, demonstrating production-grade load balancing and vector DB sharding.
            </p>
            <div className="flex gap-2"><Badge variant="outline">Kubernetes</Badge><Badge variant="outline">Qdrant</Badge><Badge variant="outline">Kafka</Badge></div>
          </Card>
        </FadeIn>
      </div>
    </section>
  );
}