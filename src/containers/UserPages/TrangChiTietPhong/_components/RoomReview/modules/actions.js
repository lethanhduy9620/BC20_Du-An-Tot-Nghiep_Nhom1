import api from "./../../../../../../utils/apiUtils";
import * as ActionType from "./constants";

export const actFetchRoomReview = (roomID) => {
  // dispath to Reducer
  return (dispatch) => {
    dispatch(actRequestRoomReview());

    // Call API
    api
      .get(`reviews/byRoom?roomId=${roomID}`)
      .then((result) => {
        dispatch(actRequestRoomReviewSuccess(result.data));
        // console.log(result.data);
      })
      .catch((error) => {
        dispatch(actRequestRoomReviewFail(error));
        // console.log(error);
      });
  };
};

const actRequestRoomReview = () => {
  return {
    type: ActionType.REQUEST_ROOM_REVIEW,
  };
};

const actRequestRoomReviewSuccess = (data) => {
  return {
    type: ActionType.REQUEST_ROOM_REVIEW_SUCCESS,
    payload: data,
  };
};

const actRequestRoomReviewFail = (error) => {
  return {
    type: ActionType.REQUEST_ROOM_REVIEW_ERROR,
    payload: error,
  };
};
