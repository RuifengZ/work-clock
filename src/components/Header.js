import React from "react";
import logo from "../assets/logo.png";
import Navbar from "react-bootstrap/Navbar";

export default function Header() {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand>
          <img
            src={logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="logo"
          />{" "}
          Work Clock
        </Navbar.Brand>
      </Navbar>
    </div>
  );
}
