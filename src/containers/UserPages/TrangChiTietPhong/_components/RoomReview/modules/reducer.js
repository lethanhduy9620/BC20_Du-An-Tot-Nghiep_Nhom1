import * as ActionType from "./constants";

let initialState = {
  loading: false,
  data: null,
  error: null,
};

const roomReviewReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.REQUEST_ROOM_REVIEW:
      state.loading = true;
      state.data = null;
      state.error = null;
      return { ...state };
    case ActionType.REQUEST_ROOM_REVIEW_SUCCESS: {
      state.loading = false;
      state.data = action.payload;
      state.error = null;
      // console.log(state.data);
      return { ...state };
    }
    case ActionType.REQUEST_ROOM_REVIEW_ERROR:
      state.loading = false;
      state.data = null;
      state.error = action.payload;
      return { ...state };
    default:
      return { ...state };
  }
};

export default roomReviewReducer;
