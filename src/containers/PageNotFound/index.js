import React from "react";
import Navbar from "./../UserPages/TrangDanhSachPhong/_components/Navbar_DSPhong";
import "./style_pagenotfound.css";
import { Link } from "react-router-dom";

export default function PageNotFound() {
  return (
    <div id="pageNotFound">
      <Navbar />
      <div className="page__container d-flex justify-content-center">
        <div>
          <h2 className="mb-4">
            Xin lỗi, chúng tôi không tìm thấy trang bạn cần!
          </h2>
          <div className="text-center">
            <Link
              type="button"
              className="btn btn-primary mt-4 py-3 px-4"
              to="/#"
            >
              Quay lại trang chủ
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
