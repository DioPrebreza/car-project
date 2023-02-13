import React from "react";
import { useCollection } from "../hooks/useCollection";
import Dropdown from "./Dropdown";

import classes from "./CarList.module.css";

const CarList = () => {
  const { documents, error } = useCollection("mercedes");
  console.log(documents);

  return (
    <div>
      <a href="https://audi.catalogs-parts.com/#{client:sfjmr4;page:models;lang:en;region:rdw}">
        <img src="https://catalogs-parts.com/images/cp_brands_mini/audi.png" />
      </a>
      <a href="https://volkswagen.catalogs-parts.com/#{client:sfjmr4;page:models;lang:en;region:rdw}">
        <img src="https://catalogs-parts.com/images/cp_brands_mini/vw.png" />
      </a>
      <a href="https://skoda.catalogs-parts.com/#{client:sfjmr4;page:models;lang:en;region:cz}">
        <img src="https://catalogs-parts.com/images/cp_brands_mini/skoda.png" />
      </a>
      <a href="https://seat.catalogs-parts.com/#{client:sfjmr4;page:models;lang:en;region:e}">
        <img src="https://catalogs-parts.com/images/cp_brands_mini/seat.png" />
      </a>
      <a href="https://opel.catalogs-parts.com/#{client:sfjmr4;page:models;lang:en;category:car}">
        <img src="https://catalogs-parts.com/images/cp_brands_mini/opel.png" />
      </a>
    </div>
  );
};

export default CarList;
