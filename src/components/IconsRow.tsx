import React from 'react';
import IconGitHub from './icons/IconGitHub';
import IconLinkedin from './icons/IconLinkedin';
import IconGmail from './icons/IconGmail';
import './IconsRow.css';

const IconsRow: React.FC = () => {
  return (
    <div className="icon-links-container">
      <a
        href="https://github.com/Kirspeek"
        target="_blank"
        rel="noopener noreferrer"
        className="icon-link"
      >
        <IconGitHub />
      </a>
      <a
        href="https://www.linkedin.com/in/irynacherepenko/"
        target="_blank"
        rel="noopener noreferrer"
        className="icon-link"
      >
        <IconLinkedin />
      </a>
      <a href="mailto:cherepenko.iryna@gmail.com" className="icon-link">
        <IconGmail />
      </a>
    </div>
  );
};

export default IconsRow;
