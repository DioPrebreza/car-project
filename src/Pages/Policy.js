import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import kushtet from "../PDFs/kushtet.pdf";

import classes from "../Components/Policy.module.css";

const Policy = () => {
  return (
    <div>
      <Navbar />
      <div className={classes.kushtet}>
        <iframe src={kushtet} width="100%" height="1000vh" />
      </div>
    </div>
  );
};

export default Policy;
