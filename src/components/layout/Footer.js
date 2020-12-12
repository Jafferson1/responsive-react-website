import React from "react";
import FooterNav from "./partials/FooterNav";
import FooterSocial from "./partials/FooterSocial";
import Logo from "./partials/Logo";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <Logo className="brand" />
        <FooterSocial className="footer-social" />
        <FooterNav className="footer-nav" />
        <div className="footer-copyright">
          2020 Hypotheses&copy;. All right reserved
        </div>
      </div>
    </footer>
  );
};
export default Footer;
