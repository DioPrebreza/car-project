import React, { Fragment } from "react";
import Header from "../Components/Header";
import About from "../Components/About";
import Footer from "../Components/Footer";
import Services from "../Components/Services";

const Home = () => {
  return (
    <Fragment>
      <Header />
      <About />
      <Services />
      <Footer />
    </Fragment>
  );
};

export default Home;
