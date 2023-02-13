import React, { useState, useEffect } from "react";

import classes from "./Header.module.css";
import CarList from "./List/CarList";
import Navbar from "./Navbar";
import Slider from "./Slider";

const Header = () => {
  return (
    <div className={classes.header}>
      <Navbar />
      <Slider />
      {/* </Container> */}
      {/* <button className={classes.headerButton}>
        <span class={classes.btnText}>Vazhdoni më poshtë</span>
      </button> */}
    </div>
  );
};

export default Header;
