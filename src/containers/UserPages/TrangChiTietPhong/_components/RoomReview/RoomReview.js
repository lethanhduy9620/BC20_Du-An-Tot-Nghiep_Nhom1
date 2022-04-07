import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { getMonth_lib, getFullYear_lib } from "./lib/LibDate";

export default function RoomReview() {
  const loading = useSelector((state) => state.roomReviewReducer.loading);
  const data = useSelector((state) => state.roomReviewReducer.data);

  const renderReview = () => {
    if (data?.length === 0) {
      return <span className="mt-3">Chưa có đánh giá cho phòng này.</span>;
    }
    return data?.map((review, index) => {
      return (
        <div className="review__card py-4" key={review._id}>
          <div className="review__header d-flex align-items-center">
            {/* User Avatar */}
            <div className="mr-3 user__avatar">
              <img src={review.userId?.avatar} alt="#1"/>
            </div>

            {/* Name */}
            <div className="d-flex flex-column">
              <span className="name">{review.userId?.name}</span>
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
      <div className="roomReview__container mb-5">
        <hr className="mt-0"></hr>
        <h5 className="title">Đánh giá</h5>
        <div className="review__container row row-cols-2 no-gutters">
          {renderReview()}
        </div>
      </div>
    </Fragment>
  );
}
