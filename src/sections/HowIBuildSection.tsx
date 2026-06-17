import * as React from 'react';
import { FadeIn } from '../components/ui/FadeIn';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Card } from '../components/ui/Card';

import { ClipboardList, Route, Database, ShieldCheck, Rocket, Activity } from 'lucide-react';

export function HowIBuildSection() {
  const principles = [
    { icon: <ClipboardList size={24}/>, title: "Requirement Analysis", desc: "Translating ambiguous product goals into strict technical specs and bounded contexts before writing code." },
    { icon: <Route size={24}/>, title: "API Design", desc: "Crafting RESTful, stateless APIs with clear contracts, versioning, and predictable error handling." },
    { icon: <Database size={24}/>, title: "Database Design", desc: "Normalizing relational data for integrity while utilizing Vector DBs and caching layers for read-heavy workloads." },
    { icon: <ShieldCheck size={24}/>, title: "Security First", desc: "Implementing stateless JWT auth, role-based access control (RBAC), and sanitizing inputs at the gateway." },
    { icon: <Rocket size={24}/>, title: "Deployment", desc: "Containerizing services with Docker and ensuring reproducible builds via CI/CD pipelines." },
    { icon: <Activity size={24}/>, title: "Monitoring Mindset", desc: "Designing systems with observability in mind—structuring logs and metrics for fast root-cause analysis." }
  ];

  return (
    <section id="how-i-build" className="scroll-mt-24">
      <SectionHeading title="How I Build Software" subtitle="My engineering process from conception to production." />
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {principles.map((p, i) => (
          <FadeIn key={p.title} delay={0.1 * i}>
            <Card className="p-6 h-full border-zinc-800 bg-zinc-900/40 hover:bg-zinc-800/40 transition-colors">
              <div className="text-zinc-400 mb-4">{p.icon}</div>
              <h3 className="text-lg font-bold text-zinc-100 mb-2">{p.title}</h3>
              <p className="text-sm text-zinc-400 leading-relaxed">{p.desc}</p>
            </Card>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}