'use client';

import { motion, HTMLMotionProps } from 'framer-motion';

export interface RevealProps extends HTMLMotionProps<'div'> {
  delay?: number;
  duration?: number;
  threshold?: number;
}

export function Reveal({
  children,
  delay = 0,
  duration = 0.6,
  threshold = 0.1,
  ...props
}: RevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px', amount: threshold }}
      transition={{ delay, duration, ease: 'easeOut' }}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export default Reveal;
