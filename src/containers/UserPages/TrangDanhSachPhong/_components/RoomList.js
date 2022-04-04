import React from "react";
import RoomCard from "./RoomCard";

export default function RoomList(props) {
  const roomList = props.roomList;
  const locationName = roomList?.[0]?.locationId?.province;

  return (
    <div className="roomList__container container-fluid px-2rem">
      {roomList?.length !== 0 && (
        <h4 className="list__title">
          {props.roomQuantity} homestays tại {locationName}
        </h4>
      )}

      <div className="rooms__container row row-cols-2 row-cols-lg-4 row-cols-xl-5">
        {roomList?.map((roomData, index) => {
          return <RoomCard key={roomData._id} roomData={roomData}></RoomCard>;
        })}
      </div>
    </div>
  );
}
