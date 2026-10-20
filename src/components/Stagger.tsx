'use client';

import { motion, HTMLMotionProps, Variants } from 'framer-motion';
import { ReactNode } from 'react';

export interface StaggerProps extends HTMLMotionProps<'div'> {
  children: ReactNode[] | ReactNode;
  staggerDelay?: number;
  duration?: number;
}

const container: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};

export function StaggerContainer({
  children,
  staggerDelay = 0.1,
  duration = 0.5,
  ...props
}: StaggerProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      variants={container}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  delay = 0,
  ...props
}: { children: ReactNode; delay?: number } & HTMLMotionProps<'div'>) {
  return (
    <motion.div
      variants={item}
      custom={delay}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export default StaggerContainer;
