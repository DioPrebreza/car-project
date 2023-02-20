import React from "react";

import classes from "./About.module.css";

const About = () => {
  return (
    <div className={classes.main}>
      <div className={classes.title}>Rreth neve</div>
      <div className={classes.columnList}>
        <div className={classes.column}>
          <div className={classes.column}>Item 1</div>
          <div className={classes.column}>Item 2</div>
          <div className={classes.column}>Item 3</div>
        </div>
      </div>
    </div>
  );
};

export default About;
