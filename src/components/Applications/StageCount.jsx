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
  const [reportData, setReportData] = useState(null);
  const valuesToCheck = [
    "Technical Interview",
    "Sourcing Candidates",
    "hh",
    "Talentino Screening Interview",
  ];
  async function getDropDownData() {
    return await axios
      .get(`http://localhost:5000/all-position-stages`)
      .then((res) => {
        const data = res.data;
        setDropDownData(data[0].map((item) => item.stage));
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
        return updatedStatuses;
      });
    } else {
      setSelectedStatue((prev) => {
        const updatedStatuses = prev.filter((status) => status !== value);
        setSelectedStatue(updatedStatuses);
        return updatedStatuses;
      });
    }
  };

  const dataSent = {
    stage_names: selectedStatue,
  };

  async function sendData(data) {
    await axios
      .post(`http://localhost:5000/applications-stage-inputs`, data)
      .then(async (res) => {
        const { id, ...filteredData } = res.data;
        if (
          valuesToCheck.every((value) =>
            filteredData?.stage_names.includes(value)
          )
        ) {
          const res = await axios.get(
            `http://localhost:5000/applications-status-count`
          );
          //console.log(res?.data);
          setReportData(res?.data);
        }
      })
      .catch((err) => console.log(err));
  }


  useEffect(() => {
    getDropDownData();
    //console.log(reportData);
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
        <Button className="w-75 mt-2" onClick={() => sendData(dataSent)}>
          Post data
        </Button>
      </Container>
    </>
  );
}
