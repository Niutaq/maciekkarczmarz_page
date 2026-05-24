# Hero liquid gradient — performance optimizations

## Problem

The hero liquid mesh (GSAP blobs, glass cards, film grain, custom cursor) increased main-thread and compositor cost during scroll and pointer move, especially from:

- Full-viewport SVG `feTurbulence` repaint
- Four large `filter: blur(72px)` layers
- GSAP animating `borderRadius` (layout/paint, not compositor-only)
- `backdrop-filter` on hero glass without capability gating
- Custom cursor + magnetic pull on `main` + `hero` with unbatched `pointermove`
- `cursor: none` on `body` / all of `main`

## Changes

| Area | Before | After | Expected impact |
|------|--------|-------|-----------------|
| Blobs | 4 × blur 72px, `borderRadius` tween | 3 × blur 48px, `scale` + `x`/`y` only | ~25–35% less GPU filter work |
| Grain | Full-size inline SVG filter | 128px tiled static noise (`contain: strict`) | Large drop in filter paint area |
| Glass | Always `backdrop-filter: blur(10px)` | Solid fallback; blur only with fine pointer + `@supports` | Touch/low-end avoids backdrop cost |
| GSAP | Always running; `borderRadius`; dual listeners | `IntersectionObserver` pause; rAF batch; magnetic every 2nd frame; tab hidden pause | Less CPU when hero off-screen / background tab |
| Cursor | `hero` + `main`, `body { cursor: none }` | `#hero` only, rAF batch, no work when tab hidden | Fewer listeners and repaints |

## Files

- `src/scripts/hero-liquid.ts` — rAF throttling, IO pause, cursor scope, removed `borderRadius` animation
- `src/pages/index.astro` — hero CSS/HTML (blobs, grain, glass, cursor rules)

## Verification

```bash
npm run build
```

Manual: DevTools Performance — record scroll through hero and below; compare Scripting + Painting vs pre-change. Target smoother 60fps on mid-tier laptop; low-end touch devices skip backdrop blur but keep copper mesh + grain + cards.

## Visual intent preserved

Copper liquid blobs, subtle grain, glass hero cards, and custom cursor on desktop fine-pointer remain; fourth blob removed (overlap was redundant).
