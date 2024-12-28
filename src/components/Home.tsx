import { useEffect, useRef } from "react";
import "./Home.css";

function Home() {
  const homeLeftRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate");
          }
        });
      },
      { threshold: 0.1 }
    );

    if (homeLeftRef.current) {
      observer.observe(homeLeftRef.current);
    }

    return () => {
      if (homeLeftRef.current) {
        observer.unobserve(homeLeftRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const textElement = document.getElementById("animatedText");

    if (textElement) {
      setTimeout(() => {
        textElement.classList.add("animate");
      }, 1000);
    } else {
      console.error("Element with id 'animatedText' not found.");
    }
  }, []);
  return (
    <div id="home" className="home-container w-full flex">
      <div className="top-banner">
        <div className="line-section"></div>
        <p className="intro-text">
          Hi there! My name is{" "}
          <span className="name-text">Iryna Cherepenko</span>
        </p>
      </div>
      <div ref={homeLeftRef} className="home-left">
        <div
          id="animatedText"
          className="max-w-full lg:max-w-xl faded-text d-parag"
        >
          <a
            className="one"
            href="https://github.com/Kirspeek"
            target="_blank"
            rel="noopener noreferrer"
          >
            software engineer
          </a>{" "}
          specializing in building exceptional digital platforms.
        </div>
      </div>
    </div>
  );
}

export default Home;
