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
  return <div>Positions</div>;
}
