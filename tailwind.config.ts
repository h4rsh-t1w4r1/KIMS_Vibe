import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Verrolify 60-30-10 Colour System for KIMS
        primary: {
          50: '#F6F1E9', // Warm off-white canvas (60%)
          100: '#F6F1E9',
          DEFAULT: '#F6F1E9',
        },
        secondary: {
          50: '#1F1F1F', // Charcoal (30%)
          100: '#1F1F1F',
          DEFAULT: '#1F1F1F',
        },
        accent: {
          50: '#C4A484', // Aged brass/gold (10%)
          100: '#C4A484',
          DEFAULT: '#C4A484',
        },
      },
      fontFamily: {
        display: ['var(--font-fraunces)', 'serif'],
        body: ['var(--font-source-sans-3)', 'sans-serif'],
      },
      spacing: {
        // Verrolify spacing scale: 4, 8, 16, 24, 32, 48, 64, 96, 128, 192
        '4xs': '4px',
        '3xs': '8px',
        '2xs': '16px',
        xs: '24px',
        sm: '32px',
        md: '48px',
        lg: '64px',
        xl: '96px',
        '2xl': '128px',
        '3xl': '192px',
      },
      fontSize: {
        'display': ['clamp(2.5rem, 8vw, 4.5rem)', { lineHeight: '1.2', letterSpacing: '0.02em' }],
        'heading': ['clamp(1.875rem, 5vw, 2.25rem)', { lineHeight: '1.3', letterSpacing: '0.02em' }],
        'body': ['1rem', { lineHeight: '1.75' }],
        'body-lg': ['1.125rem', { lineHeight: '1.75' }],
      },
      maxWidth: {
        'measure': '65ch',
        'measure-lg': '70ch',
      },
      borderRadius: {
        'verro': '0px', // Verro prefers sharp edges for healthcare
      },
      boxShadow: {
        'verro': '0 2px 8px rgba(0, 0, 0, 0.08)',
      },
    },
  },
  plugins: [],
};

export default config;
