import React from "react";
import { Link } from "react-router-dom";

import classes from "./Header.module.css";

const Navbar = () => {
  return (
    <div className={classes.nav}>
      <img src={require("../Images/Logo-PNG.png")} alt="logo" />
      <div className={classes.navList}>
        <ul className={classes.navLinks}>
          <li>
            <Link to="/pricing">Abonimi</Link>
          </li>
          <span className={classes.divider} />
          <li>
            <Link to="/contact">Kontakti</Link>
          </li>
          <span className={classes.divider} />
          <li>
            <Link to="/faq">FAQ</Link>
          </li>
        </ul>
        <div className={classes.login}>
          <Link to="/list">
            <button>
              Kyqu
              <img
                src={require("../Images/Login-icon.png")}
                alt="login-symbol"
              />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
