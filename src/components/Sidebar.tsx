import React from "react";
import { MdOutlineArrowOutward } from "react-icons/md";
import "./Sidebar.css";

const Sidebar: React.FC = () => {
  const sections = [
    { name: "about", label: "About" },
    { name: "projects", label: "Projects" },
    { name: "experience", label: "Experience" },
  ];

  const slowScrollToSection = (sectionName: string) => {
    const section = document.getElementById(sectionName);
    if (!section) return;

    const sectionTop = section.offsetTop;

    const scrollToTarget = () => {
      const currentScroll = window.scrollY;
      const distance = sectionTop - currentScroll;

      if (Math.abs(distance) > 10) {
        window.scrollTo(0, currentScroll + distance / 20);
        requestAnimationFrame(scrollToTarget);
      } else {
        window.scrollTo(0, sectionTop);
      }
    };

    scrollToTarget();
  };

  return (
    <div className="sidebar">
      {sections.map((section) => (
        <button
          key={section.name}
          className="section-button"
          onClick={() => slowScrollToSection(section.name)}
        >
          <span className="button-label">
            {section.label}
            <span className="arrow-icon">
              <MdOutlineArrowOutward />
            </span>
          </span>
        </button>
      ))}
    </div>
  );
};

export default Sidebar;
