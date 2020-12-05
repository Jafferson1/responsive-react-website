import React from "react";

const Image = ({ src, width, height, alt, ...props }) => {
  return <img {...props} src={src} width={width} height={height} alt={alt} />;
};

export default Image;
