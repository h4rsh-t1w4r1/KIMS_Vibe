import type { Metadata } from 'next';
import { Fraunces, Source_Sans_3 } from 'next/font/google';
import './globals.css';

// Load fonts with only the weights we need
const fraunces = Fraunces({
  subsets: ['latin'],
  weight: ['800', '900'],
  variable: '--font-fraunces',
  display: 'swap',
});

const sourceSans3 = Source_Sans_3({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-source-sans-3',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'KIMS Hospital - Kshitijya Institute of Medical Sciences | Compassionate Care, Modern Medicine',
  description: 'KIMS Hospital delivers expert medical care with modern facilities. Consult our specialists today for comprehensive healthcare services.',
  keywords: ['hospital', 'medical care', 'healthcare', 'KIMS', 'Kshitijya Institute', 'doctor', 'specialist', 'medical services'],
  authors: [{ name: 'Verro Studio' }],
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://verro-canvas.lovable.app/',
    siteName: 'KIMS Hospital',
    title: 'KIMS Hospital - Compassionate Care, Modern Medicine',
    description: 'KIMS Hospital delivers expert medical care with modern facilities.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'KIMS Hospital - Compassionate Care, Modern Medicine',
    description: 'KIMS Hospital delivers expert medical care with modern facilities.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-IN" suppressHydrationWarning>
      <body
        className={`${fraunces.variable} ${sourceSans3.variable} font-body`}
      >
        {children}
      </body>
    </html>
  );
}
