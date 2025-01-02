import React, { useRef } from 'react';
import './Home.css';

const NameBox: React.FC = () => {
  const homeLeftRef = useRef<HTMLDivElement | null>(null);

  return (
    <div className="namebox">
      <div className="top-banner">
        <p className="name-text">Iryna Cherepenko</p>
      </div>
      <div ref={homeLeftRef} className="home-left">
        <div id="animatedText" className="d-parag">
          <a
            className="one"
            href="https://github.com/Kirspeek"
            target="_blank"
            rel="noopener noreferrer"
          >
            software engineer
          </a>{' '}
          specializing in building exceptional digital platforms.
        </div>
      </div>
    </div>
  );
};

export default NameBox;
