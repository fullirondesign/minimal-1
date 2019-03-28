import React, { useState, useEffect } from "react";
import changeSliderPage from "./functions/changeSliderPage";
import planetSVG from "../img/SVG/SVG/SVG/planetSVG"; // TODO:cleanup folders of svg
import classnames from "classnames";
// data
const sliderPages = ["1", "2", "3","4", "5", "6"];

// template TODO: content rendering
const page = flag => (
  <>
    <div className="promotion2-image">
      <div className="promotion2-container-inner-image">
        <div className="circle" />
        <div className="circle" />
        <div className="circle" />

        {flag === "1" && <img src="..\icons\iphone.png" alt="mobile" />}
        {flag === "2" && (
          <img width="400px" src="..\img\tablet.png" alt="mobile" />
        )}
        {flag === "3" && (
          <img
            width="400px"
            height="auto"
            src="\img\SVG\white Image.svg"
            alt="pc"
          />
        )}

        {flag === "4" && <img src="..\icons\iphone.png" alt="mobile" />}
        {flag === "5" && (
          <img width="400px" src="..\img\tablet.png" alt="mobile" />
        )}
        {flag === "6" && (
          <img
            width="400px"
            height="auto"
            src="\img\SVG\white Image.svg"
            alt="pc"
          />
        )}
      </div>
    </div>
    <div className="promotion2-text">
      {/* {flag} */}
      <div className="promotion2-text--top">
        {planetSVG()}
        <div className="promotion2-text--top-rewardText">
          app of <br />the year
        </div>
      </div>

      <div className="promotion2-text--bottom">
        <div className="promotion2-text--bottom">
          my apps shoecase
        </div>
        <div className="promotion2-text--bottom-capitalize">
          Lorem ipsum dolor sit amet...
        </div>
        <div className="promotion2-text--bottom">
          <div className="promotion2-text--bottom-button">
            <div className="promotion2-text--bottom-button-inner-left" >
            <img className="promotion2-text--bottom-button-inner-left-img" src="..\icons\shape 4.png"></img>
            </div>
            <div className="promotion2-text--bottom-button-inner-right" >
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
    {sliderFlag === "1" && page("1")}
    {sliderFlag === "2" && page("2")}
    {sliderFlag === "3" && page("3")}
    {sliderFlag === "4" && page("4")}
    {sliderFlag === "5" && page("5")}
    {sliderFlag === "6" && page("6")}
  </>
);

const buttonToChangeSliderPage = (sliderFlag, handlePromotion, tag) => (
  <div
    // className="promotion2-nav-link"
    className={classnames({ "promotion2-nav-link": true }, { 'promotion2-nav-link--active': sliderFlag===tag })}
    id={tag}
    onClick={e => changeSliderPage(sliderFlag, handlePromotion, tag, e)}
  >


    {tag === "1" && <img src="..\icons\mobile.png" alt="mobile" />}
    {tag === "2" && (
      <img width="50px" src="..\icons\tablet.png" alt="tablet" />
    )}
    {tag === "3" && (
      <img width="75px" height="auto" src="\icons\desktop.png" alt="desktop" />
    )}
    {tag === "4" && <img src="..\icons\mobile.png" alt="mobile" />}
    {tag === "5" && (
      <img width="50px" src="..\icons\tablet.png" alt="tablet" />
    )}
    {tag === "6" && (
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
        if (sliderFlag === "1") handlePromotion("desktop");
        if (sliderFlag === "2") handlePromotion("tablet");
        if (sliderFlag === "3") handlePromotion("mobile");
        if (sliderFlag === "4") handlePromotion("desktop");
        if (sliderFlag === "5") handlePromotion("tablet");
        if (sliderFlag === "6") handlePromotion("mobile");
      }, 100000)

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
      <div className="promotion2-nav">
        {sliderPages.map(page =>
          buttonToChangeSliderPage(sliderFlag, handlePromotion, page)
        )}
      </div>
      {sliderPages.includes(sliderFlag) && RenderSliderPage(sliderFlag)}
    </div>
  );
};

export default Slider1;
