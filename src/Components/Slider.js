import React from "react";
import { Link } from "react-router-dom";

import classes from "./Slider.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "react-bootstrap/Carousel";

const Slider = () => {
  return (
    <div className={classes.slider}>
      <Carousel className={classes.sliderContainer}>
        <Carousel.Item className={classes.sliderCard}>
          <img
            className="d-block w-100"
            src={require("../Images/banner1.jpg")}
            alt="First slide"
          />

          <Carousel.Caption className={classes.firstCaption}>
            <img
              src={require("../Images/BMW-icon.png")}
              alt="bmw group"
              className={classes.bmwImg}
            />
            <h1>
              Modelet më të <br /> reja të BMW <br />
            </h1>
            <h1 className={classes.gseries}>G-Series</h1>
            <Link to="/abonimi" className={classes.firstCaptionBtn}>
              Abonohu tani
            </Link>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className={classes.sliderCard}>
          <img
            className="d-block w-100"
            src={require("../Images/banner2.jpg")}
            alt="Second slide"
          />

          <Carousel.Caption className={classes.firstCaption}>
            <img
              src={require("../Images/icon.png")}
              alt="bmw group"
              className={classes.bmwImg}
            />
            <h1>
              Gjeni pjesën e nevojshme <br /> brenda pak minutave <br />
            </h1>
            <Link to="/hyrja" className={classes.firstCaptionBtn}>
              Gjeje tani
            </Link>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className={classes.sliderCard}>
          <img
            className="d-block w-100"
            src={require("../Images/banner4.jpg")}
            alt="Third slide"
          />

          <Carousel.Caption className={classes.firstCaption}>
            <img
              src={require("../Images/volkswagen-logo.png")}
              alt="bmw group"
              className={classes.vwImg}
            />
            <h1>
              Të gjitha veturat <br /> e fundit nga <br />
            </h1>
            <h1 className={classes.gseries}>VAG Group</h1>
            <Link to="/abonimi" className={classes.firstCaptionBtn}>
              Abonohu tani
            </Link>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className={classes.sliderCard}>
          <img
            className="d-block w-100"
            src={require("../Images/banner3.jpg")}
            alt="Fourth slide"
          />

          <Carousel.Caption className={classes.firstCaption}>
            <img
              src={require("../Images/icon2.png")}
              alt="bmw group"
              className={classes.bmwImg}
            />
            <h1>
              Na ndiqni në <br /> Facebook & Instagram <br />
            </h1>
            <a
              href="https://www.facebook.com/autocatalog24"
              className={classes.firstCaptionBtn}
            >
              Na ndiqni
            </a>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Slider;
