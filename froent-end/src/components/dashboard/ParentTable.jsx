/* eslint-disable react/prop-types */

import { useState } from "react";
import { FaSearch } from "react-icons/fa";

const ParentInfoTable = ({ parents }) => {
  const [query, setQuery] = useState("");

  // Filter parents based on the query
  const filteredParents = parents.filter(
    (x) =>
      x.FirstName.toLowerCase().includes(query.toLowerCase()) ||
      x.LastName.toLowerCase().includes(query.toLowerCase())
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
            <th className="px-4 py-2">{"Student's"} Name</th>
            <th className="px-4 py-2">{"Parent's"} Name</th>
            <th className="px-4 py-2">{"Parent's"} Phone Number</th>
            <th className="px-4 py-2">{"Parent's"} Email</th>
            <th className="px-4 py-2">{"Parent's"} Address</th>
          </tr>
        </thead>
        <tbody>
          {filteredParents.length === 0 ? (
            <tr>
              <td className="border px-4 py-2" colSpan="5">
                No matching students found in the database.
              </td>
            </tr>
          ) : (
            filteredParents.map((parent, index) => (
              <tr
                key={index}
                className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}
              >
                <td className="border px-4 py-2">
                  {parent.FirstName}&nbsp;{parent.LastName}
                </td>
                <td className="border px-4 py-2">{parent.GuardianName}</td>
                <td className="border px-4 py-2">{parent.GuardianNumber}</td>
                <td className="border px-4 py-2 hover:underline hover:text-blue-600">
                  <a href={`mailto:${parent.Email}`}>
                    <span className="">{parent.Email}</span>
                  </a>
                </td>
                <td className="border px-4 py-2">{parent.GuardianAddress}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ParentInfoTable;
