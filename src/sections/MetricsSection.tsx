import * as React from 'react';
import { FadeIn } from '../components/ui/FadeIn';

const metrics = [
  {
    label: 'Engineering Internship',
    value: '6 mo',
    detail: 'Spring Boot APIs, Kafka pipelines, JWT-secured services',
  },
  {
    label: 'Featured Case Studies',
    value: '3',
    detail: 'RAG systems, computer vision, workforce analytics',
  },
  {
    label: 'Backend Stack',
    value: 'Java',
    detail: 'Spring Boot, Hibernate/JPA, REST APIs, PostgreSQL',
  },
  {
    label: 'RAG + AI Workflows',
    value: 'RAG',
    detail: 'LangChain4j, Qdrant, local LLM workflows, CNN projects',
  },
];

export function MetricsSection() {
  return (
    <section className="mx-auto w-full max-w-6xl px-4 sm:px-6">
      <FadeIn delay={0.2} direction="up" fullWidth>
        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-zinc-800 bg-zinc-800 shadow-[0_20px_70px_rgba(0,0,0,0.25)] sm:grid-cols-4">
          {metrics.map((metric) => (
            <div
              key={metric.label}
              className="flex min-h-40 flex-col items-center justify-center bg-zinc-900/75 p-5 text-center backdrop-blur-sm sm:p-7"
            >
              <span className="text-3xl font-black tracking-tight text-zinc-50 sm:text-4xl">
                {metric.value}
              </span>
              <span className="mt-2 text-sm font-medium text-zinc-400">
                {metric.label}
              </span>
              <span className="mt-3 max-w-44 text-xs leading-5 text-zinc-500">
                {metric.detail}
              </span>
            </div>
          ))}
        </div>
      </FadeIn>
    </section>
  );
}
