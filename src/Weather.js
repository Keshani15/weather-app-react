import "./Weather.css";
import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export default function Weather() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-6 ms-4">
          <Form.Control type="Search" placeholder="Enter City..." autoFocus />
        </div>
        <div className="col-2">
          <Button variant="primary">Search</Button>
        </div>
        <div className="col-2">
          <Button variant="success">Current</Button>
        </div>
      </div>
      <h2 className="Display-City m-4">Johannesburg</h2>
      <ul className="Day-Time">
        <li>Thursday 15:38</li>
        <li>Clouds</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <h1 className="ms-4">
            14 <small>°C</small>
          </h1>
        </div>
        <div className="col-6">
          <ul>
            <li>Precipitation: 82%</li>
            <li>Wind: 4km/h</li>
          </ul>
        </div>
      </div>
      <div className="row ms-4">
        <div className="col-2">Fri</div>
        <div className="col-2">Sat</div>
        <div className="col-2">Sun</div>
        <div className="col-2">Mon</div>
        <div className="col-2">Tue</div>
      </div>
    </div>
  );
}
