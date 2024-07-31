import axios from "axios";
import React, { useEffect, useState } from "react";
import { Audio } from "react-loader-spinner";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend
);

export default function OpenDays() {
  const [loading, setLoading] = useState(true);
  const [chartData, setChartData] = useState({});
  const [chartOptions, setChartOptions] = useState({});
  useEffect(() => {
    axios
      .get(`http://localhost:5000/position-open-days`)
      .then((res) => {
        const labels = res?.data.map((res) => res.positionName);
        const values = res?.data.map((res) => res.avgOpenDays);

        setChartData({
          labels: labels,
          datasets: [
            {
              label: "AVG_OPEN_DAYS",
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
          scales: {
            x: {
              title: {
                display: true,
                text: "Position", 
              },
            },
            y: {
              title: {
                display: true,
                text: "Avg openning days", 
              },
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
        <Line
          data={chartData}
          options={chartOptions}
          className="w-full "
          style={{ height: "400px", width: "100%" }}
        />
      </div>
    </>
  );
}
