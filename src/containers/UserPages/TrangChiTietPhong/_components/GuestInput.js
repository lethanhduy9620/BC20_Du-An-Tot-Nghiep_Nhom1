import React, { Fragment } from "react";

export default function GuestInput() {
  return (
    <Fragment>
      <div class="guest__input py-2 px-4 mb-3 position-relative dropdown">
        <div
          type="button"
          id="guestDropdown"
          data-toggle="dropdown"
          aria-expanded="false"
        >
          1 khách
        </div>

        <div
          className="dropdown-menu w-100 px-3 pt-4"
          aria-labelledby="guestDropdown"
        >
          <form>
            {/* Adult */}
            <div
              className="d-flex justify-content-between align-items-center mb-3"
              id="guestLabel"
            >
              <div className="item__name">
                <span>Người lớn</span>
              </div>
              <div className="item__quantity min__width--40 d-flex justify-content-between align-items-center">
                <div type="button" className="btn btn-info">
                  -
                </div>
                <span>0</span>
                <div type="button" className="btn btn-info">
                  +
                </div>
              </div>
            </div>

            {/* Childeren */}
            <div
              className="d-flex justify-content-between align-items-center mb-3"
              id="guestLabel"
            >
              <div className="item__name">
                <span className="d-block">Trẻ em</span>
                <span>2 - 12 tuổi</span>
              </div>
              <div className="item__quantity min__width--40 d-flex justify-content-between align-items-center">
                <div type="button" className="btn btn-info">
                  -
                </div>
                <span>0</span>
                <div type="button" className="btn btn-info">
                  +
                </div>
              </div>
            </div>

            {/* Infants */}
            <div
              className="d-flex justify-content-between align-items-center"
              id="guestLabel"
            >
              <div className="item__name">
                <span className="d-block">Sơ sinh</span>
                <span>Dưới 2 tuổi</span>
              </div>
              <div className="item__quantity min__width--40 d-flex justify-content-between align-items-center">
                <div type="button" className="btn btn-info">
                  -
                </div>
                <span>0</span>
                <div type="button" className="btn btn-info">
                  +
                </div>
              </div>
            </div>
          </form>
          <div className="text-right mt-3">
            <button type="button" className="btn btn-light font-weight-bold ">
              Đóng
            </button>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
