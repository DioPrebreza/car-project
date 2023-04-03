import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
// import FAQinfo from "../Components/FAQinfo";
import Accordion from "../Components/FAQinfo";

const FAQ = () => {
  return (
    <div>
      <Navbar />
      {/* <FAQinfo /> */}
      <Accordion />
      <Footer />
    </div>
  );
};

export default FAQ;
