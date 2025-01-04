import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface SliderProps {
  panels: React.ReactNode[];
  className?: string;
  sliderRef?: React.RefObject<HTMLDivElement>;
}

const ReusableSlider: React.FC<SliderProps> = ({
  panels,
  className = '',
  sliderRef,
}) => {
  const componentRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!sliderRef?.current) return;

    const ctx = gsap.context(() => {
      gsap.to(sliderRef.current!.children, {
        xPercent: -100 * (panels.length - 1),
        ease: 'none',
        scrollTrigger: {
          trigger: sliderRef.current,
          pin: true,
          scrub: 1,
          snap: 1 / (panels.length - 1),
          end: () => '+=' + sliderRef.current!.offsetWidth,
          markers: false,
        },
      });
    }, componentRef);

    return () => ctx.revert();
  }, [panels.length, sliderRef]);

  return (
    <div
      ref={componentRef}
      className={`slider-container ${className}`}
      ref={sliderRef}
    >
      {panels.map((panel, index) => (
        <div key={index} className="panel">
          {panel}
        </div>
      ))}
    </div>
  );
};

export default ReusableSlider;
