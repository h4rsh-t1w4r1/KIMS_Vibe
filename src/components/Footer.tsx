'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export interface FooterProps {
  className?: string;
}

export function Footer({ className = '' }: FooterProps) {
  return (
    <motion.footer
      className={`bg-secondary text-primary ${className}`}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Column 1: Brand */}
          <div className="space-y-4">
            <motion.div
              className="flex items-center space-x-2"
              whileHover={{ scale: 1.02 }}
            >
              <span className="text-xl font-bold tracking-tight text-primary">
                KIMS
              </span>
            </motion.div>
            <p className="text-sm text-primary/60 max-w-measure">
              Kshitijya Institute of Medical Sciences
            </p>
          </div>

          {/* Column 2: Navigation */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-primary/80">
              Quick Links
            </h3>
            <nav className="flex flex-col space-y-2">
              {[
                { label: 'Home', href: '#' },
                { label: 'About', href: '#about' },
                { label: 'Services', href: '#services' },
                { label: 'Facilities', href: '#facilities' },
                { label: 'Contact', href: '#contact' },
              ].map((item, index) => (
                <motion.div key={item.href} custom={index * 0.1}>
                  <Link
                    href={item.href}
                    className="text-sm text-primary/60 hover:text-accent transition-colors duration-200 uppercase tracking-wide"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </nav>
          </div>

          {/* Column 3: Verro Studio Disclaimer */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-primary/80">
              About This Site
            </h3>
            <p className="text-sm text-primary/80">
              This is a fictional build by{' '}
              <Link
                href="https://verro-canvas.lovable.app/"
                className="underline hover:text-accent transition-colors duration-200"
                target="_blank"
                rel="noopener noreferrer"
              >
                Verro Studio
              </Link>
              .
            </p>
            <p className="text-sm text-primary/60 italic">
              Any resemblance to living or dead is purely coincidental...
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-primary/20">
          <p className="text-xs text-primary/40 text-center md:text-left">
            &copy; {new Date().getFullYear()} KIMS Hospital - Fictional Demonstration
          </p>
        </div>
      </div>
    </motion.footer>
  );
}

export default Footer;
