import * as React from 'react';
import { FadeIn } from '../components/ui/FadeIn';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Badge } from '../components/ui/Badge';
import { Card } from '../components/ui/Card';

const skillCategories = [
  {
    title: 'Backend & APIs',
    skills: ['Java', 'Spring Boot', 'REST APIs', 'JDBC', 'Hibernate', 'JWT', 'OAuth'],
  },
  {
    title: 'Databases & Storage',
    skills: ['PostgreSQL', 'MySQL', 'MongoDB', 'Qdrant (Vector DB)'],
  },
  {
    title: 'AI & Machine Learning',
    skills: ['Deep Learning', 'CNN', 'RAG Systems', 'LangChain4j', 'Model Deployment'],
  },
  {
    title: 'Infrastructure & Tools',
    skills: ['Docker', 'Git', 'Linux', 'Maven', 'Gradle', 'Postman', 'Swagger'],
  },
  {
    title: 'Currently Learning',
    skills: ['Kubernetes', 'Cloud Technologies', 'Advanced System Design', 'Apache Kafka', 'React'],
  },
];

export function SkillsSection() {
  return (
    <section id="skills" className="scroll-mt-24">
      <SectionHeading title="Technical Expertise" subtitle="Technologies and tools I work with." />
      
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {skillCategories.map((category, index) => (
          <FadeIn key={category.title} delay={index * 0.1}>
            <Card className="p-6 h-full flex flex-col">
              <h3 className="text-lg font-semibold text-zinc-100 mb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-2 mt-auto">
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