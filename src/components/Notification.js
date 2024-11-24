// src/components/Notification.js
import React, { useState, useEffect } from "react";

const Notification = ({ message, type = "info", duration = 3000 }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), duration);
    return () => clearTimeout(timer);
  }, [duration]);

  if (!visible) return null;

  const bgColor =
    type === "success"
      ? "bg-green-500"
      : type === "error"
      ? "bg-red-500"
      : "bg-blue-500";

  return (
    <div
      className={`fixed top-4 right-4 px-4 py-2 text-white ${bgColor} rounded`}
    >
      {message}
    </div>
  );
};

export default Notification;
