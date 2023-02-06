import React from "react";

import classes from "./Header.module.css";

const Navbar = () => {
  return (
    <div className={classes.nav}>
      <img src={require("../Images/car-logo-vertical.png")} alt="logo" />
      <div className={classes.navList}>
        <div className={classes.login}>
          <button>Abonohu Tani!</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
