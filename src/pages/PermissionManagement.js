// src/pages/PermissionManagement.js
import React, { useState } from "react";
import Modal from "../components/Modal";
import Table from "../components/Table";

const PermissionManagement = () => {
  const [permissions, setPermissions] = useState([
    { id: 1, name: "Read" },
    { id: 2, name: "Write" },
    { id: 3, name: "Delete" },
  ]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPermission, setCurrentPermission] = useState(null);

  const handleEdit = (permission) => {
    setCurrentPermission(permission);
    setIsModalOpen(true);
  };

  const handleDelete = (permissionId) => {
    setPermissions(
      permissions.filter((permission) => permission.id !== permissionId)
    );
  };

  const columns = [
    { name: "Permission Name", key: "name" },
    { name: "Actions", key: "actions" },
  ];

  return (
    <div className="permission-management p-4">
      <h2 className="text-2xl font-bold mb-4">Permission Management</h2>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded mb-4"
        onClick={() => setIsModalOpen(true)}
      >
        Add Permission
      </button>
      <Table
        data={permissions}
        columns={columns}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
      {isModalOpen && (
        <Modal
          onClose={() => setIsModalOpen(false)}
          title={currentPermission ? "Edit Permission" : "Add Permission"}
        >
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Permission Name"
              className="w-full p-2 border rounded"
              value={currentPermission ? currentPermission.name : ""}
              onChange={(e) =>
                setCurrentPermission({
                  ...currentPermission,
                  name: e.target.value,
                })
              }
            />
            <button
              className="bg-green-500 text-white px-4 py-2 rounded"
              type="submit"
            >
              {currentPermission ? "Update Permission" : "Add Permission"}
            </button>
          </form>
        </Modal>
      )}
    </div>
  );
};

export default PermissionManagement;
