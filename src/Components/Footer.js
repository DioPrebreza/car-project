import React from "react";

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
                alt='footer-logo'
                className={classes.footerImg}
              />
              <p>
                Lider në industrinë e databazave në tregun e Kosovës duke ofruar
                shërbimet më cilësore dhe korrekte
              </p>
            </div>
          </div>
          <div className={classes.col}>
            <div className={classes.footerContact}>
              <h4>Kontakti</h4>
              <ul className={classes.listUnstyled}>
                <li>+383-43-895-387</li>
                <li>info@autocatalog24.com</li>
                <li>Prishtine, Kosove</li>
              </ul>
            </div>
          </div>
          <div className={classes.col}>
            <div className={classes.footerMenu}>
              <h4>Menu</h4>
              <ul className={classes.listUnstyled}>
                <li>Abonimi</li>
                <li>Kontakti</li>
                <li>FAQ</li>
              </ul>
            </div>
          </div>
          <div className={classes.col}>
            <div className={classes.footerSocial}>
              <h4>Na ndiqni</h4>
              <ul className={classes.listUnstyled}>
                <li>
                  <a
                    href='https://www.facebook.com/'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <img
                      src={require("../Images/Facebook.png")}
                      alt='facebook'
                      className={classes.socialImg}
                    />
                  </a>
                </li>
                <li>
                  <a
                    href='https://www.instagram.com/'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <img
                      src={require("../Images/Instagram.png")}
                      alt='instagram'
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
            &copy;{new Date().getFullYear()} 4th Dimension | All rights reserved
            | Terms Of Service | Privacy
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
