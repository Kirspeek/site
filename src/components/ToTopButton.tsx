import React from 'react';
import { MdOutlineArrowOutward } from 'react-icons/md';

interface ToTopButtonProps {
  className?: string;
}

const ToTopButton: React.FC<ToTopButtonProps> = ({ className }) => {
  const scrollToTop = () => {
    const currentScroll = window.scrollY;
    if (currentScroll > 0) {
      window.scrollTo(0, currentScroll - 70);
      requestAnimationFrame(scrollToTop);
    }
  };

  return (
    <div className={`to-top-button ${className || ''}`}>
      <button className="to-top-button" onClick={scrollToTop}>
        To top
        <span className="arrow-icon">
          <MdOutlineArrowOutward />
        </span>
      </button>
    </div>
  );
};

export default ToTopButton;
