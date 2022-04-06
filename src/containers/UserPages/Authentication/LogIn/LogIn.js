import React, { useState } from "react";

import { useDispatch } from "react-redux";
import { actLogIn } from "./modules/action";
export default function LogIn(props) {
  const dispatch = useDispatch();
  const [state, setState] = useState({
    email: "",
    password: "",
  });
  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setState({
      ...state,
      [name]: value,
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(actLogIn(state,props.history));
  };
  return (
    <div
      className="modal fade"
      id={props.id}
      tabIndex="-1"
      aria-labelledby="loginLabel"
      aria-hidden="true"
    >
      <div style={{color:"black"}} className="modal-dialog">
        <div className="modal-content ">
          <div className="modal-header justify-content-center">
            <h5  className="modal-title" id="loginLabel">
              Log In
            </h5>
          </div>
          <div className="modal-body">
            <form onSubmit={handleSubmit}>
              {/* Email */}
              <div className="form-group">
                <label>Email</label>
                <input
                  className="form-control"
                  name="email"
                  onChange={handleOnChange}
                />
              </div>

              {/* Password */}
              <div className="form-group">
                <label>Mật khẩu</label>
                <input
                  className="form-control"
                  name="password"
                  type="password"
                  onChange={handleOnChange}
                />
              </div>
              <div className="form-group text-center">
                <button onClick={()=>{
                  window.location.replace("/")
                }}  type="submit" role="button" className="btn btn-primary">
                  Đăng nhập
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
