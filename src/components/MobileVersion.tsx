import '../index.css';
import SectionTitle from './SectionTitle';
import ProjectCard from './ProjectCard';
import MyCodeComponent from './MyCodeComponent';
import ExperienceSection from './ExperienceSection';
import { MdOutlineArrowOutward } from 'react-icons/md';
import Sidebar from './Sidebar';
import NameBox from './NameBox';
import IconsRow from './IconsRow';

function MobileVersion() {
  return (
    <div className="App">
      <div className="center-text-container">
        <Sidebar />
        <NameBox />
        <IconsRow />
      </div>
      <div className="outer-container">
        <div className="inner-container">
          <p className="text">I craft seamless user experiences</p>
        </div>
      </div>
      <div className="center-text-container">
        <MyCodeComponent />
      </div>
      <div id="about" className="title-container">
        <SectionTitle sectionNumber={'01'} name={'About me'} />
      </div>
      <div className="slider-container">
        <div className="panel rose">
          Creating responsive and user-centric applications with React/NextJS
          and TypeScript
        </div>
        <div className="panel rose">
          Developing APIs and backend services using Nest.js and Node.js
          ensuring seamless integration and high-performance communication
        </div>
        <div className="panel rose">
          Developing and maintaining SOAP and RESTful web services with
          expertise in database management using MongoDB and querying
        </div>
        <div className="panel rose">
          Proven ability to work independently with a proactive mindset to push
          tasks forward
        </div>
      </div>
      <div id="projects" className="title-container">
        <SectionTitle sectionNumber={'02'} name={"Things I've build"} />
      </div>
      <div className="reverse-slider-container">
        <div className="reverse-panel">
          {' '}
          <ProjectCard
            name="Little Lemon Restaurant"
            repoLink="https://github.com/Kirspeek/little-lemon-restaurant"
            description="A dynamic platform for online orders and table reservations."
            skills={['React', 'JavaScript', 'HTML', 'CSS', 'Firebase']}
          />
        </div>
        <div className="reverse-panel">
          <ProjectCard
            name="Game Hub"
            repoLink="https://github.com/Kirspeek/Game_App"
            liveLink="https://game-app-green.vercel.app/"
            description="Web app displaying a list of video games that can be filtered and sorted by multiple variables. Powered by the RAWG.io API."
            skills={['React', 'TypeScript', 'HTML', 'CSS', 'Chakra UI']}
          />
        </div>
        <div className="reverse-panel">
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
          />
        </div>
      </div>
      <div id="experience" className="title-container">
        <SectionTitle sectionNumber={'03'} name={"Where I've worked"} />
      </div>
      <div className="lastContainer">
        <ExperienceSection />
      </div>
      <div className="to-top-container">
        <button
          className="to-top-button"
          onClick={() => {
            const scrollToTop = () => {
              const currentScroll = window.scrollY;
              if (currentScroll > 0) {
                window.scrollTo(0, currentScroll - 70);
                requestAnimationFrame(scrollToTop);
              }
            };
            scrollToTop();
          }}
        >
          To top
          <span className="arrow-icon">
            <MdOutlineArrowOutward />
          </span>
        </button>
      </div>
    </div>
  );
}

export default MobileVersion;
