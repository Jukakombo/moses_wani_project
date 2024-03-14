/* eslint-disable react/prop-types */
import React from "react";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";

const TrackingTable = ({ trackings }) => {
  const [query, setQuery] = useState("");

  // Filter trackings based on the query
  const filteredtrackings = trackings.filter((x) =>
    x.CourseCode.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="overflow-x-auto">
      <div className="w-full flex items-center px- bg-[#f5F5F5] my-2">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full rounded-md p-2 bg-gray-300 outline-blue-600"
          placeholder="Search... by Name"
        />
        <FaSearch size={30} className="ml-2 text-blue-600" />
      </div>
      <table className="table-auto w-full border-collapse border border-gray-200">
        <thead>
          <tr className="bg-gray-100 text-left">
            <th className="px-4 py-2"> Course Code</th>
            <th className="px-4 py-2"> Issue</th>
            <th className="px-4 py-2"> Description</th>
            <th className="px-4 py-2"> Status</th>
          </tr>
        </thead>
        <tbody>
          {filteredtrackings.length === 0 ? (
            <tr>
              <td className="border px-4 py-2" colSpan="5">
                No matching track found in the database.
              </td>
            </tr>
          ) : (
            filteredtrackings.map((parent, index) => (
              <tr
                key={index}
                className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}
              >
                <td className="border px-4 py-2">{parent?.CourseCode}</td>
                <td className="border px-4 py-2">{parent?.Issue}</td>
                <td className="border px-4 py-2">{parent?.Description}</td>

                <td className="border px-4 py-2">{parent?.Status}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default TrackingTable;
