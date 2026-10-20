'use client';

import { useEffect } from 'react';

export interface LocalBusinessData {
  name: string;
  description?: string;
  address: {
    streetAddress: string;
    addressLocality: string;
    addressRegion?: string;
    postalCode?: string;
    addressCountry: string;
  };
  telephone?: string;
  url?: string;
  openingHours?: {
    dayOfWeek: string;
    opens: string;
    closes: string;
  }[];
  geo?: {
    latitude: string;
    longitude: string;
  };
  sameAs?: string[];
}

export interface OrganizationData {
  name: string;
  url?: string;
  logo?: string;
  description?: string;
  sameAs?: string[];
}

export function LocalBusinessSchema(data: LocalBusinessData) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Hospital' as const,
    name: data.name,
    description: data.description || 'KIMS Hospital - Kshitijya Institute of Medical Sciences',
    address: {
      '@type': 'PostalAddress' as const,
      streetAddress: data.address.streetAddress,
      addressLocality: data.address.addressLocality,
      addressRegion: data.address.addressRegion || 'Maharashtra',
      postalCode: data.address.postalCode || 'TODO_CLIENT',
      addressCountry: data.address.addressCountry,
    },
    telephone: data.telephone || 'TODO_CLIENT',
    url: data.url || 'https://verro-canvas.lovable.app/',
    ...(data.openingHours && {
      openingHoursSpecification: data.openingHours.map(hours => ({
        '@type': 'OpeningHoursSpecification' as const,
        dayOfWeek: hours.dayOfWeek,
        opens: hours.opens,
        closes: hours.closes,
      })),
    }),
    ...(data.geo && {
      geo: {
        '@type': 'GeoCoordinates' as const,
        latitude: data.geo.latitude,
        longitude: data.geo.longitude,
      },
    }),
    ...(data.sameAs && {
      sameAs: data.sameAs,
    }),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema, null, 2) }}
    />
  );
}

export function OrganizationSchema(data: OrganizationData) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization' as const,
    name: data.name,
    url: data.url || 'https://verro-canvas.lovable.app/',
    ...(data.logo && {
      logo: {
        '@type': 'ImageObject' as const,
        url: data.logo,
      },
    }),
    description: data.description || 'KIMS Hospital - Kshitijya Institute of Medical Sciences',
    ...(data.sameAs && {
      sameAs: data.sameAs,
    }),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema, null, 2) }}
    />
  );
}

export function MedicalOrganizationSchema(data: OrganizationData) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'MedicalOrganization' as const,
    name: data.name,
    url: data.url || 'https://verro-canvas.lovable.app/',
    ...(data.logo && {
      logo: {
        '@type': 'ImageObject' as const,
        url: data.logo,
      },
    }),
    description: data.description || 'KIMS Hospital - Kshitijya Institute of Medical Sciences',
    ...(data.sameAs && {
      sameAs: data.sameAs,
    }),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema, null, 2) }}
    />
  );
}

export default LocalBusinessSchema;
