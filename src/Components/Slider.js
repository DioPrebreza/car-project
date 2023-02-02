import React from "react";
// import { Slide } from "react-slideshow-image";
// import "react-slideshow-image/dist/styles.css";

// const spanStyle = {
//   padding: "20px",
//   background: "#efefef",
//   color: "#000000",
// };

// const divStyle = {
//   display: "flex",
//   alignItems: "center",
//   justifyContent: "center",
//   backgroundSize: "contain",
//   backgroundRepeat: "no-repeat",
//   height: "95vh",
// };
// const slideImages = [
//   {
//     url: require("../Images/slider-test.png"),
//     caption: "Slide 1",
//   },
//   {
//     url: "https://images.unsplash.com/photo-1502877338535-766e1452684a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80",
//     caption: "Slide 2",
//   },
//   {
//     url: "https://images.unsplash.com/photo-1494905998402-395d579af36f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
//     caption: "Slide 3",
//   },
// ];

// const Slider = () => {
//   return (
//     <div className={classes.slideContainer}>
//       <Slide>
//         {slideImages.map((slideImage, index) => (
//           <div key={index}>
//             <div
//               style={{ ...divStyle, backgroundImage: `url(${slideImage.url})` }}
//             >
//               {/* <span style={spanStyle}>{slideImage.caption}</span> */}
//             </div>
//           </div>
//         ))}
//       </Slide>
//     </div>
//   );
// };

// export default Slider;

import classes from "./Header.module.css";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import ThemeProvider from "react-bootstrap/ThemeProvider";
import Carousel from "react-bootstrap/Carousel";

const Slider = () => {
  return (
    <Container fluid size="md">
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={require("../Images/slider-image-1.jpg")}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={require("../Images/image-2.jpg")}
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={require("../Images/image-3.png")}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </Container>
  );
};

export default Slider;
