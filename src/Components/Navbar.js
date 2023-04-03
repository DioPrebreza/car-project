import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

import classes from "./Header.module.css";

const Navbar = () => {
  const [burger, setBurger] = useState(false);

  const showBurgerMenu = () => {
    if (!burger) {
      setBurger(true);
    }

    if (burger) {
      setBurger(false);
    }
  };

  return (
    <div className={classes.nav}>
      <Link to="/" className={classes.logo}>
        <img src={require("../Images/Logo-PNG.png")} alt="logo" />
      </Link>
      <div className={classes.navList}>
        <ul className={classes.navLinks}>
          <li>
            <Link to="/abonimi" className={classes.navLink}>
              Abonimi
            </Link>
          </li>
          <span className={classes.divider} />
          <li>
            <Link to="/kontakt" className={classes.navLink}>
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
          <Link to="/hyrja">
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
      <div className={classes.burger}>
        <FontAwesomeIcon
          className={classes.bars}
          icon={burger ? faTimes : faBars}
          onClick={showBurgerMenu}
        />
        <div
          className={
            burger ? classes.burgerMenuShown : classes.burgerMenuHidden
          }
        >
          <ul>
            <li>
              <Link to="/abonimi">Abonimi</Link>
            </li>
            <div className={classes.divider}></div>
            <li>
              <Link to="/kontakt">Kontakti</Link>
            </li>
            <div className={classes.divider}></div>
            <li>
              <Link to="/faq">FAQ</Link>
            </li>
            <li>
              <div className={classes.login}>
                <Link to="/hyrja">
                  <button>
                    Kyqu
                    <img
                      src={require("../Images/Login-icon.png")}
                      alt="login-symbol"
                    />
                  </button>
                </Link>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
