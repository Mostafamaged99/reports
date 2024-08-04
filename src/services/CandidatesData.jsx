import axios from "axios";

  export async function getExpYearsData() {
    return await axios
      .get(`http://localhost:5000/candidate-exp-years-count`)
      .then((res) => res.data[0])
      .catch((err) => console.log(err));
  }

  export async function getInstituteData() {
    return await axios
      .get(`http://localhost:5000/candidate-institutes-count`)
      .then((res) => res.data[0])
      .catch((err) => console.log(err));
  }



