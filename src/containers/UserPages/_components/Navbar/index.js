import React from "react";
import "./style.css"
import LanguageIcon from '@mui/icons-material/Language';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import DehazeIcon from '@mui/icons-material/Dehaze';
import { useState,useEffect } from "react";
export default function HomeNav() {
  const [state, setState]= useState({
    display:false,
  });
  const handleClick =()=>{
    setState({
      ...state,
      display:!true,
    })
  }
  console.log(state.display)
  return (
    <div style={{ backgroundColor: "black" }} className="homenav pb-5" >
      <div className="container">
        <div className="row">
          <div className="col-sm-3 mt-4">
            <span>Airbnb</span>
          </div>
          <div className="col-sm-6 mt-4">
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
          <div className="col-sm-3 mt-4">
            <span className="pr-4">Become a Host</span>
            <LanguageIcon/>
            <a onClick={handleClick} className="ml-4 user"><DehazeIcon/><AccountCircleIcon/></a>
            <p className="user-active" style={{display:`${state.display}`}}>
            <a>Sign in</a>
            <a>Sign up</a>
          </p>
          </div>
        
        </div>
        <div className="mx-auto" style={{ width: "800px" }}>
          <div className="tab-content nav-content" id="pills-tabContent" >
            <div
              className="tab-pane fade show active"
              id="pills-home"
              role="tabpanel"
              aria-labelledby="pills-home-tab"
            >
              <ul className="nav nav-pills nav-flex">
                <li className="nav-item">
                  <a className="nav-link bottom-navlink"  href="#">
                    Location
                  </a>
                  <p>Where are you going?</p>
                </li>
                <li className="nav-item">
                  <a className="nav-link bottom-navlink"  href="#">
                    Check in
                  </a>
                  <p>Add dates</p>
                </li>
                <li className="nav-item">
                  <a className="nav-link bottom-navlink"  href="#">
                    Check out
                  </a>
                  <p>Add dates</p>
                </li>
                <li className="nav-item">
                  <a className="nav-link bottom-navlink"  href="#">
                    Guests
                  </a>
                  <p>Add guests</p>
                </li>
                <li className="nav-item">
                  <a className="nav-link bottom-navlink"  href="#">
                    search
                  </a>
                </li>
              </ul>
            </div>
            <div
              className="tab-pane fade"
              id="pills-profile"
              role="tabpanel"
              aria-labelledby="pills-profile-tab"
            >
              <ul className="nav nav-pills nav-flex2">
                <li className="nav-item">
                  <a className="nav-link bottom-navlink"  href="#">
                    Location
                  </a>
                  <p>Where are you going?</p>
                </li>
                <li className="nav-item">
                  <a className="nav-link bottom-navlink"  href="#">
                    Date
                  </a>
                  <p>And when you want to go?</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
