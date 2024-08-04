import React from "react";
import ExpYearsChart from "./ExpYearsChart";
import InstituteChart from "./InstituteChart";
import { Container } from "react-bootstrap";

export default function Candidates() {
  return (
    <>
      <Container>
        <div className="row my-3">
          <div className="col-md-6 justify-content-center d-flex text-center">
            <div className="candidates-per-exp text-center mb-3">
              <h3>Candidates Per years of Experience</h3>
              <div className="card py-3 ">
                <ExpYearsChart />
              </div>
            </div>
          </div>
          <div className="col-md-6 justify-content-center d-flex text-center">
            <div className="top-institute text-center ">
              <h3>Top 10 Institute</h3>
              <div className="card py-3 ">
                <InstituteChart />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
