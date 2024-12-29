import React, { useEffect, useRef, useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import {
  coldarkCold,
  ghcolors,
  materialLight,
  synthwave84,
  vscDarkPlus,
} from "react-syntax-highlighter/dist/esm/styles/prism";
import "./MyCodeComponent.css";
import { githubGist } from "react-syntax-highlighter/dist/esm/styles/hljs";

const codeString = `
const developer = {
  fullName: "Iryna Cherepenko",
  skills: [
    "React",
    "JavaScript",
    "TypeScript",
    "Next.js",
    "HTML & CSS",
    "Nest.js",
    "Node",
    "MongoDB",
    "SQL",
    "Git",
    "..."
  ],
  hardWorker: true,
  quickLearner: true,
  problemSolver: true,
  hireable: function () {
    return (
      this.hardWorker &&
      this.problemSolver &&
      this.skills.length >= 5
    );
  },
};
`;

const MyCodeComponent: React.FC = () => {
  const [typedCode, setTypedCode] = useState<string>("");
  const codeTabRef = useRef(null);

  useEffect(() => {
    let cursorPosition = 0;
    const typeSpeed = 100;

    const type = () => {
      if (cursorPosition < codeString.length) {
        setTypedCode(codeString.substring(0, cursorPosition + 1));
        cursorPosition += 1;
        setTimeout(type, typeSpeed);
      }
    };

    type();

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

    if (codeTabRef.current) {
      observer.observe(codeTabRef.current);
    }

    return () => {
      if (codeTabRef.current) {
        observer.unobserve(codeTabRef.current);
      }
      setTypedCode("");
    };
  }, []);

  return (
    <div ref={codeTabRef} className="code-tab">
      <div className="tab-header">
        <span className="dot red"></span>
        <span className="dot yellow"></span>
        <span className="dot green"></span>
      </div>
      <div className="code-container">
        <SyntaxHighlighter
          language="typescript"
          style={{
            ...coldarkCold,
            'pre[class*="language-"]': {
              ...materialLight['pre[class*="language-"]'],

              fontSize: "15px",
              lineHeight: "1.2",
            },
          }}
        >
          {typedCode}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};

export default MyCodeComponent;
