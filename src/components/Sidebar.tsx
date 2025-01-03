import React, { useState } from 'react';
import { MdOutlineArrowOutward } from 'react-icons/md';
import './Sidebar.css';

const Sidebar: React.FC = () => {
  const sections = [
    { name: 'about', label: 'About' },
    { name: 'projects', label: 'Projects' },
    { name: 'experience', label: 'Experience' },
  ];

  const [activeButton, setActiveButton] = useState<string | null>(null);

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
        setActiveButton(null);
      }
    };

    scrollToTarget();
  };

  return (
    <div className="sidebar">
      {sections.map((section) => (
        <button
          key={section.name}
          className={`section-button ${
            activeButton === section.name ? 'pressed' : ''
          }`}
          onClick={() => {
            if (activeButton !== section.name) {
              setActiveButton(section.name);
              slowScrollToSection(section.name);
            }
          }}
          disabled={activeButton === section.name}
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
