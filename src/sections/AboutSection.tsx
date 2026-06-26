import * as React from 'react';
import { FadeIn } from '../components/ui/FadeIn';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Card } from '../components/ui/Card';

const focusAreas = [
  'Java developer profile with Spring Boot, REST APIs, Hibernate/JPA, and PostgreSQL.',
  'Hands-on internship exposure to Kafka pipelines, JWT auth, and ML model deployment APIs.',
  'Project depth across RAG systems, vector search, Flask inference APIs, and backend architecture.',
];

export function AboutSection() {
  return (
    <section id="about" className="scroll-mt-24">
      <SectionHeading
        title="About Me"
        subtitle="My background and educational journey."
      />

      <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <FadeIn delay={0.1}>
          <div className="flex flex-col gap-6">
            <div className="text-base leading-8 text-zinc-300 sm:text-lg">
              <p>
                I&apos;m a B.E. Computer Science graduate focused on Java backend
                development, REST API design, and AI-integrated systems. My work
                sits at the intersection of Spring Boot services, data
                persistence, event-driven pipelines, and practical AI workflows.
              </p>

              <p className="mt-5">
                Through internship work and portfolio projects, I&apos;ve built
                JWT-secured backend services, Kafka-based processing flows,
                RAG-driven knowledge retrieval, and model inference APIs.
              </p>
            </div>

            <div className="grid gap-3">
              {focusAreas.map((area) => (
                <div
                  key={area}
                  className="rounded-md border border-zinc-800 bg-zinc-900/45 p-4 text-sm leading-6 text-zinc-300"
                >
                  {area}
                </div>
              ))}
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.2} direction="left" className="h-full">
          <Card className="h-full overflow-hidden p-0">
            <div className="border-b border-zinc-800 bg-zinc-950/50 p-6">
              <p className="text-xs font-semibold uppercase text-cyan-200">
                Academic Foundation
              </p>
              <h3 className="mt-2 text-xl font-bold text-zinc-50">
                Education
              </h3>
            </div>

            <div className="relative m-6 border-l border-zinc-800 pl-6">
              <div className="absolute -left-[6.5px] top-1.5 h-3 w-3 rounded-full border-2 border-zinc-950 bg-cyan-300" />

              <h4 className="text-lg font-semibold text-zinc-100">
                Bachelor of Engineering (B.E)
              </h4>

              <p className="font-medium text-zinc-300">
                Computer Science & Engineering
              </p>

              <p className="mt-2 text-sm leading-6 text-zinc-500">
                Cambridge Institute of Technology, Visvesvaraya Technological
                University (VTU), Bangalore
              </p>

              <p className="mt-3 inline-flex rounded-md border border-zinc-800 bg-zinc-950 px-3 py-1.5 text-sm font-medium text-zinc-300">
                2021 - 2025 | CGPA: 7.3 / 10
              </p>
            </div>
          </Card>
        </FadeIn>
      </div>
    </section>
  );
}
