import React from "react";

import classes from "./Header.module.css";
import Navbar from "./Navbar";
import Slider from "./Slider";

const Header = () => {
  return (
    <div>
      <Navbar />
      <Slider />
    </div>
  );
};

export default Header;
