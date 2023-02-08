import React from "react";
import { projectFirestore } from "../../firebase/config";

export default function Dropdown({ year }) {
  let years = Object.values(year).map((value) => [value]);
  return (
    <div>
      {years.length === 0 && <p>No cars registered</p>}
      {console.log(typeof years)}
      {years.map((value) => {
        {
        }
        <div key={years.id}>
          <p>{years.mark}</p>
          <p>test</p>
        </div>;
      })}
    </div>
  );
}
