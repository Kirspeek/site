import React, { useState } from "react";
import "./ExperienceSection.css";

const experienceData = {
  tab1: {
    name: "Divergent",
    role: "Full Stack Engineer",
    duration: "April 2024 - Present",
    description: [
      "Start-up focused on building an email management platform with features like Delivery Monitoring, Blacklist Monitoring, and Safe Email Warming.",
      "Creating user interfaces with data visualizations, charts, and components for tracking email performance.",
      "Developing secure and efficient backend systems to ensure reliable functionality.",
    ],
    techStack: [
      "React",
      "Next.js",
      "TypeScript",
      "Node.js",
      "NestJS",
      "MongoDB",
      "Docker",
      "GitHub Actions",
      "Git",
    ],
  },
  tab2: {
    name: "Code Academy",
    role: "Junior Front End Developer",
    duration: "December 2022 - April 2023",
    description: [
      "Internship focused on improving skills with strong team support.",
      "Leveraged modern tools like Vercel, Next.js, Tailwind CSS, and React to build a robust frontend architecture.",
      "Integrated both backend and frontend for the project.",
    ],
    techStack: ["React", "Next.js", "Tailwind CSS", "JavaScript"],
  },
};

const ExperienceSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"tab1" | "tab2">("tab1");

  const handleTabChange = (tab: "tab1" | "tab2") => {
    setActiveTab(tab);
  };

  const { role, duration, description, techStack } = experienceData[activeTab];

  return (
    <div id="experience" className="experience-section">
      <div className="section-wrapper">
        <div className="tabs-container">
          <div className="tabs-trigger-container">
            <button
              className={`tabs-trigger ${activeTab === "tab1" ? "active" : ""}`}
              onClick={() => handleTabChange("tab1")}
            >
              Divergent
            </button>
            <button
              className={`tabs-trigger ${activeTab === "tab2" ? "active" : ""}`}
              onClick={() => handleTabChange("tab2")}
            >
              Code Academy
            </button>
          </div>
          <div className="tabs-content-container">
            <div className="tabs-content">
              <h3 className="exp-title">{role}</h3>
              <p className="exp-date">{duration}</p>
              <ul className="exp-bullets">
                {description.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
              <div className="tech-stack">
                {techStack.map((tech, index) => (
                  <li key={index}>{tech}</li>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceSection;
