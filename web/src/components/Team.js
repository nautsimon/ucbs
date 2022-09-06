import React from "react";
import FadeIn from "react-fade-in";
import teamData from "./team.json";
import linkedinLogo from "../imgs/linkedinLogo.png";
import twitterLogo from "../imgs/twitter.png";
class Team extends React.Component {
  render() {
    return (
      <div className="mainDiv">
        <div className="mainMarginDiv">
          <p className="pageTitle">Team</p>
          <br />
          <FadeIn transitionDuration={1100}>
            {teamData.map((teamTeir) => (
              <div className="team tempCenter">
                <p className="regularTitle">{teamTeir.teamTeir}</p>
                <br />
                <div className="row wrap">
                  {teamTeir.members.map((teamMember) => (
                    <div className="profileDiv">
                      <div className="profileImgDiv">
                        <img
                          src={
                            require("../teamImgs/" + teamMember.imagePath)
                              .default
                          }
                          height="240px"
                          className="profileImg"
                          alt={teamMember.name}
                        />
                      </div>
                      <div className="profileTextDiv">
                        <p className="profileSubtitle">{teamMember.name}</p>
                        <i className="profileSubSubtitle">
                          {teamMember.subtitle}
                          <br />
                          {teamMember.affiliates}
                        </i>
                        <br />
                        <div className="rowSocial centerRow teamSocialsDiv">
                          {teamMember.twitter === "" ? null : (
                            <a
                              href={teamMember.twitter}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="teamLinkLogo"
                            >
                              <img
                                src={twitterLogo}
                                alt="twitter"
                                className="teamIcon"
                              />
                            </a>
                          )}
                          {teamMember.linkedin === "" ? null : (
                            <a
                              href={teamMember.linkedin}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="teamLinkLogo"
                            >
                              <img
                                src={linkedinLogo}
                                alt="linkedin"
                                className="teamIcon"
                              />
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <br />
                <br />
                <br />
              </div>
            ))}
          </FadeIn>
        </div>
      </div>
    );
  }
}
export default Team;
