import React from "react";

import classes from "./Services.module.css";

const Services = () => {
  return (
    <div className={classes.services}>
      <div className={classes.serviceCard}>
        <div className={classes.bgBox}>
          <img
            src={require("../Images/ikona1.png")}
            alt="service"
            className={classes.serviceImg1}
          />
        </div>
        <p className={classes.serviceText}>Përditësime qdo muaj</p>
      </div>

      <div className={classes.serviceCard}>
        <div className={classes.bgBox}>
          <img
            src={require("../Images/ikona3-(1).png")}
            alt="service"
            className={classes.serviceImg2}
          />
        </div>
        <p className={classes.serviceText}>E përshtatshme për telefon</p>
      </div>

      <div className={classes.serviceCard}>
        <div className={classes.bgBox}>
          <img
            src={require("../Images/ikona3.png")}
            alt="service"
            className={classes.serviceImg3}
          />
        </div>
        <p className={classes.serviceText}>I lehtë për përdorim</p>
      </div>

      <div className={classes.serviceCard}>
        <div className={classes.bgBox}>
          <img
            src={require("../Images/ikona4.png")}
            alt="service"
            className={classes.serviceImg4}
          />
        </div>
        <p className={classes.serviceText}>Të gjitha brendet & modelet</p>
      </div>

      <div className={classes.serviceCard}>
        <div className={classes.bgBox}>
          <img
            src={require("../Images/ikona5.png")}
            alt="service"
            className={classes.serviceImg5}
          />
        </div>
        <p className={classes.serviceText}>Optimizuar dhe e testuar</p>
      </div>
    </div>
  );
};

export default Services;
