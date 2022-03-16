import React from "react";
import { Link } from "react-router-dom";
import data from "./data.json";
export default function Trip() {
  const fecthTrip = () => {
    return data.map((trip) => {
      return (
        <div className="col-3">    
          <Link to={`/danh-sach-phong/${trip.key}`}>
            <div className="card" style={{ width: "18rem" }}>
              <img src={trip.hinhAnh} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{trip.ten}</h5>
              </div>
            </div>
          </Link>
          </div>
      );
    });
  };
  return (
    <div className="container">
      <div className="row">{fecthTrip()}</div>
    </div>
  );
}
