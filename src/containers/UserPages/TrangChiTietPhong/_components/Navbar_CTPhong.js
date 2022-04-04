import React from "react";
import Logo from "./../../components/Logo";
import GlobeIcon from "./../../components/Icons/GlobeIcon";
import HamburgerIcon from "./../../components/Icons/HamburgerIcon";
import PersonIcon from "./../../components/Icons/PersonIcon";

// Navbar của trang Chi Tiết Phòng

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="/">
        {/* Logo */}
        <Logo />
      </a>

      <div
        className="collapse navbar-collapse justify-content-end"
        id="navbarSupportedContent"
      >
        <a href="#/" className="text-dark text-decoration-none">
          Become a host
        </a>
        {/* Button trigger modal for select language */}
        <a href="#/" className="mx-4">
          <GlobeIcon></GlobeIcon>
        </a>

        <div className="dropdown">
          <button
            className="btn btn-light"
            type="button"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-expanded="false"
            style={{ border: "1px solid black" }}
          >
            {/* Hambuger Icon */}
            <div className="d-flex justify-content-between align-items-center">
              <HamburgerIcon></HamburgerIcon>
              <PersonIcon></PersonIcon>
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
            <a className="dropdown-item" href="#/">
              Log In
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
