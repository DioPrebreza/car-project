import React from "react";

import classes from "./CarList.module.css";

const list = [
  {
    url: "https://audi.catalogs-parts.com/#{client:sfjmr4;page:models;lang:en;region:rdw}",
    imgUrl: "https://catalogs-parts.com/images/cp_brands_mini/audi.png",
  },
  {
    url: "https://volkswagen.catalogs-parts.com/#{client:sfjmr4;page:models;lang:en;region:rdw}",
    imgUrl: "https://catalogs-parts.com/images/cp_brands_mini/vw.png",
  },
  {
    url: "https://skoda.catalogs-parts.com/#{client:sfjmr4;page:models;lang:en;region:cz}",
    imgUrl: "https://catalogs-parts.com/images/cp_brands_mini/skoda.png",
  },
  {
    url: "https://seat.catalogs-parts.com/#{client:sfjmr4;page:models;lang:en;region:e}",
    imgUrl: "https://catalogs-parts.com/images/cp_brands_mini/seat.png",
  },
  {
    url: "https://opel.catalogs-parts.com/#{client:sfjmr4;page:models;lang:en;category:car}",
    imgUrl: "https://catalogs-parts.com/images/cp_brands_mini/opel.png",
  },
  {
    url: "https://bmw.catalogs-parts.com/#{client:sfjmr4;page:models;lang:en;name:bmw}",
    imgUrl: "https://catalogs-parts.com/images/cp_brands_mini/bmw.png",
  },
];

const CarList = () => {
  return (
    <div className={classes.listWrapper}>
      <h1 className={classes.listTitle}>Zgjedh markën:</h1>
      <p>Klikoni në logo</p>
      <div className={classes.brands}>
        {list.map((car) => {
          return (
            <div className={classes.listLogo}>
              <a href={car.url}>
                <img src={car.imgUrl} />
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CarList;
