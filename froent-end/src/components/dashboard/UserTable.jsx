/* eslint-disable react/prop-types */
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
const UserTable = ({ users }) => {
  const [query, setQuery] = useState("");

//   Filter users based on the query
  const filteredStudents = users?.filter((user) =>
    user.name.toLowerCase().includes(query.toLowerCase())
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
          <tr className="bg-gray-100 text-left text-xs">
            <th className="px-4 py-2"> Course</th>
            <th className="px-4 py-2"> Course Code</th>
            <th className="px-4 py-2"> Department</th>
            <th className="px-4 py-2"> Level</th>
            <th className="px-4 py-2"> Student Name</th>
            <th className="px-4 py-2"> Email</th>
            <th className="px-4 py-2"> Password</th>
            <th className="px-4 py-2"> Mobile</th>
            <th className="px-4 py-2"> Status</th>
          </tr>
        </thead>
        <tbody>
          {filteredStudents.length === 0 ? (
            <tr>
              <td className="border px-4 py-2" colSpan="3">
                No matching user found in the database.
              </td>
            </tr>
          ) : (
            filteredStudents
              .slice(0)
              .reverse()
              .map((student, index) => (
                <tr
                  key={index}
                  className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}
                >
                  <td className="border px-4 py-2">{student?.course}</td>
                  <td className="border px-4 py-2">{student?.courseCode}</td>
                  <td className="border px-4 py-2">{student?.department}</td>
                  <td className="border px-4 py-2">{student?.level}</td>
                  <td className="border px-4 py-2">
                    {student?.name}&nbsp;{student?.lastName}
                  </td>
                  <td className="border px-4 py-2">{student.email}</td>
                  <td className="border px-4 py-2">{student.password}</td>
                  <td className="border px-4 py-2">{student?.mobile}</td>
                  <td className="border px-4 py-2">{student?.status}</td>
                  {/* <td className="border px-4 py-2">
                    {new Date(student.timestamps).toLocaleDateString(
                      undefined,
                      {
                        year: "numeric",
                        month: "numeric",
                        day: "numeric",
                      }
                    )}
                  </td> */}
                </tr>
              ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
