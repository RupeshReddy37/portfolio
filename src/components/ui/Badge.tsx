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
          'bg-zinc-50 text-zinc-900 hover:bg-zinc-50/80': variant === 'default',
          'bg-zinc-800 text-zinc-50 hover:bg-zinc-800/80': variant === 'secondary',
          'text-zinc-300 border border-zinc-700': variant === 'outline',
        },
        className
      )}
      {...props}
    />
  );
}

export { Badge };
