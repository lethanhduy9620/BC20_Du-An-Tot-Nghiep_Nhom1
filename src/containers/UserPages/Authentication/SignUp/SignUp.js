import React, { Fragment, useState } from "react";
import { actSignUp } from "./modules/action";
import { useDispatch, useSelector } from "react-redux";

export default function SignUp(props) {
  const data = useSelector((state) => state.signUpReducer.data);
  const dispatch = useDispatch();

  const [state, setState] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    birthday: "",
    gender: true,
    address: "",
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
    dispatch(actSignUp(state));
  };

  return (
    <Fragment>
      {/* Sign Up modal */}
      <div
        className="modal fade"
        id={props.id}
        tabIndex="-1"
        aria-labelledby="signUpLabel"
        aria-hidden="true"
      >
        <div style={{color:"black"}} className="modal-dialog">
          <div className="modal-content ">
            <div className="modal-header justify-content-center">
              <h5 className="modal-title" id="signUpLabel">
                Sign up
              </h5>
            </div>
            <div className="modal-body">
              <form onSubmit={handleSubmit}>
                {/* Name */}
                <div className="form-group">
                  <label>Tên tài khoản</label>
                  <input
                    className="form-control"
                    name="name"
                    onChange={handleOnChange}
                  />
                  {/* <small id="emailHelp" className="form-text text-muted">
                  We'll never share your email with anyone else.
                </small> */}
                </div>

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

                {/* Điện thoại */}
                <div className="form-group">
                  <label>Điện thoại</label>
                  <input
                    className="form-control"
                    name="phone"
                    type="number"
                    onChange={handleOnChange}
                  />
                </div>

                {/* Ngày sinh */}
                <div className="form-group">
                  <label>Ngày sinh</label>
                  <input
                    className="form-control"
                    name="birthday"
                    value={state.birthday}
                    type="date"
                    onChange={handleOnChange}
                  />
                </div>

                {/* Giới tính */}
                <div className="form-group">
                  <label>Giới tính</label>
                  <div className="d-flex">
                    <div className="form-check mr-4">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="gender"
                        id="male"
                        value={true}
                        defaultChecked
                        onChange={handleOnChange}
                      />
                      <label className="form-check-label" htmlFor="male">
                        Nam
                      </label>
                    </div>

                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="gender"
                        id="female"
                        value={false}
                        onChange={handleOnChange}
                      />
                      <label className="form-check-label" htmlFor="female">
                        Nữ
                      </label>
                    </div>
                  </div>
                </div>

                <div className="form-group">
                  <label>Địa chỉ</label>
                  <input
                    className="form-control"
                    name="address"
                    type="text"
                    onChange={handleOnChange}
                  />
                </div>

                <div className="form-group text-center">
                  <button type="submit" className="btn btn-primary">
                    Đăng ký
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
