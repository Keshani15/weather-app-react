import "./Weather.css";
import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export default function Weather() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-6   ">
          <Form.Control type="Search" placeholder="Enter City..." autoFocus />
        </div>
        <div className="col-2">
          <Button variant="primary">Search</Button>
        </div>
        <div className="col-2">
          <Button variant="success">Current</Button>
        </div>
      </div>
      <h1 className="Display-City">Johannesburg</h1>
    </div>
  );
}
