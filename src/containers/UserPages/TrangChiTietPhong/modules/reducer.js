import * as ActionType from "./constants";

let initialState = {
  loading: false,
  data: null,
  error: null,
};

const roomDetailReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.REQUEST_ROOM_DETAIL:
      state.loading = true;
      state.data = null;
      state.error = null;
      return { ...state };
    case ActionType.REQUEST_ROOM_DETAIL_SUCCESS: {
      state.loading = false;
      state.data = action.payload;
      state.error = null;
      return { ...state };
    }
    case ActionType.REQUEST_ROOM_DETAIL_ERROR:
      state.loading = false;
      state.data = null;
      state.error = action.payload;
      return { ...state };
    default:
      return { ...state };
  }
};

export default roomDetailReducer;
