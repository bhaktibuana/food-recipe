import React from "react";
import "./slider.scss"

function SliderContent({ activeIndex, sliderImage }) {
  return (
    <section>
      {sliderImage.map((slide, index) => (
        <div
          key={index}
          className={index === activeIndex ? "slides active" : "inactive"}
        >
             {index === activeIndex && ( 
            <>
          <img className="slide-image" src={slide.urls} alt="" />
          <div className="content">
                <h1>{slide.title}</h1>
                    <h4>{slide.description}</h4>
                    <hr />
                        <button className="btn btn-primary">View Here</button>
        </div>
        </>
             )}
        </div>
      ))}
    </section>
  );
}

export default SliderContent;