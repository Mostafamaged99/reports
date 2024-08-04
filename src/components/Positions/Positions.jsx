import React from "react";
import CountryCount from "./CountryCount";
import OpenDays from "./OpenDays";
import AgencyCount from "./AgencyCount";
import RequestsCount from "./RequestsCount";
import { Container } from "react-bootstrap";

export default function Positions() {
  return (
    <>
      <Container>
        <div className="row my-3">
          <div className="col-md-6 justify-content-center d-flex text-center mb-3">
            <div className="country-count text-center mb-3">
              <h3>Number of Vacancies per Country</h3>
              <div className="card py-3 ">
                <CountryCount />
              </div>
            </div>
          </div>
          <div className="col-md-6 justify-content-center d-flex text-center mb-3">
            <div className="open-days text-center ">
              <h3>Position Average Opening Days</h3>
              <div className="card py-3 ">
                <OpenDays />
              </div>
            </div>
          </div>
          <div className="col-md-6 justify-content-center d-flex text-center mb-3">
            <div className="agency-count text-center mb-3">
              <h3>Active Positions Per Company</h3>
              <div className="card py-3 ">
                <AgencyCount />
              </div>
            </div>
          </div>
          <div className="col-md-6 justify-content-center d-flex text-center mb-3">
            <div className="requests-count text-center ">
              <h3>Job Requests Pending vs Moved to position</h3>
              <div className="card py-3 ">
                <RequestsCount />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
