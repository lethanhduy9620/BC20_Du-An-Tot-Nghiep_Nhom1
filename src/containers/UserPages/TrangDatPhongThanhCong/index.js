import React from "react";
import Navbar from "../TrangDanhSachPhong/_components/Navbar_DSPhong";
import { Link } from "react-router-dom";
import "./style_datphongthanhcong.css";

export default function TrangDatPhongThanhCong() {
  return (
    <div id="successfulBookingPage">
      <Navbar />
      <div className="page__container">
        <h2 className="mb-4">Yêu cầu của bạn đã gửi đến Chủ nhà thành công!</h2>
        <p>
          Ngay khi có phản hồi từ phía Chủ nhà, AirBnb sẽ lập tức thông báo đến
          bạn. Mọi thắc mắc xin vui lòng liên hệ
          <span className="font-weight-bolder"> 18006581</span> (miễn phí) để
          được hướng dẫn.
        </p>
        <div className="row no-gutters">
          <div className="col col-md-6">
            <Link
              type="button"
              className="btn btn-primary d-block mb-3"
              to="/#"
            >
              Quản lý đặt phòng
            </Link>
            <Link
              type="button"
              className="btn btn-light shadow-none d-block"
              to="/#"
            >
              Liên hệ Chủ nhà
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
