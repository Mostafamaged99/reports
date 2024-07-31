import React from "react";
import CountryCount from "./CountryCount";
import OpenDays from "./Opendays";
import AgencyCount from "./AgencyCount";
import RequestsCount from "./RequestsCount";

export default function Positions() {
  return (
    <>
      <div className="container">
        <div className="row my-3">
          <div className="col-md-6 justify-content-center d-flex text-center mb-3">
            <div className="countryCount text-center mb-3">
              <h3>Number of Vacancies per Country</h3>
              <div className="card py-3 ">
                <CountryCount />
              </div>
            </div>
          </div>
          <div className="col-md-6 justify-content-center d-flex text-center mb-3">
            <div className="openDays text-center ">
              <h3>Position Average Opening Days</h3>
              <div className="card py-3 ">
                <OpenDays />
              </div>
            </div>
          </div>
          <div className="col-md-6 justify-content-center d-flex text-center mb-3">
            <div className="agencyCount text-center mb-3">
              <h3>Active Positions Per Company</h3>
              <div className="card py-3 ">
                <AgencyCount />
              </div>
            </div>
          </div>
          <div className="col-md-6 justify-content-center d-flex text-center mb-3">
            <div className="requestsCount text-center ">
              <h3>Job Requests Pending vs Moved to position</h3>
              <div className="card py-3 ">
                <RequestsCount />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
