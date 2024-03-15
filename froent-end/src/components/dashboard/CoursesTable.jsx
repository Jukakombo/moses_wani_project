/* eslint-disable react/prop-types */
import React from "react";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";

const CourseTable = ({ courses }) => {
  const [query, setQuery] = useState("");

  // Filter trackings based on the query
  const filteredtrackings = courses.filter((x) =>
    x.RegNo.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="overflow-x-scroll  ">
      <div className="w-full flex items-center px- bg-[#f5F5F5] my-2">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full rounded-md p-2 bg-gray-300 outline-blue-600"
          placeholder="Search... by RegNo"
        />
        <FaSearch size={30} className="ml-2 text-blue-600" />
      </div>
      <table className="table-auto w-full border-collapse border border-gray-200 overflow-x-scroll">
        <thead>
          <tr className="bg-gray-100 text-left">
            <th className="px-4 py-2"> Reg No</th>
            <th className="px-4 py-2"> First Name</th>
            <th className="px-4 py-2"> Last Name</th>
            <th className="px-4 py-2"> Course 1</th>
            <th className="px-4 py-2"> Course 2</th>
            <th className="px-4 py-2"> Course 3</th>
            <th className="px-4 py-2"> Course 4</th>
            <th className="px-4 py-2"> Course 5</th>
            <th className="px-4 py-2"> Course 6</th>
            <th className="px-4 py-2"> Course 7</th>
            <th className="px-4 py-2"> Course 8</th>
            <th className="px-4 py-2"> Course 9</th>
            <th className="px-4 py-2"> Course 10</th>
          </tr>
        </thead>
        <tbody>
          {filteredtrackings.length === 0 ? (
            <tr>
              <td className="border px-4 py-2" colSpan="5">
                No matching course found in the database.
              </td>
            </tr>
          ) : (
            filteredtrackings.map((course, index) => (
              <tr
                key={index}
                className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}
              >
                <td className="border px-4 py-2">{course?.RegNo}</td>
                <td className="border px-4 py-2">{course?.FirstName}</td>
                <td className="border px-4 py-2">{course?.LastName}</td>
                <td className="border px-4 py-2">{course?.Course1}</td>
                <td className="border px-4 py-2">{course?.Course2}</td>
                <td className="border px-4 py-2">{course?.Course3}</td>
                <td className="border px-4 py-2">{course?.Course4}</td>
                <td className="border px-4 py-2">{course?.Course5}</td>
                <td className="border px-4 py-2">{course?.Course6}</td>
                <td className="border px-4 py-2">{course?.Course7}</td>
                <td className="border px-4 py-2">{course?.Course8}</td>
                <td className="border px-4 py-2">{course?.Course9}</td>
                <td className="border px-4 py-2">{course?.Course10}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default CourseTable;
