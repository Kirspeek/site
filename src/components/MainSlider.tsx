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

function MainSlider() {
  const aboutSliderRef = useRef<HTMLDivElement>(null);
  const projectsSliderRef = useRef<HTMLDivElement>(null);

  const [isLargeScreen, setIsLargeScreen] = useState<boolean>(
    window.innerWidth > 768
  );

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth > 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const aboutPanels = [
    'Creating responsive and user-centric applications with React/NextJS and TypeScript',
    'Developing APIs and backend services using Nest.js and Node.js ensuring seamless integration and high-performance communication',
    'Developing and maintaining SOAP and RESTful web services with expertise in database management using MongoDB and querying',
    'Proven ability to work independently with a proactive mindset to push tasks forward',
  ];

  const projectPanels = [
    <ProjectCard
      name="Little Lemon Restaurant"
      repoLink="https://github.com/Kirspeek/little-lemon-restaurant"
      description="A dynamic platform for online orders and table reservations."
      skills={['React', 'JavaScript', 'HTML', 'CSS', 'Firebase']}
    />,
    <ProjectCard
      name="Game Hub"
      repoLink="https://github.com/Kirspeek/Game_App"
      liveLink="https://game-app-green.vercel.app/"
      description="Web app displaying a list of video games that can be filtered and sorted by multiple variables. Powered by the RAWG.io API."
      skills={['React', 'TypeScript', 'HTML', 'CSS', 'Chakra UI']}
    />,
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
  ];

  // Mobile Version Component
  const renderMobileVersion = () => (
    <div className="App">
      <div id="start" className="center-container">
        <Sidebar />
        <NameBox />
        <IconsRow />
      </div>
      <div id="mobile" className="center-container">
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
        <div key={index} className="panel">
          {panel}
        </div>
      ))}

      <div id="experience" className="title-container">
        <SectionTitle sectionNumber="03" name="Where I've worked" />
      </div>
      <div className="center-container">
        <ExperienceSection />
      </div>
      <div id="mobile" className="center-container">
        <div className="inner-container">
          <Marquee className="marquee-container">
            <div className="textbox">
              Young professional Currently working as a fullstack developer
              Based in Italy, Europe Originally from Ukraine © 2025
            </div>
          </Marquee>
        </div>
      </div>
      <ToTopButton />
    </div>
  );

  // Large Screen Version
  const renderLargeScreenVersion = () => (
    <div className="App">
      <div className="center-container">
        <Home />
      </div>
      <div className="center-container">
        <MyCodeComponent />
      </div>
      <div id="about" className="title-container">
        <SectionTitle sectionNumber="01" name="About me" />
      </div>
      <ReusableSlider
        ref={aboutSliderRef}
        panels={aboutPanels}
        className="rose"
      />
      <div id="projects" className="title-container">
        <SectionTitle sectionNumber="02" name="Things I've built" />
      </div>
      <ReusableSlider ref={projectsSliderRef} panels={projectPanels} />
      <div id="experience" className="title-container">
        <SectionTitle sectionNumber="03" name="Where I've worked" />
      </div>
      <div className="center-container">
        <ExperienceSection />
      </div>
      <ToTopButton />
    </div>
  );

  return isLargeScreen ? renderLargeScreenVersion() : renderMobileVersion();
}

export default MainSlider;
