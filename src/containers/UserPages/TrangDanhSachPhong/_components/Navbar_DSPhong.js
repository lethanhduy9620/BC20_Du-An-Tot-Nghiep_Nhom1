import React, { Fragment } from "react";
import Logo from "./../../components/Logo";
import HamburgerIcon from "./../../components/Icons/HamburgerIcon";
import PersonIcon from "./../../components/Icons/PersonIcon";
import SignUp from "./../../Authentication/SignUp/SignUp";
import LogIn from "./../../Authentication/LogIn/LogIn";
import { useLocation } from "react-router";

export default function Navbar() {
  const location = useLocation();

  const isRender = () => {
    switch (location.pathname) {
      case "/dat-phong":
      case "/dat-phong-thanh-cong":
      case "/dat-phong-loi":
        return false;
      default:
        return true;
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light py-0 navbar--min-height container-fluid justify-content-between">
      <a className="navbar-brand " href="/">
        {/* Logo */}
        <Logo />
      </a>

      {isRender() && (
        <div className="d-flex justify-content-end align-items-center">
          <div className="dropdown">
            <button
              className="btn accountBtn__modify"
              type="button"
              id="dropdownMenuButton"
              data-toggle="dropdown"
              aria-expanded="false"
            >
              {/* Hambuger Icon */}
              <div className="d-flex justify-content-between align-items-center">
                <HamburgerIcon />
                <PersonIcon />
              </div>
            </button>

            {/* Dropdown menu */}

            <div
              className="dropdown-menu dropdown-menu--modify"
              aria-labelledby="dropdownMenuButton"
            >
              <a
                type="button"
                className="dropdown-item"
                data-toggle="modal"
                data-target="#signUpModal"
              >
                Sign Up
              </a>
              <a
                type="button"
                className="dropdown-item"
                data-toggle="modal"
                data-target="#logInModal"
              >
                Log In
              </a>
            </div>

            <SignUp id="signUpModal" />
            <LogIn id="logInModal" />
          </div>
        </div>
      )}
    </nav>
  );
}
