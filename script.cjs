const fs = require('fs');

const exp = import * as React from 'react';
import { FadeIn } from '../components/ui/FadeIn';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';

export function ExperienceSection() {
  return (
    <section id="experience" className="scroll-mt-24">
      <SectionHeading title="Experience" subtitle="Professional roles and internships." />
      
      <div className="flex flex-col gap-6">
        <FadeIn>
          <Card className="p-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
              <div>
                <h3 className="text-xl font-bold text-zinc-50">AI & Machine Learning Engineering Intern</h3>
              </div>
              <div className="text-zinc-500 font-medium whitespace-nowrap bg-zinc-900/50 px-3 py-1.5 rounded-md border border-zinc-800">
                Oct 2024 – Mar 2025
              </div>
            </div>
            
            <ul className="list-disc list-outside ml-5 space-y-3 text-zinc-400 leading-relaxed marker:text-zinc-600 mb-6">
              <li>Designed and integrated RESTful APIs using Java and Spring Boot for deploying ML models, enabling scalable and secure backend communication.</li>
              <li>Built real-time event-driven data pipelines using Apache Kafka for high-throughput streaming and backend processing.</li>
              <li>Implemented JWT-based authentication and authorization for secure model inference and API request handling.</li>
              <li>Collaborated in an Agile environment on system architecture, backend performance optimization, and data security.</li>
            </ul>

            <div className="flex flex-wrap gap-2">
              <Badge variant="outline">Java</Badge>
              <Badge variant="outline">Spring Boot</Badge>
              <Badge variant="outline">Apache Kafka</Badge>
              <Badge variant="outline">REST APIs</Badge>
              <Badge variant="outline">JWT</Badge>
              <Badge variant="outline">Git</Badge>
            </div>
          </Card>
        </FadeIn>
      </div>
    </section>
  );
}
;

const curr = import * as React from 'react';
import { FadeIn } from '../components/ui/FadeIn';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Card } from '../components/ui/Card';
import { Terminal, Cloud, Container } from 'lucide-react';

export function CurrentlyLearningSection() {
  return (
    <section id="currently-learning" className="scroll-mt-24">
      <SectionHeading title="Currently Building & Learning" subtitle="My ongoing technical growth." />
      
      <div className="grid gap-6 md:grid-cols-3">
        <FadeIn delay={0.1}>
          <Card className="p-6 h-full border-zinc-800 bg-gradient-to-b from-zinc-900/50 to-zinc-950/50">
            <Terminal className="text-zinc-300 mb-4" size={24} />
            <h3 className="text-lg font-bold text-zinc-50 mb-2">College Management System</h3>
            <p className="text-zinc-400 text-sm leading-relaxed">
              Developing a comprehensive backend system for academic management using Spring Boot, PostgreSQL, and Hibernate.
            </p>
          </Card>
        </FadeIn>
        
        <FadeIn delay={0.2}>
          <Card className="p-6 h-full border-zinc-800 bg-gradient-to-b from-zinc-900/50 to-zinc-950/50">
            <Cloud className="text-zinc-300 mb-4" size={24} />
            <h3 className="text-lg font-bold text-zinc-50 mb-2">Cloud Technologies</h3>
            <p className="text-zinc-400 text-sm leading-relaxed">
              Expanding my knowledge of AWS and cloud deployment architectures to host scalable, highly available enterprise applications.
            </p>
          </Card>
        </FadeIn>

        <FadeIn delay={0.3}>
          <Card className="p-6 h-full border-zinc-800 bg-gradient-to-b from-zinc-900/50 to-zinc-950/50">
            <Container className="text-zinc-300 mb-4" size={24} />
            <h3 className="text-lg font-bold text-zinc-50 mb-2">Kubernetes</h3>
            <p className="text-zinc-400 text-sm leading-relaxed">
              Transitioning from Docker containerization to orchestration, learning K8s primitives for robust microservice deployment.
            </p>
          </Card>
        </FadeIn>
      </div>
    </section>
  );
}
;

fs.writeFileSync('src/sections/ExperienceSection.tsx', exp);
fs.writeFileSync('src/sections/CurrentlyLearningSection.tsx', curr);
