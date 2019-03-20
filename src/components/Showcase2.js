import React, {useState} from 'react'

const Showcase2 = () => {
    const [promotionFlag, handlePromotion] = useState("1")

    const changePage = (tag, e) => {
        e.preventDefault();
        console.log(
          "The promotion2Flag link was clicked.",
          tag,
          this.state.promotion2Flag
        );
    
        if (this.state.promotion2Flag !== tag) {
          // console.log("change");
          this.setState({
            promotionFlag: tag
          });
        }
      }


  return (
    <div className="section promotion promotion-2">
          <div className="promotion-2-nav">
            <div
              className="promotion-2-nav-link"
              id="1"
              onClick={e => this.changePage("1", e)}
            >
              <img src="" alt="" />1
            </div>
            <div
              className="promotion-2-nav-link"
              id="2"
              onClick={e => this.changePage("2", e)}
            >
              <img src="" alt="" />2
            </div>
            <div
              className="promotion-2-nav-link"
              id="3"
              onClick={e => this.changePage("3", e)}
            >
              <img src="" alt="" />3
            </div>
            <div
              className="promotion-2-nav-link"
              id="4"
              onClick={e => this.changePage("4", e)}
            >
              <img src="" alt="" />4
            </div>
            <div
              className="promotion-2-nav-link"
              id="5"
              onClick={e => this.changePage("5", e)}
            >
              <img src="" alt="" />5
            </div>
            <div
              className="promotion-2-nav-link"
              id="6"
              onClick={e => this.changePage("6", e)}
            >
              <img src="" alt="" />6
            </div>
          </div>

          <div>
            {promotionFlag === "1" && (
              <div className="promotion-container">
                <div className="promotion-container-inner">
                  <div className="circle" />
                  <div className="circle" />
                  <div className="circle" />
                  <img src="..\icons\iphone.png" alt="" />
                </div>
                {/* <vd /> */}
                <div className="promotion-container-inner promotion-text">
                  1
                </div>
              </div>
            )}
            {promotionFlag === "2" && (
              <div className="promotion-container">
                <div className="promotion-container-inner">
                  <div className="circle" />
                  <div className="circle" />
                  <div className="circle" />
                  <img src="..\icons\iphone.png" alt="" />
                </div>
                {/* <vd /> */}
                <div className="promotion-container-inner promotion-text">
                  2
                </div>
              </div>
            )}
            {promotionFlag === "3" && (
              <div className="promotion-container">
                <div className="promotion-container-inner">
                  <div className="circle" />
                  <div className="circle" />
                  <div className="circle" />
                  <img src="..\icons\iphone.png" alt="" />
                </div>
                {/* <vd /> */}
                <div className="promotion-container-inner promotion-text">
                  3
                </div>
              </div>
            )}
            {promotionFlag === "4" && (
              <div className="promotion-container">
                <div className="promotion-container-inner">
                  <div className="circle" />
                  <div className="circle" />
                  <div className="circle" />
                  <img src="..\icons\iphone.png" alt="" />
                </div>
                {/* <vd /> */}
                <div className="promotion-container-inner promotion-text">
                  4
                </div>
              </div>
            )}
            {promotionFlag === "5" && (
              <div className="promotion-container">
                <div className="promotion-container-inner">
                  <div className="circle" />
                  <div className="circle" />
                  <div className="circle" />
                  <img src="..\icons\iphone.png" alt="" />
                </div>
                {/* <vd /> */}
                <div className="promotion-container-inner promotion-text">
                  5
                </div>
              </div>
            )}
            {promotionFlag === "6" && (
              <div className="promotion-container">
                <div className="promotion-container-inner">
                  <div className="circle" />
                  <div className="circle" />
                  <div className="circle" />
                  <img src="..\icons\iphone.png" alt="" />
                </div>
                {/* <vd /> */}
                <div className="promotion-container-inner promotion-text">
                  6
                </div>
              </div>
            )}
          </div>
        </div>
  )
}

export default Showcase2
