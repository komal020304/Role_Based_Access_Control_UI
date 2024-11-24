// src/services/api.js
import axios from "axios";
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export const fetchUsers = async () => {
  await delay(500);
  return [
    { id: 1, name: "John Doe", role: "Admin", status: "Active" },
    { id: 2, name: "Jane Smith", role: "Editor", status: "Inactive" },
  ];
};

// Additional functions for roles, permissions, etc.
export const fetchRoles = async () => {
  await delay(500);
  return [
    { id: 1, name: "Admin", permissions: ["Read", "Write", "Delete"] },
    { id: 2, name: "Editor", permissions: ["Read", "Write"] },
  ];
};

export const fetchPermissions = async () => {
  await delay(500);
  return [
    { id: 1, name: "Read" },
    { id: 2, name: "Write" },
    { id: 3, name: "Delete" },
  ];
};

export const updateUserRole = async (userId, role) => {
  await delay(500);
  return { success: true, userId, role };
};

export const addRole = async (role) => {
  await delay(500);
  return { success: true, role };
};

// Add similar functions for permission management, etc.

const api = axios.create({
  baseURL: "http://localhost:5000/api", // Update with your actual backend URL
});

// Add User
export const addUser = async (userData) => {
  const response = await api.post("/users", userData);
  return response.data;
};

// Add Role
// export const addRole = async (roleData) => {
//   const response = await api.post("/roles", roleData);
//   return response.data;
// };

// Add Permission
export const addPermission = async (permissionData) => {
  const response = await api.post("/permissions", permissionData);
  return response.data;
};

// Other API methods (getUsers, getRoles, getPermissions) go here...

export default api;
