import React from "react"; //imports react
import FadeIn from "react-fade-in";
import apply from "../imgs/apply-min.png";
import applyDis from "../imgs/applyDis-min.png";
// import staff from "../imgs/staffPic.png";

class About extends React.Component {
  render() {
    return (
      <div className="mainDiv">
        <div className="mainMarginDiv">
          <p className="pageTitle">Apply</p>
          <br />
          <FadeIn transitionDuration={1100}>
            <div className="row">
              <div className="aboutLeft">
                <p className="regularTitle">Apply to our Spring 2022 cohort </p>
                <p className="regularSubTitle">
                  Applications will be released on 03/08/22
                </p>
                <div className="applyImgDiv">
                  <a
                    href="https://www.instagram.com/blockchainchicago/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="socialLink"
                    style={{ opacity: 0.4, pointerEvents: "none" }}
                  >
                    <img className="applyImg" src={applyDis} alt="staffImg" />
                  </a>
                </div>
              </div>
              <div className="aboutRight">
                <p className="regularTitle">
                  Got blockchain knowledge already?{" "}
                </p>
                <p className="regularSubTitle">
                  We are looking for a few more people to join our staff!
                </p>
                <div className="applyImgDiv">
                  <a
                    href="https://forms.gle/kJcWa2sMZ8M3s9XA6"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="socialLink"
                  >
                    <img className="applyImg" src={apply} alt="staffImg" />
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
