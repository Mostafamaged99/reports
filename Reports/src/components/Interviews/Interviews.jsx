import axios from "axios";
import React, { useEffect, useState } from "react";
import { ColorRing } from "react-loader-spinner";

export default function Interviews() {
  const [loading, setLoading] = useState(true);
  async function getInterviewsData(chart) {
    return await axios
      .get(`http://localhost:5000/${chart}`)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }

  useEffect(() => {
    getInterviewsData("interviews-type-count");
    getInterviewsData("interviews-language-count");
    getInterviewsData("evaluation_forms_count");
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
  return <div>Interviews</div>;
}
