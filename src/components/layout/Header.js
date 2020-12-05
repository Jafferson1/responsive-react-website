import React from "react";
import Logo from "./partials/Logo";
import Nav from "./partials/Nav";

const Header = () => {
  return (
    <header>
      <div className="container">
        <Logo />
        <Nav />
      </div>
    </header>
  );
};

export default Header;
