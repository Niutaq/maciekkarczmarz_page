import gsap from "gsap";

const REDUCED_MOTION = window.matchMedia(
  "(prefers-reduced-motion: reduce)",
).matches;
const FINE_POINTER = window.matchMedia(
  "(hover: hover) and (pointer: fine)",
).matches;
const DESKTOP_LAYOUT = window.matchMedia("(min-width: 960px)").matches;
const MOBILE_LAYOUT = window.matchMedia("(max-width: 768px)").matches;

/** ~35% slower blob drift / scale vs original timings */
const BLOB_SCALE_DURATION: [number, number] = [22, 32];
const BLOB_SHIFT_DURATION: [number, number] = [30, 43];
const BLOB_SCALE_DELAY_STEP = 2.15;
const BLOB_SHIFT_DELAY_STEP = 2.95;
const MAGNET_QUICK_DURATION = 1.55;

function createVisibilityGate() {
  let heroVisible = true;
  let tabVisible = !document.hidden;

  const isActive = () => heroVisible && tabVisible;

  const onVisibility = () => {
    tabVisible = !document.hidden;
  };
  document.addEventListener("visibilitychange", onVisibility);

  return {
    isActive,
    setHeroVisible(visible: boolean) {
      heroVisible = visible;
    },
    dispose() {
      document.removeEventListener("visibilitychange", onVisibility);
    },
  };
}

function scheduleFrame(callback: () => void) {
  let rafId = 0;
  return () => {
    if (rafId) return;
    rafId = requestAnimationFrame(() => {
      rafId = 0;
      callback();
    });
  };
}

function setHeroParallax(hero: HTMLElement, clientX: number, clientY: number) {
  const rect = hero.getBoundingClientRect();
  const px = (clientX - rect.left) / rect.width - 0.5;
  const py = (clientY - rect.top) / rect.height - 0.5;
  hero.style.setProperty("--px", px.toFixed(3));
  hero.style.setProperty("--py", py.toFixed(3));
}

function initBlobMotion(
  hero: HTMLElement,
  gate: ReturnType<typeof createVisibilityGate>,
): () => void {
  const wraps = [...hero.querySelectorAll<HTMLElement>(".hero-blob-wrap")];
  if (!wraps.length) return () => {};

  const magnets = wraps.map((wrap) => ({
    x: gsap.quickTo(wrap, "x", {
      duration: MAGNET_QUICK_DURATION,
      ease: "power1.out",
    }),
    y: gsap.quickTo(wrap, "y", {
      duration: MAGNET_QUICK_DURATION,
      ease: "power1.out",
    }),
  }));

  const motion: gsap.core.Tween[] = [];

  wraps.forEach((wrap, index) => {
    if (MOBILE_LAYOUT && index >= 2) return;

    const shift = wrap.querySelector<HTMLElement>(".hero-blob-shift");
    const blob = wrap.querySelector<HTMLElement>(".hero-blob");
    if (!shift || !blob) return;

    motion.push(
      gsap.to(blob, {
        scale: 1.06,
        duration: gsap.utils.random(...BLOB_SCALE_DURATION),
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
        delay: index * BLOB_SCALE_DELAY_STEP,
      }),
    );

    motion.push(
      gsap.to(shift, {
        x: `+=${gsap.utils.random(-40, 40)}`,
        y: `+=${gsap.utils.random(-32, 32)}`,
        duration: gsap.utils.random(...BLOB_SHIFT_DURATION),
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
        delay: index * BLOB_SHIFT_DELAY_STEP,
      }),
    );
  });

  const pauseMotion = () => motion.forEach((t) => t.pause());
  const resumeMotion = () => {
    if (gate.isActive()) motion.forEach((t) => t.resume());
  };

  let pointerX = 0;
  let pointerY = 0;
  let magneticFrame = 0;

  const flushPointer = scheduleFrame(() => {
    if (!gate.isActive()) return;

    if (FINE_POINTER && DESKTOP_LAYOUT) {
      setHeroParallax(hero, pointerX, pointerY);
    }

    if (!FINE_POINTER) return;

    magneticFrame += 1;
    if (magneticFrame % 2 !== 0) return;

    const rect = hero.getBoundingClientRect();
    const nx = (pointerX - rect.left) / rect.width - 0.5;
    const ny = (pointerY - rect.top) / rect.height - 0.5;

    wraps.forEach((_, index) => {
      if (MOBILE_LAYOUT && index >= 2) return;
      const pull = 40 + index * 10;
      const sign = index % 2 === 0 ? 1 : -1;
      magnets[index].x(sign * nx * pull);
      magnets[index].y(sign * ny * pull);
    });
  });

  const onPointerMove = (event: PointerEvent) => {
    pointerX = event.clientX;
    pointerY = event.clientY;
    flushPointer();
  };

  if (FINE_POINTER) {
    hero.addEventListener("pointermove", onPointerMove, { passive: true });
  }

  const observer = new IntersectionObserver(
    ([entry]) => {
      gate.setHeroVisible(entry.isIntersecting);
      if (entry.isIntersecting) resumeMotion();
      else pauseMotion();
    },
    { threshold: 0.05, rootMargin: "80px 0px" },
  );
  observer.observe(hero);

  document.addEventListener("visibilitychange", () => {
    if (document.hidden) pauseMotion();
    else resumeMotion();
  });

  return () => {
    if (FINE_POINTER) {
      hero.removeEventListener("pointermove", onPointerMove);
    }
    observer.disconnect();
    motion.forEach((t) => t.kill());
  };
}

const INTERACTIVE_SELECTOR = [
  "a[href]",
  "button:not(:disabled)",
  "input:not(:disabled)",
  "select:not(:disabled)",
  "textarea:not(:disabled)",
  "label[for]",
  "summary",
  '[role="button"]:not([aria-disabled="true"])',
  '[role="link"]',
  '[role="tab"]',
  '[role="menuitem"]',
  ".button",
  ".nav-link",
  ".nav-cta",
  ".icon-button",
  ".map-tab",
  ".menu-toggle",
  ".lang-option",
  ".wordmark",
  "[data-doc]",
  ".contact-link",
].join(",");

function isInteractiveAt(x: number, y: number) {
  const hit = document.elementFromPoint(x, y);
  return Boolean(hit?.closest(INTERACTIVE_SELECTOR));
}

export function initSiteCursor() {
  const cursor = document.querySelector<HTMLElement>(".hero-cursor");
  const ring = document.querySelector<HTMLElement>(".hero-cursor-ring");
  const dot = document.querySelector<HTMLElement>(".hero-cursor-dot");
  if (!cursor || !ring || !dot) return;

  document.documentElement.classList.add("hero-cursor-active");

  gsap.set(cursor, { autoAlpha: 0 });
  gsap.set([ring, dot], { xPercent: -50, yPercent: -50 });

  const ringX = gsap.quickTo(ring, "x", { duration: 0.38, ease: "power3.out" });
  const ringY = gsap.quickTo(ring, "y", { duration: 0.38, ease: "power3.out" });
  const dotX = gsap.quickTo(dot, "x", { duration: 0.14, ease: "power3.out" });
  const dotY = gsap.quickTo(dot, "y", { duration: 0.14, ease: "power3.out" });

  let visible = false;
  let interactive = false;
  let pendingX = 0;
  let pendingY = 0;

  const show = () => {
    if (visible || document.hidden) return;
    visible = true;
    gsap.to(cursor, { autoAlpha: 1, duration: 0.2 });
  };

  const hide = () => {
    if (!visible) return;
    visible = false;
    gsap.to(cursor, { autoAlpha: 0, duration: 0.2 });
  };

  const setInteractive = (next: boolean) => {
    if (next === interactive) return;
    interactive = next;
    cursor.classList.toggle("hero-cursor--interactive", interactive);
  };

  const flushCursor = scheduleFrame(() => {
    if (document.hidden) {
      hide();
      return;
    }
    ringX(pendingX);
    ringY(pendingY);
    dotX(pendingX);
    dotY(pendingY);
    setInteractive(isInteractiveAt(pendingX, pendingY));
    show();
  });

  const onMove = (event: PointerEvent) => {
    pendingX = event.clientX;
    pendingY = event.clientY;
    flushCursor();
  };

  const onLeave = () => hide();

  window.addEventListener("pointermove", onMove, { passive: true });
  document.documentElement.addEventListener("pointerleave", onLeave);
  document.addEventListener("visibilitychange", () => {
    if (document.hidden) hide();
  });
}

export function initHeroLiquid() {
  const hero = document.querySelector<HTMLElement>(".hero");
  if (!hero) return;

  hero.classList.add("hero--liquid");
  if (MOBILE_LAYOUT) {
    hero.classList.add("hero--compact");
  }

  if (REDUCED_MOTION) {
    hero.classList.add("hero--reduced-motion");
    return;
  }

  const gate = createVisibilityGate();
  const disposeBlobMotion = initBlobMotion(hero, gate);

  return () => {
    disposeBlobMotion();
    gate.dispose();
  };
}

if (!REDUCED_MOTION && FINE_POINTER) {
  initSiteCursor();
}

initHeroLiquid();
