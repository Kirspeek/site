import React, { Suspense } from 'react';

const MainSlider = React.lazy(() => import('../components/MainSlider'));

function MainSection() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <MainSlider />
    </Suspense>
  );
}

export default MainSection;
