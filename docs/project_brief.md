# Project Brief: Mycelial Fun Guy

## Executive Summary
**Vision**: Create the "Ultimate Mushroom Reference Application" - a trusted ecosystem combining high-quality cultivation guides, essential calculators, and a vetted marketplace of partners.
**Core Value**: Convenience (One-stop shop) x Trust (Vetted sources).
**Status**: Ready for Execution.

## Success Metrics
- **Performance**: Site is fast (static/ISR).
- **Usability**: Guides are easy to follow (Rich Text + Video).
- **Trust**: Partners are clearly badged ("Verified" vs Regular).

## Feature Tree
### Core Pages
- [ ] **Home**: Landing page (Retained/Polished).
- [ ] **Blog**: Long-form articles (Sanity).
- [ ] **Teks**: Step-by-step guides (Sanity).
    - Features: Rich Text, Video Embeds, Difficulty Ratings.
- [ ] **Calculators**: Links to external tools (Content-only).
- [ ] **Partners**: Curated directory.
    - Source: `partners.json`
    - Features: Categories (Vendor/Social/Knowledge), Verification Badge.

### Technical Foundation
- **Stack**: Next.js 15 (App Router), Tailwind CSS v4.
- **CMS**: Sanity (for Content).
- **Data**: JSON (for Partners).
- **Hosting**: Vercel.

## Scenario: Day in the Life
**User Flow**:
1. User lands on Home looking for "Substrate".
2. Navigates to **Partners** page.
3. Views the "Vendors" category.
4. Spots a vendor with a **"Verified"** badge (Trusted/Affiliate).
5. CLICKS -> Out to vendor site.

## Anti-Goals (YAGNI)
- **NO User Accounts**: Public access only.
- **NO Internal Calculators**: Link out only.
- **NO Comments/Social Graph**: Maintain via external social links.

## Risks (Pre-Mortem)
- **Content Gap**: Features exist but pages are empty.
    - *Mitigation*: Graceful "Coming Soon" states.
- **Build Failures**: Missing Environment Variables.
    - *Mitigation*: Runtime safety checks (Implemented).
