import { useEffect } from "react";

function easeInOutCubic(t: number): number {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

function smoothScrollTo(targetEl: Element, duration = 1000) {
  const offset = 20; // small breathing room above the section
  const targetPosition = targetEl.getBoundingClientRect().top + window.pageYOffset - offset;
  const startPosition = window.pageYOffset;
  const distance = targetPosition - startPosition;
  let startTime: number | null = null;

  function animation(currentTime: number) {
    if (!startTime) startTime = currentTime;
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const ease = easeInOutCubic(progress);
    window.scrollTo(0, startPosition + distance * ease);
    if (progress < 1) requestAnimationFrame(animation);
  }

  requestAnimationFrame(animation);
}

export function useSmoothScroll() {
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      const anchor = (e.target as HTMLElement).closest('a[href^="#"]');
      if (!anchor) return;
      const href = anchor.getAttribute("href");
      if (!href || href === "#") return;
      const target = document.querySelector(href);
      if (!target) return;
      e.preventDefault();
      smoothScrollTo(target);
    };

    document.addEventListener("click", handler);
    return () => document.removeEventListener("click", handler);
  }, []);
}
