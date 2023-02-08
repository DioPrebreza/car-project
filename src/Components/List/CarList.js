import React from "react";
import { useCollection } from "../hooks/useCollection";
import Dropdown from "./Dropdown";

import classes from "./CarList.module.css";

const CarList = () => {
  const { documents, error } = useCollection("mercedes");
  console.log(documents);

  return (
    <div>
      <h2 className={classes.pageTitle}>Dashboard</h2>
      {error && <p className={classes.error}>{error}</p>}
      {documents && <Dropdown year={documents} />}
    </div>
  );
};

export default CarList;
