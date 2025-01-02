import { useEffect, useRef } from 'react';
import './SectionTitle.css';

interface Props {
  sectionNumber: string;
  name: string;
}

const SectionTitle = ({ sectionNumber, name }: Props) => {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div ref={sectionRef} className="name-section">
      <div className="section-number">{sectionNumber}.</div>
      <div className="section-name">{name}</div>
    </div>
  );
};

export default SectionTitle;
