import React from 'react';
import IconGitHub from './icons/IconGitHub';
import IconLinkedin from './icons/IconLinkedin';
import IconGmail from './icons/IconGmail';

const iconStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: 40,
  height: 40,
  color: 'rgb(80, 80, 80)',
  textDecoration: 'none',
  borderRadius: '50%',
  background: 'none',
  fontSize: 28,
  transition: 'background 0.2s, color 0.2s, box-shadow 0.2s',
};

const IconsRow: React.FC = () => (
  <div
    style={{
      position: 'fixed',
      bottom: '4rem',
      right: '2rem',
      zIndex: 1000,
      display: 'flex',
      flexDirection: 'column',
      gap: '1.2rem',
      alignItems: 'center',
      background: 'none',
      boxShadow: 'none',
      border: 'none',
      padding: 0,
      minHeight: 140,
    }}
  >
    <a
      href="https://github.com/Kirspeek"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="GitHub"
      style={iconStyle}
    >
      <IconGitHub />
    </a>
    <a
      href="https://www.linkedin.com/in/irynacherepenko/"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="LinkedIn"
      style={iconStyle}
    >
      <IconLinkedin />
    </a>
    <a
      href="mailto:cherepenko.iryna@gmail.com"
      aria-label="Gmail"
      style={iconStyle}
    >
      <IconGmail />
    </a>
  </div>
);

export default IconsRow;
