import * as React from 'react';
import { Link } from 'react-router-dom';
import {
  Activity,
  ArrowRight,
  Cpu,
  Database,
  Layers,
  Server,
} from 'lucide-react';
import { FadeIn } from '../components/ui/FadeIn';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';

const projects = [
  {
    title: 'Enterprise Knowledge Retrieval Platform',
    description:
      'A Retrieval-Augmented Generation platform built with Spring Boot, LangChain4j, Qdrant, and local LLMs to deliver enterprise knowledge retrieval with privacy-first AI.',
    href: '/projects/rag-system',
    icon: Database,
    tags: ['Java', 'Spring Boot', 'LangChain4j', 'Qdrant', 'PostgreSQL'],
    role: 'Backend architecture, retrieval pipeline, vector search, metadata persistence',
    proof: ['Modular Spring Boot service layers', 'Hybrid search with PostgreSQL + Qdrant', 'Dockerized local LLM workflow'],
    visual: 'rag',
  },
  {
    title: 'Deficiency Detection AI',
    description:
      'A computer-vision workflow using CNN-based deep learning models to classify nail and tongue images through an end-to-end prediction API.',
    href: '/projects/deficiency-ai',
    icon: Cpu,
    tags: ['Python', 'Deep Learning', 'CNN', 'Flask'],
    role: 'Image preprocessing, CNN inference workflow, Flask REST API delivery',
    proof: ['Upload-to-prediction pipeline', 'Data augmentation workflow', 'Real-time API response design'],
    visual: 'vision',
  },
  {
    title: 'Workforce Activity Intelligence Platform',
    description:
      'A workforce analytics platform built with Spring Boot and native Windows APIs to monitor activity states, application usage, and productivity signals.',
    href: '/projects/workforce-intelligence',
    icon: Activity,
    tags: ['Java', 'Spring Boot', 'JNA', 'Windows API', 'Analytics'],
    role: 'Native activity monitoring, state management, productivity signal design',
    proof: ['Windows idle detection', 'Foreground application tracking', 'Privacy-conscious signal model'],
    visual: 'activity',
  },
];

function ProjectVisual({ type }: { type: string }) {
  if (type === 'vision') {
    return (
      <div className="grid w-full max-w-52 grid-cols-3 gap-2">
        {Array.from({ length: 9 }).map((_, index) => (
          <div
            key={index}
            className={`aspect-square rounded-md border ${
              index === 4
                ? 'border-cyan-300/60 bg-cyan-300/80 shadow-[0_0_24px_rgba(103,232,249,0.35)]'
                : 'border-zinc-800 bg-zinc-900'
            }`}
          />
        ))}
      </div>
    );
  }

  if (type === 'activity') {
    return (
      <div className="w-full max-w-64 space-y-3">
        {[72, 48, 84, 56].map((width, index) => (
          <div key={width} className="rounded-md border border-zinc-800 bg-zinc-900 p-3">
            <div className="mb-2 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-emerald-300" />
              <span className="text-xs font-medium text-zinc-400">
                Signal {index + 1}
              </span>
            </div>
            <div className="h-2 rounded-full bg-zinc-800">
              <div
                className="h-full rounded-full bg-cyan-300"
                style={{ width: `${width}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="flex w-full max-w-64 items-center gap-4">
      <div className="grid h-16 w-16 shrink-0 place-items-center rounded-lg border border-cyan-300/30 bg-cyan-300/10 text-cyan-100">
        <Server size={24} />
      </div>
      <div className="h-px flex-1 bg-gradient-to-r from-cyan-300/70 to-zinc-700" />
      <div className="grid h-16 w-16 shrink-0 place-items-center rounded-lg border border-zinc-700 bg-zinc-900 text-zinc-300">
        <Layers size={24} />
      </div>
      <div className="h-px flex-1 bg-gradient-to-r from-zinc-700 to-emerald-300/70" />
      <div className="grid h-16 w-16 shrink-0 place-items-center rounded-lg border border-emerald-300/30 bg-emerald-300/10 text-emerald-100">
        <Database size={24} />
      </div>
    </div>
  );
}

export function ProjectsPreviewSection() {
  return (
    <section id="projects" className="scroll-mt-24">
      <SectionHeading
        title="Featured Work"
        subtitle="Enterprise-grade systems, AI platforms, and productivity analytics solutions."
      />

      <div className="grid gap-6">
        {projects.map((project, index) => {
          const Icon = project.icon;

          return (
            <FadeIn key={project.title} delay={index * 0.12}>
              <Card className="overflow-hidden">
                <div className="grid lg:grid-cols-[1.05fr_0.95fr]">
                  <div className="flex flex-col p-6 sm:p-8">
                    <div className="mb-5 flex items-start gap-4">
                      <div className="grid h-12 w-12 shrink-0 place-items-center rounded-md border border-zinc-800 bg-zinc-950 text-cyan-100">
                        <Icon size={22} />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold tracking-tight text-zinc-50">
                          {project.title}
                        </h3>
                        <p className="mt-3 text-pretty leading-7 text-zinc-400">
                          {project.description}
                        </p>
                      </div>
                    </div>

                    <div className="mb-7 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <Badge key={tag}>{tag}</Badge>
                      ))}
                    </div>

                    <div className="mb-7 rounded-md border border-zinc-800 bg-zinc-950/55 p-4">
                      <p className="text-xs font-semibold uppercase text-cyan-200">
                        My Role
                      </p>
                      <p className="mt-2 text-sm leading-6 text-zinc-300">
                        {project.role}
                      </p>
                      <div className="mt-4 grid gap-2">
                        {project.proof.map((item) => (
                          <div key={item} className="flex gap-2 text-sm text-zinc-400">
                            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-300" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <Link
                      to={project.href}
                      className="mt-auto inline-flex min-h-10 w-full items-center justify-center gap-2 rounded-md bg-cyan-300 px-5 py-2 text-sm font-semibold text-zinc-950 transition-colors hover:bg-cyan-200 sm:w-fit"
                    >
                      Read Case Study <ArrowRight size={16} />
                    </Link>
                  </div>

                  <div className="relative min-h-72 overflow-hidden border-t border-zinc-800 bg-zinc-950 p-8 lg:border-l lg:border-t-0">
                    <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(34,211,238,0.08),transparent_42%),linear-gradient(315deg,rgba(16,185,129,0.08),transparent_38%)]" />
                    <div className="relative z-10 flex h-full items-center justify-center">
                      <ProjectVisual type={project.visual} />
                    </div>
                  </div>
                </div>
              </Card>
            </FadeIn>
          );
        })}
      </div>
    </section>
  );
}
