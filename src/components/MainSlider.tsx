import { useRef, useState, useEffect } from 'react';
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

function MainSlider() {
  const aboutSliderRef = useRef<HTMLDivElement>(null);
  const projectsSliderRef = useRef<HTMLDivElement>(null);

  const [isLargeScreen, setIsLargeScreen] = useState<boolean>(
    window.innerWidth > 1400
  );

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth > 1400);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const aboutPanels = [
    'responsive and user-centric applications with React/NextJS and TypeScript',
    'Developing APIs and backend services using Nest.js and Node.js',
    'ensuring seamless integration and high-performance communication',
    'Developing and maintaining SOAP and RESTful web services',
    'database management using MongoDB and querying',
    'Proven ability to work independently to push tasks forward',
  ];
  const LargeAboutPanels = [
    'Crafting responsive, user-focused web applications using React/Next.js and TypeScript <br/> Delivering intuitive and engaging interfaces optimized for performance',
    'Building robust APIs and backend services with Nest.js and Node.js <br/> ensuring seamless integration, secure communication, and high performance for scalable applications',
    'Maintaining reliable SOAP and RESTful web services, managing databases with MongoDB, and leveraging effective querying techniques </br> Proven ability to work independently to drive projects forward',
  ];

  const projectPanels = [
    <ProjectCard
      name="Issue Tracker"
      repoLink="https://github.com/Kirspeek/issue-tracker"
      description="Web application designed to help teams manage and track issues with categorized charts."
      skills={[
        'Next.js',
        'React',
        'TypeScript',
        'HTML',
        'Tailwind CSS',
        'Radix UI',
        'MySQL',
        'Prisma',
        'NextAuth.js',
      ]}
    />,
    <ProjectCard
      name="Game Hub"
      repoLink="https://github.com/Kirspeek/Game_App"
      liveLink="https://game-app-green.vercel.app/"
      description="Web app displaying a list of video games that can be filtered and sorted by multiple variables. Powered by the RAWG.io API."
      skills={['React', 'TypeScript', 'HTML', 'CSS', 'Chakra UI']}
    />,
    <ProjectCard
      name="Little Lemon Restaurant"
      repoLink="https://github.com/Kirspeek/little-lemon-restaurant"
      description="A dynamic platform for online orders and table reservations."
      skills={['React', 'JavaScript', 'HTML', 'CSS', 'Firebase']}
    />,
  ];
  const texts = Array(10).fill(
    <span
      style={{ display: 'inline-flex', alignItems: 'center', gap: '0.3rem' }}
    >
      kirspeek.dev
      <img
        src="/assets/26.png"
        alt="Icon"
        style={{ width: '24px', height: '24px' }}
      />
      2025 professional portfolio
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
            Contact Me <GoArrowDownRight />
          </div>
          <IconsRow />
        </div>
      </div>
      <div id="mobile" className="title-container">
        <div className="inner-container">
          <Marquee className="marquee-container">
            <p className="text">I craft seamless user experiences</p>
          </Marquee>
        </div>
      </div>
      <div className="center-container">
        <MyCodeComponent />
      </div>
      <div id="about" className="title-container">
        <SectionTitle sectionNumber="01" name="About me" />
      </div>
      {aboutPanels.map((panel, index) => (
        <div key={index} className="panel rose">
          {panel}
        </div>
      ))}
      <div id="projects" className="title-container">
        <SectionTitle sectionNumber="02" name="Things I've built" />
      </div>
      {projectPanels.map((panel, index) => (
        <div key={index} className="panel cards">
          {panel}
        </div>
      ))}
      <div id="experience" className="title-container">
        <SectionTitle sectionNumber="03" name="Where I've worked" />
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
            <p className="text">I craft seamless user experiences</p>
          </Marquee>
        </div>
      </div>
      <div className="center-container">
        <MyCodeComponent />
      </div>
      <div id="about" className="title-container">
        <SectionTitle sectionNumber="01" name="About me" />
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
        <SectionTitle sectionNumber="02" name="Things I've built" />
      </div>
      <ReusableSlider
        className="cards-container"
        panelClassName="panel"
        ref={projectsSliderRef}
        panels={projectPanels}
      />
      <div id="experience" className="title-container">
        <SectionTitle sectionNumber="03" name="Where I've worked" />
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
