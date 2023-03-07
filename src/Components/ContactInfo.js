import React from "react";

import classes from "./ContactInfo.module.css";

const ContactInfo = () => {
  return (
    <div className={classes.contact}>
      <div className={classes.contactTitle}>
        <h2>NA KONTAKTONI</h2>
        <h6>Keni pyetje apo kërkesa? Jemi këtu për ju, na kontaktoni në:</h6>
      </div>
      <div className={classes.cardContainer}>
        <div className={classes.contactCard}>
          <div className={classes.icon}>
            <img src={require("../Images/telefon-ikona.png")} alt="icon" />
          </div>
          <h4>TELEFONI</h4>
          <h3>043-895-387</h3>
          <h3>045-668-038</h3>
        </div>
        <div className={classes.contactCardMain}>
          <div className={classes.icon} style={{ backgroundColor: "#428bca" }}>
            <img src={require("../Images/email-ikona.png")} alt="icon" />
          </div>
          <h4>EMAIL ADRESA</h4>
          <h3>INFO@AUTOCATALOG24.COM</h3>
        </div>
        <div className={classes.contactCard}>
          <div className={classes.icon}>
            <img src={require("../Images/lokacioni-ikona.png")} alt="icon" />
          </div>
          <h4>LOKACIONI</h4>
          <h3>RR. FERAT DRAGAJ</h3>
          <h3>PRISHTINË</h3>
        </div>
      </div>
      <div className={classes.contactText}>
        <h2>LOKACIONI YNË</h2>
        <h6>
          Dëshironi takim fizik për ndonjë bashkëpunim? <br /> Mund të na gjeni
          në adresën e mëposhtme:
        </h6>
      </div>
      <div className={classes.map}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d2934.288187858658!2d21.171474999999997!3d42.655248!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDLCsDM5JzE4LjkiTiAyMcKwMTAnMTcuMyJF!5e0!3m2!1sen!2s!4v1678177382189!5m2!1sen!2s"
          width="100%"
          height="100%"
          style={{ borderRadius: "20px" }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactInfo;
