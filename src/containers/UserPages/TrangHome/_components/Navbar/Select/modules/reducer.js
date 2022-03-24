import * as ActionType from "./constant";
let initialState = {
  loading: "fasle",
  data: null,
  error: null,
};
const selectListReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SELECT_REQUEST:
      {
        state.loading = true;
        state.data = null;
        state.error = null;
        return { ...state };
      }
      
    case ActionType.SELECT_SUCCESS:
      {
        state.loading = false;
        state.data = action.payload;
        state.error = null;
        return { ...state };
      }
      
    case ActionType.SELECT_FAILED:
      {
        state.loading = false;
        state.data = null;
        state.error = action.payload;
        return { ...state };
      }
      
    default:
        return { ...state };
  }
};
export default selectListReducer;