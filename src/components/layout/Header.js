import React from "react";
import Logo from "./partials/Logo";
import Menu from "./partials/Menu";

const Header = () => {
  return (
    <header>
      <div className="container">
        <Logo className="brand" />
        <Menu
          className="menu"
          items={[
            { id: 1, name: "Sobre", path: "#introduction" },
            { id: 2, name: "Como funciona?", path: "#how-it-works" },
            { id: 3, name: "Por que usar?", path: "#why-you-should" },
            { id: 4, name: "Novidades", path: "#conclusion" },
          ]}
        />
      </div>
    </header>
  );
};

export default Header;
