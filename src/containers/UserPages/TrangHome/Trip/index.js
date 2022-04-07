import React from "react";
import { Link } from "react-router-dom";
import data from "./data.json";
import "./style.css";
export default function Trip() {
  const fecthTrip = () => {
    return data.map((trip, index) => {
      return (
        <div key={index} className="col-md-3 col-6">
          <Link to={`/danh-sach-phong/${trip.key}`}>
            <div className="card">
              <img
                src={trip.hinhAnh}
                className="card-img-top d-block"
                alt="..."
                style={{ borderRadius: "10px 10px 0 0" }}
              />
              <div className="card-body">
                <h5 className="card-title pt-5">{trip.ten}</h5>
              </div>
            </div>
          </Link>
        </div>
      );
    });
  };
  return (
    <div className="container">
      <h3 className="pt-5 pb-5">Inspiration for your next trip </h3>
      <div className="row">{fecthTrip()}</div>
    </div>
  );
}
