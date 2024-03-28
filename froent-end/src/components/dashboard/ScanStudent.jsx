import axios from "axios";
import React, { useEffect, useState } from "react";

const ScanStudent = () => {
  const [studentInfo, setStudentInfo] = useState([]);
  const [query, setQuery] = useState("");
  const [userInfo, setUserInfo] = useState(null);
  const [searched, setSearched] = useState(false);

  useEffect(() => {
    const fetchAllStudents = async () => {
      try {
        const res = await axios.get("http://localhost:9000/students");
        setStudentInfo(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchAllStudents();
  }, []);

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSearch = () => {
    const user = searchStudentInDB(parseInt(query, 10));

    if (user) {
      setUserInfo(user);
    } else {
      setUserInfo(null);
    }
    setSearched(true); // Set searched to true when the search button is clicked
  };

  const searchStudentInDB = (query) => {
    const user = studentInfo.find((user) => user.RegNumber === query);
    return user;
  };

  return (
    <div className="bg-[#2D2B42] p-2 rounded-md ">
      <div className="w-7/12 m-auto pb-2 flex items-center">
        <div className="m-auto flex items-center">
          <input
            type="number"
            placeholder="Enter Index No..."
            className="p-2 outline-none w-full"
            value={query}
            onChange={handleInputChange}
          />
          <button
            onClick={handleSearch}
            className="bg-blue-900 text-white p-2 ml-4 w-[100px]"
          >
            Scan
          </button>
        </div>
      </div>
      {/* Display scanned student data if available */}
      {userInfo && (
        <div className="grid grid-cols-5 gap-5 border-2 border-white mb-4">
          <div className="col-span-1 border-2 border-white p-2">
            <h1 className="text-white font-bold bg-blue-950 p-2 mb-2 border">
              Present
            </h1>
            {userInfo.profilePicture && (
              <img
                className="rounded-md border "
                src={`http://localhost:9000/images/${userInfo.profilePicture}`}
                alt={`${userInfo?.FirstName} Photo`}
              />
            )}
          </div>
          <div className="col-span-3 bg-green-100 border-2 text-black border-white text-center">
            <h1 className="font-bold py-4 text-2xl">
              {userInfo.FirstName} &nbsp;
              {userInfo.LastName}
            </h1>
            <h1 className="font-bold py-4">{userInfo.Department}</h1>
            <h1 className="font-bold py-4">{userInfo.Faculty}</h1>
            <h1 className="font-bold py-4">{userInfo.RegNumber}</h1>
            <h1 className="font-bold py-4">{userInfo.Level} &nbsp; Level</h1>
          </div>
          <div className="col-span-1 bg-[#16405c] text-white pt-2 border-2 border-white">
            <div className="flex flex-col text-center pt-4">
              <h1 className="font-bold">On Leave</h1>
              <p>{userInfo.Onleave}</p>
            </div>
            <div className="flex flex-col text-center py-4">
              <h1 className="font-bold">On Suspension</h1>
              <p>{userInfo.Onsuspension}</p>
            </div>
            <div className="flex flex-col text-center pb-4">
              <h1 className="font-bold">Expelled</h1>
              <p>{userInfo.Expelled}</p>
            </div>
          </div>
        </div>
      )}
      {/* Display "No matching student found" message only if search has been performed and no matching student found */}
      {searched && !userInfo && (
        <div className="text-center text-white">
          No Registration Number Match the Student.
        </div>
      )}
    </div>
  );
};

export default ScanStudent;
