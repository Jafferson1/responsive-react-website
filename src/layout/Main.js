import React from "react";
import Hero from "../components/sections/Hero";
import Introduction from "../components/sections/Introduction";

const Main = () => {
  return (
    <>
      <div className="hero">
        <Hero />
      </div>
      <div className="introduction">
        <Introduction />
      </div>
    </>
  );
};
export default Main;
