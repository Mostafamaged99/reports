import axios from "axios";

export async function getPriorityCountData() {
  return await axios
    .get("http://localhost:5000/positions-hiring-priority-count")
    .then((res) => res)
    .catch((err) => console.log(err));
}

export async function getHiringCountData() {
  return await axios
    .get("http://localhost:5000/position-hiring-requests")
    .then((res) => res)
    .catch((err) => console.log(err));
}

export async function getRequestsCountData() {
  return await axios
    .get("http://localhost:5000/approval_requests_count")
    .then((res) => res)
    .catch((err) => console.log(err));
}

export async function getWorkPlaceCountData() {
  return await axios
    .get("http://localhost:5000/positions-workplace-type-count")
    .then((res) => res)
    .catch((err) => console.log(err));
}

export async function getEmploymentCountData() {
  return await axios
    .get("http://localhost:5000/positions-employment-type-count")
    .then((res) => res)
    .catch((err) => console.log(err));
}
