# KIMS Hospital - Kshitijya Institute of Medical Sciences

A Mode 1 Trust Landing website built with Verrolify for Verro Studio's healthcare portfolio demonstration.

## Project Overview

This is a **fictional** healthcare website built to demonstrate Verro Studio's ability to design and develop effective, polished healthcare websites following the Verrolify methodology.

**Important:** This is a demonstration build. All medical information, doctor credentials, contact details, and patient information are fictional placeholders marked with `TODO_CLIENT`.

## Quick Start

### Prerequisites

- Node.js 18.17 or later
- npm, yarn, or pnpm
- Git (optional)

### Installation

1. Clone or download the project:
   ```bash
   git clone <repository-url>
   cd KIMS
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. Copy the image assets:
   ```bash
   # Images are referenced from /assets/img/
   # Make sure all images from assets.manifest.json are present
   ```

### Development

Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Build for Production

```bash
npm run build
# or
yarn build
# or
pnpm build
```

This will create a static export in the `out/` directory.

### Export Static Site

```bash
npm run export
```

The static site will be available in the `out/` directory, ready for deployment to any static hosting service.

## Project Structure

```
KIMS/
├── assets/
│   ├── img/                    # Hospital images (9 AVIF + 1 JPG)
│   └── assets.manifest.json    # Asset inventory
├── src/
│   ├── app/
│   │   ├── globals.css         # Tailwind + custom styles
│   │   ├── layout.tsx          # Root layout with fonts
│   │   └── page.tsx            # Main page component
│   └── components/
│       ├── Footer.tsx         # Footer with Verro disclaimer
│       ├── MobileContactBar.tsx
│       ├── MotionProvider.tsx
│       ├── Navigation.tsx     # Main navigation
│       ├── Reveal.tsx         # Motion reveal component
│       ├── Schema.tsx         # Structured data components
│       └── Stagger.tsx        # Stagger animation component
│       └── WhatsAppButton.tsx # WhatsApp CTA component
├── public/                    # Static assets
├── package.json
├── tailwind.config.ts
├── tsconfig.json
├── next.config.mjs
├── postcss.config.mjs
├── VERRO_BRIEF.md            # Complete project brief
├── REFERENCE_LOG.md          # Reference documentation
└── README.md                 # This file
```

## Verrolify Configuration

### Mode
- **Mode 1**: Trust Landing for service businesses
- **Vertical**: Healthcare (Hospital)
- **Motion**: Whisper-level (reveals and hovers only)

### Design Decisions (from VERRO_BRIEF.md)

| Decision | Value |
|---|---|
| **D1 Category** | Light mode, clarity over drama |
| **D2 Pain/Outcome** | "Finding a credible hospital" / "Trusted healthcare provider" |
| **D3 CTA** | "Inquire Now" via WhatsApp |
| **D4 Colour (60-30-10)** | Primary: `#F6F1E9` (60%), Secondary: `#1F1F1F` (30%), Accent: `#C4A484` (10%) |
| **D5 Typography** | Display: Fraunces (800-900), Body: Source Sans 3 (400-700) |
| **D6 Hero** | Split-Screen layout with all five parts |
| **D7 Conversion Furniture** | Authority block, reciprocity artifact, peak-end confirmation, contrast ordering, smart defaults |
| **D8 Signature** | Hospital silhouette texture in hero |

### Layout Structures
- Hero: Split-Screen
- Services: Bento Grid variant
- Facilities: Asymmetric grid
- Consultation: Storytelling sequence

## Assets

### Images (9 total)
All images are from Unsplash and licensed for commercial use without attribution.

| Filename | Dimensions | Section | Role |
|---|---|---|---|
| photo-1512678080530-7760d81faba6.avif | 1000x664 | Hero | Primary hero background |
| photo-1622253692010-333f2da6031d.avif | 900x1125 | Hero | Alternative hero option |
| photo-1629909613654-28e377c37b09.avif | 1000x668 | Facilities | Hospital exterior |
| photo-1579684385127-1ef15d508118.avif | 600x600 | Facilities | Waiting area |
| photo-1519494026892-80bbd2d6fd0d.avif | 700x476 | Consultation | Consultation room |
| photo-1584515979956-d9f6e5d09982.avif | 600x480 | Facilities | Medical facility |
| photo-1588776814546-1ffcf47267a5.avif | 600x400 | Facilities | Corridor |
| photo-1516549655169-df83a0774514.avif | 600x400 | Facilities | Patient room |
| photo-1686591613654-28e377c37b09.jpg | 678x452 | Facilities | Interior/equipment |

See `assets.manifest.json` for complete asset inventory.

## Features

### Implemented
- ✅ Next.js 16 with App Router
- ✅ TypeScript
- ✅ Tailwind CSS with custom design tokens
- ✅ Framer Motion for whisper-level animations
- ✅ Responsive design (mobile-first)
- ✅ Split-Screen hero layout
- ✅ Bento Grid services section
- ✅ Asymmetric facilities showcase
- ✅ Storytelling consultation journey
- ✅ WhatsApp deep link integration
- ✅ Structured data (Schema.org)
- ✅ Verro Studio footer with required disclaimer
- ✅ Mobile contact bar (Call/WhatsApp)
- ✅ Accessibility features (focus states, semantic HTML)

### Placeholders (TODO_CLIENT)
All contact information, doctor credentials, and operational details are marked as `TODO_CLIENT`:
- Phone numbers
- WhatsApp numbers
- Address
- Operating hours
- Doctor qualifications
- Registration numbers
- Specific service details

## Validation

### Verrolify Gates
The project has been designed to pass all Verrolify QA gates:

- **G0 Brief**: VERRO_BRIEF.md complete
- **G1 Truth**: All facts in truth ledger, placeholders marked
- **G2 Copy**: No banned words, no em dashes, no lorem
- **G3 Assets**: All assets documented in assets.manifest.json
- **G4 Visual**: Responsive at 375px and 1280px
- **G5 Motion**: Whisper-level only, reduced motion respected
- **G6 Accessibility**: Semantic HTML, contrast checked, focus states
- **G7 Performance**: Static export, optimized images (AVIF)
- **G8 SEO**: Metadata, structured data, semantic markup
- **G9 Function**: Links and CTAs functional (WhatsApp, tel:)
- **G11 References**: REFERENCE_LOG.md complete
- **G12 Fresh Eyes**: Designed for first-time visitor clarity

### Performance Targets
- First-view image preloaded
- <200 KB gz JavaScript for homepage
- LCP <2.5s on mid-range Android
- No layout shift
- Fonts limited to used weights

## Deployment

### Recommended Hosting
- Vercel (optimal for Next.js)
- Netlify
- GitHub Pages
- Any static hosting service

### Deployment Steps
1. Build the static export:
   ```bash
   npm run export
   ```

2. Deploy the `out/` directory to your hosting service.

3. Update the canonical URLs in `src/app/layout.tsx` if deploying to a custom domain.

4. Test on mobile devices (375px width) and desktop (1280px width).

## Customization

### For Real Implementation
To adapt this for a real hospital:

1. Replace all `TODO_CLIENT` placeholders with actual information
2. Replace Unsplash images with real facility photos
3. Update contact information in:
   - `src/app/page.tsx` (CTA buttons)
   - `src/components/Footer.tsx`
   - `src/components/MobileContactBar.tsx`
   - `src/components/Navigation.tsx`
4. Update structured data in `src/app/layout.tsx`
5. Update metadata and social sharing info
6. Add real doctor credentials and qualifications
7. Add real patient testimonials (with permission)
8. Add real service descriptions and pricing

### Design Customization
- Colours: Update in `tailwind.config.ts`
- Typography: Update fonts in `src/app/layout.tsx`
- Layout: Modify component structures in `src/app/page.tsx`
- Motion: Adjust in `src/components/Reveal.tsx` and `src/components/Stagger.tsx`

## Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge
- Mobile browsers (iOS Safari, Chrome for Android)

## Licences

- **Code**: Proprietary - Verro Studio
- **Fonts**: Google Fonts (OFL) - Fraunces, Source Sans 3
- **Images**: Unsplash Licence - Free for commercial use, no attribution required
- **Framework**: Next.js (MIT)
- **CSS**: Tailwind CSS (MIT)
- **Motion**: Framer Motion (MIT)

## Verro Studio

This build follows the Verrolify methodology:
- **Skill**: verrolify.skill
- **Mode**: Mode 1 - Trust Landing
- **Vertical**: Healthcare
- **Market**: India (considerations applied)

For more information about Verrolify:
- [Verro Canvas](https://verro-canvas.lovable.app/)
- See `VERRO_BRIEF.md` for complete project documentation
- See `REFERENCE_LOG.md` for reference documentation

## Legal Notice

**This is a fictional build by [Verro Studio](https://verro-canvas.lovable.app/).**

Any resemblance to living or dead is purely coincidental. This website is for demonstration purposes only and does not represent a real medical institution or provide actual medical services.

---

*Built with Verrolify by Verro Studio*
