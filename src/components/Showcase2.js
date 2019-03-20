import React, { useState } from "react"
import changeSliderPage from "./functions/changeSliderPage"

const sliderButton = (pageContent) => (
  <div className="promotion-container">
    <div className="promotion-container-inner">
      <div className="circle" />
      <div className="circle" />
      <div className="circle" />
      <img src="..\icons\iphone.png" alt={pageContent} />
    </div>
    {/* <vd /> */}
    <div className="promotion-container-inner promotion-text">
      {pageContent}
    </div>
  </div>)




const Slider = () => {
  const [sliderFlag, handlePromotion] = useState("1")

  return (
    <div className="section promotion promotion-2">
      <div className="promotion-2-nav">
        <div
          className="promotion-2-nav-link"
          id="1"
          onClick={e => changeSliderPage(sliderFlag, handlePromotion, "1", e)}
        >
          <img src="" alt="" />1
        </div>
        <div
          className="promotion-2-nav-link"
          id="2"
          onClick={e => changeSliderPage(sliderFlag, handlePromotion, "2", e)}
        >
          <img src="" alt="" />2
        </div>
        <div
          className="promotion-2-nav-link"
          id="3"
          onClick={e => changeSliderPage(sliderFlag, handlePromotion, "3", e)}
        >
          <img src="" alt="" />3
        </div>
        <div
          className="promotion-2-nav-link"
          id="4"
          onClick={e => changeSliderPage(sliderFlag, handlePromotion, "4", e)}
        >
          <img src="" alt="" />4
        </div>
        <div
          className="promotion-2-nav-link"
          id="5"
          onClick={e => changeSliderPage(sliderFlag, handlePromotion, "5", e)}
        >
          <img src="" alt="" />5
        </div>
        <div
          className="promotion-2-nav-link"
          id="6"
          onClick={e => changeSliderPage(sliderFlag, handlePromotion, "6", e)}
        >
          <img src="" alt="" />6
        </div>
      </div>

      <div>
        {(sliderFlag === "1" || "2" || "3" || "4" || "5" || "6") && sliderButton(sliderFlag)}
      </div>
    </div>
  );
};

export default Slider;
