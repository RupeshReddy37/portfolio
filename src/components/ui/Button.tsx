import * as React from 'react';
import { cn } from '../../utils/cn';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          'inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400 disabled:pointer-events-none disabled:opacity-50',
          {
            'bg-cyan-300 text-zinc-950 shadow-[0_0_32px_rgba(103,232,249,0.18)] hover:bg-cyan-200': variant === 'primary',
            'bg-zinc-800/90 text-zinc-50 ring-1 ring-zinc-700/80 hover:bg-zinc-700': variant === 'secondary',
            'border border-zinc-700 bg-zinc-950/40 text-zinc-200 hover:border-cyan-300/60 hover:bg-cyan-300/10 hover:text-cyan-100': variant === 'outline',
            'text-zinc-300 hover:bg-zinc-800 hover:text-zinc-50': variant === 'ghost',
            'h-9 px-4 text-sm': size === 'sm',
            'h-10 px-5 py-2 text-sm': size === 'md',
            'min-h-11 px-6 py-3 text-base sm:px-8': size === 'lg',
          },
          className
        )}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';

export { Button };
