import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef, useState, useEffect } from "react";
import "/Users/ki/my-website/src/index.css";

gsap.registerPlugin(ScrollTrigger);

function MainSection() {
  const [isLargeScreen, setIsLargeScreen] = useState<boolean>(
    window.innerWidth > 768
  );
  const component = useRef<HTMLDivElement>(null);
  const slider = useRef<HTMLDivElement>(null);
  const reverseSlider = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth > 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useLayoutEffect(() => {
    if (!isLargeScreen || !slider.current || !reverseSlider.current) return;

    const ctx = gsap.context(() => {
      // Horizontal slider
      const panels = gsap.utils.toArray<HTMLElement>(".panel");
      gsap.to(panels, {
        xPercent: -100 * (panels.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: slider.current,
          pin: true,
          scrub: 1,
          snap: 1 / (panels.length - 1),
          end: () => "+=" + slider.current!.offsetWidth,
          markers: true,
        },
      });

      // Reverse slider
      const reversePanels = gsap.utils.toArray<HTMLElement>(".reverse-panel");
      gsap.to(reversePanels, {
        xPercent: -100 * (reversePanels.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: reverseSlider.current,
          pin: true,
          scrub: 1,
          snap: 1 / (reversePanels.length - 1),
          end: () => "+=" + reverseSlider.current!.offsetWidth,
          markers: true,
        },
      });
    }, component);

    return () => ctx.revert();
  }, [isLargeScreen]);

  if (!isLargeScreen) {
    return (
      <div className="App">
        <div className="firstContainer">
          <h1>Testing horizontal scrolling</h1>
          <h2>First Container</h2>
        </div>
        <div className="container">
          <div className="panel blue">SCROLL DOWN</div>
          <div className="panel red">ONE</div>
          <div className="panel orange">TWO</div>
          <div className="panel purple">THREE</div>
        </div>
        <div className="lastContainer">
          <h2>Reverse Content:</h2>
          <div className="panel green">FOUR</div>
          <div className="panel grey">FIVE</div>
          <div className="panel rose">SIX</div>
        </div>
      </div>
    );
  }

  return (
    <div className="App" ref={component}>
      <div className="center-text-container">
        <h1>Testing horizontal scrolling</h1>
        <h2>First Container</h2>
      </div>
      <div ref={slider} className="slider-container">
        <div className="panel blue">SCROLL DOWN</div>
        <div className="panel red">ONE</div>
        <div className="panel orange">TWO</div>
        <div className="panel purple">THREE</div>
      </div>
      <div ref={reverseSlider} className="reverse-slider-container">
        <div className="reverse-panel green">FOUR</div>
        <div className="reverse-panel grey">FIVE</div>
        <div className="reverse-panel rose">SIX</div>
      </div>
      <div className="lastContainer">Last Container</div>
    </div>
  );
}

export default MainSection;
