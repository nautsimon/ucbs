import React from "react"; //imports react
import FadeIn from "react-fade-in";
import applyDis from "../imgs/applyh.png";
// import staff from "../imgs/staffPic.png";

class About extends React.Component {
  render() {
    return (
      <div className="mainDiv">
        <div className="mainMarginDiv">
          <p className="pageTitle">Apply</p>
          <br />
          <FadeIn transitionDuration={1100}>
            <div className="row" style={{ justifyContent: "flex-start", alignItems: "center", textAlign: "center", minHeight: "40vh", paddingTop: "6vh" }}>
              <div className="aboutLeft" style={{ width: "100%" }}>
                <p>
                  Applications for the Fall 2025 Cohort are now closed. Please keep an eye on our socials for news on upcoming recruitment cycles.
                </p>
              </div>

            </div>
                  
          </FadeIn>
        </div>
      </div>
    );
  }
}

export default About;
