import * as React from 'react';
import { FadeIn } from '../components/ui/FadeIn';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';

const experienceHighlights = [
  { label: 'Backend APIs', value: 'Spring Boot' },
  { label: 'Streaming', value: 'Apache Kafka' },
  { label: 'Security', value: 'JWT Auth' },
];

export function ExperienceSection() {
  return (
    <section id="experience" className="scroll-mt-24">
      <SectionHeading title="Experience" subtitle="Professional roles and internships." />
      
      <div className="flex flex-col gap-6">
        <FadeIn>
          <Card className="overflow-hidden p-0">
            <div className="flex flex-col justify-between gap-4 border-b border-zinc-800 bg-zinc-950/50 p-6 md:flex-row md:items-center sm:p-8">
              <div>
                <p className="text-xs font-semibold uppercase text-cyan-200">
                  Internship
                </p>
                <h3 className="mt-2 text-xl font-bold text-zinc-50">
                  AI & Machine Learning Engineering Intern
                </h3>
              </div>
              <div className="whitespace-nowrap rounded-md border border-zinc-800 bg-zinc-900/70 px-3 py-1.5 text-sm font-medium text-zinc-400">
                Oct 2024 - Mar 2025
              </div>
            </div>

            <div className="p-6 sm:p-8">
            <div className="mb-7 grid gap-3 sm:grid-cols-3">
              {experienceHighlights.map((item) => (
                <div key={item.label} className="rounded-md border border-zinc-800 bg-zinc-950/60 p-4">
                  <p className="text-xs font-semibold uppercase text-zinc-500">
                    {item.label}
                  </p>
                  <p className="mt-1 font-semibold text-zinc-100">{item.value}</p>
                </div>
              ))}
            </div>

            <ul className="mb-6 ml-5 list-outside list-disc space-y-3 leading-relaxed text-zinc-400 marker:text-cyan-300/70">
              <li>Designed and integrated RESTful APIs using Java and Spring Boot for deploying ML models, enabling scalable and secure backend communication.</li>
              <li>Built real-time event-driven data pipelines using Apache Kafka for high-throughput streaming and backend processing.</li>
              <li>Implemented JWT-based authentication and authorization for secure model inference and API request handling.</li>
              <li>Participated in code reviews, system architecture discussions, backend performance optimization, and data-security workflows.</li>
              <li>Managed version control and collaboration workflows using Git and GitHub.</li>
            </ul>

            <div className="flex flex-wrap gap-2">
              <Badge variant="outline">Java</Badge>
              <Badge variant="outline">Spring Boot</Badge>
              <Badge variant="outline">Apache Kafka</Badge>
              <Badge variant="outline">REST APIs</Badge>
              <Badge variant="outline">JWT</Badge>
              <Badge variant="outline">Git</Badge>
            </div>
            </div>
          </Card>
        </FadeIn>
      </div>
    </section>
  );
}
