import React, { useState } from "react"
import changeSliderPage from "./functions/changeSliderPage"

const SliderPage = (sliderFlag) => (
  <div className="promotion-container">
    <div className="promotion-container-inner">
      <div className="circle" />
      <div className="circle" />
      <div className="circle" />
      <img src="..\icons\iphone.png" alt={sliderFlag} />
    </div>
    {/* <vd /> */}
    <div className="promotion-container-inner promotion-text">
      {sliderFlag}
    </div>
  </div>)

const button = (sliderFlag, handlePromotion, tag) => (
  <div
    className="promotion-2-nav-link"
    id={tag}
    onClick={e => changeSliderPage(sliderFlag, handlePromotion, tag, e)}
  >
    <img src="" alt="" />{tag}
  </div>
)


const sliderPages = [
  '1', '2', '3', '4', '5', '6',
]

const Slider = () => {
  const [sliderFlag, handlePromotion] = useState("1")

  return (
    <div className="section promotion promotion-2">
      <div className="promotion-2-nav">
        {sliderPages.map(page =>
          button(sliderFlag, handlePromotion, page)
        )}
      </div>
      <div>
        {(sliderFlag === "1" || "2" || "3" || "4" || "5" || "6") && SliderPage(sliderFlag)}
      </div>
    </div>
  );
};

export default Slider;
