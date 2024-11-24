// src/layouts/Navbar.js
import React from "react";

const Navbar = () => {
  return (
    <header className="bg-white shadow-md flex justify-between items-center px-6 py-4">
      <h2 className="text-xl font-semibold">Dashboard</h2>
      <button className="px-4 py-2 bg-blue-500 text-white rounded">
        Logout
      </button>
    </header>
  );
};

export default Navbar;
