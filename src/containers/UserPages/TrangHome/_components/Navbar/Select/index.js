import React, { useEffect, useState } from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import DehazeIcon from "@mui/icons-material/Dehaze";
import SearchIcon from "@mui/icons-material/Search";
import actSelect from "./modules/action";
import { useDispatch, useSelector } from "react-redux";
import Select from "react-select";
import { Link } from "react-router-dom";
export default function Selected() {
  const data = useSelector((state) => state.selectListReducer.data);
  const dispatch = useDispatch();
  const [selected, setSelected] = useState([]);
  useEffect(() => {
    dispatch(actSelect());
  }, []);

  const [location, setLocations] = useState({
    value:"",
    label: "",
  });
 
  useEffect(()=>{
    if(data){
      const choice = data.map((item)=>{
        return {value:item._id , label:item.province}
      })
      setLocations(choice)
    }
  },[data])
  const handleOnchange = (selected) => {
    setSelected({
      selected: selected,
    });
  };
  return (
    <div>
      <div className="tab-content nav-content" id="pills-tabContent">
        <div
          className="tab-pane fade show active"
          id="pills-home"
          role="tabpanel"
          aria-labelledby="pills-home-tab"
        >
          <ul className="nav nav-pills nav-flex">
            <li className="nav-item">
              <div className="dropdown">
                <a
                  className=" nav-link bottom-navlink my-nav"
                  type="button"
                  aria-expanded="false"
                >
                  Location
                  {/* <input
                    style={{ display: "block", border: "none" }}
                    placeholder="Where are you going?"
                  ></input> */}
                  <Select
                    value={selected.value}
                    onChange={handleOnchange}
                    placeholder={"Where are you going?"}
                    options={location}
                  />
                </a>

                {/* <div
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuButton"
                >
                </div> */}
              </div>
            </li>
            <li className="nav-item">
              <a className="nav-link bottom-navlink" href="#">
                Check in
              </a>
              <p>Add dates</p>
            </li>
            <li className="nav-item">
              <a className="nav-link bottom-navlink" href="#">
                Check out
              </a>
              <p>Add dates</p>
            </li>
            <li className="nav-item">
              <a className="nav-link bottom-navlink" href="#">
                Guests
              </a>
              <p>Add guests</p>
            </li>
            <li className="nav-item">
              <Link className="nav-link bottom-navlink mt-2" to={`/danh-sach-phong/${selected.value}`}>
                <SearchIcon />
              </Link>
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
              <a className="nav-link bottom-navlink" href="#">
                Location
              </a>
              <p>Where are you going?</p>
            </li>
            <li className="nav-item">
              <a className="nav-link bottom-navlink" href="#">
                Date
              </a>
              <p>And when you want to go?</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
