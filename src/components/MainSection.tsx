import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef, useState, useEffect } from "react";
import "/Users/ki/my-website/src/index.css";

gsap.registerPlugin(ScrollTrigger);

function MainSection() {
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth > 768);
  const component = useRef<HTMLDivElement | null>(null);
  const slider = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth > 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useLayoutEffect(() => {
    if (!isLargeScreen || !slider.current || !component.current) return;

    const ctx = gsap.context(() => {
      const panels = gsap.utils.toArray<HTMLDivElement>(".panel");
      gsap.to(panels, {
        xPercent: -100 * (panels.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: slider.current!,
          pin: true,
          scrub: 1,
          snap: 1 / (panels.length - 1),
          end: () => "+=" + slider.current!.offsetWidth,
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
          <h1>Testing horizontal scrolling w/ three sections</h1>
          <h2>First Container</h2>
        </div>
        <div className="container">
          <div className="panel blue">SCROLL DOWN</div>
          <div className="panel red">ONE</div>
          <div className="panel orange">TWO</div>
          <div className="panel purple">THREE</div>
        </div>
        <div className="lastContainer">Last Container</div>
      </div>
    );
  }

  return (
    <div className="App" ref={component}>
      <div className="firstContainer">
        <h1>Testing horizontal scrolling w/ three sections</h1>
        <h2>First Container</h2>
      </div>
      <div ref={slider} className="container">
        <div className="description panel blue">
          <div>
            SCROLL DOWN
            <div className="scroll-down">
              <div className="arrow"></div>
            </div>
          </div>
        </div>
        <div className="panel red">ONE</div>
        <div className="panel orange">TWO</div>
        <div className="panel purple">THREE</div>
      </div>
      <div className="lastContainer">Last Container</div>
      <div ref={slider} className="container">
        <div className="description panel blue">
          <div>
            SCROLL DOWN
            <div className="scroll-down">
              <div className="arrow"></div>
            </div>
          </div>
        </div>
        <div className="panel red">ONE</div>
        <div className="panel orange">TWO</div>
        <div className="panel purple">THREE</div>
      </div>
    </div>
  );
}

export default MainSection;
