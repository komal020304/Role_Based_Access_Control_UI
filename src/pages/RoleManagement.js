// // src/pages/RoleManagement.js
// import React, { useState, useEffect } from "react";
// import { getRoles } from "../services/api";
// import Button from "../components/Button";
// import Modal from "../components/Modal";

// const RoleManagement = () => {
//   const [roles, setRoles] = useState([]);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [selectedRole, setSelectedRole] = useState(null);

//   useEffect(() => {
//     loadRoles();
//   }, []);

//   const loadRoles = async () => {
//     const fetchedRoles = await getRoles();
//     setRoles(fetchedRoles);
//   };

//   const handleEditRole = (role) => {
//     setSelectedRole(role);
//     setIsModalOpen(true);
//   };

//   return (
//     <div className="role-management">
//       <h1 className="text-3xl font-bold mb-6">Role Management</h1>

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
//         {roles.map((role) => (
//           <div
//             key={role.id}
//             className="p-4 bg-white rounded shadow-md transition duration-200 hover:bg-blue-50 cursor-pointer"
//             onClick={() => handleEditRole(role)}
//           >
//             <h2 className="text-xl font-semibold">{role.name}</h2>
//             <p className="text-gray-600">{role.description}</p>
//           </div>
//         ))}
//       </div>

//       <Button onClick={() => setIsModalOpen(true)}>Add New Role</Button>

//       {/* Edit Modal */}
//       {isModalOpen && (
//         <Modal onClose={() => setIsModalOpen(false)} title="Edit Role">
//           {/* Role Edit Form Here */}
//         </Modal>
//       )}
//     </div>
//   );
// };

// export default RoleManagement;

// src/pages/RoleManagement.js
import React, { useState, useEffect } from "react";
import { getRoles } from "../services/api";
import Button from "../components/Button";
import Modal from "../components/Modal";

const RoleManagement = () => {
  const [roles, setRoles] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    loadRoles();
  }, []);

  const loadRoles = async () => {
    const fetchedRoles = await getRoles();
    setRoles(fetchedRoles);
  };

  return (
    <div className="role-management p-4">
      <h1 className="text-4xl font-bold mb-8">Role Management</h1>

      {/* Role Cards with Color Indicators */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        {roles.map((role) => (
          <div
            key={role.id}
            className="p-4 rounded-lg shadow-md bg-blue-100 transition duration-200 hover:bg-blue-200 cursor-pointer"
            onClick={() => setIsModalOpen(true)}
          >
            <h2 className="text-xl font-semibold">{role.name}</h2>
            <p className="text-gray-600">{role.description}</p>
          </div>
        ))}
      </div>

      <Button onClick={() => setIsModalOpen(true)}>Add New Role</Button>

      {/* Modal for Add / Edit Role */}
      {isModalOpen && (
        <Modal onClose={() => setIsModalOpen(false)} title="Add / Edit Role">
          {/* Role Edit Form Here */}
        </Modal>
      )}
    </div>
  );
};

export default RoleManagement;
