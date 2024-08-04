// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import { Audio } from "react-loader-spinner";
// import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
// import { Doughnut } from "react-chartjs-2";
// ChartJS.register(ArcElement, Tooltip, Legend);

// export default function StatusCount() {
//   const [loading, setLoading] = useState(true);
//   const [chartData, setChartData] = useState({});
//   const [chartOptions, setChartOptions] = useState({});
//   useEffect(() => {
//     axios
//       .get(`http://localhost:5000/applications-status-count`)
//       .then((res) => {
//         const labels = Object.keys(res.data[0]);
//         const values = Object.values(res.data[0]);

//         setChartData({
//           labels: labels,
//           datasets: [
//             {
//               label: "Applications per Status",
//               data: values,
//               backgroundColor: [
//                 "rgba(54, 162, 235, 0.2)",
//                 "rgb(40, 167, 69,0.2)",
//                 "rgba(255, 206, 86, 0.2)",
//                 "rgba(75, 192, 192, 0.2)",
//               ],
//               hoverBackgroundColor: [
//                 "rgb(54, 162, 235)",
//                 "rgb(28, 139, 55)",
//                 "rgb(255, 206, 86)",
//                 "rgb(75, 192, 192)",
//               ],
//               borderColor: [
//                 "rgb(54, 162, 235)",
//                 "rgb(33, 150, 243)",
//                 "rgb(0, 123, 255)",
//                 "rgb(0, 105, 217)",
//               ],
//               borderWidth: 1,
//             },
//           ],
//         });

//         setChartOptions({
//           responsive: true,
//           plugins: {
//             legend: {
//               labels: {
//                 usePointStyle: true,
//               },
//             },
//           },
//         });
//       })
//       .catch((err) => console.log(err))
//       .finally(() => setLoading(false));
//   }, []);

//   if (loading) {
//     return (
//       <div className="d-flex justify-content-center vh-100 align-items-center bg-info">
//         <Audio
//           height="100"
//           width="100"
//           color="#fff"
//           ariaLabel="audio-loading"
//           wrapperStyle={{}}
//           wrapperClass="wrapper-class"
//           visible={true}
//         />
//       </div>
//     );
//   }

//   return (
//     <>
//       <div className="chart-container d-flex justify-content-center align-items-center">
//         <Doughnut
//           data={chartData}
//           options={chartOptions}
//           className="w-full md:w-30rem"
//           style={{ height: "400px", width: "100%" }}
//         />
//       </div>
//     </>
//   );
// }

import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Container } from "react-bootstrap";

export default function StatusCount() {
  const [dropDownData, setDropDownData] = useState([]);
  const [selectedStatue, setSelectedStatue] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [reportData, setReportData] = useState({});
  const valuesToCheck = ["Matched", "Invited", "Evaluated"];
  async function getDropDownData() {
    return await axios
      .get(`http://localhost:5000/all-position-stages-status`)
      .then((res) => {
        const data = res.data;
        setDropDownData(data.map((item) => item.statusName));
        return data;
      })
      .catch((err) => console.log(err));
  }

  const handleStatusChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setSelectedStatue((prev) => {
        const updatedStatuses = [...prev, value];
        setSelectedStatue(updatedStatuses);
      });
    } else {
      setSelectedStatue((prev) => {
        const updatedStatuses = prev.filter((status) => status !== value);
        setSelectedStatue(updatedStatuses);
      });
    }
  };

  const handelInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "startDate") {
      setStartDate(value);
    } else if (name === "endDate") {
      setEndDate(value);
    }
  };

  const dataSent = {
    status_names: selectedStatue,
    start_date: startDate,
    end_date: endDate,
  };

  async function sendData(data) {
    await axios
      .post(`http://localhost:5000/applications-status-inputs`, data)
      .then(async (res) => {
        const { id, ...filteredData } = res.data;
        console.log(filteredData);
        if (
          valuesToCheck.every((value) =>
            filteredData?.status_names.includes(value)
          )
        ) {
          const res = await axios.get(
            `http://localhost:5000/applications-status-count`
          );
          setReportData(res?.data);
        }
      })
      .catch((err) => console.log(err));
  }


  useEffect(() => {
    getDropDownData();
    console.log("reportData",reportData);
  }, [reportData]);

  return (
    <>
      <div className="d-flex flex-column justify-content-center align-items-center">
        <div className="dropdown-container">
          <div className="dropdown-header fs-6">Select Status ⮟</div>
          <div className="dropdown-menu">
            {dropDownData.map((statue, key) => {
              return (
                <div className="dropdown-item " key={key}>
                  <input
                    className="me-2"
                    type="checkbox"
                    value={statue}
                    onChange={handleStatusChange}
                  />
                  <label htmlFor={statue}>{statue}</label>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <Container>
        <div className="row">
          <div className="col-md-6">
            <label className="mt-2" htmlFor="start-date">
              Start Date
            </label>
            <input
              type="date"
              className="form-control mb-2"
              //value={startDate}
              onChange={handelInputChange}
              id="start-date"
              name="startDate"
            />
          </div>
          <div className="col-md-6">
            <label className="mt-2" htmlFor="end-date">
              End Date
            </label>
            <input
              type="date"
              className="form-control mb-2"
              //value={endDate}
              onChange={handelInputChange}
              id="end-date"
              name="endDate"
            />
          </div>
        </div>
        <Button className="w-100" onClick={() => sendData(dataSent)}>
          Post data
        </Button>
      </Container>
    </>
  );
}
