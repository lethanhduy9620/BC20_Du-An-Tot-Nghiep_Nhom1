import React, { Fragment } from "react";
import RoomCarousel from "./RoomCarousel";
import RoomInfo from "./RoomInfo";

export default function RoomDetail() {
  return (
    <Fragment>
      {/* Room Carousel */}
      <RoomCarousel></RoomCarousel>

      <RoomInfo></RoomInfo>


    </Fragment>
  );
}
