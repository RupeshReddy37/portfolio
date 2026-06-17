import * as React from 'react';
import { FadeIn } from '../components/ui/FadeIn';

const metrics = [
  { label: 'Projects Built', value: '3+' },
  { label: 'Internship Experience', value: '6 months' },
  { label: 'GitHub Repositories', value: '5+' },
  { label: 'Core Technologies', value: '8+' },
];

export function MetricsSection() {
  return (
    <section className="mx-auto w-full max-w-5xl px-6">
      <FadeIn delay={0.2} direction="up" fullWidth>
        <div className="grid grid-cols-2 gap-px bg-zinc-800 rounded-xl overflow-hidden sm:grid-cols-4 border border-zinc-800">
          {metrics.map((metric) => (
            <div key={metric.label} className="bg-zinc-900/50 p-8 text-center backdrop-blur-sm flex flex-col justify-center items-center">
              <span className="text-3xl font-bold text-zinc-50 sm:text-4xl">{metric.value}</span>
              <span className="mt-2 text-sm font-medium text-zinc-400">{metric.label}</span>
            </div>
          ))}
        </div>
      </FadeIn>
    </section>
  );
}