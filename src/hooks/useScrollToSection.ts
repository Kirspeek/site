import { useState, useCallback } from 'react';

interface UseScrollToSectionReturn {
  activeButton: string | null;
  setActiveButton: (button: string | null) => void;
  slowScrollToSection: (sectionName: string) => void;
}

export const useScrollToSection = (): UseScrollToSectionReturn => {
  const [activeButton, setActiveButton] = useState<string | null>(null);

  const slowScrollToSection = useCallback((sectionName: string) => {
    const section = document.getElementById(sectionName);
    if (!section) {
      console.warn(`Section with id "${sectionName}" not found`);
      return;
    }

    const sectionTop = section.offsetTop;
    let animationFrameId: number;

    const scrollToTarget = () => {
      const currentScroll = window.scrollY;
      const distance = sectionTop - currentScroll;

      if (Math.abs(distance) > 10) {
        window.scrollTo(0, currentScroll + distance / 20);
        animationFrameId = requestAnimationFrame(scrollToTarget);
      } else {
        window.scrollTo(0, sectionTop);
        setActiveButton(null);
      }
    };

    scrollToTarget();

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, []);

  return { activeButton, setActiveButton, slowScrollToSection };
};
