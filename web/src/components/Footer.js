import linkedin from "../imgs/linked.png";
import instagram from "../imgs/instagram.png";
import twitter from "../imgs/twitter.png";
function Footer() {
  return (
    <footer>
      <div className="rowSocial centerRow">
        <a
          href="https://www.linkedin.com/company/blockchain-chicago"
          target="_blank"
          rel="noopener noreferrer"
          className="socialLink"
        >
          <img src={linkedin} alt="linkedin" className="icon" />
        </a>
        <a
          href="https://twitter.com/ucblockchain"
          target="_blank"
          rel="noopener noreferrer"
          className="socialLink"
        >
          <img src={twitter} alt="twitter" className="icon" />
        </a>
        <a
          href="https://www.instagram.com/blockchainchicago/"
          target="_blank"
          rel="noopener noreferrer"
          className="socialLink"
        >
          <img src={instagram} alt="instagram" className="icon" />
        </a>
      </div>
      <p className="noMargin">contact@blockchainchicago.finance</p>

    </footer>
  );
}
export default Footer;