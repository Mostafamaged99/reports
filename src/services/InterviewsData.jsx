import axios from "axios";

export async function getLanguageData() {
  return await axios
    .get(`http://localhost:5000/interviews-language-count`)
    .then((res) => res)
    .catch((err) => console.log(err));
}

export async function getTypeData() {
  return await axios
    .get(`http://localhost:5000/interviews-type-count`)
    .then((res) => res)
    .catch((err) => console.log(err));
}
