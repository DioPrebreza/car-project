import React from "react";
import { Link } from "react-router-dom";

import classes from "./Header.module.css";

const Navbar = () => {
  return (
    <div className={classes.nav}>
      <Link to="/">
        <img src={require("../Images/Logo-PNG.png")} alt="logo" />
      </Link>
      <div className={classes.navList}>
        <ul className={classes.navLinks}>
          <li>
            <Link to="/pricing" className={classes.navLink}>
              Abonimi
            </Link>
          </li>
          <span className={classes.divider} />
          <li>
            <Link to="/contact" className={classes.navLink}>
              Kontakti
            </Link>
          </li>
          <span className={classes.divider} />
          <li>
            <Link to="/faq" className={classes.navLink}>
              FAQ
            </Link>
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
