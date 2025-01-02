import React from 'react';
import './Home.css';

const SmallText: React.FC = () => {
  return (
    <>
      <div className="flexible-texts">
        <div className="text-container left">
          <span className="small-text">Young professional </span>
        </div>
        <div className="text-container center">
          <span className="small-text">
            Currently working as a<br /> fullstack developer
          </span>
        </div>
        <div className="text-container right">
          <span className="small-text">
            Based in Italy, Europe <br /> originally from Ukraine
            <br /> © 2025
          </span>
        </div>
      </div>{' '}
    </>
  );
};

export default SmallText;
