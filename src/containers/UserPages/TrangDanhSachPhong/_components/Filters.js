import React from "react";

export default function Filters() {
  return (
    <div className="filter__container row justify-content-between align-items-center">
      <button className="btn btn-light filter__item">
        Price <i className="fa fa-angle-down" />
      </button>
      <button className="btn btn-light filter__item">
        Type of place <i className="fa fa-angle-down" />
      </button>
      <div className="vertical__line" />
      <button className="btn btn-light filter__item">Thang Máy</button>
      <button className="btn btn-light filter__item">Wifi</button>
      <button className="btn btn-light filter__item">Phòng Bếp</button>
      <button className="btn btn-light filter__item">Máy Sấy</button>
      <button className="btn btn-light filter__item">Điều Hòa Nhiệt Độ</button>
      <button className="btn btn-light filter__item">Truyền Hình Cáp</button>
      <button className="btn btn-light filter__item">Hồ Massage</button>
      <button className="btn btn-light filter__item">
       Gym
      </button>
      <button className="btn btn-light filter__item">
       Hồ Bơi
      </button>
      <button className="btn btn-light filter__button">
        <i className="fa fa-list-ul" /> Filters
      </button>
    </div>
  );
}
