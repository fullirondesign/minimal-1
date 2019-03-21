import React, { useState } from "react";
import changeSliderPage from "./functions/changeSliderPage";

// data
const sliderPages = ["1", "2", "3", "4", "5", "6"];

// template TODO: content rendering
const page = flag => (
  <div className="promotion-container">
    <div className="promotion-container-inner">
      <div className="circle" />
    </div>
    <div className="promotion-container-inner promotion-text">
      {flag}
    </div>
  </div>
);

// conditional rendering of the sliderPage
const RenderSliderPage = sliderFlag => (
  <>
    {sliderFlag === "1" && page(1)}
    {sliderFlag === "2" && page(2)}
    {sliderFlag === "3" && page(3)}
    {sliderFlag === "4" && page(4)}
    {sliderFlag === "5" && page(5)}
    {sliderFlag === "6" && page(6)}
  </>
);

const buttonToChangeSliderPage = (sliderFlag, handlePromotion, tag) => (
  <div
    className="promotion-2-nav-link"
    id={tag}
    onClick={e => changeSliderPage(sliderFlag, handlePromotion, tag, e)}
  >
    <img src="" alt={""} />
    {tag}
  </div>
);

const Slider = () => {
  const [sliderFlag, handlePromotion] = useState("1");
  return (
    <div className="section promotion promotion-2">
      <div className="promotion-2-nav">
        {sliderPages.map(page =>
          buttonToChangeSliderPage(sliderFlag, handlePromotion, page)
        )}
      </div>
      {sliderPages.includes(sliderFlag) && RenderSliderPage(sliderFlag)}
    </div>
  );
};

export default Slider;
