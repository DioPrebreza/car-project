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
  {
    url: "https://bmw-i.catalogs-parts.com/#{client:sfjmr4;page:models;lang:en;name:bmw-i}",
    imgUrl: "https://catalogs-parts.com/images/cp_brands_mini/bmwi.png",
  },
  {
    url: "https://ford.catalogs-parts.com/#{client:sfjmr4;page:models;lang:en;category:car}",
    imgUrl: "https://catalogs-parts.com/images/cp_brands_mini/ford.png",
  },
  {
    url: "https://kia.catalogs-parts.com/#{client:sfjmr4;page:models;lang:en;catalog:eur}",
    imgUrl: "https://catalogs-parts.com/images/cp_brands_mini/kia.png",
  },
  {
    url: "https://rolls-royce.catalogs-parts.com/#{client:sfjmr4;page:models;lang:en;name:rolls-royce}",
    imgUrl: "https://catalogs-parts.com/images/cp_brands_mini/rolls_royce.png",
  },
  {
    url: "https://mercedes.catalogs-parts.com/#{client:sfjmr4;page:models;lang:en;catalog:eu;set_aggtyp:fg;wheel_class:car}",
    imgUrl: "https://catalogs-parts.com/images/cp_brands_mini/merce.png",
  },
  {
    url: "https://smart.catalogs-parts.com/#{client:sfjmr4;page:models;lang:en;catalog:eu;set_aggtyp:fg;wheel_class:car}",
    imgUrl: "https://catalogs-parts.com/images/cp_brands_mini/smart.png",
  },
  {
    url: "https://nissan.catalogs-parts.com/#{client:sfjmr4;page:models;lang:en;catalog:el}",
    imgUrl: "https://catalogs-parts.com/images/cp_brands_mini/nissan.png",
  },
  {
    url: "https://honda.catalogs-parts.com/#{client:sfjmr4;page:models;lang:en}",
    imgUrl: "https://catalogs-parts.com/images/cp_brands_mini/honda.png",
  },
  {
    url: "https://toyota.catalogs-parts.com/#{client:sfjmr4;page:models;lang:en;catalog:eu}",
    imgUrl: "https://catalogs-parts.com/images/cp_brands_mini/toyota.png",
  },
  {
    url: "https://hyundai.catalogs-parts.com/#{client:sfjmr4;page:models;lang:en;catalog:eur}",
    imgUrl: "https://catalogs-parts.com/images/cp_brands_mini/hyundai.png",
  },
  {
    url: "https://fiat.catalogs-parts.com/#{client:sfjmr4;page:models;lang:en}",
    imgUrl: "https://catalogs-parts.com/images/cp_brands_mini/fiat.png",
  },
  {
    url: "https://alfa-romeo.catalogs-parts.com/#{client:sfjmr4;page:models;lang:en}",
    imgUrl: "https://catalogs-parts.com/images/cp_brands_mini/alfa_romeo.png",
  },
  {
    url: "https://mini.catalogs-parts.com/#{client:sfjmr4;page:models;lang:en;name:mini}",
    imgUrl: "https://catalogs-parts.com/images/cp_brands_mini/mini.png",
  },
  {
    url: "https://vauxhall.catalogs-parts.com/#{client:sfjmr4;page:models;lang:en;category:car}",
    imgUrl: "https://catalogs-parts.com/images/cp_brands_mini/vauxhall.png",
  },
  {
    url: "https://maybach.catalogs-parts.com/#{client:sfjmr4;page:models;lang:en;catalog:eu;set_aggtyp:fg;wheel_class:car}",
    imgUrl: "https://catalogs-parts.com/images/cp_brands_mini/maybach.png",
  },
  {
    url: "https://infiniti.catalogs-parts.com/#{client:sfjmr4;page:models;lang:en;catalog:el}",
    imgUrl: "https://catalogs-parts.com/images/cp_brands_mini/infiniti.png",
  },
  {
    url: "https://lexus.catalogs-parts.com/#{client:sfjmr4;page:models;lang:en;catalog:eu}",
    imgUrl: "https://catalogs-parts.com/images/cp_brands_mini/lexus.png",
  },
  {
    url: "https://abarth.catalogs-parts.com/#{client:sfjmr4;page:models;lang:en}",
    imgUrl: "https://catalogs-parts.com/images/cp_brands_mini/abarth.png",
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
                <img src={`${car.imgUrl}`} />
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CarList;
