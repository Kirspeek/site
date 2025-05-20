import React from 'react';
import { useTranslation } from 'react-i18next';
import { MdOutlineArrowOutward } from 'react-icons/md';
import { useScrollToTop } from '../hooks/useScrollToTop';

const ToTopButton: React.FC = () => {
  const { t } = useTranslation();
  const { isScrolling, slowScrollToTop } = useScrollToTop();

  return (
    <div className="to-top-button-container">
      <button
        className={`to-top-button ${isScrolling ? 'disabled' : ''}`}
        onClick={slowScrollToTop}
        disabled={isScrolling}
      >
        {t('navigation.toTop')}
        <span className="arrow-icon">
          <MdOutlineArrowOutward />
        </span>
      </button>
    </div>
  );
};

export default ToTopButton;
