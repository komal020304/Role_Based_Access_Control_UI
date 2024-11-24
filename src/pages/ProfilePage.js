// src/pages/ProfilePage.js
import React, { useState } from "react";

const ProfilePage = () => {
  const [profile, setProfile] = useState({
    name: "John Doe",
    email: "johndoe@example.com",
    role: "Admin",
  });
  const [password, setPassword] = useState("");

  const handlePasswordUpdate = () => {
    // Handle password update logic here
  };

  return (
    <div className="profile-page p-4">
      <h2 className="text-2xl font-bold mb-4">Profile</h2>

      <div className="bg-white shadow-md p-4 rounded-lg mb-4">
        <h3 className="font-semibold text-lg mb-2">User Details</h3>
        <p>
          <strong>Name:</strong> {profile.name}
        </p>
        <p>
          <strong>Email:</strong> {profile.email}
        </p>
        <p>
          <strong>Role:</strong> {profile.role}
        </p>
      </div>

      <div className="bg-white shadow-md p-4 rounded-lg mb-4">
        <h3 className="font-semibold text-lg mb-2">Update Password</h3>
        <input
          type="password"
          placeholder="New Password"
          className="w-full p-2 border rounded mb-2"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={handlePasswordUpdate}
        >
          Update Password
        </button>
      </div>
    </div>
  );
};

export default ProfilePage;
