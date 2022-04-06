import * as ActionType from "./constants";
import { listOfFilterButtons } from "./../_components/ListOfFilterButton";

let initialState = {
  loading: false,
  originalData: null, //Data from server
  data: null, // Data after being filtered
  error: null,
  // conditionList: listOfFilterButtons,
  filterArray: [],
};

const filterData = (data, filterArray) => {
  let filteredData = []; //Reset filteredData
  data.forEach((elementData) => {
    let isAdded = true; //Create a flag for adding an element to filderedData
    filterArray.forEach((condition) => {
      if (elementData[condition] === false) {
        isAdded = false;
        return;
      }
    });
    if (isAdded) {
      filteredData.push(elementData);
    }
  });
  return filteredData;
};

const roomListReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.REQUEST_ROOM_LIST:
      state.loading = true;
      state.data = null;
      state.error = null;
      state.originalData = null;
      state.filterArray = [];
      return { ...state };
    case ActionType.REQUEST_ROOM_LIST_SUCCESS: {
      state.originalData = action.payload;
      state.loading = false;
      state.error = null;
      state.data = filterData(state.originalData, state.filterArray);
      return { ...state };
    }
    case ActionType.REQUEST_ROOM_LIST_ERROR:
      state.loading = false;
      state.data = null;
      state.error = action.payload;
      return { ...state };
    case ActionType.ADD_FILTER_ROOM_LIST: {
      state.filterArray.push(action.payload);
      state.data = filterData(state.data, state.filterArray); //filter from already filtered data in the REQUEST_ROOM_LIST_SUCCESS
      return { ...state };
    }
    case ActionType.REMOVE_FILTER_ROOM_LIST: {
      const index = state.filterArray.findIndex(
        (condition) => condition === action.payload
      );
      state.filterArray.splice(index, 1);
      state.data = filterData(state.originalData, state.filterArray);
      return { ...state };
    }
    case ActionType.RESET_FILTER_ROOM_LIST: {
      state.filterArray = [];
      state.data = state.originalData;
      return { ...state };
    }

    default:
      return { ...state };
  }
};

export default roomListReducer;
