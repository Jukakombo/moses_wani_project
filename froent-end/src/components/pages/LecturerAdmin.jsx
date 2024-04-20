/* eslint-disable react/prop-types */

import { MdAdminPanelSettings } from "react-icons/md"; 
import { Link, Outlet } from "react-router-dom";
import { TbLogout } from "react-icons/tb";
import { MdEdit } from "react-icons/md";
import { FaList, FaUserGraduate } from "react-icons/fa";
import { GiTeacher } from "react-icons/gi";
import { useEffect, useState } from "react";
import axios from "axios";
const LecturerAdmin = () => {
  const [auth, setAuth] = useState(false);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  // grtting the numbers
  const [users, setUsers] = useState([]);
  const [students, setStudents] = useState([]);
  const [lecturer, setLecturer] = useState([]);

  // numbers of admin
  useEffect(() => {
    const fetchAllUsers = async () => {
      try {
        const res = await axios.get("http://localhost:9000/users");
        setUsers(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchAllUsers();
  }, []);
  // numners of students
  useEffect(() => {
    const fetchingAllTheStudents = async () => {
      try {
        const res = await axios.get("http://localhost:9000/students");
        setStudents(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchingAllTheStudents();
  }, []);
  // numbers lecturere
  useEffect(() => {
    const fetchingAllTheStudents = async () => {
      try {
        const res = await axios.get("http://localhost:9000/signup");
        setLecturer(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchingAllTheStudents();
  }, []);

  axios.defaults.withCredentials = true;
  useEffect(() => {
    axios.get("http://localhost:4000/users/signIn").then((res) => {
      if (res.data.Status === "success") {
        setAuth(true);
        setName(res.data.name);
      } else {
        setAuth(false);
        setMessage(res.data.Message);
      }
    });
  }, []);

  // logout
  const handleLogout = () => {
    axios
      .get("http://localhost:9000/logout")
      .then((res) => {
        if (res.data.Status === "success") {
          location.reload(true);
        } else {
          alert("Error");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      {auth ? (
        <div className="bg-[#2C3E50] py-24 h-full flex flex-col justify-between">
          <div className="flex justify-between w-11/12 m-auto items-between text-white">
            <h1 className="font-bold text-2xl">
              Welcome {" professor "}
              <span className="text-[#fd4fb8]">{name}</span> Glad to see you
              continue with your nice work
            </h1>
            <div
              className="flex items-center rounded-md admin_btn p-2 bg-[#2d2b42] hover:bg-blue-600"
              onClick={handleLogout}
            >
              <TbLogout className="cursor-pointer" size={30} />
              <button onClick={handleLogout} className=" text-white rounded">
                <span>Logout</span>
              </button>
              &nbsp;
            </div>
          </div>
          <div className="flex  justify-between   w-11/12 m-auto py-8 ">
            <div className="bg-[#16405c] border-2 border-white flex-[30%] flex-col justify-between p-4">
              {/* take attendance */}
              <Link to="take-attendance">
                <div className="functions">
                  <div className="p-2 bg-[#2D2B42]  m-4 text-white rounded cursor-pointer admin_hover flex items-center">
                    <MdEdit size={30} />
                    <p className="ml-4">Take Attendance</p>{" "}
                  </div>
                </div>
              </Link>

              {/* view Attendence */}
              <Link to="view-attendance">
                <div className="functions">
                  <div className="p-2 bg-[#2D2B42]  m-4 text-white rounded cursor-pointer admin_hover flex items-center">
                    <FaList size={30} />
                    <p className="ml-4">View Attendance</p>{" "}
                  </div>
                </div>
              </Link>

              {/*logout  */}
              <div
                onClick={handleLogout}
                className="text-white functions cursor-pointer    rounded-md admin_btn p-2 mx-4 hover:bg-blue-600 flex items-center bg-[#2d2b42]"
                // onClick={() => {}}
              >
                &nbsp;
                <TbLogout className="mr-4" size={30} />
                <button className="rounded">Logout</button>
              </div>
            </div>

            <div className="main_bar px-4  flex-[70%] bg-white py-4">
              <div className="grid grid-cols-3 gap-8 bg-[#2d2b42] rounded-lg text-white p-2 mb-4">
                {/* <div className="flex flex-col items-center cursor-pointer">
                  <div className="">
                    <BiMaleFemale size={30} />
                  </div>
                  <h1 className="font-bold">Female Students</h1>
                  <h1>12</h1>
                </div> */}
                <div className="cursor-pointer flex flex-col items-center bg-[#16405c] border py-4">
                  <div className="">
                    <FaUserGraduate size={30} />
                  </div>
                  <h1 className="font-bold">Students</h1>
                  <h1>{students?.length}</h1>
                </div>
                <div className="cursor-pointer flex flex-col items-center bg-[#16405c] border py-4">
                  <div className="">
                    <GiTeacher size={30} />
                  </div>
                  <h1 className="font-bold">Lecturer</h1>
                  <h1>{lecturer?.length}</h1>
                </div>
                <div className="cursor-pointer flex flex-col items-center bg-[#16405c] border py-4">
                  <div className="">
                    <MdAdminPanelSettings size={30} />
                  </div>
                  <h1 className="font-bold">Admin</h1>
                  <h1>{users?.length}</h1>
                </div>
              </div>
              <Outlet />
            </div>
          </div>
        </div>
      ) : (
        <div>
          <div className="flex justify-center h-screen">
            <div className="flex bg-white  rounded-md flex-col w-[500px] m-auto border p-2">
              <div className="">
                <p className="italic py-4 text-red-600 text-xl text-center">
                  {message}{" "}
                </p>
              </div>
              <Link
                to="/prof-login-portal"
                className="text-white font-bold bg-blue-600 p-2 rounded-md w-full text-center hover:bg-blue-800"
              >
                Login
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LecturerAdmin;
