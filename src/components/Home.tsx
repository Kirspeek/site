import { useEffect } from 'react';
import IconsRow from './IconsRow';
import Sidebar from './Sidebar';
import NameBox from './NameBox';
import SmallText from './SmallText';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

function Home() {
  const { ref: homeLeftRef, isIntersecting } = useIntersectionObserver({
    threshold: 0.1,
  });

  useEffect(() => {
    const textElement = document.getElementById('animatedText');
    if (textElement) {
      setTimeout(() => {
        textElement.classList.add('home-text-animate');
      }, 1000);
    } else {
      console.error("Element with id 'animatedText' not found.");
    }
  }, []);

  return (
    <div
      id="home"
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        minHeight: '100vh',
        position: 'relative',
        margin: '0 auto',
        padding: 0,
        width: '100%',
        boxSizing: 'border-box',
      }}
    >
      <IconsRow />
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
          boxSizing: 'border-box',
        }}
      >
        <SmallText />
        <Sidebar />
      </div>
      <div ref={homeLeftRef} style={{ width: '100%' }}>
        <NameBox />
      </div>
    </div>
  );
}

export default Home;
