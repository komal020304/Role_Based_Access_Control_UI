// src/layouts/Sidebar.js
import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="w-64 bg-gray-800 text-gray-100 flex flex-col">
      <div className="text-2xl font-semibold text-center py-4">
        Admin Dashboard
      </div>
      <nav className="flex flex-col px-4 space-y-2">
        <NavLink to="/" className="py-2 px-4 rounded hover:bg-gray-700">
          Dashboard
        </NavLink>
        <NavLink to="/users" className="py-2 px-4 rounded hover:bg-gray-700">
          User Management
        </NavLink>
        <NavLink to="/roles" className="py-2 px-4 rounded hover:bg-gray-700">
          Role Management
        </NavLink>
        <NavLink
          to="/permissions"
          className="py-2 px-4 rounded hover:bg-gray-700"
        >
          Permissions
        </NavLink>
        <NavLink to="/profile" className="py-2 px-4 rounded hover:bg-gray-700">
          Profile
        </NavLink>
      </nav>
    </aside>
  );
};

export default Sidebar;
