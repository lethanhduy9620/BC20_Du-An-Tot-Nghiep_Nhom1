import { combineReducers } from "redux";
import roomListReducer from "../containers/UserPages/TrangDanhSachPhong/modules/reducer";
import roomDetailReducer from "../containers/UserPages/TrangChiTietPhong/modules/reducer";
import roomReviewReducer from "../containers/UserPages/TrangChiTietPhong/_components/RoomReview/modules/reducer";
import selectListReducer from "../containers/UserPages/TrangHome/_components/Navbar/Select/modules/reducer";
import loginReducer from "../containers/UserPages/TrangHome/Login/modules/reducer"
const rootReducer = combineReducers({
  roomListReducer,
  roomDetailReducer,
  roomReviewReducer,
  selectListReducer,
  loginReducer
});

export default rootReducer;
