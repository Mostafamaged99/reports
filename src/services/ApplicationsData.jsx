import axios from "axios";

export async function getPositionCountData() {
    return await axios
        .get(`http://localhost:5000/applications-position-count`)
        .then((res) => res)
        .catch((err) => console.log(err));
}

export async function getStatusDropdownData() {
    return await axios
        .get(`http://localhost:5000/all-position-stages-status`)
        .then((res) => res)
        .catch((err) => console.log(err));
}

export async function postStatusData() {
    return await axios
        .post(`http://localhost:5000/applications-status-inputs`)
        .then((res) => res)
        .catch((err) => console.log(err));
}

export async function getStatusData() {
    return await axios
        .get(`http://localhost:5000/applications-status-count`)
        .then((res) => res)
        .catch((err) => console.log(err));
}

export async function getRequisitionCountData() {
    return await axios
        .get(`http://localhost:5000/requisitions-count`)
        .then((res) => res)
        .catch((err) => console.log(err));
}

export async function getStageDropdown() {
    return await axios
        .get(`http://localhost:5000/all-position-stages`)
        .then((res) => res)
        .catch((err) => console.log(err));
}

export async function postStageData() {
    return await axios
        .post(`http://localhost:5000/applications-stage-inputs`)
        .then((res) => res)
        .catch((err) => console.log(err));
}

export async function getStageData() {
    return await axios
        .get(`http://localhost:5000/applications-stage-count`)
        .then((res) => res)
        .catch((err) => console.log(err));
}