import React, { Component } from "react";
import Slider1 from "../components/Slider1"
import Slider2 from "../components/Slider2"
import circleSVG from "../img/SVG/SVG/SVG/appSVG"


class indexPage extends Component {
  state = {
    promotion1Flag: "desktop",
    promotion2Flag: "1"
  };

  handlePromotion1(tag, e) {
    e.preventDefault();
    console.log(
      "The promotion1Flag link was clicked.",
      tag,
      this.state.promotion1Flag
    );

    if (this.state.promotion1Flag !== tag) {
      console.log("change");
      this.setState({
        promotion1Flag: tag
      });
    }
  }
  

  render() {
    let { promotion1Flag, promotion2Flag } = this.state;
    return (
      <div>
        <Slider1 />

        {/* About */}
        <div className="section aboutMinimal" id="aboutMinimal">
          <div className="text text-promo">about minimal</div>
          <div className="text text-regular">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Eligendi, dolores, explicabo qui perspiciatis at quos inventore
            consequuntur corrupti natus pariatur officia amet error
            dignissimos saepe reprehenderit eum et? corrupti natus pariatur
            officia amet error dignissimos saepe reprehenderit eum et?
          </div>
          <div className="aboutMinimal">
            
            {circleSVG()}
            
          </div>
        </div>

        <Slider2 />
        {/* showcase 2 */}

        {/* sale */}
        <div className="section sale">
          <div className="sale-container">
            <div className="sale-container-inner sale-container-inner-bot-left">
              <div className="text"><div className="text-sale">60%</div></div>
              <div className="text"><div className="text-sale2">of project</div></div>
              <div className="text"><div className="text-sale3">
               complete</div></div>
            </div>
            {/* <vd /> */}
            <div className="sale-container-inner-image">
              <img src="..\img\SVG\pinchArrows.svg"/>
            </div>
          </div>
        </div>

        {/* copyright */}
        <div className="section" id="copyright">
          Copyright © 2012 CSS Author{" "}
        </div>
      </div>
    );
  }
}
export default indexPage;
