import React from "react";
import { projectFirestore } from "../../Firebase/config";

export default function Dropdown({ year }) {
  console.log(year);
  return (
    <div>
      {year.length === 0 && <p>No cars registered</p>}
      {year.map((year) => {
        <div key={year.id}>
          <p>{year.mark}</p>
        </div>;
      })}
    </div>
  );
}
