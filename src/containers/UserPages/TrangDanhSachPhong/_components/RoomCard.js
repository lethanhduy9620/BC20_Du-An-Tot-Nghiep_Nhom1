import React from "react";
import { Link } from "react-router-dom";

export default function RoomCard(props) {
  const { _id: id, name, image, bedRoom, bath } = props.roomData;
  const price = new Intl.NumberFormat().format(props.roomData.price);

  return (
    <div className="card__container col">
      <div className="card room__card">
        <Link to={`/chi-tiet-phong/${id}`}>
          <img src={image} className="card-img-top" alt="#" />
        </Link>
        <div className="card-body room__content">
          <span className="room__subtitle">
            {bedRoom} Phòng ngủ - {bath} phòng tắm
          </span>
          <a href="#">
            <h5 className="card-title room__title">{name}</h5>
          </a>
          <span className="room__price">{`${price}đ /đêm`}</span>
        </div>
      </div>
    </div>
  );
}
