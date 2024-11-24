// src/components/Button.js
import React from "react";
import classNames from "classnames";

const Button = ({ children, onClick, isLoading, disabled, className }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled || isLoading}
      className={classNames(
        "px-4 py-2 rounded transition duration-200",
        "text-white bg-blue-600 hover:bg-blue-700",
        "shadow hover:shadow-lg active:scale-95",
        disabled ? "bg-gray-400 cursor-not-allowed" : "cursor-pointer",
        isLoading && "opacity-70",
        className
      )}
    >
      {isLoading ? <span className="loader"></span> : children}
    </button>
  );
};

export default Button;
