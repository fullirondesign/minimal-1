//function for changing slider pages, utilizing useState hook
// import {useState} from "react"

// const [sliderFlag, handlePromotion] = useState("1")

export default function changeSliderPage(sliderFlag, handlePromotion, tag, e) {
    e.preventDefault();
    console.log(
        "The slider link was clicked.",
        `was: ${sliderFlag}, became: ${tag}`
    );

    if (sliderFlag !== tag) {
        console.log("change");
        handlePromotion(tag);
    } else {
        console.log("no-change");
    }
};
