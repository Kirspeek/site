import { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import '../index.css';
import Home from './Home';
import SectionTitle from './SectionTitle';
import ProjectCard from './ProjectCard';
import MyCodeComponent from './MyCodeComponent';
import ExperienceSection from './ExperienceSection';
import ToTopButton from './ToTopButton';
import ReusableSlider from './ReusableSlider';
import Sidebar from './Sidebar';
import NameBox from './NameBox';
import IconsRow from './IconsRow';
import Marquee from 'react-fast-marquee';
import { GoArrowDownRight } from 'react-icons/go';
import { useScreenSize } from '../hooks/useScreenSize';

function MainSlider() {
  const { t } = useTranslation();
  const aboutSliderRef = useRef<HTMLDivElement>(null);
  const projectsSliderRef = useRef<HTMLDivElement>(null);
  const isLargeScreen = useScreenSize({ breakpoint: 1400, debounceTime: 100 });

  const aboutPanels = t('about.panels', { returnObjects: true }) as string[];
  const LargeAboutPanels = t('about.largePanels', {
    returnObjects: true,
  }) as string[];

  const projectPanels = (
    t('projects.projects', { returnObjects: true }) as any[]
  ).map((project) => (
    <ProjectCard
      name={project.name}
      repoLink={project.repoLink}
      liveLink={project.liveLink}
      description={project.description}
      skills={project.skills}
    />
  ));

  const texts = Array(10).fill(
    <span
      style={{ display: 'inline-flex', alignItems: 'center', gap: '0.3rem' }}
    >
      {t('common.domain')}
      <img
        src="/assets/26.png"
        alt="Icon"
        style={{ width: '24px', height: '24px' }}
      />
      {t('common.portfolio')}
    </span>
  );

  // Mobile Version Component
  const renderMobileVersion = () => (
    <div className="App">
      <div id="start" className="center-container">
        <Sidebar />
        <NameBox /> <div className="line"></div>
        <div className="contact-me">
          <div className="contact-me-text">
            {t('home.contact')} <GoArrowDownRight />
          </div>
          <IconsRow />
        </div>
      </div>
      <div id="mobile" className="title-container">
        <div className="inner-container">
          <Marquee className="marquee-container">
            <p className="text">{t('home.tagline')}</p>
          </Marquee>
        </div>
      </div>
      <div className="center-container">
        <MyCodeComponent />
      </div>
      <div id="about" className="title-container">
        <SectionTitle section="about" />
      </div>
      {aboutPanels.map((panel, index) => (
        <div key={index} className="panel rose">
          {panel}
        </div>
      ))}
      <div id="projects" className="title-container">
        <SectionTitle section="projects" />
      </div>
      {projectPanels.map((panel, index) => (
        <div key={index} className="panel cards">
          {panel}
        </div>
      ))}
      <div id="experience" className="title-container">
        <SectionTitle section="experience" />
      </div>
      <div className="center-container">
        <ExperienceSection />
      </div>{' '}
      <ToTopButton />
      <div className="last-container">
        <div className="inner-container">
          <Marquee className="marquee-container">
            {texts.map((text, index) => (
              <p key={index} className="textbox">
                {text}
              </p>
            ))}
          </Marquee>
        </div>
      </div>
    </div>
  );

  // Large Screen Version
  const renderLargeScreenVersion = () => (
    <div className="App">
      <div className="center-container">
        <Home />
      </div>
      <div className="title-container">
        <div className="inner-container">
          <Marquee className="marquee-container">
            <p className="text">{t('home.tagline')}</p>
          </Marquee>
        </div>
      </div>
      <div className="center-container">
        <MyCodeComponent />
      </div>
      <div id="about" className="title-container">
        <SectionTitle section="about" />
      </div>
      <ReusableSlider
        ref={aboutSliderRef}
        panels={LargeAboutPanels.map((panel, index) => (
          <div key={index} dangerouslySetInnerHTML={{ __html: panel }} />
        ))}
        className="rose-container"
        panelClassName="rose"
      />
      <div id="projects" className="title-container">
        <SectionTitle section="projects" />
      </div>
      <ReusableSlider
        className="cards-container"
        panelClassName="panel"
        ref={projectsSliderRef}
        panels={projectPanels}
      />
      <div id="experience" className="title-container">
        <SectionTitle section="experience" />
      </div>
      <div className="center-container">
        <ExperienceSection />
      </div>{' '}
      <ToTopButton />
      <div className="title-container">
        <div className="inner-container">
          <Marquee className="marquee-container">
            {texts.map((text, index) => (
              <p key={index} className="textbox">
                {text}
              </p>
            ))}
          </Marquee>
        </div>
      </div>
    </div>
  );

  return isLargeScreen ? renderLargeScreenVersion() : renderMobileVersion();
}

export default MainSlider;
