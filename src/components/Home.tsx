import { useEffect, useRef } from "react";
import "./Home.css";
import IconsRow from "./IconsRow";
import Sidebar from "./Sidebar";
import NameBox from "./NameBox";
import SmallText from "./SmallText";

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
      <IconsRow />
      <SmallText />
      <Sidebar />
      <NameBox />
    </div>
  );
}

export default Home;
