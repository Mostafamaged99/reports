import React from "react";
import PriortyCount from "./PriortyCount";
import HiringCount from "./HiringCount";
import RequestsCount from "./RequestsCount";
import WorkPlaceCount from "./WorkPlaceCount";
import EmploymentCount from "./EmploymentCount";

export default function HiringRequests() {
  return (
    <>
      <div className="container">
        <div className="row my-3">
          <div className="col-md-6 justify-content-center d-flex text-center mb-3">
            <div className="PriortyCount text-center mb-3">
              <h3>Hiring Priority</h3>
              <div className="card py-3 ">
                <PriortyCount />
              </div>
            </div>
          </div>
          <div className="col-md-6 justify-content-center d-flex text-center mb-3">
            <div className="HiringCount text-center ">
              <h3>Internal vs External Hiring Requests</h3>
              <div className="card py-3 ">
                <HiringCount />
              </div>
            </div>
          </div>
          <div className="col-md-6 justify-content-center d-flex text-center mb-3">
            <div className="RequestsCount text-center mb-3">
              <h3>Hiring Requests</h3>
              <div className="card py-3 ">
                <RequestsCount />
              </div>
            </div>
          </div>
          <div className="col-md-6 justify-content-center d-flex text-center mb-3">
            <div className="WorkPlaceCount text-center ">
              <h3>Workplace Type </h3>
              <div className="card py-3 ">
                <WorkPlaceCount />
              </div>
            </div>
          </div>
          <div className="col-md-6 justify-content-center d-flex text-center mb-3">
            <div className="EmploymentCount text-center ">
              <h3>Employment Type </h3>
              <div className="card py-3 ">
                <EmploymentCount />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
