import * as ActionType from "./constants";
import api from "./../../../../../utils/apiUtils";
export const actLogIn = (user) => {
  return (dispatch) => {
    dispatch(actLogInRequest());
    api
      .post("/auth/login", user)
      .then((result) => {
        if (result.data.type == "ADMIN") {
          return Promise.reject({
            data: {
              content: "khong co quyen truy cap",
            },
          });
        } else {
          alert("Đăng nhập thành công");
          localStorage.setItem("User", JSON.stringify(result.data));
          dispatch(actLoginSuccess(result.data));
          // Close Modal
          if (document.getElementById("logInModal")) {
            document.getElementById("logInModal").click();
          }
        }
      })
      .catch((error) => {
        dispatch(actLogInFailed(error));
      });
  };
};
export const actLogInRequest = () => {
  return {
    type: ActionType.LOGIN_REQUEST,
  };
};
export const actLoginSuccess = (data) => {
  return {
    type: ActionType.LOGIN_SUCCESS,
    payload: data,
  };
};
export const actLogInFailed = (error) => {
  return {
    type: ActionType.LOGIN_FAILED,
    payload: error,
  };
};
