import React from "react";

import classes from "./Services.module.css";

const Services = () => {
  return (
    <div className={classes.services}>
      <div className={classes.serviceCard}>
        <img
          src={require("../Images/specs1.png")}
          alt="service"
          className={classes.serviceImg1}
        />
        <p className={classes.serviceText}>Përditësime qdo muaj</p>
      </div>
      <div className={classes.serviceCard}>
        <img
          src={require("../Images/specs2.png")}
          alt="service"
          className={classes.serviceImg2}
        />
        <p className={classes.serviceText}>E përshtatshme për telefon</p>
      </div>
      <div className={classes.serviceCard}>
        <img
          src={require("../Images/specs3.png")}
          alt="service"
          className={classes.serviceImg3}
        />
        <p className={classes.serviceText}>I lehtë për përdorim</p>
      </div>
      <div className={classes.serviceCard}>
        <img
          src={require("../Images/specs4.png")}
          alt="service"
          className={classes.serviceImg4}
        />
        <p className={classes.serviceText}>Të gjitha brendet & modelet</p>
      </div>
      <div className={classes.serviceCard}>
        <img
          src={require("../Images/specs5.png")}
          alt="service"
          className={classes.serviceImg5}
        />
        <p className={classes.serviceText}>Optimizuar dhe e testuar</p>
      </div>
    </div>
  );
};

export default Services;
