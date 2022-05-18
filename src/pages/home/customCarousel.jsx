import React from "react";
import { Carousel } from "antd";

import "./customCarouselStyle.scss";

const CustomCarousel = () => {
  return (
    <>
      <Carousel autoplay>
        <div className="carousel-content">
          <img
            src={require("../../images/carrot_juice.webp")}
            alt=""
            className="carousel-img"
          />
        </div>

        <div className="carousel-content">
          <img
            src={require("../../images/microgreen_smoothie.webp")}
            alt=""
            className="carousel-img"
          />
        </div>

        <div className="carousel-content">
          <img
            src={require("../../images/avocado_toast.webp")}
            alt=""
            className="carousel-img"
          />
        </div>
      </Carousel>
    </>
  );
};

export default CustomCarousel;
