import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useSelector } from "react-redux";

export default function RoomCarousel() {
  const roomData = useSelector((state) => state.roomDetailReducer.data);

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div id="carousel__container" className="carousel__container">
      <Slider {...settings}>
        <div className="pictures__container">
          <img src={roomData?.image} alt="room-image" />
        </div>
        {/* Clone images để tạo hiệu ứng cho slick carousel */}
        <div className="pictures__container">
          <img src="/img/no-image-available.jpg" alt="room1" />
        </div>
        <div className="pictures__container">
          <img src="/img/no-image-available.jpg" alt="room1" />
        </div>
        <div className="pictures__container">
          <img src="/img/no-image-available.jpg" alt="room1" />
        </div>
      </Slider>
    </div>
  );
}
