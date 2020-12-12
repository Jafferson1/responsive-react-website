import React from "react";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

const Wrapper = ({ Component }) => {
  return (
    <>
      <Header />
      <main>
        <Component />
      </main>
      <Footer />
    </>
  );
};
export default Wrapper;
