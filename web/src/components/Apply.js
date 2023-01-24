import React from "react"; //imports react
import FadeIn from "react-fade-in";
import applyDis from "../imgs/applyh.png";
// import staff from "../imgs/staffPic.png";

class About extends React.Component {
  render() {
    return (
      <div className="mainDiv">
        <div className="mainMarginDiv">
          <p className="pageTitle">Applications Open until 02/03</p>
          <br />
          <FadeIn transitionDuration={1100}>
            <div className="row">
              <div className="aboutLeft">
                <br/>
              <p className="regularTitle">Winter Quarter 2023 Recruitment Timeline</p>
              <p className="regularSubtitle">Only Application Cycle Opening In Winter Quarter</p>
              <a href="https://forms.gle/LHnBNZWzPgLEqsRA7">Link to application</a>
              <br /> 
                <br /> 
                <br /> 
              </div>
              <div className="aboutRight">
              <div className="applyImgDiv">
                  <a
                    href="https://forms.gle/LHnBNZWzPgLEqsRA7"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="socialLink"
                    style={{pointerEvents:"none", opacity: 0.5}}
                  >
                    <img className="applyImg" src={applyDis} style={{marginBottom: "1rem" }} alt="staffImg" />
                  </a>
                  
                </div>
              </div>

            </div>
                  
          </FadeIn>
        </div>
      </div>
    );
  }
}

export default About;
