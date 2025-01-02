import { forwardRef } from 'react';
import IconExternal from './icons/IconExternal';
import IconGitHub from './icons/IconGitHub';
import './ProjectCard.css';

interface Props {
  name: string;
  repoLink: string;
  liveLink?: string;
  description: string;
  skills: string[];
}

const imagesMap = [
  {
    name: 'Issue Tracker',
    gif: '/assets/IssueTrackerGif_20s.gif',
  },
  { name: 'Game Hub', gif: '/assets/gameHubDemoGif.gif' },
  {
    name: 'Little Lemon Restaurant',
    gif: '/assets/LittleLemonDemoGif.gif',
  },
];

const getImageByName = (name: string) => {
  const imgMap = imagesMap.find((item) => item.name === name);

  const defaultMap = {
    name: 'No Project',
    gif: '/assets/defaultGif.gif',
  };

  return imgMap || defaultMap;
};

const ProjectCard = forwardRef<HTMLDivElement, Props>(
  ({ name, repoLink, liveLink, description, skills }, ref) => {
    const projectImages = getImageByName(name);

    const handleCardClick = () => {
      const url = liveLink || repoLink;
      if (url) {
        window.open(url, '_blank', 'noopener,noreferrer');
      }
    };

    return (
      <div ref={ref} className="project-card" onClick={handleCardClick}>
        <div className="project-header">
          <h3 className="project-title">{name}</h3>
          <div className="icons">
            <a
              href={repoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="icon-link"
              onClick={(e) => e.stopPropagation()}
            >
              <IconGitHub />
            </a>
            {liveLink && (
              <a
                href={liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="icon-link"
                onClick={(e) => e.stopPropagation()}
              >
                <IconExternal />
              </a>
            )}
          </div>
        </div>
        <p className="project-desc">{description}</p>
        <div className="tech-stack">
          {skills.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </div>
        <div className="image-wrapper-container">
          <div className="image-wrapper">
            <img
              src={projectImages.gif}
              alt={`${name} Animated`}
              className="animated-image"
            />
          </div>
        </div>
      </div>
    );
  }
);

export default ProjectCard;
