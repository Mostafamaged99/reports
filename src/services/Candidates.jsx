import axios from "axios";
import React from "react";

export default function Candidates() {
  async function getExpYearsData() {
    return await axios
      .get(`http://localhost:5000/candidate-exp-years-count`)
      .then((res) => console.log(res.data[0]))
      .catch((err) => console.log(err));
  }

  return <div></div>;
}
