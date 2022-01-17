import React from "react"; //imports react

class About extends React.Component {
  render() {
    return (
      <div className="mainDiv">
        <div className="mainMarginDiv">
          <p className="pageTitle">About</p>
          <br />
          <h1>Mission</h1>
          <p>The mission of Blockchain Chicago is to foster and unite the university communities growing around blockchain technology, as well as to educate the university community around the multidisciplinary impacts of blockchain technology and cryptocurrencies. Domains to explore include, but are not limited to: entrepreneurship, economics, finance, computer science, and public policy.</p>
          <h1>Find Us</h1>
          <ul className="socials">
            <a href="https://twitter.com/ucblockchain" title="Twitter" target="_blank"><li>Twitter</li></a>
            <a href="https://blueprint.uchicago.edu/organization/blockchainchicago" title="UChicago Blueprint" target="_blank"><li>Blueprint</li></a>
          </ul>
        </div>
      </div>
    );
  }
}

export default About;
