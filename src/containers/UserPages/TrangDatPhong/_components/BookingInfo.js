import React from "react";
import { Link } from "react-router-dom";
import LocationIcon from "../../TrangChiTietPhong/_components/LocationIcon";
import CalendarIcon from "../../components/Icons/CalendarIcon";
import SmallPersonIcon from "../../components/Icons/SmallPersonIcon";
import { useSelector, useDispatch } from "react-redux";
import moment from "moment";
import { useLocation } from "react-router-dom";
import LogInComp from "./LogInComp";
import { actBookingRoom } from "./../modules/actions";

export default function BookingInfo(props) {
  const roomData = useSelector((state) => state.roomDetailReducer.data);
  const accountData = useSelector((state) => state.logInReducer.data);
  const dispatch = useDispatch();

  function useQuery() {
    const { search } = useLocation();

    return React.useMemo(() => new URLSearchParams(search), [search]);
  }

  let query = useQuery();

  const checkIn = query.get("checkIn");
  const checkOut = query.get("checkOut");
  const numberAdult = query.get("numberAdult");
  const numberChild = query.get("numberChild");
  const numberInfant = query.get("numberInfant");

  const getDateNameInVn = (date) => {
    const dateInVN = {
      Monday: "Thứ hai",
      Tuesday: "Thứ ba",
      Wednesday: "Thứ tư",
      Thursday: "Thứ năm",
      Friday: "Thứ sáu",
      Saturday: "Thứ bảy",
      Sunday: "Chủ nhật",
    };
    return dateInVN[moment(date).format("dddd")];
  };

  // Calculate difference between check-in date and check-out date
  const getBookingDate = (checkIn, checkOut) => {
    return moment(checkOut, "DD/MM/YYYY").diff(
      moment(checkIn, "DD/MM/YYYY"),
      "days"
    );
  };

  // Nhớ format cái này thành một thư viện riêng
  const formatPrice = (number) => new Intl.NumberFormat().format(number);

  const handleBookingRoom = () => {
    const ticketInfo = {
      checkIn: moment(checkIn, "DD/MM/YYYY").toISOString(),
      checkOut: moment(checkOut, "DD/MM/YYYY").toISOString(),
      roomId: query.get("roomId"),
    };
    dispatch(actBookingRoom(ticketInfo));
  };

  return (
    <div className="bookingInfo__container">
      <div className="row">
        <div className="col-6">
          <div className="main__title">
            <h3 className="mb-0">Thông tin đặt phòng</h3>
          </div>
          <div class="guest__info row flex-column no-gutters pb-4">
            <h5 className="col-12 mb-0 pb-3">Số khách</h5>
            <div className="col-6">
              {Number(numberAdult) + Number(numberChild)} khách{" "}
              {numberInfant > 0 && `, ${numberInfant} trẻ sơ sinh`}
            </div>
          </div>
          <div class="date__info row no-gutters pb-4">
            <h5 className="col-12 mb-0 pb-3">Thời gian</h5>
            <div className="date__container col-6">
              <div className="date__content mr-3">
                <div className="colorful__bar"></div>
                <span>Nhận phòng</span>
                <p>{checkIn}</p>
                <span>{getDateNameInVn(checkIn)}</span>
              </div>
            </div>
            <div className="date__container col-6">
              <div className="date__content ml-3">
                <div className="colorful__bar"></div>
                <span>Trả phòng</span>
                <p>{checkOut}</p>
                <span>{getDateNameInVn(checkOut)}</span>
              </div>
            </div>
          </div>
          <div className="notice">
            <div>
              <h5>Trách nhiệm vật chất</h5>
              <p>
                Khách hàng chịu mọi trách nhiệm thiệt hại về tài sản đã gây ra
                tại chỗ ở trong thời gian lưu trú.
              </p>
            </div>
            <div>
              <h5>Nội quy chỗ ở</h5>
              <p>
                Hạn chế làm ồn sau 10 giờ tối. Không hút thuốc ở khu vực chung
              </p>
            </div>
          </div>

          <hr />

          {/* Nếu chưa đăng nhập tài khoản */}
          {!localStorage.getItem("User") && <LogInComp />}

          {/* Nếu đã đăng nhập tài khoản */}
          <div className={`${localStorage.getItem("User") ? "" : "d-none"}`}>
            <button
              type="button"
              className="btn btn-primary px-5 py-3"
              onClick={handleBookingRoom}
            >
              Đặt phòng
            </button>
          </div>
        </div>

        <div className="col-6 pl-9rem">
          <div className="main__title">
            <h3 className="mb-0">Chi tiết đặt phòng</h3>
          </div>
          <div className="room__info px-4 py-4">
            <div className="room__title row no-gutters ">
              <div className="col-8 pr-3">
                <h5>{roomData?.name}</h5>
                <div>
                  <span>
                    <LocationIcon />
                  </span>
                  <span className="location pl-2">
                    {`${roomData?.locationId.name}, ${roomData?.locationId.province}, Việt Nam`}
                  </span>
                </div>
              </div>
              <div className="col-4">
                <img src={roomData?.image} />
              </div>
            </div>
            <hr />
            <div className="booking__info">
              <p>
                <CalendarIcon />
                <span className="ml-2">
                  {`${getBookingDate(
                    checkIn,
                    checkOut
                  )} đêm · ${checkIn} - ${checkOut}`}
                </span>
              </p>
              <p>
                <SmallPersonIcon />
                <span className="ml-2">
                  {numberAdult + " "}người lớn
                  {numberChild > 0 && ` ,${numberChild + " "}trẻ em`}
                  {numberInfant > 0 && ` ,${numberInfant + " "}trẻ sơ sinh`}
                </span>
              </p>
            </div>
            <hr />
            <div className="detail__price">
              <div className="d-flex justify-content-between">
                <p>Giá thuê {getBookingDate(checkIn, checkOut)} đêm</p>
                <p>
                  {formatPrice(
                    getBookingDate(checkIn, checkOut) * roomData?.price
                  )}
                  đ
                </p>
              </div>
              <div className="d-flex justify-content-between">
                <p className="mb-0">Phí dịch vụ</p>
                <p className="mb-0">
                  {formatPrice(
                    getBookingDate(checkIn, checkOut) * roomData?.price * 0.1
                  )}
                  đ
                </p>
              </div>
            </div>
            <hr />
            <div className="total__price d-flex justify-content-between">
              <p className="mb-0">Tổng tiền</p>
              <p className="mb-0">
                {formatPrice(
                  getBookingDate(checkIn, checkOut) * roomData?.price * 1.1
                )}
                đ
              </p>
            </div>
            <hr />
            <div className="policies">
              <h6>Chính sách hủy phòng</h6>
              <p>
                Miễn phí hủy phòng trong vòng 48h sau khi đặt phòng thành công
                và trước 5 ngày so với thời gian check-in. Sau đó, hủy phòng
                trước 5 ngày so với thời gian check-in, được hoàn lại 100% tổng
                số tiền đã trả (trừ phí dịch vụ).
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
