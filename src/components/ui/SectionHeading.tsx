import * as React from 'react';
import { cn } from '../../utils/cn';

interface SectionHeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  title: string;
  subtitle?: string;
}

export function SectionHeading({ title, subtitle, className, ...props }: SectionHeadingProps) {
  return (
    <div className={cn('mb-10 flex max-w-2xl flex-col items-start gap-3', className)} {...props}>
      <div className="h-1 w-10 rounded-full bg-cyan-300" />
      <h2 className="text-3xl font-bold tracking-tight text-zinc-50 sm:text-4xl">{title}</h2>
      {subtitle && <p className="text-base leading-relaxed text-zinc-400 sm:text-lg">{subtitle}</p>}
    </div>
  );
}
