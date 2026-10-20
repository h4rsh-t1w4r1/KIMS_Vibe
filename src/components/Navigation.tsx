'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export interface NavItem {
  label: string;
  href: string;
  ariaLabel?: string;
}

export interface NavigationProps {
  items: NavItem[];
  logo?: React.ReactNode;
  logoHref?: string;
  sticky?: boolean;
}

const navItems: NavItem[] = [
  { label: 'Home', href: '#', ariaLabel: 'KIMS Hospital Home' },
  { label: 'About', href: '#about', ariaLabel: 'About KIMS Hospital' },
  { label: 'Services', href: '#services', ariaLabel: 'Our Services' },
  { label: 'Facilities', href: '#facilities', ariaLabel: 'Our Facilities' },
  { label: 'Contact', href: '#contact', ariaLabel: 'Contact Us' },
];

export function Navigation({
  items = navItems,
  logo,
  logoHref = '#',
  sticky = true,
}: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        sticky ? 'sticky' : ''
      } ${isScrolled ? 'bg-primary/95 backdrop-blur-sm shadow-verro' : 'bg-primary'}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link
            href={logoHref}
            className="flex-shrink-0"
            aria-label="KIMS Hospital Home"
          >
            {logo || (
              <motion.div
                className="flex items-center space-x-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="text-xl font-bold tracking-tight text-secondary">
                  KIMS
                </span>
                <span className="text-xs text-secondary/60 uppercase tracking-wider hidden sm:block">
                  Hospital
                </span>
              </motion.div>
            )}
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {items.map((item, index) => (
              <motion.div key={item.href} custom={index * 0.1}>
                <Link
                  href={item.href}
                  className="text-sm font-medium text-secondary/80 hover:text-accent transition-colors duration-200 uppercase tracking-wide"
                  aria-label={item.ariaLabel || item.label}
                >
                  {item.label}
                </Link>
              </motion.div>
            ))}
          </div>

          {/* CTA Button (Desktop) */}
          <div className="hidden md:block">
            <motion.a
              href="#contact"
              className="btn btn-primary text-xs"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              aria-label="Inquire Now"
            >
              Inquire Now
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden p-2 rounded-md text-secondary hover:bg-secondary/10 transition-colors duration-200"
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden"
          >
            <div className="px-4 pt-4 pb-4 space-y-2 border-t border-secondary/10">
              {items.map((item, index) => (
                <motion.div key={item.href} custom={index * 0.1}>
                  <Link
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block px-4 py-2 text-sm font-medium text-secondary/80 hover:text-accent transition-colors duration-200 uppercase tracking-wide"
                    aria-label={item.ariaLabel || item.label}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div custom={items.length * 0.1}>
                <a
                  href="#contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-4 py-2 text-sm font-medium text-accent uppercase tracking-wide"
                  aria-label="Inquire Now"
                >
                  Inquire Now
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}

export default Navigation;
