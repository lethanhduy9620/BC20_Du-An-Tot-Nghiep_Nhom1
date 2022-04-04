import api from "../../../../utils/apiUtils";
import * as ActionType from "./constants";

export const actBookingRoom = (ticketInfo) => {
  // dispath to Reducer
  return (dispatch) => {
    dispatch(actRequestRoomBooking());

    console.log(ticketInfo);

    // Call API
    api
      .post(`rooms/booking`, ticketInfo)
      .then((result) => {
        dispatch(actRequestRoomBookingSuccess(result.data));
        console.log(result.data);

        // Redirect to Trang Dat Phong Thanh Cong
        window.location.replace("/dat-phong-thanh-cong");
      })
      .catch((error) => {
        dispatch(actRequestRoomBookingFail(error));
        console.log(error);
      });
  };
};

const actRequestRoomBooking = () => {
  return {
    type: ActionType.REQUEST_BOOKING_ROOM,
  };
};

const actRequestRoomBookingSuccess = (data) => {
  return {
    type: ActionType.REQUEST_BOOKING_ROOM_SUCCESS,
    payload: data,
  };
};

const actRequestRoomBookingFail = (error) => {
  return {
    type: ActionType.REQUEST_BOOKING_ROOM_ERROR,
    payload: error,
  };
};
