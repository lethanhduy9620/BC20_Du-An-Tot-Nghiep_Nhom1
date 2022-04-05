import React, { useEffect, useState } from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import DehazeIcon from "@mui/icons-material/Dehaze";
import SearchIcon from "@mui/icons-material/Search";
import actSelect from "./modules/action";
import { useDispatch, useSelector } from "react-redux";
import Select from "react-select";
import { Link } from "react-router-dom";
import { lineHeight } from "@mui/system";
export default function SelectResponsive() {
  const data = useSelector((state) => state.selectListReducer.data);
  const dispatch = useDispatch();
  const [selected, setSelected] = useState([]);
  useEffect(() => {
    dispatch(actSelect());
  }, []);

  const [location, setLocations] = useState({
    value: "",
    label: "",
  });

  useEffect(() => {
    if (data) {
      const choice = data.map((item) => {
        return { value: item._id, label: item.province };
      });
      setLocations(choice);
    }
  }, [data]);
  const handleOnchange = (selected) => {
    setSelected({
      selected: selected,
    });
  };
  return (
    <div className="row">
      <div className="col-sm-8 col-6">
      <Select
        value={selected.value}
        onChange={handleOnchange}
        placeholder={"Where are you going?"}
        options={location}
        style={{color:"black"}}
      />
      </div>
     <div className="col-sm-4 col-6">
     <Link
        className="nav-link bottom-navlink mt-2"
        to={`/danh-sach-phong/${selected.selected?.value}`}
        style={{color:"white"}}
      >
        <SearchIcon />
      </Link>
     </div>
    </div>
  );
}
