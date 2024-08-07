import React from "react";
import { Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <Navbar className="navbar navbar-expand-lg bg-info m-3 sticky-top ">
        <Container>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse " id="navbarNav">
            <ul className="navbar-nav mx-auto ">
              <li className="nav-item">
                <NavLink className="nav-link text-white  fs-5 mx-5" aria-current="page" to="/candidates">
                  Candidates
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link text-white fs-5 mx-5 " aria-current="page" to="/positions">
                  Positions
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link text-white fs-5 mx-5 " aria-current="page" to="/hiring-requests">
                  Hiring Requests
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link text-white fs-5 mx-5 " aria-current="page" to="/applications">
                  Applications
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link text-white fs-5 mx-5 " aria-current="page" to="/interviews">
                  Interviews
                </NavLink>
              </li>
            </ul>
          </div>
        </Container>
      </Navbar>
    </>
  );
}
