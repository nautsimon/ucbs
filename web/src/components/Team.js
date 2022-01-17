import React from "react"; //imports react
import simon from "../imgs/simon.png";
import lex from "../imgs/lex.jpg";
import tim from "../imgs/tim.jpg";
import elliot from "../imgs/elliot.jpg";
import james from "../imgs/james.png";

import linkedinLogo from "../imgs/linkedinLogo.png";

class Team extends React.Component {
  render() {
    return (
      <div className="mainDiv">
        <div className="mainMarginDiv">
          <p className="pageTitle">Team</p>
          <br />
          <div className="row">
            <div className="profileDiv">
              <div className="profileImgDiv">
                <img src={elliot} className="profileImg" alt="elliot" />
              </div>
              <div className="profileTextDiv">
                <p className="profileSubtitle">Elliot Paschal</p>
                <i className="profileSubSubtitle">
                  UChicago 24
                  <br />
                  Juicebox DAO, UMich Research
                </i>
                <br />
                <a
                  href="https://www.linkedin.com/in/elliot-paschal/"
                  className="linkedinLink hover"
                >
                  <img
                    src={linkedinLogo}
                    className="linkedinLogo"
                    alt="linkedinLogo"
                  />
                </a>
              </div>
            </div>
            <div className="profileDiv">
              <div className="profileImgDiv">
                <img src={lex} className="profileImg" alt="lex" />
              </div>
              <div className="profileTextDiv">
                <p className="profileSubtitle">Lexington Brill</p>
                <i className="profileSubSubtitle">
                  UChicago 23
                  <br />
                  Amazon
                </i>
                <br />
                <a
                  href="https://www.linkedin.com/in/lexingtonbrill/"
                  className="linkedinLink hover"
                >
                  <img
                    src={linkedinLogo}
                    className="linkedinLogo"
                    alt="linkedinLogo"
                  />
                </a>
              </div>
            </div>
            <div className="profileDiv">
              <div className="profileImgDiv">
                <img src={simon} className="profileImg" alt="simon" />
              </div>
              <div className="profileTextDiv">
                <p className="profileSubtitle">Simon Mahns</p>
                <i className="profileSubSubtitle">
                  UChicago 23
                  <br />
                  Facebook, Globus Labs, CSIL
                </i>
                <br />
                <a
                  href="https://www.linkedin.com/in/simonmahns/"
                  className="linkedinLink hover"
                >
                  <img
                    src={linkedinLogo}
                    className="linkedinLogo"
                    alt="linkedinLogo"
                  />
                </a>
              </div>
            </div>
            <div className="profileDiv">
              <div className="profileImgDiv">
                <img src={tim} className="profileImg" alt="tim" />
              </div>
              <div className="profileTextDiv">
                <p className="profileSubtitle">Timothy Clifford</p>
                <i className="profileSubSubtitle">
                  UChicago 24
                  <br />
                  Blockchain Coinvestors & Fifth Era
                </i>
                <br />
                <a
                  href="https://www.linkedin.com/in/timothy-clifford-125141211/"
                  className="linkedinLink hover"
                >
                  <img src={linkedinLogo} className="linkedinLogo" alt="link" />
                </a>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="profileDiv">
              <div className="profileImgDiv">
                <img src={james} className="profileImg" alt="james" />
              </div>
              <div className="profileTextDiv">
                <p className="profileSubtitle">James Slattery</p>
                <i className="profileSubSubtitle">
                  UChicago 23
                  <br />
                  USMC, SMB Capital
                </i>
              </div>
            </div>
            <div className="profileDiv"></div>
            <div className="profileDiv"></div>
            <div className="profileDiv"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default Team;
