import * as ActionType from "./constant";
import api from "../../../../../utils/apiUtils";
export const actTrip = () => {
  return (dispatch) => {
    console.log("Okay");
    dispatch(actTripRequest());
    api
      .get("locations")
      .then((result) => {
        console.log(result.data);
        dispatch(actTripSuccess(result.data));
      })
      .catch((error) => {
        dispatch(actTripFailed(error.data))
      });
  };
};
const actTripRequest = () => {
  return {
    type: ActionType.TRIP_REQUEST,
  };
};
const actTripSuccess = (data) => {
  return {
    type: ActionType.TRIP_SUCCESS,
    payload: data,
  };
};

const actTripFailed = (error) => {
  return {
    type: ActionType.TRIP_FAILED,
    payload: error,
  };
};
