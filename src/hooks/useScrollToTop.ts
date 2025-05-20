import { useState, useCallback } from 'react';

interface UseScrollToTopReturn {
  isScrolling: boolean;
  slowScrollToTop: () => void;
}

// Easing function for smooth animation
const easeInOutCubic = (t: number): number => {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
};

export const useScrollToTop = (): UseScrollToTopReturn => {
  const [isScrolling, setIsScrolling] = useState<boolean>(false);

  const slowScrollToTop = useCallback(() => {
    if (isScrolling) return;

    setIsScrolling(true);

    const startPosition = window.scrollY;
    const duration = 1500; // Increased duration for slower scroll
    const startTime = performance.now();

    const scrollToTarget = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = easeInOutCubic(progress);

      window.scrollTo(0, startPosition * (1 - easedProgress));

      if (progress < 1) {
        requestAnimationFrame(scrollToTarget);
      } else {
        window.scrollTo(0, 0);
        setIsScrolling(false);
      }
    };

    requestAnimationFrame(scrollToTarget);
  }, [isScrolling]);

  return { isScrolling, slowScrollToTop };
};
