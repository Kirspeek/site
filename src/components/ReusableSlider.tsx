import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface SliderProps {
  panels: React.ReactNode[];
  className?: string;
}

const ReusableSlider = React.forwardRef<HTMLDivElement, SliderProps>(
  ({ panels, className = '' }, ref) => {
    const componentRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
      if (!ref || !(ref as React.RefObject<HTMLDivElement>).current) return;

      const ctx = gsap.context(() => {
        gsap.to((ref as React.RefObject<HTMLDivElement>).current!.children, {
          xPercent: -100 * (panels.length - 1),
          ease: 'none',
          scrollTrigger: {
            trigger: (ref as React.RefObject<HTMLDivElement>).current,
            pin: true,
            scrub: 1,
            snap: 1 / (panels.length - 1),
            end: () =>
              '+=' +
              (ref as React.RefObject<HTMLDivElement>).current!.offsetWidth,
            markers: false,
          },
        });
      }, componentRef);

      return () => ctx.revert();
    }, [panels.length, ref]);

    return (
      <div ref={ref} className={`slider-container ${className}`}>
        {panels.map((panel, index) => (
          <div key={index} className="panel">
            {panel}
          </div>
        ))}
      </div>
    );
  }
);

export default ReusableSlider;
