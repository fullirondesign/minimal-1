import React, { useState } from "react";
import changeSliderPage from "./functions/changeSliderPage";

// data
const sliderPages = ["desktop", "tablet", "mobile"];

// template TODO: content rendering
const page = flag => (
  <div className="promotion-container">
    <div className="promotion-container-inner">
      <div className="circle" />
      <div className="circle" />
      <div className="circle" />
      <img src="..\icons\iphone.png" alt="" />
    </div>
    
    <div className="promotion-container-inner promotion-text">
      {flag}
    </div>
  </div>
);

const RenderSliderPage = sliderFlag => (
  <>
    {sliderFlag === "desktop" && page("desktop")}
    {sliderFlag === "tablet" && page("tablet")}
    {sliderFlag === "mobile" && page("mobile")}
  </>
);

const buttonToChangeSliderPage = (sliderFlag, handlePromotion, tag) => (
  <div
    className="promotion-nav-link"
    id={sliderFlag}
    onClick={e => changeSliderPage(sliderFlag, handlePromotion, tag, e)}
  >
    <img src="" alt={''} />
    {tag}
  </div>
);

const Slider1 = () => {
  const [sliderFlag, handlePromotion] = useState("desktop");
  return (
    <div className="section promotion">
      <div className="promotion-nav">
        {sliderPages.map(page =>
          buttonToChangeSliderPage(sliderFlag, handlePromotion, page)
        )}
      </div>
      {sliderPages.includes(sliderFlag) && RenderSliderPage(sliderFlag)}
    </div>
  );
};

export default Slider1;
