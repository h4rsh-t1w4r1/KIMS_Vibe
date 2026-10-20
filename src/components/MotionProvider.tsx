'use client';

import { motion, MotionConfig } from 'framer-motion';

export interface MotionProviderProps {
  children: React.ReactNode;
}

export function MotionProvider({ children }: MotionProviderProps) {
  return (
    <MotionConfig
      transition={
        type: 'spring',
        bounce: 0,
        duration: 0.6,
      }
      reducedMotion="user"
    >
      {children}
    </MotionConfig>
  );
}

export default MotionProvider;
