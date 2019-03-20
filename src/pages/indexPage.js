import React, { Component } from "react";
import Slider from "../components/Showcase2"
// import "./App.css";

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
        {/* showcase 1 */}
        <div className="section promotion">
          <div className="promotion-nav">
            <div
              className="promotion-nav-link"
              id="desktop"
              onClick={e => this.handlePromotion1("desktop", e)}
            >
              <img src="..\icons\desktop.png" alt="" />
            </div>
            <div
              className="promotion-nav-link"
              id="tablet"
              onClick={e => this.handlePromotion1("tablet", e)}
            >
              <img src="..\icons\tablet.png" alt="" />
            </div>
            <div
              className="promotion-nav-link"
              id="mobile"
              onClick={e => this.handlePromotion1("mobile", e)}
            >
              <img src="..\icons\mobile.png" alt="" />
            </div>
          </div>
          {promotion1Flag === "desktop" && (
            <div className="promotion-container">
              <div className="promotion-container-inner">
                <div className="circle" />
                <div className="circle" />
                <div className="circle" />
                <img src="..\icons\iphone.png" alt="" />
              </div>
              {/* <vd /> */}
              <div className="promotion-container-inner promotion-text">
                desktop
              </div>
            </div>
          )}
          {promotion1Flag === "tablet" && (
            <div className="promotion-container">
              <div className="promotion-container-inner">
                <div className="circle" />
                <div className="circle" />
                <div className="circle" />
                <img src="..\icons\iphone.png" alt="" />
              </div>
              {/* <vd /> */}
              <div className="promotion-container-inner promotion-text">
                tablet
              </div>
            </div>
          )}
          {promotion1Flag === "mobile" && (
            <div className="promotion-container">
              <div className="promotion-container-inner">
                <div className="circle" />
                <div className="circle" />
                <div className="circle" />
                <img src="..\icons\iphone.png" alt="" />
              </div>
              {/* <vd /> */}
              <div className="promotion-container-inner promotion-text">
                mobile
              </div>
            </div>
          )}
        </div>

        {/* About */}
        <div className="section aboutMinimal" id="aboutMinimal">
          <div className="text text-promo">about minimal</div>
          <div className="text text-regular">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi,
            dolores, explicabo qui perspiciatis at quos inventore consequuntur
            corrupti natus pariatur officia amet error dignissimos saepe
            reprehenderit eum et? Quia autem veritatis repellat, corporis
            laboriosam harum tenetur.
          </div>
          <div className="aboutMinimal-circle">
            <img
              className="aboutMinimal-img"
              alt="anoutminimal-img"
              src="..\icons\mobile2.png"
            />
            <div className="aboutMinimal-img-text">
              App of <br /> the <br /> year
            </div>
          </div>
        </div>
        

        <Slider/>
        {/* showcase 2 */}
        

        {/* sale */}
        <div className="section sale">
          <div className="promotion-container">
            <div className="promotion-container-inner">
              <div className="circle" />
              <div className="circle" />
              <div className="circle" />
              {/* <img src="..\icons\iphone.png" alt="" /> */}
            </div>
            {/* <vd /> */}
            <div className="promotion-container-inner promotion-text">
              promotion
            </div>
          </div>
        </div>

        {/* copyright */}
        <div className="section" id="copyright">
          Copyright © 2019 CSS Author{" "}
        </div>
      </div>
    );
  }
}
export default indexPage;
