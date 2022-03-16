import { combineReducers } from "redux";
import roomListReducer from "../containers/UserPages/TrangDanhSachPhong/modules/reducer";
import roomDetailReducer from "../containers/UserPages/TrangChiTietPhong/modules/reducer";
import roomReviewReducer from "../containers/UserPages/TrangChiTietPhong/_components/RoomReview/modules/reducer";
import tripReducer from "../containers/UserPages/TrangHome/Trip/modules/reducer";
const rootReducer = combineReducers({
  roomListReducer,
  roomDetailReducer,
  roomReviewReducer,
  tripReducer,
});

export default rootReducer;
