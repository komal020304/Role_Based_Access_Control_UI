// src/components/Modal.js
import React from "react";
import { FaTimes } from "react-icons/fa";

const Modal = ({ title, children, onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-lg shadow-lg w-11/12 sm:w-3/4 md:w-1/2 lg:w-1/3 p-4 transform transition-transform duration-300 scale-100">
        <div className="flex justify-between items-center border-b pb-2 mb-4">
          <h3 className="text-xl font-semibold">{title}</h3>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-red-600"
          >
            <FaTimes size={20} />
          </button>
        </div>
        {children}
      </div>
    </div>
  );
};

export default Modal;
