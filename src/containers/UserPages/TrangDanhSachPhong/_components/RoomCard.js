import React from "react";

export default function RoomCard(props) {
  const { name, image, bedRoom, bath } = props.roomData;
  const price = new Intl.NumberFormat().format(props.roomData.price);

  return (
    <div className="card__container col">
      <div className="card room__card">
        <a href="#">
          <img src={image} className="card-img-top" alt="#" />
        </a>
        <div className="card-body room__content">
          <span className="room__subtitle">
            {bedRoom} Phòng ngủ - {bath} phòng tắm
          </span>
          <a href="#">
            <h5 className="card-title room__title">{name}</h5>
          </a>
          {/* <span className="room__price">{`850,000₫/đêm`}</span> */}
          <span className="room__price">{`${price}₫/đêm`}</span>
        </div>
      </div>
    </div>
  );
}
