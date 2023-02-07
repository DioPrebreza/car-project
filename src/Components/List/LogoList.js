import { classes } from "istanbul-lib-coverage";
import React from "react";
import { Link } from "react-router-dom";

const LogoList = (data) => {
  const { id, brand } = data;
  return (
    <div>
      <div>
        {id.map((data) => {
          console.log(data);
          return (
            <div key={data} className={classes.logo}>
              <h3>test</h3>
              <p>test</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default LogoList;
