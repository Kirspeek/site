import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef, useState, useEffect } from "react";
import "/Users/ki/my-website/src/index.css";
import Home from "./Home";
import SectionTitle from "./SectionTitle";
import ProjectCard from "./ProjectCard";
import MyCodeComponent from "./MyCodeComponent";
import ExperienceSection from "./ExperienceSection";
import { MdOutlineArrowOutward } from "react-icons/md";

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
        <div id="about" className="title-container">
          <SectionTitle sectionNumber={"01"} name={"About me"} />
        </div>
        <div ref={slider} className="slider-container">
          <div className="panel rose">
            Creating responsive and user-centric applications with React/NextJS
            and TypeScript
          </div>
          <div className="panel rose">
            Developing APIs and backend services using Nest.js and Node.js
            ensuring seamless integration and high-performance communication
          </div>
          <div className="panel rose">
            Developing and maintaining SOAP and RESTful web services with
            expertise in database management using MongoDB and querying
          </div>
          <div className="panel rose">
            Proven ability to work independently with a proactive mindset to
            push tasks forward
          </div>
        </div>
        <div id="projects" className="title-container">
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
        <div id="experience" className="title-container">
          <SectionTitle sectionNumber={"03"} name={"Where I've worked"} />
        </div>
        <div className="lastContainer">
          <ExperienceSection />
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
      <div className="title-container">
        <MyCodeComponent />
      </div>
      <div id="about" className="title-container">
        <SectionTitle sectionNumber={"01"} name={"About me"} />
      </div>
      <div ref={slider} className="slider-container">
        <div className="panel rose">
          Creating responsive and user-centric applications with React/NextJS
          and TypeScript
        </div>
        <div className="panel rose">
          Developing APIs and backend services using Nest.js and Node.js
          ensuring seamless integration and high-performance communication
        </div>
        <div className="panel rose">
          Developing and maintaining SOAP and RESTful web services with
          expertise in database management using MongoDB and querying
        </div>
        <div className="panel rose">
          Proven ability to work independently with a proactive mindset to push
          tasks forward
        </div>
      </div>
      <div id="projects" className="title-container">
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
      <div id="experience" className="title-container">
        <SectionTitle sectionNumber={"03"} name={"Where I've worked"} />
      </div>
      <div className="lastContainer">
        <ExperienceSection />
      </div>
      <div className="to-top-container">
        <button
          className="to-top-button"
          onClick={() => {
            const scrollToTop = () => {
              const currentScroll = window.scrollY;
              if (currentScroll > 0) {
                window.scrollTo(0, currentScroll - 70);
                requestAnimationFrame(scrollToTop);
              }
            };
            scrollToTop();
          }}
        >
          To top
          <span className="arrow-icon">
            <MdOutlineArrowOutward />
          </span>
        </button>
      </div>
    </div>
  );
}

export default MainSlider;
