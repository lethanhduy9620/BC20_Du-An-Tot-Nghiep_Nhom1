import React from "react";
import "./style.css"
export default function Footer() {
  return (
    <div style={{ backgroundColor: "rgb(247 247 247)" }}>
      <div className="container pt-5">
        <div className="row footer">
          <div className="col-md-3 col-6">
            <ul style={{ listStyle: "none" }}>
              <li>
                <h4>Support</h4>
              </li>
              <li>Help center</li>
              <li>Safety information</li>
              <li>Cancel option</li>
              <li>Our response to the COVID-19 pandemic Disabled people support</li>
              <li>Report a neighbor's concern</li>
            </ul>
          </div>
          <div className="col-md-3 col-6">
            <ul style={{ listStyle: "none" }}>
              <li>
                <h4>Community</h4>
              </li>
              <li>Airbnb.org: relief housing</li>
              <li>Supporting Afghan Refugees</li>
              <li>Combating discrimination</li>
            </ul>
          </div>
          <div className="col-md-3 col-6">
            <ul style={{ listStyle: "none" }}>
              <li>
                <h4>Hosting</h4>
              </li>
              <li>Try hosting</li>
              <li>AirCover: protection for Hosts</li>
              <li>Explore hosting resources</li>
              <li>Visit our community forum</li>
              <li>How to host responsibly</li>
            </ul>
          </div>
          <div className="col-md-3 col-6">
            <ul style={{ listStyle: "none" }}>
              <li>
                <h4>About</h4>
              </li>
              <li>Newsroom</li>
              <li>Learn about new features</li>
              <li>Letter from our founders</li>
              <li>Careers</li>
              <li>Investors</li>
              <li>Airbnb Luxe</li>
            </ul>
          </div>
        </div>
        <hr />
        <div>
          <div className="row">
            <div className="col-sm-6">@2022 Airbnb,Inc</div>
            <div className="col-sm-6">English US</div>
          </div>
        </div>
      </div>
    </div>
  );
}
