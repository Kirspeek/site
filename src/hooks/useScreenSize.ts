import { useState, useEffect, useCallback } from 'react';

interface UseScreenSizeOptions {
  breakpoint?: number;
  debounceTime?: number;
}

export const useScreenSize = ({
  breakpoint = 1400,
  debounceTime = 100,
}: UseScreenSizeOptions = {}): boolean => {
  const [isLargeScreen, setIsLargeScreen] = useState<boolean>(() =>
    typeof window !== 'undefined' ? window.innerWidth > breakpoint : false
  );

  const handleResize = useCallback(() => {
    setIsLargeScreen(window.innerWidth > breakpoint);
  }, [breakpoint]);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    let timeoutId: NodeJS.Timeout;

    const debouncedResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(handleResize, debounceTime);
    };

    window.addEventListener('resize', debouncedResize);
    return () => {
      window.removeEventListener('resize', debouncedResize);
      clearTimeout(timeoutId);
    };
  }, [handleResize, debounceTime]);

  return isLargeScreen;
};
