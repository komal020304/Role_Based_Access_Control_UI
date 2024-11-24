// // src/pages/UserManagement.js
// import React, { useState, useEffect } from "react";
// import { getUsers } from "../services/api";
// import Table from "../components/Table";
// import Button from "../components/Button";
// import Modal from "../components/Modal";

// const UserManagement = () => {
//   const [users, setUsers] = useState([]);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [selectedUser, setSelectedUser] = useState(null);

//   useEffect(() => {
//     loadUsers();
//   }, []);

//   const loadUsers = async () => {
//     const fetchedUsers = await getUsers();
//     setUsers(fetchedUsers);
//   };

//   const handleEditUser = (user) => {
//     setSelectedUser(user);
//     setIsModalOpen(true);
//   };

//   const handleDeleteUser = (userId) => {
//     if (window.confirm("Are you sure you want to delete this user?")) {
//       // Implement delete function
//       setUsers(users.filter((user) => user.id !== userId));
//     }
//   };

//   return (
//     <div className="user-management">
//       <h1 className="text-3xl font-bold mb-6">User Management</h1>

//       {/* Search & Filter */}
//       <div className="p-4 mb-6 bg-white rounded shadow-md">
//         <input
//           type="text"
//           placeholder="Search users..."
//           className="p-2 border rounded w-full mb-4"
//         />
//         <Button onClick={() => setIsModalOpen(true)}>Add New User</Button>
//       </div>

//       {/* User Table */}
//       <Table
//         data={users}
//         columns={["name", "email", "role"]}
//         actions={[
//           { label: "Edit", action: handleEditUser },
//           { label: "Delete", action: handleDeleteUser, danger: true },
//         ]}
//       />

//       {/* Edit Modal */}
//       {isModalOpen && (
//         <Modal onClose={() => setIsModalOpen(false)} title="Edit User">
//           {/* User Edit Form Here */}
//         </Modal>
//       )}
//     </div>
//   );
// };

// export default UserManagement;

// src/pages/UserManagement.js
import React, { useState, useEffect } from "react";
import { getUsers } from "../services/api";
import Table from "../components/Table";
import Button from "../components/Button";
import Modal from "../components/Modal";

const UserManagement = () => {
  const [users, setUsers] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const fetchedUsers = await getUsers();
    setUsers(fetchedUsers);
  };

  return (
    <div className="user-management p-4">
      <h1 className="text-4xl font-bold mb-8">User Management</h1>

      {/* Search & Filter */}
      <div className="p-4 mb-6 bg-white rounded-lg shadow-md flex items-center justify-between">
        <input
          type="text"
          placeholder="Search users..."
          className="p-2 border rounded w-1/2"
        />
        <Button onClick={() => setIsModalOpen(true)}>Add New User</Button>
      </div>

      {/* User Table with Hover Effect */}
      <Table
        data={users}
        columns={["name", "email", "role"]}
        rowStyle="hover:bg-gray-100 transition duration-150"
      />

      {/* Modal for Edit User */}
      {isModalOpen && (
        <Modal onClose={() => setIsModalOpen(false)} title="Add / Edit User">
          {/* User Edit Form Here */}
        </Modal>
      )}
    </div>
  );
};

export default UserManagement;
