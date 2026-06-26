import * as React from 'react';
import { cn } from '../../utils/cn';

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'secondary' | 'outline';
}

function Badge({ className, variant = 'default', ...props }: BadgeProps) {
  return (
    <div
      className={cn(
        'inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-zinc-400',
        {
          'bg-cyan-300/12 text-cyan-100 ring-1 ring-cyan-300/30 hover:bg-cyan-300/18': variant === 'default',
          'bg-zinc-800/90 text-zinc-100 ring-1 ring-zinc-700/80 hover:bg-zinc-800/80': variant === 'secondary',
          'border border-zinc-700/90 text-zinc-300': variant === 'outline',
        },
        className
      )}
      {...props}
    />
  );
}

export { Badge };
