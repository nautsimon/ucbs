import React from "react"; //imports react
import FadeIn from "react-fade-in";
import applyDis from "../imgs/apply.png";
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
                  Applications will be released on 03/11/22
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
                <p className="regularTitle">Timeline</p>
                <p className="regularSubTitle">
                  - 3/11/22: Applications released (1159PM CT)
                </p>
                <p className="regularSubTitle">
                  - 3/11/22: Info Session #1 (7PM CT){" "}
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://rmerxlvsqsk.typeform.com/to/IrbTJnxo"
                    className="eventLink hover"
                  >
                    [REGISTER]
                  </a>
                </p>
                <p className="regularSubTitle">
                  - 3/30/22: Info Session #2 (7PM CT){" "}
                  <a
                    href="https://rmerxlvsqsk.typeform.com/to/IrbTJnxo"
                    className="eventLink hover"
                  >
                    [REGISTER]
                  </a>
                </p>
                <p className="regularSubTitle">
                  - 4/01/22: Applications close (1159PM CT)
                </p>
                <p className="regularSubTitle">
                  - 4/06/22: Applicants notified (1159PM CT)
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
