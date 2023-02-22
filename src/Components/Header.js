import React, { useState, useEffect } from "react";
import { auth } from "../firebase/config";

import classes from "./Header.module.css";
import HeaderList from "./HeaderList";
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
      <HeaderList />
      {auth.currentUser && <div>yes</div>}
      {/* console.log(auth.currentUser) */}
    </div>
  );
};

export default Header;
