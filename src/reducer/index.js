import { combineReducers } from "redux";
import roomListReducer from "../containers/UserPages/TrangDanhSachPhong/modules/reducer";
import roomDetailReducer from "../containers/UserPages/TrangChiTietPhong/modules/reducer";
import roomReviewReducer from "../containers/UserPages/TrangChiTietPhong/_components/RoomReview/modules/reducer";
import selectListReducer from "../containers/UserPages/TrangHome/_components/Navbar/Select/modules/reducer";
import signUpReducer from "../containers/UserPages/Authentication/SignUp/modules/reducer";
import logInReducer from "../containers/UserPages/Authentication/LogIn/modules/reducer";
import bookingRoomReducer from "../containers/UserPages/TrangDatPhong/modules/reducer";

const rootReducer = combineReducers({
  roomListReducer,
  roomDetailReducer,
  roomReviewReducer,
  selectListReducer,
  signUpReducer,
  logInReducer,
  bookingRoomReducer,
});

export default rootReducer;
