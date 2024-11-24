// // src/pages/ProfilePage.js
// import React from "react";

// const ProfilePage = () => {
//   return (
//     <div>
//       <h1 className="text-3xl font-bold mb-6">Profile</h1>
//       <p>Your profile details would go here.</p>
//     </div>
//   );
// };

// export default ProfilePage;

// src/pages/ProfilePage.js
import React, { useState } from "react";
import Button from "../components/Button";

const ProfilePage = () => {
  const [profile, setProfile] = useState({
    name: "John Doe",
    email: "john.doe@example.com",
  });

  const handleSave = () => {
    // Handle save logic here
    alert("Profile saved");
  };

  return (
    <div className="profile-page p-4">
      <h1 className="text-4xl font-bold mb-8">Profile</h1>

      <div className="max-w-md mx-auto">
        <img
          src="https://via.placeholder.com/100"
          alt="Profile"
          className="rounded-full mx-auto mb-4"
        />
        <h2 className="text-2xl font-semibold text-center">{profile.name}</h2>

        <div className="mt-6">
          <label className="block mb-2 font-semibold">Name</label>
          <input
            type="text"
            value={profile.name}
            className="border p-2 rounded w-full mb-4"
          />

          <label className="block mb-2 font-semibold">Email</label>
          <input
            type="email"
            value={profile.email}
            className="border p-2 rounded w-full mb-4"
          />

          <Button onClick={handleSave} className="w-full">
            Save Changes
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
