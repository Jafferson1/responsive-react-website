import React from "react";
import classNames from "classnames";

const Button = ({ size, text, icon, disabled }) => {
  return (
    <button className={classNames(size && `button-${size}`)} disabled={disabled}>
      {icon && <i className={classNames(`fa ${icon} fa-lg`)}></i>}
      {text}
    </button>
  );
};

export default Button;
