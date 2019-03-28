import React, { useState, useEffect } from "react";
import changeSliderPage from "./functions/changeSliderPage";
import planetSVG from "../img/SVG/SVG/SVG/planetSVG"; // TODO:cleanup folders of svg
import classnames from "classnames";
// data
const sliderPages = ["1", "2", "3","4", "5", "6"];

// template TODO: content rendering
const page = flag => (
  <>
  {/* TODO: see why id is not working for styling here */}
    <div id={flag} className={`promotion2-image promotion2-image-${flag}`} >
      <div className="promotion2-container-inner-image">
        

        {flag === "1" && <img width="auto" height="200px" src="..\img\svg\search.svg" alt="search" />}
        {flag === "2" && (
          <img width="auto"  height="200px" src="..\img\svg\power.svg" alt="power" />
        )}
        {flag === "3" && (
          <img
            width="auto"
            height="200px"
            src="..\img\SVG\apple.svg"
            alt="apple"
          />
        )}

        {flag === "4" && <img width="auto" height="200px" src="..\icons\iphone.png" alt="shop" />}
        {flag === "5" && (
          <img width="auto" height="200px" src="..\img\tablet.png" alt="lock" />
        )}
        {flag === "6" && (
          <img
          width="auto" height="200px"
            src="\img\SVG\white Image.svg"
            alt="star"
          />
        )}
      </div>
    </div>


    <div className={`promotion2-text promotion2-text-${flag}`}>
      

      <div className="promotion2-text--bottom">
        <div className="promotion2-text--bottom">
          my apps showcase
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


    {tag === "1" && <img width="50px" height="auto" src="..\img\svg\search.svg" alt="search" />}
    {tag === "2" && (
      <img width="50px" height="auto" src="..\img\svg\power.svg" alt="power" />
    )}
    {tag === "3" && (
      <img width="50px" height="auto" src="..\img\svg\apple.svg" alt="apple" />
    )}
    {tag === "4" && <img width="50px" height="auto"  src="..\img\svg\shop.svg" alt="shop" />}
    {tag === "5" && (
      <img width="50px" height="auto"  src="..\img\svg\lock.svg" alt="lock" />
    )}
    {tag === "6" && (
      <img width="50px" height="auto"  src="..\img\svg\star.svg" alt="star" />
    )}

    <div id={tag} className={classnames({ "arrow": true }, { 'arrow--active': sliderFlag===tag })}/>
     {/* {tag} */}
  </div>
);

const Slider1 = () => {
  const [sliderFlag, handlePromotion] = useState("1");

  useEffect(
    () => {
      let timer = setTimeout(() => {
        if (sliderFlag === "1") handlePromotion("2");
        if (sliderFlag === "2") handlePromotion("3");
        if (sliderFlag === "3") handlePromotion("4");
        if (sliderFlag === "4") handlePromotion("5");
        if (sliderFlag === "5") handlePromotion("6");
        if (sliderFlag === "6") handlePromotion("1");
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
    <div className="section promotion2">
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
