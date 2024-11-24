// // src/pages/Dashboard.js
// import React, { useState, useEffect } from "react";
// import { getUsers, getRoles } from "../services/api";
// import Table from "../components/Table";
// import Button from "../components/Button";

// const Dashboard = () => {
//   const [userCount, setUserCount] = useState(0);
//   const [roleCount, setRoleCount] = useState(0);
//   const [recentActivities, setRecentActivities] = useState([]);

//   useEffect(() => {
//     loadDashboardData();
//   }, []);

//   const loadDashboardData = async () => {
//     const users = await getUsers();
//     const roles = await getRoles();
//     setUserCount(users.length);
//     setRoleCount(roles.length);
//     setRecentActivities([
//       { id: 1, activity: "Created new user John Doe", date: "2024-11-22" },
//       {
//         id: 2,
//         activity: "Updated permissions for role Admin",
//         date: "2024-11-21",
//       },
//       { id: 3, activity: "Deleted user Jane Smith", date: "2024-11-20" },
//     ]);
//   };

//   return (
//     <div className="dashboard">
//       <h1 className="text-3xl font-bold mb-6">Dashboard</h1>

//       {/* Summary Cards */}
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
//         <div className="p-4 bg-white rounded shadow-md transition duration-300 transform hover:scale-105">
//           <h2 className="text-xl font-semibold">Total Users</h2>
//           <p className="text-3xl">{userCount}</p>
//         </div>
//         <div className="p-4 bg-white rounded shadow-md transition duration-300 transform hover:scale-105">
//           <h2 className="text-xl font-semibold">Total Roles</h2>
//           <p className="text-3xl">{roleCount}</p>
//         </div>
//         <div className="p-4 bg-white rounded shadow-md transition duration-300 transform hover:scale-105">
//           <h2 className="text-xl font-semibold">Total Permissions</h2>
//           <p className="text-3xl">15</p>
//         </div>
//       </div>

//       {/* Recent Activity */}
//       <h2 className="text-2xl font-bold mb-4">Recent Activity</h2>
//       <Table
//         data={recentActivities}
//         columns={["activity", "date"]}
//         showActions={false}
//       />

//       {/* Placeholder for Graphs/Charts */}
//       <div className="mt-8">
//         <h2 className="text-2xl font-bold mb-4">User and Role Statistics</h2>
//         <p className="text-gray-600">
//           [Placeholder for graphs or charts, e.g., user growth or role
//           distribution.]
//         </p>
//         <Button className="mt-4" onClick={() => alert("Feature coming soon!")}>
//           View Detailed Reports
//         </Button>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;

// src/pages/Dashboard.js
import React, { useState, useEffect } from "react";
import Button from "../components/Button";
import Table from "../components/Table";
import { getUsers, getRoles } from "../services/api";
import { FaUser, FaKey, FaTasks } from "react-icons/fa";

const Dashboard = () => {
  const [userCount, setUserCount] = useState(0);
  const [roleCount, setRoleCount] = useState(0);
  const [recentActivities, setRecentActivities] = useState([]);

  useEffect(() => {
    loadDashboardData();
  }, []);

  const loadDashboardData = async () => {
    const users = await getUsers();
    const roles = await getRoles();
    setUserCount(users.length);
    setRoleCount(roles.length);
    setRecentActivities([
      { id: 1, activity: "Created new user John Doe", date: "2024-11-22" },
      {
        id: 2,
        activity: "Updated permissions for role Admin",
        date: "2024-11-21",
      },
      { id: 3, activity: "Deleted user Jane Smith", date: "2024-11-20" },
    ]);
  };
  return (
    <div className="dashboard p-4">
      <h1 className="text-4xl font-bold mb-8">Admin Dashboard</h1>
      {/* Analytics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <div className="p-4 rounded-lg shadow-md bg-gradient-to-r from-purple-400 to-blue-500 text-white">
          <FaUser size={32} className="mb-2" />
          <h2 className="text-xl font-semibold">Total Users</h2>
          <div className="flex-wrap">
            <p className="text-2xl">1,234</p>
            <p className="text-2xl">Users: {userCount}</p>
          </div>
        </div>

        <div className="p-4 rounded-lg shadow-md bg-gradient-to-r from-green-400 to-teal-500 text-white">
          <FaKey size={32} className="mb-2" />
          <h2 className="text-xl font-semibold">Active Roles</h2>
          <div className="flex-wrap">
            <p className="text-2xl">56</p>
            <p className="text-2xl">Roles: {roleCount}</p>
          </div>
        </div>

        <div className="p-4 rounded-lg shadow-md bg-gradient-to-r from-yellow-400 to-orange-500 text-white">
          <FaTasks size={32} className="mb-2" />
          <h2 className="text-xl font-semibold">Permissions</h2>
          <div className="flex-wrap">
            <p className="text-2xl">89</p>
            <p className="text-2xl">Permissions granted: 0</p>
          </div>
        </div>
      </div>
      <h2 className="text-2xl font-bold mb-4">Activity Table</h2>
      <Table
        data={recentActivities}
        columns={["activity", "date"]}
        showActions={false}
      />
      {/* Recent Activity Feed */}
      <div className="mt-8">
        <div className="recent-activity bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">Recent Activity</h2>
          <ul className="space-y-2">
            <li className="border-b pb-2">
              User John Doe was assigned the 'Editor' role.
            </li>
            <li className="border-b pb-2">
              New permission 'Delete Records' created.
            </li>
            <li className="border-b pb-2">
              Role 'Admin' updated with additional permissions.
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">User and Role Statistics</h2>
        <p className="text-gray-600">
          Placeholder for graphs or charts, e.g., user growth or role //
          distribution.
        </p>
        <Button className="mt-4" onClick={() => alert("Feature coming soon!")}>
          View Detailed Reports
        </Button>
      </div>
    </div>
  );
};

export default Dashboard;
