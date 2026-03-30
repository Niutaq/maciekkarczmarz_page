# Design Specification: "The Golden Current" Portfolio

**Date:** 2026-03-30
**Status:** Draft (Pending User Review)
**Concept:** A luxury-tech fusion ("Fragrance Elegance" meets "FinOps Precision") inspired by an amber ocean and high-end editorial design.

---

## 1. Visual Identity & Mood
*   **Theme:** "Liquid Obsidian & Amber Flux".
*   **Vibe:** Precision (Engineer) and Tranquility (Art).
*   **Color Palette (Tailwind v4 OKLCH):**
    *   `--background`: `oklch(0.12 0.02 50)` (Deep Obsidian/Anthracite).
    *   `--primary`: `oklch(0.75 0.15 50)` (Liquid Amber / Cognac Gold).
    *   `--surface`: `oklch(0.16 0.03 50 / 0.4)` (Frosted Glass base).
    *   `--accent`: `oklch(0.85 0.12 60)` (High-lightness Gold glow).
*   **Typography:**
    *   **Headers:** *Cormorant Garamond* (Serif) – Large, airy, luxury magazine style.
    *   **Body/UI:** *Geist Sans* – Clean, modern, high readability.
    *   **Data/FinOps:** *Geist Mono* – Technical, precise, used for metadata and stats.

---

## 2. Core Architectural Components

### A. The "Amber Ocean" (Background Engine)
*   **Implementation:** React component using `framer-motion` to animate organic SVG blobs or Canvas-based "Liquid Mesh".
*   **Behavior:** Slow, heavy movement (like oil in water). High blur (`blur-3xl`) to create a soft, non-distracting glow. Reacts to scroll position to shift "depth".

### B. "Asymmetric Glass" (Bento Grid 2.0)
*   **Layout:** Deconstructed Bento grid. Cards are not uniform; they have varying widths and large border radii (`rounded-3xl`).
*   **Effect:** `backdrop-blur-2xl` with a 0.5px border (`border-white/10`).
*   **Interaction:** 3D Tilt effect using `framer-motion`'s `useSpring` and `useTransform` to follow the mouse pointer subtly.

### C. "Editorial Narratives" (Sections)
*   **Hero Section:** Minimalist. Huge Serif typography. A "reveal" animation where text emerges from a blur.
*   **Experience/Projects:** Cards appear as "islands" floating on the amber current.
*   **FinOps Metrics:** Small, precise monospaced overlays (numbers, efficiency % from Digital Ocean) that feel like technical specs on a luxury watch.

---

## 3. Motion & Interactions
*   **Scroll Reveal:** Staggered children animations using Framer Motion. Elements don't just fade in; they "condense" or "solidify".
*   **Chromatic Overlays:** Using `mix-blend-mode: difference` or `overlay` on specific text elements to make them react to the amber blobs passing underneath.
*   **Cursor:** Your current custom cursor will be upgraded to "magnetically" attract to interactive elements with a liquid amber trail.

---

## 4. Technical Constraints & Success Criteria
*   **Performance:** Must maintain 60fps. Use `will-change` and hardware acceleration for animations.
*   **Accessibility:** High contrast (OKLCH ensures color safety). Readable typography despite the artistic flair.
*   **Usability:** Navigation must remain rock-solid (The "Compass" menu).

---

## 5. Next Steps
1.  Update `global.css` with the new OKLCH palette and Typography imports.
2.  Implement `LiquidBackground.tsx`.
3.  Refactor `HeroSection.tsx` to the "Editorial" style.
4.  Apply "Asymmetric Glass" styles to `experience-section.tsx` and `pipeline-section.tsx`.
