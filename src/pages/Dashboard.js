// src/pages/Dashboard.js
import React from "react";
import { Bar, Doughnut, Line } from "react-chartjs-2";
import { FaUser, FaUserShield, FaLock } from "react-icons/fa";

const Dashboard = () => {
  const userData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "New Users",
        data: [50, 30, 60, 70, 40, 80],
        backgroundColor: "#4CAF50",
      },
    ],
  };

  const roleData = {
    labels: ["Admin", "Editor", "Viewer"],
    datasets: [
      {
        label: "Roles",
        data: [3, 7, 15],
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
      },
    ],
  };

  const permissionData = {
    labels: ["Read", "Write", "Delete"],
    datasets: [
      {
        label: "Permissions Used",
        data: [30, 40, 10],
        backgroundColor: ["#FF9F40", "#4BC0C0", "#FF6384"],
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: true,
    plugins: {
      legend: {
        position: "top",
      },
      tooltip: {
        mode: "index",
      },
    },
  };

  return (
    <div className="dashboard p-4">
      <h2 className="text-2xl font-bold mb-4">Dashboard Overview</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white shadow-md p-4 rounded-lg flex items-center">
          <FaUser className="text-blue-500 text-3xl mr-4" />
          <div>
            <h3 className="font-semibold text-lg">Total Users</h3>
            <p className="text-xl">150</p>
          </div>
        </div>
        <div className="bg-white shadow-md p-4 rounded-lg flex items-center">
          <FaUserShield className="text-green-500 text-3xl mr-4" />
          <div>
            <h3 className="font-semibold text-lg">Active Roles</h3>
            <p className="text-xl">25</p>
          </div>
        </div>
        <div className="bg-white shadow-md p-4 rounded-lg flex items-center">
          <FaLock className="text-red-500 text-3xl mr-4" />
          <div>
            <h3 className="font-semibold text-lg">Permissions Granted</h3>
            <p className="text-xl">45</p>
          </div>
        </div>
      </div>

      <div className="charts mt-6 grid grid-cols-1 md:grid-cols-2 gap-4 w-full h-full">
        <div className="bg-white shadow-md p-4 rounded-lg">
          <h3 className="font-semibold text-lg mb-2">Monthly User Growth</h3>
          <Bar data={userData} options={chartOptions} />
        </div>
        <div className="bg-white shadow-md p-4 rounded-lg">
          <h3 className="font-semibold text-lg mb-2">Roles Distribution</h3>
          <Doughnut data={roleData} options={chartOptions} />
        </div>
        <div className="bg-white shadow-md p-4 rounded-lg">
          <h3 className="font-semibold text-lg mb-2">Permissions Usage</h3>
          <Line
            data={permissionData}
            options={chartOptions}
            className="chart-container"
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
