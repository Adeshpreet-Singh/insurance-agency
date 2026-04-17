# TODO: insurance-agency

## Bugs Fixed
- [FIX] `scrollTo(item)` references undefined `item` outside map callbacks — FIXED (hardcoded section IDs)
- [FIX] Inline styles conflicting with Tailwind classes — FIXED (removed excessive px-4 md:px-8 duplication)
- [FIX] CSS @import order warning — FIXED (Google Fonts before Tailwind)
- [FIX] Missing metadataBase for OG images — FIXED

## Accessibility
- [A11Y] Buttons with proper aria-labels — DONE
- [A11Y] Skip to main content link — DONE
- [A11Y] Semantic HTML with ARIA roles — DONE
- [A11Y] Keyboard navigation on service cards — DONE

## SEO
- [SEO] OG tags (title, description, image) — DONE
- [SEO] Twitter card metadata — DONE
- [SEO] Meta keywords and authors — DONE
- [SEO] Structured JSON-LD — PENDING (can add if needed)
- [SEO] Favicon — DONE (public/favicon.svg)

## Features Added
- [FEAT] Web3Forms integration on contact form — DONE
- [FEAT] WhatsApp floating button — DONE
- [FEAT] Google Maps embed (Boston office) — DONE
- [FEAT] tel: links for phone numbers — DONE
- [FEAT] mailto: link for email — DONE
- [FEAT] Social media links (LinkedIn, Facebook, Twitter, WhatsApp) — DONE
- [FEAT] Business hours display — DONE
- [FEAT] Claims process section (4-step) — DONE
- [FEAT] Claims hotline tel: link — DONE
- [FEAT] Agent profiles section — DONE
- [FEAT] Insurance types (auto/home/life/business/health/umbrella) — DONE
- [FEAT] Get quote form with phone field — DONE
- [FEAT] Form submission feedback (sending/success/error states) — DONE
- [FEAT] CTA section with call button — DONE
- [FEAT] Footer with coverage, company, and connect columns — DONE

## Build
- [BUILD] `npm run build` passes with zero warnings — DONE
