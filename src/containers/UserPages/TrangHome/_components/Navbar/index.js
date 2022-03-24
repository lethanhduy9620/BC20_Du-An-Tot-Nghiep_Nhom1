import React from "react";
import "./style.css";
import LanguageIcon from "@mui/icons-material/Language";

import Logo from "./../../../components/Logo";
import HamburgerIcon from "./../../../components/Icons/HamburgerIcon";
import PersonIcon from "./../../../components/Icons/PersonIcon";

import Select from "./Select";
export default function HomeNav() {
  return (
    <div style={{ backgroundColor: "black" }} className="homenav pb-5">
      <div className="container">
        <div className="row">
          <div className="col-sm-3 mt-4">
            <Logo></Logo>
          </div>
          <div className="col-sm-5 mt-4">
            <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
              <li className="nav-item" role="presentation">
                <a
                  className="nav-link active top-navlink"
                  id="pills-home-tab"
                  data-toggle="pill"
                  href="#pills-home"
                  role="tab"
                  aria-controls="pills-home"
                  aria-selected="true"
                >
                  Places to stay
                </a>
              </li>
              <li className="nav-item" role="presentation">
                <a
                  className="nav-link top-navlink"
                  id="pills-profile-tab"
                  data-toggle="pill"
                  href="#pills-profile"
                  role="tab"
                  aria-controls="pills-profile"
                  aria-selected="false"
                >
                  Experiences
                </a>
              </li>
              <li className="nav-item " role="presentation">
                <a className="nav-link top-navlink">Online Experiences</a>
              </li>
            </ul>
          </div>
          {/* <div className="col-sm-3 mt-4">
            <span className="pr-4">Become a Host</span>
            <LanguageIcon />
            <a onClick={handleClick} className="ml-4 user">
              <DehazeIcon />
              <AccountCircleIcon />
            </a>
            <p className="user-active" style={{ display: `${state.display}` }}>
              <a>Sign in</a>
              <a>Sign up</a>
            </p>
          </div> */}

          <div className="col-sm-4 mt-4 d-flex justify-content-lg-end align-items-center">
            <span className="pr-3">Become a Host</span>
            <LanguageIcon />
            <div className="dropdown pl-3">
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
                <a className="dropdown-item" href="#/">
                  Sign Up
                </a>
                <a className="dropdown-item" href="#/">
                  Log In
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="mx-auto" style={{ width: "800px" }}>
         <Select/>
        </div>
      </div>
    </div>
  );
}
