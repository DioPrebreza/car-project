import React from "react";
import { Link } from "react-router-dom";
import ViberLink from "react-viber-link";
import ReactWhatsapp from "react-whatsapp";

import classes from "./Pricings.module.css";

const Pricings = () => {
  return (
    <div className={classes.pricingWrapper}>
      <div className={classes.pricingTitle}>
        <h2>SHUMË ZGJIDHJE TË ABONIMEVE</h2>
        <h6>Planet e abonimit janë të paraqitura më poshtë:</h6>
      </div>
      <div className={classes.pricingCardsContainer}>
        <div className={classes.pricingCard}>
          <h5>DITORE</h5>
          <p>Ideale për qasje shumë të shkurtë në raste të nevojshme</p>
          <h1>10€</h1>
          <Link to="/list" className={classes.pricingButton}>
            1 DITË
          </Link>
          <ul className={classes.cardList}>
            <li>
              <img
                src={require("../Images/Tick-icon.png")}
                style={{ width: "20px" }}
              />
              Qasje vetëm për 24 orë
            </li>
            <li>
              <img
                src={require("../Images/Tick-icon.png")}
                style={{ width: "20px" }}
              />
              E optimizuar dhe testuar
            </li>
            <li>
              <img
                src={require("../Images/Tick-icon.png")}
                style={{ width: "20px" }}
              />
              Katalog i ndarë në grupe
            </li>
            <li>
              <img
                src={require("../Images/Tick-icon.png")}
                style={{ width: "20px" }}
              />
              Kërkimi përmes VIN numrit
            </li>
          </ul>
        </div>
        <div className={classes.pricingCardMain}>
          <h5>VJETORE</h5>
          <p>
            Ideale për biznese / korporata që iu nevojitet qasje gjatë tërë
            vitit
          </p>
          <h1 style={{ color: "#fff" }}>250€</h1>
          <Link
            to="/list"
            className={classes.pricingButton}
            style={{ backgroundColor: "#fff", color: "#428bca" }}
          >
            1 VIT
          </Link>
          <ul className={classes.cardList}>
            <li>
              <img
                src={require("../Images/Tick-icon-white.png")}
                style={{ width: "20px" }}
              />
              Qasje për 365 ditë, 24/7
            </li>
            <li>
              <img
                src={require("../Images/Tick-icon-white.png")}
                style={{ width: "20px" }}
              />
              E optimizuar dhe testuar
            </li>
            <li>
              <img
                src={require("../Images/Tick-icon-white.png")}
                style={{ width: "20px" }}
              />
              Katalog i ndarë në grupe
            </li>
            <li>
              <img
                src={require("../Images/Tick-icon-white.png")}
                style={{ width: "20px" }}
              />
              Kërkimi përmes VIN numrit
            </li>
            <li>
              <img
                src={require("../Images/Tick-icon-white.png")}
                style={{ width: "20px" }}
              />
              Përfshihen 2 muaj falas
            </li>
          </ul>
        </div>
        <div className={classes.pricingCard}>
          <h5>MUJORE</h5>
          <p>Ideale për biznese të vogla me bugjet të limituar</p>
          <h1>30€</h1>
          <Link to="/list" className={classes.pricingButton}>
            1 MUAJ
          </Link>
          <ul className={classes.cardList}>
            <li>
              <img
                src={require("../Images/Tick-icon.png")}
                style={{ width: "20px" }}
              />
              Qasje vetëm për 30 ditë
            </li>
            <li>
              <img
                src={require("../Images/Tick-icon.png")}
                style={{ width: "20px" }}
              />
              E optimizuar dhe testuar
            </li>
            <li>
              <img
                src={require("../Images/Tick-icon.png")}
                style={{ width: "20px" }}
              />
              Katalog i ndarë në grupe
            </li>
            <li>
              <img
                src={require("../Images/Tick-icon.png")}
                style={{ width: "20px" }}
              />
              Kërkimi përmes VIN numrit
            </li>
          </ul>
        </div>
      </div>
      <div className={classes.pricingText}>
        <h3>SI TA PAGUAJMË PLANIN E DËSHIRUAR?</h3>
        <h6>
          Shumë e thjeshtë! Vetëm klikoni në njërën nga ikonat e mëposhtme dhe
          do te lidheni direkt me njërin nga agjentët tanë për të vazhduar me
          pagesën direkte.
        </h6>
        <h4>VAZHDONI NË:</h4>
        <ViberLink number="+383 45 208 666">
          <img
            src={require("../Images/viber-icon.png")}
            alt="viber"
            style={{ width: "200px" }}
          />
        </ViberLink>
        <ReactWhatsapp
          number="383-45-208-666"
          message="Përshëndetje!"
          style={{ border: "none", background: "#fff" }}
        >
          <img
            src={require("../Images/whatsapp-icon.png")}
            alt="whatsapp"
            style={{ width: "250px" }}
          />
        </ReactWhatsapp>
      </div>
    </div>
  );
};

export default Pricings;
