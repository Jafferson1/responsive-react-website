import React from "react";

const Image = ({ src, width, height, alt, ...props }) => {
  return <img src={src} width={width} height={height} alt={alt} {...props} />;
};

export default Image;
