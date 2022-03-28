import { useDispatch, useSelector } from "react-redux";
import { actLogin } from "./modules/action";
import React, { useEffect, useState } from "react";

export default function Login(props) {
  const loading = useSelector((state) => state.loginReducer.loading);
  const error = useSelector((state) => state.loginReducer.error);
  const dispatch = useDispatch();
  const [state, setState] = useState({
    taiKhoan: "",
    matKhau: "",
  });
  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setState({
      ...state,
      [name]: value,
    });
  };
  const handleLogin = (event) => {
    event.preventDefault();
    dispatch(actLogin(state, props.history));
  };
  const handleError = (error) => {
    if (error) {
      return (
        <p className="text-danger">Tai khoan hoac mat khau khong hop le </p>
      );
    }
  };
  if(localStorage.getItem("User")){
    props.history.replace("/")
  }
  return (
    <div>
      <div>
        <div className="container mt-5">
          <div className="row bg-light">
            <div className="col-md-6 mx-auto">
              <h3 className="mt-5">Login</h3>
              <form onSubmit={handleLogin}>
                <div className="form-group">
                  <label>Username</label>
                  <input
                    onChange={handleOnChange}
                    type="text"
                    className="form-control"
                    name="taiKhoan"
                  />
                </div>
                <div className="form-group">
                  <label>Password</label>
                  <input
                    onChange={handleOnChange}
                    type="password"
                    className="form-control"
                    name="matKhau"
                  />
                </div>
                {handleError(error)}
                <p></p>
                <button type="submit" className="btn btn-success mb-5">
                  Login
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

}
