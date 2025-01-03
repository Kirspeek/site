import { animated, useSpring } from '@react-spring/web';
import { useState } from 'react';

const RunningText = () => {
  const [key, setKey] = useState(1);

  const scrolling = useSpring({
    from: { transform: 'translate(60%,0)' },
    to: { transform: 'translate(-60%,0)' },
    config: { duration: 2000 },
    reset: true,
    //reverse: key % 2 == 0,
    onRest: () => {
      setKey(key + 1);
    },
  });

  return (
    <div key={key}>
      <animated.div style={scrolling}>
        I craft seamless user experiences
      </animated.div>
      ;
    </div>
  );
};

export default RunningText;
