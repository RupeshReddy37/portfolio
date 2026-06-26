import * as React from 'react';
import { cn } from '../../utils/cn';

const Card = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        'rounded-lg border border-zinc-800/90 bg-zinc-900/60 text-zinc-100 shadow-[0_18px_70px_rgba(0,0,0,0.26)] backdrop-blur-sm',
        className
      )}
      {...props}
    />
  )
);
Card.displayName = 'Card';

export { Card };
