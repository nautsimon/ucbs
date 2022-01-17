import React from "react"; //imports react

class About extends React.Component {
  render() {
    return (
      <div className="mainDiv">
        <div className="mainMarginDiv">
          <p className="pageTitle">Apply</p>
          <br />
          <p>Blockchain Chicago intends to begin taking applications for membership in Spring 2022 Quarter. Submit the form below to stay informed, also be sure to follow us on <a href="https://twitter.com/ucblockchain" title="Twitter" target="_blank">Twitter</a>!</p>
          <center><iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdcpPvM8hpRtkdopPRZ7vtSIv4gWITpNT3gR8H5Gq_U3jDsgA/viewform?embedded=true" width="640" height="1641" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe></center>
        </div>
      </div>
    );
  }
}

export default About;
