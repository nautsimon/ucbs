import React from "react";
import FadeIn from "react-fade-in";
import listhost from "../imgs/listhost.png";

class About extends React.Component {
  render() {
    return (
      <div className="mainDiv">
        <div className="mainMarginDiv">
          <FadeIn transitionDuration={1100}>
            <div className="row ">
              <div className="aboutLeft">
                <p className="regularTitle">What is Blockchain Chicago?</p>
                <p>
                  Blockchain Chicago is the University of Chicago’s only recognized blockchain & crypto RSO. We operate four core tracks: Education, Trading, Research, and Development. Members learn by mastering fundamentals, testing strategies, publishing impactful research, and building real on-chain projects.
                </p>
                {/*
                <p className="regularTitle">UChicago Decentralized and Events</p>
                <p>What is going on the blockchain space? Through public
                  panels/workshops and with UChicago Decentralized, our
                  psuedo-podcast speaker series, we aim to make blockchain
                  knowledge more accessible to all interested.</p>
                */}
              </div>
              <div className="aboutRight" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <p className="regularTitle" style={{ textAlign: "center" }}>Learn more</p>
                <div className="aboutRightIn" style={{ width: "70%", display: "flex", flexDirection: "column", alignItems: "center" }}>
                  <a
                    className="navLinkImg hover"
                    href="https://lists.uchicago.edu/web/info/blockchain"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ width: "100%" }}
                  >
                    <img
                      src={listhost}
                      alt="listhost"
                      className="aboutTileImg"
                    />
                  </a>
                </div>
              </div>
            </div>

            <div style={{ width: "100%", display: "flex", justifyContent: "center", marginTop: 32, marginBottom: 32 }}>
              <p style={{ textAlign: "center", maxWidth: 640, margin: 0 }}>
                We aim to facilitate an environment where students and enthusiasts are empowered to engage in blockchain-related entrepreneurial and educational pursuits by being actively involved in solving real-world problems through computer science/development, economics, finance, and more.
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    );
  }
}

export default About;
