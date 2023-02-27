import React from "react";

import classes from "./Slider.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "react-bootstrap/Carousel";

const Slider = () => {
  return (
    <Carousel>
      <Carousel.Item>
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
          <button className={classes.firstCaptionBtn}>Abonohu tani</button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
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
          <button className={classes.firstCaptionBtn}>Gjeje tani</button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={require("../Images/banner3.jpg")}
          alt="Third slide"
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
          <button className={classes.firstCaptionBtn}>Na ndiqni</button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Slider;
