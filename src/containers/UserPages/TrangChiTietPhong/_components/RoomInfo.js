import React, { Fragment, useState, useRef } from "react";
import LocationIcon from "./LocationIcon";
import RoomReview from "./RoomReview/RoomReview";
import IconList from "./IconList";
import GuestInput from "./GuestInput";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";

// Setup Date Range Picker
import "react-dates/initialize";
import { DateRangePicker } from "react-dates";
import "react-dates/lib/css/_datepicker.css";

export default function RoomInfo() {
  const roomData = useSelector((state) => state.roomDetailReducer.data);
  const history = useHistory();

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

  const isShow = () => {
    if (!startDate || !endDate) {
      return "d-none";
    }
    return "";
  };

  let bookingDate =
    startDate && endDate ? endDate.diff(startDate, "days") : undefined;

  const formatPrice = (number) => new Intl.NumberFormat().format(number);

  const formatDateDDMMYY = (momentDate) => momentDate.format("DD/MM/YYYY");

  // Guest Input
  const [adultNumber, setAdultNumber] = useState(1);
  const [childNumber, setChildNumber] = useState(0);
  const [infantNumber, setInfantNumber] = useState(0);

  const increaseNumber = (id) => {
    switch (id) {
      case "adult":
        setAdultNumber(adultNumber + 1);
        break;
      case "child":
        setChildNumber(childNumber + 1);
        break;
      case "infant":
        setInfantNumber(infantNumber + 1);
        break;
      default:
        break;
    }
  };

  const decreaseNumber = (id) => {
    switch (id) {
      case "adult": {
        if (adultNumber <= 1) break;
        setAdultNumber(adultNumber - 1);
        break;
      }
      case "child": {
        setChildNumber(childNumber - 1);
        break;
      }
      case "infant": {
        setInfantNumber(infantNumber - 1);
        break;
      }
      default:
        break;
    }
  };

  // DOM to the Date Range Picker
  const domStartDate = useRef();
  const domEndDate = useRef();

  const handleBooking = () => {
    if (!startDate) {
      domStartDate.current.click();
    }
    if (!endDate) {
      domEndDate.current.click();
    }
    let path = `/dat-phong?roomId=${roomData?._id}&checkIn=${formatDateDDMMYY(
      startDate
    )}&checkOut=${formatDateDDMMYY(
      endDate
    )}&numberAdult=${adultNumber}&numberChild=${childNumber}&numberInfant=${infantNumber}`;
    history.push(path);
  };

  return (
    <Fragment>
      {/* Room Title */}
      <div className="roomInfo__container">
        <div className="row no-gutters">
          <div className="room__info col-8">
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
          <div className="room__booking col-4">
            <div className="booking__form p-4">
              <div className="price__container mb-4">
                <span className="price">
                  {formatPrice(roomData?.price) + "đ"}
                </span>
                <span className="nights">&nbsp; /đêm</span>
              </div>
              <div className="input__container">
                <div className="time__input py-2 px-2 d-flex justify-content-around align-items-center">
                  <div
                    ref={domStartDate}
                    className="date__input"
                    type="button"
                    onClick={() => setFocusedInput("startDate")}
                  >
                    {startDate == null
                      ? "dd/mm/yyyy"
                      : formatDateDDMMYY(startDate)}
                  </div>
                  <div>đến</div>
                  <div
                    ref={domEndDate}
                    className="date__input"
                    type="button"
                    onClick={() => setFocusedInput("endDate")}
                  >
                    {endDate == null ? "dd/mm/yyyy" : formatDateDDMMYY(endDate)}
                  </div>
                </div>

                <DateRangePicker
                  startDate={startDate}
                  startDateId="start-date"
                  endDate={endDate}
                  numberOfMonths={1}
                  endDateId="end-date"
                  onDatesChange={handleDatesChange}
                  focusedInput={focusedInput}
                  onFocusChange={(focusedInput) =>
                    setFocusedInput(focusedInput)
                  }
                  noBorder
                />
              </div>

              <GuestInput
                maxGuest={roomData?.guests}
                adultNumber={adultNumber}
                childNumber={childNumber}
                infantNumber={infantNumber}
                increaseNumber={increaseNumber}
                decreaseNumber={decreaseNumber}
              />

              <div className={`booking__price ${isShow()}`}>
                <div className="initial__price mb-3 d-flex justify-content-between px-2">
                  <p className="mb-0">Giá thuê {bookingDate} đêm</p>
                  <p className="mb-0">
                    {formatPrice(
                      Number(bookingDate) * Number(roomData?.price)
                    ) + "đ"}
                  </p>
                </div>

                <div className="service__price mb-3 d-flex justify-content-between px-2">
                  <p className="mb-0">Phí dịch vụ</p>
                  <p className="mb-0">
                    {formatPrice(
                      Number(bookingDate) * Number(roomData?.price) * 0.1
                    ) + "đ"}
                  </p>
                </div>
                <hr></hr>
                <div className="total__price mt-3 d-flex justify-content-between px-2">
                  <p className="mb-0">Tổng tiền</p>
                  <p className="mb-0">
                    {formatPrice(
                      Number(bookingDate) * Number(roomData?.price) * 1.1
                    ) + "đ"}
                  </p>
                </div>
                <div className="mt-5 text-center">
                  <button className="btn btn-primary" onClick={handleBooking}>
                    Đặt phòng
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Room Review */}
      <RoomReview />
    </Fragment>
  );
}
