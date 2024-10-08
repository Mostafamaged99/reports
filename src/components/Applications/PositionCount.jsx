import axios from "axios";
import React, { useEffect, useState } from "react";
import { Audio } from "react-loader-spinner";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { Dropdown, DropdownButton } from "react-bootstrap";
ChartJS.register(ArcElement, Tooltip, Legend);

export default function PositionCount() {
  const [loading, setLoading] = useState(true);
  const [chartData, setChartData] = useState({});
  const [chartOptions, setChartOptions] = useState({});
  const [labels, setLabels] = useState([]);
  const [selectedLabel, setSelectedLabel] = useState("");
  useEffect(() => {
    axios
      .get(`http://localhost:5000/applications-position-count`)
      .then((res) => {
        const labelsData = res?.data.map((res) => res.positionTitle);
        const valuesData = res?.data.map((res) => res.applicationsCount);
        setLabels(labelsData);
        setSelectedLabel(labelsData[0]);

        setChartData({
          labels: labelsData,
          datasets: [
            {
              label: "Applications count by position",
              data: valuesData,
              backgroundColor: [
                "rgba(54, 162, 235, 0.2)",
                "rgb(40, 167, 69,0.2)",
                "rgba(255, 206, 86, 0.2)",
                "rgba(75, 192, 192, 0.2)",
              ],
              hoverBackgroundColor: [
                "rgb(54, 162, 235)",
                "rgb(28, 139, 55)",
                "rgb(255, 206, 86)",
                "rgb(75, 192, 192)",
              ],
              borderColor: [
                "rgb(54, 162, 235)",
                "rgb(33, 150, 243)",
                "rgb(0, 123, 255)",
                "rgb(0, 105, 217)",
              ],
              borderWidth: 1,
            },
          ],
        });

        setChartOptions({
          responsive: true,
          plugins: {
            legend: {
              display: false,
            },
          },
        });
      })
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, []);

  const handelLabelChange = (e) => {
    setSelectedLabel(e.target.value);
  };

  if (loading) {
    return (
      <div className="d-flex justify-content-center vh-100 align-items-center bg-info">
        <Audio
          height="100"
          width="100"
          color="#fff"
          ariaLabel="audio-loading"
          wrapperStyle={{}}
          wrapperClass="wrapper-class"
          visible={true}
        />
      </div>
    );
  }

  return (
    <>
      <div className="d-flex flex-column justify-content-center align-items-center">
        <DropdownButton value={selectedLabel} onChange={handelLabelChange} className="w-50 mb-3 mx-auto" title="Available Positions">
          {labels.map((label, key) => {
            return (
              <Dropdown.Item key={key} value={label} >
                {label}
              </Dropdown.Item>
            );
          })}
        </DropdownButton>

        {/* <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
       

        <select
          value={selectedLabel}
          onChange={handelLabelChange}
          className="mb-3 p-2 border rounded"
        >
          {labels.map((label, key) => {
            return (
              <option value={label} key={key}>
                {label}
              </option>
            );
          })}
        </select> */}

        <div className="chart-container d-flex justify-content-center align-items-center">
          <Doughnut
            data={chartData}
            options={chartOptions}
            className="w-full md:w-30rem"
            style={{ height: "400px", width: "100%" }}
          />
        </div>
      </div>
    </>
  );
}
