import * as React from 'react';
import { FadeIn } from '../components/ui/FadeIn';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Card } from '../components/ui/Card';

export function AboutSection() {
  return (
    <section id="about" className="scroll-mt-24">
      <SectionHeading
        title="About Me"
        subtitle="My background and educational journey."
      />

      <div className="grid gap-8 md:grid-cols-2">
        <FadeIn delay={0.1}>
          <div className="flex flex-col gap-4 text-zinc-400 leading-relaxed text-lg">
            <p>
              My journey in Computer Science and Engineering has been driven by a
              curiosity to understand how technology works and how software can solve
              real-world challenges. Throughout my degree, I explored programming,
              software engineering, web development, Artificial Intelligence, and
              Machine Learning while building a strong technical foundation.
            </p>

            <p>
              Beyond academics, I focused on learning through hands-on projects and an
              AI & Machine Learning internship. These experiences helped me develop
              practical skills in Java, backend development, and AI-powered applications,
              including an Enterprise RAG system that combined software engineering with
              modern AI technologies.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.2} direction="left">
          <Card className="p-6">
            <h3 className="text-xl font-bold text-zinc-50 mb-4">Education</h3>

            <div className="relative border-l border-zinc-800 ml-3 pl-6 pb-2">
              <div className="absolute w-3 h-3 bg-zinc-700 rounded-full -left-[6.5px] top-1.5 border-2 border-zinc-950"></div>

              <h4 className="text-lg font-semibold text-zinc-100">
                Bachelor of Engineering (B.E)
              </h4>

              <p className="text-zinc-300 font-medium">
                Computer Science & Engineering
              </p>

              <p className="text-zinc-500 text-sm mt-1">
                Cambridge Institute of Technology, Visvesvaraya Technological
                University (VTU), Bangalore
              </p>

              <p className="text-zinc-500 text-sm mt-1">
                2021 — 2025 • CGPA: 7.3 / 10
              </p>
            </div>
          </Card>
        </FadeIn>
      </div>
    </section>
  );
}