//function for changing slider pages, utilizing useState hook
// import {useState} from "react"

// const [sliderFlag, handlePromotion] = useState("1")

export default function changeSliderPage(sliderFlag, handlePromotion, tag) {
  
  console.log(
    "The slider link was clicked.",
    `It was: ${sliderFlag}, became: ${tag}`
  );

  if (sliderFlag !== tag) {
    console.log("change");
    handlePromotion(tag); //changing state with imported function from props 
  } else
    try {
      console.log("no-change"); // NO change indicator
    } catch (e) {
      e.console.error(); //error 
    }
}
