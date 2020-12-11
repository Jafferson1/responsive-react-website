import React, { useState } from "react";
import classNames from "classnames";

const Menu = ({ items, className }) => {
  const [isActive, setIsactive] = useState(false);
  const handleHamburguer = () => {
    setIsactive(isActive ? false : true);
    document.body.style.overflow = !isActive ? "hidden" : "initial";
  };
  return (
    <div className={classNames(className, isActive && "is-active")}>
      <button className="hamburguer" onClick={handleHamburguer}>
        <div className="menu-toggle">
          <div className="one"></div>
          <div className="two"></div>
          <div className="three"></div>
        </div>
      </button>
      <nav>
        <ul>
          {items.map((i) => (
            <li key={i.id}>
              <a href={i.path}>{i.name}</a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};
export default Menu;
