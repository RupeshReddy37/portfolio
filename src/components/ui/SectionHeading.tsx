import * as React from 'react';
import { cn } from '../../utils/cn';

interface SectionHeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  title: string;
  subtitle?: string;
}

export function SectionHeading({ title, subtitle, className, ...props }: SectionHeadingProps) {
  return (
    <div className={cn('mb-12 flex flex-col items-start gap-2', className)} {...props}>
      <h2 className="text-3xl font-bold tracking-tight text-zinc-50 sm:text-4xl">{title}</h2>
      {subtitle && <p className="text-lg text-zinc-400">{subtitle}</p>}
    </div>
  );
}
