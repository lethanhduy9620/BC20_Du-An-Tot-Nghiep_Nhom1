import * as ActionType from "./constant";
let initialState ={
    loading: false,
    data: null,
    error: null,
}
const tripReducer = (state=initialState , action)=>{
    switch (action.type) {
        case ActionType.TRIP_REQUEST:
          state.loading = true;
          state.data = null;
          state.error = null;
          return { ...state };
        case ActionType.TRIP_SUCCESS: {
          state.loading = false;
          state.data = action.payload;
          state.error = null;
          return { ...state };
        }
        case ActionType.TRIP_FAILED:
          state.loading = false;
          state.data = null;
          state.error = action.payload;
          return { ...state };
        default:
          return { ...state };
      }
}
export default tripReducer;