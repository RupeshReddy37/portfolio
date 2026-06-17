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
            'bg-zinc-50 text-zinc-900 hover:bg-zinc-200': variant === 'primary',
            'bg-zinc-800 text-zinc-50 hover:bg-zinc-700': variant === 'secondary',
            'border border-zinc-700 bg-transparent hover:bg-zinc-800 text-zinc-300': variant === 'outline',
            'hover:bg-zinc-800 text-zinc-300 hover:text-zinc-50': variant === 'ghost',
            'h-9 px-4 text-sm': size === 'sm',
            'h-10 px-6 py-2': size === 'md',
            'h-11 px-8 text-lg': size === 'lg',
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
