import axios from "axios";
import React, { useEffect, useState } from "react";
import { ColorRing } from "react-loader-spinner";

export default function Positions() {
  const [loading, setLoading] = useState(true);
  async function getPositionsData(chart) {
    return await axios
      .get(`http://localhost:5000/${chart}`)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }

  useEffect(() => {
    getPositionsData("position-country-count");
    getPositionsData("position-open-days");
    getPositionsData("job-requests-count");
    getPositionsData("agency-active-positions-count");
  }, []);

  if (loading) {
    return (
      <div className="d-flex justify-content-center vh-100 align-items-center">
        <ColorRing
          visible={true}
          height="80"
          width="80"
          ariaLabel="color-ring-loading"
          wrapperStyle={{}}
          wrapperClass="color-ring-wrapper"
          colors={["#000", "#000", "#000", "#000", "#000"]}
        />
      </div>
    );
  }
  return (
    <>
      <div className="container">
        <div className="row my-3">
          <div className="col-md-6 justify-content-center d-flex text-center">
            <div className="candidatesPerEx text-center mb-3">
              <h3>Candidates Per years of Experience</h3>
              <div className="card py-3 ">
                
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="topInsitute text-center ">
              <h3>Top 10 Institute</h3>
              <div className="card py-3 ">
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
