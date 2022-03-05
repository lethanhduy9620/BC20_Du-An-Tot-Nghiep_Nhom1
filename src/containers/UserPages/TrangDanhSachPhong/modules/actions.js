import api from "../../../../utils/apiUtils";
import * as ActionType from "./constants";

export const actFetchRoomList = (locationID) => {
  // dispath to Reducer

  return (dispatch) => {
    dispatch(actRequestRoomList());

    // Call API
    api
      .get(`rooms?locationId=${locationID}`)
      .then((result) => {
        dispatch(actRequestRoomListSuccess(result.data));
        // console.log(result.data);
      })
      .catch((error) => {
        dispatch(actRequestRoomListFail());
        // console.log(error);
      });
  };
};

const actRequestRoomList = () => {
  return {
    type: ActionType.REQUEST_ROOM_LIST,
  };
};

const actRequestRoomListSuccess = (data) => {
  return {
    type: ActionType.REQUEST_ROOM_LIST_SUCCESS,
    payload: data,
  };
};

const actRequestRoomListFail = (error) => {
  return {
    type: ActionType.REQUEST_ROOM_LIST_ERROR,
    payload: error,
  };
};
