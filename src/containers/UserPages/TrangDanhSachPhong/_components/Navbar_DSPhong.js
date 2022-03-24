import React from "react";
import Logo from "./../../components/Logo";
import GlobeICon from "./../../components/Icons/GlobeIcon";
import HamburgerIcon from "./../../components/Icons/HamburgerIcon";
import PersonIcon from "./../../components/Icons/PersonIcon";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="/">
        {/* Logo */}
        <Logo></Logo>
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
          <GlobeICon></GlobeICon>
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
              dât-
            >
              Sign Up
            </a>
            <a className="dropdown-item" href="#/">
              Log In
            </a>
          </div>

          <div
            class="modal fade"
            id="signUpModal"
            tabindex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel">
                    Sign up
                  </h5>
                  <button
                    type="button"
                    class="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body">...</div>
                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-secondary"
                    data-dismiss="modal"
                  >
                    Close
                  </button>
                  <button type="button" class="btn btn-primary">
                    Save changes
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
