import React from "react";

//styles
import classes from "./Footer.module.css";

function Footer() {
  return (
    <div className={classes.mainFooter}>
      <div className={classes.container}>
        <div className={classes.row}>
          <div className={classes.col}>
            <h4>Company Name/Logo</h4>
            <ul className={classes.listUnstyled}>
              <li>044-111-222</li>
              <li>Prishtine, Kosove</li>
              <li>123 Rr.Gjorgj Fluidi</li>
            </ul>
          </div>
          <div className={classes.col}>
            <h4>Link Map</h4>
            <ul className={classes.listUnstyled}>
              <li>Link nr.1</li>
              <li>Link nr.2</li>
              <li>Link nr.3</li>
            </ul>
          </div>
          <div className={classes.col}>
            <h4>Social media</h4>
            <ul className={classes.listUnstyled}>
              <li>Facebook</li>
              <li>Instagram</li>
              <li>Email</li>
            </ul>
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
