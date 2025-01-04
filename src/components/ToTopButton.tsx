import React, { useState } from 'react';
import { MdOutlineArrowOutward } from 'react-icons/md';
import './Home.css';

const ToTopButton: React.FC = () => {
  const [isScrolling, setIsScrolling] = useState(false);

  const slowScrollToTop = () => {
    if (isScrolling) return;

    setIsScrolling(true);

    const scrollToTarget = () => {
      const currentScroll = window.scrollY;

      if (currentScroll > 10) {
        window.scrollTo(0, currentScroll - currentScroll / 10);
        requestAnimationFrame(scrollToTarget);
      } else {
        window.scrollTo(0, 0);
        setIsScrolling(false);
      }
    };

    scrollToTarget();
  };

  return (
    <div className="to-top-button-container">
      <button
        className={`to-top-button ${isScrolling ? 'disabled' : ''}`}
        onClick={slowScrollToTop}
        disabled={isScrolling}
      >
        To top
        <span className="arrow-icon">
          <MdOutlineArrowOutward />
        </span>
      </button>
    </div>
  );
};

export default ToTopButton;
