import React from "react";
import Logo from "./../../components/Logo";
import GlobeICon from "./../../components/Icons/GlobeIcon";
import HamburgerIcon from "./../../components/Icons/HamburgerIcon";
import PersonIcon from "./../../components/Icons/PersonIcon";
import SignUp from "./../../Authentication/SignUp/SignUp";
import LogIn from "./../../Authentication/LogIn/LogIn";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light py-0 navbar--min-height container-fluid">
      <a className="navbar-brand " href="/">
        {/* Logo */}
        <Logo />
      </a>

      {/* Search box */}
      <div className="input-area">
        <input type="text" placeholder="Ho Chi Minh" />
      </div>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>

      <div
        className="collapse navbar-collapse justify-content-end"
        id="navbarSupportedContent"
      >
        <a href="#/" className="text-dark text-decoration-none">
          Become a host
        </a>
        {/* Button trigger modal for select language */}
        <a href="#/" className="mx-4">
          <GlobeICon />
        </a>

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
    </nav>
  );
}
