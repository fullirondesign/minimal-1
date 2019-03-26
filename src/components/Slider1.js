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
        {flag === "mobile" && <img src="..\icons\iphone.png" alt="mobile" />}
        {flag === "tablet" && (
          <img width="400px" src="..\img\tablet.png" alt="mobile" />
        )}
        {flag === "desktop" && (
          <img
            width="400px"
            height="auto"
            src="\img\SVG\white Image.svg"
            alt="pc"
          />
        )}
      </div>
    </div>
    <div className="promotion-text">
      {/* {flag} */}
      <div className="promotion-text--top">
        {planetSVG()}
        <div className="promotion-text--top-rewardText">
          app of <br />the year
        </div>
      </div>

      <div className="promotion-text--bottom">
        <div className="promotion-text--bottom">
          my apps shoecase
        </div>
        <div className="promotion-text--bottom">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </div>
        <div className="promotion-text--bottom">
          <div className="promotion-text--bottom-button">
            <div className="promotion-text--bottom-button-inner" />
            <div className="promotion-text--bottom-button-inner" />
          </div>
        </div>
      </div>
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
    {tag === "mobile" && <img src="..\icons\mobile.png" alt="mobile" />}
    {tag === "tablet" && (
      <img width="50px" src="..\icons\tablet.png" alt="tablet" />
    )}
    {tag === "desktop" && (
      <img width="75px" height="auto" src="\icons\desktop.png" alt="desktop" />
    )}
    {/* {tag} */}
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
