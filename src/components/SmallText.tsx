import React from 'react';
import { useTranslation } from 'react-i18next';

const SmallText: React.FC = () => {
  const { t } = useTranslation();

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
          alignItems: 'flex-start',
          width: '100%',
          marginBottom: '0.5rem',
        }}
      >
        <div style={{ flex: 1, textAlign: 'left' }}>
          <span
            style={{
              fontFamily: 'Space Mono, monospace',
              fontSize: '1rem',
              color: '#B3B3B3',
              lineHeight: 1,
            }}
          >
            {t('smallText.left')}
          </span>
        </div>
        <div style={{ flex: 1, textAlign: 'center' }}>
          <span
            style={{
              fontFamily: 'Space Mono, monospace',
              fontSize: '1rem',
              color: '#B3B3B3',
              lineHeight: 1,
            }}
            dangerouslySetInnerHTML={{ __html: t('smallText.center') }}
          />
        </div>
        <div style={{ flex: 1, textAlign: 'right' }}>
          <span
            style={{
              fontFamily: 'Space Mono, monospace',
              fontSize: '1rem',
              color: '#B3B3B3',
              lineHeight: 1,
            }}
            dangerouslySetInnerHTML={{
              __html: t('smallText.right') + '<br />' + t('common.copyright'),
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default SmallText;
