import { useEffect, useRef, useCallback, useState } from 'react';

interface UseIntersectionObserverOptions {
  threshold?: number;
  root?: Element | null;
  rootMargin?: string;
}

interface UseIntersectionObserverReturn {
  ref: React.RefObject<HTMLDivElement>;
  isIntersecting: boolean;
}

export const useIntersectionObserver = ({
  threshold = 0.1,
  root = null,
  rootMargin = '0px',
}: UseIntersectionObserverOptions = {}): UseIntersectionObserverReturn => {
  const elementRef = useRef<HTMLDivElement>(null);
  const [isIntersecting, setIsIntersecting] = useState<boolean>(false);

  const handleIntersection = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
          setIsIntersecting(true);
        } else {
          entry.target.classList.remove('animate');
          setIsIntersecting(false);
        }
      });
    },
    []
  );

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, {
      threshold,
      root,
      rootMargin,
    });

    const currentElement = elementRef.current;

    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [threshold, root, rootMargin, handleIntersection]);

  return { ref: elementRef, isIntersecting };
};
