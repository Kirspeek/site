import React from 'react';
import { useTranslation } from 'react-i18next';
import IconsRow from './IconsRow';

const NameBox: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        gap: '1rem',
        width: '100%',
        height: '100%',
        minHeight: '60vh',
        boxSizing: 'border-box',
        paddingLeft: '2rem',
      }}
    >
      <h1
        style={{
          fontFamily: 'Space Mono, monospace',
          fontWeight: 600,
          textTransform: 'uppercase',
          textAlign: 'left',
          color: '#808080',
          fontSize: 'clamp(3rem, 9vw, 12rem)',
          lineHeight: 'clamp(2.5rem, 6vw, 7rem)',
          letterSpacing: '3px',
          padding: '10rem 0',
          margin: 0,
        }}
      >
        {t('home.name')}
      </h1>
      <IconsRow />
      <h2
        style={{
          fontSize: 'clamp(2rem, 6vw, 5rem)',
          fontWeight: 'bold',
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          margin: 0,
          color: 'rgb(255, 0, 0)',
          textAlign: 'left',
        }}
      >
        {t('home.title')}
      </h2>
      <div
        style={{
          fontSize: 'clamp(1.2rem, 3vw, 2.8rem)',
          marginTop: '1rem',
          textTransform: 'uppercase',
          letterSpacing: '0.05em',
          color: '#808080',
          textAlign: 'left',
        }}
      >
        specialized in building exceptional digital platforms.
      </div>
    </div>
  );
};

export default NameBox;
