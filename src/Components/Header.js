import React from "react";
import { Container } from "react-bootstrap";

import classes from "./Header.module.css";
import Navbar from "./Navbar";
import Slider from "./Slider";

const Header = () => {
  return (
    <div className={classes.header}>
      <Navbar />
      {/* <Container fluid="md"> */}
      <Slider />
      {/* </Container> */}
      <button className={classes.headerButton}>
        <span class={classes.btnText}>Vazhdoni më poshtë</span>
      </button>
      <div style={{ height: "1000px" }}>yo</div>
    </div>
  );
};

export default Header;
