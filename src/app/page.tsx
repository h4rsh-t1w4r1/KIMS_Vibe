'use client';

import { motion, Suspense } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Reveal } from '@/components/Reveal';
import { StaggerContainer, StaggerItem } from '@/components/Stagger';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { Navigation } from '@/components/Navigation';
import { MobileContactBar } from '@/components/MobileContactBar';
import { Footer } from '@/components/Footer';
import { LocalBusinessSchema, MedicalOrganizationSchema } from '@/components/Schema';

// Image paths from assets.manifest.json
const images = {
  hero: '/assets/img/photo-1512678080530-7760d81faba6.avif',
  facilities1: '/assets/img/photo-1629909613654-28e377c37b09.avif',
  facilities2: '/assets/img/photo-1579684385127-1ef15d508118.avif',
  facilities3: '/assets/img/photo-1584515979956-d9f6e5d09982.avif',
  facilities4: '/assets/img/photo-1588776814546-1ffcf47267a5.avif',
  consultation: '/assets/img/photo-1519494026892-80bbd2d6fd0d.avif',
};

// Placeholder data - all marked as TODO_CLIENT for fictional build
export default function Home() {
  return (
    <Suspense fallback={null}>
      {/* Schema.org Structured Data */}
      <LocalBusinessSchema
        data={{
          name: 'KIMS Hospital - Kshitijya Institute of Medical Sciences',
          description: 'KIMS Hospital delivers expert medical care with modern facilities. Consult our specialists today.',
          address: {
            streetAddress: 'TODO_CLIENT',
            addressLocality: 'TODO_CLIENT',
            addressRegion: 'Maharashtra',
            postalCode: 'TODO_CLIENT',
            addressCountry: 'India',
          },
          telephone: 'TODO_CLIENT',
          url: 'https://verro-canvas.lovable.app/',
          sameAs: ['https://verro-canvas.lovable.app/'],
        }}
      />
      <MedicalOrganizationSchema
        data={{
          name: 'KIMS Hospital - Kshitijya Institute of Medical Sciences',
          description: 'Kshitijya Institute of Medical Sciences - A fictional demonstration of healthcare excellence',
          url: 'https://verro-canvas.lovable.app/',
          sameAs: ['https://verro-canvas.lovable.app/'],
        }}
      />

      {/* Navigation */}
      <Navigation />

      {/* Main Content */}
      <main>
        {/* ==================== HERO SECTION ==================== */}
        {/* Split-Screen Layout: Text left, Image right */}
        <section className="relative min-h-screen flex items-center bg-primary">
          {/* Background texture - Signature element */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/90 to-primary/80 pointer-events-none" />
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-xl md:py-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              {/* Text Content (Left) */}
              <Reveal delay={0.1} className="z-10">
                <div className="space-y-6">
                  {/* Trust Signal - Small, above headline */}
                  <motion.p
                    className="text-xs uppercase tracking-widest text-secondary/60"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    Kshitijya Institute of Medical Sciences
                  </motion.p>

                  {/* Outcome Headline (T4 - Part 1) */}
                  <h1 className="text-display font-black text-secondary leading-tight">
                    Compassionate Care,{' '}
                    <span className="block md:inline">Modern Medicine</span>
                  </h1>

                  {/* Subheadline (T4 - Part 2) */}
                  <p className="text-body-lg text-secondary/80 max-w-measure-lg">
                    KIMS Hospital delivers expert medical care with modern facilities. Consult our specialists today.
                  </p>

                  {/* CTA (T4 - Part 3) */}
                  <div className="flex flex-col sm:flex-row gap-4 pt-4">
                    <WhatsAppButton
                      phoneNumber="TODO_CLIENT"
                      message="Hi, I would like to inquire about services at KIMS Hospital"
                      className="btn-primary"
                    >
                      Inquire Now
                    </WhatsAppButton>
                    <Link
                      href="#services"
                      className="btn btn-secondary"
                    >
                      Our Services
                    </Link>
                  </div>

                  {/* Trust Signal (T4 - Part 5) */}
                  <p className="text-xs text-secondary/50 uppercase tracking-wide pt-4">
                    A Verro Studio Fictional Build - For demonstration purposes only
                  </p>
                </div>
              </Reveal>

              {/* Image Content (Right) - Hero Visual (T4 - Part 4) */}
              <Reveal delay={0.2} className="relative h-full min-h-[400px] lg:min-h-[600px]">
                <div className="absolute inset-0 bg-gradient-to-l from-primary via-primary/90 to-transparent z-10" />
                <Image
                  src={images.hero}
                  alt="KIMS Hospital - Modern healthcare facility exterior"
                  fill
                  className="object-cover rounded-verro"
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </Reveal>
            </div>
          </div>

          {/* Scroll indicator (subtle, not animated) */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-secondary/30">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </section>

        {/* ==================== INSTITUTIONAL OVERVIEW ==================== */}
        <section
          id="about"
          className="section-generous bg-primary"
        >
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <StaggerContainer>
              <StaggerItem delay={0}>
                <p className="text-xs uppercase tracking-widest text-accent mb-4">
                  About KIMS
                </p>
              </StaggerItem>
              <StaggerItem delay={0.1}>
                <h2 className="text-heading font-bold text-secondary mb-6">
                  A Legacy of Compassionate Healthcare
                </h2>
              </StaggerItem>
              <StaggerItem delay={0.2}>
                <div className="space-y-6 text-secondary/80">
                  <p>
                    KIMS Hospital - Kshitijya Institute of Medical Sciences stands as a leader of healthcare excellence, dedicated to providing compassionate and comprehensive medical care to our community.
                  </p>
                  <p>
                    Founded on the principle that every patient deserves access to quality healthcare, we have built a reputation for clinical excellence, advanced technology, and a patient-centered approach that prioritizes your well-being above all else.
                  </p>
                  <p>
                    Our team of dedicated healthcare professionals, led by Dr. Kaushik Kshitijya, is committed to delivering personalized care that addresses your unique health needs with empathy and expertise.
                  </p>
                </div>
              </StaggerItem>
            </StaggerContainer>
          </div>
        </section>

        {/* ==================== SERVICES SECTION ==================== */}
        <section
          id="services"
          className="section bg-primary/50"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Reveal>
              <div className="text-center mb-xl">
                <p className="text-xs uppercase tracking-widest text-accent mb-4">
                  Medical Services
                </p>
                <h2 className="text-heading font-bold text-secondary">
                  Comprehensive Healthcare Services
                </h2>
                <p className="text-body-lg text-secondary/80 max-w-2xl mx-auto mt-4">
                  From preventive care to advanced treatments, we offer a full spectrum of medical services.
                </p>
              </div>
            </Reveal>

            {/* Services Grid - Bento Grid Layout */}
            <StaggerContainer>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Service 1 */}
                <StaggerItem delay={0}>
                  <article className="card group cursor-pointer">
                    <div className="p-6">
                      <div className="w-12 h-12 bg-accent/10 rounded-verro flex items-center justify-center mb-4">
                        <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                      </div>
                      <h3 className="text-lg font-bold text-secondary mb-2">
                        General Medicine
                      </h3>
                      <p className="text-secondary/70 text-sm">
                        Comprehensive primary care and preventive health services for all age groups.
                      </p>
                      <Link
                        href="#contact"
                        className="inline-flex items-center mt-4 text-accent text-sm font-medium hover:text-accent/80 transition-colors"
                      >
                        Learn more
                        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </div>
                  </article>
                </StaggerItem>

                {/* Service 2 */}
                <StaggerItem delay={0.1}>
                  <article className="card group cursor-pointer">
                    <div className="p-6">
                      <div className="w-12 h-12 bg-accent/10 rounded-verro flex items-center justify-center mb-4">
                        <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                        </svg>
                      </div>
                      <h3 className="text-lg font-bold text-secondary mb-2">
                        Diagnostic Services
                      </h3>
                      <p className="text-secondary/70 text-sm">
                        Advanced laboratory and imaging services for accurate and timely diagnosis.
                      </p>
                      <Link
                        href="#contact"
                        className="inline-flex items-center mt-4 text-accent text-sm font-medium hover:text-accent/80 transition-colors"
                      >
                        Learn more
                        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </div>
                  </article>
                </StaggerItem>

                {/* Service 3 */}
                <StaggerItem delay={0.2}>
                  <article className="card group cursor-pointer">
                    <div className="p-6">
                      <div className="w-12 h-12 bg-accent/10 rounded-verro flex items-center justify-center mb-4">
                        <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                        </svg>
                      </div>
                      <h3 className="text-lg font-bold text-secondary mb-2">
                        Emergency Care
                      </h3>
                      <p className="text-secondary/70 text-sm">
                        24/7 emergency medical services with specialized care for critical conditions.
                      </p>
                      <Link
                        href="#contact"
                        className="inline-flex items-center mt-4 text-accent text-sm font-medium hover:text-accent/80 transition-colors"
                      >
                        Learn more
                        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </div>
                  </article>
                </StaggerItem>

                {/* Service 4 */}
                <StaggerItem delay={0.3}>
                  <article className="card group cursor-pointer md:col-span-2 lg:col-span-1">
                    <div className="p-6">
                      <div className="w-12 h-12 bg-accent/10 rounded-verro flex items-center justify-center mb-4">
                        <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                      </div>
                      <h3 className="text-lg font-bold text-secondary mb-2">
                        Surgical Services
                      </h3>
                      <p className="text-secondary/70 text-sm">
                        Modern operating facilities with expert surgical teams across multiple specialties.
                      </p>
                      <Link
                        href="#contact"
                        className="inline-flex items-center mt-4 text-accent text-sm font-medium hover:text-accent/80 transition-colors"
                      >
                        Learn more
                        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </div>
                  </article>
                </StaggerItem>

                {/* Service 5 */}
                <StaggerItem delay={0.4}>
                  <article className="card group cursor-pointer md:col-span-2 lg:col-span-1">
                    <div className="p-6">
                      <div className="w-12 h-12 bg-accent/10 rounded-verro flex items-center justify-center mb-4">
                        <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                        </svg>
                      </div>
                      <h3 className="text-lg font-bold text-secondary mb-2">
                        Pediatric Care
                      </h3>
                      <p className="text-secondary/70 text-sm">
                        Comprehensive healthcare for infants, children, and adolescents with specialized pediatric expertise.
                      </p>
                      <Link
                        href="#contact"
                        className="inline-flex items-center mt-4 text-accent text-sm font-medium hover:text-accent/80 transition-colors"
                      >
                        Learn more
                        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </div>
                  </article>
                </StaggerItem>

                {/* Service 6 */}
                <StaggerItem delay={0.5}>
                  <article className="card group cursor-pointer md:col-span-2 lg:col-span-1">
                    <div className="p-6">
                      <div className="w-12 h-12 bg-accent/10 rounded-verro flex items-center justify-center mb-4">
                        <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                        </svg>
                      </div>
                      <h3 className="text-lg font-bold text-secondary mb-2">
                        Women&apos;s Health
                      </h3>
                      <p className="text-secondary/70 text-sm">
                        Comprehensive obstetric and gynecological services for women at every stage of life.
                      </p>
                      <Link
                        href="#contact"
                        className="inline-flex items-center mt-4 text-accent text-sm font-medium hover:text-accent/80 transition-colors"
                      >
                        Learn more
                        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </div>
                  </article>
                </StaggerItem>
              </div>
            </StaggerContainer>
          </div>
        </section>

        {/* ==================== FACILITIES SHOWCASE ==================== */}
        <section
          id="facilities"
          className="section-generous bg-primary"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Reveal>
              <div className="text-center mb-xl">
                <p className="text-xs uppercase tracking-widest text-accent mb-4">
                  Our Infrastructure
                </p>
                <h2 className="text-heading font-bold text-secondary">
                  Modern Facilities
                </h2>
                <p className="text-body-lg text-secondary/80 max-w-2xl mx-auto mt-4">
                  Experience healthcare in a modern, comfortable environment designed for your well-being.
                </p>
              </div>
            </Reveal>

            {/* Facilities Grid - Asymmetric Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Facility 1 - Large */}
              <Reveal delay={0.1}>
                <article className="relative aspect-[4/3] overflow-hidden rounded-verro">
                  <Image
                    src={images.facilities1}
                    alt="KIMS Hospital main building - Modern healthcare architecture"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-xl font-bold text-primary mb-2">
                      Main Hospital Building
                    </h3>
                    <p className="text-primary/80 text-sm">
                      Our purpose-built facility designed for patient comfort and clinical excellence.
                    </p>
                  </div>
                </article>
              </Reveal>

              {/* Facility 2 - Small */}
              <Reveal delay={0.2}>
                <article className="relative aspect-[4/3] overflow-hidden rounded-verro">
                  <Image
                    src={images.facilities2}
                    alt="KIMS Hospital waiting area - Comfortable reception space"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-xl font-bold text-primary mb-2">
                      Reception & Waiting Area
                    </h3>
                    <p className="text-primary/80 text-sm">
                      Welcoming spaces designed to put patients and families at ease.
                    </p>
                  </div>
                </article>
              </Reveal>

              {/* Facility 3 - Small */}
              <Reveal delay={0.3}>
                <article className="relative aspect-[4/3] overflow-hidden rounded-verro">
                  <Image
                    src={images.facilities3}
                    alt="KIMS Hospital medical facility - Advanced healthcare equipment"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-xl font-bold text-primary mb-2">
                      Medical Facility
                    </h3>
                    <p className="text-primary/80 text-sm">
                      Equipped with the latest medical technology for comprehensive care.
                    </p>
                  </div>
                </article>
              </Reveal>

              {/* Facility 4 - Large */}
              <Reveal delay={0.4}>
                <article className="relative aspect-[4/3] overflow-hidden rounded-verro md:col-span-2">
                  <Image
                    src={images.facilities4}
                    alt="KIMS Hospital corridor - Clean and welcoming environment"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 100vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-xl font-bold text-primary mb-2">
                      Patient Care Environment
                    </h3>
                    <p className="text-primary/80 text-sm">
                      Thoughtfully designed spaces that prioritize patient comfort and healing.
                    </p>
                  </div>
                </article>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ==================== CONSULTATION JOURNEY ==================== */}
        <section
          id="consultation"
          className="section bg-primary/50"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Reveal>
              <div className="text-center mb-xl">
                <p className="text-xs uppercase tracking-widest text-accent mb-4">
                  Your Visit
                </p>
                <h2 className="text-heading font-bold text-secondary">
                  What to Expect
                </h2>
                <p className="text-body-lg text-secondary/80 max-w-2xl mx-auto mt-4">
                  We make your healthcare journey simple and stress-free.
                </p>
              </div>
            </Reveal>

            {/* Process Steps - Storytelling Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Step 1 */}
              <Reveal delay={0.1}>
                <article className="card text-center">
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-accent">1</span>
                  </div>
                  <h3 className="text-lg font-bold text-secondary mb-2">
                    Schedule Your Visit
                  </h3>
                  <p className="text-secondary/70 text-sm">
                    Contact us via WhatsApp, phone, or our online form to book your appointment.
                  </p>
                </article>
              </Reveal>

              {/* Step 2 */}
              <Reveal delay={0.2}>
                <article className="card text-center">
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-accent">2</span>
                  </div>
                  <h3 className="text-lg font-bold text-secondary mb-2">
                    Pre-Visit Preparation
                  </h3>
                  <p className="text-secondary/70 text-sm">
                    Receive clear instructions on any preparations needed before your appointment.
                  </p>
                </article>
              </Reveal>

              {/* Step 3 */}
              <Reveal delay={0.3}>
                <article className="card text-center">
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-accent">3</span>
                  </div>
                  <h3 className="text-lg font-bold text-secondary mb-2">
                    Expert Consultation
                  </h3>
                  <p className="text-secondary/70 text-sm">
                    Meet with our specialists in comfortable consultation rooms for thorough evaluation.
                  </p>
                </article>
              </Reveal>

              {/* Step 4 */}
              <Reveal delay={0.4}>
                <article className="card text-center">
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-accent">4</span>
                  </div>
                  <h3 className="text-lg font-bold text-secondary mb-2">
                    Follow-Up Care
                  </h3>
                  <p className="text-secondary/70 text-sm">
                    We provide comprehensive follow-up support and guidance for your ongoing health.
                  </p>
                </article>
              </Reveal>
            </div>

            {/* Consultation Image */}
            <Reveal delay={0.5} className="mt-xl">
              <div className="relative aspect-[16/9] overflow-hidden rounded-verro">
                <Image
                  src={images.consultation}
                  alt="Medical consultation at KIMS Hospital - Doctor meeting with patient"
                  fill
                  className="object-cover"
                  sizes="100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
              </div>
            </Reveal>
          </div>
        </section>

        {/* ==================== CONTACT & LOCATION ==================== */}
        <section
          id="contact"
          className="section-generous bg-primary"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-xl">
              {/* Contact Form */}
              <Reveal>
                <div className="space-y-6">
                  <p className="text-xs uppercase tracking-widest text-accent mb-2">
                    Get In Touch
                  </p>
                  <h2 className="text-heading font-bold text-secondary">
                    We&apos;re Here to Help
                  </h2>
                  <p className="text-secondary/80">
                    Have questions about our services or need to schedule a visit? Our team is ready to assist you.
                  </p>

                  <div className="space-y-4 pt-4">
                    <WhatsAppButton
                      phoneNumber="TODO_CLIENT"
                      message="Hi, I would like to inquire about services at KIMS Hospital"
                      className="w-full"
                    >
                      <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 2.096 4.487 0 1.222-.792 2.102-1.427 2.479-.669.396-1.562.25-2.228.328-.669.075-1.387.328-1.532.925-.149.579-.124 1.04-.124 1.099 0 .059.01.173.01.347 0 .198.099.371.372.371.371 0 .52-.273 1.04-.273 1.099 0 .059.05.089.075.089.173 0 .347-.149.547-.322.796.025.025.075.149.124.248.05.1.05.174.075.223.025.05-.025.124-.05.174-.1.05-.224-.124-.371-.223-.547-.371-1.338-.772-2.088-2.146-.733-.772-1.147-1.885-1.147-3.256 0-1.688.974-2.959 1.372-3.581.446-.668 1.197-1.338 1.197-1.338.974-.669 2.123-.94 2.752-.906.669.037 1.387.351 1.532.906.149.555.124 1.213.124 1.338 0 .124.05.224.05.273 0 .05-.025.089-.025.149-.05.1-.05.224-.124.424-.173.2-.371.471-.67.816-.298.347-.867 1.147-1.147 2.188 0 .882.502 1.584 1.347 2.001.816.396 1.813.201 2.228.273.415.074.906.273 1.164.547.297.297.322.371.273.52.224.796.224 1.121.224 1.498.174.816.371 1.446.772 1.885 1.584 2.088 2.207 1.338.322.669.644.94 1.213.94 2.479 0 1.04-.248 1.866-.372 2.228-.124.371-.074.57-.074.57 0 .298.025.446.074.52.05.05.075.05.125.1.125.2.174.322.224.471.322.669.446.94 1.04.297.57.547.792.94 1.094.396 2.059.733 2.752.906 3.256.94 4.487 0 1.463-.94 2.875-1.213 3.074-.248.198-1.016 1.04-1.04 2.479 0 1.462-.767 2.875-1.04 2.875-.273.075-.471.149-.669.15-.298.01-.759.089-2.03.967-.273.874-.471 1.758-.669 2.612-.198.854-.322 1.735-.322 2.612 0 .882.125 1.584.446 2.102.322.519.816.878 1.338 1.028 1.498.149.149.322.273.446.273.57.248.721.297.94 1.164 1.04.322 1.584.747 1.885 1.338 2.059.644.347.916.446 1.387.598 2.088.792 2.612.967 2.961.916 3.188.669 3.256.322.124.446.173.57.173.693.149.792.124.867.074.916.025.94 1.164.05.967.025.94 1.04z" />
                      </svg>
                      Connect via WhatsApp
                    </WhatsAppButton>

                    <a
                      href="tel:TODO_CLIENT"
                      className="btn btn-secondary w-full"
                    >
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      Call Us Directly
                    </a>

                    <Link
                      href="#"
                      className="btn btn-secondary w-full border-dashed"
                    >
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                      </svg>
                      View Location
                    </Link>
                  </div>
                </div>
              </Reveal>

              {/* Location Info */}
              <Reveal delay={0.2}>
                <div className="space-y-6">
                  <p className="text-xs uppercase tracking-widest text-accent mb-2">
                    Visit Us
                  </p>
                  <h2 className="text-heading font-bold text-secondary">
                    Our Location
                  </h2>
                  <p className="text-secondary/80">
                    Conveniently located to serve our community with easy access and ample parking.
                  </p>

                  <div className="space-y-4 pt-4">
                    {/* Address */}
                    <div className="flex items-start space-x-3">
                      <div className="w-10 h-10 bg-accent/10 rounded-verro flex items-center justify-center flex-shrink-0">
                        <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-secondary">Address</h4>
                        <p className="text-secondary/70">
                          TODO_CLIENT Street<br />
                          TODO_CLIENT City<br />
                          Maharashtra, India - TODO_CLIENT
                        </p>
                      </div>
                    </div>

                    {/* Hours */}
                    <div className="flex items-start space-x-3">
                      <div className="w-10 h-10 bg-accent/10 rounded-verro flex items-center justify-center flex-shrink-0">
                        <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-secondary">Operating Hours</h4>
                        <p className="text-secondary/70">
                          Monday - Friday: TODO_CLIENT<br />
                          Saturday: TODO_CLIENT<br />
                          Sunday: TODO_CLIENT
                        </p>
                      </div>
                    </div>

                    {/* Phone */}
                    <div className="flex items-start space-x-3">
                      <div className="w-10 h-10 bg-accent/10 rounded-verro flex items-center justify-center flex-shrink-0">
                        <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-secondary">Phone</h4>
                        <p className="text-secondary/70">
                          +91 TODO_CLIENT
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ==================== CLOSING CTA ==================== */}
        <section className="section-generous bg-gradient-to-br from-accent/10 via-primary to-accent/5">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Reveal>
              <div className="space-y-6">
                <p className="text-xs uppercase tracking-widest text-accent mb-2">
                  Ready to Begin?
                </p>
                <h2 className="text-heading font-bold text-secondary">
                  Take the First Step Toward Better Health
                </h2>
                <p className="text-body-lg text-secondary/80 max-w-2xl mx-auto">
                  Our team of dedicated healthcare professionals is here to provide you with the compassionate, expert care you deserve. Contact us today to schedule your consultation.
                </p>
                <div className="pt-4">
                  <WhatsAppButton
                    phoneNumber="TODO_CLIENT"
                    message="Hi, I would like to book a consultation at KIMS Hospital"
                    className="btn-primary text-lg px-8 py-4"
                  >
                    Schedule Your Consultation
                  </WhatsAppButton>
                </div>
                <p className="text-xs text-secondary/50 uppercase tracking-wide">
                  A Verro Studio Fictional Build - For demonstration purposes only
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ==================== FOOTER ==================== */}
        <Footer />
      </main>

      {/* Mobile Contact Bar */}
      <MobileContactBar phoneNumber="TODO_CLIENT" />
    </Suspense>
  );
}
