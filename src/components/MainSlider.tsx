import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef, useState, useEffect } from "react";
import "/Users/ki/my-website/src/index.css";
import Home from "./Home";
import SectionTitle from "./SectionTitle";
import ProjectCard from "./ProjectCard";
import MyCodeComponent from "./MyCodeComponent";
import ExperienceSection from "./ExperienceSection";

gsap.registerPlugin(ScrollTrigger);

function MainSlider() {
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
          markers: false,
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
          markers: false,
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
        <Home />
      </div>
      <div className="outer-container">
        <div className="inner-container">
          <p className="text">I craft seamless user experiences</p>
        </div>
      </div>
      <div className="center-text-container">
        <MyCodeComponent />
      </div>
      <div className="center-text-container">
        <SectionTitle sectionNumber={"01"} name={"About me"} />
      </div>
      <div ref={slider} className="slider-container">
        <div className="panel rose">
          Creating responsive and user-centric applications with React/NextJS
          and TypeScript
        </div>
        <div className="panel rose">
          Developing APIs and backend services, ensuring seamless integration
          and high-performance communication
        </div>
        <div className="panel rose">
          Developing and maintaining SOAP and RESTful web services, with
          expertise in database management and querying
        </div>
        <div className="panel rose">
          Proven ability to work independently, with a proactive mindset to push
          tasks forward
        </div>
      </div>
      <div className="center-text-container">
        <SectionTitle sectionNumber={"02"} name={"Things I've build"} />
      </div>
      <div ref={reverseSlider} className="reverse-slider-container">
        <div className="reverse-panel">
          {" "}
          <ProjectCard
            name="Little Lemon Restaurant"
            repoLink="https://github.com/Kirspeek/little-lemon-restaurant"
            description="A dynamic platform for online orders and table reservations."
            skills={["React", "JavaScript", "HTML", "CSS", "Firebase"]}
          />
        </div>
        <div className="reverse-panel">
          {" "}
          <ProjectCard
            name="Game Hub"
            repoLink="https://github.com/Kirspeek/Game_App"
            liveLink="https://game-app-green.vercel.app/"
            description="Web app displaying a list of video games that can be filtered and sorted by multiple variables. Powered by the RAWG.io API."
            skills={["React", "TypeScript", "HTML", "CSS", "Chakra UI"]}
          />
        </div>
        <div className="reverse-panel">
          {" "}
          <ProjectCard
            name="Issue Tracker"
            repoLink="https://github.com/Kirspeek/issue-tracker"
            description="Web application designed to help teams manage and track issues with categorized charts."
            skills={[
              "Next.js",
              "React",
              "TypeScript",
              "HTML",
              "Tailwind CSS",
              "Radix UI",
              "MySQL",
              "Prisma",
              "NextAuth.js",
            ]}
          />
        </div>
      </div>
      <div className="center-text-container">
        <SectionTitle sectionNumber={"03"} name={"Where I've worked"} />
      </div>
      <div className="lastContainer">
        <ExperienceSection />
      </div>
    </div>
  );
}

export default MainSlider;
