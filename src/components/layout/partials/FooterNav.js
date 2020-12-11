import React from "react";
import classNames from "classnames";

const FooterNav = ({ className }) => {
  return (
    <div className={classNames(className)}>
      <nav>
        <ul>
          <li>
            <a href="#introduction">Sobre</a>
          </li>
          <li>
            <a href="#how-it-works">Como funciona?</a>
          </li>
          <li>
            <a href="#why-you-should">Por que usar?</a>
          </li>
          <li>
            <a href="#conclusion">Novidades</a>
          </li>
          <li>
            <a href="#">Política</a>
          </li>
          <li>
            <a href="#">Termos</a>
          </li>
          <li>
            <a href="#">Privacidade</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};
export default FooterNav;
