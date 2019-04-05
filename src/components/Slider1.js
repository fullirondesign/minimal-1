import React, { useState, useEffect } from "react";
import changeSliderPage from "./functions/changeSliderPage";
import planetSVG from "../img/SVG/SVG/SVG/planetSVG"; // TODO:cleanup folders of svg
import classnames from "classnames";
// data
const sliderPages = ["desktop", "tablet", "mobile"];

// template TODO: content rendering
const page = flag => (
  <>
    
      <div className="promotion-container-inner-image">
        <div className="circle" />
        <div className="circle" />
        <div className="circle" />
        {flag === "mobile" && <img width="auto" src="..\icons\iphone.png" alt="mobile" />}
        {flag === "tablet" && (
          <img width="auto" src="..\img\tablet.png" alt="mobile" />
        )}
        {flag === "desktop" && (
          <img
            width="auto"
            height="auto"
            src="\img\SVG\white Image.svg"
            alt="pc"
          />
        )}
      
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
        <div className="promotion-text--bottom-capitalize">
          Lorem ipsum dolor sit amet...
        </div>
        <div className="promotion-text--bottom">
          <div className="promotion-text--bottom-button">
            <div className="promotion-text--bottom-button-inner-left" >
            <img className="promotion-text--bottom-button-inner-left-img" src="..\icons\shape 4.png"></img>
            </div>
            <div className="promotion-text--bottom-button-inner-right" >
            Buy now
            
            </div>
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
    // className="promotion-nav-link"
    className={classnames({ "promotion-nav-link": true }, { 'promotion-nav-link--active': sliderFlag===tag })}
    id={tag}
    onClick={e => changeSliderPage(sliderFlag, handlePromotion, tag, e)}
  >


    {tag === "mobile" && <img src="..\icons\mobile.png" alt="mobile" />}
    {tag === "tablet" && (
      <img width="50px" src="..\icons\tablet.png" alt="tablet" />
    )}
    {tag === "desktop" && (
      <img width="75px" height="auto" src="\icons\desktop.png" alt="desktop" />
    )}
    <div id={tag} className={classnames({ "arrow": true }, { 'arrow--active': sliderFlag===tag })}/>
     {/* {tag} */}
  </div>
);

const Slider1 = () => {
  const [sliderFlag, handlePromotion] = useState("mobile");

  useEffect(
    () => {
      let timer = setTimeout(() => {
        if (sliderFlag === "mobile") handlePromotion("desktop");
        if (sliderFlag === "desktop") handlePromotion("tablet");
        if (sliderFlag === "tablet") handlePromotion("mobile");
      }, 1000000)

      // this will clear Timeout when component unmount like in willComponentUnmount
      return () => {
        clearTimeout(timer)
      }
    },
    [sliderFlag] //useEffect will run only one time
    //if you pass a value to array, like this [data] than clearTimeout will run every time this value changes (useEffect re-run)
  )


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
