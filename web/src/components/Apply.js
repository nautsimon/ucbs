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
            <div className="row">
              <div className="aboutLeft">
                <br/>
              <p className="regularTitle">Spring Recruitment Timeline</p>
                <p className="regularSubTitle">
                  - 3/11/22 11:59PM CT: Applications released
                </p>
                <p className="regularSubTitle">
                  - 3/11/22 07:00PM CT: Info Session #1
                
                </p>
                {/* <p className="regularSubTitle">
                  - 3/29/22 06:00PM CT: Diversity & Inclusion workshop
                </p> */}
                <p className="regularSubTitle">
                  - 3/30/22 07:00PM CT: Info Session #2{" "}
                  <a
                    href="https://rmerxlvsqsk.typeform.com/to/IrbTJnxo"
                    className="eventLink hover"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    [REGISTER]
                  </a>
                </p>
                <p className="regularSubTitle">
                  - 4/01/22 11:59PM CT: Applications close
                </p>
                <p className="regularSubTitle">
                  - 4/06/22 11:59PM CT: Applicants notified
                </p>
                {/* <p className="regularTitle">Apply to our Spring 2022 cohort </p> */}

               
              </div>
              <div className="aboutRight">
              <div className="applyImgDiv">
                  <a
                    href="https://forms.gle/VPm7bpKkQgUhRSHc7"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="socialLink"
                  >
                    <img className="applyImg" src={applyDis} alt="staffImg" />
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
