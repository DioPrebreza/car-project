import React from "react";
import { Link } from "react-router-dom";

//styles
import classes from "./About.module.css";

function About() {
  return (
    <div className={classes.aboutWrapper}>
      <div className={classes.text}>
        <h1> RRETH NESH </h1>
        <p>
          Databazë e optimizuar e pjesëve të veturave duke përfshirë të gjitha
          modelet dhe brendet, qëllimi i databazës është lehtësimi i punës së
          auto servisave dhe auto pjesëve të ndryshme të cilat tashmë mund të
          operojnë me databazën e krijuar tonë e cila është e përditësuar me
          modelet më të fundit të veturave.
        </p>
        <Link to="/contact" className={classes.contactButton}>
          Na Kontaktoni
        </Link>
      </div>
    </div>
  );
}

export default About;
