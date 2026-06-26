import * as React from 'react';
import {
  Activity,
  ClipboardList,
  Database,
  Rocket,
  Route,
  ShieldCheck,
} from 'lucide-react';
import { FadeIn } from '../components/ui/FadeIn';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Card } from '../components/ui/Card';

const principles = [
  {
    icon: ClipboardList,
    title: 'Requirement Analysis',
    desc: 'Translating ambiguous product goals into strict technical specs and bounded contexts before writing code.',
  },
  {
    icon: Route,
    title: 'API Design',
    desc: 'Crafting RESTful, stateless APIs with clear contracts, versioning, and predictable error handling.',
  },
  {
    icon: Database,
    title: 'Database Design',
    desc: 'Normalizing relational data for integrity while using vector databases and caching layers for read-heavy workloads.',
  },
  {
    icon: ShieldCheck,
    title: 'Security First',
    desc: 'Implementing stateless JWT auth, role-based access control, and safer input handling at API boundaries.',
  },
  {
    icon: Rocket,
    title: 'Deployment',
    desc: 'Containerizing services with Docker and keeping builds reproducible across development and production.',
  },
  {
    icon: Activity,
    title: 'Monitoring Mindset',
    desc: 'Structuring logs and metrics so systems are easier to debug, measure, and improve after release.',
  },
];

export function HowIBuildSection() {
  return (
    <section id="how-i-build" className="scroll-mt-24">
      <SectionHeading
        title="How I Build Software"
        subtitle="My engineering process from conception to production."
      />

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {principles.map((principle, index) => {
          const Icon = principle.icon;

          return (
            <FadeIn key={principle.title} delay={0.1 * index}>
              <Card className="h-full border-zinc-800 bg-zinc-900/45 p-6 transition-colors hover:border-cyan-300/25 hover:bg-zinc-900/80">
                <div className="mb-4 grid h-11 w-11 place-items-center rounded-md border border-zinc-800 bg-zinc-950 text-cyan-100">
                  <Icon size={22} />
                </div>
                <h3 className="mb-2 text-lg font-bold text-zinc-100">
                  {principle.title}
                </h3>
                <p className="text-sm leading-6 text-zinc-400">
                  {principle.desc}
                </p>
              </Card>
            </FadeIn>
          );
        })}
      </div>
    </section>
  );
}
