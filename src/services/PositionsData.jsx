import axios from "axios";

export async function getCountryCountData() {
    return await axios
        .get(`http://localhost:5000/position-country-count`)
        .then((res) => res)
        .catch((err) => console.log(err));
}

export async function getOpenDaysData() {
    return await axios
        .get(`http://localhost:5000/position-open-days`)
        .then((res) => res)
        .catch((err) => console.log(err));
}

export async function getAgencyCountData() {
    return await axios
        .get(`http://localhost:5000/agency-active-positions-count`)
        .then((res) => res)
        .catch((err) => console.log(err));
}

export async function getRequestsCountData() {
    return await axios
        .get(`http://localhost:5000/job-requests-count`)
        .then((res) => res)
        .catch((err) => console.log(err));
}