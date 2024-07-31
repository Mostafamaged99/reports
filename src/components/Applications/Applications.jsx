import React from "react";
import PositionCount from "./PositionCount";
import StatusCount from "./StatusCount";
import RequisitionsCount from "./RequisitionsCount";
import StageCount from "./StageCount";

export default function Applications() {
  return (
    <>
      <div className="container">
        <div className="row my-3">
          <div className="col-md-6 justify-content-center d-flex text-center mb-3">
            <div className="countryCount text-center mb-3">
              <h3>Number of Applications Per Positions</h3>
              <div className="card py-3 ">
                <PositionCount />
              </div>
            </div>
          </div>
          <div className="col-md-6 justify-content-center d-flex text-center mb-3">
            <div className="openDays text-center ">
              <h3>Candidates per Status per Position</h3>
              <div className="card py-3 ">
                <StatusCount />
              </div>
            </div>
          </div>
          <div className="col-md-6 justify-content-center d-flex text-center mb-3">
            <div className="agencyCount text-center mb-3">
              <h3>Requisition Reason</h3>
              <div className="card py-3 ">
                <RequisitionsCount />
              </div>
            </div>
          </div>
          <div className="col-md-6 justify-content-center d-flex text-center mb-3">
            <div className="requestsCount text-center ">
              <h3>Number of Candidates per Stage</h3>
              <div className="card py-3 ">
                <StageCount />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
