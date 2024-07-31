import axios from "axios";
import React, { useEffect, useState } from "react";
import { Audio } from "react-loader-spinner";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
ChartJS.register(ArcElement, Tooltip, Legend);

export default function InstituteChart() {
  const [loading, setLoading] = useState(true);
  const [chartData, setChartData] = useState({});
  const [chartOptions, setChartOptions] = useState({});
  const [labels, setLabels] = useState([]);
  const [selectedLabel, setSelectedLabel] = useState("");
  useEffect(() => {
    axios
      .get(`http://localhost:5000/candidate-institutes-count`)
      .then((res) => {
        const labelsData = Object.keys(res.data[0]);
        const valuesData = Object.values(res.data[0]);
        setLabels(labelsData);
        setSelectedLabel(labelsData[0]);

        setChartData({
          labels: labelsData,
          datasets: [
            {
              label: "Candidates per insitute",
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
        <select value={selectedLabel} onChange={handelLabelChange} className="mb-3 p-2 border rounded">
          {labels.map((label, key) => {
            return (
              <option value={label} key={key}>
                {label}
              </option>
            );
          })}
        </select>
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
