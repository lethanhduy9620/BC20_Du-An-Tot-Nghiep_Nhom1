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
      })
      .catch((error) => {
        dispatch(actRequestRoomListFail(error));
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

export const actAddFilterRoomList = (id) => {
  return {
    type: ActionType.ADD_FILTER_ROOM_LIST,
    payload: id,
  };
};

export const actRemoveFilterRoomList = (id) => {
  return {
    type: ActionType.REMOVE_FILTER_ROOM_LIST,
    payload: id,
  };
};

export const actResetFilterRoomList = () => {
  return {
    type: ActionType.RESET_FILTER_ROOM_LIST,
  };
};
