# REFERENCE LOG: KIMS Hospital Build

**Project:** KIMS Hospital - Kshitijya Institute of Medical Sciences  
**Mode:** Mode 1 - Trust Landing  
**Date:** 2026-10-20  

---

## Reference Triage Protocol

Followed Verrolify reference triage from `references/design/reference-sites.md`:
- At most five references, one per slot (hero, trust section, services, booking, motion)
- Extract principles, not pixels
- Document adaptation decisions
- Distance check: no copied copy, imagery, logos, or brand names

---

## References Consulted

### 1. Primary Skill Framework
**URL:** `/tmp/verrolify_extracted/verrolify/SKILL.md` (Local extracted copy)  
**Source:** Verrolify skill package  
**Licence:** Internal Verro Studio skill  

**Principles Extracted:**
- Diagnose before designing (bottleneck identification)
- Truth before polish (truth ledger, TODO_CLIENT)
- Select techniques, don't stack them (matrix-based selection)
- Reference, never clone
- Real assets or honest gap
- Evidence before "done"

**Adaptation:**
- Applied Mode 1 workflow for service businesses
- Used healthcare vertical rules for hospital context
- Followed India market considerations (WhatsApp, mobile-first)
- Applied all six core rules

**Distance:** Internal framework, not a visual reference

---

### 2. Mode 1 Service Landing
**URL:** `/tmp/verrolify_extracted/verrolify/references/modes/mode-1-service-landing.md`  
**Source:** Verrolify skill package  
**Licence:** Internal Verro Studio skill  

**Principles Extracted:**
- Success = outcome metric (calls, WhatsApp, bookings)
- 5-second rule: answer what, for whom, next action
- Trust ladder information architecture
- Hero: outcome headline, specific subheadline, one CTA, real visual, one trust signal
- Light mode by default
- Whisper motion level
- Mobile-first design at 375px

**Adaptation:**
- Used trust ladder structure: Hero -> Proof -> Services -> How it works -> Reviews (omitted for fictional) -> Before you come -> Visit us -> Closing CTA
- Applied whisper motion (Reveal, Stagger)
- Mobile-first responsive design
- Single CTA focus (WhatsApp)

**What Changed:**
- Omitted real reviews section (fictional build limitation)
- Combined "Before you come" and "How it works" into Consultation Journey
- Used "Institutional Overview" instead of "Proof strip" (no real doctor credentials)

---

### 3. Healthcare Vertical Rules
**URL:** `/tmp/verrolify_extracted/verrolify/references/market/healthcare-vertical.md`  
**Source:** Verrolify skill package  
**Licence:** Internal Verro Studio skill  

**Principles Extracted:**
- Healthcare is trust-first, not fantasy (competence signals over spectacle)
- Hero motion: sample from clinic's actual world, not generic stock
- Tier 1 default (one 6-second shot) - for Mode 1: composed still with whisper motion
- Dark mode not used for healthcare
- What must be true below the fold: services, doctor info, CTA, location, reviews
- Copy restrictions: no guaranteed outcomes, no fabricated numbers, no before/after claims
- Real photos beat generated fantasy

**Adaptation:**
- Light mode only (explicitly ruled out dark mode)
- Used real hospital photos from Unsplash (closest to "actual world")
- No scrub film or cinematic hero (Mode 1 = still composition)
- Services in plain patient language
- No medical outcome claims in copy
- Doctor info marked as TODO_CLIENT (fictional)

**What Changed:**
- Used stock photos as stand-in for real facility photos
- Omitted doctor credentials (fictional build)

---

### 4. Design Techniques Matrix
**URL:** `/tmp/verrolify_extracted/verrolify/references/design/design-techniques.md`  
**Source:** Verrolify skill package  
**Licence:** Internal Verro Studio skill  

**Principles Extracted:**
- T1 (Mood): Healthcare = light mode, clarity over drama
- T2 (Typography): Always on, display face with character, quiet body
- T3 (Whitespace): Generous for hero, balanced for services, compact for dense info
- T4 (Hero): Five-part structure, outcome headline, one CTA
- T5 (Colour): 60-30-10 system, exact hex, no additions
- Layout structures: Storytelling, Split-Screen, Bento Grid
- Intensity dials: Generous (120px), Balanced (80px), Compact (48px)

**Adaptation:**
- T1: Light mode with hospital material world references
- T2: Fraunces (display) + Source Sans 3 (body)
- T3: Generous for hero, balanced for sections
- T4: Split-Screen hero with all five parts
- T5: 60-30-10 with warm off-white/charcoal/aged brass
- Layout: Split-Screen (hero), Storytelling (consultation), Bento Grid (services)

**What Changed:**
- Selected Fraunces over other serifs for warmth + authority in healthcare
- Chose aged brass (#C4A484) over brighter gold for restrained Verro identity

---

### 5. Anti-Slop Design
**URL:** `/tmp/verrolify_extracted/verrolify/references/design/anti-slop-design.md`  
**Source:** Verrolify skill package  
**Licence:** Internal Verro Studio skill  

**Principles Extracted:**
- Avoid AI-default looks (cream+terracotta, near-black+acid green, etc.)
- Two-pass design plan: token plan then review
- Taste floor: spacing scale, real hierarchy, measured contrast
- Signature element: one bespoke thing, test by removal
- Structure and labels carry information
- Verro fingerprint registry (avoid agency sameness)

**Adaptation:**
- Token plan written into brief (D4-D6)
- Spacing scale: 4, 8, 16, 24, 32, 48, 64, 96, 128, 192
- Type hierarchy: Fraunces H1 64-72px, Source Sans 3 body 17-18px
- Signature: Hospital silhouette texture in hero
- No template chrome or SaaS card kit patterns

**What Changed:**
- Created custom spacing tokens matching Verro scale
- Designed signature element specific to KIMS

---

### 6. Brief Template
**URL:** `/tmp/verrolify_extracted/verrolify/references/core/brief-template.md`  
**Source:** Verrolify skill package  
**Licence:** Internal Verro Studio skill  

**Principles Extracted:**
- Diagnosis before choice before execution
- Bottleneck mapping table
- Intake minimum facts
- Eight decisions (D1-D8) with slop traps
- Thinking checks (5 checks)
- Approval gate
- Hygiene rules

**Adaptation:**
- Filled all brief sections (0-9)
- Documented all eight decisions
- Ran all thinking checks
- Marked as self-authored fictional build

**What Changed:**
- Adapted for fictional build context (TODO_CLIENT placeholders)

---

## Reference Distance Check

| Reference | Type | Distance | Status |
|---|---|---|---|
| SKILL.md | Framework | Internal | PASS |
| Mode 1 | Mode Guide | Internal | PASS |
| Healthcare Vertical | Vertical Rules | Internal | PASS |
| Design Techniques | Technique Guide | Internal | PASS |
| Anti-Slop | Design Floor | Internal | PASS |
| Brief Template | Template | Internal | PASS |

**No external reference sites were consulted.** All references are from the Verrolify skill package itself, which is the authoritative source for this build.

---

## Principles Extracted and Adapted

### From Healthcare Vertical
1. **Trust over spectacle** -> Used real hospital photos, clear information hierarchy
2. **No dark mode** -> Light canvas with warm tint
3. **Real photos beat generated** -> Used Unsplash hospital images
4. **No outcome guarantees** -> Copy describes services, not results

### From Mode 1
1. **5-second rule** -> Clear headline, subheadline, CTA in hero
2. **Trust ladder** -> Structured information flow
3. **Mobile-first** -> Designed at 375px, scaled up
4. **Whisper motion** -> Reveal and Stagger components

### From Design Techniques
1. **60-30-10 colour** -> Warm off-white (60%), charcoal (30%), aged brass (10%)
2. **Typography as signal** -> Fraunces display, Source Sans 3 body
3. **Five-part hero** -> All five elements present and correct
4. **Layout variety** -> Different skeletons per section

### From Anti-Slop
1. **No AI defaults** -> Custom colour palette from hospital world
2. **Signature element** -> Hospital silhouette texture
3. **Taste floor** -> Measured spacing, hierarchy, contrast

---

## What Was NOT Copied

- No pixels copied from any reference
- No copy text copied (all written fresh for KIMS)
- No layout dimensions copied
- No colour values copied (created custom 60-30-10 system)
- No motion patterns copied (used Verrolify components)

---

## Licence Status

| Reference | Licence | Status |
|---|---|---|
| Verrolify skill | Internal | OK - Verro Studio owned |
| Google Fonts (Fraunces, Source Sans 3) | OFL | OK - Commercial use allowed |
| Unsplash images | Unsplash Licence | OK - Free for commercial use, no attribution |

---

## Adaptation Summary

This build extracts **principles** from Verrolify's internal references and adapts them to the KIMS Hospital context:

- Healthcare trust requirements -> Light mode, real imagery, clear hierarchy
- Mode 1 trust landing -> Split-screen hero, whisper motion, single CTA
- Verro design techniques -> Custom 60-30-10, premium typography, layout variety
- Anti-slop rules -> No defaults, signature element, taste floor

All adaptations are documented in the VERRO_BRIEF.md and are traceable to specific sections of the referenced skill files.

---

*This log documents all references actually consulted. No fabricated consultations or reference-site visits were recorded.*
