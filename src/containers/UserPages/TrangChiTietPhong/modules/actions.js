import api from "./../../../../utils/apiUtils";
import * as ActionType from "./constants";

export const actFetchRoomDetail = (roomID) => {
  // dispath to Reducer
  return (dispatch) => {
    dispatch(actRequestRoomDetail());

    // Call API
    api
      .get(`rooms/${roomID}`)
      .then((result) => {
        dispatch(actRequestRoomDetailSuccess(result.data));
        // console.log(result.data);
      })
      .catch((error) => {
        dispatch(actRequestRoomDetailFail(error));
        // console.log(error);
      });
  };
};

const actRequestRoomDetail = () => {
  return {
    type: ActionType.REQUEST_ROOM_DETAIL,
  };
};

const actRequestRoomDetailSuccess = (data) => {
  return {
    type: ActionType.REQUEST_ROOM_DETAIL_SUCCESS,
    payload: data,
  };
};

const actRequestRoomDetailFail = (error) => {
  return {
    type: ActionType.REQUEST_ROOM_DETAIL_ERROR,
    payload: error,
  };
};
