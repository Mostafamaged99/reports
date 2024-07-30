import React from "react";
import ExpYearsChart from "./ExpYearsChart";
import InstituteChart from "./InstituteChart";

export default function Candidates() {
  return (
    <>
      <div className="container">
        <div className="row my-3">
          <div className="col-md-6 justify-content-center d-flex text-center">
            <div className="candidatesPerEx text-center mb-3">
              <h3>Candidates Per years of Experience</h3>
              <div className="card py-3 ">
                <ExpYearsChart />
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="topInsitute text-center ">
              <h3>Top 10 Institute</h3>
              <div className="card py-3 ">
                <InstituteChart />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
