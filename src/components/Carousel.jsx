import React from "react";
import { List } from "../data/imageList.js";

const Carousel = ({ index, handleNext, handlePrev }) => {
  return (
    <div className="carousel-container">
      <div className="carousel w-full mt-5">
        <div id="slide2" className="carousel-item relative w-full">
          <img src={List[index]?.img} className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <button className="btn btn-circle" onClick={handlePrev}>
              ❮
            </button>
            <button className="btn btn-circle" onClick={handleNext}>
              ❯
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
