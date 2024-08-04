import React from "react";
import PositionCount from "./PositionCount";
import StatusCount from "./StatusCount";
import RequisitionsCount from "./RequisitionsCount";
import StageCount from "./StageCount";
import { Container } from "react-bootstrap";

export default function Applications() {
  return (
    <>
      <Container>
        <div className="row my-3">
          <div className="col-md-6 justify-content-center d-flex text-center mb-3">
            <div className="position-count text-center mb-3">
              <h3>Number of Applications Per Positions</h3>
              <div className="card py-3 ">
                <PositionCount />
              </div>
            </div>
          </div>
          <div className="col-md-6 justify-content-center d-flex text-center mb-3">
            <div className="status-count text-center ">
              <h3>Candidates per Status per Position</h3>
              <div className="card py-3 ">
                <StatusCount />
              </div>
            </div>
          </div>
          <div className="col-md-6 justify-content-center d-flex text-center mb-3">
            <div className="requisition-count text-center mb-3">
              <h3>Requisition Reason</h3>
              <div className="card py-3 ">
                <RequisitionsCount />
              </div>
            </div>
          </div>
          <div className="col-md-6 justify-content-center d-flex text-center mb-3">
            <div className="stage-count text-center ">
              <h3>Number of Candidates per Stage</h3>
              <div className="card py-3 ">
                <StageCount />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
