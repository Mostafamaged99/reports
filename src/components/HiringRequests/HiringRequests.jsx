import React from "react";
import HiringCount from "./HiringCount";
import RequestsCount from "./RequestsCount";
import WorkPlaceCount from "./WorkPlaceCount";
import EmploymentCount from "./EmploymentCount";
import PriorityCount from "./PriorityCount";
import { Container } from "react-bootstrap";

export default function HiringRequests() {
  return (
    <>
      <Container>
        <div className="row my-3">
          <div className="col-md-6 justify-content-center d-flex text-center mb-3">
            <div className="Priority-count text-center mb-3">
              <h3>Hiring Priority</h3>
              <div className="card py-3 ">
                <PriorityCount />
              </div>
            </div>
          </div>
          <div className="col-md-6 justify-content-center d-flex text-center mb-3">
            <div className="Hiring-count text-center ">
              <h3>Internal vs External Hiring Requests</h3>
              <div className="card py-3 ">
                <HiringCount />
              </div>
            </div>
          </div>
          <div className="col-md-6 justify-content-center d-flex text-center mb-3">
            <div className="Requests-count text-center mb-3">
              <h3>Hiring Requests</h3>
              <div className="card py-3 ">
                <RequestsCount />
              </div>
            </div>
          </div>
          <div className="col-md-6 justify-content-center d-flex text-center mb-3">
            <div className="WorkPlace-count text-center ">
              <h3>Workplace Type </h3>
              <div className="card py-3 ">
                <WorkPlaceCount />
              </div>
            </div>
          </div>
          <div className="col-md-6 justify-content-center d-flex text-center mb-3">
            <div className="Employment-count text-center ">
              <h3>Employment Type </h3>
              <div className="card py-3 ">
                <EmploymentCount />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
