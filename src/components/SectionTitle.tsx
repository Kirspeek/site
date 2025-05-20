import { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import './SectionTitle.css';

interface Props {
  section: 'about' | 'projects' | 'experience';
}

const SectionTitle = ({ section }: Props) => {
  const { t } = useTranslation();
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('section-title-animate');
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
      <div className="section-number secondary-grey">
        {t(`${section}.sectionNumber`)}.
      </div>
      <div className="section-name header-grey">{t(`${section}.title`)}</div>
    </div>
  );
};

export default SectionTitle;
