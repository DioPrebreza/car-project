import React from "react";
import { Link } from "react-router-dom";

//styles
import classes from "./Footer.module.css";

function Footer() {
  return (
    <div className={classes.mainFooter}>
      <div className={classes.container}>
        <div className={classes.row}>
          <div className={classes.col}>
            <div className={classes.footerLogo}>
              <img
                src={require("../Images/Logo-PNG.png")}
                alt="footer-logo"
                className={classes.footerImg}
              />
              <p>
                Lider në industrinë e databazave në tregun e Kosovës duke ofruar
                shërbimet më cilësore dhe korrekte
              </p>
            </div>
          </div>
          <div className={classes.col}>
            <div className={classes.footerMenu}>
              <h4>MENU</h4>
              <ul className={classes.listUnstyled}>
                <li>
                  <Link to="/abonimi" className={classes.contactLink}>
                    Abonimi
                  </Link>
                </li>
                <li>
                  <Link to="/kontakt" className={classes.contactLink}>
                    Kontakti
                  </Link>
                </li>
                <li>
                  <Link to="/faq" className={classes.contactLink}>
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className={classes.col}>
            <div className={classes.footerContact}>
              <h4>KONTAKTI</h4>
              <ul className={classes.listUnstyled}>
                <li>+383-43-895-387</li>
                <li>info@autocatalog24.com</li>
                <li>Prishtinë, Kosovë</li>
              </ul>
            </div>
          </div>

          <div className={classes.col}>
            <div className={classes.footerSocial}>
              <h4>NA NDIQNI</h4>
              <ul className={classes.listUnstyled}>
                <li>
                  <a
                    href="https://www.facebook.com/autocatalog24"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      src={require("../Images/Facebook.png")}
                      alt="facebook"
                      className={classes.socialImg}
                    />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/reklamohu"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      src={require("../Images/Instagram.png")}
                      alt="instagram"
                      className={classes.socialImg}
                    />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr />
        <div className={classes.row}>
          <p className={classes.colSm}>
            Të gjitha të drejtat e rezervuara &copy;{new Date().getFullYear()}{" "}
            AutoCatalog24. Mundësuar dhe zhvilluar nga{" "}
            <b>Reklamohu Marketing Agency</b>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
