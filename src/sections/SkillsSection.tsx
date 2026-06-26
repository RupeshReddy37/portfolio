import * as React from 'react';
import { FadeIn } from '../components/ui/FadeIn';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Badge } from '../components/ui/Badge';
import { Card } from '../components/ui/Card';

const skillCategories = [
  {
    title: 'Core Engineering',
    skills: ['Java', 'OOP', 'Design Patterns', 'Multithreading', 'DSA'],
  },
  {
    title: 'Backend & APIs',
    skills: ['Spring Boot', 'Spring MVC', 'REST APIs', 'JWT / OAuth', 'Swagger'],
  },
  {
    title: 'Persistence & Search',
    skills: ['PostgreSQL', 'MySQL', 'MongoDB', 'Hibernate / JPA', 'Qdrant'],
  },
  {
    title: 'Messaging & Tools',
    skills: ['Apache Kafka', 'Docker', 'Git', 'Linux', 'Maven', 'Gradle'],
  },
  {
    title: 'Frontend Development',
    skills: ['HTML', 'CSS', 'JavaScript', 'React Basics', 'JavaFX Basics', 'Responsive UI'],
  },
  {
    title: 'AI / ML Project Work',
    skills: ['LangChain4j', 'RAG Systems', 'Document Chunking', 'Vector Search', 'Deep Learning', 'CNN', 'Model Deployment', 'Flask REST API'],
  },
  {
    title: 'Currently Learning',
    skills: ['AWS Basics', 'CI/CD', 'Advanced System Design', 'Kubernetes', 'React'],
  },
];

export function SkillsSection() {
  return (
    <section id="skills" className="scroll-mt-24">
      <SectionHeading title="Technical Expertise" subtitle="Technologies and tools I work with." />

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {skillCategories.map((category, index) => (
          <FadeIn key={category.title} delay={index * 0.1}>
            <Card className="flex h-full min-h-44 flex-col p-6 transition-colors hover:border-cyan-300/25 hover:bg-zinc-900/80">
              <div className="mb-5 flex items-center gap-3">
                <div className="h-2 w-2 rounded-full bg-cyan-300" />
                <h3 className="text-lg font-semibold text-zinc-100">
                  {category.title}
                </h3>
              </div>
              <div className="mt-auto flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <Badge key={skill} variant="secondary">
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
