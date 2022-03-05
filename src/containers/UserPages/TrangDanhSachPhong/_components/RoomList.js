import { data } from "jquery";
import React from "react";
import RoomCard from "./RoomCard";

export default function RoomList(props) {
  const roomList = props?.roomList;
  // const roomQuantity = roomList?.length;
  // const locationName = roomList?.[0].locationId.province;

  return (
    <div className="room__list container-fluid">
      {/* <h4 className="list__title">
        {roomQuantity} homestays tại {locationName}
      </h4> */}
      <div className="rooms__container row row-cols-5">
        {roomList?.map((roomData, index) => {
          return <RoomCard key={roomData._id} roomData={roomData}></RoomCard>;
        })}
      </div>
    </div>
  );
}
