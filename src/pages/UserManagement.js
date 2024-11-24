// src/pages/UserManagement.js
import React, { useState } from "react";
import Modal from "../components/Modal";
import Table from "../components/Table";

const UserManagement = () => {
  const [users, setUsers] = useState([
    { id: 1, name: "Alice", role: "Admin", status: "Active" },
    { id: 2, name: "Bob", role: "Editor", status: "Inactive" },
    { id: 3, name: "Charlie", role: "Viewer", status: "Active" },
  ]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  const handleEdit = (user) => {
    setCurrentUser(user);
    setIsModalOpen(true);
  };

  const handleDelete = (userId) => {
    setUsers(users.filter((user) => user.id !== userId));
  };

  const columns = [
    { name: "Name", key: "name" },
    { name: "Role", key: "role" },
    { name: "Status", key: "status" },
    { name: "Actions", key: "actions" },
  ];

  return (
    <div className="user-management p-4">
      <h2 className="text-2xl font-bold mb-4">User Management</h2>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded mb-4"
        onClick={() => setIsModalOpen(true)}
      >
        Add User
      </button>
      <Table
        data={users}
        columns={columns}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
      {isModalOpen && (
        <Modal
          onClose={() => setIsModalOpen(false)}
          title={currentUser ? "Edit User" : "Add User"}
        >
          {/* User form content here */}
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Name"
              className="w-full p-2 border rounded"
              value={currentUser ? currentUser.name : ""}
              onChange={(e) =>
                setCurrentUser({ ...currentUser, name: e.target.value })
              }
            />
            <select className="w-full p-2 border rounded">
              <option value="Admin">Admin</option>
              <option value="Editor">Editor</option>
              <option value="Viewer">Viewer</option>
            </select>
            <button
              className="bg-green-500 text-white px-4 py-2 rounded"
              type="submit"
            >
              {currentUser ? "Update User" : "Add User"}
            </button>
          </form>
        </Modal>
      )}
    </div>
  );
};

export default UserManagement;
