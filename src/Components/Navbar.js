import React from "react";
import { Link } from "react-router-dom";

import classes from "./Header.module.css";

const Navbar = () => {
  return (
    <div className={classes.nav}>
      <img src={require("../Images/car-logo-vertical.png")} alt="logo" />
      <div className={classes.navList}>
        <ul className={classes.navLinks}>
          <li>
            <Link to="/">Abonimi</Link>
          </li>
          <span className={classes.divider} />
          <li>
            <Link to="/">Kontakti</Link>
          </li>
          <span className={classes.divider} />
          <li>
            <Link to="/">FAQ</Link>
          </li>
        </ul>
        <div className={classes.login}>
          <button>Kyqu</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
