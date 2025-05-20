import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './ExperienceSection.css';
import IconExternal from './icons/IconExternal';

type JobKey = 'divergent' | 'codeAcademy' | 'buildeezy';

const ExperienceSection: React.FC = () => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState<JobKey>('buildeezy');

  const handleTabChange = (tab: JobKey) => {
    setActiveTab(tab);
  };

  const activeJob = t(`experience.jobs.${activeTab}`, {
    returnObjects: true,
  }) as {
    name: string;
    role: string;
    duration: string;
    description: string[];
    techStack: string[];
    website?: string;
  };

  return (
    <div id="experience" className="experience-section">
      <div className="section-wrapper">
        <div className="tabs-container">
          <div className="tabs-trigger-container">
            <button
              className={`tabs-trigger ${activeTab === 'buildeezy' ? 'active' : ''}`}
              onClick={() => handleTabChange('buildeezy')}
            >
              {t('experience.jobs.buildeezy.name')}
            </button>
            <button
              className={`tabs-trigger ${activeTab === 'divergent' ? 'active' : ''}`}
              onClick={() => handleTabChange('divergent')}
            >
              {t('experience.jobs.divergent.name')}
            </button>
            <button
              className={`tabs-trigger ${activeTab === 'codeAcademy' ? 'active' : ''}`}
              onClick={() => handleTabChange('codeAcademy')}
            >
              {t('experience.jobs.codeAcademy.name')}
            </button>
          </div>
          <div
            className="tabs-content-container"
            style={{ position: 'relative' }}
          >
            {activeJob.website && (
              <a
                href={activeJob.website}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: '#4b2d8f',
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  fontSize: '2.5rem',
                  transition: 'color 0.2s',
                  position: 'absolute',
                  top: '1.2rem',
                  right: '2rem',
                  zIndex: 2,
                }}
                aria-label={`${activeJob.name} Website`}
                onMouseOver={(e) => (e.currentTarget.style.color = '#7c4dff')}
                onMouseOut={(e) => (e.currentTarget.style.color = '#4b2d8f')}
              >
                <IconExternal />
              </a>
            )}
            <div className="tabs-content">
              <h3 className="exp-title">{activeJob.role}</h3>
              <p className="exp-date">{activeJob.duration}</p>
              <ul className="exp-bullets">
                {activeTab === 'buildeezy'
                  ? activeJob.description.map((item, index) => {
                      const lower = item.toLowerCase();
                      const noArrow =
                        index === 0 ||
                        (lower.includes('features') &&
                          lower.includes('working on'));
                      return (
                        <li
                          key={index}
                          style={
                            noArrow
                              ? {
                                  listStyle: 'none',
                                  paddingLeft: 0,
                                  position: 'static',
                                }
                              : {}
                          }
                        >
                          {item}
                        </li>
                      );
                    })
                  : activeJob.description.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
              </ul>
              <div className="tech-stack">
                {activeJob.techStack.map((tech, index) => (
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
