import React, { Fragment, useState } from "react";
import LocationIcon from "./LocationIcon";
import RoomReview from "./RoomReview/RoomReview";
import IconList from "./IconList";

import { useSelector } from "react-redux";

// Setup Date Range Picker
import "react-dates/initialize";
import { DateRangePicker } from "react-dates";
import "react-dates/lib/css/_datepicker.css";

import GuestInput from "./GuestInput";

export default function RoomInfo() {
  const roomData = useSelector((state) => state.roomDetailReducer.data);

  const country =
    roomData?.locationId.country === "viet nam"
      ? "Việt Nam"
      : roomData?.locationId.country;

  // Setup Date Range Picker
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [focusedInput, setFocusedInput] = useState(null);
  const handleDatesChange = ({ startDate, endDate }) => {
    setStartDate(startDate);
    setEndDate(endDate);
  };

  const renderDate = (reactLibDate) => {
    let date = new Date(reactLibDate);
    return (
      date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear()
    );
  };

  console.log(renderDate(startDate));

  return (
    <Fragment>
      {/* Room Title */}
      <div id="roomInfo" className="roomInfo__container container-fluid row">
        <div className="room__info col-6">
          {/* Tilte */}
          <h2 className="title text-break mb-3">
            {roomData?.name}
            {/* Green Bay Phu Quoc Resort & Spa */}
          </h2>

          {/* Location */}
          <div className="location__container d-flex align-items-center mb-3">
            <span className="d-block pr-3">
              <LocationIcon />
            </span>
            <span className="location__desc d-block">
              {`${roomData?.locationId.name}, ${roomData?.locationId.province}, ${country}`}
              {/* Đảo Phú Quốc, Phú Quốc, Việt Nam */}
            </span>
          </div>

          {/* Room Detail */}
          <div className="room__quantity mb-4">
            <span>{roomData?.bedRoom} Phòng ngủ · </span>
            <span>{roomData?.bath} Phòng tắm · </span>
            <span>
              {roomData?.guests} khách (Tối đa {roomData?.guests} khách){" "}
            </span>

            {/* <span>2 Phòng ngủ · </span>
            <span>2 Phòng tắm · </span>
            <span>5 khách</span> */}
          </div>

          {/* Room Description */}
          <div className="room__desc text-break mb-3">
            <p>{roomData?.description}</p>
            {/* <p>
              Phòng đẹp, view siêu đẹp, tư vấn và phục vụ tốt, đồ ăn rất ok. Ai
              thích kiểu nghỉ dưỡng, hoà mình cùng thiên nhiên nên tới đây.
            </p> */}
          </div>

          {/* Room Utility */}
          <div className="room__utility">
            <div className="title__container">
              <h5 className="title">Tiện nghi chỗ ở</h5>
              <p className="description mt-2">
                Giới thiệu về các tiện nghi và dịch vụ tại nơi lưu trú
              </p>
            </div>
            <div className="room__utilities row row-cols-2 align-items-center w-90">
              <IconList roomData={roomData} />

              {/* <div className="col d-flex my-3">
                <span className="utility__icon mr-3">
                  <KitchenIcon></KitchenIcon>
                </span>
                <span className="utility__desc">Nhà bếp</span>
              </div> */}
            </div>
          </div>
        </div>

        {/* Room Booking */}
        <div className="room__booking col-6">
          <div className="booking__form p-4">
            <div className="price__container mb-4">
              <span className="price">2,000,000đ</span>
              <span className="nights">&nbsp; /2 đêm</span>
            </div>
            <div className="input__container">
              <div className="time__input py-2 px-2 d-flex justify-content-around align-items-center">
                <div
                  className="date__input"
                  type="button"
                  onClick={() => setFocusedInput("startDate")}
                >
                  {/* 14/03/2022 */}
                  {startDate == null ? "dd/mm/yyyy" : renderDate(startDate)}
                </div>
                <div>Đến</div>
                <div
                  className="date__input"
                  type="button"
                  onClick={() => setFocusedInput("endDate")}
                >
                  {/* 16/03/2022 */}
                  {endDate == null ? "dd/mm/yyyy" : renderDate(endDate)}
                </div>
              </div>

              {/* DateRangePicker sẽ ẩn phía dưới input__container */}
              <DateRangePicker
                startDate={startDate}
                startDateId="start-date"
                endDate={endDate}
                numberOfMonths={2}
                endDateId="end-date"
                onDatesChange={handleDatesChange}
                focusedInput={focusedInput}
                onFocusChange={(focusedInput) => setFocusedInput(focusedInput)}
                noBorder
              />
            </div>

            {/* Guest Selection */}
            {/* <div className="guest__input py-2 px-4 mb-3 position-relative">
              <div type="button" data-toggle="modal" data-target="#guestModal">
                1 khách
              </div>
              <div
                id="guestModal"
                className="dropdown-menu w-100"
                aria-labelledby="exampleModalLabel" aria-hidden="true"
              >
                <div className="d-flex justify-content-between align-items-center">
                  <div className="item__name">Người lớn</div>
                  <div className="item__quantity min__width--40 d-flex">
                    <button className="btn btn-info">-</button>
                    <span>0</span>
                    <button className="btn btn-info">+</button>
                  </div>
                </div>
              </div>
            </div> */}

            <GuestInput maxGuest ={roomData?.guests} />

            <div className="initial__price mb-3 d-flex justify-content-between px-2">
              <p className="mb-0">Giá thuê 2 đêm</p>
              <p className="mb-0">2,000,000đ</p>
            </div>
            <div className="service__price mb-3 d-flex justify-content-between px-2">
              <p className="mb-0">Phí dịch vụ</p>
              <p className="mb-0">200,000đ</p>
            </div>
            <hr></hr>
            <div className="total__price mt-3 d-flex justify-content-between px-2">
              <p className="mb-0">Tổng tiền</p>
              <p className="mb-0">2,200,000đ</p>
            </div>
            <div className="mt-5 text-center">
              <button className="btn btn-primary">Đặt phòng</button>
            </div>
          </div>
        </div>
      </div>

      {/* Room Review */}
      <RoomReview></RoomReview>
    </Fragment>
  );
}
