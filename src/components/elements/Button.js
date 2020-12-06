import React from "react";
import classNames from "classnames";

const Button = ({ color, size, text, disabled }) => {
  const classes = classNames(
    color && `button-${color}`,
    size && `button-${size}`
  );
  return (
    <button className={classes} disabled={disabled}>
      {text}
    </button>
  );
};

export default Button;
