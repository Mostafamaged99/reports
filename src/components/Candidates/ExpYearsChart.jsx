import React, { useEffect, useState } from "react";
import { Audio } from "react-loader-spinner";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { getExpYearsData } from "../../services/CandidatesData";
ChartJS.register(ArcElement, Tooltip, Legend);

export default function ExpYearsChart() {
  const [loading, setLoading] = useState(true);
  const [chartData, setChartData] = useState(null);
  const [chartOptions, setChartOptions] = useState({});

  useEffect(() => {
    getExpYearsData()
      .then((data) => {
        const { id, ...filteredData } = data;
          const labels = Object.keys(filteredData);
          const values = Object.values(filteredData);

        setChartData({
          labels: labels,
          datasets: [
            {
              label: "Candidates per years of Experience",
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
              labels: {
                usePointStyle: true,
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
      <div className="chart-container d-flex justify-content-center align-items-center">
        <Doughnut
          data={chartData}
          options={chartOptions}
          className="w-full md:w-30rem"
          style={{ height: "400px", width: "100%" }}
        />
      </div>
    </>
  );
}
