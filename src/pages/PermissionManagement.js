// // src/pages/PermissionManagement.js
// import React, { useState } from "react";
// import { getPermissions } from "../services/api";
// import Button from "../components/Button";
// import Modal from "../components/Modal";

// const PermissionManagement = () => {
//   const [permissions, setPermissions] = useState([
//     { id: 1, name: "Read", description: "Can read data" },
//     { id: 2, name: "Write", description: "Can write data" },
//     { id: 3, name: "Delete", description: "Can delete data" },
//   ]);
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   return (
//     <div className="permission-management">
//       <h1 className="text-3xl font-bold mb-6">Permission Management</h1>

//       {/* Permission List */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
//         {permissions.map((permission) => (
//           <div
//             key={permission.id}
//             className="p-4 bg-white rounded shadow-md transition duration-200 hover:bg-blue-50"
//           >
//             <h2 className="text-xl font-semibold">{permission.name}</h2>
//             <p className="text-gray-600">{permission.description}</p>
//           </div>
//         ))}
//       </div>

//       <Button onClick={() => setIsModalOpen(true)}>Add New Permission</Button>

//       {/* Add Permission Modal */}
//       {isModalOpen && (
//         <Modal onClose={() => setIsModalOpen(false)} title="Add Permission">
//           {/* Permission Add Form Here */}
//         </Modal>
//       )}
//     </div>
//   );
// };

// export default PermissionManagement;

// src/pages/PermissionManagement.js
import React, { useState } from "react";
import Button from "../components/Button";
import Modal from "../components/Modal";

const PermissionManagement = () => {
  const [permissions, setPermissions] = useState([
    { id: 1, name: "Read", description: "Can read data" },
    { id: 2, name: "Write", description: "Can write data" },
    { id: 3, name: "Delete", description: "Can delete data" },
  ]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="permission-management p-4">
      <h1 className="text-4xl font-bold mb-8">Permission Management</h1>

      {/* Permission List with Badges */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {permissions.map((permission) => (
          <div
            key={permission.id}
            className="p-4 bg-purple-100 rounded shadow-md transition duration-200 hover:bg-purple-200"
          >
            <h2 className="text-xl font-semibold">{permission.name}</h2>
            <p className="text-gray-600">{permission.description}</p>
          </div>
        ))}
      </div>

      <Button onClick={() => setIsModalOpen(true)}>Add New Permission</Button>

      {/* Modal for Add / Edit Permission */}
      {isModalOpen && (
        <Modal
          onClose={() => setIsModalOpen(false)}
          title="Add / Edit Permission"
        >
          {/* Permission Form Here */}
        </Modal>
      )}
    </div>
  );
};

export default PermissionManagement;
