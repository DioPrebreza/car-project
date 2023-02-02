import React from "react";

import classes from "./Header.module.css";

const Navbar = () => {
  return (
    <div className={classes.nav}>
      <img src={require("../Images/car-logo.png")} alt="logo" />
      <ul className={classes.navList}>
        {/* <li className={classes.navLinks}>
          <a href="/" className={classes.aStyle}>
            Ballina
          </a>
        </li>
        <li className={classes.navLinks}>
          <a href="/" className={classes.aStyle}>
            Zgjedh Modelin
          </a>
        </li> */}
        <li className={classes.login}>
          <input type="email" placeholder="Email:"></input>
          <input type="text" placeholder="Password:"></input>
          <button>Login</button>
          <button style={{ display: "none" }}>Sign Up</button>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
