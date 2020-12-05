import React from "react";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

const Wrapper = ({ main }) => {
  return (
    <>
      <Header />
      <main>{main}</main>
      <Footer />
    </>
  );
};
export default Wrapper;
