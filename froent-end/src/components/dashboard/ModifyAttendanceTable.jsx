/* eslint-disable react/prop-types */ 
import { useState } from "react";
import { FaSearch } from "react-icons/fa"; 
import UpdateAttendance from "./UpdateAttendance";

const ModifyAttendanceTable = ({ attendances }) => { 
  //   const location = useLocation();
  //   const userId = location.pathname.split("/")[2];
  const [query, setQuery] = useState("");
  const [update, setUpdate] = useState(false);
  const [updateId, setUpdateId] = useState(null);
  const [updateValues, setUpdateValues] = useState(null);

  // Filter students based on the query
  const filteredStudents = attendances?.filter((student) =>
    student.studentName.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="overflow-x-auto">
      {/* form for update here open when the condition is true */}
      {update && (
        <UpdateAttendance
          updateId={updateId}
          updateValues={updateValues}
          setUpdateValues={setUpdateValues}
        />
      )}
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
            <th className="px-4 py-2"> Student Name</th>
            <th className="px-4 py-2"> Roll Number</th>
            <th className="px-4 py-2"> Subject</th>
            <th className="px-4 py-2"> Professor</th>
            <th className="px-4 py-2"> Status</th>
            <th className="px-4 py-2"> Date</th>
            <th className="px-4 py-2"> Action</th>
          </tr>
        </thead>
        <tbody>
          {filteredStudents.length === 0 ? (
            <tr>
              <td className="border px-4 py-2" colSpan="3">
                No matching students found in the database.
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
                  <td className="border px-4 py-2">{student.studentName}</td>
                  <td className="border px-4 py-2">{student.rollNumber}</td>
                  <td className="border px-4 py-2">{student.subject}</td>
                  <td className="border px-4 py-2">{student?.professorName}</td>
                  <td className="border px-4 py-2">{student?.status}</td>
                  <td className="border px-4 py-2">
                    {new Date(student.timestamps).toLocaleDateString(
                      undefined,
                      {
                        year: "numeric",
                        month: "numeric",
                        day: "numeric",
                      }
                    )}
                  </td>
                  <td className="border px-4 py-2">
                    <button
                      onClick={() => {
                        setUpdate(true);
                        setUpdateId(student.id);
                        setUpdateValues(student);
                      }}
                      className="bg-green-600 p-2 rounded text-white"
                    >
                      Update
                    </button>
                  </td>
                </tr>
              ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ModifyAttendanceTable;
