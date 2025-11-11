"use client";

import { motion, MotionProps } from 'framer-motion';
import { useReducedMotion } from 'framer-motion';

// Optimized motion component that respects user preferences
export function PerformanceMotion({ children, ...props }: MotionProps & { children: React.ReactNode }) {
  const shouldReduceMotion = useReducedMotion();

  // Simplified animations for users who prefer reduced motion
  const optimizedProps = shouldReduceMotion ? {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.2 },
    ...props,
  } : props;

  return <motion.div {...optimizedProps}>{children}</motion.div>;
}

// Lightweight animation variants
export const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.4, ease: "easeOut" }
};

export const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.3 }
};

export const scaleIn = {
  initial: { opacity: 0, scale: 0.95 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.3, ease: "easeOut" }
};
