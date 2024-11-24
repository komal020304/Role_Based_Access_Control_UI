// src/components/Table.js
import React from "react";

const Table = ({ data, columns }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
        <thead>
          <tr>
            {columns.map((col) => (
              <th
                key={col}
                className="py-2 px-4 bg-gray-100 font-semibold text-gray-700 text-left"
              >
                {col.toUpperCase()}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((item, idx) => (
            <tr
              key={idx}
              className="border-b transition duration-200 hover:bg-gray-100"
            >
              {columns.map((col) => (
                <td key={col} className="py-2 px-4">
                  {item[col]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
