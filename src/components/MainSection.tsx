import MainSlider from "./MainSlider";
import "../index.css";
import { Suspense } from "react";

function MainSection() {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <MainSlider />
      </Suspense>
    </>
  );
}

export default MainSection;
