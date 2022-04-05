import React from "react";
import "./style.css";
import LanguageIcon from "@mui/icons-material/Language";
import Logo from "../../../components/Logo"
import HamburgerIcon from "./../../../components/Icons/HamburgerIcon";
import PersonIcon from "./../../../components/Icons/PersonIcon";
import Select from "./Select";
import SelectResponsive from "./Select-responsive";
import { Link } from "react-router-dom";
import LogIn from "../../../Authentication/LogIn/LogIn";
import SignUp from "../../../Authentication/SignUp/SignUp"
import LogoutIcon from '@mui/icons-material/Logout';
export default function HomeNav() {
  const user = JSON.parse(localStorage.getItem("User"))
  const handleLogout = () =>{
    localStorage.clear();
  }
  const handleLogin = () =>{
    if(localStorage.getItem("User")){
      return(
         <div>
            <div className="d-flex justify-content-between align-items-center row">
            <div className="col-sm-10"><span >{user.user.name}</span></div>
            <div className="col-sm-2"><Link to="/" onClick={handleLogout()}  className="btn text-light"><LogoutIcon/></Link></div>
        </div>
         </div>
      )
    }else{
      return (
        <button
        className="btn btn-light"
        type="button"
        id="dropdownMenuButton"
        data-toggle="dropdown"
        aria-expanded="false"
        style={{ border: "1px solid black" }}
      >
        <div className="d-flex justify-content-between align-items-center">
          <HamburgerIcon></HamburgerIcon>
          <PersonIcon></PersonIcon>
        </div>
      </button>
      )
    }
  }
  return (
    <div style={{ backgroundColor: "black" }} className="homenav pb-5">
      <div className="container">
        <div className="row">
          <div className="col-sm-3 mt-4 pt-3">
            <Logo></Logo>
          </div>
          <div className="col-sm-5 mt-4 my-responsive">
            <ul className="nav nav-pills mb-3 my-responsive" id="pills-tab" role="tablist">
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
          <div className="reponsive-1200px col-sm-5 mt-4 pt-3">
            <SelectResponsive/>
          </div>
          <div className="col-sm-4 mt-4 d-flex justify-content-lg-end align-items-center">
            <span className="pr-3 responsive-992px" style={{display:`${localStorage.getItem("User") ? "none" : "block" }`}}>Become a Host <LanguageIcon /></span>
            <div className="dropdown pl-3">
              {handleLogin()}
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
        </div>
        <div className="mx-auto my-responsive" style={{ width: "800px" }}>
          <Select />
        </div>
      </div>
    </div>
  );
}
