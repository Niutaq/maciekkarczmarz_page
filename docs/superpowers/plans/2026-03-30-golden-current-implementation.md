# "The Golden Current" Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Transform the portfolio into a luxury-tech fusion ("Fragrance Elegance") with an amber ocean background and editorial typography.

**Architecture:** Use Tailwind v4 OKLCH for deep colors, Framer Motion for organic background liquid effects, and backdrop-blur for glassmorphism.

**Tech Stack:** Astro, React, Tailwind CSS v4, Framer Motion, Geist Mono/Sans.

---

### Task 1: Foundations & Typography

**Files:**
- Modify: `src/styles/global.css`
- Modify: `src/components/theme-provider.tsx` (to ensure dark mode defaults)

- [ ] **Step 1: Update global CSS with luxury palette and fonts**

```css
@import "tailwindcss";
@plugin "tailwindcss-animate";

@custom-variant dark (&:is(.dark *));

/* Import Luxury Serif for Headers */
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,400&display=swap');

:root {
    --background: oklch(0.12 0.02 50); /* Deep Obsidian */
    --foreground: oklch(0.98 0.01 50);
    --primary: oklch(0.75 0.15 50);    /* Liquid Amber */
    --primary-foreground: oklch(0.12 0.02 50);
    --surface: oklch(0.16 0.03 50 / 0.4); /* Glass Base */
    --border: oklch(1 0 0 / 0.1);      /* Ultra-thin white */
    --accent: oklch(0.85 0.12 60);     /* Gold Glow */
    --radius: 2rem;
}

@theme {
    --font-serif: "Cormorant Garamond", serif;
    --font-mono: "Geist Mono", monospace;
    --font-sans: "Geist Sans", sans-serif;
}

body {
    background-color: var(--background);
    color: var(--foreground);
    font-family: var(--font-sans);
}

h1, h2, h3 {
    font-family: var(--font-serif);
    font-weight: 300;
}
```

- [ ] **Step 2: Commit foundations**

```bash
git add src/styles/global.css
git commit -m "style: set up golden current palette and typography"
```

---

### Task 2: The "Amber Ocean" Background

**Files:**
- Create: `src/components/liquid-background.tsx`
- Modify: `src/pages/index.astro`

- [ ] **Step 1: Create the Liquid Background component**

```tsx
import React from 'react';
import { motion } from 'framer-motion';

export const LiquidBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-[var(--background)]">
      {/* Primary Amber Blob */}
      <motion.div
        animate={{
          x: [0, 100, -50, 0],
          y: [0, -50, 100, 0],
          scale: [1, 1.2, 0.9, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute -top-[20%] -left-[10%] w-[80%] h-[80%] rounded-full bg-[var(--primary)] opacity-20 blur-[120px]"
      />
      {/* Secondary Accent Blob */}
      <motion.div
        animate={{
          x: [0, -120, 80, 0],
          y: [0, 100, -60, 0],
          scale: [1, 0.8, 1.1, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute -bottom-[10%] -right-[5%] w-[60%] h-[60%] rounded-full bg-[var(--accent)] opacity-15 blur-[100px]"
      />
      {/* Noise Texture Overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
    </div>
  );
};
```

- [ ] **Step 2: Integrate into the main page**

Modify `src/pages/index.astro` to include `<LiquidBackground client:load />` at the top level.

- [ ] **Step 3: Commit background**

```bash
git add src/components/liquid-background.tsx src/pages/index.astro
git commit -m "feat: implement amber ocean background"
```

---

### Task 3: Editorial Hero Section

**Files:**
- Modify: `src/components/hero-section.tsx`

- [ ] **Step 1: Refactor Hero to Luxury Style**

```tsx
import { motion } from 'framer-motion';

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
        animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
        className="text-center"
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.3em] opacity-50 mb-4 block">
          FinOps Architect / Digital Ocean Specialist
        </span>
        <h1 className="text-7xl md:text-9xl font-serif italic leading-tight">
          The Golden <br /> <span className="text-[var(--primary)]">Current</span>
        </h1>
        <p className="mt-8 max-w-lg mx-auto font-sans text-lg opacity-70 font-light leading-relaxed">
          Crafting high-precision infrastructure with the tranquility of a fluid design.
        </p>
      </motion.div>
    </section>
  );
};
```

- [ ] **Step 2: Commit Hero**

```bash
git add src/components/hero-section.tsx
git commit -m "feat: update hero section to editorial style"
```

---

### Task 4: Asymmetric Glass Cards (Projects & Exp)

**Files:**
- Modify: `src/components/experience-section.tsx`
- Modify: `src/components/ui/card.tsx` (if exists, otherwise create local style)

- [ ] **Step 1: Apply Asymmetric Glass styling**

Update the cards to use:
- `backdrop-blur-2xl`
- `bg-[var(--surface)]`
- `border border-[var(--border)]`
- `rounded-[2rem]`
- `whileHover={{ scale: 1.02, rotateY: 5 }}` (subtle 3D effect)

- [ ] **Step 2: Commit Cards**

```bash
git add src/components/experience-section.tsx
git commit -m "feat: apply asymmetric glass effect to sections"
```

---

### Task 5: Chromatic Details & Optimization

**Files:**
- Modify: `src/styles/global.css`
- Modify: `src/components/custom-cursor.tsx`

- [ ] **Step 1: Add Chromatic Overlays**

```css
.mix-blend-amber {
    mix-blend-mode: difference;
}
```

- [ ] **Step 2: Update Custom Cursor to Amber Trail**

Modify `src/components/custom-cursor.tsx` to use `var(--primary)` color and a spring-based trailing effect.

- [ ] **Step 3: Final Commit & Cleanup**

```bash
git add .
git commit -m "feat: finalize golden current transformation with chromatic details"
```
