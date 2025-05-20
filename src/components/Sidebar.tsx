import React from 'react';
import { MdOutlineArrowOutward } from 'react-icons/md';
import { useScrollToSection } from '../hooks/useScrollToSection';

const Sidebar: React.FC = () => {
  const sections = [
    { name: 'about', label: 'About' },
    { name: 'projects', label: 'Projects' },
    { name: 'experience', label: 'Experience' },
  ];

  const { activeButton, setActiveButton, slowScrollToSection } =
    useScrollToSection();

  return (
    <div
      style={{
        width: '100%',
        maxWidth: '1600px',
        margin: '0 auto',
        boxSizing: 'border-box',
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '100%',
          gap: '0',
        }}
      >
        {sections.map((section, index) => (
          <div
            key={section.name}
            style={{
              flex: 1,
              textAlign:
                index === 0 ? 'left' : index === 1 ? 'center' : 'right',
            }}
          >
            <button
              style={{
                background: activeButton === section.name ? '#f8f8f8' : 'white',
                border: 'none',
                borderRadius: '4px',

                cursor:
                  activeButton === section.name ? 'not-allowed' : 'pointer',
                fontWeight: 700,
                fontSize: '1.05rem',
                letterSpacing: '0.05em',
                color: '#808080',
                outline: 'none',
                transition: 'background 0.2s, color 0.2s',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                opacity: activeButton === section.name ? 0.7 : 1,
                boxShadow:
                  activeButton === section.name
                    ? '0 2px 8px rgba(0,0,0,0.04)'
                    : 'none',
                width: 'auto',
                textAlign: 'inherit',
                paddingLeft: index === 0 ? 0 : undefined,
                paddingRight: index === sections.length - 1 ? 0 : undefined,
              }}
              onClick={() => {
                if (activeButton !== section.name) {
                  setActiveButton(section.name);
                  slowScrollToSection(section.name);
                }
              }}
              disabled={activeButton === section.name}
            >
              <span
                style={{
                  fontWeight: 700,
                  fontSize: '1.05rem',
                  letterSpacing: '0.05em',
                  color: 'inherit',
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                {section.label}
                <span
                  style={{
                    marginLeft: 4,
                    fontWeight: 400,
                    fontSize: '0.9em',
                    color: '#808080',
                  }}
                >
                  <MdOutlineArrowOutward />
                </span>
              </span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
