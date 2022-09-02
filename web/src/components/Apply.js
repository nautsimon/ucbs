import React from "react"; //imports react
import FadeIn from "react-fade-in";
import applyDis from "../imgs/applyh.png";
// import staff from "../imgs/staffPic.png";

class About extends React.Component {
  render() {
    return (
      <div className="mainDiv">
        <div className="mainMarginDiv">
          <p className="pageTitle">Applications Opening Soon</p>
          <br />
          <FadeIn transitionDuration={1100}>
            <div className="row">
              <div className="aboutLeft">
                <br/>
              <p className="regularTitle">Autumn 2022 Recruitment Timeline</p>
              <br /> 
                <p className="regularSubTitle">
                  - Tuesday, September 27th, 2022: Applications released
                </p>
                <p className="regularSubTitle">
                  - Thursday, September 29th, 2022: Info Session #1
                </p>
                <p className="regularSubTitle">
                  - Monday, October 3rd, 2022: Info session #2
                </p>
                <p className="regularSubTitle">
                  - Tuesday, October 4th, 2022: Applications close
                </p>
                <p className="regularSubTitle">
                  - Tuesday, October 8th - 10th, 2022: Interviews
                </p>
                <p className="regularSubTitle">
                  - Wednesday, October 11th: Applicants notified
                </p>
                {/* <p className="regularTitle">Apply to our Spring 2022 cohort </p> */}
                <br /> 
                <br /> 
              </div>
              <div className="aboutRight">
              <div className="applyImgDiv">
                  <a
                    href="https://forms.gle/VPm7bpKkQgUhRSHc7"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="socialLink"
                    style={{pointerEvents:"none", opacity: 0.5}}
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
