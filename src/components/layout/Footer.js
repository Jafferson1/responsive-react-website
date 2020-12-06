import React from "react";
import FooterNav from "./partials/FooterNav";
import FooterSocial from "./partials/FooterSocial";
import Logo from "./partials/Logo";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <Logo />
        <FooterSocial />
        <FooterNav />
      </div>
    </footer>
  );
};
export default Footer;
