import React, { Fragment, useEffect } from "react";
import { useSelector } from "react-redux";
import { getMonth_lib, getFullYear_lib } from "./lib/LibDate";

export default function RoomReview() {
  const loading = useSelector((state) => state.roomReviewReducer.loading);
  const data = useSelector((state) => state.roomReviewReducer.data);

  const renderReview = () => {
    return data?.map((review, index) => {
      return (
        <div className="review__card py-4" key={review._id}>
          <div className="review__header d-flex align-items-center">
            {/* User Avatar */}
            <div className="mr-3 user__avatar">
              <img src={review.userId.avatar}></img>
            </div>

            {/* Name */}
            <div className="d-flex flex-column">
              <span className="name">{review.userId.name}</span>
              {/* <span>October 2022</span> */}
              <span>{`${getMonth_lib(review.updatedAt)}  ${getFullYear_lib(
                review.updatedAt
              )}`}</span>
            </div>
          </div>

          <div className="review__content mt-3">
            <p>{review.content}</p>
          </div>
        </div>
      );
    });
  };

  if (loading) {
    return (
      <Fragment>
        <div id="roomReview" className="roomReview__container container-fluid">
          <hr></hr>
          <h5 className="title">Đánh giá</h5>
          <div>Loading...</div>
        </div>
      </Fragment>
    );
  }

  return (
    <Fragment>
      <div id="roomReview" className="roomReview__container container-fluid">
        <hr></hr>
        <h5 className="title">Đánh giá</h5>
        <div className="review__container row row-cols-2 no-gutters">
          {renderReview()}

          {/* <div className="review__card py-4">
            <div className="review__header d-flex align-items-center">
              <div className="user__avatar" className="mr-3">
                <img src="/img/avatar1.jpg"></img>
              </div>

              <div className="d-flex flex-column">
                <span className="name">Nguyễn Phong Hào</span>
                <span>October 2022</span>
              </div>
            </div>

            <div className="review__content mt-3">
              <p>
                Resort có dịch vụ xe đưa đón sân bay. Mọi ng báo giờ và số hiệu
                chuyến bay trước tối thiểu 3 ngày để họ sắp xếp xe là được
              </p>
            </div>
          </div> */}
        </div>
      </div>
    </Fragment>
  );
}
