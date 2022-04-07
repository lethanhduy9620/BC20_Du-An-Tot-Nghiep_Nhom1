import React from "react";
import "./style.css";
export default function Carousel() {
  return (
    <div style={{ backgroundColor: "black" }}>
      <div
        style={{ backgroundImage: "url(./img/image2.png)" }}
        className="bg-carousel"
      >
        <div className="carousel-content">
          <h1>Not sure where to go? Perfect.</h1>
          <button className="btn btn-primary">I'm flexible</button>
        </div>
      </div>
    </div>
  );
}
