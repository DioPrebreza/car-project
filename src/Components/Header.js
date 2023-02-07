import React, { useState, useEffect } from "react";

import classes from "./Header.module.css";
import LandingList from "./List/LandingList";
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
      <LandingList />
    </div>
  );
};

export default Header;
