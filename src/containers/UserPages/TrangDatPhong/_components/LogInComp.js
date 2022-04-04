import React, { useState } from "react";
import { actLogIn } from "../../Authentication/LogIn/modules/action";
import { useDispatch } from "react-redux";

export default function LogInComp() {
  const dispatch = useDispatch();
  const [state, setState] = useState({
    email: "bc20_lethanhduy@gmail_test1.com",
    password: "123456789",
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
    dispatch(actLogIn(state));
  };

  return (
    <div className="row flex-column no-gutters">
      <h4 className="pb-4">Đăng nhập để đặt phòng</h4>
      <form className="w-100" onSubmit={handleSubmit}>
        <input
          name="email"
          onChange={handleOnChange}
          type="text"
          placeholder="Email"
          className="d-block shadow-none py-1 px-2 mb-3 col-6"
        />
        <input
          name="password"
          onChange={handleOnChange}
          type="password"
          placeholder="Password"
          className="d-block shadow-none py-1 px-2 mb-3  col-6"
        />
        <button
          type="submit"
          className="btn btn-primary d-block border-0 shadow-none"
        >
          Đăng nhập
        </button>
      </form>
    </div>
  );
}
