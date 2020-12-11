import React from "react";
import Conclusion from "../components/sections/Conclusion";
import Hero from "../components/sections/Hero";
import HowItWorks from "../components/sections/HowItWorks";
import Introduction from "../components/sections/Introduction";
import WhyYouShould from "../components/sections/WhyYouShould";

const Main = () => {
  return (
    <>
      <Hero className="hero" />
      <Introduction section="introduction" className="introduction wave" />
      <HowItWorks section="how-it-works" className="how-it-works" />
      <WhyYouShould section="why-you-should" className="why-you-should wave" />
      <Conclusion section="conclusion" className="conclusion" />
    </>
  );
};
export default Main;
