import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Container } from "react-bootstrap";
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

export default function StatusCount() {
  const [dropDownData, setDropDownData] = useState([]);
  const [selectedStatue, setSelectedStatue] = useState("");
  const [reportData, setReportData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [chartData, setChartData] = useState({});
  const [chartOptions, setChartOptions] = useState({});
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
            `http://localhost:5000/applications-stage-count`
          );
          setReportData(res?.data);
        }
      })
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    getDropDownData();

    let stageCounts = {};
    if (reportData?.length) {
      stageCounts = reportData.reduce((acc, item) => {
        const stages = item.applicationsCountByStage;
        Object.keys(stages).forEach((stage) => {
          if (acc[stage]) {
            acc[stage] += stages[stage];
          } else {
            acc[stage] = stages[stage];
          }
        });
        return acc;
      }, {});
    }

    const labels = Object.keys(stageCounts);
    const values = Object.values(stageCounts);

    setChartData({
      labels: labels,
      datasets: [
        {
          label: "Applications per Status",
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
            text: "Position name",
          },
        },
        y: {
          title: {
            display: true,
            text: "Number of candidates",
          },
        },
      },
    });

    setLoading(false);
  }, [reportData]);

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
        <div className="dropdown-container">
          <div className="dropdown-header fs-6">
            Select Status{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-arrow-down-circle"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293z"
              />
            </svg>
          </div>
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
