import React, { useState } from "react"
import changeSliderPage from "./functions/changeSliderPage"

const Slider = () => {
  const [sliderFlag, handlePromotion] = useState("1")
  
  // const changeSliderPage = (tag, e) => {
  //   e.preventDefault()
  //   console.log(
  //     "The slider link was clicked.",
  //     `was: ${sliderFlag}, became: ${tag}`
  //   )

  //   if (sliderFlag !== tag) {
  //     console.log("change")
  //     handlePromotion(tag)
  //   } else {
  //     console.log("no-change")
  //   }
  // }

  // changeSliderPage(sliderFlag, handlePromotion, tag, e)

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
        {sliderFlag === "1" && (
          <div className="promotion-container">
            <div className="promotion-container-inner">
              <div className="circle" />
              <div className="circle" />
              <div className="circle" />
              <img src="..\icons\iphone.png" alt="" />
            </div>
            {/* <vd /> */}
            <div className="promotion-container-inner promotion-text">1</div>
          </div>
        )}
        {sliderFlag === "2" && (
          <div className="promotion-container">
            <div className="promotion-container-inner">
              <div className="circle" />
              <div className="circle" />
              <div className="circle" />
              <img src="..\icons\iphone.png" alt="" />
            </div>
            {/* <vd /> */}
            <div className="promotion-container-inner promotion-text">2</div>
          </div>
        )}
        {sliderFlag === "3" && (
          <div className="promotion-container">
            <div className="promotion-container-inner">
              <div className="circle" />
              <div className="circle" />
              <div className="circle" />
              <img src="..\icons\iphone.png" alt="" />
            </div>
            {/* <vd /> */}
            <div className="promotion-container-inner promotion-text">3</div>
          </div>
        )}
        {sliderFlag === "4" && (
          <div className="promotion-container">
            <div className="promotion-container-inner">
              <div className="circle" />
              <div className="circle" />
              <div className="circle" />
              <img src="..\icons\iphone.png" alt="" />
            </div>
            {/* <vd /> */}
            <div className="promotion-container-inner promotion-text">4</div>
          </div>
        )}
        {sliderFlag === "5" && (
          <div className="promotion-container">
            <div className="promotion-container-inner">
              <div className="circle" />
              <div className="circle" />
              <div className="circle" />
              <img src="..\icons\iphone.png" alt="" />
            </div>
            {/* <vd /> */}
            <div className="promotion-container-inner promotion-text">5</div>
          </div>
        )}
        {sliderFlag === "6" && (
          <div className="promotion-container">
            <div className="promotion-container-inner">
              <div className="circle" />
              <div className="circle" />
              <div className="circle" />
              <img src="..\icons\iphone.png" alt="" />
            </div>
            {/* <vd /> */}
            <div className="promotion-container-inner promotion-text">6</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Slider;
