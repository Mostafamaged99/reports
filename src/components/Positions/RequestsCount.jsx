import axios from "axios";
import React, { useEffect, useState } from "react";
import { Audio } from "react-loader-spinner";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

export default function RequestsCount() {
  const [loading, setLoading] = useState(true);
  const [chartData, setChartData] = useState({});
  const [chartOptions, setChartOptions] = useState({});
  useEffect(() => {
    axios
      .get(`http://localhost:5000/job-requests-count`)
      .then((res) => {
        const labels = Object.keys(res.data[0]);
        const values = Object.values(res.data[0]);

        setChartData({
          labels: labels,
          datasets: [
            {
              label: "",
              data: values,
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
      <div className="chart-container d-flex justify-content-center align-items-center px-3">
        <Bar
          data={chartData}
          options={chartOptions}
          className="w-full "
          style={{ height: "400px", width: "100%" }}
        />
      </div>
    </>
  );
}
