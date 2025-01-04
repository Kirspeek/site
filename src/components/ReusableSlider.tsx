import React, { useLayoutEffect, useRef, useImperativeHandle } from 'react';
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

    useImperativeHandle(ref, () => componentRef.current as HTMLDivElement);

    useLayoutEffect(() => {
      if (!componentRef.current) {
        console.error('componentRef.current is null - DOM not ready');
        return;
      }

      console.log('componentRef.current:', componentRef.current);

      const ctx = gsap.context(() => {
        gsap.to(componentRef.current!.children, {
          xPercent: -100 * (panels.length - 1),
          ease: 'none',
          scrollTrigger: {
            trigger: componentRef.current,
            pin: true,
            scrub: 1,
            snap: 1 / (panels.length - 1),
            end: () => '+=' + componentRef.current!.offsetWidth,
          },
        });
        console.log('GSAP animation initialized');
      }, componentRef);

      return () => {
        console.log('Cleaning up GSAP and ScrollTrigger');
        ctx.revert();
        ScrollTrigger.getAll().forEach((st) => st.kill());
      };
    }, [panels]);
    ScrollTrigger.refresh();
    return (
      <div ref={componentRef} className={`slider-container ${className}`}>
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
