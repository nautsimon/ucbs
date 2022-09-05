import React from "react"; //imports react
import FadeIn from "react-fade-in";
import { NavLink } from "react-router-dom";
// import events from "../imgs/events.png";
// import linktree from "../imgs/linktree.png";
import team from "../imgs/team3.png";
import listhost from "../imgs/listhost.png";


// import half from "../imgs/half.png";
//            <img alt="halfMain" className="halfMain" alt="half logo"/>

class About extends React.Component {
  render() {
    return (
      <div className="mainDiv">
        <div className="mainMarginDiv">
          <p className="pageTitle">About</p>
          <br />
          <FadeIn transitionDuration={1100}>
            <div className="row ">
              <div className="aboutLeft">
                <p className="regularTitle">What is Blockchain Chicago?</p>
                <p>
                  Blockchain Chicago is an official RSO (Recognized Student
                  Organization) at the University of Chicago. We aim to
                  facilitate an environment where students and enthusiasts are
                  empowered to engage in blockchain related entrepreneurial and
                  educational pursuits by being actively involved in solving real-world
                  problems through computer science/development, economics, finance and more.
                </p>
                <br />
                {/*
                <p className="regularTitle">
                  UChicago Decentralized and Events
                </p>
                <p>
                  What is going on the blockchain space? Through public
                  panels/workshops and with UChicago Decentralized, our
                  psuedo-podcast speaker series, we aim to make blockchain
                  knowledge more accessible to all interested.
                </p>
                <br/> */}
                <p className="regularTitle">
                 Contact Us
                </p>
                <p>
                  contact@blockchainchicago.finance
                </p>
              </div>
              <div className="aboutRight">
                <p className="regularTitle">Learn more</p>
                <div className="aboutRightIn">
                  {/* <a
                  className="navLinkImg hover"
                  href="https://linktr.ee/blockchainchicago"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={linktree} alt="linktree" className="aboutTileImg" />
                </a> */}

                  <a
                    className="navLinkImg hover"
                    href="https://lists.uchicago.edu/web/info/blockchain"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={listhost}
                      alt="listhost"
                      className="aboutTileImg"
                    />
                  </a>
                  {/* <NavLink className="navLinkImg hover" to="/events">
                  <img src={events} alt="events" className="aboutTileImg" />
                </NavLink> */}
                  <NavLink className="navLinkImg hover" to="/team">
                    <img src={team} alt="team" className="aboutTileImg" />
                  </NavLink>
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
