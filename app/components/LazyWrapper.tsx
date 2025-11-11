"use client";

import { Suspense } from 'react';
import { motion } from 'framer-motion';

const LoadingSkeleton = () => (
  <div className="w-full h-96 bg-muted/20 rounded-lg animate-pulse flex items-center justify-center">
    <div className="text-muted-foreground">Loading...</div>
  </div>
);

interface LazyWrapperProps {
  children: React.ReactNode;
  className?: string;
}

export function LazyWrapper({ children, className }: LazyWrapperProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.5 }}
    >
      <Suspense fallback={<LoadingSkeleton />}>
        {children}
      </Suspense>
    </motion.div>
  );
}
