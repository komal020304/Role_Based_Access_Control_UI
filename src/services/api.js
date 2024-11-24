// src/services/api.js
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

let users = [
  { id: 1, name: "John Doe", email: "john@example.com", role: "Admin" },
  { id: 2, name: "Jane Smith", email: "jane@example.com", role: "Editor" },
];

let roles = [
  { id: 1, name: "Admin", permissions: ["read", "write", "delete"] },
  { id: 2, name: "Editor", permissions: ["read", "write"] },
];

// Users
export const getUsers = async () => {
  await delay(500);
  return users;
};

export const createUser = async (user) => {
  await delay(500);
  user.id = Date.now();
  users.push(user);
};

export const updateUser = async (id, updatedUser) => {
  await delay(500);
  users = users.map((user) =>
    user.id === id ? { ...user, ...updatedUser } : user
  );
};

export const deleteUser = async (id) => {
  await delay(500);
  users = users.filter((user) => user.id !== id);
};

// Roles
export const getRoles = async () => {
  await delay(500);
  return roles;
};

export const createRole = async (role) => {
  await delay(500);
  role.id = Date.now();
  roles.push(role);
};

export const updateRole = async (id, updatedRole) => {
  await delay(500);
  roles = roles.map((role) =>
    role.id === id ? { ...role, ...updatedRole } : role
  );
};

export const deleteRole = async (id) => {
  await delay(500);
  roles = roles.filter((role) => role.id !== id);
};
