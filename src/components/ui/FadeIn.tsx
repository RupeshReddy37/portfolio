import * as React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { cn } from '../../utils/cn';

interface FadeInProps extends HTMLMotionProps<'div'> {
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  fullWidth?: boolean;
}

export function FadeIn({
  children,
  delay = 0,
  direction = 'up',
  fullWidth = false,
  className,
  ...props
}: FadeInProps) {
  const directions = {
    up: { y: 24, x: 0 },
    down: { y: -24, x: 0 },
    left: { x: 24, y: 0 },
    right: { x: -24, y: 0 },
    none: { x: 0, y: 0 },
  };

  return (
    <motion.div
      initial={{ opacity: 1, x: 0, y: 0 }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{
        duration: 0.5,
        delay,
        ease: [0.21, 0.47, 0.32, 0.98], // Tailwind's default ease-out cubic-bezier
      }}
      className={cn(fullWidth && 'w-full', className)}
      {...props}
    >
      {children}
    </motion.div>
  );
}
