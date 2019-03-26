import React, { useState } from "react";
import changeSliderPage from "./functions/changeSliderPage";
import planetSVG from "../img/SVG/SVG/SVG/planetSVG"; // TODO:cleanup folders of svg

// data
const sliderPages = ["desktop", "tablet", "mobile"];

// template TODO: content rendering
const page = flag => (
  <>
    <div className="promotion-image">
      <div className="promotion-container-inner-image">
        <div className="circle" />
        <div className="circle" />
        <div className="circle" />
        {flag === "mobile" && <img src="..\icons\iphone.png" alt="" />}
        {flag === "tablet" && (
          <img width="200px" heigh="auto" src="..\img\svg\apple.svg" alt="" />
        )}
        {flag === "desktop" && (
          <img
            width="200px"
            height="auto"
            src="\img\SVG\white Image.svg"
            alt=""
          />
        )}
      </div>
    </div>
    <div className="promotion-text">
      {/* {flag} */}
      <div className="promotion-container-text--top">
        {planetSVG()}
        <div className="promotion-container-text--top-rewardText">
          app of the year
        </div>
      </div>

      <div className="promotion-container-inner-text--bottom" />
    </div>
  </>
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
    <img src="" alt={""} />
    {tag}
  </div>
);

const Slider1 = () => {
  const [sliderFlag, handlePromotion] = useState("mobile");
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
