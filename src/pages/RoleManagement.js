// src/pages/RoleManagement.js
import React, { useState } from "react";
import Modal from "../components/Modal";
import Table from "../components/Table";

const RoleManagement = () => {
  const [roles, setRoles] = useState([
    { id: 1, name: "Admin", permissions: ["Read", "Write", "Delete"] },
    { id: 2, name: "Editor", permissions: ["Read", "Write"] },
    { id: 3, name: "Viewer", permissions: ["Read"] },
  ]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentRole, setCurrentRole] = useState(null);

  const handleEdit = (role) => {
    setCurrentRole(role);
    setIsModalOpen(true);
  };

  const handleDelete = (roleId) => {
    setRoles(roles.filter((role) => role.id !== roleId));
  };

  const columns = [
    { name: "Role Name", key: "name" },
    { name: "Permissions", key: "permissions" },
    { name: "Actions", key: "actions" },
  ];

  return (
    <div className="role-management p-4">
      <h2 className="text-2xl font-bold mb-4">Role Management</h2>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded mb-4"
        onClick={() => setIsModalOpen(true)}
      >
        Add Role
      </button>
      <Table
        data={roles}
        columns={columns}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
      {isModalOpen && (
        <Modal
          onClose={() => setIsModalOpen(false)}
          title={currentRole ? "Edit Role" : "Add Role"}
        >
          {/* Role form content here */}
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Role Name"
              className="w-full p-2 border rounded"
              value={currentRole ? currentRole.name : ""}
              onChange={(e) =>
                setCurrentRole({ ...currentRole, name: e.target.value })
              }
            />
            <label>Permissions:</label>
            <div className="space-y-2">
              {["Read", "Write", "Delete"].map((permission) => (
                <label key={permission} className="inline-flex items-center">
                  <input
                    type="checkbox"
                    checked={
                      currentRole?.permissions?.includes(permission) || false
                    }
                    onChange={(e) => {
                      const updatedPermissions = e.target.checked
                        ? [...(currentRole.permissions || []), permission]
                        : currentRole.permissions.filter(
                            (perm) => perm !== permission
                          );
                      setCurrentRole({
                        ...currentRole,
                        permissions: updatedPermissions,
                      });
                    }}
                  />
                  <span className="ml-2">{permission}</span>
                </label>
              ))}
            </div>
            <button
              className="bg-green-500 text-white px-4 py-2 rounded"
              type="submit"
            >
              {currentRole ? "Update Role" : "Add Role"}
            </button>
          </form>
        </Modal>
      )}
    </div>
  );
};

export default RoleManagement;
